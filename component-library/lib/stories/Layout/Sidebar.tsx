import { AmpiatoLogo } from '../Ampiato/AmpiatoLogo'
import { Sidebar as Model } from '../../gen'
import { RenderComponent } from '../../RenderComponent'


/**
 * Sidebar component is displayed at the left side of the `Page` component.
 */
export const Sidebar: React.FC<Model> = ({ lastComponentSticksToBottom, children }) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <AmpiatoLogo />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          {children.map((child, index) => (
            <li key={index} className={lastComponentSticksToBottom && index === children.length - 1 ? "mt-auto" : ""}>
              <RenderComponent c={child} />
            </li>
          ))}
        </ul>
        {/* <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <Icon
                      name={item.icon}
                      size='medium'
                      aria-hidden="true"
                    // className={classNames(
                    //   item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                    //   'h-6 w-6 shrink-0',
                    // )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {secondaryNavigation && (
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {secondaryNavigation.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={classNames(
                        team.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                      )}
                    >
                      <span
                        className={classNames(
                          team.current
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                        )}
                      >
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <Cog6ToothIcon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
              />
              Settings
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  )
}