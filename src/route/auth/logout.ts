import { redirect, type ActionFunctionArgs } from "react-router-dom";
import * as db from "~/db";
import { PARSE } from "~/route";

export const action = async ({ }: ActionFunctionArgs) => {
  try{
    const res = await db.logout()

    if('error' in res) return res
    return redirect(`${PARSE.root}`)
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
