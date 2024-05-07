import React from "react";

export default function About() {
  return (
    <main>
      <div className="p-4 text-center ">
        <h1 className="text-4xl">About ElyzShop</h1>
        <p>The place for you to shop</p>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="title mt-32 p-8">
          <h1 className="text-3xl font-semibold">Our Vision</h1>
          <p>
            Welcome to Elyzshopee's Vision! We're more than a store. We're a
            canvas of creativity, a hub of inspiration, and a community united
            by a shared passion for excellence. Join us as we redefine
            boundaries, spark dialogue, and celebrate the endless possibilities
            of imagination. Welcome to Elyzshopee—where every purchase tells a
            story of hope and inspiration.
          </p>
        </div>
        <div className="m-8">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="m-8">
          <img className=""
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
        <div className="title mt-32 p-8">
          <h1 className="text-3xl font-semibold">Our Approch</h1>
          <p>
            Our Approach at Elyzshopee: We believe in simplicity, authenticity,
            and impact. Our approach is customer-centric, driven by a dedication
            to quality, transparency, and innovation. With a focus on building
            meaningful connections and delivering exceptional value, we're
            committed to exceeding expectations and enriching lives. Join us on
            this journey where every step reflects our commitment to excellence
            and our passion for making a difference.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="title mt-32 p-8">
          <h1 className="text-3xl font-semibold">Our Process</h1>
          <p>
            Our Process at Elyzshopee: We thrive on efficiency, creativity, and
            collaboration. From ideation to execution, our process is
            meticulously crafted to ensure seamless experiences and exceptional
            outcomes. Through thorough research, innovative problem-solving, and
            continuous improvement, we bring ideas to life with precision and
            purpose. At Elyzshopee, every step is guided by our commitment to
            excellence, integrity, and the relentless pursuit of customer
            satisfaction. Join us as we navigate this journey together, turning
            visions into reality with dedication and flair.
          </p>
        </div>
        <div className="m-8">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/06/29143625/graff.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
