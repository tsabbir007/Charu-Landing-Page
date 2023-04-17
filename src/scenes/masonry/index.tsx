import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { MasonryType, SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery'

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


export default function SSRMasonry() {
    const isAboveSmallScreens = useMediaQuery('(min-width: 640px)')
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    var x = 2;
    if (isAboveSmallScreens) x = 4;
    if (isAboveMediumScreens) x = 6;

    const masonry: Array<MasonryType> = [
        {
            Title: "Charu Create 2023",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAD7RS_AUHA/5/0/400w-7xP3yZCn8fI.jpg",
        },
        {
            Title: "We've got a desktop app",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADZ4JnHDfI/3/0/286w-ZlWNaw0QaX8.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADapG51fls/3/0/400w-aChlnr5L_Ww.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAEXA859wm0/2/0/400w-jRAxCD5Qpy4.jpg",
        },
        {
            Title: "We have a video editor",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADzZv2-vpk/1/0/400w-ogkaP-Wi21g.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAEGDHjLsXk/10/0/400w-qLQxVs9xg-Q.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADaogF5JtM/5/0/400w-gOabQZ-2x58.jpg",
        },
        {
            Title: "Charu Create 2023",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADaosVPiEU/1/0/400w-HI9ygtHJxXI.jpg",
        },
        {
            Title: "We've got a desktop app",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADannRC2Cs/2/0/400w-zdxoayS1dW4.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAEWSCtgF7E/1/0/400w-Ur_cwx4NbVE.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAEgGRQ-LHs/7/0/400w-zHUy6GwfcuI.jpg",
        },
        {
            Title: "We have a video editor",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADakBMT2L8/7/0/400w-wHZFkdNCb4g.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EADao85M6_0/1/0/400w-4vwp1100Ykw.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.charu.com/create/",
            MediaUrl: "https://template.canva.com/EAD8SnpZkbk/2/0/400w-7el5iY3r3Cw.jpg",
        },
    ]

    return (
        <section id="products">
            <div className="flex flex-col justify-center pt-48 text-center">
                <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>We're full of surprises</h1>
                <p className='text-gray-600 text-lg mt-1 mb-20'>Here are some of our best traits you might not know about</p>
                <Box sx={{}}>
                    <Masonry columns={x} spacing={2}>
                        {masonry.map((item, index) => (
                            <div key={index}>
                                <a href={item.Url}>
                                    <img
                                        src={`${item.MediaUrl}?w=162&auto=format`}
                                        srcSet={`${item.MediaUrl}?w=162&auto=format&dpr=2 2x`}
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
            </div>
        </section>
    );
}
