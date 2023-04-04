import { getAllPosts } from '@/service/posts';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// dynamic route는 기본적으로 SSR
export default function PostPage({ params }: Props) {
  console.log(params.slug);
  return <h1>여기는 {params.slug} 포스트입니다.</h1>;
}

// POST 갯수가 많지 않으니 우선 전ㄴ체적으로 SSG로 id를 받아놓는다
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
