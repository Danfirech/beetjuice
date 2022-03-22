import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Pricing from "../components/WeddingCorporatePage/pricing";
import Footer from "../components/footer";
import Video from "../components/video";
// import MobilePhoto from '../components/mobilePhoto';
import MobileFooter from "../components/mobileFooter";
import WeddingHeader from "../components/WeddingCorporatePage/weddingheader";

export default function Home() {
  return (
    <>
      <WeddingHeader />
      <Video />
      <Pricing />
      <Footer />
      <MobileFooter />
    </>
  );
}
