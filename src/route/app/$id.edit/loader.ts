import { type LoaderFunctionArgs } from "react-router-dom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  let id = params.id
  if(!id) throw new Error('id not available')

  return ({})
}
