import React from 'react';

export const metadata = {
  title: "Posts | Elena's Blog ✨",
  description: 'Posts Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="p-2">{children}</section>
      {/* TODO: Categories */}
    </>
  );
}
