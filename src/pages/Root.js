import { Fragment } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    
    return (
        <Fragment>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
}

export default RootLayout;