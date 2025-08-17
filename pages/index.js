import Header from "@/components/modecules/header/header";
import FAQSection from "@/components/sections/faq/faq";
import Footer from "@/components/sections/footer/footer";
import HeroSection from "@/components/sections/hero/hero";
import Steps from "@/components/sections/steps/steps";
import WhyUs from "@/components/sections/why-us/why-us";
import { INDEX_PAGE_SCHEMA } from "@/utility/const";
import Head from "next/head";


export default function Home() {
  return (
    <>

      <Head>
        <title>Free Video to Audio Converter – MP3, WAV, AAC, FLAC Online</title>
        <meta name="description" content="Convert any video to high-quality audio online for free. Supports MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, AAC. Works with MP4, MOV, AVI, MKV, WEBM, FLV, WMV, M4V, MPEG, 3GP videos. Fast, secure, and private – files are processed directly in your browser without being stored." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="video to audio, mp3 converter, wav converter, flac converter, online video to audio, mp4 to mp3, free audio extractor, video to wav, convert video to flac" />
        <link rel="canonical" href="https://sabkit.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(INDEX_PAGE_SCHEMA).replace(/</g, '\\u003c')
          }}
        />
      </Head>

      <main>
        <Header />
        <HeroSection />
        <Steps />
        <WhyUs />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
