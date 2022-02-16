import Link from "next/link";
import Image from "next/image";
import LogoInstagram from "../ui/LogoInstagram";
import LogoWhattsapp from "../ui/LogoWhattsapp";
import LogoFacebook from "../ui/LogoFacebook";

const Navbar = () => {
  const links = [
    { text: "Nosotros", href: "/nosotros" },
    { text: "Tienda", href: "/tienda" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <nav className="w-full shadow-sm bg-slate-50">
      <div className="flex items-center gap-20 py-2 px-2 lg:container">
        <div>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo-huerta.png"
                alt="Logo Huerta Eco-urbana"
                width={70}
                height={60}
                className="rounded-full cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => {
            return (
              <li className="font-bold" key={i + "_" + link.text}>
                <Link href={link.href}>
                  <a className="hover:text-primary">{link.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto">
          <div className="flex items-center gap-1">
            {/* svg locacion */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <span className="font-bold text-xs md:text-base">
              Maule, VII Región
            </span>
            <div className="border-4 border-gray-300 ml-4 p-1 hidden rounded-md bg-slate-50 text-black lg:flex lg:flex-col lg:items-center lg:justify-center">
              <span className="text-xs font-bold">Contáctanos</span>
              <div className="flex justify-center items-center gap-2">
                <LogoWhattsapp />
                <LogoFacebook />
                <LogoInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
