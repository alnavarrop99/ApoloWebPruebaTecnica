import type { LoaderFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    let id = params.id
    if(!id) throw new Error('id not available')

    const res = await db.id({ params: { id: +id, category: 'character' } })
    return res
  } catch(err){
    return { error: err as string }
  }
}
