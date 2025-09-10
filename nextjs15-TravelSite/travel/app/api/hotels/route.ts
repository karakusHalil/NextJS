import { prismadb } from "../../../lib/db";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const hotels = await prismadb.hotel.findMany({
      include: {
        rooms: true,
      },
    });

    return NextResponse.json(hotels);

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch hotels" },
      { status: 500 }
    );
  }
}
