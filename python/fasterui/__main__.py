import argparse
import json
from textwrap import dedent

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

import fasterui.components as c

from .__version__ import __version__


app = FastAPI(
    title="FasterUI",
    description="A framework for building beautiful UIs. Pronto!",
    version=__version__,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/simple.json")
async def simple() -> c.Component:
    return c.Component(
        c.FlexBox(
            dir="vertical",
            gap=4,
            children=[
                c.SectionHeader(title="FasterUI", subtitle="A framework for building beautiful UIs. Pronto!"),
                c.Markdown(
                    markdown=dedent("""
                ## Getting Started

                See our [documentation](https://ampiato-fasterui.netlify.app/).

                Have a look at various [components](https://ampiato-fasterui.netlify.app/storybook).
                
                Or check out our [GitHub](https://github.com/ampiato/FasterUI)

                """)
                ),
            ],
        )
    )


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
