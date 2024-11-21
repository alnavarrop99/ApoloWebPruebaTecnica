import { Form, Link, Navigation } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { Icon } from "~/comp"

export const Nav = ({state, className, auth}: React.ComponentPropsWithRef<'nav'> & Pick<Navigation, 'state'> & { auth: boolean } ) => (
  <nav className="sticky top-0 z-30">
    <section aria-label="navigation bar" className={twMerge('navbar rounded-b-lg bg-base-100 shadow-lg py-6', className)}>
      <Form id='logout' action='/auth/logout' method="post" replace />
      <div className="flex-1 gap-1">
        <Link className="btn glass text-xl" to="/"> <img alt='rick and morty image' src={'/R&M.svg'} className="w-8 text-sm" />  <span>R&M</span></Link>
      </div>
      <div className="flex-none">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-square glass no-animation" onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))}><Icon name="setting" className="w-8" /></summary>
          <ul className="menu dropdown-content bg-gray-100 rounded-box z-[1] w-[12rem] p-2 shadow [&_div]:w-6">
            { auth && <li>
              <Link className="headless" to="/app/create"
                onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))} 
              >
                <Icon name="add" trigger="click" />Create character
              </Link>
            </li>
            }
            <li>
              <a href={import.meta.env.DEV ? 'http://localhost:6006/' : import.meta.env.APOLO_STORYBOOK_URL} target="_blank" 
                onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))}
              >
                <Icon name="note" trigger="click" />Go to sys design
              </a>
            </li>
            { auth && <li>
            <button form="logout" className="headless" onMouseEnter={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))}>
              <Icon name="log-out" trigger="click" /> Logut
            </button>
          </li> }
          </ul>
        </details>
      </div>
    </section>
  { state !== 'idle' && <progress className="w-full bg-base-100 !progress-success !absolute z-40" /> }
  </nav>
)

export default Nav
