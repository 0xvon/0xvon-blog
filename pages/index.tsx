import { GetStaticProps } from "next";
import { getSortedPostsData, PostData } from "../lib/posts";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';

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
      <h1 className={styles.header}>0vxon</h1>
      <div className={styles.postList}>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className={styles.postListItem}>
              <div className={styles.postItem}>
                <p className={styles.postDate}>{date}</p>
                <a href={`/blog/${id}`}>
                  <p className={styles.postTitle}>{title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Home;