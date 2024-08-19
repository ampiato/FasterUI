import { classNames } from "../../utils";

export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
  soft?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  soft,
  className,
  ...props
}) => {
  return (
    <hr
      role="presentation"
      {...props}
      className={classNames(
        className,
        'w-full border-t',
        soft && 'border-zinc-950/5 dark:border-white/5',
        !soft && 'border-zinc-950/10 dark:border-white/10'
      )}
    />
  )
}