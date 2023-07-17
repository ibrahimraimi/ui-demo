import { SingleCard } from "@/components/SingleCard";
import { Icons } from "@/components/Icons";
import { MultiCard } from "@/components/MultiCard";

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <header className="top-0 z-40 h-20 mb-6">
      <div className="py-6 border-b border-b-slate-200">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header text="Single Card" />
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-36">
        <SingleCard icon={<Icons.mic />} text="Tap to lalk" />
        <SingleCard icon={<Icons.lowwave />} />
        <SingleCard icon={<Icons.highwave />} />
        <SingleCard text="Thinking" />
        <SingleCard icon={<Icons.check />} text="Correct" />
        <SingleCard icon={<Icons.close />} text="Wrong" />
      </section>

      <Header text="Multi Card" />
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-36 mb-7">
        <MultiCard icon={<Icons.mic />} text="Tap to lalk" />
        <MultiCard icon={<Icons.lowwave />} />
        <MultiCard icon={<Icons.highwave />} />
        <MultiCard text="Thinking" />
        <MultiCard icon={<Icons.check />} text="Correct" />
        <MultiCard icon={<Icons.close />} text="Wrong" />
      </section>
    </main>
  );
}
