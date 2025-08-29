"use client"

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog"

type AddMovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddMovieModal({ isOpen, onClose }: AddMovieModalProps) {

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Filme ao Catálogo</DialogTitle>
          <DialogDescription>
            Preencha as informações do novo filme abaixo.
          </DialogDescription>
        </DialogHeader>

        <label className="block mb-1 font-medium">Nome da Filme*
          <input
            placeholder="Nome de um grupo da organização"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <label className="block mb-1 font-medium">Descrição do Filme*
          <input
            placeholder="Nome de um grupo da organização"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>
        
        <DialogFooter className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-red-400 text-white px-4 py-2 rounded cursor-pointer"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Salvar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
