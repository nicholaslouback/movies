import { ROUTES } from "@/routes/routes";
import Link from "next/link";

export default function NewMoviePage() {
  return (
    <div>
      <h1>Adicionar Novo Filme</h1>
      <Link href={ROUTES.movie.new.path}>Adicionar Novo Filme</Link>
    </div>
  )
}