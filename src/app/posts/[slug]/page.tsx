import { getAllPosts, getPost } from '@/service/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import getFormattedDate from '@/utils/getFormattedDate';

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
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-neutral-600">{getFormattedDate(date)}</p>
      </div>
      {/* markdown */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="p-2"
      >
        {post.contents}
      </ReactMarkdown>
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
