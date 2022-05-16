import React from 'react';
import './App.scss';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import CountrySearchByContinent from './pages/countrySearchByContinent';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
  }),
  cache: new InMemoryCache(),
});

const App = () => (
  <div className='main_container'>
  <ApolloProvider client={client}>
    <CountrySearchByContinent />
  </ApolloProvider>
  </div>
);
export default App;
