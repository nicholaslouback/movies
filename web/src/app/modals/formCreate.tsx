"use client"

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"

type AddMovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddMovieModal({ isOpen, onClose }: AddMovieModalProps) {
  const form = useForm({
    defaultValues: {
      name: ""
    }
  })

  function onSubmit(values: any) {
    console.log(values)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Filme ao Catálogo</DialogTitle>
          <DialogDescription>
            Preencha as informações do novo filme abaixo.
          </DialogDescription>
        </DialogHeader>

        <label className="block mb-1 font-medium">Nome da Filme*</label>
        <input
          placeholder="Nome de um grupo da organização"
          className="border border-gray-300 rounded p-2 w-full"
        />

        <label className="block mb-1 font-medium">Descrição do Filme*</label>
        <input
          placeholder="Nome de um grupo da organização"
          className="border border-gray-300 rounded p-2 w-full"
        />
        
        <DialogFooter>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
