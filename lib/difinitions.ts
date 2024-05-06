export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  image: string
};

export type CartProductType = {
	name: string;
	image: string;
	price: number;
	id: number;
	onClick?: () => void;
};

export type ProductDetailType={
  params:{
      id:number
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

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
