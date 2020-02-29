import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import client from './client';
import { ME } from './grahpql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello Graphql</div>;
      <Query query={ME}>
        {({ loading, error, data }) => {
          if (loading) return 'loading...';
          if (error) return `Error! ${error.message}`;
          return <div>{data.user.avatarUrl}</div>;
        }}
      </Query>
    </ApolloProvider>
  );
};

export default App;
