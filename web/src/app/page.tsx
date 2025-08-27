'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] bg-gradient-to-r from-red-500 to-blue-500 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
        <button 
          className="bg-blue-500 gap-3 rounded-xl py-2 px-4 cursor-pointer"
          onClick={() => router.push('/index') }
          >
          Lista de Filmes
        </button>
        <button className=
          "bg-blue-500 gap-3 rounded-xl py-2 px-4 cursor-pointer"
          onClick={() => router.push('/new') }
        >
          Adicionar Filme
        </button>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
