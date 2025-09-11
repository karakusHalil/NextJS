"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import HotelFilter, { FilterValues } from "./HotelFilter";

interface Room {
  id: string;
  hotelId: string;
  type: string;
  price: number;
  amenities: string[];
  photos: string[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

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

const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchHotels = (filter: FilterValues = {}) => {
    setLoading(true);
    setError(false);
    let url = "/api/hotels";
    const params = new URLSearchParams();
    if (filter.rating) params.append("rating", filter.rating);
    if (filter.priceMin) params.append("priceMin", filter.priceMin);
    if (filter.priceMax) params.append("priceMax", filter.priceMax);

    if (params.toString()) url += "?" + params.toString();

    fetch(url)
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleFilterSubmit = (values: FilterValues) => {
    fetchHotels(values);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>

      <HotelFilter onSubmit={handleFilterSubmit} />

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-lg" />
          ))}
        </div>
      )}

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline"> "Bir şeyler ters gitti!"</span>
        </div>
      )}

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
                    {hotel.rating} <Star className="w-4 h-4 text-yellow-500" />
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

export default HotelList;
