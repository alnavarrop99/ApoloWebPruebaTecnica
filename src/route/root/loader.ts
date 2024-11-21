import type { LoaderFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export const loader = async ({}: LoaderFunctionArgs) => {
  try{
    const res = await db.current({ headers: { access_token: localStorage?.["aplo_web-access_token"] } })
    return res
  } catch(err) {
    return { error: err as string } satisfies API_Error
  }
}
