import { Component } from 'react'
import { Comment } from './components/Comment';
import { IComment } from './typings/comment.types'

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
      const sortedComments = comments.sort((a: IComment, b: IComment) => +new Date(a.time) - +new Date(b.time))
      this.setState({ comments: sortedComments });
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