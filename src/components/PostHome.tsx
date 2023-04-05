'use client';

import { BlogPost } from '@/service/posts';
import { useState } from 'react';
import Posts from './Posts';

const CATEGORIES = ['All Posts', 'Front-end', 'Back-end'];

export default function PostHome({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState('All Posts');

  return (
    <>
      <div className="w-1/4">
        <ul className="sticky top-0">
          {CATEGORIES.map((item, idx) => (
            <li
              key={idx}
              className="text-lg text-neutral-500"
              onClick={() => setCategory(item)}
            >
              <span
                className={`${
                  category === item
                    ? 'border-b-2 border-cyan-500 '
                    : 'border-transparent'
                } hover:text-cyan-500`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5">
        <Posts posts={posts} category={category} />
      </div>
    </>
  );
}
