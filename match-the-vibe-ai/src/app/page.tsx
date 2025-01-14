"use client";

// default
import { useState, useCallback } from "react";

// comps
import { FindTheBestBooks } from "@/components/FindTheBestBooks";
import { HowItWorks2 } from "@/components/HowItWorks2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Books } from "@/components/Books";

// deps
import { useMutation } from "@tanstack/react-query";
import { getRecommendations } from "@/services/RecommendService";

export default function Home() {
  const [query, setQuery] = useState({
    songName: "",
    artistName: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = {
        ...query,
        [e.target.name]: e.target.value,
      };
      setQuery(value);
    },
    [query],
  );

  const { mutate: handleQuery } = useMutation({
    mutationFn: async () => {
      console.log(`confirm trigger start`);
      let recommendation = await getRecommendations(
        query.songName,
        query.artistName,
      );
      console.log(recommendation);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="bg-offwhite2">
      <div className="flex flex-row justify-between content-center rounded-lg gap-8 p-8">
        <div className="text-lg">Match The Vibe AI</div>
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-row gap-x-8">
            <Input
              onBlur={handleChange}
              name="songName"
              placeholder="Song Name"
            />
            <Input
              onBlur={handleChange}
              name="artistName"
              placeholder="Artist Name"
            />
          </div>
          <div>
            <Button className="bg-darkblue" onClick={() => handleQuery()}>
              Try Now
            </Button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <HowItWorks2 />
      </div>
      <div className="p-8">
        <Books />
        {/* <FindTheBestBooks /> */}
      </div>
    </div>
  );
}
