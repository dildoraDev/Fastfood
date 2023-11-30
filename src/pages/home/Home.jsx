import { Navbar, Faq, Super, Stay, Restaurant, MobileApp, OurClient, Subscribe, Footer } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Super />
      <Faq />
      <Stay />
      <Restaurant />
      <MobileApp />
      <OurClient />
      <Subscribe />
      <Footer />
    </div>
  );
};
