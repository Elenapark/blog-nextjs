import Posts from '@/components/Posts';
import Profile from '@/components/Profile';
import { getAllPosts } from '@/service/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Profile />
      <section className="p-2">
        <h1 className="text-xl font-bold">주요 포스트 ✨</h1>
        <Posts posts={posts} />
      </section>
    </main>
  );
}
