import { Component } from 'react'
import { Comment } from './components/Comment';
import { CommentId, IComment } from './typings/comment.types'

type MyState = {
  comments: IComment[]
}

class App extends Component {
	// constructor(props: MyProps) {
  //   super(props);
  // }

  state: MyState = {
    comments: []
  }

  componentDidMount() {
    fetch('/comments.json')
    .then((response) => response.json())
    .then(comments => {
        this.setState({ comments });
    });
}

  render() {
    return (
      <div>
        <div>
                {this.state.comments.map((comment) => (
                    <Comment key={comment.id} id={comment.id} commentData={comment}/>
                ))}
        </div>
      </div>
    )
  }
}

export default App;