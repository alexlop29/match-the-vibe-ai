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

const BookCarousel = () => {
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
};

export { BookCarousel };
