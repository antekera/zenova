import { Contactos } from '@/components/home/Contactos';
import { Hero } from '@/components/home/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Zenova - Insumos Médicos y de Aseo"
          description="Somos tu aliado en el cuidado y tratamiento de tus pacientes."
        />
      }
    >
      <Hero />
      <Contactos />
    </Main>
  );
};

export default Index;
