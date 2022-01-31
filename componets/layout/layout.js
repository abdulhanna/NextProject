import { Fragment } from "react";
import MainHeader from "./main-header";

function Layout (props){
    return <Fragment>
    <MainHeader/>
     {props.children}
    </Fragment>

}
export default Layout