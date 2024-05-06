import UpdatePageLayout from "@/components/updates/UpdatePageLayout";
import { BASE_URL } from "@/lib/constants";
// import UpdateForm from '@/components/form/update'

export type PropsParams = {
  params: {
    id: number;
  };
  searchParams: any;
};
const getData = async (id: number) => {
  const res = await fetch(`${BASE_URL}/api/products/${id}/`);
  const data = await res.json();
  console.log(data);
  return data;
};

export default async function Detail(props: PropsParams) {
  let data = await getData(props.params.id);

  return (
    <div className="container mx-auto mt-6">
      <UpdatePageLayout
        fileProduct={null}
        category={data.category}
        price={data.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      />
    </div>
  );
}
