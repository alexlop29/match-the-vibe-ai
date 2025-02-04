// comps
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// deps
import { useQuery } from "@tanstack/react-query";

// types
type Book = {
  name: string;
  author: string;
  description: string;
};

const Books = () => {
  const { data: books } = useQuery<Book[]>({
    queryKey: ["recommendations"],
    queryFn: async () => {
      return [];
    },
    enabled: false,
  });

  // state 1: no recommendations
  if (!books || books.length === 0) {
    return <div></div>;
  }

  // state 2: loading

  // state 3: recommendations
  if (books.length > 0) {
    return (
      <Carousel>
        <CarouselContent>
          {books?.map((book, index) => (
            <CarouselItem
              key={index}
              className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md p-4"
            >
              <div className="text-lg font-semibold">{book.name}</div>
              <div className="text-sm text-gray-600">{book.author}</div>
              <div className="text-sm">{book.description}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
};

export { Books };
