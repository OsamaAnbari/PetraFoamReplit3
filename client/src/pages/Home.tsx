import Hero from "@/components/home/Hero";
import ProductsOverview from "@/components/home/ProductsOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Petra Foam - Thermal Insulation Solutions</title>
        <meta name="description" content="Leading provider of high-quality thermal insulation materials including XPS and EPS solutions for energy-efficient buildings." />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <ProductsOverview />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
