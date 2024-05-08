import { Card } from "flowbite-react";

type PropsType = {
  title: string;
  image: string;
  description: string;
};

export default function CardProductDetailComponent({
  title,
  image,
  description,
}: PropsType) {
  return (
    <Card className="">
      <div className="grid grid-cols-2 items-center justify-items-center gap-32 bg-yellow-50 p-16">
        <div className="">
          <img className="w-96 h-[500px]" src={image} alt="" />
        </div>
        <div className="w-96 h-96 py-32">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
            {description}
          </p>
          <a href=""></a>
        </div>
      </div>
    </Card>
  );
}
