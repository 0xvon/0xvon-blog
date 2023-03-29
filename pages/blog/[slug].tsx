import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && typeof params.slug === "string") {
    const postData = await getPostData(params.slug);
    return {
      props: {
        postData,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

interface PostProps {
  postData: PostData & { contentHtml: string };
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export default Post;
