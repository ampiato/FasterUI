import { Button as Model } from '../../gen';

import './button.css';
import { classNames } from '../../utils';


export const Button: React.FC<Model> = ({
  primary = false,
  size = 'medium',
  label,
  href,
  ...props
}) => {

  let classesSize;
  switch (size) {
    case 'small':
      classesSize = 'px-2.5 py-1 text-xs';
      break;
    case 'medium':
      classesSize = 'px-3 py-1.5 text-sm';
      break;
    case 'large':
      classesSize = 'px-4 py-2.5 text-sm';
      break;
  }

  let classesStyle;
  switch (primary) {
    case true:
      classesStyle = 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
      break;
    case false:
      classesStyle = 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50';
      break;
  }

  const className = classNames(
    "rounded-full font-semibold",
    classesSize,
    classesStyle
  );

  if (href !== undefined) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  } else {
    return (
      <button className={className}>
        {label}
      </button>
    )
  }
};

