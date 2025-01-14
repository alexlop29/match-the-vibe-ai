// comps
import { Button } from "@/components/ui/button";
import { BookCarousel } from "./BookCarousel";

const Books = () => {
  return (
    <div className="flex flex-row justify-center content-center p-8 gap-x-72">
      <div>
        <BookCarousel />
      </div>
      <div className="space-y-8 content-center">
        <div className="font-black text-2xl">Recommended Books</div>
        <Button className="bg-darkblue">Try Now</Button>
        {/* Should redirect back to the top to allow the user to enter */}
      </div>
    </div>
  );
};

export { Books };
