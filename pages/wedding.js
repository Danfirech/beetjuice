import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Weddingpricing from "../components/WeddingCorporatePage/weddingpricing";
import Footer from "../components/footer";
import Video from "../components/video";
// import MobilePhoto from '../components/mobilePhoto';

export default function Home() {
  return (
    <>
      <Header />
      <Weddingpricing />
      <Footer />
    </>
  );
}
