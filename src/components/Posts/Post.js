import React, { useState } from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost, posts, setPosts } = props;

  const [showCommentBox, setShowCommentBox] = useState(false);

  const toggleCommentBox = () => setShowCommentBox(!showCommentBox);

  const [newComment, setNewComment] = useState("");

  const addComment = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        post.comments.push({ id: 42, username: "my username", text: newComment });

        return post;
      } else {
        return post;
      }
    });

    setPosts(newPosts);
    setShowCommentBox(false);
  };

  const commentHandler = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        likePost={() => likePost(post.id)}
        numberOfLikes={post.likes}
        showCommentBox={showCommentBox}
        toggleCommentBox={toggleCommentBox}
        commentHandler={commentHandler}
        addComment={() => addComment(post.id)}
      />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
