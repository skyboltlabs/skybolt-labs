import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationToastProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ toasts, onRemove }) => {
  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration !== 0) {
        const timer = setTimeout(() => {
          onRemove(toast.id);
        }, toast.duration || 5000);
        return () => clearTimeout(timer);
      }
    });
  }, [toasts, onRemove]);

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} style={{ color: '#4ade80', flexShrink: 0 }} />;
      case 'error':   return <XCircle size={20} style={{ color: '#f87171', flexShrink: 0 }} />;
      case 'warning': return <AlertCircle size={20} style={{ color: '#facc15', flexShrink: 0 }} />;
    }
  };

  const getBarColor = (type: Toast['type']) => {
    switch (type) {
      case 'success': return '#4ade80';
      case 'error':   return '#f87171';
      case 'warning': return '#facc15';
    }
  };

  const getBorderColor = (type: Toast['type']) => {
    switch (type) {
      case 'success': return 'rgba(74,222,128,0.3)';
      case 'error':   return 'rgba(248,113,113,0.3)';
      case 'warning': return 'rgba(250,204,21,0.3)';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px',
      width: 'calc(100vw - 40px)',
      pointerEvents: 'none',
    }}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.96, transition: { duration: 0.18 } }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'relative',
              background: '#0c0e1a',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${getBorderColor(toast.type)}`,
              borderRadius: '12px',
              padding: '16px 16px 16px 24px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              overflow: 'hidden',
              pointerEvents: 'auto',
            }}
          >
            {/* Left accent bar */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: getBarColor(toast.type),
              borderRadius: '12px 0 0 12px',
            }} />

            <div style={{ flexShrink: 0, paddingTop: '1px' }}>
              {getIcon(toast.type)}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#f0f0f8',
                margin: '0 0 4px',
                lineHeight: 1.4,
              }}>
                {toast.title}
              </p>
              <p style={{
                fontSize: '13px',
                color: 'rgba(240,240,248,0.55)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => onRemove(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(240,240,248,0.35)',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                transition: 'color 0.2s',
                marginTop: '1px',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#f0f0f8')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(240,240,248,0.35)')}
              aria-label="Dismiss"
            >
              <X size={15} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationToast;