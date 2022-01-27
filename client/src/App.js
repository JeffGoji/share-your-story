import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from "./components/Nav";
// import Articles from "./components/Articles";
// import Resources from "./components/Resources";
// import ContactForm from "./components/Contact";

import Home from "./pages/Home"
import Login from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";

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
      <Routes>
        
          <Nav />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:username?" component={Profile} />
          </main>
          <Footer />
        
      </Routes>
    </ApolloProvider>
  );
}

export default App;

