import React, {useState, useEffect} from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";
import EventCardSlider from "../components/Entertainment/Eventsnearyou.component";
import OnlineEventCardSlider from "../components/Entertainment/Onlineevents.component";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
      useEffect(()=> {
        const requestPopularMovies = async () => {
          const getPopularMovies = await axios.get("/movie/popular");
          setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
      },[]);

      console.log({popularMovies});
    return (
        <>
        <div className="flex flex-col gap-5 pt-5 ">

        <div className="container mx-auto px-15">
        <h1 className="text-2xl pl-12 font-bold">The Best of Entertainment</h1>
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
            <div className="mx-auto px-32 container">
                <Premier  />
            </div>
        </div>

        <div className="container mx-auto px-15 pb-10">
        <h1 className="text-2xl pl-12 font-bold">Events Happening Near You</h1>
        <EventCardSlider />
        </div>

        <div className="container mx-auto px-15">
        <h1 className="text-2xl pl-12 font-bold">Online Streaming Events</h1>
        <OnlineEventCardSlider />
        </div>

        </div>
        
        </>
    );
};

export default HomePage;