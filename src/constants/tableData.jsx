import { twMerge } from "tailwind-merge";
import {
  blueHeel,
  flatShoe,
  grayFlatShoe,
  menShoe,
  redHeel,
  redShoe,
  stripedAdidas,
} from "../assets";
import Action from "../components/Icons/Action";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const demoOrdersList = {
  columns: [
    {
      title: "Image",
      dataIndex: "name",
      key: "image",
      render: (name) => {
        return <img src={name} width={49} height={35} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Ordered At",
      key: "orderedAt",
      dataIndex: "orderedAt",
    },
    {
      title: "Ordered By",
      key: "orderedBy",
      dataIndex: "orderedBy",
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
    },
    {
      title: "-",
      key: "action",
      dataIndex: "action",
      render: (record) => {
        return (
          <Action NeutralIcon={MdOutlineRemoveRedEye} DeleteIcon={CiTrash} />
        );
      },
    },
  ],

  data: [
    {
      key: "1",
      name: blueHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
    {
      key: "1",
      name: blueHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
    {
      key: "1",
      name: blueHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
  ],
};

export const demoPendingOrders = {
  columns: [
    {
      title: "Image",
      dataIndex: "name",
      key: "image",
      render: (name) => {
        return <img src={name} width={49} height={35} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Ordered At",
      key: "orderedAt",
      dataIndex: "orderedAt",
    },
    {
      title: "Ordered By",
      key: "orderedBy",
      dataIndex: "orderedBy",
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
    },
    {
      title: "-",
      key: "action",
      dataIndex: "action",
      render: (record) => {
        return (
          <Action NeutralIcon={MdOutlineRemoveRedEye} DeleteIcon={CiTrash} />
        );
      },
    },
  ],

  data: [
    {
      key: "1",
      name: redHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
    {
      key: "1",
      name: redHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
    {
      key: "1",
      name: redHeel,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
  ],
};

export const topSellingProducts = {
  columns: [
    {
      title: "Image",
      dataIndex: "name",
      key: "image",
      render: (name) => {
        return <img src={name} width={49} height={35} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Ordered At",
      key: "orderedAt",
      dataIndex: "orderedAt",
    },
    {
      title: "Ordered By",
      key: "orderedBy",
      dataIndex: "orderedBy",
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
    },
    {
      title: "-",
      key: "action",
      dataIndex: "id",
      render: (id) => {
        return (
          <Action
            id={id}
            NeutralIcon={MdOutlineRemoveRedEye}
            DeleteIcon={CiTrash}
          />
        );
      },
    },
  ],

  data: [
    {
      key: "1",
      id: "24152125",
      name: menShoe,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "John Doe",
      total: 20000,
    },
    {
      key: "1",
      id: "24152125",
      name: redShoe,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "Willy Wonka",
      total: 20000,
    },
    {
      key: "1",
      id: "24152125",
      name: stripedAdidas,
      price: 4000,
      quantity: 5,
      orderedAt: "21 June, 2024",
      orderedBy: "Jane Doe",
      total: 20000,
    },
  ],
};

export const products = {
  column: [
    {
      key: "image",
      dataIndex: "image",
      title: "Image",
      render: (image) => <img src={image} width={49} height={35} />,
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
    },
    {
      key: "category",
      dataIndex: "category",
      title: "Category",
    },
    {
      key: "color",
      dataIndex: "color",
      title: "Color",
    },
    {
      key: "stock",
      title: "Stock",
      dataIndex: "stock",
      render: (stock) => {
        if (stock > 0) {
          return (
            <span className={twMerge("text-green-500 font-semibold")}>
              In Stock
            </span>
          );
        } else {
          return (
            <span className={twMerge("text-red-500 font-semibold")}>
              Out of Stock
            </span>
          );
        }
      },
    },
    {
      key: "total",
      dataIndex: "total",
      title: "Total",
    },
    {
      key: "action",
      title: "-",
      dataIndex: "action",
      render: (id) => (
        <Action id={id} NeutralIcon={CiEdit} DeleteIcon={CiTrash} />
      ),
    },
  ],
  data: [
    {
      key: "1",
      image: flatShoe,
      name: "Flat Shoe",
      category: "flats",
      color: "Blue",
      stock: 10,
      total: 100,
    },
    {
      key: "2",
      image: grayFlatShoe,
      name: "Red Heel",
      category: "flast",
      color: "Gray",
      stock: 10,
      total: 100,
    },
  ],
};
