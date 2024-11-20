import { useFetcher } from 'react-router-dom'
import { action, type TReq } from './action'
import { K } from './K'

export { action }

export const Create = () => {
  const sub = useFetcher<Awaited<ReturnType<typeof action>>>({ key: 'create' })
  return <main aria-label='create character' className='px-8'>
    <h1>Create character:</h1>
    <div className='divider' />
    <sub.Form className='[&_label]:form-control [&_label>:first-child]:label [&_label>:last-child]:label-alt [&_label>:last-child]:text-end [&_label>:last-child]:text-error [&_label>:last-child]:min-h-4' method='post'>
      <label><p>Name:</p>
        <input type='text' name={'name' satisfies keyof TReq} />
        <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.name}</p>
      </label>
      <label><p>Specie:</p>
        <input type='text' name={'species' satisfies keyof TReq} />
        <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.species}</p>
      </label>
      <label><p>Type:</p>
        <input type='text' name={'type' satisfies keyof TReq} />
        <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.type}</p>
      </label>

      <label><p>Status:</p>
        <select name={'status' satisfies keyof TReq}>
          <option value={''}> sin seleccionar </option>
          { K.STATUS.map( (data) => <option key={data}> {data} </option> ) }
        </select>
        <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.status}</p>
      </label>
      <label><p>Gender:</p>
        <select name={'gender' satisfies keyof TReq}>
          <option value={''}> sin seleccionar </option>
          { K.GENDER.map( (data) => <option key={data}> {data} </option> ) }
        </select>
        <p>{sub.data && 'error' in sub.data && 'stack' in sub.data && sub.data.stack.gender}</p>
      </label>
      <button className='my-2 ms-auto block'>Submit</button>
    </sub.Form>
  </main>
}

export default Create
