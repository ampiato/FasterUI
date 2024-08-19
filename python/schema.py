from __future__ import annotations

import json
import typing
from textwrap import dedent

from fastapi import FastAPI, Response

import fasterui.components as c


app = FastAPI()


class PrettyJSONResponse(Response):
    media_type = "application/json"

    def render(self, content: typing.Any) -> bytes:
        return json.dumps(
            content,
            ensure_ascii=False,
            allow_nan=False,
            indent=4,
            separators=(", ", ": "),
        ).encode("utf-8")


@app.get("/api/script.js")
async def script():
    page = make_devices_page()
    print(page)
    page_str = page.model_dump_json()
    script = f"window.COMPONENT_DATA = {page_str}"
    return Response(content=script)


@app.get("/api/devices_page.json", response_class=PrettyJSONResponse)
async def root() -> c.Component:
    return make_devices_page()


def make_page(content: c.Component) -> c.Component:
    return c.Page(
        sidebar=c.Sidebar(
            last_component_sticks_to_bottom=True,
            children=[
                c.NavigationSection(
                    children=[
                        c.NavigationButton(
                            label="Zařízení",
                            is_active=True,
                            icon="AdjustmentsHorizontalIcon",
                            href="zařízení",
                        ),
                        c.NavigationButton(
                            label="Rozúčtování", icon="ClipboardDocumentIcon", href="rozúčtování"
                        ),
                    ]
                ),
                c.NavigationSection(
                    title="Podpůrné služby",
                    children=[
                        c.NavigationButton(
                            label="Příprava nabídek", icon="FolderPlusIcon", href="příprava-nabídek"
                        ),
                        c.NavigationButton(
                            label="Automatická bidovací strategie", icon="SparklesIcon", href="automatická-bidovací-strategie"
                        ),
                    ],
                ),
                c.NavigationSection(
                    title="Příprava provozu",
                    children=[
                        c.NavigationButton(
                            label="Zařízení", icon="AdjustmentsHorizontalIcon", href="příprava-provozu-zařízení"
                        ),
                        c.NavigationButton(
                            label="Kontrakty", icon="DocumentChartBarIcon", href="příprava-provozu-kontrakty"
                        ),
                    ],
                ),
                c.NavigationSection(
                    title="Tržní data",
                    children=[
                        c.NavigationButton(
                            label="Krátkodobá elektřina", icon="BoltIcon", href="krátkodobá-elektřina"
                        ),
                        c.NavigationButton(
                            label="Dlouhodobá elektřina", icon="CalendarDaysIcon", href="dlouhodobá-elektřina"
                        ),
                        c.NavigationButton(label="PpS", icon="BellIcon", href="pps"),
                    ],
                ),
                c.NavigationButton(label="Nastavení", icon="Cog6ToothIcon", href="nastavení"),
            ],
        ),
        children=[content],
    )


def make_devices_page() -> c.Component:
    devices = [
        {"name": "Diesel agregát 1", "owner": "Jiří Novák", "service": "Enext"},
        {"name": "Diesel agregát 2", "owner": "Filip Matzner", "service": "Enext"},
        {"name": "Diesel agregát 3", "owner": "Kamil Gregůrek", "service": "Enext"},
        {"name": "Diesel agregát 4", "owner": "Lubomír Novák", "service": "Enext"},
        {"name": "Kogenerace 5", "owner": "Karel Svoboda", "service": "Enext"},
    ]
    return make_page(
        c.Grid(
            cols=1,
            gapY=6,
            children=[
                c.SectionHeader(title="Zařízení"),
                c.Grid(
                    cols=3,
                    gapY=4,
                    gapX=4,
                    children=[
                        c.PropertyCard(
                            title=d["name"],
                            condensed=True,
                            key_value_pairs=[
                                c.KeyValueString(key="Vlastník", value=d["owner"]),
                                c.KeyValueString(
                                    key="Provozovatel", value=d["service"]
                                ),
                            ],
                        )
                        for d in devices
                    ],
                ),
                c.SectionHeader(
                    title="Diesel agregát 1",
                    children=c.Button(label="Upravit veličiny"),
                ),
                c.Grid(
                    cols=2,
                    children=[
                        c.Markdown(
                            markdown=dedent(
                                """
                                Vlastník: **Jiří Novák**
                                Provozovatel: **Enext**
                                Typ: **Jenbacher JGC 620 GS-N.LC**
                                Elektrický výkon: **3 352 kW**
                                """
                            )
                        ),
                        c.Markdown(
                            markdown=dedent(
                                """
                                Přidáno: **1. 1. 2024**
                                Způsob rozúčtování: **Podle množství vyrobené elektřiny**
                                Marže obchodníka: **16%**
                                """
                            )
                        ),
                    ],
                ),
                c.SectionHeader(
                    title="Tržby",
                    subtitle="Stručný přehled rozúčtování zařízení. Podrobnější informace nalezneet v sekci Rozúčtování.",
                ),
                c.Table(
                    columns=["Měsíc", "Dostupnost", "Tržby", "Náklady", "Motohodiny"],
                    data=[
                        ["Leden", "90%", "1 563 234 Kč", "34 325 Kč", "43 hodin"],
                        ["Únor", "100%", "1 234 964 Kč", "76 325 Kč", "18 hodin"],
                        ["Březen", "100%", "1 234 964 Kč", "76 325 Kč", "18 hodin"],
                        ["Duben", "100%", "1 234 964 Kč", "76 325 Kč", "18 hodin"],
                        ["Květen", "100%", "1 234 964 Kč", "76 325 Kč", "18 hodin"],
                    ],
                ),
                c.SectionHeader(
                    title="Odstávky", children=c.Button(label="Zadat odstávku")
                ),
                c.Table(
                    columns=[
                        "Od - do",
                        "Typ",
                        "Velikost",
                        "Zadal",
                        "Odhad ušlých tržeb",
                    ],
                    data=[
                        [
                            "1. 1. 2024 00:42 - 1. 1. 2024 15:00",
                            "Výpadek",
                            "úplná odstávka",
                            "Tomáš Krejčí",
                            "43 323 Kč",
                        ],
                        [
                            "5. 2. 2024 00:00  - 6. 2. 2024 00:00",
                            "Údržba",
                            "2 MW",
                            "Jiří Novák",
                            "7 453 Kč",
                        ],
                    ],
                ),
            ],
        )
    )
