import Link from "next/link";
import Head from "next/head";
import Layout from "../../layouts/common";
import { getSortedPostsData } from "../../lib/posts";

export default function FirstPost(props) {
  const { allPostsData } = props;

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center flex-col"
        style={{
          minHeight: "75vh",
        }}
      >
        <div>
          <h2 style={{ color: "blue" }}>
            <Link href="/">
              <a>Back home</a>
            </Link>
          </h2>
        </div>

        <div>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-4">
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
