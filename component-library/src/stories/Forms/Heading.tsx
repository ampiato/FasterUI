import { classNames } from "../../utils"


export interface HeadingProps {
  className?: string
  title: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading: React.FC<HeadingProps> = ({ className, level = 1, title }) => {
  let Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      className={classNames(className, 'text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white')}
    >
      {title}
    </Element>
  )
}
