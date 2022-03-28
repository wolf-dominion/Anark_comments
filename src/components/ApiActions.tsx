import { CommentId, IComment } from '../typings/comment.types'
const axios = require('axios').default;

// These API functions are not complete!
export const getComments = function() {
    axios.get('/comments.json')
        .then((getResponse: string) => {
        const comments = JSON.parse(getResponse).data as CommentId[];
        console.log("comments: ", comments)
        })
        // .catch((err) => {});  
}

// export  const getCommentDetails = function() {
//     axios.get('/comments/<comment_id>')
//         .then((getResponse) => {
//         const commentData = getResponse.data as IComment;
//         })
//         .catch((err) => {});
// }

// export  const postReply = function(comment_id: string, reply: string) {
//     axios.post(`/comments/${comment_id}/reply`, reply)
//         .then((getResponse) => {
//         const replyId = getResponse.data as CommentId; // will return 200 with reply id if successfull. 
//         })
//         .catch((err) => {});
// }