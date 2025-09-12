"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Room tipi
interface Room {
  id: string;
  hotelId: string;
  type: string;
  price: number;
  amenities: string[];
  photos: string[];
  isAvailable: boolean;
  createdAt: string; // DateTime string
  updatedAt: string;
}

// Hotel tipi
interface Hotel {
  id: string;
  name: string;
  description?: string;
  location: string;
  address: string;
  rating: number;
  photos: string[];
  pricePerNight: number;
  createdAt: string;
  updatedAt: string;
  rooms: Room[];
}

// Filter Schema
const filterSchema = z.object({
  rating: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
});

type FilterValues = z.infer<typeof filterSchema>;

const TripList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      rating: "",
      priceMin: "",
      priceMax: "",
    },
  });

  // API'den otelleri çekme
  const fetchHotels = (filter: FilterValues = {}) => {
    setLoading(true);
    setError(false);

    let url = "/api/hotels";
    const params = new URLSearchParams();

    if (filter.rating) params.append("rating", filter.rating);
    if (filter.priceMin) params.append("priceMin", filter.priceMin);
    if (filter.priceMax) params.append("priceMax", filter.priceMax);

    if (params.toString()) {
      url += "?" + params.toString();
    }

    console.log("Fetch URL:", url);

    fetch(url)
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hotels:", err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // Form Submit
  function onSubmit(values: z.infer<typeof filterSchema>) {
    fetchHotels(values);
    console.log("Form values:", values);
  }

  return (
    <div className="container mx-auto p-4">
      {/* Başlık */}
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>

      {/* Filtre Formu */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Rating */}
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.1"
                    min={0}
                    max={5}
                    placeholder="e.g., 4.5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Min */}
          <FormField
            control={form.control}
            name="priceMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Min</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Minimum price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Max */}
          <FormField
            control={form.control}
            name="priceMax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Max</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Maximum price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-lg" />
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">Bir şeyler ters gitti!</span>
        </div>
      )}

      {/* Hotel List */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              <Card key={hotel.id} className="shadow-lg border-orange-300">
                <CardHeader>
                  <Image
                    src={hotel.photos[0]}
                    width={400}
                    height={300}
                    alt={hotel.name}
                    className="w-full h-48 object-cover rounded shadow-md"
                  />
                  <CardTitle className="text-lg font-semibold mt-2">
                    {hotel.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 flex items-center gap-1">
                    {hotel.rating}
                    <Star className="w-4 h-4 text-yellow-500" />
                  </p>
                  <p className="text-gray-700">{hotel.description}</p>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                  <p className="text-lg font-bold">
                    ${hotel.pricePerNight} / night
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center h-96">
              <p className="text-gray-500 text-3xl font-medium">
                No hotels found.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripList;
