import HText from "@/shared/HText";
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { motion } from "framer-motion";
import { ServiceType, SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const services: Array<ServiceType> = [
    {
        IsVideoUrl: true,
        MediaUrl: "https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4",
        Title: "Ready-made designs",
        Description: "Benefit from thousands of professional templates, images, and quality content to choose from, for example when ordering new business cards or editing your next video.",
        ButtonText: "Create a design",
    },
    {
        IsVideoUrl: true,
        MediaUrl: "https://static.canva.com/anon_home/benefits/benefits-collab-en-974x634.mp4",
        Title: "Built for teamwork",
        Description: "Invite people to edit with you or set your whole team up to manage brand assets, brainstorm on whiteboards, get approvals, and scale content with tools like docs.",
        ButtonText: "Work together"
    },
    {
        IsVideoUrl: false,
        MediaUrl: "https://static.canva.com/anon_home/benefits/benefits-share-en-1288x838.jpg",
        Title: "Too good not to share",
        Description: "Whether you need to build a new website or print some posters, let your creations shine in the real world. Easily publish, download or share whatever you make in Canva.",
        ButtonText: "Design your vision"
    }
]


const Services = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    const serviceItems = services.map((service, index) =>
        <div className={"mt-16 items-center justify-between gap-20 md:mt-28 md:flex " + (index % 2 && "md:flex-row-reverse")}>
            {service.IsVideoUrl ? (<video src={service.MediaUrl} autoPlay loop muted className="md:w-1/2 mt-8"></video>) : (
                <img src={service.MediaUrl} alt="service image" className="md:w-1/2 mt-8" />
            )}
            <div className="ps-10">
                <HText>{service.Title}</HText>
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
                    <p className="my-5">
                        {service.Description}
                    </p>
                </motion.div>
                <div className="mt-16">
                    <ActionButton setSelectedPage={props.setSelectedPage}>
                        {service.ButtonText}
                    </ActionButton>
                </div>
            </div>
        </div>
    );

    return (
        <section id="services">
            <div className="flex flex-col gap-4 mt-8 md:px-8 items-center">
                {serviceItems}
            </div>
        </section>
    )
}

export default Services