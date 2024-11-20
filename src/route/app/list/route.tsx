import { useLoaderData, useNavigate, useNavigation, useSearchParams } from 'react-router-dom'
import { loader, type TQuery } from './loader'
import React, { useCallback, useRef, useState } from 'react'
import { Icon } from '~/comp'

export { loader }

export const List = () => {
  const [query, setQuery] = useSearchParams({ page: '1' })
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const state = useNavigation()
  const nav = useNavigate()

  const [ characters, setCharacters ] = useState<Exclude<typeof data, API_Error>['results']>([])
  const [ search, setSearch ] = useState<Exclude<typeof data, API_Error>['results']>([])

  const prevScrollTop = useRef<number>(window.scrollY)
  const prevPage = useRef<number>(+(query.get('page' satisfies keyof TQuery) || '1'))
  const lastPage = useRef<number>(+(query.get('page' satisfies keyof TQuery) || '1'))

  React.useEffect( () => {
    if('error' in data || query.has('name' satisfies keyof TQuery)) return;
    setCharacters([ ...characters, ...data.results ])
    setSearch([])
    return () => {
      setCharacters(characters)
    }
  }, [data, query] )

  React.useEffect( () => {
    const page = +`${+query.get('page' satisfies keyof TQuery)!}`
    if('error' in data || !query.has('name' satisfies keyof TQuery)) return;
    setSearch( (prevSearch) => {
      if(page > prevPage.current) return [...prevSearch, ...data.results ]
      return data.results
    } )
    return () => {
      setSearch(search)
    }
  }, [data, query] )

  const page_list = <ul className='flex flex-wrap flex-row [&_li]:flex-1'>
    {characters.map( (data, index) => (
      <li key={`${data.name}_${data.id}_${index}`} className="group card cursor-pointer bg-base-100 image-full before:!rounded-none [&_figure]:!rounded-none" onClick={() => nav(`./${data.id}`)}>
        { data.image && <figure className='group-hover:z-20'> <img className='aspect-square min-w-full transform-gpu group-hover:scale-125 duration-1000' src={data.image} alt={data.name} /> </figure> }
        <div className="card-body justify-center">
          <h4 className='!link card-title group-hover:opacity-0 group-hover:scale-0 trasition-all duration-500'>{data.name}</h4>
        </div>
      </li>
    ) )}
  </ul>

  const search_list = <ul className='flex flex-wrap flex-row [&_li]:flex-1'>
    {search.map( (data, index) => (
      <li key={`${data.name}_${data.id}_${index}`} className="group card cursor-pointer bg-base-100 image-full before:!rounded-none [&_figure]:!rounded-none" onClick={() => nav(`./${data.id}`)}>
        { data.image && <figure className='group-hover:z-20'> <img className='aspect-square min-w-full transform-gpu group-hover:scale-125 duration-1000' src={data.image} alt={data.name} /> </figure> }
        <div className="card-body justify-center">
          <h4 className='!link card-title group-hover:opacity-0 group-hover:scale-0 trasition-all duration-500'>{data.name}</h4>
        </div>
      </li>
    ) )}
  </ul>

  return <main aria-label='character list' className='space-y-1' onWheel={useCallback(onWheel, [state])}>
    <nav className='px-1 fixed top-32 right-6 w-11/12 z-50'>
      <label className='p-0 pl-4 group input flex place-items-center gap-4 trasition-all duration-500 bg-inherit focus-within:bg-gray-100 focus-within:input-bordered' >
          <div className='trasition-all duration-1000 opacity-0 group-focus-within:opacity-100 w-full'><input type='text' className='headless' onKeyUp={onInput} /></div>
          <button className='shadow-lg'><Icon name='search' /></button>
      </label>
    </nav>
  
    { !search.length ? page_list : search_list}
  </main>

  function onWheel() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const currentPage = query.get('page' satisfies keyof TQuery) || '1'

    if (scrollTop + clientHeight >= scrollHeight - 100 && state.state === 'idle' && prevScrollTop.current !== scrollTop) {
      prevPage.current = +currentPage
      if(!query.has('name' satisfies keyof TQuery)) lastPage.current = prevPage.current + 1
      setQuery( (prevQuery) => {
        prevQuery.set('page' satisfies keyof TQuery, `${prevPage.current + 1}`) 
        return prevQuery
      })
      prevScrollTop.current = scrollTop
    }
  }

  function onInput(ev: React.KeyboardEvent<React.ComponentRef<'input'>>) {
    if( ev.key === 'Enter' ) window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true }))
      setQuery( (prevQuery) => {
        const query = new URLSearchParams(prevQuery)
        if(!ev.currentTarget.value) {
          query.delete('name' satisfies keyof TQuery)
          prevQuery.delete('name' satisfies keyof TQuery)
          query.set('page' satisfies keyof TQuery, `${lastPage.current + 1}`)
          prevQuery.set('page' satisfies keyof TQuery, `${lastPage.current + 1}`)
        } 
        else {
          query.set('name' satisfies keyof TQuery, `${ev.currentTarget.value}`)
          query.set('page' satisfies keyof TQuery, '1')
        } 
        if(ev.key !== 'Backspace' && ev.key !== 'Delete') return query
        return prevQuery
      } )
  }
}

export default List
