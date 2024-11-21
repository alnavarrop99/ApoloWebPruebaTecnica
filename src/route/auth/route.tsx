import clsx from 'clsx'
import { Link, useFetcher } from 'react-router-dom'
import { Icon, Loading } from '~/comp'
import type {  TReq } from '~/route/auth/login'
import { 'auth/login' as login, 'auth/sigin' as sigin } from '~/route'
import { useMemo, useState } from 'react'

export const Auth = () => {
  const sub = useFetcher<Awaited<ReturnType<typeof login['action'] | typeof sigin['action']>>>()
  const [visibility, setVisibility] = useState(false)

  const sigin_state = useMemo(() => !Object.keys(sub.data! || { value: 'not sigin' }).length, [sub])

  return <main aria-label='login' className='p-4'>
    <div className='card bg-gray-50 shadow-xl'>
    <div className='card-body'>
      <div className='card-title justify-between [&_h1]:underline'>
        <h1>Authentification:</h1>
        <Loading variant='infinity' className={clsx('text-success size-12', { 'invisible': sub.state === 'idle' })} />
      </div>
      {sub.data && 'error' in sub.data && !('stack' in sub.data) && 
      <div className='alert alert-error animate-zoom-in'>
        <p className='text-base text-base-100'>
          {sub.data.error}
        </p>
      </div>}
      {sigin_state &&
      <div className='alert alert-success animate-zoom-in'>
        <p className='text-base text-base-100'>
          Success <b>sigin</b>, welcome again...
        </p>
      </div>}
      <sub.Form id='auth' className='[&_label]:form-control [&_label>:first-child]:label [&_label>:first-child]:after:content-["*"] [&_label>:first-child]:justify-start [&_label>:first-child]:after:text-error [&_label>:last-child]:label-alt [&_label>:last-child]:text-end [&_label>:last-child]:text-error [&_label>:last-child]:min-h-4' method='post'>
        <label><p>Username:</p>
          <input key={`${sigin_state}`} defaultValue={sigin_state ? '' : undefined} type='text' name={'username' satisfies keyof TReq} />
          <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.username}</p>
        </label>
        <label><p>Password:</p>
          <div className='label input input-bordered flex justify-between [&_input]:full p-0 pl-4 [&_button]:!h-full [&_button]:!min-h-0'>
            <input key={`${sigin_state}`} defaultValue={sigin_state ? '' : undefined} className='headless' type={!visibility ? 'password' : 'text'} name={'password' satisfies keyof TReq} />
            <button type='button' onClick={() => { window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true })); setVisibility(!visibility) }}><Icon name='eye' trigger='click' /></button>
          </div>
          <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.password}</p>
        </label>
      </sub.Form>

      <div className='card-actions justify-between items-center'>
        <Link className="headless transform-gpu w-12 h-full transition-all group hover:scale-125 hover:rotate-[360deg] hover:duration-500" to="/"> <img alt='rick and morty image' src={'/R&M.svg'} 
          className="animate-flip-x group-hover:animate-none repeat-infinite duration-4000 ease-in-out-expo" 
        />
        </Link>
        <nav className="join shadow-xl">
          <button onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))} className='join-item' form='auth' formAction='/auth/sigin'>
            <Icon name='log-out' />Sigin
          </button>
          <button onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))} className='join-item btn-success' form='auth' formAction='/auth/login'>
            Login<Icon name='account' />
          </button>
        </nav>
      </div>
    </div>
  </div>
  </main>
}

export default Auth
