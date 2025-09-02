"use client";

import { packages } from "@/app/constants";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentProduct = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="container mx-auto px-10 lg:px-36"
    >
      <CarouselContent>
        {packages.map((pack, index) => (
          <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/4 flex">
            <div className="p-3 w-full flex">
              <Card className="shadow-lg  h-full w-full flex flex-col">
                <CardHeader className="relative">
                  <Image
                    width={500}
                    height={500}
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {pack.discount && (
                    <Badge className="absolute -top-2 left-2 bg-blue-500 text-white text-sm px-2 hover:bg-blue-600">
                      {pack.discount}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <CardTitle className="h-[120px] text-xl">
                    {pack.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {pack.location}
                  </CardDescription>
                  <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                    <Clock className="w-4 h-4 mr-2" />
                    {pack.duration}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-orange-500 font-bold text-xl">
                        {pack.price}
                      </span>
                      {pack.oldPrice && (
                        <span className="text-gray-400 line-through ml-2">
                          {pack.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-500 text-white px-4 py-2 rounded w-full shadow-md hover:bg-orange-600 hover:scale-105 transform transition duration-200 ease-in-out">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" lg:ml-10 left-0 bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-6 px-6 " />
      <CarouselNext className=" lg:mr-10 right-0  bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-6 px-6" />
    </Carousel>
  );
};

export default RecentProduct;
