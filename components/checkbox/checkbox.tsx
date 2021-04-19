import styles from './checkbox.module.css';
import utilStyles from '../../styles/utils.module.css';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: React.ReactNode;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <>
      <input
        type='checkbox'
        id={props.id}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        className={`${styles.checkbox} ${utilStyles.focusVisible} ${
          props.className ? props.className : ''
        }`}
      />
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
    </>
  );
};

export default Checkbox;
