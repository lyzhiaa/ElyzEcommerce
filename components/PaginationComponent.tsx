"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardProductComponent from "./card/CardProductComponent";

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
}

export default function PaginationComponent() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const pageSize: number = 10;
  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://store.istad.co/api/products/?page=${page}&page_size=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.results))
      .catch((error) => console.log(error));
  }, [page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const renderPageNumbers = (data: number | null) => {
    if (!data) return null;
    const pagesToShow: JSX.Element[] = [];
    const totalPageCount: number = Math.ceil(data / pageSize);
    const maxPageNumberToShow: number = 5;

    let startPage: number = Math.max(
      1,
      page - Math.floor(maxPageNumberToShow / 2)
    );
    let endPage: number = Math.min(
      totalPageCount,
      startPage + maxPageNumberToShow - 1
    );

    if (endPage - startPage < maxPageNumberToShow - 1) {
      startPage = Math.max(1, endPage - maxPageNumberToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 mx-1 rounded-lg ${
            i === page ? "bg-yellow-500 text-white" : "bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return pagesToShow;
  };

  return (
    <main>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-6 mt-4 my-4">
        {products.map((pro: ProductType, key: number) => (
          <CardProductComponent
            key={key}
            id={pro.id}
            onClick={() => router.push(`/service/${pro.id}`)}
            name={pro.name}
            price={pro.price}
            image={pro.image}
            desc={pro.desc}
            category={""}
          />
        ))}
      </div>
      <div className="flex justify-center m-8">
        <button
          onClick={prevPage}
          className="px-4 mx-1 rounded-lg hover:text-primary"
        >
          Previous
        </button>
        <button className="p-3 w-12 h-12  m-3 rounded-full font-semibold bg-primary text-white">
          {page}
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 mx-1 rounded-lg hover:text-primary"
        >
          Next
        </button>
      </div>
    </main>
  );
}
