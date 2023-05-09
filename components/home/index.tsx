import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import Image from 'next/image'
import styles from './home.module.scss'
import Img1 from './images/charu-1.jpg'
import Img2 from './images/charu2.jpg'
import Img3 from './images/charu3.jpg'
import Img4 from './images/charu4.jpg'
// import Promo from './videos/promo.mp4'
import Link from 'next/link'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const scrollToSection = (event: any, sectionId: string) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Home = (props: Props) => {
    return (
        <div
            id="home"
        >
            <div className="flex flex-col justify-center items-center pt-[120px] md:pt-[135px] text-center px-5 mb-16">
                <h1 className='text-3xl md:text-5xl font-bold text-gray-800 font-sand mb-5'>Unleashing Creativity: What is Your Next Masterpiece?</h1>
                <p className='text-gray-600 text-md md:text-2xl mt-4'>Charu makes it easy to create and share professional designs.</p>
                { /* margin top 4 */}
                <div className="flex flex-col gap-4 mt-5">
                    <Link
                        className='rounded bg-primary-100 text-white py-2 px-4 focus:outline-none focus:shadow-outline'
                        style={{ backgroundColor: '#8b3dff', color: '#fff', borderRadius: '4px', padding: '0.5rem 1rem' }}
                        href="#features"
                        onClick={(event) => {
                            scrollToSection(event, '#features');
                        }}
                    >
                        Get Started
                    </Link>
                </div>
                <div className='relative mt-5 md:mt-10'>
                    {/* mt-24 md:mt-60 */}
                    <div className='relative md:max-w-[50%] mx-auto'>
                        <video src={"/promo-video.mp4"} autoPlay loop muted className='ms-3 mt-8'></video>
                    </div>
                    <div className={`${styles.relativeImages} hidden md:block`}>
                        <div className='left-[10%] top-[-14%]'>
                            <Image
                                src={Img1}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='max-w-[120%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='right-[12%] top-[0%]'>
                            <Image
                                src={Img2}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='max-w-[180%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='left-[0%] bottom-[5%]'>
                            <Image
                                src={Img3}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='max-w-[180%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='right-[10%] bottom-[-5%]'>
                            <Image
                                src={Img4}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='max-w-[180%] rounded'
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home