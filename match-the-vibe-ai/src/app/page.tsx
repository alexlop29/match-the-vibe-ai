"use client";

// default
import { useState } from "react";

// comps
import { HowItWorks } from "@/components/HowItWorks";
import { Header } from "@/components/Header";
import { Books } from "@/components/Books";
import { Musician } from "@/components/Musician";
import { Loader } from "@/components/Loader";

// deps
import { useQuery } from "@tanstack/react-query";
import { store } from "./provider";
import { useStore } from "@tanstack/react-store";

export default function Home() {
  const { isLoading } = useStore(store);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendations"],
    queryFn: async () => {
      return [];
    },
    enabled: false,
  });

  // state 1: no recommendations
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="bg-offwhite2">
        <Header />
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-center gap-16">
            <HowItWorks />
            <Musician />
          </div>
        </div>
      </div>
    );
  }

  // state 2: loading
  if (isLoading) {
    return (
      <div className="bg-offwhite2">
        <Header />
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-center gap-16">
            <div className="w-full md:w-1/2 pl-16 pr-8 items-center content-center">
              <Loader />
            </div>
            <Musician />
          </div>
        </div>
      </div>
    );
  }

  // state 3: recommendations
  if (recommendations.length > 0) {
    return (
      <div className="bg-offwhite2">
        <Header />
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 pl-16 pr-8 items-center content-center">
              <Books />
            </div>
            <Musician />
          </div>
        </div>
      </div>
    );
  }
}
