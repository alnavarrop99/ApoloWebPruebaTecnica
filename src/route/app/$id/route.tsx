import { Form, Link, useLoaderData } from 'react-router-dom'
import { loader } from './loader'
import clsx from 'clsx'

export { loader }

export const GetById = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>

  if('error' in data) return <>Error</>

  return <main id={`${data.name}_${data.id}`} aria-label={`${data.name}`} className='[&_h1]:underline space-y-4 place-self-center'>
    <Form id='remove' replace action={`/app/${data.id}/remove`} method='delete' />
    <div className="indicator mx-auto block">
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
    <div className='flex flex-row justify-between items-center gap-8'>
      <div>
        <h2>Info:</h2>
        <ul className='list-inside list-disc text-lg'>
          { data.type && <li><span>Type:</span> {data.type}</li> }
          <li><span>Gender:</span> {data.gender}</li>
          <li><span>Status:</span> {data.status}</li>
          <li><span>Specie:</span> {data.species}</li>
        </ul>
      </div>
      <ul className='text-lg bg-base-200 rounded-box menu join-vertical [&_.join-item]:btn [&_.join-item]:btn-outline [&_.join-item]:w-full'>
        <li><Link to={`./edit`} > EDIT </Link></li>
        <li><Link to={`/app/create`} > CREATE </Link></li>
        <li><button className='headless' type='submit' form='remove'> REMOVE </button></li>
      </ul>
    </div>
  </main>
}

export default GetById
