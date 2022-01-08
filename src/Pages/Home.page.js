import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
        <div className="flex flex-col gap-5 pt-5 ">

        <div className="container mx-auto px-15">
        <h1 className="text-xl pl-12 font-bold">The Best of Entertainment</h1>
        <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-12">
            <div className="mx-auto px-12 container">
                <img 
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premier-Rupay"
                className="w-full h-full"
                />
            </div>
            <div className="mx-auto container">
            <Premier />
            </div>
        </div>

        </div>
        </>
    );
};

export default HomePage;