import { RenderPageFromAPI } from './RenderPageFromAPI'
import { RenderPageFromJSON } from './RenderPageFromJSON';
import "fasterui/style.css"

export const App = () => {
  const componentData = (window as any).COMPONENT_DATA;

  return componentData
    ? <RenderPageFromJSON data={componentData} />
    : <RenderPageFromAPI />
}
