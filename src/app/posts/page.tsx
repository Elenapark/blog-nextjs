import Posts from '@/components/Posts';

const CATEGORIES = ['All Posts', '프론트엔드', '백엔드'];

export const metadata = {
  title: "Posts | Elena's Blog ✨",
  description: 'Posts Page',
};

export default function PostsPage() {
  return (
    <section className="flex p-4 gap-1">
      <div className="w-1/4">
        <ul className="sticky top-0">
          {CATEGORIES.map((item, idx) => (
            <li key={idx} className="text-md text-neutral-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5">
        <Posts />
      </div>
    </section>
  );
}
