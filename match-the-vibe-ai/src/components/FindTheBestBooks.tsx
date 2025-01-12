"use client";
// default
import { useState, useCallback } from "react";

// deps
import { useMutation } from "@tanstack/react-query";
import { getRecommendations } from "@/services/RecommendService";

// comps
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FindTheBestBooks = () => {
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
    <div className="bg-white p-2 rounded-lg">
      <div className="flex flex-row justify-between bg-blue rounded-lg p-8 content-center">
        <div>Find the Best Books For You</div>
        <div>
          <div>Song Name</div>
          <Input onBlur={handleChange} name="songName" />
        </div>
        <div>
          <div>Artist Name</div>
          <Input onBlur={handleChange} name="artistName" />
        </div>
        <div>
          <Button className="bg-purple" onClick={() => handleQuery()}>
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export { FindTheBestBooks };
