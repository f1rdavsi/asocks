import type React from 'react';
import { useState } from 'react';
import { Modal, Button, Input } from '@shared/ui';
import { api } from '@shared/api';
import styles from './AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'login'
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = mode === 'login'
        ? await api.login(email, password)
        : await api.register(email, password);

      if (response.success) {
        // Здесь можно добавить логику сохранения токена
        console.log('Success:', response.message);
        onClose();
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(response.message || 'An error occurred');
      }
    } catch (error) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'login' ? 'Sign In' : 'Create Account'}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {mode === 'register' && (
          <Input
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={loading}
          className={styles.submitButton}
        >
          {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
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
  );
};
