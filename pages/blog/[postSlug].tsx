import Head from "next/head";
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./post.module.scss";
import "@wordpress/block-library/build-style/style.css";



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
    <div className={`${styles.single_post} font-sand`}>
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
      <div className="container-fluid mt-36 md:my-32 mx-auto md:px-36">
        <Breadcrumbs separator="›" aria-label="breadcrumb" className="ms-8 md:ms-0 mb-3">
          <Link underline="hover" color="black" href="/" className="text-normal text-lg">
            Blog
          </Link>
          <Typography color="text.primary-500" className="text-normal md:text-lg">{postData.title}</Typography>
        </Breadcrumbs>
      </div>
      <div className={`${styles.top_banner}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:px-[12rem]`}>
          <div className="p-4">
            <h1 className="text-4xl font-bold font-sand leading-snug">{postData.title}</h1>
            {/* <p className="text-lg mt-5" dangerouslySetInnerHTML={{ __html: postData.excerpt }}></p> */}
            <p className="text-xl mt-10">Learn how to use design thinking to solve your team’s most challenging problems.</p>
            <div className="my-10">
              <Link
                className='rounded bg-primary-100 text-white py-2 px-4 focus:outline-none focus:shadow-outline'
                style={{ backgroundColor: '#8b3dff', color: '#fff', borderRadius: '4px', padding: '0.5rem 1rem', fontWeight: 900, fontSize: '1.2rem' ,textDecoration: 'none'}}
                href="https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US"
              >
                Start your free trial
              </Link>
            </div>
          </div>
          <Image
            width={postData.featuredImage.node.mediaDetails.sizes[1].width}
            height={postData.featuredImage.node.mediaDetails.sizes[1].height}
            src={postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
            alt="slider"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="container mt-20 mx-auto md:px-36">
        <div className={`${styles.content} text-[22px] tracking-normal mt-4 leading-snug px-4 md:px-0`} dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}
