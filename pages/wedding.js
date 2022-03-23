import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Pricing from "../components/WeddingCorporatePage/pricing";
import WeddingFooter from "../components/WeddingCorporatePage/weddingfooter";
import Video from "../components/video";
// import MobilePhoto from '../components/mobilePhoto';

import WeddingHeader from "../components/WeddingCorporatePage/weddingheader";

export default function Home() {
  return (
    <>
      <WeddingHeader />
      <Pricing />
      <WeddingFooter />
    </>
  );
}