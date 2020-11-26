import Link from "next/link";
import Head from "next/head";
import Layout from "../../layouts/common";
import { getPostData, getAllPostIds } from "../../lib/posts";
import Date from "../../components/date";

export default function FirstPost(props) {
  const { postData } = props;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
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

        <div style={{ flex: 1 }}>
          <div style={{ margin: 20, textAlign: "center" }}>
            <div>
              {postData.title}
              <br />
              {postData.id}
              <br />
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
