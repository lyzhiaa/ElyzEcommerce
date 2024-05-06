import React from "react";

export default function About() {
  return (
    <main className="bg-green-200">
        <div className="p-4 text-center ">
        <h1 className="text-4xl">About ElyzShop</h1>
        <p>The place for you to shop</p>
        </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <h1>Our Vision</h1>
        <div className="">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
        <h1>Our Vision</h1>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <h1>Our Vision</h1>
        <div className="">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
