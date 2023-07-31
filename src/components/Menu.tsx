import { useEffect, useRef, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import { scrollToSection } from '@/utils/helpers';

import { Icon } from './Icon';
import { LogoText } from './LogoText';

export function Menu() {
  const [activeItem, setActiveItem] = useState('inicio');
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onClickHandler = (item: string) => {
    setActiveItem(item);
    scrollToSection(item);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveItem('');
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between" ref={ref}>
      <button
        type="button"
        className="mb-1 mr-4 py-3"
        onClick={() => scrollToSection('inicio')}
      >
        <LogoText className="h-auto w-36 md:w-auto" />
      </button>
      <div
        className={`${
          showMenu ? 'block' : 'hidden'
        } absolute left-0 top-[68px] z-30 w-full bg-white px-5 py-3 shadow duration-300 md:static md:block md:w-auto md:bg-transparent md:shadow-none`}
        id="navbarOne"
      >
        <ul className="mr-auto content-start items-center md:flex md:justify-end lg:justify-center">
          {AppConfig.menu.map((item) => (
            <li className="capitalize" key={item}>
              <button
                type="button"
                className={`relative inline-block px-4 py-3 drop-shadow-sm duration-300 hover:text-cyan-700 hover:underline hover:underline-offset-4 ${
                  activeItem === item.toLowerCase()
                    ? 'text-cyan-700 underline underline-offset-4'
                    : 'text-gray-900'
                }`}
                onClick={() =>
                  onClickHandler(item.replace('á', 'a').toLowerCase())
                }
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center justify-end text-sm sm:text-base lg:flex">
        <a
          aria-label="Chat en WhatsApp"
          rel="noopener noreferrer"
          target="_blank"
          href="https://wa.me/56973319401?text=¡Hola+Zenova+!+tengo+la+siguiente+consulta%3A"
          className="btn bg-green-500 hover:bg-green-600"
        >
          <Icon network="whatsapp" width="w-5 mr-2" size />
          Whatsapp
        </a>
      </div>
      <button
        className="-mr-2 ml-1 mt-1 block p-2 text-lg focus:outline-none md:hidden"
        data-collapse-toggle="navbar-default"
        type="button"
        data-toggle="collapse"
        data-target="#navbarOne"
        aria-controls="navbarOne"
        aria-expanded={showMenu}
        aria-label="Toggle navigation"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <span className="material-symbols-outlined text-3xl">close</span>
        ) : (
          <span className="material-symbols-outlined text-3xl">menu</span>
        )}
      </button>
    </nav>
  );
}
