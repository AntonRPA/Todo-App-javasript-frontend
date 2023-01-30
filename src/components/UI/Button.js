import styles from './Button.module.css';

function Button(props) {
  const { children, disabled = false } = props;

  return (
    <button
      {...props} //Спред оператор разделения объекта на свойста и их значения. Те что ниже будут перезаписаны
      className={styles.button}
      //   onClick={onClick}
      //   title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
