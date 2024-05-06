"use client";
import { Card } from "flowbite-react";
import { useAppDispatch } from "@/lib/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/lib/feature/counter/counterSlide";
import {
  ProductType,
} from "@/lib/difinitions";
import { addToCart } from "@/lib/feature/cart/cartSlice";
import React from "react";

interface Props extends ProductType {
  onClick: () => void;
}

const placeHolderImage =
  "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1";

const CardProductComponent: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const addToCartAndIncrement = () => {
    dispatch(addToCart(props));
    dispatch(increment());
  };

  return (
    <Card className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        src={props?.image || placeHolderImage}
        onClick={props.onClick}
      />
      <div className="relative border border-gray-100 p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          {" "}
          New{" "}
        </span>
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {props?.name || "Product Name"}
        </h3>
        {/* <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {props.description || "Product Description"}
        </p> */}
        <p className=" mt-1.5 text-sm text-gray-700">
          ${props.price || "No Product Available"}
        </p>
        <button
          className="block w-full mt-6 rounded bg-primary p-4 text-sm font-medium transition hover:scale-105"
          onClick={addToCartAndIncrement}
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
};

export default CardProductComponent;
