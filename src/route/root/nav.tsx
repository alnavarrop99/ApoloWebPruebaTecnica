import { Link, Navigation } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { Icon } from "~/comp"

export const Nav = ({state, className}: React.ComponentPropsWithRef<'nav'> & { state?: Navigation['state'] }) => <nav className="sticky top-0 z-50">
  <section aria-label="navigation bar" className={twMerge('navbar rounded-b-lg bg-base-100 shadow-lg', className)}>
    <div className="flex-1 gap-1">
      <Link className="btn glass text-xl" to="/"> <img alt='rick and morty image' src={'/R&M.svg'} className="w-8 text-sm" />  <span>R&M</span></Link>
    </div>
    <div className="flex-none">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-square glass no-animation" onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))}><Icon name="setting" className="w-8" /></summary>
        <ul className="menu dropdown-content bg-gray-100 rounded-box z-[1] w-[12rem] p-2 shadow">
          <li>
            <Link className="headless" to="/app/create"
              onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))} 
            >
              <Icon name="add" trigger="click" className="w-6" />Create character
            </Link>
          </li>
          <li>
            <Link className="headless" to="/logout" replace
              onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))} 
            >
              <Icon name="log-out" trigger="click" className="w-6" />Logut
            </Link>
          </li>
          <li>
            <a href={import.meta.env.DEV ? 'http://localhost:6006/' : import.meta.env.APOLO_STORYBOOK_URL} target="_blank" 
              onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))}
            >
              <Icon name="note" className="w-6" trigger="click" />Go to sys design
            </a>
          </li>
        </ul>
      </details>
    </div>
  </section>
  { state !== 'idle' && <progress className="w-full bg-base-100" /> }
</nav>

export default Nav
