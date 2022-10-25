
import './App.css';
import { client } from './api/client';
import { RandomDrinkQuery } from './api/graphql/randomDrink';

// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.
client.query({ query: RandomDrinkQuery }).then(response => {
  console.log(response.data.randomDrink.drinks[0].strDrink);
});


export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <h2>Console.logger fra en nettside ved bruk av apollo</h2>
      <br />
{/*       <DisplayLocations />
 */}
    </div>
  );
}

