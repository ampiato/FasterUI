import { ComponentFromJSON } from "../../component-library/lib/gen"
import { RenderComponent } from "fasterui"

export const RenderPageFromJSON = (data: any): any => {
  const component = ComponentFromJSON(data.data)
  return <RenderComponent c={component} />
}
