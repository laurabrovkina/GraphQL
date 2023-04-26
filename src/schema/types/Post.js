import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { Author } from './Author';
import { fakeDatabase } from '../../FakeDatabse';
import { Comment } from './Comment';

export const Post = new GraphQLObjectType({
    name: "Post",
    description: "All details of a blog post",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },

        author: {
            type: Author,
            resolve: (post) => {
                return fakeDatabase.getAuthor(post.author)
            }
        },

        comments: {
            type: new GraphQLList(Comment),
            resolve: (post) => {
                return fakeDatabase.getCommentsForPost(post.id)
            }
        }
    })
});

export const PostInputType = new GraphQLInputObjectType({
    name: "PostInput",
    fields: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) }
    }
});