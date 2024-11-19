import { type LoaderFunctionArgs, type Params, json } from "react-router-dom";
import * as db from '~/db'

type TParams = Params<'id'>

export const loader = async ({ params }: { params: TParams } & LoaderFunctionArgs) => {
  let id = params.id
  if(!id) throw new Error('id not available')

  return ({})
}
