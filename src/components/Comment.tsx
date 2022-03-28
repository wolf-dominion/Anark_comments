import { FC, useState } from 'react'
import { CommentId, IComment } from '../typings/comment.types'

import '../App.css'

export const Comment: FC<{ id: CommentId, commentData: IComment }> = (props) => {
    const { commentData } = props
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
        // postReply(id, reply.text) this is where the post request would go to save the reply to database
        // for now it is just optimistically rendered
        SetReplyText('')
        setReplies(prevState => [...prevState,reply])
    };
    
    return (
        <div className='comment-container'>
            <span className='comment-item username'>{author.name.toUpperCase()}:</span>
            <span className='comment-item'>{text}</span>
            {
                <button 
                    className='reply-button comment-item'
                    onClick={replyHandler}
                >
                    Reply
                </button>
            }
            <span className='comment-text'></span>
            {
                postButtonClicked && replies.length &&
                replies.map(reply => {
                    return <div key={reply.id} className='reply-container reply-text'>
                        <span className='username'>{reply.author.name.toUpperCase()}:</span>
                        <span>{reply.text}</span>
                    </div>
                })
            }
            {
                replyButtonClicked &&
                <div className='reply-container'>
                    <span className='username'>NATHAN:</span>
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
        </div>
    )
};