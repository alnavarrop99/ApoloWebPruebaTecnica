import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { Icon } from "~/comp"

export const Nav = ({className}: React.ComponentPropsWithRef<'nav'>) => <nav className={twMerge('navbar rounded-b-lg bg-base-100 shadow-lg', className)}>
  <div className="flex-1 gap-1">
    <Link className="btn glass" to="/"> <img alt='rick and morty image' src={'/R&M.svg'} className="w-6 text-sm" />  <span>R&M</span></Link>
  </div>
  <div className="flex-none">
    <button className="btn-square glass no-animation" 
      onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap))}
    >
      <Icon name="setting" className="w-8" />
    </button>
  </div>
</nav>

export default Nav
