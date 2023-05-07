import Head from "next/head";
import { getPostSlugs, getSinglePost} from "@/lib/posts";

interface PostProps {
  title: string;
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  return {
    paths: postSlugs.map((slug: { slug: string; }) => ({
      params: {
        postSlug: slug.slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { postSlug: string } }) {
  const postData = await getSinglePost(params.postSlug);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: PostProps }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
    </div>
  );
}
