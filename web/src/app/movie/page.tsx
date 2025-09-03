"use client";

import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  description: string;
  rating: string;
};

export default function MoviePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Erro ao carregar filmes:", err));
  }, []);

  return (
    <div>
      <h1 className="flex items-center py-3 justify-center text-3xl">Lista de Filmes</h1>
  
      <ul className="grid grid-cols max-w-[480px] gap-4 p-4">
        {movies.map((movie) => (
          <li className="p-4 border rounded shadow" key={movie.id}>
            <strong>{movie.title}</strong> — {movie.rating}
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
      <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => window.history.back()}
            >
              Voltar
            </button>
    </div>
  );
}
