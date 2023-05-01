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
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="container mt-32 mx-auto md:px-36">
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="ms-8 sm:ms-0">
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
                        This Privacy Policy is effective as of February 7, 2023. See previous versions of the Privacy Policy in our Policy Archives.
                    </p>
                    <p className="mb-10 italic">
                        The highlighted text is aimed to give a plain English summary of our Privacy Policy. Please ensure you read the main text, as the plain English summary is just a summary and doesnot capture all of the terms.
                    </p>
                    <span className="font-bold text-3xl my-10 font-sand"> What does this policy cover</span>
                    <p className="my-10">
                        Welcome to Charu, the online and mobile service of Charu Pty Ltd . Our Privacy Policy explains how we collect, use, disclose, and protect information that applies to our visual communication platform , and your choices about the collection and use of your information. Capitalized terms that are not defined in this Privacy Policy have the meaning given to them in our Terms of Use. If you do not want your information processed in accordance with this Privacy Policy in general or any part of it, you should not use our Service. This policy applies to all users of the Service, including, but not limited to users of our Developer Portal.
                    </p>
                    <div className="bg-c2deff p-4 rounded">
                        <p className="italic">
                            Summary: Welcome, here is our policy on privacy. This policy sets out how Charu collects and uses the information that we collect about you when you use the Service. This policy also explains the choices that you can make about the way that we use your information.
                        </p>
                    </div>
                    <p className="font-bold text-2xl mt-10">
                        1. Information we collect
                        We collect the following types of information about you:
                    </p>
                    <p className="my-10 font-bold text-md">
                        (a) Information you provide us directly
                    </p>
                    <p className="my-10">

                        We may ask for certain information when you register for a Charu account or correspond with us (such as a username, your first and last names, birthdate, phone number, profession, physical and e-mail address).

                        We also collect any messages you send us through the Service, and may collect information you provide in User Content you post to the Service (such as text and photos you upload to use in your designs). We use this information to operate, maintain, and provide the features and functionality of the Service to you, to correspond with you, and to address any issues you raise about the Service.

                        If you donot provide your personal information to us, you may not be able to access or use our Service or your experience of using our Service may not be as enjoyable.

                        Summary: We collect info about you that you choose to give us, for example when you register an account, use the Service or otherwise interact with us.
                    </p>
                </div>
            </div>
            <Footer setSelectedPage={setSelectedPage} />
        </section>
    )
}

export default TermConditions