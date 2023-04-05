import { getAllPosts } from '@/service/posts';
import PostHome from '@/components/PostHome';

export const metadata = {
  title: "Posts | Elena's Blog ✨",
  description: 'Posts Page',
};

export default function PostsPage() {
  const posts = getAllPosts();
  return (
    <section className="flex p-4 gap-1">
      <PostHome posts={posts} />
    </section>
  );
}
