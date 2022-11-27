import React from 'react';
import { FormProps } from './Form.props';
import styles from './Form.module.scss';

export const Form = ({ children }: FormProps) => (
  <form className={styles.form}>{children}</form>
);
