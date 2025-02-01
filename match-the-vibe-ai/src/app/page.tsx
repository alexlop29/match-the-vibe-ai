"use client";

// comps
import { HowItWorks2 } from "@/components/HowItWorks2";
import { Header } from "@/components/Header";
import { Books } from "@/components/Books";

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

  return (
    <div className="bg-offwhite2">
      <Header />
      <div className="p-8">
        <HowItWorks2 />
      </div>
      <div className="p-8">
        <Books books={recommendations} />
      </div>
    </div>
  );
}
