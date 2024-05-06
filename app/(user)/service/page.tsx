"use client";
import PaginationComponent from "@/components/PaginationComponent.1";
import CardProductComponent from "@/components/navbar/NavbarComponent";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://store.istad.co/api/products/?page=1&page_size=8";

export default function Service() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        setProducts(result);
      });
  }, []);
  return (
    <div>
      <div className="mt-6 container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {products.map((product: any, index) => (
          <CardProductComponent
            //   onClick={() => router.push(`/service/${product.id}`)}
            key={index}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
