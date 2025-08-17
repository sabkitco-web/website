import { useState } from "react";
import styles from "./faq.module.css";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { FAQ } from "@/utility/const";


export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faqSection">
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {FAQ.map((item, index) => (
          <div
            key={item.question}
            className={styles.faqItem}
            onClick={() => toggleAnswer(index)}
          >
            <div className={styles.question}>
              {item.question}
              <span>{activeIndex === index ? <IoMdArrowDropupCircle className={styles.icon}/> : <MdArrowDropDownCircle className={styles.icon}/>}</span>
            </div>
            {activeIndex === index && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
