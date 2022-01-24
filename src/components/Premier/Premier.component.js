import React, {useState, useEffect} from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Poster from "../Poster/Poster.component";


const Premier = () => {
  
  const PremierImages = [
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
        alt: "Venom",
        title: "Venom:Let There Be Carnage",
        subtitle: "English"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
        alt: "Fast and Furious",
        title: "Fast and Furious 9",
        subtitle: "English"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301465-sgxdqbdnaf-portrait.jpg",
        alt: "Fear Of Rain",
        title: "Fear Of Rain",
        subtitle: "English"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314637-yrkzrqyeee-portrait.jpg",
        alt: "Long Weekend",
        title: "Long Weekend",
        subtitle: "English"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316067-zntjqvmxuf-portrait.jpg",
        alt: "The Investigation",
        title: "The Investigation",
        subtitle: "Danish"
    },
    
];

    return (
        <>
        <div className="flex flex-col items-start gap-1 py-2">
          <h3 className="text-white text-2xl font-bold pl-12">Premieres</h3>
          <p className="text-white text-xl pl-12">Brand New releases every friday</p>
        </div>
          <Carousel itemPosition={consts.BETWEEN} itemsToShow={4} >
          {PremierImages.map((image)=>(
                  <Poster {...image} isDark/>
              ))}

 
          </Carousel>
        </>
    );
};

export default Premier;