import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postsReducer from './features/Posts';

// storeを定義
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// ReactDOM.render を使用してレンダリング
ReactDOM.render(
  <React.StrictMode>
    {/* 定義したstoreをどのコンポーネントでも使えるようにする */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
