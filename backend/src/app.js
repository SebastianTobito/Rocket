import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js"; 

const app = express();
app.use(cors());
app.use(express.json());


app.use("/crm/v3/objects", contactRoutes); 

app.get("/", (req, res) => {
  res.status(200).send("Servidor Express para Contactos");
});


export default app;
