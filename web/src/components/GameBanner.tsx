interface GameBannerProps {
  bannerUrl: string,
  title: string,
  numberOfAds: number
}

export function GameBanner({ bannerUrl, title, numberOfAds }: GameBannerProps){
  return (
    <a className="relative rounded-lg overflow-hidden" href="#">
    <img src={bannerUrl} alt="" />
    <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 w-full h-2/4 bg-black-gradient">
      <strong className="text-white font-bold"> {title} </strong>
      <span className="text-zinc-300 text-sm">{numberOfAds} anúncio(s)</span>
    </div>
  </a>
  )
}