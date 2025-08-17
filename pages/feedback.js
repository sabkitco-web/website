import FeedbackForm from "@/components/modecules/feedback/feedback";
import Header from "@/components/modecules/header/header";
import Head from "next/head";

export default function FeedbackPage() {
    return (
        <main>
            <Head>
                <title>Feedback | Sabkit</title>
                <meta
                    name="description"
                    content="Send us your feedback and help improve Sabkit. Your opinion matters."
                />
            </Head>
            <Header />
            <FeedbackForm />
        </main>
    )
}