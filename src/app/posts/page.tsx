import { getAllPosts } from '@/service/posts';
import Link from 'next/link';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section>
      <ul>
        {posts.map(({ id }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
