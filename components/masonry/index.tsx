import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { motion } from "framer-motion";
import { MasonryType, SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image';
import Img1 from './images/charu-1.jpg';
import Img10 from './images/charu-2.jpg';
import Img12 from './images/charu-3.jpg';
import Img4 from './images/charu-4.jpg';
import Img5 from './images/charu-5.png';
import Img6 from './images/charu-6.png';
import Img7 from './images/charu-7.png';
import Img8 from './images/charu-8.png';
import Img9 from './images/charu-9.png';
import Img2 from './images/charu-10.png';
import Img11 from './images/charu-11.png';
import Img3 from './images/charu-12.png';
import Img13 from './images/charu-13.png';
import Img14 from './images/charu-14.png';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const SSRMasonry = ({ setSelectedPage }: Props) => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 640px)')
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    var x = 2;
    if (isAboveSmallScreens) x = 4;
    if (isAboveMediumScreens) x = 6;

    const masonry: Array<MasonryType> = [
        {
            Title: "Charu Create 2023",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img1,
        },
        {
            Title: "We've got a desktop app",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img2,
        },
        {
            Title: "Businesses love us",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img3,
        },
        {
            Title: "We make presenting easy",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img4,
        },
        {
            Title: "We have a video editor",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img5,
        },
        {
            Title: "Businesses love us",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img6,
        },
        {
            Title: "We make presenting easy",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img7,
        },
        {
            Title: "Charu Create 2023",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img8,
        },
        {
            Title: "We've got a desktop app",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img9,
        },
        {
            Title: "Businesses love us",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img10,
        },
        {
            Title: "We make presenting easy",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img11,
        },
        {
            Title: "We have a video editor",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img12,
        },
        {
            Title: "Businesses love us",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img13,
        },
        {
            Title: "We make presenting easy",
            Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
            MediaUrl: Img14,
        },
    ]

    return (
        <section id="templates">
            <motion.div className="flex flex-col justify-center pt-[7rem] md:pt-48 text-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Templates)}
            >
                <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>Discover our incredible selection of templates</h1>
                <p className='text-gray-600 text-lg mt-1 mb-20'>Find the perfect templates to enhance your creativity and productivity</p>
                <Box sx={{}}>
                    <Masonry columns={x} spacing={2}>
                        {masonry.map((item, index) => (
                            <div key={index}>
                                <a href={item.Url}>
                                    <Image
                                        src={item.MediaUrl}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt={item.Title}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            display: 'block',
                                            width: '100%',
                                        }}
                                    />
                                </a>
                            </div>
                        ))}
                    </Masonry>
                </Box>
            </motion.div>
        </section>
    );
}

export default SSRMasonry;
