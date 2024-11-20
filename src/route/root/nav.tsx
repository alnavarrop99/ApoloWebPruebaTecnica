import { Link, Navigation } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { Icon } from "~/comp"

export const Nav = ({state, className}: React.ComponentPropsWithRef<'nav'> & { state?: Navigation['state'] }) => <nav className="sticky top-0 z-50">
  <section aria-label="navigation bar" className={twMerge('navbar rounded-b-lg bg-base-100 shadow-lg', className)}>
    <div className="flex-1 gap-1">
      <Link className="btn glass text-xl" to="/"> <img alt='rick and morty image' src={'/R&M.svg'} className="w-8 text-sm" />  <span>R&M</span></Link>
    </div>
    <div className="flex-none">
      <button className="btn-square glass no-animation" 
        onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap))}
      >
        <Icon name="setting" className="w-8" />
      </button>
    </div>
  </section>
  { state !== 'idle' && <progress className="w-full bg-base-100" /> }
</nav>

export default Nav
