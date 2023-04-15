import { FeatureType, SelectedPage } from '@/shared/types'
import HText from "@/shared/HText";
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Feature = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    const features: Array<FeatureType> = [
        {
            title: 'Free',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod amet consectetur adipisicing elit, amet consectetur adipisicing elit',
        }
    ]

    return (
        <section id="feature">
            <div className="flex flex-col gap-4 mt-8 md:px-8 items-center">
                <h1 className='text-3xl font-bold text-gray-800 mb-10'>A perfect fit for everyone</h1>

                <motion.div className="mt-5 items-center justify-between gap-8 md:flex mx-10">
                    <div className="flex flex-col gap-4 text-center">
                        <div className="flex flex-row justify-center gap-2 items-center">
                            <h1 className='text-2xl font-bold text-gray-800'>Free</h1>
                        </div>
                        <p className='text-gray-600 text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod amet consectetur adipisicing elit, amet consectetur adipisicing elit</p>
                        <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                    </div>

                    <div className="flex flex-col gap-4 text-center">
                        <div className="flex flex-row justify-center gap-2 items-center">
                            <svg className="text-yellow-500 ml-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z" fill="currentColor"></path></svg>
                            <h1 className='text-2xl font-bold text-gray-800'>Canva Pro</h1>
                        </div>
                        <p className='text-gray-600 text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod amet consectetur adipisicing elit, amet consectetur adipisicing elit</p>
                        <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                    </div>

                    <div className="flex flex-col gap-4 text-center">
                        <div className="flex flex-row justify-center gap-2 items-center">
                            <svg className="text-yellow-500 ml-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z" fill="currentColor"></path></svg>
                            <h1 className='text-2xl font-bold text-gray-800'>Canva Teams</h1>
                        </div>
                        <p className='text-gray-600 text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod amet consectetur adipisicing elit, amet consectetur adipisicing elit</p>
                        <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                    </div>
                </motion.div>

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex text-center">
                    {/* Video */}
                    <video src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4" autoPlay loop muted className="md:w-1/2 mt-8"></video>

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. pascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={props.setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex text-center">
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. pascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={props.setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                    {/* Video */}
                    <video src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4" autoPlay loop muted className="md:w-1/2 mt-8"></video>
                </div>
            </div>
        </section>
    )
}

export default Feature