import { Outlet } from "react-router-dom"
// import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Root = () => {
  return (
    <div className="container mx-auto">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root