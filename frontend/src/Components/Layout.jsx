import React from "react";
import {Outlet} from 'react-router';
import Landing from "./Landing";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer"
const Layout=()=>{
    return(
        <>
            <Navbar/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;