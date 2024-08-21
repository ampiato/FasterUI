import clsx from "clsx";

interface Option {
  label: string;
  isActive: boolean;
}
interface Props {
  options: Option[];
}

export const ButtonGroup: React.FC<Props> = ({ options }) => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={clsx(
            // First
            index === 0 ? "rounded-l-md" : "-ml-px",
            // Last
            index === options.length - 1 ? "rounded-r-md" : "",
            "relative inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          )}
        >
          {option.label}
        </button>
      ))}
    </span>
  )
}