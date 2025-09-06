import type React from 'react'
import styles from './Button.module.scss'
import type { ButtonProps } from './types'


export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}
