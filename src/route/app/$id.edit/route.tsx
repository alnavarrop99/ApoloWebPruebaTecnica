import { useLoaderData } from 'react-router-dom'
import { loader } from './loader'
import { action } from './action'

export {loader}
export {action}

export const EditById = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  return <>EditById</>
}

export default EditById
