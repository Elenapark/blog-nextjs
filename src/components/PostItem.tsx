import { BlogPost } from '@/service/posts';
import Link from 'next/link';
import getFormattedDate from '@/utils/getFormattedDate';
import TestImage from '../../public/blogs/blog-test.jpg';
import Image from 'next/image';

type Props = {
  item: BlogPost;
};

export default function PostItem({ item }: Props) {
  const { id, date, title } = item;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="border">
      <Link href={`/posts/${id}`}>
        <Image src={TestImage} alt="test" />
        <div className="p-2">
          <h1 className="text-sm font-bold">{title}</h1>
          <p className="text-xs text-neutral-500">{formattedDate}</p>
        </div>
      </Link>
    </li>
  );
}
