import type React from 'react';
import styles from './Container.module.scss';
import type { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'large'
}) => {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
};
