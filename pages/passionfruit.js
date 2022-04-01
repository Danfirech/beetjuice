import Header from '../components/header';
import Footer from '../components/WeddingCorporatePage/weddingfooter';
import MobileFooter from '../components/mobileFooter';
import PassionfruitContainer from '../components/PassionFruitePage/passionfruitcontainer';

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
