import commentsClient from "./commentsClient";

class CommentsController {
  commentsPath: string;

  constructor() {
    this.commentsPath = "/comments?limit=5";
  }

  fetchComments = async () => commentsClient.get(`${this.commentsPath}`);
}

export default new CommentsController();
