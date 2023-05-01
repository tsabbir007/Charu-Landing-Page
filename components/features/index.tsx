import HText from "@/shared/HText";
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { motion } from "framer-motion";
import { FeatureType, SelectedPage } from "@/shared/types";
import Image from "next/image";
import Img1 from './images/feature-1.png'
import Img2 from './images/feature-2.png'
import Img3 from './images/feature-3.png'

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
        IsVideoUrl: false,
        MediaUrl: Img2,
        Title: "Designed to foster collaboration",
        Description: "Encourage collaboration by inviting others to join you in editing or empower your entire team to oversee brand assets, engage in interactive brainstorming sessions on digital whiteboards, streamline approval processes, and enhance content production efficiency using tools such as document collaboration.",
        ButtonText: "Learn more",
    },
    {
        IsVideoUrl: false,
        MediaUrl: Img3,
        Title: "Too amazing to keep to myself.",
        Description: "No matter if you're designing a brochure or creating a social media campaign, showcase your artistic talents in the physical realm. Seamlessly publish, download, or distribute your creations with ease using Charu",
        ButtonText: "Create your own destiny",
    }
]


const Features = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    const featureItems = features.map((feature, index) =>
        <div
            key={index}
            className={"flex flex-col justify-center text-center"}
        >
            <div className={"mt-16 md:mt-24 items-center justify-between gap-20 md:flex " + (index % 2 && "md:flex-row-reverse")}>
                {feature.IsVideoUrl ? (<video src={feature.MediaUrl} autoPlay loop muted className="md:w-1/2 mt-8"></video>) : (
                    <Image
                        width={500}
                        height={500}
                        src={feature.MediaUrl}
                        alt="feature image"
                        className="md:w-1/2 md:mt-8"
                    />
                )}
                <div className="md:ps-10">
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
                        <p className="my-2">
                            {feature.Description}
                        </p>
                    </motion.div>
                    <div className="mt-10">
                        <ActionButton setSelectedPage={props.setSelectedPage}>
                            {feature.ButtonText}
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="feature">
            <div className="flex flex-col gap-4 md:px-8 items-center md:mt-80 mt-32">
                <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>Explore our modern mobile App</h1>
                <p className='text-gray-600 text-lg mt-1'>Discover the hidden gems that define our exceptional qualities.</p>
                {featureItems}
            </div>
        </section>
    )
}

export default Features