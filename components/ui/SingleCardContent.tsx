import Image from "next/image";

export function Content() {
  return (
    <div className=" mt-7 mb-8 gap-[18px]">
      <Image
        src="/cat.png"
        width={150}
        height={250}
        className="cursor-pointer w-full"
        alt="AI generated cat image"
      />
      <h3 className="text-[#878787] text-center pt-4 font-semibold leading-normal">
        Cat
      </h3>
    </div>
  );
}
