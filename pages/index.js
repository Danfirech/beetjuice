import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Coverphoto from '../components/coverphoto';
import About from '../components/about';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import Video from '../components/video';
// import MobilePhoto from '../components/mobilePhoto';
import MobileFooter from '../components/mobileFooter';

export default function Home() {
  return (
    <>
      <Header />
      <Coverphoto />
      <About />
      <Video />
      <Pricing />
      <Footer />
      <MobileFooter />
    </>
  );
}
