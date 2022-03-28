import { FC, useState } from 'react'
import { CommentId, IComment } from '../typings/comment.types'
// import { postReply } from './ApiActions';

import '../App.css'

export const Comment: FC<{ id: CommentId, commentData: IComment }> = (props) => {
    const { id, commentData } = props
    const { author, text } = commentData

    const [replyText, SetReplyText] = useState('')
    const [replyButtonClicked, SetReplyButtonClicked] = useState(false)
    const [postButtonClicked, setPostButtonClicked] = useState(false)
    const [replies, setReplies] = useState<IComment[]>([])

    const replyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        SetReplyButtonClicked(true)
    };

    const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        SetReplyButtonClicked(false)
        setPostButtonClicked(true)

        const reply: IComment = {
            id: (new Date()).toString(),
            author: {
                name: 'Nathan',
                id: '66'
            },
            text: replyText,
            time: new Date()
        }
        // postReply(id, reply.text)
        SetReplyText('')
        setReplies(oldArray => [...oldArray,reply])
    };
    
    return (
        <div className='comment-container'>
            <h2>{author.name.toUpperCase()}:</h2>
            <span>{text}</span>
            {
                <button 
                    className='reply-button'
                    onClick={replyHandler}
                >
                    Reply
                </button>
            }
            <span className='comment-text'></span>
            {
                replyButtonClicked &&
                <div className='reply-container'>
                    <span>NATHAN:</span>
                    <form className='form' onSubmit={postHandler}>
                        <button className='post-button' type="submit">Post</button>
                        <input
                        value={replyText}
                        onChange={(e) => SetReplyText(e.target.value)}
                        type="text"
                        placeholder='What is your comment?'
                        className='input'
                        />
                    </form>
                </div>
            }
            {
                postButtonClicked && replies.length &&
                replies.map(reply => {
                    return <div key={reply.id} className='reply-container'>
                        <span>{reply.author.name}</span>
                        <span>{reply.text}</span>
                    </div>
                })
            }
        </div>
    )
};