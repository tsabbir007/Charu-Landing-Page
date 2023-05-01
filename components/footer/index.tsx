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
                    Name: "Curved text generator",
                    IsUpcomming: false,
                },
                {
                    Name: "Photo effects",
                    IsUpcomming: false,
                },

                {
                    Name: "Image enhancer",
                    IsUpcomming: false,
                },

                {
                    Name: "Add frames to photos",
                    IsUpcomming: false,
                },

                {
                    Name: "Add text to photos",
                    IsUpcomming: false,
                },

                {
                    Name: "Online video recorder",
                    IsUpcomming: false,
                },

                {
                    Name: "Video trimmer",
                    IsUpcomming: false,
                },

                {
                    Name: "Convert videos to MP4",
                    IsUpcomming: false,
                },

                {
                    Name: "See more features",
                    IsUpcomming: false,
                }
            ]
        },
        {
            Title: 'Explore',
            Items: [
                {
                    Name: "Design ideas",
                    IsUpcomming: false,
                },
                {
                    Name: "Custom prints",
                    IsUpcomming: false,
                },
                {
                    Name: "Font pairing",
                    IsUpcomming: false,
                },
                {
                    Name: "Colors",
                    IsUpcomming: false,
                },
                {
                    Name: "Color wheel",
                    IsUpcomming: false,
                },
                {
                    Name: "Color pallete generator",
                    IsUpcomming: false,
                },
                {
                    Name: "Blog",
                    IsUpcomming: false,
                },
                {
                    Name: "Apps",
                    IsUpcomming: false,
                },
                {
                    Name: "Template directory",
                    IsUpcomming: false,
                },
            ]
        },
        {
            Title: 'Community',
            Items: [
                {
                    Name: "Online communities",
                    IsUpcomming: false,
                },
                {
                    Name: "Creators",
                    IsUpcomming: false,
                },
                {
                    Name: "Charu Represents Fund",
                    IsUpcomming: false,
                },
                {
                    Name: "Developers",
                    IsUpcomming: false,
                },
                {
                    Name: "Partnerships",
                    IsUpcomming: false,
                },
                {
                    Name: "Affiliates program",
                    IsUpcomming: false,
                },
            ]
        },
        {
            Title: 'Download',
            Items: [
                {
                    Name: "iOS",
                    IsUpcomming: true,
                },
                {
                    Name: "Android",
                    IsUpcomming: false,
                },
                {
                    Name: "Windows",
                    IsUpcomming: true,
                },
                {
                    Name: "Mac",
                    IsUpcomming: true,
                },
            ]
        },
        {
            Title: 'Company',
            Items: [
                {
                    Name: "About",
                    IsUpcomming: false,
                },
                {
                    Name: "Newsroom",
                    IsUpcomming: false,
                },
                {
                    Name: "Careers",
                    IsUpcomming: false,
                },
                {
                    Name: "Sustainability",
                    IsUpcomming: false,
                },
                {
                    Name: "Trust Center",
                    IsUpcomming: false,
                },
                {
                    Name: "Security",
                    IsUpcomming: false,
                },
                {
                    Name: "Terms and Privacy",
                    IsUpcomming: false,
                },
                {
                    Name: "Contact Sales",
                    IsUpcomming: false,
                },
            ]
        },
    ]

    return (
        <section id='footer'>
            <div className='border-b border-gray-500'></div>
            <div className='grid-1 grid gap-8 sm:grid-cols-2 md:grid-cols-5 px-10 pt-16'>
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
                                    <a href={`${SelectedPage.Charu}`}>{item.Name}
                                        {item.IsUpcomming && <span className={styles.Upcomming}>Comming soon!</span>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='mx-10'>
                <div className='border-b border-gray-500 py-5'></div>
                <div className='md:flex justify-between py-10'>
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
                            <p>Language</p>
                        </h1>
                    </div>
                    <div className='copyright text-center'>
                        <p className='text-gray-500 text-sm font-light mt-1'>© 2023 All Rights Reserved, Charu®</p>
                        <Link href="/privacy/privacy_policy" className='text-sm'>
                            Privacy policy
                        </Link> |  <Link href="/privacy/term_conditions" className='text-sm'>
                            Terms
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        <a href="#"><svg
                            viewBox="0 0 24 24"
                            fill="#3b5998"
                            height="1.5em"
                            width="1.5em"
                            {...props}
                        >
                            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                        </svg>
                        </a>
                        <a href="#">
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
                        </a>
                        <a href="#">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#1D9BF0"
                                height="1.5em"
                                width="1.5em"
                                {...props}
                            >
                                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer