"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addSchoolFormSchema } from "@/schema/addSchoolFormSchema";
import { addSchoolsServerAction } from "@/app/actions/addSchoolsServerAction";

const FormUI = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof addSchoolFormSchema>>({
    resolver: zodResolver(addSchoolFormSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      contact: "",
      email_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addSchoolFormSchema>) {
    setLoading(true);
    try {
      await addSchoolsServerAction(values);
      form.reset();
      toast.success("School added successfully!");
    } catch (error) {
      console.error("Error adding school:", error);
      toast.error("Failed to add school.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter school name" {...field} />
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
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter contact number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer group"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            <>
              Submit
              <ArrowUpRight className="group-hover:rotate-45 ease-in-out transition-all duration-300 ml-1" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default FormUI;
