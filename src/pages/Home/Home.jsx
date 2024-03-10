import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../component/NavBar";
const Home = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
