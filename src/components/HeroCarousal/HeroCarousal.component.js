import React from "react";
import Carousel from 'react-elastic-carousel';


const HeroCarousal = () => {
    
const images = ["https://in.bmscdn.com/promotions/cms/creatives/1641474877783_sister.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1641361864902_vir.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1641191175860_devesh.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1641388416369_12x3.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1640939086610_banner.1.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1641447175390_web03.png"
];
      return (
          <>
          <Carousel>
              {images.map((image)=>(
                  <div className="w-full h-96 px-2 py-3">
                      <img src={image} alt="test-img" className="rounded-md w-full h-full" />
                  </div>
              ))}
          </Carousel>
          </>
      );
};

export default HeroCarousal;