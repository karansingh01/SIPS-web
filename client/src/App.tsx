
import './App.css';
import { useQuery, gql } from '@apollo/client';


const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

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

