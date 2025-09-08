import React from "react";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { getProducts } from "@/server/Product";

const products = await getProducts();

export default async function Card() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-extrabold text-4xl text-primary mb-8 max-lg:text-center text-center tracking-wide leading-tight drop-shadow-md">
            Best Products
          </h2>
          <div className="border border-gray-300 mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.length === 0 && <p>No products found</p>}
            {products.map((product) => (
              <>
                <div
                  key={product.id}
                  className="sm:w-[350px] w-full flex flex-col bg-white rounded-xl shadow-lg p-4"
                >
                  {/* card image */}
                  <div className="w-full h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image!}
                      alt={product.name}
                      className="w-full h-full rounded-lg object-contain"
                      width={300}
                      height={300}
                    />
                    {/* <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                      {product.discountPercentage}% Off
                    </span> */}
                  </div>
                  {/* card title and price */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="w-full">
                      <h6 className="font-medium text-xl leading-8 text-black mb-2">
                        {product.name}
                      </h6>
                      <h6 className="font-semibold text-xl leading-8 text-primary">
                        ${product.price}
                      </h6>
                      <p className="text-sm leading-6 text-muted-foreground line-clamp-1">
                        {product.description}
                      </p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="mt-4 text-xs leading-6 py-1 px-2 rounded-lg transition-all duration-300 w-full flex items-center justify-center gap-2 hover:bg-primary hover:text-white border border-primary"
                          >
                            Add to Cart
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{product.name}</DialogTitle>
                            <DialogDescription>
                              {product.description}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              {/* Choose size */}
                              <label className="font-bold text-primary mb-2">
                                Choose size
                              </label>
                              <RadioGroup>
                                {product.variants.map((variant) => (
                                  <div
                                    key={variant.id}
                                    className="flex items-center space-x-2"
                                  >
                                    <RadioGroupItem
                                      value={variant.id}
                                      id={variant.id}
                                      className=" border border-gray-500 rounded-full"
                                    />
                                    <label
                                      htmlFor={variant.id}
                                      className="text-sm"
                                    >
                                      {variant.memory.name} - ${variant.price}
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                              {/* Choose color */}
                              <label className="font-bold text-primary mb-2">
                                Choose color
                              </label>
                              <RadioGroup>
                                {product.variants.map((variant) => (
                                  <div
                                    key={variant.id}
                                    className="flex items-center space-x-2"
                                  >
                                    <RadioGroupItem
                                      value={variant.id}
                                      id={variant.id}
                                      className="border border-gray-500 rounded-full"
                                    />

                                    <label
                                      htmlFor={variant.id}
                                      className="text-sm"
                                    >
                                      {variant.colorId}
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Add to Cart</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
}
