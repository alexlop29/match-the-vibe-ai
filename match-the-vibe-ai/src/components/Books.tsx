// comps
import { Button } from "@/components/ui/button";
import { BookCarousel } from "./BookCarousel";

// icons
import { MoveLeft, MoveRight } from "lucide-react";

const Books = () => {
  return (
    <div className="flex flex-row justify-between content-center p-8">
      <div className="space-y-8 content-center">
        <div className="font-black text-2xl">Recommended Books</div>
        <Button className="bg-darkblue">Try Now</Button>
        {/* Should redirect back to the top to allow the user to enter */}
        <div>
          <Button>
            <MoveLeft />
          </Button>
          <Button>
            <MoveRight />
          </Button>
        </div>
      </div>
      <div>
        <BookCarousel />
      </div>
    </div>
  );
};

export { Books };
