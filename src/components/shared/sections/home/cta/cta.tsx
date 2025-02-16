"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bot, MoveRight, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
});

export function CTA() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send this to your API
  }

  return (
    <section className="w-full bg-black text-white dark:bg-white dark:text-black">
      <Separator className="bg-white/10 dark:bg-black/10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[500px]">
            <div className="inline-flex items-center gap-2 text-white/70 dark:text-black/70">
              <Bot className="h-5 w-5" />
              <span className="text-sm font-medium">AI-Powered Future</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-white/70 dark:text-black/70">
                Join the AI revolution today. Our experts will help you implement cutting-edge AI solutions tailored to your needs.
              </p>
            </div>

            <div className="flex items-center gap-4 text-white/70 dark:text-black/70">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-2 border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 flex items-center justify-center"
                  >
                    <Sparkles className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <p className="text-sm">
                Join <span className="font-semibold text-white dark:text-black">500+</span> companies already using SYNTAI
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-[500px] rounded-xl border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field}
                          className="bg-white/10 dark:bg-black/10 border-white/10 dark:border-black/10 placeholder:text-white/50 dark:placeholder:text-black/50 text-white dark:text-black"
                        />
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
                      <FormControl>
                        <Input 
                          placeholder="Work email" 
                          type="email" 
                          {...field}
                          className="bg-white/10 dark:bg-black/10 border-white/10 dark:border-black/10 placeholder:text-white/50 dark:placeholder:text-black/50 text-white dark:text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Company name" 
                          {...field}
                          className="bg-white/10 dark:bg-black/10 border-white/10 dark:border-black/10 placeholder:text-white/50 dark:placeholder:text-black/50 text-white dark:text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
                >
                  Get Started
                  <MoveRight className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Separator className="bg-white/10 dark:bg-black/10" />
    </section>
  );
} 