import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how r u?", likesCount: 12 },
    { id: 2, message: "it's my first post", likesCount: 11 },
    { id: 2, message: "Blabal", likesCount: 11 },
    { id: 2, message: "Hey", likesCount: 11 }
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      My Posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
