import type { LoaderFunctionArgs } from "react-router-dom";
import * as db from '~/db'

export type TQuery = Parameters<typeof db.list<'character'>>['0']['query']

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const query = Object.fromEntries(url.searchParams.entries()) as TQuery
  const res = db.list( { params: { category: 'character' }, query } )
  return res
}
