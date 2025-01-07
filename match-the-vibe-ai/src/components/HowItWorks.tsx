// comps
import { Button } from "./ui/button";

// icons
import { MusicIcon, Bot, BookOpen } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-offwhite-2 p-8 rounded-lg justify-items-center space-y-8">
      <div className="text-5xl font-black">How It Works</div>
      <div className="flex flex-row justify-between">
        <div className="border-r-4 justify-items-center">
          <MusicIcon className="border-2 rounded-full h-32 w-32 p-8" />
          Tell us your favorite song.
        </div>
        <div className="border-r-4 justify-items-center">
          <Bot className="border-2 rounded-full h-32 w-32 p-8" />
          We'll use the song to find books with a similar theme.
        </div>
        <div className="justify-items-center">
          <BookOpen className="border-2 rounded-full h-32 w-32 p-8" />
          You'll get a list of books that match your vibe.
        </div>
      </div>
      <Button className="bg-purple">Try now</Button>
      <div>Get book recommendations in minutes.</div>
    </div>
  );
};

export { HowItWorks };
