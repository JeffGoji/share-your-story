import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

//styling
import './index.css'

//Import Apollo:
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// GraphQL endpoint:
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {


  return (
    <ApolloProvider client={client}>
      <div>

        <Header />

        <Footer />

      </div>
    </ApolloProvider>
  );
}

export default App;
