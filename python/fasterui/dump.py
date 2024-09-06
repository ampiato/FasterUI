import json
from dataclasses import asdict
from pathlib import Path

import jsonschema
from .components import Component


def dumps(component: Component, validate: bool = True) -> str:
    """
    Convert a Component to its JSON representation.

    If `validate` is `True`, validate the Component against the schema in
    `schema.json` before serializing it.

    Args:
        component: The Component to serialize.
        validate: Whether to validate the Component before serializing it.
            Defaults to `True`.

    Returns:
        The serialized Component as a JSON string.
    """

    component_data = asdict(component)
    with open(Path(__file__).parent / "schema.json") as f:
        schema = json.load(f)

    if validate:
        jsonschema.validate(instance=component_data, schema=schema)
    return json.dumps(component_data)
