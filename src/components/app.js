import React from "react";
import PropTypes from "prop-types";
import {MainPage} from "./main-page";

export const App = (props) => {
  return (
    <MainPage
      promoMovieTitle={props.promoMovieTitle}
      promoMovieBackgroundImageUrl={props.promoMovieBackgroundImageUrl}
      promoMoviePosterImageUrl={props.promoMoviePosterImageUrl}
      promoMovieGenre={props.promoMovieGenre}
      promoMovieYear={props.promoMovieYear}
    />
  );
};
App.propTypes = {
  promoMovieTitle: PropTypes.string.isRequired,
  promoMovieBackgroundImageUrl: PropTypes.string.isRequired,
  promoMoviePosterImageUrl: PropTypes.string.isRequired,
  promoMovieGenre: PropTypes.string.isRequired,
  promoMovieYear: PropTypes.number.isRequired,
};
