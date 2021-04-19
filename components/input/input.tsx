import styles from './input.module.css';
import utilStyles from '../../styles/utils.module.css';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  icon?: React.ReactNode;
  inputClassNames?: string;
}

const Input = (props: InputProps) => {
  const handleChange = (event) => {
    props.onChange && props.onChange(event);
  };

  return (
    <div
      className={`${utilStyles.flex} ${utilStyles.flexRow} ${
        utilStyles.alignCenter
      } ${props.className ? props.className : ''}`}
    >
      {props.icon}
      <div
        className={`${props.inputClassNames ? props.inputClassNames : ''} ${
          styles.inputContainer
        }`}
      >
        <input
          aria-label={props['aria-label']}
          type={props.type}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          className={styles.input}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
