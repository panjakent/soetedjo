import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 border-b border-borderColor bg-white/80 backdrop-blur-md z-10">
      <div className="container mx-auto flex justify-center items-center py-3">
        <Image
          src="/assets/favpng_vector-graphics-clip-art-silhouette-cigarette-smoking-man-free-content 2.png"
          alt="Logo Keluarga Soetedjo Oetojo"
          width={50}
          height={50}
          priority
        />
        <h1 className="ml-2 text-[36px] font-amiri leading-[0.75]">
          Soetedjo <br /> Oetojo
        </h1>
      </div>
    </header>
  )
}
