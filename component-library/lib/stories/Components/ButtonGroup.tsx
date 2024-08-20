import { ButtonGroup as Model } from "../../gen"
import { classNames } from "../../utils"

export const ButtonGroup: React.FC<Model> = ({ items }) => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {items.map((item, index) => (
        <a
          href={item.href}
          key={index}
          type="button"
          className={classNames(
            "relative inline-flex items-center  px-3 py-2 text-sm font-semibold   focus:z-10",
            index === 0 ? "rounded-l-md" : "-ml-px",
            index === items.length - 1 ? "rounded-r-md" : "",
            item.isActive
              ? "bg-gray-700 text-white ring-1 ring-inset ring-gray-900 hover:bg-gray-900"
              : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          )}
        >
          {item.label}
        </a>
      ))}
    </span>
  )
}
