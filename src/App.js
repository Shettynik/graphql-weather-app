import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Home } from './Components/Home';


function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      {" "}
      <Home />
    </ApolloProvider>
  );
}

export default App;
