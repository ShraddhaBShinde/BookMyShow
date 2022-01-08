import React from 'react'
import {BrowserRouter} from "react-router-dom";  //browser router
import './App.css';

//HOC
import DefaultHoc from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

//Pages
import HomePage from './Pages/Home.page';
import Movie from './Pages/Movie.page';

function App() {
  return (
    <>
      <BrowserRouter>
      <DefaultHoc path ="/" exact component={HomePage}/>
      <MovieHOC path ="/movie/:id" exact component={Movie}/> 
      <h1 className="text-green-500">Hello world!</h1>
    </BrowserRouter>
    </>
  );
}

export default App;
