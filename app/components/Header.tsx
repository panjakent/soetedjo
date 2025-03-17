import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 max-w-screen-lg mx-auto px-0 bg-white/0 backdrop-blur-md">
      <div className="flex justify-center items-center shadow-[10px_0px_0px_var(--background),-10px_0px_0px_var(--background),0px_4px_10px_rgba(0,0,0,0.2)] py-3">
        <Image
          src="/assets/favpng_vector-graphics-clip-art-silhouette-cigarette-smoking-man-free-content 2.png"
          alt="Logo"
          width={52}
          height={52}
          style={{ width: '52px', height: '52px' }}
        />
        <h1 className="ml-2 text-[38px] leading-[0.8]">
          Soetedjo <br /> Oetojo
        </h1>
      </div>
    </header>
  )
}
