import { getAllPosts } from '@/service/posts';
import Link from 'next/link';

import React from 'react';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section>
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
