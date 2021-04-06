import React from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: string;
  secondary?: string;
  icon?: string;
}

const Button = (props: ButtonProps) => {
  const handleClick = (event) => {
    props.onClick ? props.onClick(event) : () => {};
  };

  return (
    <button
      {...props}
      className={`${styles.btn}
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
