import Link from 'next/link'
import { ROUTES } from '../../routes/routes'

export default function HomePage() {
  return (
    <div>
      <h1>Lista de Filmes</h1>
      <Link href={ROUTES.movie.new.path}>Adicionar Novo Filme</Link>
    </div>
  )
}