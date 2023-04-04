import Link from 'next/link';

export default function Header() {
  return (
    <header className="border">
      <div className="flex justify-between p-4 max-w-7xl mx-auto">
        <Link className="font-bold text-2xl" href="/">
          <h1>Elena&apos;s Blog</h1>
        </Link>
        <nav className="[&>a]:px-2">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/posts">posts</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </div>
    </header>
  );
}
