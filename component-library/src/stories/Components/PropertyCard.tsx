import { classNames } from '@/utils'
import { PropertyCard as Model } from '@/gen'


export const PropertyCard: React.FC<Model> = ({ title, keyValuePairs, condensed, href, isActive }) => {
  return (
    <a className='group' href={href}>
      <div className={classNames(
        "overflow-hidden rounded-xl border",
        isActive ? "border-indigo-200" : "border-gray-200"
      )}>
        <div className={classNames(
          "flex items-center gap-x-4 border-b",
          condensed ? "px-4 py-2" : "p-6",
          isActive ? "bg-indigo-600 border-indigo-500" : "bg-gray-50 border-gray-900/5",
          href && (
            isActive ? "group-hover:bg-indigo-500" : "group-hover:bg-gray-100"
          )
        )}>
          <div className={classNames(
            "text-sm font-medium leading-6",
            isActive ? "text-white" : "text-gray-900"
          )}>
            {title}
          </div>
        </div>
        {keyValuePairs && (
          <dl className={classNames("-my-3 divide-y divide-gray-100 text-sm", condensed ? "px-4 py-2 leading-4" : "px-6 py-4 leading-6")}>
            {keyValuePairs.map((pair, index) => (
              <div key={index} className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">{pair.key}</dt>
                <dd className="text-gray-700">
                  {pair.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </a>
  )
}