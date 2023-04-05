import React from 'react';

const SKILLS = [
  'HTML5, CSS3, JavaScript(ES6+), TypeScript, ReactJS, NextJS(v12, v13)',
  'TailwindCSS, PostCSS, Styled-Components, Material-UI, Chakra-UI',
  'Redux, Recoil, Context API, Tanstack-query',
  'Webpack, Babel, Vite',
  'Firebase(Admin,Client), AWS S3, CloudFront',
  'NodeJS, ExpressJS, MongoDB',
  'Git, Slack',
];

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center my-6 py-6 gap-2 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold">Who am I?</h3>
      <h4>컴포트 존을 벗어나는 것을 즐기는 개발자</h4>
      <h4>개인의 성과만큼 팀의 성과도 중요시 여기는 개발자</h4>
      <h3 className="text-2xl font-bold">Career</h3>
      <h4>팀 스노우볼 (21.08 - 22.10)</h4>
      <p>
        프론트엔드 개발자로서 처음 커리어를 시작해 1년 2개월 근무하였습니다.
      </p>
      <h3 className="text-2xl font-bold">Skills</h3>
      <ul className="bg-gray-50 p-2 rounded-lg">
        {SKILLS.map((skill, idx) => (
          <li key={idx} className="list-inside list-disc">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
