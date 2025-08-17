import styles from './steps.module.css';
import fileUpload from "../../../public/file-upload.svg";
import fileDownload from "../../../public/file-download.svg";
import fileSelect from "../../../public/file-select.svg";
import fileConvert from "../../../public/file-convert.svg";
import CustomImage from '@/components/atoms/image/image';

const steps = [
    {
        title: "Step 1",
        description: "Upload your video file (MP4, AVI, MOV, or YouTube). Our online video to audio converter supports all major formats.",
        icon: fileUpload,
        alt: "Upload MP4, AVI, or MOV video file to convert to audio"
    },
    {
        title: "Step 2",
        description: "Choose the audio format you want (MP3, WAV, or AAC) for high-quality sound extraction.",
        icon: fileSelect,
        alt: "Select MP3, WAV, or AAC audio format",
    },
    {
        title: "Step 3",
        description: "Convert video to audio instantly with one click. Fast, secure, and works in your browser with no software needed.",
        icon: fileConvert,
        alt: "Online video to audio converter processing file"
    },
    {
        title: "Step 4",
        description: "Download your audio file and enjoy it on any device. Perfect for YouTube, Instagram, or personal videos.",
        icon: fileDownload,
        alt: "Download converted MP3 audio file securely"
    }
];


export default function Steps() {


    return (
        <section className={styles.stepsSec} id='stepsSection'>
            <h2 className={styles.stepsSecHeading}>How to Convert Videos to Audio Online</h2>
            <div className={styles.stepsContainer}>
                {
                    steps.map(({ title, description, icon, alt }) => (
                        <div key={title} className={styles.stepCard}>
                            <CustomImage src={icon} alt={alt} className={styles.stepIcon} />
                            <h3 className={styles.stepTitle}>{title}</h3>
                            <p className={styles.stepDescription}>{description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}