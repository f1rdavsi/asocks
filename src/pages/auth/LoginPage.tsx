import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Container, Button, Input } from '@shared/ui'
import { useUser } from '@shared/context/UserContext'
import { api } from '@shared/api'
import { toast } from 'react-toastify'
import styles from './LoginPage.module.scss'
import type { FormValues } from './types'


export const LoginPage: React.FC = () => {
  const { setUser } = useUser()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await api.login(data.email, data.password)

      if (response.success) {
        setUser({ name: response.data.name, email: data.email })
        toast.success(`Welcome back, ${response.data.name}!`)
      } else {
        toast.error(response.message || 'Login failed')
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Network error')
    }
  }

  return (
    <Container>
      <div className={styles.loginWrapper}>
        <h2 className={styles.title}>Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password required', minLength: { value: 6, message: 'Minimum 6 characters' } }}
            render={({ field }) => (
              <Input {...field} type="password" label="Password" placeholder="Enter your password" />
            )}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}

          <Button type="submit" variant="primary" size="large" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </Container>
  )
}
