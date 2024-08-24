import Header from "@/components/Header";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import PopularSection from "@/components/popularSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";


export default function Home() {
  return (
    <main className={styles.main_container} >
      {/* Navbar component imported  */}
        <Navbar />
        {/* Header component */}
        <Header />
        {/* popular section */}
        <PopularSection />
        {/* Services section */}
        <ServicesSection />
        {/* faq section */}
        <FaqSection />
        {/* footer section added */}
        <FooterSection />

    </main>
  );
}
