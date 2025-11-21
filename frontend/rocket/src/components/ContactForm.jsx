import React, { useState } from 'react';

const API_URL = 'http://localhost:3000/crm/v3/objects/contacts';

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();
      
      if (response.status === 201) {
        setMessage(` Éxito: ${result.note} (Workflow: ${result.en_workflow ? 'ACTIVO' : 'INACTIVO'})`);
        setFormData({ firstname: '', lastname: '', email: '', phone: '' }); 
        onContactAdded(); 
      } else {
        setMessage(`Error al crear contacto: ${result.note || 'Error desconocido'}`);
      }

    } catch (error) {
      console.error('Error de red/servidor:', error);
      setMessage(' Error de conexión al servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Apellido" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (ej: @example.com para workflow)" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" required />
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando...' : 'Crear Contacto'}
      </button>
      
      {message && <p className={message.startsWith('✅') ? 'success-message' : 'error-message'}>{message}</p>}
    </form>
  );
};

export default ContactForm;