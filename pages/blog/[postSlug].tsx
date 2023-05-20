import Head from "next/head";
import { getPostSlugs, getSinglePost, getYoastSeo } from "@/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from 'react'
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
  const yoastSeo = await getYoastSeo('post', params.postSlug);

  if (!postData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      postData,
      yoastSeo
    },
    notFound: false,
  };
}

export default function Post({ postData, yoastSeo }: { postData: any, yoastSeo: any }) {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
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

  if (!showChild) {
    return null
  }

  let ogUrl = yoastSeo.opengraphUrl.replace('https://blog.charu.app', 'https://charu-landing-page.vercel.app/blog')


  return (
    <div className={`${styles.single_post} font-sand`}>
      <Head>
        <title key="title" >{postData.title}</title>
        <meta name="description" content={yoastSeo.metaDesc} key="metadescription" />
        {/* open graph */}
        <meta property="og:title" content={yoastSeo.opengraphTitle} key="ogtitle" />
        <meta property="og:description" content={yoastSeo.opengraphDescription} key="ogdescription" />
        <meta property="og:url " content={ogUrl} key="ogurl" />
        <meta property="og:image" content={yoastSeo.opengraphImage.mediaItemUrl} key="ogimage" />
        <meta property="og:type" content={yoastSeo.opengraphType} key="ogtype" />
        <meta property="og:locale" content="en_US" key="oglocale" />
        <meta property="og:site_name" content={yoastSeo.opengraphSiteName} key="ogsitename" />

        {/* twitter */}
      </Head>
      <Navbar
        isMainPage={false}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="container-fluid mt-36 md:my-32 mx-auto md:px-36 ms-[16px] md:ms-0 mb-3">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="black" href="/" className="text-normal text-lg">
            Blog
          </Link>
          <Typography color="text.primary-500" className="text-normal md:text-lg">{postData.title}</Typography>
        </Breadcrumbs>
      </div>
      <div className={`${styles.top_banner}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:px-[12rem]`}>
          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold font-sand md:leading-snug">{postData.title}</h1>
            {/* <p className="text-xl mt-10" dangerouslySetInnerHTML={{ __html: trimExcerpt(postData.excerpt, 15) }}></p> */}
            <div className="my-10">
              <Link
                aria-label="Download on Google Play"
                className='rounded bg-primary-100 text-white py-2 px-4 focus:outline-none focus:shadow-outline'
                style={{ backgroundColor: '#8b3dff', color: '#fff', borderRadius: '4px', padding: '0.5rem 1rem', fontWeight: 900, fontSize: '1.2rem', textDecoration: 'none' }}
                href="https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US"
              >
                Start your free Design
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

function trimExcerpt(excerpt: string, length: number) {
  const words = excerpt.split(' ');
  const trimmedWords = words.slice(0, length);
  const trimmedExcerpt = trimmedWords.join(' ');
  if (words.length > length) {
    return trimmedExcerpt + ' ...';
  }
  return trimmedExcerpt;
}

