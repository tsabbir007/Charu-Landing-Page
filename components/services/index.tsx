import { ServiceType, SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Service = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    const services: Array<ServiceType> = [
        {
            IsPaid: false,
            Title: "Charu Free",
            Description: "For anyone wanting to design anything, on your own or with others. No design experience required, and it's free forever.",
            ButtonText: "Get Charu Free",
        },
        {
            IsPaid: true,
            Title: "Charu Pro",
            Description: "For individuals wanting unlimited access to premium content, with special tools to grow your brand or passion project.",
            ButtonText: "Start your free Pro trial"
        },
        {
            IsPaid: true,
            Title: "Charu for Team",
            Description: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
            ButtonText: "Start your free Team trial"
        }
    ]

    const serviceItems = services.map((service, index) => (
        <div
            key={index}
            className="flex flex-col gap-4 text-center"
        >
            <div className="flex flex-row justify-center gap-2 items-center mt-8">
                {service.IsPaid && <svg className="text-yellow-500 ml-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z" fill="currentColor"></path></svg>}
                <h1 className='text-2xl font-bold text-gray-800'>{service.Title}</h1>
            </div>
            <p className='text-gray-600 text-sm my-2'>{service.Description}</p>
            <ActionButton setSelectedPage={props.setSelectedPage}>{service.ButtonText}</ActionButton>
        </div>

    ));

    return (
        <section id="service">
            <div className="flex flex-col gap-4 pt-10 md:pt-32 items-center px-3">
                <h1 className="font-sand text-3xl font-bold mb-10 mt-5 text-center">A perfect fit for everyone</h1>
                <motion.div className="md:mt-5 items-center justify-between gap-8 md:flex">
                    {serviceItems}
                </motion.div>
            </div>
        </section>
    )
}

export default Service