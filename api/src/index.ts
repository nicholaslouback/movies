import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (_req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

app.listen(3333, () => {
  console.log("API rodando na porta 3333");
});
