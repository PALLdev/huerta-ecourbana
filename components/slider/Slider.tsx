import { FC } from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

type ProductProps = {
  prodName: string;
  prodPrice: number;
  prodImageSrc: string;
};

const CarouselProduct: FC<ProductProps> = ({
  prodName,
  prodPrice,
  prodImageSrc,
}) => {
  return (
    <div className="border rounded-xl shadow-md my-4 bg-white min-w-full cursor-pointer lg:hover:scale-105 lg:transition-all">
      <div className="relative w-full h-80">
        <Image
          src={prodImageSrc}
          layout="fill"
          alt="producto"
          objectFit="contain"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-8 text-left">
        <h3 className="text-2xl font-semibold mb-4 text-slate-800">
          {prodName}
        </h3>
        <p className="text-xl font-medium text-slate-700">${prodPrice}</p>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      itemClass={"md:px-1 lg:px-4"}
      swipeable={true}
      draggable={true}
      ssr={true}
    >
      <CarouselProduct
        prodImageSrc="/img/s-1.jpg"
        prodName="Producto 1"
        prodPrice={9999}
      />
      <CarouselProduct
        prodImageSrc="/img/s-1.jpg"
        prodName="Producto 2 testeando"
        prodPrice={99999}
      />
      <CarouselProduct
        prodImageSrc="/img/s-1.jpg"
        prodName="Producto numero tres"
        prodPrice={999999}
      />
      <CarouselProduct
        prodImageSrc="/img/s-1.jpg"
        prodName="Prod ndasdum"
        prodPrice={999999}
      />
      <CarouselProduct
        prodImageSrc="/img/s-1.jpg"
        prodName="Producto numero"
        prodPrice={999999}
      />
    </Carousel>
  );
};

export default Slider;
