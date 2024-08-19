import { RenderPageFromAPI } from './RenderPageFromAPI'
import { RenderPageFromJSON } from './RenderPageFromJSON'



export default function App() {
  const componentData = (window as any).COMPONENT_DATA;

  return componentData
    ? <RenderPageFromJSON data={componentData} />
    : <RenderPageFromAPI />
}
