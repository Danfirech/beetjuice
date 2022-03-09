import styles from "../styles/Home.module.css";
import Coverphoto from "../components/coverphoto";
import About from "../components/about";
import Videosection from "../components/videosection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Coverphoto />
      <About />
      <Videosection />
      <Footer />
    </>
  );
}
