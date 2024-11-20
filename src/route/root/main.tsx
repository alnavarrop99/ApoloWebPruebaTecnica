import { twMerge } from "tailwind-merge"

export const Main = ({ className, ...props }: Pick<React.ComponentPropsWithRef<'section'>, 'className' | 'children'>) => <section {...props} aria-label="main content" className={twMerge('p-4 grid h-full place-items-center', className)} />

export default Main
