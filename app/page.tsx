import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="bg-[#fce2db]">
        <Header />
        <Hero />
      </div>
      <BrandIntro />
      <FeaturedProducts />
      <ProductCatalog />
    </main>
  );
}
