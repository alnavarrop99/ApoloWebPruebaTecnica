import { Outlet } from "react-router-dom"
import Footer from './footer'
import Nav from './nav'
import Main from './main'

export const Root = () => {
  return <>
    <Nav />
    <Main> <Outlet /> </Main>
    <Footer />
  </>
}

export default Root
