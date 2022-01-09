import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Poster from "../Poster/Poster.component";

const Premier = () => {
    const PremierImages = [
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
            alt:"Premier Image",
            title:"Fast and Furious 9",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301313-skcpmzlrdd-portrait.jpg",
            alt:"Premier Image",
            title:"The Boss Baby: Family Business",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311532-cwljgktdka-portrait.jpg",
            alt:"Premier Image",
            title:"Shadow in the Cloud",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301320-yqfsqracrx-portrait.jpg",
            alt:"Premier Image",
            title:"Never Rarely Sometimes Always",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00124579-dkumwazszz-portrait.jpg",
            alt:"Premier Image",
            title:"Ordinary Love",
            subtitle:"English"
        }
    ]

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