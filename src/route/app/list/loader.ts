import { type LoaderFunctionArgs, type Params } from "react-router-dom";
import * as db from '~/db'

type TParams = Params<''>

export const loader = async ({ }: { params: TParams } & LoaderFunctionArgs) => {
  return ({})
}
