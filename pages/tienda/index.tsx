import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const GridItem = () => {
  return (
    <div className="block shadow-gray-300 sombra-grid rounded-sm bg-white">
      <Image
        width={400}
        height={472}
        src="/img/s-1.jpg"
        alt="imagen"
        className="lg:hover:scale-105 lg:transition-all cursor-pointer"
      />

      <div className="p-7">
        <h2 className="mb-2 text-xl font-semibold">
          <Link href={"/"}>
            <a>House Plant</a>
          </Link>
        </h2>
        <span className="font-semibold text-base">$4000</span>
      </div>
    </div>
  );
};

const TiendaPage: NextPage = () => {
  return (
    <div className="py-12 px-6 md:container lg:px-20">
      <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </div>
  );
};

export default TiendaPage;
