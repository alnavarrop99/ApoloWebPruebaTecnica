import type { LoaderFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export const loader = async ({ }: LoaderFunctionArgs) => {
  const res = db.list( { params: { category: 'character' }, query: {  } } )
  return res
}
