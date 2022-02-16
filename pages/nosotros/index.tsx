import type { NextPage } from "next";

const NosotrosPage: NextPage = () => {
  return (
    <section className="grid gap-8 mb-12 md:container">
      <h1 className="text-center font-bold text-4xl py-6">¿Quienes somos?</h1>
      <div className="w-full mx-auto max-w-4xl">
        <article className="grid grid-cols-2 gap-6 text-center mb-12">
          <div className="image-container">
            <img
              src="/img/background/fondo-2.jpg"
              alt="About us"
              className="rounded-xl"
            />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-xl mb-4">Sobre nosotros</h3>
            <p>
              Desde el año 2016 prestando servicios de mantención
              automovilistica de calidad en la ciudad de Constitución, con
              cientos de clientes satisfechos.
            </p>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-6 text-center mb-12">
          <div className="image-container order-1">
            <img
              src="/img/background/fondo-1.jpg"
              alt="About us 2"
              className="rounded-xl"
            />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-xl mb-4">Misión</h3>
            <p>
              Desde el año 2016 prestando servicios de mantención
              automovilistica de calidad en la ciudad de Constitución, con
              cientos de clientes satisfechos.
            </p>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-6 text-center">
          <div className="image-container">
            <img
              src="/img/background/fondo-1.jpg"
              alt="About us 3"
              className="rounded-xl"
            />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-xl mb-4">Visión</h3>
            <p className="text-slate-700">
              Desde el año 2016 prestando servicios de mantención
              automovilistica de calidad en la ciudad de Constitución, con
              cientos de clientes satisfechos.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NosotrosPage;
