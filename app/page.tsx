import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fce2db]">
      <Header />
      <Hero />
      <ProductCatalog />
    </main>
  );
}
