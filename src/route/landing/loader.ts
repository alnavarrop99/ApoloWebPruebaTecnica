import type { LoaderFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export const loader = async ({}: LoaderFunctionArgs) => {
  try{
    const res = await db.id({ params: { id: Array.from({ length: 3 }).map<number>( () => Math.trunc(Math.random() * 100) + 1 ), category: 'character' } })
    return res
  } catch(err) {
    return { error: err as string } satisfies API_Error
  }
}
