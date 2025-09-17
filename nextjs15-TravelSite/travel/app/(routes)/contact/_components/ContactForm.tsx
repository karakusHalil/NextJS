"use client";

import React, { useRef, useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters." }),

  email: z
    .string()
    .nonempty({ message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),

  message: z
    .string()
    .nonempty({ message: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." }),

  recaptchaToken: z
    .string()
    .nonempty({ message: "Please verify that you are not a robot." }),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptchaToken: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      console.log("response", response);
      if (!response.ok) {
        if (response.status === 500) {
          throw new Error("Failed to send email");
        }
      } else {
        form.reset();
        recaptchaRef.current?.reset();
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto p-6 border border-orange-500 mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recaptchaToken"
              render={({ field }) => (
                <FormItem>
                  {/* isteğe bağlı label */}
                  <FormLabel className="sr-only">reCAPTCHA</FormLabel>
                  <FormControl>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LcuY8MrAAAAAME27i6YwKhpOMuNx4BMw2EPMx0x"
                      onChange={(token) => field.onChange(token ?? "")}
                      onExpired={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {success && (
              <p className="text-green-600 text-sm">
                Mesajınız başarıyla gönderildi ✅
              </p>
            )}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
