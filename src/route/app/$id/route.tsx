import { useLoaderData } from 'react-router-dom'
import { loader } from './loader'

export { loader }

export const GetById = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  return <>GetById</>
}

export default GetById
