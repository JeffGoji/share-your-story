import { gql } from "@apollo/client";

export const QUERY_STORIES = gql`
query stories($username: String) {
    stories(username: $username) {
      _id
      storyText
      storyTitle
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_STORY = gql`
  query story($id: ID!) {
    story(_id: $id) {
      _id
      storyText
      storyTitle
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      stories {
        _id
        storyText
        storyTitle
        createdAt
        commentCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      stories {
        _id
        storyText
        storyTitle
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }     
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      
    }
  }
`;
