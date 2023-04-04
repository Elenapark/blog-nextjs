import Form from '@/components/Form';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center my-6 py-6 gap-2 rounded-lg h-[100vh]">
      <div className="flex flex-col items-center gap-4 my-10">
        <h3 className="text-2xl font-bold">Contact Me</h3>
        <p>Sungeun33@gmail.com</p>
        <a href="https://github.com/Elenapark" target="_blank">
          <AiFillGithub size="45" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-4 mb-10">
        <h3 className="text-2xl font-bold">Or Send me an Email</h3>
        <Form />
      </div>
    </section>
  );
}
