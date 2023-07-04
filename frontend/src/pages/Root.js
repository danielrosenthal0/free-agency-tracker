import { Fragment } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    
    return (
        <Fragment>
            <h1>Get Ready to Learn Chinese, Buddy</h1>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
}

export default RootLayout;