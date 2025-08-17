// [
//   "mp3",   // Most popular, lossy
//   "wav",   // Lossless, large size
//   "aac",   // Good quality, Apple devices
//   "m4a",   // AAC in .m4a container
//   "flac",  // Lossless, high quality
//   "ogg",   // Open-source, lossy
//   "wma",   // Windows Media Audio
//   "aiff",  // Lossless, Apple standard
//   "amr",   // Voice recordings, small size
//   "opus",  // Modern, high compression, low latency
//   "ac3",   // Dolby Digital, surround sound
//   "alac",  // Apple Lossless Audio Codec
//   "caf",   // Core Audio Format (Apple)
//   "mp2",   // Older MP3 variant
//   "tta",   // True Audio lossless
//   "wv",    // WavPack, lossless
//   "ra",    // RealAudio
//   "mka"    // Matroska Audio
// ];
const AUDIO_FORMATS = ["mp3", "wav", "m4a", "flac", "ogg", "opus", "aiff", "ac3", "aac"]
const DEFAULT_ERROR = "Something went wrong, try again !!"
const FILE_SIZE_ERROR = "File size only upto 1GB is allowed."
const FILE_DOWNLOAD = "Audio file is downaloded Sucessfully"
const MAX_FILE_SIZE_MB = 500

const INDEX_PAGE_SCHEMA =  {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sabkit",
  "url": "https://sabkit.com",
  "description": "Convert any video to high-quality audio online for free. Supports MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, AAC. Works with MP4, MOV, AVI, MKV, WEBM, FLV, WMV, M4V, MPEG, 3GP video files.",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "All",
  "creator": {
    "@type": "Organization",
    "name": "Sabkit",
    "url": "https://sabkit.com"
  },
  "fileFormat": ["MP3","WAV","M4A","FLAC","OGG","OPUS","AIFF","AC3","AAC"],
  "softwareRequirements": [
    "Modern web browser (Chrome, Firefox, Edge, Safari)",
    "No installation required"
  ],
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/DownloadAction",
    "userInteractionCount": 0
  },
  "featureList": [
    "Upload videos in MP4, MOV, AVI, MKV, WEBM, FLV, WMV, M4V, MPEG, 3GP formats",
    "Download audio in MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, AAC formats",
    "Fast conversion directly in your browser",
    "100% privacy – files auto-deleted after 1 hour",
    "No software installation needed"
  ],
  "potentialAction": {
    "@type": "Action",
    "name": "Convert Video to Audio",
    "target": "https://sabkit.com"
  }
};
const BACKEND_URL = "https://api.sabkit.com/"

const FAQ = [
  {
    question: "How do I convert a video to MP3 online?",
    answer:
      "To convert videos to audio online, click the [ Upload & Convert now ] button, choose your video, select your audio format (MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, or AAC), and hit Convert. In seconds, your high-quality audio will be ready to download for free.",
  },
  {
    question: "Which video formats are supported?",
    answer:
      "Our free video to audio converter supports MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, MPEG, and 3GP. You can also convert YouTube videos to MP3, Instagram reels to audio, or upload personal videos directly from your device.",
  },
  {
    question: "Which audio formats can I convert my videos into?",
    answer:
      "Our online converter supports multiple audio formats including  MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, and AAC . You can choose the format that best suits your needs and download high-quality audio from any video file.",
  },
  {
    question: "Is there a limit on video file size?",
    answer:
      "Our online video to audio converter supports large video files, but extremely big files may take longer to upload and convert. Most users can convert videos up to 500 MB without issues.",
  },
  {
    question: "Are my files safe and private?",
    answer:
      "Yes! All uploaded videos and converted audio files are not get stored, ensuring full privacy and security.",
  },
  {
    question: "Can I use this tool on mobile devices?",
    answer:
      "Absolutely! Our video to MP3 converter works on any device — mobile, tablet, or desktop. It’s browser-based and mobile-friendly, so no app installation is required.",
  },
];


module.exports = {
    AUDIO_FORMATS,
    DEFAULT_ERROR,
    MAX_FILE_SIZE_MB,
    FILE_SIZE_ERROR,
    FILE_DOWNLOAD,
    INDEX_PAGE_SCHEMA,
    BACKEND_URL, FAQ
}
