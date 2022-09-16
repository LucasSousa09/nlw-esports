import axios from 'axios'
import { useEffect, useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdModal } from './components/Form/CreateAdModal'
import { CreateAdBanner } from './components/Form/CreateAdBanner'

import logoImg from './assets/logo-nlw-esports.svg'

import './styles/main.css'


export interface GameProps{
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads:number
  }
}

export function App() {
  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
     .then(response => setGames(response.data))
   },[])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <img className="my-20" src={logoImg} alt="Logo NLW eSports" />

      <h1 className="text-6xl text-white font-black mb-16">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

       <div className="flex items-center gap-6 px-6 mb-8">
          <button className="flex items-center justify-center">
            <CaretLeft size={48} color="#A1A1AA"/>
          </button>
        
          <div className="grid grid-cols-6 gap-6">
            {
              games.map(game => (
                <GameBanner
                  key={game.id} 
                  bannerUrl={game.bannerUrl} 
                  title={game.title} 
                  numberOfAds={game._count.ads} />
              ))
            }
          </div>
        
          <button className="flex items-center justify-center">
            <CaretRight size={48} color="#A1A1AA"/>
          </button>
       </div>

       <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
       </Dialog.Root>
    </div>
  )
}