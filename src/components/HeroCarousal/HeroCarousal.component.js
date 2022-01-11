import React, {useState, useEffect} from "react";
import Carousel from 'react-elastic-carousel';
import axios from "axios";


const HeroCarousal = () => {
    const [images, setImages] = useState([]);
    useEffect(()=> {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    },[]);
    
      return (
          <>
          <Carousel>
              {images.map((image)=>(
                  <div className="w-full h-96 px-2 py-3">
                      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test-img" className="rounded-md w-full h-full" />
                  </div>
              ))}
          </Carousel>
          </>
      );
};

export default HeroCarousal;