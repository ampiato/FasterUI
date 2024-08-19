import { NavigationButton as Model } from '@/gen';
import { classNames } from '@/utils';
import { Icon } from './Icon';


export const NavigationButton: React.FC<Model> = ({ isActive, href, icon, label }) => {
  return (
    <a
      href={href}
      className={classNames(
        isActive
          ? 'bg-gray-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
      )}
    >
      <Icon
        name={icon}
        size='medium'
        aria-hidden="true"
        className={classNames(
          isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
          'h-6 w-6 shrink-0',
        )}
      />
      {label}
    </a>
  )
}