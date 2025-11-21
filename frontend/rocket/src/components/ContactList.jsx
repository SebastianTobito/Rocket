import React from 'react';


const ContactList = ({ contacts }) => {
    
    if (contacts.length === 0) {
        return <p className="empty-message">Aún no hay contactos registrados. ¡Usa el formulario para empezar!</p>;
    }

    return (
        <table className="contact-table">
            <thead>
                <tr>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Estado Workflow</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                
                    <tr key={contact.contactId || contact.id}> 
                        <td>{contact.firstname} {contact.lastname}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        
                        
                        <td>
                            {contact.en_workflow ? (
                                <span className="status-active">ACTIVO</span> 
                            ) : (
                                <span className="status-inactive">INACTIVO</span> 
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactList;