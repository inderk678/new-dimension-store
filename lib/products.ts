import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Tee",
    price: 999,
    image: "/images/oversized-tee.jpg",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    price: 2499,
    image: "/images/heavy-hoodie.jpg",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: 3,
    name: "Cargo Pants",
    price: 1999,
    image: "/images/cargo.jpg",
    category: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: 4,
    name: "Essential Sweatshirt",
    price: 1799,
    image: "/images/sweatshirt.jpg",
    category: "Sweatshirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
];