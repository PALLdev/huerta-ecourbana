import Image from "next/image";
import { FC } from "react";

type BlogItemProps = {
  key: number;
  title: string;
  imgSrc: string;
  authorImgSrc: string;
  author: string;
  date: string;
};

const LastBlogsItem: FC<BlogItemProps> = ({
  key,
  author,
  authorImgSrc,
  date,
  imgSrc,
  title,
}) => {
  return (
    <article
      key={key}
      className="flex flex-col justify-between w-full rounded-md
              lg:w-4/5 lg:mx-auto border"
    >
      <div className="w-full h-52">
        <div className="w-full h-full relative">
          <Image
            src={imgSrc}
            alt={`Foto del articulo ${title}`}
            layout="fill"
            className="rounded-t-md lg:rounded-bl-md"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full px-2">
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
