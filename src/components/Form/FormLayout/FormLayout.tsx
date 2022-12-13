import React from 'react';
import cx from 'clsx';
import styles from './FormLayout.module.scss';

interface FormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const FormLayout = ({
  children,
  className,
  ...restProps
}: FormLayoutProps) => (
  <form className={cx(className, styles.form)} {...restProps}>
    {children}
  </form>
);
