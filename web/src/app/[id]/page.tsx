'use client'

import { useParams } from 'next/navigation'

export default function MovieDetailsPage() {
  const params = useParams()
  const id = params.id

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-red-500 to-blue-500">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Detalhes do Filme {id}
        </h1>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-700">
            Esta é a página de detalhes para o filme com ID: <strong>{id}</strong>
          </p>
          <div className="mt-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => window.history.back()}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
