import Posts from '@/components/Posts';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <main>
      <Profile />
      <section className="p-2">
        <h1 className="text-xl font-bold">주요 포스트 ✨</h1>
        <Posts />
      </section>
    </main>
  );
}
