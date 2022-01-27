import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";

import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer'
import MainPage from './pages/index';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Resources from './components/Resources'
import StoryList from './components/StoryList'
import Profile from './pages/Profile'

//styling
import './index.css'

//Import Apollo:
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// GraphQL endpoint:
const httpLink = createHttpLink({
uri: 'http://localhost:3000/graphql',
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
      <BrowserRouter>
        <Header />
        <Nav />
        <div className="container-fluid">

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resources" element={<Resources />} />
            <Route path='/stories' element={<StoryList />} />
            <Route path='/profile' element={<Profile />} />

          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
