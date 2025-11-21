import React, { useState, useEffect } from 'react'; 
import ContactForm from './components/ContactForm.jsx'; 
import ContactList from './components/ContactList.jsx'; 
import './App.css'; 

const API_URL = 'http://localhost:3000/crm/v3/objects/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  //recargar la lista después de un POST exitoso.
  const reloadContacts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data.results || []); 
    } catch (error) {
      console.error("Error al recargar contactos:", error);
    }
  };


  useEffect(() => {
    
    const fetchInitialData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        setContacts(data.results || []); 
      } catch (error) {
        console.error("Error al obtener contactos inicial:", error);
      } finally {
        
        setLoading(false); 
      }
    };
    
   
    fetchInitialData();
  }, []); 

  const addContact = () => {
    reloadContacts(); 
  };
  
  if (loading) {
      return <div className="loading-message">Cargando contactos...</div>;
  }

  return (
    <div className="app-container">
      <header>
        <h1>🚀 Contact Sync Dashboard</h1>
      </header>
      
      {/*Formulario */}
      <section className="form-section">
        <h2>Añadir Nuevo Contacto</h2>
        <ContactForm onContactAdded={addContact} />
      </section>
      
      <hr />

      {/* La Lista de Contactos */}
      <section className="list-section">
        <h2>Lista de Contactos ({contacts.length})</h2>
        <ContactList contacts={contacts} />
      </section>
      
    </div>
  );
}

export default App;