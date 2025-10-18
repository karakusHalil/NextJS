"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Hotel } from "@/stores/useHotelStore";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useHotelStore } from "@/stores/useHotelStore";
import { useEffect } from "react";

const hotelFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Hotel name must be at least 2 characters." }),
  description: z.string().optional(),
  location: z.string().min(2, { message: "Location is required" }),
  address: z.string().min(5, {
    message: "Address is required and must be at least 5 characters",
  }),
  rating: z.preprocess((val) => {
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number().min(0).max(5).optional()) as unknown as z.ZodOptional<z.ZodNumber>, // TS hatasını önlemek için
  pricePerNight: z.preprocess((val) => {
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number().min(0)) as unknown as z.ZodNumber,
});

interface EditHotelFormsProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  initialHotel: Hotel | null;
}

const EditHotelForms = ({
  initialHotel,
  onOpenChange,
  open,
}: EditHotelFormsProps) => {
  const { fetchHotels } = useHotelStore();

  const form = useForm<z.infer<typeof hotelFormSchema>>({
    resolver: zodResolver(hotelFormSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      address: "",
      rating: 0,
      //   photos: "",
      pricePerNight: 0,
    },
  });

  useEffect(() => {
    if (initialHotel) {
      form.reset({
        name: initialHotel.name || "",
        description: initialHotel.description || "",
        location: initialHotel.location,
        address: initialHotel.address,
        rating: initialHotel.rating || 0,
        pricePerNight: initialHotel.pricePerNight,
      });
    }
  }, [initialHotel, form]);

  const onSubmit = async (values: z.infer<typeof hotelFormSchema>) => {
    if (!initialHotel) return;

    const updatedHotel = {
      ...initialHotel,
      ...values,
    };

    try {
      const response = await fetch("/api/hotels", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: updatedHotel.id,
          name: updatedHotel.name,
          description: updatedHotel.description,
          location: updatedHotel.location,
          address: updatedHotel.address,
          rating: Number(updatedHotel.rating) || 0,
          pricePerNight: Number(updatedHotel.pricePerNight),
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Update failed: " + errorData.error);
        return;
      }
      onOpenChange(false);
      fetchHotels();
    } catch (error) {
      console.error("Failed to update hotel data:", error);
      alert("Failed to update hotel data: " + error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Hotel</DialogTitle>
          <DialogDescription asChild>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hotel Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Hotel Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter description(optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating (0-5)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          max={5}
                          min={0}
                          step={1}
                          placeholder="Enter rating"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional - Defaults to 0 if not provided
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pricePerNight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Per Night</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter price per night"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add Hotel</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditHotelForms;
