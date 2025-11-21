import express from "express";
import fs from 'fs'; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 
import contactosJson from '../data/contactos.json' with { type: 'json' }

const router = express.Router();

const DIRECTORIO_ACTUAL = path.dirname(fileURLToPath(import.meta.url));

const RUTA_CONTACTOS = path.join(DIRECTORIO_ACTUAL, '..', 'data', 'contactos.json');
const listaContactos = [...contactosJson]; 



// Leer la lista de contactos
router.get("/contacts", (req, res) => {
  
  res.status(200).json({ results: listaContactos });
});

// Crear un nuevo contacto
router.post("/contacts", (req, res) => {
  const newContactData = req.body;
  

  const isWorkFlow = newContactData.email && newContactData.email.endsWith("@example.com"); 
  
  const newContact = {
    ...newContactData,
    id: listaContactos.length + 1,
    en_workflow: isWorkFlow,
  }
  
  listaContactos.push(newContact);
  
  try {
    const jsonString = JSON.stringify(listaContactos, null, 2); 
    fs.writeFileSync(RUTA_CONTACTOS, jsonString, 'utf-8'); 
  } catch (err) {
    console.error("Error al escribir en contactos.json:", err);
  }
  
  res.status(201).json({
    "contactId": newContact.id,
    "status": "created",
    "en_workflow": newContact.en_workflow,
    "note": "Contacto agregado y workflow simulado."
  });
});

export default router;
