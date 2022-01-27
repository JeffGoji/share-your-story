import { gql } from "@apollo/client";

export const QUERY_STORIES = gql`
  query stories($username: String!) {
    stories(username: $username) {
      _id
      storyText
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
<<<<<<< HEAD
     stories {
=======
      stories {
>>>>>>> 7f6e68b371f1186ba74032ad4b140acd01d5cd2d
        _id
        storyText
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
<<<<<<< HEAD
            
=======
      
>>>>>>> 7f6e68b371f1186ba74032ad4b140acd01d5cd2d
    }
  }
`;
