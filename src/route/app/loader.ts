import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { PARSE } from "~/route";

export const loader = async ({ }: LoaderFunctionArgs) => {
  const access_token = localStorage?.["aplo_web-access_token"]
  if(!access_token) return redirect(`/${PARSE['auth']}`)
  return { access_token }
}
