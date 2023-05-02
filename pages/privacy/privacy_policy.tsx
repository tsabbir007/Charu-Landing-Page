import { Breadcrumbs, Link, Typography } from "@mui/material";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import Footer from "@/components/footer";
import { useEffect } from "react";


type Props = {}

const PrivacyPolicy = (props: Props) => {
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
                    <Typography color="text.primary-500">Privacy Policy</Typography>
                </Breadcrumbs>
                <div className="bg-gray-100 text-center rounded-lg py-28 mt-10">
                    <h1 className="font-bold font-sand text-3xl md:text-5xl">Privacy Policy</h1>
                </div>
                <div className="mt-10 px-8 sm:px-0">
                    <p className="my-10">
                        This Privacy Policy is effective as of May 5, 2023.
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
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            1. Information we collect
                        </p>
                        <p className="my-10">
                            At Charu, we collect certain information to provide and improve our mobile application, Photo Editor & Design - Charu. The types of information we collect fall into two categories: information you provide to us directly and information automatically collected when you use our app.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Information You Provide:
                        </p>
                        <p className="my-10">
                            When you create an account with Charu, we may collect your name, email address, and any other information you choose to provide. While using our app, you may create and save designs, logos, posters, or other materials. We collect and store this content to provide you with access to your creations. If you contact us through customer support or other channels, we may collect the information you provide during those interactions.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Information Automatically Collected:
                        </p>
                        <p className="my-10">
                            We collect information about your interactions with our app, such as the features you use, the duration of your sessions, and the actions you take. This helps us analyze user behavior and improve the app's functionality.  We automatically collect certain device-related information, including your device type, operating system, unique device identifiers, and mobile network information. This data helps us ensure compatibility and optimize our app for various devices. Our servers may automatically record log information when you use our app. This may include your IP address, app crashes, and system activity. We use this data for troubleshooting and ensuring the app's stability.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Cookies and Similar Technologies:
                        </p>
                        <p className="my-10">
                            We may use cookies and similar technologies to collect information about your usage patterns and personalize your experience. Cookies are small text files that are stored on your device when you visit our app. They help us remember your preferences and enhance your overall user experience. Third-party analytics and advertising partners may also use cookies and similar technologies to collect data about your interactions with our app and other websites or applications. This information is used to provide targeted advertisements and measure the effectiveness of marketing campaigns.
                        </p>
                        <div className="bg-c2deff p-4 rounded">
                            <p className="italic">
                                Please note that we do not collect sensitive information such as financial details or government-issued identification numbers. We also do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                            </p>
                        </div>
                        <p className="my-10">
                            By using our app, you consent to the collection of the aforementioned information for the purposes outlined in our Privacy Policy. You have the option to modify your privacy preferences and control the data collection settings within the app.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            2. Use of Information:
                        </p>
                        <p className="my-10">
                            At Charu, we use the information we collect from you to provide and improve our mobile application, Photo Editor & Design - Charu. Here are the ways we utilize the information:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Providing and Personalizing the App:
                        </p>
                        <p className="my-10">
                            We use the information you provide, such as your account details and content creations, to deliver personalized features and functionality within the app.
                            By understanding your preferences and usage patterns, we can tailor the app's interface, recommendations, and suggestions to enhance your experience.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Communication and Customer Support:
                        </p>
                        <p className="my-10">
                            We may use your contact information to respond to your inquiries, provide support, and address any issues you may encounter while using our app.
                            We may also send you important updates or notifications related to the app's features, changes, or improvements.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Improving the App:
                        </p>
                        <p className="my-10">
                            Analyzing user behavior and usage data helps us identify areas for improvement and optimize the app's performance and functionality.
                            We may use aggregated and anonymized data to conduct research, generate insights, and develop new features to enhance the overall user experience.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (d) Advertising and Marketing:
                        </p>
                        <p className="my-10">
                            With your consent, we may use the information collected to deliver personalized advertisements within the app or through other channels.
                            We may also use your information to measure the effectiveness of our advertising campaigns and make informed decisions regarding future marketing efforts.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (e) Legal Compliance and Protection:
                        </p>
                        <p className="my-10">
                            We may use your information to comply with applicable laws, regulations, or legal processes.
                            We may also use the information to protect our rights, privacy, safety, or property, as well as those of our users and the general public.
                        </p>
                        <p className="my-10">
                            We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. However, we may share your information with trusted third-party service providers who assist us in delivering our services, such as hosting providers, analytics providers, and advertising partners. These third parties are contractually obligated to handle your data securely and in accordance with applicable data protection laws.
                        </p>
                        <div className="bg-c2deff p-4 rounded">
                            <p className="italic">
                                Please note that while we take reasonable measures to protect your information, no method of transmission or storage is completely secure. Therefore, we cannot guarantee the absolute security of your data.
                            </p>
                        </div>
                        <p className="my-10">
                            By using our app and providing your information, you consent to the uses described above. You have the right to modify your privacy preferences and control the use of your data within the app's settings.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            3. Data Sharing:
                        </p>
                        <p className="my-10">
                            At Charu, we understand the importance of your privacy and are committed to protecting your personal information. We only share your data in limited circumstances and with trusted third parties who assist us in providing and improving our mobile application, Photo Editor & Design - Charu. Here's how we handle data sharing:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Service Providers:
                        </p>
                        <p className="my-10">
                            We may engage third-party service providers, such as hosting providers, analytics platforms, and advertising partners, to assist us in delivering and enhancing our services.
                            These service providers have access to your information only to perform tasks on our behalf and are contractually obligated to handle your data securely and in accordance with applicable data protection laws.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Aggregated and Anonymized Data:
                        </p>
                        <p className="my-10">
                            We may share aggregated and anonymized data that does not personally identify you with third parties for various purposes, including statistical analysis, research, and marketing.
                            This data is used in a way that prevents the identification of individuals and ensures your privacy is protected.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Legal Compliance and Protection:
                        </p>
                        <p className="my-10">
                            We may disclose your information if we believe it is necessary to comply with applicable laws, regulations, or legal processes.
                            We may also disclose your information to protect our rights, privacy, safety, or property, as well as those of our users and the general public.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (d) Business Transfers:
                        </p>
                        <p className="my-10">
                            In the event of a merger, acquisition, or sale of all or a portion of our business, your information may be transferred as part of the transaction. We will take appropriate measures to ensure the confidentiality and security of your data during such transfers.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (e) Consent and Opt-Out:
                        </p>
                        <p className="my-10">
                            We will obtain your explicit consent before sharing your personal information with third parties for marketing purposes.
                            You have the option to opt-out of certain data sharing practices, such as personalized advertising, by modifying your privacy preferences within the app's settings.
                        </p>
                        <p className="my-10">
                            It's important to note that we do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.
                        </p>
                        <p className="my-10">
                            We take reasonable measures to ensure that any third parties we share your information with are reputable and maintain appropriate security measures. However, we cannot be responsible for the actions or policies of these third parties.
                        </p>
                        <p className="my-10">
                            We encourage you to review the privacy practices of any third-party services or websites you access through our app, as their data collection and handling practices may differ from ours.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            4. Security:
                        </p>
                        <p className="my-10">
                            At Charu, we prioritize the security of your personal information and take appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. We have implemented technical, administrative, and physical safeguards to ensure the confidentiality and integrity of your data. Here's how we approach security:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Data Encryption:
                        </p>
                        <p className="my-10">
                            We use industry-standard encryption techniques, such as Transport Layer Security (TLS) and Secure Sockets Layer (SSL), to secure the transmission of data between our app and our servers.
                            This encryption helps protect your information from interception and unauthorized access while it is being transmitted.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Access Control:
                        </p>
                        <p className="my-10">
                            We limit access to your personal information to authorized personnel and third-party service providers who require access to perform specific tasks on our behalf.
                            We have implemented strict access controls and authentication mechanisms to ensure that only authorized individuals can access your data.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Data Storage and Retention:
                        </p>
                        <p className="my-10">
                            Your personal information is stored on secure servers with restricted access.
                            We retain your data only for as long as necessary to fulfill the purposes outlined in our Privacy Policy, or as required by applicable laws and regulations.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (d) Security Monitoring and Incident Response:
                        </p>
                        <p className="my-10">
                            We regularly monitor our systems and networks for potential vulnerabilities and threats to proactively identify and address any security issues.
                            In the event of a data breach or security incident, we have established procedures to respond promptly, investigate the matter, and take appropriate steps to mitigate any potential harm.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (e) User Responsibility:
                        </p>
                        <p className="my-10">
                            While we take reasonable measures to protect your information, it is important for you to also take precautions to safeguard your personal data.
                            We recommend using strong and unique passwords for your Charu account and regularly updating them.
                            It is advisable to keep your device's operating system and security software up to date to protect against potential security vulnerabilities.
                        </p>
                        <p className="my-10">
                            Despite our best efforts, no method of transmission or storage can guarantee 100% security. Therefore, we cannot guarantee the absolute security of your data. If you believe your account has been compromised or if you have any concerns about the security of your information, please contact us immediately.
                        </p>
                        <div className="bg-c2deff p-4 rounded">
                            <p className="italic">
                                Please review our Privacy Policy for more details on how we handle your data and the choices you have regarding its use and disclosure.
                            </p>
                        </div>
                        <p className="my-10">
                            We are committed to regularly reviewing and improving our security practices to ensure the ongoing protection of your personal information.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            5. Children's Privacy:
                        </p>
                        <p className="my-10">
                            At Charu, we are committed to protecting the privacy of children. Our mobile application, Photo Editor & Design - Charu, is not intended for use by individuals under the age of 13. We do not knowingly collect or solicit personal information from children without appropriate parental consent. If we become aware that we have inadvertently collected personal information from a child under 13, we will take immediate steps to delete that information from our records.
                        </p>
                        <p className="my-10">
                            Here are the key points regarding children's privacy:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Age Restriction:
                        </p>
                        <p className="my-10">
                            Our app is designed for individuals who are 13 years of age or older. We do not knowingly collect personal information from children under the age of 13.
                            If you are a parent or guardian and believe that your child under 13 has provided us with personal information, please contact us immediately, and we will take steps to remove that information from our systems.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Parental Consent:
                        </p>
                        <p className="my-10">
                            We recommend that parents and guardians supervise their children's activities and use of our app.
                            If we determine that personal information of a child under 13 has been provided to us without appropriate parental consent, we will delete that information from our records as soon as possible.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Educational Use:
                        </p>
                        <p className="my-10">
                            If our app is used in an educational setting where children under 13 are involved, it is the responsibility of the educational institution, teacher, or parent to ensure appropriate consent and compliance with applicable data protection laws.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (d) Parental Rights:
                        </p>
                        <p className="my-10">
                            Parents and legal guardians have the right to review and request the deletion of their child's personal information that may have been inadvertently collected by us.
                            If you are a parent or guardian and wish to access, modify, or delete any personal information of your child, please contact us using the provided contact information.
                        </p>
                        <p className="my-10">
                            Ensuring the privacy and safety of children is a shared responsibility. We encourage parents and guardians to educate their children about online privacy and safe internet practices.
                        </p>
                        <div className="bg-c2deff p-4 rounded">
                            <p className="italic">
                                If you have any concerns or questions about our data collection practices as they relate to children, please contact us, and we will be happy to address your concerns.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-10">
                            6. Updates to the Privacy Policy:
                        </p>
                        <p className="my-10">
                            At Charu, we may update our Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws and regulations. We encourage you to periodically review the Privacy Policy to stay informed about how we collect, use, and protect your personal information. When we make significant changes to the Privacy Policy, we will provide a prominent notice within the app or notify you through other means, such as email or push notification.
                        </p>
                        <p className="my-10">
                            Here's how we handle updates to the Privacy Policy:
                        </p>
                        <p className="my-10 font-bold text-md">
                            (a) Notification of Changes:
                        </p>
                        <p className="my-10">
                            When we update our Privacy Policy, we will provide notice of the changes within the app or through other communication channels.
                            This may include a notification upon opening the app or an email sent to the address associated with your account.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (b) Reviewing the Updated Policy:
                        </p>
                        <p className="my-10">
                            We recommend that you review the updated Privacy Policy to understand how any changes may impact you.
                            The updated Privacy Policy will include the date of the latest revision at the top to help you identify if any changes have been made since your last review.
                        </p>
                        <p className="my-10 font-bold text-md">
                            (c) Continuing Use of the App:
                        </p>
                        <p className="my-10">
                            If you continue to use our app after the updated Privacy Policy becomes effective, it signifies your acceptance of the revised terms.
                            If you do not agree with the changes, you should discontinue using the app and contact us to address any concerns or request the deletion of your personal information.
                        </p>
                        <p className="my-10">
                            We strive to make any updates to the Privacy Policy clear and transparent, ensuring that you have the necessary information to make informed decisions about your privacy and data.
                        </p>
                        <p className="my-10">
                            It is important to note that the most current version of the Privacy Policy will govern our use of your information. Therefore, it is advisable to periodically check for updates and review the Privacy Policy when accessing our app.
                        </p>
                        <div className="bg-c2deff p-4 rounded mb-10">
                            <p className="italic">
                                If you have any questions or concerns about the Privacy Policy or any changes made to it, please reach out to us using the contact information provided in the app or on our website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer setSelectedPage={setSelectedPage} />
        </section>
    )
}

export default PrivacyPolicy