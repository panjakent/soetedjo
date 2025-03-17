import Menu from '@/app/components/Menu'

export default function Home() {
  return (
    <div className="h-full max-w-lg mx-auto">
      <main className="">
        <section id="quote" className="px-3 mt-3">
          <div className="card px-8 py-6 text-center italic text-[16px]">
            <p>
              &quot;Setiap kenangan adalah cerita, setiap foto adalah jejak
              perjalanan, dan setiap kisah yang terukir membentuk bagian dari
              perjalanan kami.&quot;
            </p>
            <p className="mt-4 not-italic">
              Ingin tahu lebih dekat? Pilih menu di bawah dan temukan kisah di
              balik jejak keluarga Soetedjo Oetojo.
            </p>
          </div>
        </section>
        <Menu />
      </main>
    </div>
  )
}
