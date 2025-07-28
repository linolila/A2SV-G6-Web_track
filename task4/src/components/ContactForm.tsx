import { useForm } from './useForm';
import '../App.css';

const ContactForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: ''
  });

  return (
    <div className="contact-form-container" style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
      <h2>Contact Us</h2>
      <form onSubmit={e => handleSubmit(e, () => alert('Message sent!'))} noValidate>
        <div className="form-group" style={{ marginBottom: 16, textAlign: 'left' }}>
          <label htmlFor="name">Name<span style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
            style={{ width: '100%', padding: 8, borderRadius: 4, border: errors.name ? '1px solid red' : '1px solid #ccc' }}
            required
          />
          {errors.name && <div className="error" style={{ color: 'red', fontSize: 13 }}>{errors.name}</div>}
        </div>
        <div className="form-group" style={{ marginBottom: 16, textAlign: 'left' }}>
          <label htmlFor="email">Email<span style={{color:'red'}}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            style={{ width: '100%', padding: 8, borderRadius: 4, border: errors.email ? '1px solid red' : '1px solid #ccc' }}
            required
          />
          {errors.email && <div className="error" style={{ color: 'red', fontSize: 13 }}>{errors.email}</div>}
        </div>
        <div className="form-group" style={{ marginBottom: 16, textAlign: 'left' }}>
          <label htmlFor="message">Message<span style={{color:'red'}}>*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
            style={{ width: '100%', padding: 8, borderRadius: 4, border: errors.message ? '1px solid red' : '1px solid #ccc', minHeight: 80 }}
            required
          />
          {errors.message && <div className="error" style={{ color: 'red', fontSize: 13 }}>{errors.message}</div>}
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 4, background: '#646cff', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
