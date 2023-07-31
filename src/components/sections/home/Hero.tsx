import { scrollToSection } from '@/utils/helpers';

export function Hero() {
  return (
    <section
      id="inicio"
      className="header-hero relative z-10 bg-hero-3 bg-center bg-no-repeat"
    >
      <div className="container">
        <div className="row justify-center">
          <div className="relative w-full animate-display lg:w-5/6 xl:w-2/3">
            <div className="py-28 text-center md:pb-64 md:pt-48">
              <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-100 shadow-black drop-shadow-sm md:text-5xl">
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10"> Somos el aliado </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 z-0 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                </span>
                en el cuidado y tratamiento de tus pacientes.
              </h3>
              <p className="mb-10 px-4 text-base leading-6 text-white shadow-black drop-shadow-sm sm:px-8 md:px-32 md:text-xl">
                Insumos médicos descartables y quirúrgicos con
                <br className="hidden md:block" /> entrega rápida a todo Chile
                🇨🇱
              </p>
              <ul className="flex flex-wrap justify-center">
                <li>
                  <button
                    type="button"
                    className="gradient-btn mx-2 rounded-full px-6 py-2"
                    onClick={() => scrollToSection('contactanos')}
                  >
                    Contáctanos
                  </button>
                </li>
                {/* <li>
                <button
                  type="button"
                  className="mx-2 rounded-full bg-white px-8 py-2 text-base duration-300 ease-in-out hover:bg-zinc-200 hover:shadow-xl"
                  onClick={() => scrollToSection('productos')}
                >
                  Productos
                </button>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-20 -mb-1 h-auto w-full">
        <img src="assets/images/header-shape.svg" alt="shape" />
      </div>
    </section>
  );
}
