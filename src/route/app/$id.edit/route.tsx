import { Form, useLoaderData } from 'react-router-dom'
import { "app/$id" as app_$id } from '~/route'
import { action, type TReq } from './action'
import { K } from '~/route/app/create/K'

const loader = app_$id.loader
export { loader }
export { action }

export const EditById = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>

  if('error' in data) return <>Error</>
  return <main aria-label='edit character' className='px-8'>
    <h1>Edit character:</h1>
    <div className='divider' />
    <Form className='[&_label]:form-control [&_label>:first-child]:label [&_label>:last-child]:label-alt [&_label>:last-child]:text-end [&_label>:last-child]:opacity-50' method='patch'>
      <label><p>Name:</p><input type='text' name={'name' satisfies keyof TReq} /><p>{data.name}</p></label>
      <label><p>Specie:</p><input type='text' name={'species' satisfies keyof TReq} /><p>{data.species}</p></label>
      <label><p>Type:</p><input type='text' name={'type' satisfies keyof TReq} /><p>{data.type}</p></label>

      <label><p>Status:</p>
        <select name={'status' satisfies keyof TReq}>
          <option value={''}> sin seleccionar </option>
          { K.STATUS.map( (data) => <option key={data}> {data} </option> ) }
        </select>
        <p>{data.status}</p></label>
      <label><p>Gender:</p>
        <select name={'gender' satisfies keyof TReq}>
          <option value={''}> sin seleccionar </option>
          { K.GENDER.map( (data) => <option key={data}> {data} </option> ) }
        </select>
        <p>{data.gender}</p></label>
      <button className='my-2 ms-auto block'>Submit</button>
    </Form>
  </main>
}

export default EditById
