import Head from "next/head";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostData } from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

interface HomeProps {
  allPostsData: PostData[];
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <div>
      <Head>
        <title>0xvon</title>
      </Head>
      <h1>0vxon</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <a href={`/blog/${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;