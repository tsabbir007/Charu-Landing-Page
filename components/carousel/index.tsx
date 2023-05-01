import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { CarouselType, SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from "next/image";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Carousel = ({ setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 640px)')
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  var x = 2;
  if (isAboveSmallScreens) x = 3;
  if (isAboveMediumScreens) x = 5;

  const carousels: Array<CarouselType> = [
    {
      Title: "Businesses love us",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "Take the stress out of preparing and presenting with our go-to decks.",
      MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
    },
    {
      Title: "Businesses love us",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "Take the stress out of preparing and presenting with our go-to decks.",
      MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
    },
    {
      Title: "Businesses love us",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "Take the stress out of preparing and presenting with our go-to decks.",
      MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
    },
    {
      Title: "Businesses love us",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
      Description: "See how teams of all sizes are using charu to manage their workflows and create together.",
      MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
    },
    {
      Title: "We make presenting easy",
      Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
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
      id="blogs"
    >
      <motion.div className="flex flex-col justify-center items-center text-center pt-48"
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

export default Carousel
