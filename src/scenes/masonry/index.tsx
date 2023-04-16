import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { CarouselType, SelectedPage } from '@/shared/types';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


export default function SSRMasonry() {
    const carousels: Array<CarouselType> = [
        {
            Title: "Canva Create 2023",
            Url: "https://www.canva.com/create/",
            Description: "Watch all the highlights and launches from our biggest virtual event.",
            MediaUrl: "https://content-management-files.canva.com/1a81fef4-7a69-4cf6-9722-bbcdb60ecf5c/English.png",
        },
        {
            Title: "We've got a desktop app",
            Url: "https://www.canva.com/create/",
            Description: "Design and collaborate from the comfort of your desktop - no browser, no tabs, no distractions. Download the app for free!",
            MediaUrl: "https://content-management-files.canva.com/e85c7778-c24c-4ad8-9f6a-bdc406e799f0/desktopApp-en-500x375.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.canva.com/create/",
            Description: "See how teams of all sizes are using Canva to manage their workflows and create together.",
            MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.canva.com/create/",
            Description: "Take the stress out of preparing and presenting with our go-to decks.",
            MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
        },
        {
            Title: "We have a video editor",
            Url: "https://www.canva.com/create/",
            Description: "Create and edit professional videos with easy animations, audio and more.",
            MediaUrl: "https://content-management-files.canva.com/bb95860a-174b-4a6f-ab7b-dc64fbb7cf52/video-en-500x375.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.canva.com/create/",
            Description: "See how teams of all sizes are using Canva to manage their workflows and create together.",
            MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.canva.com/create/",
            Description: "Take the stress out of preparing and presenting with our go-to decks.",
            MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
        },
        {
            Title: "Canva Create 2023",
            Url: "https://www.canva.com/create/",
            Description: "Watch all the highlights and launches from our biggest virtual event.",
            MediaUrl: "https://content-management-files.canva.com/1a81fef4-7a69-4cf6-9722-bbcdb60ecf5c/English.png",
        },
        {
            Title: "We've got a desktop app",
            Url: "https://www.canva.com/create/",
            Description: "Design and collaborate from the comfort of your desktop - no browser, no tabs, no distractions. Download the app for free!",
            MediaUrl: "https://content-management-files.canva.com/e85c7778-c24c-4ad8-9f6a-bdc406e799f0/desktopApp-en-500x375.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.canva.com/create/",
            Description: "See how teams of all sizes are using Canva to manage their workflows and create together.",
            MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.canva.com/create/",
            Description: "Take the stress out of preparing and presenting with our go-to decks.",
            MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
        },
        {
            Title: "We have a video editor",
            Url: "https://www.canva.com/create/",
            Description: "Create and edit professional videos with easy animations, audio and more.",
            MediaUrl: "https://content-management-files.canva.com/bb95860a-174b-4a6f-ab7b-dc64fbb7cf52/video-en-500x375.jpg",
        },
        {
            Title: "Businesses love us",
            Url: "https://www.canva.com/create/",
            Description: "See how teams of all sizes are using Canva to manage their workflows and create together.",
            MediaUrl: "https://content-management-files.canva.com/e6b1f1e7-00a1-49d2-920d-a3ca85edaccf/enterpriseCaseStudies-en-500x375.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.canva.com/create/",
            Description: "Take the stress out of preparing and presenting with our go-to decks.",
            MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
        },
        {
            Title: "We make presenting easy",
            Url: "https://www.canva.com/create/",
            Description: "Take the stress out of preparing and presenting with our go-to decks.",
            MediaUrl: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
        },
    ]

    return (
        <div className="flex flex-col justify-center py-52 text-center">
            <h1 className='text-3xl font-bold text-gray-800 font-sand mb-2'>We're full of surprises</h1>
            <p className='text-gray-600 text-lg mt-1 mb-20'>Here are some of our best traits you might not know about</p>
            <Box sx={{}}>
                <Masonry
                    columns={4}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={4}
                    defaultSpacing={1}
                >
                    {heights.map((height, i) => (
                        <Item key={i} sx={{ height }}>
                            <img src={carousels[i].MediaUrl} alt={carousels[i].Title} className="rounded-lg w-full h-auto" />
                        </Item>
                    ))}
                </Masonry>
            </Box>
        </div>
    );
}
