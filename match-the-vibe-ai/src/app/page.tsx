"use client";

// comps
import { HowItWorks } from "@/components/HowItWorks";
import { Header } from "@/components/Header";
import { Books } from "@/components/Books";
import { Musician } from "@/components/Musician";

// deps
import { useQuery } from "@tanstack/react-query";

export default function Home() {
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

  // state 3: recommendations
  if (recommendations.length > 0) {
    return (
      <div className="bg-offwhite2">
        <Header />
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 pl-16 pr-8">
              <Books />
            </div>
            <Musician />
          </div>
        </div>
      </div>
    );
  }
}
