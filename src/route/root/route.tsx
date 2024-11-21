import { Outlet, useLocation, useNavigation } from "react-router-dom"
import { Footer, PrivateFooter } from './footer'
import Nav from './nav'
import Main from './main'
import { PARSE } from ".."

export const Root = () => {
  const state = useNavigation()
  const loc = useLocation() 
  return <>
    <Nav state={state.state} pathname={loc.pathname} />
    <Main> <Outlet /> </Main>
    { loc.pathname === `/${PARSE['root']}` ? <Footer /> : <PrivateFooter /> }
  </>
}

export default Root
