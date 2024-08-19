import { ComponentFromJSON } from "@/gen"
import { RenderComponent } from "@/RenderComponent"

export const RenderPageFromJSON = (data: any): any => {
  const component = ComponentFromJSON(data.data)
  return <RenderComponent c={component} />
}
