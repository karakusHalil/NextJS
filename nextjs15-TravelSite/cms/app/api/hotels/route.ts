import { NextResponse, NextRequest } from "next/server";
import { prismadb } from "@/lib/db";
import { Prisma } from "@prisma/client";

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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rating = searchParams.get("rating");
  const priceMax = searchParams.get("priceMax");
  const priceMin = searchParams.get("priceMin");
  const name = searchParams.get("name");
  const pageStr = searchParams.get("page") || "1";
  const page = Number(pageStr);
  const limit = 10;
  const skip = (page - 1) * limit;

  const filters: Prisma.HotelWhereInput[] = [];

  if (priceMin || priceMax) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const priceFilter: any = {};
    if (priceMin) priceFilter.gte = Number(priceMin);
    if (priceMax) priceFilter.lte = Number(priceMax);
    filters.push({ pricePerNight: priceFilter });
  }

  if (rating) {
    filters.push({ rating: Number(rating) });
  }

  if (name) {
    filters.push({ name: { contains: name, mode: "insensitive" } });
  }

  const whereClause = filters.length > 0 ? { AND: filters } : {};

  try {
    const [hotels, totalCount] = await prismadb.$transaction([
      prismadb.hotel.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          rooms: false,
        },
      }),
      prismadb.hotel.count({ where: whereClause }),
    ]);

    return NextResponse.json({ hotels, totalCount });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
