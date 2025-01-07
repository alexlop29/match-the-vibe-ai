// comps
import { FindTheBestBooks } from "@/components/FindTheBestBooks";
import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="p-8 bg-base">
      <Header />
      <div className="p-8">
        <HowItWorks />
      </div>
      <div className="p-8">
        <FindTheBestBooks />
      </div>
    </div>
  );
}
