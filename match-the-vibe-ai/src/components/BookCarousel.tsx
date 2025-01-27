// default
import Image from "next/image";

// comps
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//types
type InputProps = {
  books?: Book[];
};

type Book = {
  name: string;
  author: string;
  description: string;
};

const BookCarousel = ({ books }: InputProps) => {
  if (!books || books.length === 0) {
    return (
      <Carousel className="flex justify-center content-center">
        <CarouselContent>
          <CarouselItem className="">
            <Image
              src="/images/musicianBronze.png"
              alt="Musician Bronze"
              width={420}
              height={300}
              className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md"
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              src="/images/musicianOutrun.png"
              alt="Musician Bronze"
              width={420}
              height={300}
              className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md"
            />
          </CarouselItem>
          <CarouselItem className="pl-4">
            <Image
              src="/images/musicianPurple.png"
              alt="Musician Bronze"
              width={420}
              height={300}
              className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  return (
    <Carousel className="flex justify-center content-center">
      <CarouselContent>
        {books.map((book, index) => (
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
};

export { BookCarousel };
