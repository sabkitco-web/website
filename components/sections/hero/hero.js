
import React, { useRef, useState } from 'react';
import Button from '@/components/atoms/button/button';
import Modal from '@/components/atoms/modal/modal';
import styles from './hero.module.css';
import ConvertModal from '@/components/organisms/convert-modal/convert-modal';
import { FILE_SIZE_ERROR, MAX_FILE_SIZE_MB } from '@/utility/const';


export default function HeroSection() {

  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const fileInputRef = useRef();

  function getStepsSection() {
    const section = document.getElementById('stepsSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const sizeInMB = file.size / (1024 * 1024)
      if (sizeInMB > MAX_FILE_SIZE_MB) {
        import('react-toastify').then((module) => {
          const toast = module.toast;
          toast.error(FILE_SIZE_ERROR);
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return
      }
      setSelectedFile(file);
      setModalOpen(true);
    }
  }

  function handleUploadClick() {
    fileInputRef.current.click();
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  return (
    <section className={styles.hero} id="heroSection">
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Convert Any Video to High-Quality Audio Online for Free
        </h1>
        <h2 className={styles.subheadline}>
          Extract MP3, WAV, M4A, FLAC, OGG, OPUS, AIFF, AC3, or AAC from
          any video format including MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, MPEG, or 3GP.
          Works entirely in your browser — no downloads or software required.
        </h2>
        <p>
          Perfect for YouTube, Instagram, TikTok, or personal videos.
          Fast conversion, crystal-clear audio quality, and
          100% privacy — files are never stored on our servers.
        </p>
        <div className={styles.ctaWrapper}>
          <Button
            style={styles.primaryBtn}
            btnText="Upload & Convert Now"
            onClick={handleUploadClick}
          />
          <input
            type="file"
            accept=".mp4,.mov,.avi,.mkv,.webm,.flv,.wmv,.m4v,.mpeg,.3gp"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Button
            style={styles.primaryBtn}
            btnText="How It Works"
            onClick={getStepsSection}
          />
        </div>
      </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          fileName={selectedFile?.name}
        >
          <ConvertModal
            file={selectedFile}
            closeModal={handleCloseModal}
          />
        </Modal>


    </section>
  );
}
