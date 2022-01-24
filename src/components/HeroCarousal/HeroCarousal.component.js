import React, {useState, useEffect} from "react";
import Carousel from 'react-elastic-carousel';
import axios from "axios";


const HeroCarousal = () => {
    const [images, setImages] = useState([]);
    const [film, setFilm] = useState([]);

    useEffect(() => {
        fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/game%20of%20thrones", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "112794d734msh139f4ef0d3a2198p1ff742jsn9788bb6ba5dc"
	}
})
.then(response => {
	return response.json();
}).then(data => {
    setFilm(data.titles)
})
.catch(err => {
	console.error(err);
});
});

const [images2, setImages2] = useState([]);
    const [film2, setFilm2] = useState([]);

    useEffect(() => {
        fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "112794d734msh139f4ef0d3a2198p1ff742jsn9788bb6ba5dc"
	}
})
.then(response => {
	return response.json();
}).then(data => {
    setFilm2(data.titles)
})
.catch(err => {
	console.error(err);
});
});
      return (
          <>
          <Carousel>
           {film.map((item,index) => (
                    <div className="w-full h-96 px-4 py-3">
                        <img src={item.image} alt="hero-image" className="rounded-md w-full h-full " />
                    </div>
                ))}     
            {film2.map((item2,index) => (
                    <div className="w-full h-96 px-4 py-3">
                        <img src={item2.image} alt="hero" className="rounded-md w-full h-full " />
                    </div>
                ))}
          </Carousel>
          </>
      );
};

export default HeroCarousal;