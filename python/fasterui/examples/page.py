from .. import components as c

DETAILS = {
    "title": "Page",
    "description": "A demo button",
    "layout": "full-width",
}

COMPONENT = c.Page(
    sidebar=c.FlexBox(
        dir="vertical",
        children=[
            c.NavigationButton(icon="UserIcon", label="Users", is_active=True),
            c.NavigationButton(icon="QrCodeIcon", label="Groups"),
            c.NavigationSection(
                title="Events",
                children=[
                    c.NavigationButton(
                        icon="CalendarDaysIcon",
                        label="Upcoming",
                        href="#",
                    ),
                ],
            ),
        ],
    ),
    children=[
        c.FlexBox(
            dir="vertical",
            gap=6,
            children=[
                c.SectionHeader(
                    title="Page",
                    subtitle="A demo page",
                ),
                c.Table(
                    columns=[
                        "Name",
                        "Age",
                        "Country",
                    ],
                    data=[
                        ["Alice", "25", "USA"],
                        ["Bob", "30", "UK"],
                        ["Charlie", "35", "Czech Republic"],
                        ["David", "40", "Germany"],
                        ["Eve", "45", "France"],
                    ],
                ),
            ],
        )
    ],
)
