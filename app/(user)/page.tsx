"use client";
import HeaderComponent from "@/components/HeaderComponent";
import InfiniteCarouselComponent from "@/components/carousel/InfiniteCarouselComponent";
import { useRouter } from "next/navigation";
import router from "next/router";
import { Key, useEffect, useState } from "react";
import React from "react";
import PaginationComponent from "@/components/PaginationComponent";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession()
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();
  const ENDPOINT = `https://store.istad.co/api/products/?page=${page}&page_size=${pageSize}`;

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        setProducts(result);
      });
  }, []);

  return (
    <main className="bg-gray-50 w-full flex flex-col justify-center items-center">
      {/* <JumbotronComponent/> */}
      <HeaderComponent />
      <InfiniteCarouselComponent />
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 w-[800px] gap-8 bg-green">
          <div className="pt-3">
            <img
              className="rounded-lg"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1306011662.jpg?crop=1.00xw:0.772xh;0,0.0147xh&resize=1200:*"
              alt=""
            />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <img
              className="w-1/2 rounded-lg"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1306011662.jpg?crop=1.00xw:0.772xh;0,0.0147xh&resize=1200:*"
              alt=""
            />
            <img
              className="w-1/2 rounded-lg"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1306011662.jpg?crop=1.00xw:0.772xh;0,0.0147xh&resize=1200:*"
              alt=""
            />
          </div>
        </div>
        <div className="bg-red-400">
          <h1 className="text-2xl font-medium">Fashion Essentails</h1>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-6 mt-4 my-4 "> */}
        {/* {products.map((product: any, index) => (
          <CardProductComponent
            onClick={() => router.push(`/service/${product.id}`)}
            key={index}
            title={product.name}
            image={product.image}
            price={product.price}
            description={""}
            id={0}
          />
        ))} */}
      {/* </div> */}
      <PaginationComponent/>
    </main>
  );
}
