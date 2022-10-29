import { gql, useQuery } from '@apollo/client';

// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...
export function alcoholFilterParam (alcohol : String) {
 const AlcoholFilterQuery = gql`
    query AlcoholFilter($alcohol : String!) {
    alcoholFilter(alcohol : $alcohol) @rest(type: "drinks", path: "filter.php?i=${alcohol}"){ 
        drinks
    }}
    `;
    return AlcoholFilterQuery;
}

/**
 * Tror man trenger å bruke hoosks om useQuery for å oppdatere cache, 
 * men jeg får feilmelding i konsollen hver gang jeg bruker det??
 * 
 * Mulig denne også kan brukes direkte i filen (FilterButtons.tsx)
 */
export function refetchAlcoholFilterParam(alcohol : String) {
  const { data: alcoholFilterData, loading: alcoholFilterLoading, refetch: alcoholFilterRefetch } = useQuery(alcoholFilterParam(alcohol));

  return alcoholFilterRefetch;
}
