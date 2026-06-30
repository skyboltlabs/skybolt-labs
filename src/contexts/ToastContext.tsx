import React, { createContext, useContext, ReactNode } from 'react';
import { useToast as useToastHook } from '../hooks/useToast';
import NotificationToast from '../components/UI/NotificationToast';

interface ToastContextType {
  showSuccess: (title: string, message: string, duration?: number) => void;
  showError: (title: string, message: string, duration?: number) => void;
  showWarning: (title: string, message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toasts, removeToast, showSuccess, showError, showWarning } = useToastHook();

  return (
    <ToastContext.Provider value={{ showSuccess, showError, showWarning }}>
      {children}
      <NotificationToast toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};