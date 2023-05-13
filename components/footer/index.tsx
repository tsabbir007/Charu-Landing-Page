import { SelectedPage, FooterType } from '@/shared/types'
import styles from './footer.module.scss'
import Link from 'next/link'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = (props: Props) => {
    const footerElements: Array<FooterType> = [
        {
            Title: 'Features',
            Items: [
                {
                    Name: "Poster maker, flyer maker, card maker",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Variety of professionally designed templates",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Add text on photos with 50+ stylish fonts and graphical elements",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Create social media posts, stories, and cover designs",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Create your canvas design and layouts",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Make and edit designs with awesome photo editing tools",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Logo design by the logo templates for branding your project",
                    IsUpcomming: false,
                    Url: "",
                },

                {
                    Name: "Save and share your designs with friends in seconds",
                    IsUpcomming: false,
                    Url: "",
                }
            ]
        },
        {
            Title: 'Explore',
            Items: [
                {
                    Name: "Design ideas",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Custom prints",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Font pairing",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Colors",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Color wheel",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Color pallete generator",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Blog",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Apps",
                    IsUpcomming: false,
                    Url: "",
                },
                {
                    Name: "Template directory",
                    IsUpcomming: false,
                    Url: "",
                },
            ]
        },
        // {
        //     Title: 'Community',
        //     Items: [
        //         {
        //             Name: "Online communities",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //         {
        //             Name: "Creators",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //         {
        //             Name: "Charu Represents Fund",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //         {
        //             Name: "Developers",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //         {
        //             Name: "Partnerships",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //         {
        //             Name: "Affiliates program",
        //             IsUpcomming: false,
        //             Url: "",
        //         },
        //     ]
        // },
        {
            Title: 'Download',
            Items: [
                {
                    Name: "iOS",
                    IsUpcomming: true,
                    Url: "",
                },
                {
                    Name: "Android",
                    IsUpcomming: false,
                    Url: "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor",
                },
                {
                    Name: "Windows",
                    IsUpcomming: true,
                    Url: "",
                },
                {
                    Name: "Mac",
                    IsUpcomming: true,
                    Url: "",
                },
            ]
        },
        {
            Title: 'Company',
            Items: [
                {
                    Name: "About us",
                    IsUpcomming: false,
                    Url: "https://liilab.com",
                },
                {
                    Name: "Contact us",
                    IsUpcomming: false,
                    Url: "mailto:mail.liilab@gmail.com",
                },
                {
                    Name: "Terms and Conditions",
                    IsUpcomming: false,
                    Url: "/privacy/term_conditions",
                },
                {
                    Name: "Privacy policy",
                    IsUpcomming: false,
                    Url: "/privacy/privacy_policy",
                },
            ]
        },
    ]

    return (
        <section id='footer'>
            <div className='border-b border-gray-500'></div>
            <div className='content-center grid-1 grid gap-8 sm:grid-cols-2 md:grid-cols-4 px-10 pt-10'>
                {footerElements.map((footerElement, index) => (
                    <div
                        key={index}
                        className='footer-items'
                    >
                        <h1 className='text-md font-bold text-gray-800 mb-2'>{footerElement.Title}</h1>
                        <ul className=''>
                            {footerElement.Items.map((item, index) => (
                                <li
                                    key={index}
                                    className='text-gray-600 text-sm mt-1 leading-6'>
                                    {item.Url &&
                                        <Link href={item.Url}
                                            aria-label='coming soon'
                                        >{item.Name}
                                            {item.IsUpcomming && <span className={styles.Upcomming}>Comming soon!</span>}
                                        </Link>
                                    }
                                    {!item.Url &&
                                        <span>{item.Name}{item.IsUpcomming && <span className={styles.Upcomming}>Comming soon!</span>}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='mx-10'>
                <div className='border-b border-gray-500 py-5'></div>
                {/* <div className='md:flex justify-between py-10'> */}
                <div className='flex items-center flex-col py-10 md:flex-row md:justify-between'>
                    <div className='language'>
                        <h1 className='text-md border py-1 px-2 text-gray-800 mb-2 flex items-center gap-1'>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1.2em"
                                width="1.2em"
                                {...props}
                            >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 00-1.792-6.243A8.013 8.013 0 0119.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 014.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 014.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 01-4.469 6.201z" />
                            </svg>
                            <p>Language (English)</p>
                        </h1>
                    </div>
                    <div className='copyright text-center'>
                        <p className='text-gray-500 text-sm font-light mt-1'>© 2023 All Rights Reserved, Charu®</p>
                        <Link
                            aria-label='privacy policy'
                            href="/privacy/privacy_policy" className='text-sm'>
                            Privacy policy
                        </Link> |  <Link href="/privacy/term_conditions" className='text-sm'>
                            Terms
                        </Link>
                    </div>
                    <div className="flex gap-3 mt-3 md:mt-0">
                        <Link href="https://www.instagram.com/charu.app/"
                            aria-label='instagram'
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill=" #833AB4"
                                height="1.5em"
                                width="1.5em"
                                {...props}
                            >
                                <path d="M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339a1.077 1.077 0 01-1.078-1.078 1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z" />
                                <path d="M14.997 11.979 A3.003 3.003 0 0 1 11.994 14.982 A3.003 3.003 0 0 1 8.991 11.979 A3.003 3.003 0 0 1 14.997 11.979 z" />
                            </svg>
                        </Link>
                        <Link href="https://www.youtube.com/@charu-app"
                            aria-label='youtube'
                        >
                            <svg height="1.4em"
                                width="1.4em" viewBox="0 -77 512.00213 512" xmlns="http://www.w3.org/2000/svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00" /><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" /></svg>
                        </Link>
                        <Link href="mailto:mail.liilab@gmail.com"
                            aria-label='email'
                        >
                            <svg width="1.3em" height="1.3em" viewBox="7.086 -169.483 1277.149 1277.149" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M1138.734 931.095h.283M1139.017 931.095h-.283" /><path d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z" fill="#e75a4d" /><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#a)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><path fill="#e7e4d7" d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z" /><path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z" /><path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218-495.184-344.324z" /><path d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z" fill="#b2392f" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#b)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#c)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#d)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#e)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#f)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#g)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef" /><stop offset="1" stop-color="#e7e4d6" /></linearGradient><path fill="url(#h)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /><path fill="#f7f5ed" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer