import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { SelectedPage, Post } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";




type Props = {
  setSelectedPage: (value: SelectedPage) => void
}



const Carousel = ({ setSelectedPage }: Props) => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllPosts();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  const isAboveSmallScreens = useMediaQuery('(min-width: 640px)')
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  var x = 2;
  if (isAboveSmallScreens) x = 3;
  if (isAboveMediumScreens) x = 5;

  const sliderOptions: {
    loop: boolean;
    mode: "free";
    slides: {
      origin: "center";
      perView: number;
      spacing: number;
    };
  } = {
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: x, spacing: 20 },
  };

  const internalSliderRef = useRef(null);

  const [ref, internalSlider] = useKeenSlider<HTMLDivElement>(sliderOptions);

  useEffect(() => {

    internalSlider.current?.update({
      ...sliderOptions
    });
  }, [internalSlider, sliderOptions]);


  const CarouselItems = posts.map((post: any, index: number) => (
    <div key={index} className="flex flex-col gap-4 keen-slider__slide">
      <a href={`/blog/${post.slug}`}>
        <Image
          width={post.featuredImage.node.mediaDetails.sizes[0].width}
          height={post.featuredImage.node.mediaDetails.sizes[0].height}
          src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
          alt="slider"
          className="rounded-lg w-full h-auto"
        />
      </a>
      <h6 className="font-bold text-[1rem]">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h6>
      <p className="text-sm text-slate-500" dangerouslySetInnerHTML={{ __html: trimExcerpt(post.excerpt, 15) }}></p>
    </div>
  ));


  return (
    <section
      id="blogs"
    >
      <motion.div className="flex flex-col justify-center items-center text-center pt-[7rem] md:pt-48"
        onViewportEnter={() => setSelectedPage(SelectedPage.Blogs)}
      >
        <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>Discover Our Latest Blogs</h1>
        <p className='text-gray-600 text-lg mt-1 mb-5'>Uncover captivating insights and fresh perspectives in our latest blog post, guaranteed to inform and inspire.</p>
        <div ref={ref} className="keen-slider mt-10 pb-52">
          {CarouselItems}
        </div>
      </motion.div>
    </section>
  )
}

export default Carousel;



function trimExcerpt(excerpt: string, length: number) {
  const words = excerpt.split(' ');
  const trimmedWords = words.slice(0, length);
  const trimmedExcerpt = trimmedWords.join(' ');
  if (words.length > length) {
    return trimmedExcerpt + ' ...';
  }
  return trimmedExcerpt;
}
