const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('stories')
                .populate('comments')

                return userData;
            }

            throw new AuthenticationError('Not Logged In!');
        },

        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('stories')
            .populate('comments')
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('stories')
            .populate('comments')
        },

        stories: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Story.find(params).sort({ createdAt: -1 });
        },

        story: async (parent, { _id} ) => {
            return Story.findOne({ _id });
        }
    },

    Mutation: {

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect Login Information.')
            }

            const correctPw = await User.findOne({ password });

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Login Information.')
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
                    { $push: { stories: story._id }},
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
                    { $push: { stories: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedStory;
            }

            throw new AuthenticationError('You need to be Logged In!');
        }
    }
};

module.exports = resolvers;