import React from "react";

const BlogItem = () => {
  return (
    <div className="mx-auto lg:w-4/5 lg:flex lg:h-auto">
      <img
        src="img-huertos.jpg"
        alt=""
        className="rounded-t-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-tr-none lg:rounded-bl-md"
      />
      <div className="bg-white p-8 rounded-b-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="font-semibold mb-4 text-gray-800">
          Como crear tu huerto en 10 simples pasos implementando tecnicas
          agricolas convencionales
        </h2>
        <p className="text-sm mb-5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          molestiae aut laboriosam delectus? Saepe assumenda magnam quis
          architecto exercitationem?
        </p>
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="img-huertos.jpg"
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <p className="font-semibold text-sm text-gray-800">
                Fernando Gutierrez
              </p>
              <p className="text-sm text-gray-600">13-01-2022</p>
            </div>
          </div>

          <div className="w-8 h-8 bg-slate-200 rounded-full ml-auto grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
