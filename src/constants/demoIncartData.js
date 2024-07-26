import { flatShoe } from "../assets";

export const demoIncart = Array.from({ length: 3 }, () => {
  return {
    id: Math.floor(Math.random() * 1000),
    name: "Nike Air Max 270",
    price: 150,
    img: flatShoe,
    amount: 1,
    size: 32,
    color: "White",
  };
});
