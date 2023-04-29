import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { CarouselType, SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from "next/image";


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Carousel = (props: Props) => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 640px)')
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  var x = 2;
  if (isAboveSmallScreens) x = 3;
  if (isAboveMediumScreens) x = 5;

  const carousels: Array<CarouselType> = [
    {
      Title: "Charu Create 2023",
      Url: "https://www.charu.com/create/",
      Description: "Watch all the highlights and launches from our biggest virtual event.",
      MediaUrl: "https://content-management-files.canva.com/1a81fef4-7a69-4cf6-9722-bbcdb60ecf5c/English.png",
    },
    {
      Title: "We've got a desktop app",
      Url: "https://www.charu.com/create/",
      Description: "Design and collaborate from the comfort of your desktop - no browser, no tabs, no distractions. Download the app for free!",
      MediaUrl: "https://content-management-files.canva.com/e85c7778-c24c-4ad8-9f6a-bdc406e799f0/desktopApp-en-500x375.jpg",
    },
    {
      Title: "Businesses love us",
      Url: "https://www.charu.com/create/",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://www.charu.com/create/",
      Description: "Take the stress out of preparing and presenting with our go-to decks.",
      MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
    },
    {
      Title: "We have a video editor",
      Url: "https://www.charu.com/create/",
      Description: "Create and edit professional videos with easy animations, audio and more.",
      MediaUrl: "https://content-management-files.canva.com/bb95860a-174b-4a6f-ab7b-dc64fbb7cf52/video-en-500x375.jpg",
    },
    {
      Title: "Businesses love us",
      Url: "https://www.charu.com/create/",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://www.charu.com/create/",
      Description: "Take the stress out of preparing and presenting with our go-to decks.",
      MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
    },
  ]

  const CarouselItems = carousels.map((carousel, index) => (
    <div key={index} className="flex flex-col gap-4 keen-slider__slide">
      <a href={carousel.Url}>
        <Image 
        width={500}
        height={375}
        src={carousel.MediaUrl} 
        alt="slider" 
        className="rounded-lg w-full h-auto" 
        />
        </a>
      <h6 className="font-bold text-xs">{carousel.Title}</h6>
      <p className="text-xs text-slate-500">{carousel.Description}</p>
    </div>
  ));
  

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: x, spacing: 20 },
  })
  return (
    <section
      id="about"
    >
      <div className="flex flex-col justify-center items-center text-center pt-48">
        <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>Were full of surprises</h1>
        <p className='text-gray-600 text-lg mt-1 mb-5'>Here are some of our best traits you might not know about</p>
        <div ref={ref} className="keen-slider mt-10 pb-52">
          {CarouselItems}
        </div>
      </div>
    </section>
  )
}

export default Carousel
