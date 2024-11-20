import { Navigate, useLoaderData, useNavigate, useNavigation, useSearchParams } from 'react-router-dom'
import { loader, type TQuery } from './loader'
import React, { useCallback, useRef, useState } from 'react'

export { loader }

export const List = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const [ characters, setCharacters ] = useState( 'error' in data ? [] : data.results )
  const [query, setQuery] = useSearchParams()
  const state = useNavigation()
  const nav = useNavigate()
  const prevScrollTop = useRef(window.scrollY)
  const firstPage = useRef( query.get('page' satisfies keyof TQuery) || '1' )

  React.useEffect( () => {
    if('error' in data) return;
    setCharacters([ ...characters, ...data.results ])
  }, [data] )

  if(!characters.length) return <>Error</>

  if(+firstPage.current > 1){
    <Navigate to={state.location?.pathname!} replace />
  }

  return <main aria-label='character list' onWheel={useCallback(onWheel, [state])}>
    <ul className='flex flex-wrap flex-row [&_li]:flex-1'>
      {characters.map( (data, index) => (
        <li key={`${data.name}_${data.id}_${index}`} className="group card cursor-pointer bg-base-100 image-full before:!rounded-none [&_figure]:!rounded-none" onClick={() => nav(`./${data.id}`)}>
          { data.image && <figure className='group-hover:z-20'> <img className='aspect-square min-w-full transform-gpu group-hover:scale-125 duration-1000' src={data.image} alt={data.name} /> </figure> }
          <div className="card-body justify-center">
            <h4 className='!link card-title group-hover:opacity-0 group-hover:scale-0 trasition-all duration-500'>{data.name}</h4>
          </div>
        </li>
      ) )}
    </ul>
  </main>

  function onWheel() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const currentPage = query.get('page' satisfies keyof TQuery) || '1'

    if (scrollTop + clientHeight >= scrollHeight - 100 && state.state === 'idle' && prevScrollTop.current !== scrollTop) {
      setQuery( (prevQuery) => {
        prevQuery.set('page' satisfies keyof TQuery, `${+currentPage + 1}`) 
        return prevQuery
      })
      prevScrollTop.current = scrollTop
    }
  }
}

export default List
