import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Pricing from "../components/WeddingCorporatePage/pricing";
import Footer from "../components/footer";
import Video from "../components/video";
// import MobilePhoto from '../components/mobilePhoto';

export default function Home() {
  return (
    <>
      <Header />
      <Pricing />
      <Footer />
    </>
  );
}
