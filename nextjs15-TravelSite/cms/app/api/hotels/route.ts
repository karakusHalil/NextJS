import { NextResponse, NextRequest } from "next/server";

import { prismadb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const hotel = await prismadb.hotel.create({
      data: {
        name: body.name,
        description: body.description || "",
        location: body.location,
        address: body.address,
        rating: body.rating || 0,
        photos: body.photos || [],
        pricePerNight: body.pricePerNight,
      },
    });

    return NextResponse.json(hotel);
    
  } catch (error) {
    console.log("POST error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
