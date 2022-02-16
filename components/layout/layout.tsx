import { FC } from "react";
import Head from "next/head";
import Navbar from "../navigation/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>La Huerta Eco-Urbana</title>
        <meta
          name="description"
          content="Hola! somos la Huerta Eco-Urbana y nos dedicamos a la venta de plantas ornamentales, dar asesorias de agricultura y publicacíon de contenido relacionado"
        />
        <link rel="icon" href="/logo-huerta.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-slate-700 p-4">
        <h3 className="text-center text-white">Diseñado por @PALLdev</h3>
      </footer>
    </>
  );
};

export default Layout;
