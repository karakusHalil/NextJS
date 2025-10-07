import { create } from "zustand";

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
}

interface HotelsState {
  hotels: Hotel[];
  loading: boolean;
  error: boolean;
  fetchHotels: (filters?: Record<string, string>) => void;
}

export const useHotelsStore = create<HotelsState>((set) => ({
  hotels: [],
  loading: false,
  error: false,
  fetchHotels: (filters = {}) => {
    set({ loading: true, error: false });

    let url = "/api/hotels";
    const params = new URLSearchParams();
    if (filters.rating) params.append("rating", filters.rating);
    if (filters.priceMin) params.append("priceMin", filters.priceMin);
    if (filters.priceMax) params.append("priceMax", filters.priceMax);

    if (params.toString()) url += "?" + params.toString();

    fetch(url)
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        set({ hotels: data, loading: false });
      })
      .catch((err) => {
        
        set({ error: true, loading: false });
      });
  },
}));
