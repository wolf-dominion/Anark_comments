import { FC } from 'react'
import { CommentId, IComment } from '../typings/comment.types'

export const Comment: FC<{ id: CommentId, commentData: IComment }> = (props) => {
    console.log('id: ', props.id, 'commentData: ', props.commentData)
    return <div>Hi I'm a comment</div>
};