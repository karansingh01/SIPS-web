import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
});


const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token') || null;
    return {
        headers: {
            ...headers,
            authorization: token,
        }
    }
});

const client1 = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client1;