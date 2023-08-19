import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => (
  <main className="relative">
    <section className="xl:padding-1 wide:padding-r padding-b">
     <Hero></Hero>
    </section>
    <section className="padding">
      <PopularProducts></PopularProducts>
    </section>
    <section className="padding">
     <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
     <Services></Services>
    </section>
    <section className="padding">
     <SpecialOffer></SpecialOffer>
    </section>
    <section className="padding bg-pale-blue">
     <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe></Subscribe>
    </section>
    <section className="padding-x padding-t pb-8">
    <Footer></Footer>
    </section>
  </main>
);
export default App;

