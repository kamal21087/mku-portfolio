// src/pages/Contact.tsx
import React, { useState } from 'react';
import '../styles/Contact.css'; // Create this for page-specific styles

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newErrors = validate();
    if (newErrors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: newErrors[e.target.name] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Since there's no backend, we'll just simulate a successful submission
      console.log('Form Data:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      {submitted && <p className="contact__success">Thank you for your message!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name<span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message<span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
      <div className="contact__info">
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>
    </section>
  );
};

export default Contact;
