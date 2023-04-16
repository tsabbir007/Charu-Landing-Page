import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ActionButton from "@/shared/ActionButton";
import { FeatureType, SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery'


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Carousel = (props: Props) => {
  const features: Array<FeatureType> = [
    {
      IsPaid: false,
      Title: "Canva Free",
      Description: "For anyone wanting to design anything, on your own or with others. No design experience required, and it's free forever.",
      ButtonText: "Get Canva Free",
    },
    {
      IsPaid: true,
      Title: "Canva Pro",
      Description: "For individuals wanting unlimited access to premium content, with special tools to grow your brand or passion project.",
      ButtonText: "Start your free Pro trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    },
    {
      IsPaid: true,
      Title: "Canva for Team",
      Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
      ButtonText: "Start your free Team trial"
    }
  ]

  const featureItems = features.map(feature =>
    <div className="flex flex-col gap-4 keen-slider__slide">
      <a href="#"><img src="https://content-management-files.canva.com/bb95860a-174b-4a6f-ab7b-dc64fbb7cf52/video-en-500x375.jpg" alt="slider" className="rounded-lg w-full h-auto" /></a>
      <h6 className="font-bold text-xs">{feature.Title}</h6>
      <p className="text-xs text-slate-500">{feature.Description}</p>
    </div>

  );

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { perView: 3, spacing: 15 },
  })
  return (
    <div ref={ref} className="keen-slider py-52">
      {featureItems}
    </div>
  )
}

export default Carousel
