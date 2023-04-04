import { getAllPosts } from '@/service/posts';
import React from 'react';

export default function Posts() {
  const posts = getAllPosts();
  return (
    <ul>
      {posts.map((item, idx) => (
        <li key={idx}>{item.id}</li>
      ))}
    </ul>
  );
}
