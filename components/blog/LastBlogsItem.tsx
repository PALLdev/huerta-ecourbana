import Image from "next/image";
import { FC } from "react";

type BlogItemProps = {
  title: string;
  imgSrc: string;
  authorImgSrc: string;
  author: string;
  date: string;
};

const LastBlogsItem: FC<BlogItemProps> = ({
  author,
  authorImgSrc,
  date,
  imgSrc,
  title,
}) => {
  return (
    <article
      className="flex flex-col justify-between w-full rounded-md border bg-white
              md:mx-auto md:flex-row"
    >
      <div className="w-full h-52 md:w-1/3 md:h-44">
        <div className="w-full h-full relative">
          <Image
            src={imgSrc}
            alt={`Foto del articulo ${title}`}
            layout="fill"
            className="rounded-t-md md:rounded-bl-md md:rounded-tr-none"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full px-2 md:w-2/3 md:pl-4">
        <h2 className="font-semibold text-gray-800 py-4">{title}</h2>
        <div className="flex items-center mt-auto pb-4">
          <div className="flex items-center">
            <Image
              src={authorImgSrc}
              alt={`Foto del perfil de ${author}`}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="font-semibold text-sm text-gray-800">{author}</p>
              <p className="text-sm text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LastBlogsItem;
