import { redirect, type LoaderFunctionArgs } from "react-router-dom";

export const loader = async ({ }: LoaderFunctionArgs) => {
  const access_token = localStorage?.["aplo_web-access_token"]
  if(!access_token) return redirect('/auth')
  return { access_token }
}
