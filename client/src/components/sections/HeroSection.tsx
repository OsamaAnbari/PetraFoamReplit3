import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px] bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594815550232-e615b7a46f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto h-full px-4 md:px-6 flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Advanced Thermal Insulation Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Leading the industry with premium XPS and EPS thermal insulation
            products that save energy and improve comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="default"
              className="bg-yellow-500 text-primary font-heading font-semibold hover:bg-yellow-400"
              size="lg"
            >
              <Link href="/products">Our Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              size="lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
