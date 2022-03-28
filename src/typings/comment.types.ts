export type CommentId = string;

export interface IComment {
  id: CommentId,
  author: {
    name: string,
    id: string
  },
  text: string,
  time: Date,
}