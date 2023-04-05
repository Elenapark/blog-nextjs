import Profile from '@/components/Profile';

export const metadata = {
  title: "About | Elena's Blog ✨",
  description: 'About Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Profile />
      <section className="p-2">{children}</section>
    </>
  );
}
