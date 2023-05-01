import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import Image from 'next/image'
import styles from './home.module.scss'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    return (
        <section
            id="home"
        >
            <div className="flex flex-col justify-center items-center pt-40 md:pt-52 text-center">
                <h1 className='text-5xl font-bold text-gray-800 font-sand mb-5'>What will you design today?</h1>
                <p className='text-gray-600 text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                { /* margin top 4 */}
                <div className="flex flex-col gap-4 mt-4">
                    <ActionButton setSelectedPage={props.setSelectedPage}> Get Started</ActionButton>
                </div>
                <div className='relative hidden md:block mt-60'>
                    <div className='relative'>
                        <video src="https://content-management-files.canva.com/943bd1b3-ffd6-4892-a4df-b107cb33e657/hero-banner-en-1600x852.mp4" autoPlay loop className='mt-8'></video>
                    </div>
                    <div className={styles.relativeImages}>
                        <div className='left-[-10%] top-[-14%]'>
                            <Image
                                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=300/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            >

                            </Image>
                        </div>
                        <div className='right-[-10%] top-[-14%]'>
                            <Image
                                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=300/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            >

                            </Image>
                        </div>
                        <div className='left-[-10%] bottom-[-14%]'>
                            <Image
                                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=300/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            >

                            </Image>
                        </div>
                        <div className='right-[-10%] bottom-[-14%]'>
                            <Image
                                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=300/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
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