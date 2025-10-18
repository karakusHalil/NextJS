import { create } from "zustand";

export type Hotel = {
  id: string;
  name: string;
  description: string;
  location: string;
  address: string;
  rating: number;
  pricePerNight: number;
  rooms: Array<{ id: string; name: string }>;
};

type HotelStore = {
  hotels: Hotel[];
  totalCount: number;
  loading: boolean;
  error: string | null;
  fetchHotels: (filters?: {
    name?: string;
    rating?: number;
    priceMin?: number;
    priceMax?: number;
    page?: number;
  }) => Promise<void>;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  totalCount: 0,
  loading: false,
  error: null,
  fetchHotels: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams();
      if (filters.name) params.append("name", filters.name);
      if (filters.rating) params.append("rating", filters.rating.toString());
      if (filters.priceMin)
        params.append("priceMin", filters.priceMin.toString());
      if (filters.priceMax)
        params.append("priceMax", filters.priceMax.toString());

      params.append("page", String(filters.page || 1));

      const response = await fetch(`/api/hotels?${params.toString()}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }
      const data = await response.json();

      set({ hotels: data.hotels, totalCount: data.totalCount, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch hotels", loading: false });
    }
  },
}));
