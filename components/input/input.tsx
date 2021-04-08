import styles from './input.module.css';

const Input = (props: React.ComponentPropsWithoutRef<'input'>) => {
  const handleChange = (event) => {
    props.onChange && props.onChange(event);
  };

  return (
    <div
      className={`${props.className ? props.className : ''} ${
        styles.inputContainer
      }`}
    >
      <input
        aria-label={props['aria-label']}
        type={props.type}
        placeholder={props.placeholder}
        className={styles.input}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
