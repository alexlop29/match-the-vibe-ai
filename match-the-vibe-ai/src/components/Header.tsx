// comps
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between bg-offwhite p-4 rounded-lg">
      <div className="italic text-purple text-lg">Match The Vibe AI</div>
      <Button className="bg-purple">Try now</Button>
    </div>
  );
};

export { Header };
