import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const cache = new InMemoryCache();


const client = new ApolloClient({
  uri:"https://api.spacex.land/graphql/",
  cache
});


ReactDOM.render(
    < ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  ,
  document.getElementById('root')
);

