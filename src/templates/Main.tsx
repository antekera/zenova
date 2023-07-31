import Script from 'next/script';
import type { ReactNode } from 'react';

import { Footer, Menu } from '@/components';
import { useScrollHandler } from '@/utils/hooks/useScrollHandler';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const scrolled = useScrollHandler(100);

  return (
    <>
      <header
        id="top"
        className={`fixed left-0 top-0 z-20 w-full duration-300 ${
          scrolled ? 'bg-white drop-shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="w-full">
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <div className="w-full text-gray-700 antialiased">
        {props.meta}
        <main className="text-xl">{props.children}</main>
        <Footer scrolled={scrolled} />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', ${process.env.GOOGLE_ANALYTICS});
        `}
        </Script>
      </div>
    </>
  );
};

export { Main };
