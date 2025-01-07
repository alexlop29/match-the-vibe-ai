// comps
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FindTheBestBooks = () => {
  return (
    <div className="bg-white p-2 rounded-lg">
      <div className="flex flex-row justify-between bg-blue rounded-lg p-8 content-center">
        <div>Find the Best Books For You</div>
        <div>
          <div>Song Name</div>
          <Input />
        </div>
        <div>
          <div>Artist Name</div>
          <Input />
        </div>
        <div>
          <Button className="bg-purple">Try Now</Button>
        </div>
      </div>
    </div>
  );
};

export { FindTheBestBooks };
