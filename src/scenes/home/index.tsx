import React from 'react'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    return (
        <section
            id="home-page"
        >
            <div className="flex flex-col justify-center items-center pt-52 text-center">
                <h1 className='text-4xl font-bold text-gray-800'>What will you design today?</h1>
                <p className='text-gray-600 text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                { /* margin top 4 */}
                <div className="flex flex-col gap-4 mt-4">
                    <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                </div>

                <video src="https://content-management-files.canva.com/943bd1b3-ffd6-4892-a4df-b107cb33e657/hero-banner-en-1600x852.mp4" autoPlay loop className='w-3/4 mt-8'></video>
            </div>
        </section>
    )
}

export default Home