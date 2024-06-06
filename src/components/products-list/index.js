import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ProductList = ({ productsData }) => {
  return (
    <div>
      <h1 className="text-6xl text-center mt-4">Products</h1>
      <Link href={"/"}>
        <h1 className="text-center underline">Home</h1>
      </Link>

      <div className="w-10/12 mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {productsData.length > 0 &&
          productsData.map((product, id) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="hover:scale-[1.1] transition-all h-full">
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="rounded-md overflow-hidden cursor-pointer">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <Image
                      src={product.images[0]}
                      width={"500"}
                      height={"500"}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      ${product.price}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
