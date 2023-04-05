'use client';

import { BlogPost } from '@/service/posts';
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

type Props = {
  posts: BlogPost[];
  category?: 'All Posts' | 'Front-end' | 'Back-end' | string;
};

export default function Posts({ posts, category = 'All Posts' }: Props) {
  const refinedPosts = (category: string) => {
    return posts.filter((item) => {
      if (category !== 'All Posts') {
        return item.type === category;
      }
      return item;
    });
  };

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {refinedPosts(category).map((item) => (
        <PostItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
