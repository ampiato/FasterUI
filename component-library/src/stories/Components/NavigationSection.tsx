import { Component, NavigationSection as Model } from "@/gen"
import { RenderComponent } from "@/RenderComponent"

export const NavigationSection: React.FC<Model> = ({ title, children }) => {
  return (
    <li>
      {title && (
        <div className="text-xs font-semibold leading-6 text-gray-400">{title}</div>
      )}
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {children.map((c: Component, index: number) => (
          <li key={index}>
            <RenderComponent c={c} />
          </li>
        ))}
      </ul>
    </li>
  )
}