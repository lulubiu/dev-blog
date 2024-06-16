import { BlogPost, PostsByMonth } from '@/types/blog';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { compareDesc } from 'date-fns';

export async function getBlogPosts(): Promise<{ posts: BlogPost[]; postsByMonth: PostsByMonth }> {
  const postsDirectory = path.join(process.cwd(), 'content')
  let filenames = await fs.promises.readdir(postsDirectory)
  filenames = filenames.reverse()

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = await fs.promises.readFile(fullPath, 'utf8')

      const slug = filename.replace('.md', '')
      const { data, content } = matter(fileContents)
      data.slug = slug
      const month = dayjs(data.date).format('YYYY-MM-DD').slice(0, 7);

      return {
        id: month,
        metadata: data, // slug/url title date
        title: data.title,
        slug: slug,
        content,
      }
    })
  )

  posts.sort((a, b) => compareDesc(new Date(a.metadata.date), new Date(b.metadata.date)));

  // Group by month
  const postsByMonth: PostsByMonth = posts.reduce((acc: PostsByMonth, post: BlogPost) => {
    const month = dayjs(post.metadata.date).format('YYYY-MM-DD').slice(0, 7);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(post);
    return acc;
  }, {});

  return {
    posts,
    postsByMonth
  }
}
