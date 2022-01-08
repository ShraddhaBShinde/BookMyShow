import React from "react"; 
//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {  
    return (
        <div>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </div>
    );
};

export default DefaultLayout; 