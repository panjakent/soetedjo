import { Icon } from '@iconify/react'

export default function Home() {
  const LIST_MENU = [
    {
      icon: 'ic:baseline-menu-book',
      text: 'Sejarah',
    },
    {
      icon: 'ic:round-emoji-events',
      text: 'Karya',
    },
    {
      icon: 'ic:baseline-image',
      text: 'Galeri',
    },
    {
      icon: 'ic:baseline-calendar-month',
      text: 'Acara',
    },
  ]

  return (
    <div className="h-full max-w-md mx-auto font-AveriaSerifLibre">
      <header>header</header>
      <main>
        {/*  */}
        <section id="quote" className="px-4">
          <div className="italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-5 py-8 ">
            <p>
              Setiap kenangan adalah cerita, setiap foto adalah jejak
              perjalanan, dan setiap kisah yang terukir membentuk bagian dari
              perjalanan kami.
            </p>
            <p className="mt-4">
              Ingin tahu lebih dekat? Pilih menu di bawah dan temukan kisah di
              balik jejak keluarga Soetedjo Oetojo.
            </p>
          </div>
        </section>

        <nav id="menu-inside" className="grid grid-cols-2 gap-3 mt-3 px-4">
          {LIST_MENU.map((menu) => {
            return (
              <a
                key={menu.text}
                href={'#' + menu.text.replaceAll(' ', '-')}
                className="h-[65px] border-[0.5px] border-borderColor rounded-[var(--card-radius)] shadow-[inset_0_0_10px_#A1A1A1] flex gap-3 justify-center items-center"
              >
                <Icon icon={menu.icon} className="text-primary text-4xl" />
                <span className="text-xl font-bold text-textColor">
                  {menu.text}
                </span>
              </a>
            )
          })}
        </nav>
      </main>
      <footer>footer</footer>
    </div>
  )
}
