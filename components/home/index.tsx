import { SelectedPage } from '@/shared/types'
import Image from 'next/image'
import styles from './home.module.scss'
import Img1 from './images/charu-1.jpg'
import Img2 from './images/charu2.jpg'
import Img3 from './images/charu3.jpg'
import Img4 from './images/charu4.jpg'
import Link from 'next/link'
import Head from 'next/head'

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
    const charuOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        additionalType: "https://en.wikipedia.org/wiki/Graphics_software",
        name: "Charu",
        legalName: "Charu Pty Ltd",
        url: "https://www.charu.com",
        logo: "https://charu.com/charu.svg",
        contactPoint: [
            {
                "@type": "ContactPoint",
                url: "https://www.charu.com/help/contact-us",
                contactType: "Customer Support"
            }
        ],
        sameAs: ["https://www.instagram.com/charu.app", "https://www.youtube.com/@charu-app"]
    };
    
    return (
        <div
            id="home"
        >
            <Head>
                <title>Charu - The Best Free Graphics Design Photo Editor App</title>
                <link rel="icon" href="/charu.ico" />
                <meta charSet="utf-8"></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name="title" content="Charu - The Best Free Graphics Design Photo Editor App"></meta>
                <meta name="description" content="Charu is the best free graphics design photo editor app for Android. With Charu, you can create stunning photos and graphics with ease. Whether you're a beginner or a professional, Charu has everything you need to create amazing images."></meta>
                <meta name="keywords" content="charu, free graphics design photo editor app, Android app, photo editor, graphics design"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="28 days"></meta>
                <script key="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(charuOrganization) }} />
            </Head>
            <div className="flex flex-col justify-center items-center pt-[120px] md:pt-[135px] text-center md:px-5 mb-16">
                <h1 className='text-4xl md:text-6xl font-bold text-gray-800 font-sand mb-5'>What stunning design will you create today?</h1>
                <p className='text-gray-600 text-lg md:text-3xl mt-4'>Charu makes it easy to create and share professional designs.</p>
                { /* margin top 4 */}
                <div className="flex flex-col gap-4 mt-5">
                    <Link
                        className='rounded bg-primary-100 text-white py-2 px-4 focus:outline-none focus:shadow-outline'
                        style={{ backgroundColor: '#8b3dff', color: '#fff', borderRadius: '4px', padding: '0.5rem 1rem', fontSize: '1.2rem' }}
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                src={Img1}
                                alt="Picture of the author"
                                className='max-w-[120%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='right-[12%] top-[0%]'>
                            <Image
                                src={Img2}
                                alt="Picture of the author"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='max-w-[180%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='left-[0%] bottom-[5%]'>
                            <Image
                                src={Img3}
                                alt="Picture of the author"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='max-w-[180%] rounded'
                            >

                            </Image>
                        </div>
                        <div className='right-[10%] bottom-[-5%]'>
                            <Image
                                src={Img4}
                                alt="Picture of the author"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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