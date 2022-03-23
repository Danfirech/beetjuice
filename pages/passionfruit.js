import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Coverphoto from "../components/coverphoto";
import About from "../components/about";
import Footer from "../components/footer";
// import MobilePhoto from '../components/mobilePhoto';
import MobileFooter from "../components/mobileFooter";
import PassionfruitContainer from "../components/PassionFruitePage/passionfruitcontainer";

export default function Home() {
  return (
    <>
      <Header />
      <PassionfruitContainer />
      <Footer />
      <MobileFooter />
    </>
  );
}