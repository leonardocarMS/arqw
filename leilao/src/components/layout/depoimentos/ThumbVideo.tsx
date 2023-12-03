import Image from "next/image";

export default function ThumbVideo({ urlVideo, nome }: any) {
  return (
    <div className="flex flex-col p-4 justify-start items-center">
      <h2>{nome}</h2>
      <Image
        src={urlVideo}
        alt="video"
        content="fill"
        width={200}
        height={150}
      />
    </div>
  );
}
