import { createRoot } from "react-dom/client"
import { ComponentFromJSON } from "./gen"
import { Options, RenderComponentWraper } from "./RenderComponent"


export function render(divId: string, componentData: any, options: Options = {}) {
    const div = document.getElementById(divId)
    if (div === null) {
        throw new Error(`Element with id ${divId} not found`)
    }
    let root = createRoot(div)
    let component = ComponentFromJSON(componentData)
    root.render(<RenderComponentWraper c={component} options={options} />)
}