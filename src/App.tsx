import './App.css';
import { addPost, deletePost } from './features/Posts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

interface Post {
  id: number;
  name: string;
  content: string;
}

function App(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const postList = useSelector((state: { posts: { value: Post[] } }) => state.posts.value);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName('');
    setContent('');
  };

  return (
    <div className="App">
      <div className="addPost">
        <input type="text" placeholder="名前" onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={handleClick}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
