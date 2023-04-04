import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between p-4 border">
      <Link className="font-bold text-2xl" href="/">
        <h1>Elena&apos;s Blog</h1>
      </Link>
      <nav className="[&>a]:px-2">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
