import { NextResponse, NextRequest } from "next/server";
import { prismadb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const hotel = await prismadb.hotel.create({
      data: {
        name: body.name,
        description: body.description || "",
        location: body.location,
        address: body.address,
        rating: Number(body.rating) || 0,
        photos: body.photos || [],
        pricePerNight: Number(body.pricePerNight),
      },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const hotels = await prismadb.hotel.findMany();
    return NextResponse.json(hotels);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
