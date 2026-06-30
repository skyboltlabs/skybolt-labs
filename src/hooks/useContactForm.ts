import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  company?: string;
  projectType?: string;
  service?: string; // mapping for landing page
  budget: string;
  timeline?: string;
  message?: string;
  description?: string; // mapping for landing page
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const useContactForm = (initialData: Partial<FormData> = {}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    company: '',
    projectType: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    description: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    ...initialData
  });

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { showSuccess, showError } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const setFormDataDirect = (data: Partial<FormData> | ((prev: FormData) => FormData)) => {
    setFormData(prev => typeof data === 'function' ? data(prev) : { ...prev, ...data });
  };

  const validateForm = (requiredFields: string[]) => {
    const errors: Record<string, string> = {};
    
    requiredFields.forEach(field => {
      const value = formData[field as keyof FormData];
      if (!value || (typeof value === 'string' && !value.trim())) {
        errors[field] = "This field is required";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (
    e?: React.FormEvent,
    requiredFields: string[] = [],
    formName: string = 'contact'
  ) => {
    if (e) e.preventDefault();
    if (!validateForm(requiredFields)) return false;

    setFormStatus('submitting');

    try {
      // Build URL-encoded body expected by Netlify Forms
      const encode = (data: Record<string, string>) =>
        Object.entries(data)
          .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v ?? ''))
          .join('&');

      const payload: Record<string, string> = {
        'form-name': formName,
        ...Object.fromEntries(
          Object.entries(formData).map(([k, v]) => [k, String(v ?? '')])
        )
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setFormStatus('success');
      showSuccess('Message Sent Successfully!', 'Thank you for reaching out. We\'ll get back to you within 24 hours.');

      // Reset form
      setFormData(prev => ({
        ...prev,
        firstName: '', lastName: '', email: '', phone: '', whatsapp: '',
        company: '', projectType: '', service: '', budget: '', timeline: '', message: '', description: ''
      }));

      setTimeout(() => setFormStatus('idle'), 6000);
      return true;

    } catch (error: any) {
      console.error('Netlify Forms submission error:', error);
      setFormStatus('error');
      showError('Error Sending Message', 'There was an issue sending your message. Please try again or reach us directly via WhatsApp.');
      setTimeout(() => setFormStatus('idle'), 4000);
      return false;
    }
  };

  return {
    formData,
    formStatus,
    formErrors,
    handleInputChange,
    setFormData: setFormDataDirect,
    submitForm,
    setFormErrors
  };
};
