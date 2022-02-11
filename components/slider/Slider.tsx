import Image from "next/image";
import FlechaAdelante from "../ui/FlechaAdelante";
import FlechaAtras from "../ui/FlechaAtras";

const Slider = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <FlechaAtras />
        <FlechaAdelante />
      </div>
      <div className="flex gap-12 px-10 overflow-x-hidden">
        {/* card */}
        <div className="border-2 rounded-xl shadow-md my-4 bg-white min-w-full">
          {/* imagen */}
          <div className="relative w-full h-96">
            <Image
              src="/img/s-1.jpg"
              layout="fill"
              alt="producto"
              objectFit="contain"
              className="rounded-t-xl"
            />
          </div>
          {/* datos */}
          <div className="my-2 p-10 text-center">
            <h3 className="text-3xl font-semibold mb-4">Product name</h3>
            <p className="text-2xl font-medium">$3000</p>
          </div>
        </div>

        <div className="border-2 rounded-xl shadow-md my-4 bg-white">
          {/* imagen */}
          <div className="relative w-full h-96">
            <Image
              src="/img/s-1.jpg"
              layout="fill"
              alt="producto"
              objectFit="contain"
              className="rounded-t-xl"
            />
          </div>
          {/* datos */}
          <div className="my-2 p-10 text-center">
            <h3 className="text-3xl font-semibold mb-4">Product name</h3>
            <p className="text-2xl font-medium">$3000</p>
          </div>
        </div>

        <div className="border-2 rounded-xl shadow-md my-4 bg-white">
          {/* imagen */}
          <div className="relative w-full h-96">
            <Image
              src="/img/s-1.jpg"
              layout="fill"
              alt="producto"
              objectFit="contain"
              className="rounded-t-xl"
            />
          </div>
          {/* datos */}
          <div className="my-2 p-10 text-center">
            <h3 className="text-3xl font-semibold mb-4">Product name</h3>
            <p className="text-2xl font-medium">$3000</p>
          </div>
        </div>

        <div className="border-2 rounded-xl shadow-md my-4 bg-white">
          {/* imagen */}
          <div className="relative w-full h-96">
            <Image
              src="/img/s-1.jpg"
              layout="fill"
              alt="producto"
              objectFit="contain"
              className="rounded-t-xl"
            />
          </div>
          {/* datos */}
          <div className="my-2 p-10 text-center">
            <h3 className="text-3xl font-semibold mb-4">Product name</h3>
            <p className="text-2xl font-medium">$3000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
