import React from 'react';
import styles from './button.module.css';
import utilStyles from '../../styles/utils.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
  secondary?: boolean;
  icon?: boolean;
}

const Button = (props: ButtonProps) => {
  const handleClick = (event) => {
    props.onClick ? props.onClick(event) : () => {};
  };

  return (
    <button
      {...props}
      type={props.type || 'button'}
      className={`${styles.btn}
      ${utilStyles.focusVisible}
      ${props.primary ? styles.primary : ''}
      ${props.secondary ? styles.secondary : ''}
      ${props.icon ? styles.icon : ''}
      ${props.className ? props.className : ''}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
