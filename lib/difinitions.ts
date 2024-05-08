export type ProductType={
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
  category: string;
  seller: string;
  quantity:number;
  onClick?: () => void
}

export type CartProductType = {
	name: string;
	image: string;
	price: number;
  desc?: string;
	id: number;
	onClick?: () => void;
};

export type ProductDetailType={
  params:{
      id:number
  },
  searchParams: { [key: string]: string | string[] | undefined }
}
export const placeHolderImage="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?sl=1"

export type ImageType={
  id:number,
  image:string,
  name:string
}
export type ProductResponse = {
  name:string,
  image:string,
  desc:string,
  price:number,
  onClick?:()=>void
}

export type FormDataRegister = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};
export type FormDataCreate = {
  category: {
    name: string;
    icon: string;
  };
  name: string;
  description: string;
  image?: string;
  price: string;
  quantity: string;
};

export type FormDelete = {
  readonly id: string;
  category: {
    name: any;
  };
  name: string;
  description: string;
  image?: string;
  price: string;
  quantity: string;
  seller: string;
};

export type FormDataUpdate = {
  readonly id: number;
  category: { name: any };
  name: string;
  description: string;
  image?: string;
  price: string;
  quantity: string;
  seller: string;
  fileProduct: any;
};
