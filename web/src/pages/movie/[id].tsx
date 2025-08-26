import { useRouter } from 'next/router'

export default function MovieDetailsPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Detalhes do Filme {id}</h1>
    </div>
  )
}