import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'Front-end' | 'Back-end' | 'All Posts' | string;
  image: string;
};
const postDir = path.join(process.cwd(), 'blogposts');

export const getAllPosts = () => {
  const postFileNames = fs.readdirSync(postDir);
  return postFileNames.map((filename: string) => {
    // id value를 얻기위한 .md 확장자명 제거
    const id = filename.replace(/\.md$/, '');

    // read md file as string

    const filePath = path.join(postDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    // post metadata를 가져오기 위한 gray-matter
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      type: matterResult.data.type,
      image: matterResult.data.image,
    };

    return blogPost;
  });
};

export const getPost = (id: string) => {
  const filePath = path.join(postDir, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const matterResult = matter(fileContents);
  const contents = matterResult.content;

  const postDetail = {
    metadata: matterResult.data,
    contents,
  };

  return postDetail;
};
