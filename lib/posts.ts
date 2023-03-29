import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
  id: string;
  title: string;
  date: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const postData: PostData = {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
    };
    return postData;
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(): PostId[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(
  slug: string
): Promise<PostData & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const postData: PostData = {
    id: slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
  };

  return {
    ...postData,
    contentHtml,
  };
}
