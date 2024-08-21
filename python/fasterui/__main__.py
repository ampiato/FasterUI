import argparse
import json
from textwrap import dedent
from typing import Literal
from pathlib import Path

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from pydantic import TypeAdapter, BaseModel

import fasterui.components as c
from . import examples

from .__version__ import __version__


tags_metadata = [
    {
        "name": "examples",
        "description": "Examples of what you can do with **FasterUI**.",
    }
]


app = FastAPI(
    title="FasterUI",
    description="A framework for building beautiful UIs. Pronto!",
    version=__version__,
    contact={
        "name": "Tomáš Krejčí @ ampiato.com",
        "url": "https://ampiato.com",
        "email": "tomas.krejci@ampiato.com",
    },
    license_info={
        "name": "License: MIT",
        "identifier": "MIT",
    },
    openapi_tags=tags_metadata,
    openapi_url="/api/openapi.json",
    docs_url="/api/docs", 
    redoc_url=None
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/examples", tags=["examples"])
def list_of_examples() -> dict:
    """Get a list of examples."""
    res = []
    for e_name in dir(examples):
        if e_name.startswith("__"):
            continue
        e = getattr(examples, e_name)
        res.append({"id": e_name, **e.DETAILS})
    return {"examples": res}


@app.get("/api/examples/{id}/component.json", tags=["examples"], responses={200: {"model": c.Component}, 422: {"model": str}}, response_model_exclude_none=True)
def example(id: str) -> c.Component:
    if not hasattr(examples, id):
        raise HTTPException(status_code=404, detail="Example not found")
    e = getattr(examples, id)
    return e.COMPONENT


def main():
    parser = argparse.ArgumentParser(description="FasterUI: A framework for building beautiful UIs. Pronto!")

    subparsers = parser.add_subparsers(help="sub-command help", dest="command")

    _ = subparsers.add_parser("server", help="Run FastAPI server")
    _ = subparsers.add_parser("generate", help="Generate openapi.json")

    args = parser.parse_args()

    if args.command == "server":
        print("Documentation is available at http://localhost:8000/api/docs")
        uvicorn.run(app, host="0.0.0.0", port=8000)
    elif args.command == "generate":
        with open("openapi.json", "w") as f:
            json.dump(
                get_openapi(
                    title=app.title,
                    version=app.version,
                    openapi_version=app.openapi_version,
                    description=app.description,
                    routes=app.routes,
                    # openapi_prefix=app.openapi_prefix,
                ),
                f,
            )
        print("The file openapi.json was generated successfully.")

        schema = c.Component.schema_json(indent=2)
        with open("fasterui.jsonschema", "w") as f:
            f.write(schema)
        print("The file fasterui.jsonschema was generated successfully.")


if __name__ == "__main__":
    main()
