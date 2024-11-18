import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type TProps = {
  variant: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
}
export const Loading = ({ variant, className }: TProps & Pick<React.ComponentPropsWithRef<'span'>, 'className'>) => <span className={
  twMerge(
    clsx('loading', {
      'loading-spinner': variant === 'spinner',
      'loading-dots': variant === 'dots',
      'loading-ring': variant === 'ring',
      'loading-bars': variant === 'bars',
      'loading-infinity': variant === 'infinity',
      'loading-ball': variant === 'ball'
    } satisfies Record<`loading-${TProps['variant']}`, boolean>),
    className)}
/>

export default Loading
