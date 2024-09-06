from .. import components as c

DETAILS = {
    "title": "Button",
    "description": "A simple button",
    "layout": "centered",
}

COMPONENT = c.Button("Click me!", action=c.Action.navigate_to("https://github.com/ampiato/FasterUI"))
