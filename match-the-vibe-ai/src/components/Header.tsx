"use client";
// default
import { useState, useCallback } from "react";

// comps
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// deps
import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "@/services/RecommendService";
import { store, queryClient } from "@/app/provider";
import { ModeToggle } from "./ModeToggle";

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
      store.setState((state) => {
        return {
          ["isLoading"]: true,
        };
      });
      console.log("view loadingStore", store.state.isLoading);
      let recommendations = await getRecommendations(
        query.songName,
        query.artistName,
      );
      queryClient.setQueryData(["recommendations"], recommendations);
      setIsTriggered(false);
      console.log("recommendations fetched");
      store.setState((state) => {
        return {
          ["isLoading"]: false,
        };
      });
      console.log("view loadingStore", store.state.isLoading);
      return recommendations;
    },
    enabled: !!query.songName && !!query.artistName && isTriggered,
  });

  return (
    <div className="flex flex-col md:flex-row justify-between items-center rounded-lg gap-8 p-8">
      <div className="flex flex-row gap-8 items-center">
        <div className="text-lg text-center">Match The Vibe AI</div>
        <ModeToggle />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Input
            onChange={handleChange}
            name="songName"
            placeholder="Song Name"
            className="text-black dark:text-white w-full sm:w-auto"
          />
          <Input
            onChange={handleChange}
            name="artistName"
            placeholder="Artist Name"
            className="text-black dark:text-white w-full sm:w-auto"
          />
        </div>
        <div className="flex justify-center sm:justify-start">
          <Button
            className="bg-darkblue w-full md:w-auto"
            onClick={() => setIsTriggered(true)}
          >
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Header };
