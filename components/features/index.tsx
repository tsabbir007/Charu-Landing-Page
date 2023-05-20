import HText from "@/shared/HText";
import ActionButton from '@/shared/ActionButton'
import { motion } from "framer-motion";
import { FeatureType, SelectedPage } from "@/shared/types";
import Image from 'next/image'
import Img1 from './images/feature1.jpg'
import Img3 from './images/feature3.jpg'
//import viewport


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const features: Array<FeatureType> = [
    {
        IsVideoUrl: false,
        MediaUrl: Img1,
        Title: "Pre-designed templates",
        Description: "Take advantage of a vast array of professionally crafted designs, captivating visuals, and engaging content at your disposal. Whether you're looking to create eye-catching brochures or enhance your social media posts, our extensive library of templates, images, and top-notch content ensures that you'll always have the right tools to bring your vision to life.",
        ButtonText: "Start designing",
    },
    {
        IsVideoUrl: true,
        MediaUrl: "/feature-vdo.mp4",
        Title: "Unlock Your Creativity with Editable Templates!",
        Description: "Discover the power of editable templates and bring your creative visions to life effortlessly. With editable templates, you can easily customize pre-designed layouts, graphics, and elements to suit your unique style. No design skills? No problem! These templates make it simple for anyone to create stunning visuals in no time. Whether you need a captivating social media post, a professional presentation slide, or a striking website banner, editable templates have got you covered. Save time and effort with ready-to-use designs that you can personalize with your own text, images, and colors. Embrace the flexibility and convenience of editable templates and watch your designs shine.",
        ButtonText: "Create now",
    },
    {
        IsVideoUrl: false,
        MediaUrl: Img3,
        Title: "Discover Your Style with Charu",
        Description: "Charu's stylish templates enhance your resume with a touch of personal flair. Stand out from the crowd and showcase your unique personality with our visually appealing designs, making a memorable impression.",
        ButtonText: "Create your style now",
    }
]


const Features = ({ setSelectedPage }: Props) => {
    const featureItems = features.map((feature, index) =>
        <div
            key={index}
            className={"flex flex-col justify-center text-start"}
        >
            <div className={"mt-16 md:mt-24 items-center justify-between gap-20 md:flex " + (index % 2 && "md:flex-row-reverse")}>
                {feature.IsVideoUrl ? (<video src={feature.MediaUrl} autoPlay loop muted className="md:w-1/2 mt-8"></video>) : (

                    <Image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={feature.MediaUrl}
                        alt="feature image"
                        className="md:w-1/2 md:mt-8 rounded h-auto max-w-full"
                    />

                )}
                <div className="mt-10 md:mt-0 md:ps-10">
                    <HText>{feature.Title}</HText>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5 text-lg text-gray-600">
                            {feature.Description}
                        </p>
                    </motion.div>
                    <div className="mt-8">
                        <ActionButton setSelectedPage={setSelectedPage} ariaLabel={feature.Title}>
                            {feature.ButtonText}
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="features">
            <motion.div className="flex flex-col gap-4 md:px-8 items-center pt-[7rem] md:pt-48"
                onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
            >
                <div className="text-center">
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-800 font-sand mb-2'>Explore our modern mobile App</h1>
                    <p className='text-gray-600 text-base mt-3 md:mt-10 md:text-xl'>Discover the hidden gems that define our exceptional qualities.</p>
                </div>
                {featureItems}
            </motion.div>
        </section>
    )
}

export default Features