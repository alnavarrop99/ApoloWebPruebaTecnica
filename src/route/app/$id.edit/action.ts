import { redirect, type ActionFunctionArgs } from "react-router-dom";
import * as db from '~/db'
import { PARSE } from "~/route";

export type TReq = Parameters<typeof db.edit<'character'>>['0']['payload']

export const action = async ({ params, request }: ActionFunctionArgs) => {
  try{
    if(!(params.id && !Number.isNaN(+params.id)) ) throw new Error('params not be available')

    const originPayload = await request.formData()
    const payload = Object.fromEntries(Array.from(
      originPayload
        .entries()).map<[string, unknown] | undefined>( ([key, data]) => data ? [key, data] : undefined )
        .filter( (data) => data ) as Array<[string, unknown]>
    ) as TReq

    const res = await db.edit({ params: { category: 'character', id: params.id }, payload, headers: { access_token: localStorage["aplo_web-access_token"] } })

    if('error' in res) return res
    return redirect(`${PARSE.app}/${res.id}`)
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
