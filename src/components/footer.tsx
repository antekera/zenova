import React from 'react';

import { AppConfig } from '@/utils/AppConfig';
import { scrollToSection } from '@/utils/helpers';

export function Footer({ scrolled }: { scrolled: boolean }) {
  return (
    <footer id="footer">
      <div className="bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="w-full">
              <div className="py-6 text-center">
                <p className="text-sm text-white">
                  Copyright {new Date().getFullYear()} {AppConfig.title} SPA.
                  Todos los Derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`back-to-top ${
          scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => scrollToSection('inicio')}
      >
        <span className="material-symbols-outlined">expand_less</span>
      </button>
    </footer>
  );
}
