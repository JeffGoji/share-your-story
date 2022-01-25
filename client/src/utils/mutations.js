import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $region: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      region: $region
    ) {
      token
      user {
        username
        email
        region
      }
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory($storyText: String!) {
    addStory(storyText: $storyText) {
      _id
      storyText
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($storyId: ID!, $commentBody: String!) {
    addComment(storyId: $storyId, commnetBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
