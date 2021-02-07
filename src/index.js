import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app";

ReactDOM.render(
    <App
      promoMovieTitle="The Grand Budapest Hotel"
      promoMovieBackgroundImageUrl="img/bg-the-grand-budapest-hotel.jpg"
      promoMoviePosterImageUrl="img/the-grand-budapest-hotel-poster.jpg"
      promoMovieGenre="Drama"
      promoMovieYear={2014}
    />,
    document.querySelector(`#root`)
);
