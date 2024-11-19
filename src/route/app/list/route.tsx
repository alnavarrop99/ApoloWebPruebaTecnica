import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { loader } from './loader'

export { loader }

export const List = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const nav = useNavigate()
  return <main aria-label='character list'>
    <ul className='flex flex-wrap flex-row gap-2 [&_li]:flex-1'>
      {data.results.map( (data) => (
        <li key={`${data.name}_${data.id}`} className="group card cursor-pointer w-fit bg-base-100 image-full shadow-xl" onClick={() => nav(`./${data.id}`)}>
          { data.image && <figure className='group-hover:z-20'> <img className='transform-gpu group-hover:scale-125 group-hover:!rounded-none duration-1000' src={data.image} alt={data.name} /> </figure> }
          <div className="card-body justify-center">
            <h4 className='!link card-title group-hover:opacity-0 group-hover:scale-0 trasition-all duration-500'>{data.name}</h4>
          </div>
        </li>
      ) )}
    </ul>
  </main>
}

export default List
