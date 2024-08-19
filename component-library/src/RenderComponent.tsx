
import { Button } from "./stories/Components/Button";
import { ButtonGroup } from "./stories/Components/ButtonGroup";
import { Component } from "./gen"
import { DatePicker } from "./stories/Components/DatePicker";
import { FlexBox } from "./stories/Components/FlexBox";
import { Grid } from "./stories/Components/Grid";
import { Icon } from "./stories/Components/Icon";
import { Markdown } from "./stories/Components/Markdown";
import { NavigationButton } from "./stories/Components/NavigationButton";
import { NavigationSection } from "./stories/Components/NavigationSection";
import { Page } from '@/stories/Layout/Page'
import { PropertyCard } from "./stories/Components/PropertyCard";
import { SectionHeader } from "./stories/Components/SectionHeader";
import { Sidebar } from "./stories/Layout";
import { Table } from "./stories/Components/Table";


interface Props {
  c: Component | Component[] | undefined
}
export const RenderComponent: React.FC<Props> = ({ c }) => {
  if (c === undefined) {
    return undefined
  }
  if (Array.isArray(c)) {
    return <>{c.map(c_item => <RenderComponent c={c_item} />)}</>
  }
  switch (c.componentType) {
    case "Button":
      return <Button {...c} />
    case "ButtonGroup":
      return <ButtonGroup {...c} />
    case "DatePicker":
      return <DatePicker {...c} />
    case "FlexBox":
      return <FlexBox {...c} />
    case "Grid":
      return <Grid {...c} />
    case "Icon":
      return <Icon {...c} />
    case "Markdown":
      return <Markdown {...c} />
    case "PropertyCard":
      return <PropertyCard {...c} />
    case "SectionHeader":
      return <SectionHeader {...c} />
    case "Table":
      return <Table {...c} />
    case "Sidebar":
      return <Sidebar {...c} />
    case "Page":
      return <Page {...c} />
    case "NavigationButton":
      return <NavigationButton {...c} />
    case "NavigationSection":
      return <NavigationSection {...c} />
  }

  // @ts-ignore
  throw new Error(`Unknown component type: ${c}`)
}
