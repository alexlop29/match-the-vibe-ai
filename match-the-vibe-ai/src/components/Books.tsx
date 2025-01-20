// comps
import { Button } from "@/components/ui/button";
import { BookCarousel } from "./BookCarousel";
import { LinkPreview } from "./LinkPreview";

const Books = () => {
  return (
    <div className="flex flex-row justify-center content-center p-8 gap-x-72">
      <div>
        <BookCarousel />
      </div>
      <div className="space-y-8 content-center">
        <div className="font-black text-2xl">Recommended Books</div>
        <Button className="bg-darkblue">Try Now</Button>
        <LinkPreview url="https://www.amazon.com/Autobiography-Malcolm-Told-Alex-Haley-dp-0345350685/dp/0345350685/ref=dp_ob_title_bk" />
        {/* Should redirect back to the top to allow the user to enter */}
      </div>
    </div>
  );
};

export { Books };
