import Image from 'next/image';
import ProfileImage from '../../public/profile.png';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-center py-8 gap-2 ">
      <Image src={ProfileImage} alt="Avatar" width={250} />
      <h3 className="text-2xl font-bold">
        안녕하세요, 개발자 <span className="text-orange-500">박성은</span>
        입니다.
      </h3>
      <h4>Front-end developer</h4>
      <p>컴포트 존을 벗어나는 것을 즐기고, 비즈니스 성장을 우선시합니다.</p>
      <Link href="/contact">
        <button className="bg-orange-200 rounded-md p-1 text-sm font-bold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
