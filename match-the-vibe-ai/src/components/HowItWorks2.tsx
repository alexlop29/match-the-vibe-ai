// default
import Image from "next/image";

const HowItWorks2 = () => {
  return (
    <div className="flex flex-row justify-center gap-16">
      <div className="text-center content-center space-y-16">
        <div className="font-black text-4xl">
          Discover your favorite books based on your favorite song!
        </div>
        <ul>
          <li>Tell us your favorite song.</li>
          <li>We'll use the song to find books with a similar theme.</li>
          <li>You'll get a list of books that match your vibe.</li>
        </ul>
      </div>
      <div className="bg-lightblue p-2 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md">
        <Image
          src="/images/musician.jpg"
          alt="Bird"
          width={420}
          height={300}
          className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md"
          //   className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export { HowItWorks2 };
