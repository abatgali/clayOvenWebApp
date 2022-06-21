import Layout from "../components/Layout";
import Section from "../components/template/Home/Section";
import SpecialOffer from "../components/template/Home/SpecialOffer";
import MenuCategory from "../components/template/Home/MenuCategory";
import FeaturedProducts from "../components/template/Home/FeaturedProducts";
import StepsSection from "../components/template/Home/StepsSection";
import AboutReview from "../components/template/Home/AboutReview";
import VideoSection from "../components/template/Home/VideoSection";

const Home = () => {
  return (
    <Layout>
      <Section />
      <SpecialOffer />
      <MenuCategory />
      <FeaturedProducts />
      <StepsSection />
      <AboutReview />
      <VideoSection />
    </Layout>
  );
};

export default Home;
