import axios from '../typings/axios';
import { CommentId, IComment } from '../typings/comment.types'

// These API functions are not complete!
export const getComments = function() {
    axios.get('/api/comments')
        .then((getResponse) => {
        const comments = getResponse.data as CommentId[];
        })
        .catch((err) => {});  
}

export  const getCommentDetails = function() {
    axios.get('/api/comments/<comment_id>')
        .then((getResponse) => {
        const commentData = getResponse.data as IComment;
        })
        .catch((err) => {});
}

export  const postReply = function() {
    axios.post('/api/comments/<comment_id>/reply', 'My groovy reply text')
        .then((getResponse) => {
        const replyId = getResponse.data as CommentId; // will return 200 with reply id if successfull. 
        })
        .catch((err) => {});
}