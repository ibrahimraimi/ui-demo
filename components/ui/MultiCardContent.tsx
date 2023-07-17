import Image from "next/image";

export function Content() {
  const images = [
    {
      id: 1,
      src: "/dog.png",
      alt: "AI generated dog image",
    },
    {
      id: 2,
      src: "/cat.png",
      alt: "AI generated cat image",
    },
    {
      id: 3,
      src: "/car.png",
      alt: "AI generated car image",
    },
    {
      id: 4,
      src: "/house.png",
      alt: "AI generated house image",
    },
  ];

  return (
    <div className=" mt-7 mb-8 gap-[18px]">
      <section className="grid gap-4 grid-cols-2 grid-rows-2">
        {images.map((image) => (
          <Image
            src={image.src}
            width={100}
            height={100}
            className="cursor-pointer w-full"
            alt={image.alt}
          />
        ))}
      </section>
    </div>
  );
}
