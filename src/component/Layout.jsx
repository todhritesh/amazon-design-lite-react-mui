import { Fragment } from "react";
import Banner from "./Banner";
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';


export default function Layout(){
    return (
        <Fragment>
            <Navbar/>
            <SubNavbar/>
            <Banner/>
        </Fragment>
    )
}