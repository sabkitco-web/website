import React from 'react';
import styles from './modal.module.css';
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}><AiTwotoneCloseCircle /></button>
        {children}
      </div>
    </div>
  );
}
