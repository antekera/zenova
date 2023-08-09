import { Logo } from '@/components';
import { SocialLinks } from '@/components/SocialLinks';

export function Contactos() {
  return (
    <section id="contactanos" className="contact-area py-20 md:py-28">
      <div className="container">
        <div className="row justify-center">
          <div className="mx-4 w-full lg:w-1/2">
            <div className="section-title pb-10 text-center">
              <h4 className="title">Contáctanos</h4>
              <p>Nuestro equipo de asesores está listo para ayudarte.</p>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col justify-center">
              <a className="mx-auto mb-2 flex" href="tel:+56973319401">
                <span className="material-symbols-outlined mr-1 mt-1 block">
                  phone_iphone
                </span>
                +56 9 7331 9401
              </a>
              <a className="mx-auto mb-4 flex" href="mailto:ventas@zenova.cl">
                <span className="material-symbols-outlined mr-1 mt-1 block">
                  email
                </span>
                ventas@zenova.cl
              </a>
              <p className="mx-auto mb-6 flex text-center text-gray-600">
                <span className="material-symbols-outlined mr-1 block">
                  location_on
                </span>
                <span>Huechuraba, Región Metropolitana 🇨🇱</span>
              </p>
              <SocialLinks />
              <Logo className="mx-auto mt-10 h-auto w-36 md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
