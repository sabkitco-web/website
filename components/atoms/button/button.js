import styles from './button.module.css';
const Button = ({ btnText, onClick = () => {} , style}) => {

  return (
    <button className={` ${style} ${styles.btn}`} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
