import { Breadcrumbs, Link, Typography } from "@mui/material";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/footer";


type Props = {}

const TermConditions = (props: Props) => {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <Navbar
                isMainPage={false}
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="container mt-32 mx-auto md:px-36">
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="ms-8 md:ms-0">
                    <Link underline="hover" color="black" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary-500">Term & Conditions</Typography>
                </Breadcrumbs>
                <div className="bg-gray-100 text-center rounded-lg py-28 mt-10">
                    <h1 className="font-bold font-sand text-3xl md:text-5xl">Term & Conditions</h1>
                </div>
                <div className="mt-10 px-8 sm:px-0">
                    <p className="my-10">
                        This Terms & Conditions is effective as of May 5, 2023.
                    </p>
                    <p className="mb-10 italic">
                        These Terms and Conditions (&quot;Terms&quot;) govern your use of the mobile application (&quot;App&quot;) provided by <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span>, a company registered in Bangladesh. By accessing or using the App, you agree to be bound by these Terms. If you do not agree with any provision of these Terms, you should not use the App.
                    </p>
                    <span className="font-bold text-3xl my-10 font-sand"> What does this terms & conditions cover</span>
                    <p className="my-10">
                        These Terms and Conditions cover the use of the <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> mobile application in Bangladesh, including eligibility requirements, intellectual property rights, user-generated content, privacy practices, prohibited conduct, disclaimers, liability limitations, and the governing law. Users must agree to these terms when accessing and using the app.
                    </p>
                    <div className="bg-c2deff p-4 rounded">
                        <p className="italic">
                            Summary: These Terms and Conditions govern your use of the <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> mobile application in Bangladesh. By using the app, you agree to the terms, including eligibility, intellectual property, user content, privacy, prohibited conduct, disclaimers, liability limitations, and governing law. <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> may update the terms without notice. Use the app responsibly and be aware of your responsibilities regarding content and account security.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            1. Use of the App:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Eligibility:
                        </p>
                        <p className="my-10">
                            You must be at least 13 years old to use the App. By using the App, you represent that you are at least 13 years old or have obtained appropriate parental consent.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) License:
                        </p>
                        <p className="my-10">
                            <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) User Account:
                        </p>
                        <p className="my-10">
                            In order to access certain features or services within the App, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            2.Intellectual Property:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Ownership:
                        </p>
                        <p className="my-10">
                            <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> retains all rights, title, and interest in and to the App, including all intellectual property rights.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Restrictions:
                        </p>
                        <p className="my-10">
                            You agree not to modify, distribute, reproduce, transmit, display, perform, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from or through the App without prior written permission from <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span>.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            3. User Content:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Responsibility:
                        </p>
                        <p className="my-10">
                            You are solely responsible for any content, including text, images, and other materials, that you create, upload, or share through the App.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Permissions:
                        </p>
                        <p className="my-10">
                            By uploading or sharing content, you grant <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display the content for the purpose of providing and improving the App.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            4. Privacy:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Data Collection:
                        </p>
                        <p className="my-10">
                            <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> collects and processes personal information in accordance with its Privacy Policy. By using the App, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            5. Prohibited Conduct:
                        </p>
                        <p className="my-10">
                            (a) You agree not to use the App for any unlawful, harmful, or unauthorized purposes.
                        </p>
                        <p className="my-10">
                            (b) You agree not to interfere with or disrupt the operation of the App or the servers or networks connected to the App.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            6. Disclaimer of Warranties:
                        </p>
                        <p className="my-10">
                            (a) The App is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties or representations, express or implied.
                            (b) <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> does not warrant that the App will be error-free, uninterrupted, secure, or free from viruses or other harmful components.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">Limitation of Liability:</p>
                        <p className="my-10">
                            (a) To the maximum extent permitted by applicable law, <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use the App.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">7. Governing Law and Dispute Resolution:</p>
                        <p className="my-10">
                            (a) These Terms shall be governed by and construed in accordance with the laws of Bangladesh.
                            (b) Any dispute arising out of or relating to these Terms or the use of the App shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">8. Changes to the Terms:</p>
                        <p className="my-10">
                            <span><a href="https://liilab.com" className="text-blue-500">LII Lab</a></span> may update these Terms from time to time. If we make material changes, we will provide advance notice to you either by email, by posting a notification within the App, or by posting an updated version of these Terms on our website. Your continued use of the App after the effective date of an updated version of these Terms constitutes your acceptance of the updated Terms.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">9. Contact Us:</p>
                        <p className="my-10">
                            If you have any questions about these Terms, please contact us at <a href="mailto:mail.liilab@gmail.com" className="text-blue-500">mail.liilab@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer setSelectedPage={setSelectedPage} />
        </section>
    )
}

export default TermConditions