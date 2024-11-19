import { useLoaderData } from 'react-router-dom'
import { loader } from './loader'
import clsx from 'clsx'

export { loader }

export const GetById = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  return <main id={`${data.name}_${data.id}`} aria-label={`${data.name}`} className='[&_h1]:underline space-y-2'>
    <div className="indicator">
      <span className={clsx('indicator-item w-4 aspect-square rounded-full animate-pulse -right-1', {
        'bg-error': data.status === 'Dead',
        'bg-success': data.status === 'Alive',
      })}></span>
      <h1>{data.name}</h1>
    </div>

    { data.image && <div className='avatar block'>
      <div className='w-[20rem] aspect-square mask mask-squircle mx-auto ring-gray-100'>
        <img alt={data.name} src={data.image} /> </div>
      </div>
    }

    <div className='divider'></div>
    <h2>Info:</h2>
    <ul className='list-inside list-disc text-lg'>
      { data.type && <li><span>Type:</span>{data.type}</li> }
      <li><span>Gender:</span> {data.gender}</li>
      <li><span>Status:</span> {data.status}</li>
      <li><span>Specie:</span> {data.species}</li>
    </ul>
  </main>
}

export default GetById
