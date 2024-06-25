import { BlogPost } from '@/types/blog';
import { compareDesc } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getThinkPosts(): Promise<{ posts: BlogPost[]}> {
  const postsDirectory = path.join(process.cwd(), 'content/think')
  let filenames = await fs.promises.readdir(postsDirectory)

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = await fs.promises.readFile(fullPath, 'utf8')

      const slug = filename.replace('.md', '')
      const { data, content } = matter(fileContents)
      data.slug = slug

      return {
        metadata: data,
        title: data.title,
        slug: slug,
        content,
      }
    })
  )

  posts.sort((a, b) => compareDesc(new Date(a.metadata.date), new Date(b.metadata.date)));

  return {
    posts
  }
}
