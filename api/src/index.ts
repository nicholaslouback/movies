import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json( "Rota Inicial" );
});

app.get("/movies", async (_req, res) => {
  const movies = await prisma.movie.findMany()
  res.json(movies);
});

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params
  const movie = await prisma.movie.findUnique({ where: {id} })

  if (!movie) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }
});

app.post("/movies", async (req, res) => {
  const { title, description, rating } = req.body;

  if (!title || !description || rating === undefined) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  const newMovie = await prisma.movie.create({
    data: { title, description, rating },
  });

  res.status(201).json(newMovie);
});

app.get("/movies/search", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Informe um termo de busca" });
  }

  const movies = await prisma.movie.findMany({
    where: {
      title: { contains: String(q), mode: "insensitive" },
    },
  });

  res.json(movies);
});

app.listen(3333, () => {
  console.log("API rodando na porta 3333");
});
