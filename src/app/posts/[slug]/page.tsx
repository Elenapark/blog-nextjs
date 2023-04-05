import { getAllPosts, getPost } from '@/service/posts';

import getFormattedDate from '@/utils/getFormattedDate';
import Markdown from '@/components/Markdown';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} | Elena's Blog ✨`,
  };
}

// dynamic route는 기본적으로 SSR
export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  const { title, date } = post.metadata;

  return (
    <section className="p-2">
      <div className="flex justify-between items-center border-b p-2 my-2">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className="text-xs md:text-sm text-neutral-600">
          {getFormattedDate(date)}
        </p>
      </div>
      {/* markdown */}
      <Markdown markdown={post.contents} className="p-2" />
    </section>
  );
}

// POST 갯수가 많지 않으니 우선 전ㄴ체적으로 SSG로 id를 받아놓는다
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
