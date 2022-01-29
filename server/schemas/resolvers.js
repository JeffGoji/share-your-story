const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {

                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('stories')


                return userData;
            }

            throw new AuthenticationError('Not Logged In!');
        },

        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('stories')
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('stories')
        },

        stories: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Story.find(params).sort({ createdAt: -1 });
        },

        story: async (parent, { _id }) => {
            return Story.findOne({ _id });
        }
    },

    Mutation: {

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect username.')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password.')
            }

            const token = signToken(user);
            return { token, user };

        },

        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);

            return { token, user };
        },

        addStory: async (parent, args, context) => {
            if (context.user) {
                const story = await Story.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { stories: story._id } },
                    { new: true }
                );

                return story;
            }

            throw new AuthenticationError('You need to be Logged In!');
        },

        addComment: async (parent, { storyId, commentBody }, context) => {
            if (context.user) {
                const updatedStory = await Story.findOneAndUpdate(
                    { _id: storyId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedStory;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        updateStory: async (parent, { storyId, storyText }, context) => {
            if (context.user) {
                const updateStory = await Story.findOneAndUpdate(
                    { _id: storyId },
                    { storyText, username: context.user.username },
                    { new: true, runValidators: true }
                );

                return updateStory;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        deleteStory: async (parent, { storyId }, context) => {
            if (context.user) {
                const removeStory = await Story.findOneAndDelete(
                    { _id: storyId },
                    { new: true, runValidators: true }
                );

                return removeStory;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;