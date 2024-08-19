import { SectionHeader as Model } from "@/gen"
import { RenderComponent } from "@/RenderComponent"

export const SectionHeader: React.FC<Model> = ({ title, subtitle, children }) => {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">{title}</h3>
        {subtitle && (
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
      {children && (
        <RenderComponent c={children} />
      )}
    </div>
  )
}