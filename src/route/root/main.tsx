import { twMerge } from "tailwind-merge"

export const Main = ({ className, ...props }: Pick<React.ComponentPropsWithRef<'section'>, 'className' | 'children'>) => <section {...props} aria-label="main content" className={twMerge('p-2', className)}/>

export default Main
