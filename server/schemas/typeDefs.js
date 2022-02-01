const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    stories: [Story]
  }

  type Story {
    _id: ID
    storyText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    stories(username: String): [Story]
    story(_id: ID!): Story
   
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStory(storyText: String!): Story
    addComment(storyId: ID!, commentBody: String!): Story
    updateStory(storyId: ID!, storyText: String!): Story
    deleteStory(storyId: ID!): Story
    
  }

`;

module.exports = typeDefs;