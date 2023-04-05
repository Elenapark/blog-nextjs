import { BlogPost } from '@/service/posts';
import Link from 'next/link';
import getFormattedDate from '@/utils/getFormattedDate';
import Image from 'next/image';
import Chip from './Chip';

type Props = {
  item: BlogPost;
};

export default function PostItem({ item }: Props) {
  const { id, date, title, description, type, image } = item;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="shadow-md rounded-md overflow-hidden relative">
      <Chip
        title={type}
        className="bg-cyan-300 text-black font-bold text-md md:text-sm lg:text-xs p-1 absolute top-3 right-2 rounded-md"
      />
      <Link href={`/posts/${id}`}>
        <div>
          <Image
            src={`/images/${image}`}
            alt="test"
            height={350}
            width={500}
            className="w-full h-[300px] aspect-square object-cover"
          />
        </div>
        <div className="p-2">
          <h1 className="text-xl md:text-lg lg:text-sm font-bold">{title}</h1>
          <p className="text-md md:text-sm lg:text-xs text-neutral-500">
            {formattedDate}
          </p>
          <h2 className="text-lg md:text-md lg:text-sm">{description}</h2>
        </div>
      </Link>
    </li>
  );
}
