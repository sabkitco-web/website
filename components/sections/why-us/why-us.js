import styles from './why-us.module.css';
import speed from '../../../public/speed.svg';
import secure from '../../../public/secure.svg';
import online from '../../../public/online.svg';
import multimedia from '../../../public/multimedia.svg';
import mobile from '../../../public/mobile.svg';
import audio from '../../../public/audio.svg';
import CustomImage from '@/components/atoms/image/image';


const features = [
  {
    icon: speed,
    title: "Fast Conversion",
    description: "Convert videos to MP3, WAV, or AAC online in seconds."
  },
  {
    icon: audio,
    title: "High-Quality Audio",
    description: "Extract clear sound from YouTube, Instagram, or any video."
  },
  {
    icon: online,
    title: "Free & Online",
    description: "Use our free video to audio converter without installation."
  },
  {
    icon: secure,
    title: "Private & Secure",
    description: "All files auto-delete after 1 hour for full privacy."
  },
  {
    icon: multimedia,
    title: "Any Video Supported",
    description: "Works with MP4, MOV, AVI, and more."
  },
  {
    icon: mobile,
    title: "Mobile-Friendly",
    description: "Convert videos to audio on phone, tablet, or laptop."
  }
];




export default function WhyUs() {
    return (
        <section className={styles.whyUs} id='whyUsSection'>
            <h2 className={styles.title}>Why Choose Us?</h2>
            <p className={styles.description}>
            We are committed to providing the best service with a focus on quality, reliability, and customer satisfaction.
            </p>

            <div className={styles.container}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.feature}>
                <CustomImage src={feature.icon} alt={feature.title} className={styles.icon}/>
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
        </section>
    );
}