import { Component } from 'react'
import { Comment } from './components/Comment';
import { CommentId, IComment } from './typings/comment.types'

// type MyProps = {
//   message: string;
// }

type MyState = {
  comments: IComment[]
}

const testComment: IComment = {
  id: '1',
  author: {
    name: 'Hannah',
    id: '2'
  },
  text: 'This is a test comment',
  time: new Date(),
}

class App extends Component {
	// constructor(props: MyProps) {
  //   super(props);
  // }

  state: MyState = {
    comments: []
  }

  componentDidMount() {
    fetch('https://anark-1a4a7-default-rtdb.firebaseio.com/comments')
    .then((response) => response.json())
    .then(comments => {
        this.setState({ comments });
    });
}

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <Comment id={testComment.id} commentData={testComment}/>
        <ul>
                {this.state.comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
      </div>
    )
  }
}

export default App;