import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Modal, Button, Input } from '@shared/ui'
import { api } from '@shared/api'
import { toast } from 'react-toastify'
import { useUser } from '@shared/context/UserContext'
import styles from './AuthModal.module.scss'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: 'login' | 'register'
}

interface FormValues {
  email: string
  password: string
  confirmPassword?: string
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode)
  const { setUser } = useUser()

  const {
    control,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  })

  const password = watch('password')

  // --- Отдельные функции для API ---
  const handleLogin = async (email: string, password: string) => {
    return api.login(email, password)
  }

  const handleRegister = async (email: string, password: string) => {
    return api.register(email, password)
  }

  // --- Отправка формы ---
  const onSubmit = async (data: FormValues) => {
    try {
      if (mode === 'register' && data.password !== data.confirmPassword) {
        setError('confirmPassword', { type: 'manual', message: 'Passwords do not match' })
        return
      }

      const response =
        mode === 'login'
          ? await handleLogin(data.email, data.password)
          : await handleRegister(data.email, data.password)

      if (response.success) {
        // Сохраняем в контекст и localStorage
        setUser({ name: response.data.name, email: data.email })
        toast.success(
          mode === 'login' ? `Welcome back, ${response.data.name}!` : `Registered successfully, ${response.data.name}!`,
        )
        reset()
        onClose()
      } else {
        toast.error(response.message || 'Something went wrong')
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Network error')
    }
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mode === 'login' ? 'Sign In' : 'Create Account'}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
          }}
          render={({ field }) => <Input {...field} label="Email" placeholder="Enter your email" />}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
          }}
          render={({ field }) => (
            <Input {...field} type="password" label="Password" placeholder="Enter your password" />
          )}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        {/* Confirm password только для регистрации */}
        {mode === 'register' && (
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Confirm password',
              validate: value => value === password || 'Passwords do not match',
            }}
            render={({ field }) => (
              <Input {...field} type="password" label="Confirm Password" placeholder="Confirm your password" />
            )}
          />
        )}
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}

        <Button type="submit" variant="primary" size="large" disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
        </Button>

        <div className={styles.switchMode}>
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button type="button" onClick={switchMode} className={styles.link}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" onClick={switchMode} className={styles.link}>
                Sign in
              </button>
            </>
          )}
        </div>
      </form>
    </Modal>
  )
}
