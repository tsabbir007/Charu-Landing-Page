import Head from "next/head";
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

interface PostProps {
  featuredImage: {
    node: {
      sourceUrl: string | undefined;
      altText: string;
      mediaDetails: {
        file: string;
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        };
      };
    };
  };

  title: string;
  slug: string;
  excerpt: string;
  content: string;
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

  if (!postData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      postData,
    },
    notFound: false,
  };
}

export default function Post({ postData }: { postData: any }) {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Head>
        <title key={postData.slug}>{postData.title}</title>
        <meta name="description" content={postData.excerpt} key="metadescription" />
      </Head>
      <Navbar
        isMainPage={false}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="container mt-32 mx-auto md:px-36">
        <Image
          width={postData.featuredImage.node.mediaDetails.sizes[1].width}
          height={postData.featuredImage.node.mediaDetails.sizes[1].height}
          src={postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
          alt="slider"
          className="rounded-lg w-full h-auto"
        />
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <div className="text-lg mt-4" dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}
