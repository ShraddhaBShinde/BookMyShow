import React from 'react'
import axios from "axios";

//HOC
import DefaultHoc from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

//Pages
import HomePage from './Pages/Home.page';
import Movie from './Pages/Movie.page';

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHoc path ="/" exact component={HomePage}/>
      <MovieHOC path ="/movie/:id" exact component={Movie}/> 
      <h1 className="text-green-500">Hello world!</h1>
    </>
  );
}

export default App;
