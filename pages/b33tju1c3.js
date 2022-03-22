import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Coverphoto from "../components/coverphoto";
import About from "../components/about";
import Footer from "../components/footer";
// import MobilePhoto from '../components/mobilePhoto';
import MobileFooter from "../components/mobileFooter";
import Aboutb33tju1c3 from "../components/B33tJu1c3Page/aboutB33tju1c3";

export default function Home() {
  return (
    <>
      <Header />
      <Aboutb33tju1c3 />
      <Footer />
      <MobileFooter />
    </>
  );
}
