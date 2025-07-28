import { useState } from 'react';
import type { Contact } from '../contact';

interface UseFormReturn {
  formData: Contact;
  errors: Partial<Contact>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, onSuccess: () => void) => void;
  resetForm: () => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useForm(initialState: Contact): UseFormReturn {
  const [formData, setFormData] = useState<Contact>(initialState);
  const [errors, setErrors] = useState<Partial<Contact>>({});

  const validate = (data: Contact) => {
    const newErrors: Partial<Contact> = {};
    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!data.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(data.email)) newErrors.email = 'Invalid email format';
    if (!data.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, onSuccess: () => void) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSuccess();
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return { formData, errors, handleChange, handleSubmit, resetForm };
}
