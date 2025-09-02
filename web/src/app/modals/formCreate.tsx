"use client"

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AddMovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const schema = z.object({
  name: z.string().nonempty("O Nome é Obrigatório"),
  description: z.string().nonempty("A Descrição é Obrigatória"),
  rating: z.string().nonempty("A Nota é Obrigatória")
});

type FormData = z.infer<typeof schema>;

export default function AddMovieModal({ isOpen, onClose }: AddMovieModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  function onSubmit(data: FormData) {
    console.log("Dados enviados:", data);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Filme ao Catálogo</DialogTitle>
            <DialogDescription>
              Preencha as informações do novo filme abaixo.
            </DialogDescription>
          </DialogHeader>

          <label className="block mb-1 font-medium">
            Nome do Filme*
            <input
              {...register("name")}
              placeholder="Digite o nome do filme"
              className="border border-gray-300 rounded p-2 w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </label>

          <label className="block mb-1 font-medium">
            Descrição do Filme*
            <input
              {...register("description")}
              placeholder="Digite a descrição"
              className="border border-gray-300 rounded p-2 w-full"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </label>

          <label className="block mb-1 font-medium">
            Nota do Filme*
            <input
              {...register("rating")}
              placeholder="Digite a nota"
              className="border border-gray-300 rounded p-2 w-full"
            />
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
          </label>

          <DialogFooter className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
