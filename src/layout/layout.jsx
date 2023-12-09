import { Outlet } from 'react-router-dom'
import Header from "../components/header/header.jsx";

function Layout () {
    return (
        <>
            <Header></Header>
            <Outlet />
           
        </>
    )
}

export default Layout;