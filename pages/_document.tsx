import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
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
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/charu.ico" />
                    <meta charSet="utf-8"></meta>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <title>Charu - The Best Free Graphics Design Photo Editor App</title>
                    <meta name="title" content="Charu - The Best Free Graphics Design Photo Editor App"></meta>
                    <meta name="description" content="Charu is the best free graphics design photo editor app for Android. With Charu, you can create stunning photos and graphics with ease. Whether you're a beginner or a professional, Charu has everything you need to create amazing images."></meta>
                    <meta name="keywords" content="charu, free graphics design photo editor app, Android app, photo editor, graphics design"></meta>
                    <meta name="robots" content="index, follow"></meta>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                    <meta name="language" content="English"></meta>
                    <meta name="revisit-after" content="28 days"></meta>
                    <script key="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(charuOrganization) }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument;