import { redirect, type ActionFunctionArgs } from "react-router-dom";
import * as db from "~/db";
import { PARSE } from "~/route";

export type TReq = Parameters<typeof db.login>['0']['payload']
export type TLocalStorage = `aplo_web-${keyof API_User}`

export const action = async ({ request }: ActionFunctionArgs) => {
  try{
    const errorStack: Partial<Record<keyof TReq, string>> = {}
    const originPayload = await request.formData()

    for( const [key, value] of originPayload ){
      if(value) continue
      errorStack[key as keyof typeof errorStack] = 'empty field'
    }

    if(Object.keys(errorStack).length) {
      return { error: 'fields empty', stack: errorStack } satisfies API_Error & { stack: typeof errorStack }
    }

    const payload = Object.fromEntries(Array.from(
      originPayload
        .entries()).map<[string, unknown] | undefined>( ([key, data]) => data ? [key, data] : undefined )
        .filter( (data) => data ) as Array<[string, unknown]>
    ) as TReq

    const res = await db.login({ payload })

    if('error' in res) return res

    localStorage['aplo_web-access_token' satisfies TLocalStorage] = res.access_token
    return redirect(`/${PARSE.app}`)
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
