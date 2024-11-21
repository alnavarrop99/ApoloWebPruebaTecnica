import { redirect, type ActionFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export type TReq = Parameters<typeof db.create<'character'>>['0']['payload']

export const action = async ({ params }: ActionFunctionArgs) => {
  try{
    if(!(params.id && !Number.isNaN(+params.id)) ) throw new Error('params not be available')
    const res = await db.remove({ params: { category: 'character', id: params.id },  headers: { access_token: localStorage["aplo_web-access_token"] } })
    if('error' in res) return res
    return redirect('/app')
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
