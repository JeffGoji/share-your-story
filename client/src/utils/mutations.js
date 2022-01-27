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

// export const LOGIN_USER = gql`
//   mutation login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ADD_USER = gql`

  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


// export const ADD_USER = gql`
//   mutation addUser(
//     $username: String!
//     $email: String!
//     $password: String!
//   ) {
//     addUser(
//       username: $username
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         username
//         email
//       }
//     }
//   }
// `;

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
    addComment(storyId: $storyId, commentBody: $commentBody) {
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

export const UPDATE_STORY = gql`
mutation updateStory($storyId: ID!, $storyText: String!) {
  updateStory(storyId: $storyId, storyText: $storyText) {
    storyText
   
  }
}
`;

export const DELETE_STORY = gql`
mutation deleteStory($storyId: ID!) {
  deleteStory(storyId: $storyId) {
    storyText
    username
   
  }
}
`;
