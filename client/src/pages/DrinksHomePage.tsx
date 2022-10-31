import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { client } from '../api/client';
/* import { AlcoholDrinkQuery } from './api/graphql/alcoholDrinks';
 */
import { HashRouter, Route, Routes } from "react-router-dom";
/** AlcoholDrinkQuery gql query to retreive all tracks */

export const AlcoholDrinkQuery = gql`
 query RandomDrink {
  randomDrink @rest(type: "drinks", path: "filter.php?a=Alcoholic"){ 
    drinks {
      strDrink
      idDrink
      strDrinkThumb
    }
  }}
`;

/* 
client.query({ query: AlcoholDrinkQuery }).then(response => {
    console.log(response.data);
  }); */


/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const Tracks = () => {
  const { loading, error, data } = useQuery(AlcoholDrinkQuery);
};

export default Tracks;
