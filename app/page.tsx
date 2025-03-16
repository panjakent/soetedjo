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

  const LIST_MENU_FOOTER = [
    {
      icon: 'ic:round-home',
      text: 'Beranda',
    },
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
    <div className="h-full max-w-lg mx-auto font-AveriaSerifLibre">
      <header className="fixed top-0 inset-x-0 max-w-screen-lg mx-auto px-0 bg-white/0 backdrop-blur-md">
        <div className="flex justify-center items-center shadow-[10px_0px_0px_var(--background),-10px_0px_0px_var(--background),0px_4px_10px_rgba(0,0,0,0.2)] py-5">
          <img
            src="assets/favpng_vector-graphics-clip-art-silhouette-cigarette-smoking-man-free-content 2.png"
            alt="Logo"
            className="h-16"
          />
          <h1 className="ml-3 text-[42px] text-textColor leading-[0.8]">
            Soetedjo <br /> Oetojo
          </h1>
        </div>
      </header>

      <main className="pt-[103px] pb-[135px]">
        {/*  */}
        <section id="welkam" className="px-3 mt-5">
          <div className="text-2xl font-bold italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-5 py-5">
            <p>
              Selamat datang di{' '}
              <span className="not-italic underline decoration-1 underline-offset-4">
                Beranda
              </span>{' '}
              <br />
              <span className="text-primary">Keluarga Soetedjo Oetojo</span>!
            </p>
          </div>
        </section>

        <section id="quote" className="px-3 mt-3">
          <div className="italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-6 py-8">
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

        {/*tesssssss*/}
        <section id="quote" className="px-3 mt-3">
          <div className="italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-6 py-8">
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
        <section id="quote" className="px-3 mt-3">
          <div className="italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-6 py-8">
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
        <section id="quote" className="px-3 mt-3">
          <div className="italic text-center text-textColor border-[0.5px] border-borderColor rounded-[var(--card-radius)] px-6 py-8">
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
        {/*tesssss*/}

        <nav id="menu-inside" className="grid grid-cols-2 gap-3 mt-3 px-3">
          {LIST_MENU.map((menu) => {
            return (
              <a
                key={menu.text}
                href={'#' + menu.text.replaceAll(' ', '-')}
                className="h-[70px] border-[0.5px] border-borderColor rounded-[var(--card-radius)] shadow-[inset_0_0_8px_rgba(0,0,0,0.15)] transition duration-300 ease-in-out hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.20)] flex gap-3 justify-center items-center"
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

      {/*<footer className="mt-16 px-8">*/}
      <footer className="fixed bottom-0 inset-x-0 max-w-screen-lg mx-auto px-0">
        <nav className="px-4 grid grid-cols-5 bg-primary">
          {LIST_MENU_FOOTER.map((menu) => {
            return (
              <a
                key={menu.text}
                href={'#' + menu.text.replaceAll(' ', '-')}
                className="h-[105px] flex flex-col justify-center items-center transition duration-150 ease-in-out hover:bg-background group"
              >
                <Icon
                  icon={menu.icon}
                  className="text-background text-[35px] transition duration-150 ease-in-out group-hover:text-textColor"
                />
                <span className="mt-1 text-[14px] font-bold text-background transition duration-150 ease-in-out group-hover:text-textColor">
                  {menu.text}
                </span>
              </a>
            )
          })}
        </nav>
      </footer>
    </div>
  )
}
