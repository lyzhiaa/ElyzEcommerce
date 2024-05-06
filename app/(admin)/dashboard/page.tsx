"use client";
import { ProductType } from "@/lib/difinitions";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ACCESS_TOKEN, BASE_URL } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);
  // fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://store.istad.co/api/products/?page=1&page_size=40")
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const [imagePlaceholder, setImagePlaceholder] = useState<string>(
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  );
  
  const handleViewProduct = (product: ProductType) => {
    setProductDetail(product);
    setOpenModal(true);
  };

  const handleDeleteProduct = async (productId: ProductType) => {
    const id=productId.id;
    console.log(id)
    try {
      const response = await fetch(`${BASE_URL}/api/products/${id}/`, {
        method: "DELETE",
        headers: {
          "content-type":"application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      setProducts(products.filter((pro)=>pro.id!==id))
      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateProduct = (product: ProductType) => {
    setProductDetail(product);
    router.push(`/update/${product.id}`)
  };



  const columns: TableColumn<ProductType>[] = [
    {
      name: "Product Title",
      selector: (row) => row.name,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img className="w-16 h-16" src={row.image} alt={row.image} />
      ),
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button
            onClick={() => handleViewProduct(row)}
            className="bg-blue-600 mx-2 w-12 p-2 rounded-sm"
          >
            view
          </button>
          <button
            onClick={() => handleUpdateProduct(row)}
            className="bg-yellow-400 mx-2 w-12 p-2 rounded-sm"
          >
            edit
          </button>
          <button
            onClick={() => handleDeleteProduct(row)}
            className="bg-red-600 mx-2 w-12 p-2 rounded-sm"
          >
            delete
          </button>
        </div>
      ),
    },
  ];
  const router = useRouter();

  return (
    <main className="h-screen">
      {/* <NavbarComponent /> */}
      <div className="flex flex-row-reverse">
      <button onClick={()=>router.push('/create')} className="bg-blue-700 px-3 py-2 text-white text-base  rounded-lg">Create Product</button>
      </div>
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        pagination
        customStyles={customStyles}
        striped
        highlightOnHover
      />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Detial</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image
              src={productDetail?.image || imagePlaceholder}
              alt={productDetail?.name || "Untitle"}
              width={250}
              height={300}
            />
            <h3 className="text-3xl text-gray-700">
              {productDetail?.name || "Untitle"}
            </h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetail?.desc || "No description"}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "38px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "1.2rem",
      backgroundColor: "#f1f1f1",
    },
  },
  cells: {
    style: {
      paddingLeft: "38px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
