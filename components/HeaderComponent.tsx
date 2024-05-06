import React from "react";

export default function HeaderComponent() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-secondary">
      <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center xl:mt-48 lg:mt-8">
          <h2 className="text-2xl font-bold text- md:text-3xl text-gray-900">
            Welcome to ElyzShoppe!
          </h2>

          <p className="hidden text-gray-900 sm:mt-4 sm:block">
            Discover timeless treasures and modern marvels in our exquisite
            collection. From classic pieces to contemporary designs, adorn
            yourself with brilliance at Elyz.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded border p-4 border-white bg-primary py-3 text-sm font-medium text-gray-100 transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-primary"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src="../rose.png" alt="" />
      </div>
    </div>
  );
}
