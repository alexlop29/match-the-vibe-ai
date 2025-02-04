"use client";
// default
import { useState, useCallback } from "react";

// comps
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// deps
import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "@/services/RecommendService";
import { queryClient } from "@/app/provider";

const Header = () => {
  const [query, setQuery] = useState({
    songName: "",
    artistName: "",
  });

  const [isTriggered, setIsTriggered] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recommendations"],
    queryFn: async () => {
      console.log("fetching recommendations");
      let recommendations = await getRecommendations(
        query.songName,
        query.artistName,
      );
      queryClient.setQueryData(["recommendations"], recommendations);
      setIsTriggered(false);
      console.log("recommendations fetched");
      return recommendations;
    },
    enabled: !!query.songName && !!query.artistName && isTriggered,
  });

  return (
    <div className="flex flex-row justify-between content-center rounded-lg gap-8 p-8">
      <div className="text-lg">Match The Vibe AI</div>
      <div className="flex flex-row gap-x-8">
        <div className="flex flex-row gap-x-8">
          <Input
            onChange={handleChange}
            name="songName"
            placeholder="Song Name"
          />
          <Input
            onChange={handleChange}
            name="artistName"
            placeholder="Artist Name"
          />
        </div>
        <div>
          <Button className="bg-darkblue" onClick={() => setIsTriggered(true)}>
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Header };
