import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
  return (
    <div className="pt-1 w-[calc(100%-12rem)] bg-nlw-gradient self-stretch rounded-lg overflow-hidden mx-auto mb-32">
      <div className='flex justify-between px-8 py-6 rounded-lg bg-[#2A2634]'>
      <div>
        <strong className="text-white text-2xl font-black block">Não encontrou o seu duo?</strong>
        <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
      </div>
      <Dialog.Trigger className="flex gap-3 items-center px-4 py-3 rounded-md bg-violet-500 hover:bg-violet-600 text-white">
          <MagnifyingGlassPlus size={24} weight='bold' />
          Publicar anúncio
      </Dialog.Trigger>
      </div>
    </div>
  )
}