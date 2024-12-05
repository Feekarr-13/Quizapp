import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeatureSection from '../Components/FeatureSection';
import AboutUs from '../Components/AboutUs';
import ProgressSection from '../Components/ProgressSection';
import JoinUs from '../Components/JoinUs';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import "./HomePage.css";


function HomePage() {
  useEffect(() => {
    // Inisialisasi AOS (animasi scroll)
    AOS.init({
      duration: 1000,  // Durasi animasi
      once: false,      // Animasi berjalan setiap kali di-scroll
    });

    // Pastikan halaman berada di atas saat refresh
    window.scrollTo(0, 0); // Scroll kembali ke atas saat halaman di-refresh
  }, []); // Empty dependency array untuk memastikan hanya dijalankan sekali setelah render pertama

  return (
    <div className="homepage">
      <Header />
      {/* Menambahkan ID untuk bagian-bagian yang ingin discroll */}
      <div id="HomePage">
        <HeroSection data-aos="fade-up" />
      </div>
      <div id="FeatureSection">
        <FeatureSection data-aos="fade-up" />
      </div>
      <div id="AboutUs">
        <AboutUs data-aos="fade-up" />
      </div>
      <div id="ProgressSection">
        <ProgressSection data-aos="fade-up" />
      </div>
      <div id="JoinUs">
        <JoinUs data-aos="fade-up" />
      </div>
      <div id="ContactUs">
        <ContactUs data-aos="fade-up" />
      </div>
      <Footer data-aos="fade-up" />
    </div>
  );
}

export default HomePage;
