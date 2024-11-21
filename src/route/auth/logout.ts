import { redirect, type ActionFunctionArgs } from "react-router-dom";
import * as db from "~/db";

export const action = async ({ }: ActionFunctionArgs) => {
  try{
    const res = await db.logout({ headers: { access_token: localStorage["aplo_web-access_token"] } })
    if('error' in res) return res

    localStorage.removeItem("aplo_web-access_token")
    return redirect('/')
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
