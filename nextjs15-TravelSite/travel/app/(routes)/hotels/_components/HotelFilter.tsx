"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const filterSchema = z.object({
  rating: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
});

export type FilterValues = z.infer<typeof filterSchema>;

interface HotelFilterProps {
  onSubmit: (values: FilterValues) => void;
  defaultValues?: FilterValues;
}

const HotelFilter: React.FC<HotelFilterProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: defaultValues || { rating: "", priceMin: "", priceMax: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
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
        <FormField
          control={form.control}
          name="priceMin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price Min</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Minimum price"
                  min={0}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priceMax"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price Max</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Maximum price"
                  min={0}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default HotelFilter;
