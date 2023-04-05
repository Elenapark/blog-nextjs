import { getAllPosts } from '@/service/posts';
import React from 'react';
import PostItem from './PostItem';

export default function Posts() {
  const posts = getAllPosts();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((item) => (
        <PostItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
