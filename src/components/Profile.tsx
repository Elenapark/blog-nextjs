import Image from 'next/image';
import ProfileImage from '../../public/profile.png';
import Link from 'next/link';
import Button from './Button';

export default function Profile() {
  return (
    <section className="flex flex-col items-center py-8 px-2 gap-2">
      <Image src={ProfileImage} alt="Avatar" width={250} />
      <h3 className="text-xl md:text-2xl font-bold">
        안녕하세요, 개발자 <span className="text-orange-500">박성은</span>
        입니다.
      </h3>
      <h4>Front-end developer</h4>
      <p className="text-center text-sm">
        컴포트 존을 벗어나는 것을 즐깁니다.
        <br /> 비즈니스 성장을 우선시합니다.
      </p>
      <Link href="/contact">
        <Button
          title="Contact Me"
          className="bg-orange-200 rounded-md p-1 text-sm font-bold"
        />
      </Link>
    </section>
  );
}
