// default
import Image from "next/image";

const Musician = () => {
  return (
    <div className="bg-lightblue p-2 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md">
      <Image
        src="/images/musician.jpg"
        alt="Bird"
        width={420}
        height={300}
        className="rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md"
      />
    </div>
  );
};

export { Musician };
