// default
import Image from "next/image";

// deps
import { useQuery } from "@tanstack/react-query";
import { getPreview } from "@/services/PreviewService";

// types
type InputProps = {
  url: string;
};

const LinkPreview = ({ url }: InputProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["linkPreview"],
    queryFn: async () => {
      return await getPreview(url);
    },
    enabled: !!url,
  });

  isLoading && <div>Loading...</div>;
  isError && <div>Error</div>;

  return (
    <div>
      <h3>{data?.title}</h3>
      <p>{data?.description}</p>
      {data?.image && (
        <Image src={data?.image} alt="link preview" width={200} height={200} />
      )}
    </div>
  );
};

export { LinkPreview };
