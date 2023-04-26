import { fakeDatabase } from "../../FakeDatabse";
import { Post, PostInputType } from "../types/Post";

export default {
    addPost: {
        type: Post,
        description: 'Creates a new blog post',
        args: {
            post: { type: PostInputType }
        },
        resolve: function(parent, {post}) {
            return fakeDatabase.addNewBlogPost(post);
        }
    }
}