import { twMerge } from "tailwind-merge"

export const Main = ({ className, ...props }: Pick<React.ComponentPropsWithRef<'section'>, 'className' | 'children'>) => <section {...props} aria-label="main content" className={twMerge('grid h-full place-items-center', className)} />

export default Main
