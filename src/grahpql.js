import gql from 'graphql-tag';

export const ME = gql`
  query me {
    user(login: "kupuma-ru21") {
      name
      avatarUrl
    }
  }
`;
