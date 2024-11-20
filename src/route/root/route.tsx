import { Outlet, useNavigation } from "react-router-dom"
import Footer from './footer'
import Nav from './nav'
import Main from './main'

export const Root = () => {
  const state = useNavigation()
  return <>
    <Nav state={state.state} />
    <Main> <Outlet /> </Main>
    <Footer />
  </>
}

export default Root
