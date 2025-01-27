// comps
import { Button } from "@/components/ui/button";
import { BookCarousel } from "./BookCarousel";

// types
type InputProps = {
  books?: Book[];
};

type Book = {
  name: string;
  author: string;
  description: string;
};

const Books = ({ books }: InputProps) => {
  return (
    <div className="flex flex-row justify-center content-center p-8">
      <div>
        <BookCarousel books={books} />
      </div>
      <div className="space-y-8 content-center">
        <div className="font-black text-2xl">Recommended Books</div>
        <Button className="bg-darkblue">Try Now</Button>
      </div>
    </div>
  );
};

export { Books };
