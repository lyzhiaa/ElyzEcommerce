import CardProductDetailComponent from "@/components/card/CardProductDetailComponent";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://store.istad.co/api/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://store.istad.co/api/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function Detail(props: Props) {
  let data = await getData(props.params.id);

  return (
    <div className="grid place-content-center">
      <CardProductDetailComponent
        title={data?.name || "NoTitle"}
        description={data?.desc || "No Description"}
        image={
          data?.image ||
          "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
        }
      />
    </div>
  );
}
