"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refetchAlcoholFilterParam = exports.alcoholFilterParam = void 0;
const client_1 = require("@apollo/client");
// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...
function alcoholFilterParam(alcohol) {
    const AlcoholFilterQuery = (0, client_1.gql) `
    query AlcoholFilter($alcohol : String!) {
    alcoholFilter(alcohol : $alcohol) @rest(type: "drinks", path: "filter.php?i=${alcohol}"){ 
        drinks
    }}
    `;
    return AlcoholFilterQuery;
}
exports.alcoholFilterParam = alcoholFilterParam;
/**
 * Tror man trenger å bruke hoosks om useQuery for å oppdatere cache,
 * men jeg får feilmelding i konsollen hver gang jeg bruker det??
 */
function refetchAlcoholFilterParam(alcohol) {
    const { data: alcoholFilterData, loading: alcoholFilterLoading, refetch: alcoholFilterRefetch } = (0, client_1.useQuery)(alcoholFilterParam(alcohol));
    return alcoholFilterRefetch;
}
exports.refetchAlcoholFilterParam = refetchAlcoholFilterParam;
