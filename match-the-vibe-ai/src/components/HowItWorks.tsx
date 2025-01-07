// comps
import { Button } from "./ui/button";

const HowItWorks = () => {
  return (
    <div className="bg-offwhite-2 p-8 rounded-lg h-80 justify-items-center space-y-8">
      <div className="text-5xl font-black">How It Works</div>
      <div className="flex flex-row justify-between">
        <div className="border-r-4">Tell us your favorite song.</div>
        <div className="border-r-4">
          We'll use the song to find books with a similar theme.
        </div>
        <div>You'll get a list of books that match your vibe.</div>
      </div>
      <Button className="bg-purple">Try now</Button>
      <div>Get book recommendations in minutes.</div>
    </div>
  );
};

export { HowItWorks };
