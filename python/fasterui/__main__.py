import argparse
import json

import uvicorn
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

import fasterui.components as c

app = FastAPI()


@app.get("/dummy.json")
async def script() -> c.Component:
    raise Exception("This is a dummy endpoint")


def main():
    parser = argparse.ArgumentParser(description="FasterUI: A framework for building beautiful UIs. Pronto!")

    subparsers = parser.add_subparsers(help="sub-command help", dest="command")

    _ = subparsers.add_parser("server", help="Run FastAPI server")
    _ = subparsers.add_parser("generate", help="Generate openapi.json")

    args = parser.parse_args()

    if args.command == "server":
        print("Documentation is available at http://localhost:8000/docs")
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


if __name__ == "__main__":
    main()
