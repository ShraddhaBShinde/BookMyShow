import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Poster from "../Poster/Poster.component";

const Premier = (props) => {

    return (
        <>
        <div className="flex flex-col items-start gap-1 py-2">
          <h3 className="text-white text-2xl font-bold pl-12">Premieres</h3>
          <p className="text-white text-xl pl-12">Brand New releases every friday</p>
        </div>
          <Carousel itemPosition={consts.BETWEEN} itemsToShow={4} >
              {props.PremierImages.map((image)=>(
                  <Poster {...image} isDark/>
              ))}
          </Carousel>
        </>
    );
};

export default Premier;