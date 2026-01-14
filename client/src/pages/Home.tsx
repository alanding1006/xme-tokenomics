import AllocationChart from "@/components/AllocationChart";
import DualTokenSection from "@/components/DualTokenSection";
import EconomyLoop from "@/components/EconomyLoop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Header />
      <main className="flex-1">
        <Hero />
        <DualTokenSection />
        <EconomyLoop />
        <AllocationChart />
      </main>
      <Footer />
    </div>
  );
}
