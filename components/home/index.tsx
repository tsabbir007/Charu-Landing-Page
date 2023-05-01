import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import Image from 'next/image'
import styles from './home.module.scss'
import Img1 from './images/charu-1.jpg'
import Img2 from './images/charu-6.png'
import Img3 from './images/charu-8.png'
import Img4 from './images/charu-5.png'
// import Promo from './videos/promo.mp4'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    return (
        <section
            id="home"
        >
            <div className="flex flex-col justify-center items-center pt-40 md:pt-52 text-center px-5">
                <h1 className='text-3xl md:text-5xl font-bold text-gray-800 font-sand mb-5'>Unleashing Creativity: What's Your Next Masterpiece?</h1>
                <p className='text-gray-600 text-md md:text-2xl mt-4'>Charu makes it easy to create and share professional designs.</p>
                { /* margin top 4 */}
                <div className="flex flex-col gap-4 mt-5">
                    <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                </div>
                <div className='relative mt-24 md:mt-60'>
                    <div className='relative md:max-w-[80%] mx-auto'>
                        <video src={"/promo.mp4"} autoPlay loop muted className='mt-8'></video>
                    </div>
                    <div className={`${styles.relativeImages} hidden md:block`}>
                        <div className='left-[0%] top-[-14%]'>
                            <Image
                                src={Img1}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            >

                            </Image>
                        </div>
                        <div className='right-[0%] top-[-14%]'>
                            <Image
                                src={Img2}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            >

                            </Image>
                        </div>
                        <div className='left-[0%] bottom-[-14%]'>
                            <Image
                                src={Img3}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            >

                            </Image>
                        </div>
                        <div className='right-[0%] bottom-[-14%]'>
                            <Image
                                src={Img4}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home