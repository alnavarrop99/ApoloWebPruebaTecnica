import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import { Footer, PrivateFooter } from './footer'
import Nav from './nav'
import Main from './main'
import { loader } from './loader'

export { loader }
 
export const Root = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const state = useNavigation()

  return <>
    <Nav state={state.state} auth={!('error' in data) && !!data.id} />
    <Main> <Outlet /> </Main>
    {!('error' in data) && !!data.id ? <Footer /> : <PrivateFooter /> }
  </>
}

export default Root
