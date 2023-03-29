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
      <div className={styles.content}>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className={styles.postListItem}>
              <div className={styles.postItem}>
                <p className={styles.postDate}>{date}</p>
                <Link href={`/general/${id}`} className={styles.link}>
                  <p className={styles.postTitle}>{title}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Home;