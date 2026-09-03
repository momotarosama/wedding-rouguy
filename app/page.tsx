import HomePage from "@/components/pages/HomePage";
import WeddingEnvelope from "@/components/WeddingEnvelope";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans ">
      <WeddingEnvelope />
      <HomePage />
    </div>
  );
}
