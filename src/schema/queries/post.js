import { GraphQLInt, GraphQLNonNull } from "graphql";
import { fakeDatabase } from "../../FakeDatabse";
import { Post } from "../types/Post";

export default {
    post: {
        type: Post,
        description: 'Get details about a specific post',
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: function(parent, {id}) {
            return fakeDatabase.getBlogPost(id);
        }
    }
}