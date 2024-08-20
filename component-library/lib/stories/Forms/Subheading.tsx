import { classNames } from "../../utils"

export interface SubheadingProps {
  className?: string
  title: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}



export const Subheading: React.FC<SubheadingProps> = ({ className, level = 1, title }) => {
  let Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      className={classNames(className, 'text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white')}
    >
      {title}
    </Element>
  )
}