import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Coverphoto from "../components/coverphoto";
import About from "../components/about";
import Pricing from "../components/pricing";
import Footer from "../components/footer";
import Pic2 from "../components/coverPhoto";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Coverphoto /> */}
      <Coverphoto />
      <About />
      <Video />
      <Pricing />
      <Footer />
    </>
  );
}
