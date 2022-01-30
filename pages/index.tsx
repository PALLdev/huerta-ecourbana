import type { NextPage } from "next";
import Image from "next/image";
import BlogItem from "../components/blog/BlogItem";

const Home: NextPage = () => {
  const services = [
    {
      title: "Plant renovation",
      description: "Plants are mainly multicelular organisms, predominantly.",
      logoSrc: "/img/services/icon-1.png",
    },
    {
      title: "Watering Garden",
      description: "Plants are mainly multicelular organisms, predominantly.",
      logoSrc: "/img/services/icon-2.png",
    },
    {
      title: "Garden Care",
      description: "Plants are mainly multicelular organisms, predominantly.",
      logoSrc: "/img/services/icon-3.png",
    },
  ];

  const blogs = [
    {
      title: "Como crear tu huerto en 10 simples pasos",
      author: "Fernando Gonzalez",
      date: "27-01-2022",
      imgSrc: "/img-huertos.jpg",
      authorImgSrc: "/img-huertos.jpg",
    },
    {
      title: "Que es el compostaje y como sacarle beneficio",
      author: "Pedro Lopez",
      date: "27-01-2022",
      imgSrc: "/img-huertos.jpg",
      authorImgSrc: "/img-huertos.jpg",
    },
    {
      title:
        "La agricultura de riego, un metodo usado desde tiempos inmemoriales",
      author: "Fernando Gonzalez",
      date: "27-01-2022",
      imgSrc: "/img-huertos.jpg",
      authorImgSrc: "/img-huertos.jpg",
    },
  ];

  return (
    <>
      {/* START HERO */}
      <header className="bg-primary pt-8 pb-1 md:pb-7 md:px-12 ">
        <div className="container flex flex-col justify-between items-center md:flex-row">
          <div className="md:w-3/5">
            <h6 className="text-white text-xl">Bienvenido!</h6>
            <h1 className="text-4xl md:text-5xl tracking-widest uppercase text-white font-semibold mb-8">
              Somos la Huerta Eco-Urbana
            </h1>
            <p className="text-xl mt-3 text-white">
              Únete a la huerta siguiendo nuestras redes sociales
            </p>
          </div>
          <div className="md:w-2/5 pt-6">
            <Image
              src="/logo-huerta.png"
              alt="Logo de la Huerta eco-urbana"
              width={400}
              height={400}
            />
          </div>
        </div>
      </header>
      {/* END HERO */}

      <div className="text-center py-12">
        <h5 className="font-bold text-3xl tracking-wides">Te ofrecemos</h5>
        <div className="line"></div>
      </div>

      {/* START SERVICIOS */}
      <section className="lg:container lg:px-0 mb-12 px-4">
        <div className=" lg:flex lg:justify-between">
          {services.map(({ title, description, logoSrc }, i) => {
            return (
              <article
                key={i}
                className="border-8 p-5 mb-6 border-borders lg:flex-1 lg:m-4"
              >
                <div className="text-center my-6">
                  <Image
                    src={logoSrc}
                    alt={`Icono servicio ${title}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className="text-xl font-semibold text-center mb-4 lg:text-2xl">
                  {title}
                </h5>
                <p className="text-center text-lg text-slate-600 mb-4 lg:px-4 lg:py-2">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      {/* END SERVICIOS */}

      {/* START PRODUCTOS y BLOG */}
      <section className="flex w-full py-12 bg-borders">
        <main className="w-7/12">
          <div className="text-center">
            <h1 className="font-semibold text-2xl">Últimos productos</h1>
            <div className="line"></div>
          </div>
        </main>

        <aside className="w-5/12">
          <div className="text-center">
            <h3 className="font-semibold text-2xl">Blogs destacados</h3>
            <div className="line"></div>
          </div>
          <div className="grid grid-rows-3">
            {blogs.map(({ title, author, imgSrc, date, authorImgSrc }, i) => (
              <article key={i} className="mx-auto pt-8 lg:w-4/5 lg:flex">
                <Image
                  src={imgSrc}
                  alt={`Foto del articulo ${title}`}
                  width={180}
                  height={200}
                  className="rounded-t-md lg:rounded-tr-none lg:rounded-bl-md"
                />
                <div className="bg-white p-4 rounded-b-md lg:rounded-bl-none lg:rounded-tr-md lg:grow-0">
                  <h2 className="font-semibold mb-4 text-gray-800">{title}</h2>

                  <div className="flex items-center mt-auto">
                    <div className="flex items-center">
                      <Image
                        src={authorImgSrc}
                        alt={`Foto del perfil de ${author}`}
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <p className="font-semibold text-sm text-gray-800">
                          {author}
                        </p>
                        <p className="text-sm text-gray-600">{date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>
      {/* END PRODUCTOS Y BLOG */}
    </>
  );
};

export default Home;
