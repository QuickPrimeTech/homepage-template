import HeroSection from "@/sections/home/hero";
import MenuSection from "@/sections/home/menu";
import AboutSection from "@/sections/home/about";
import ReviewsSection from "@/sections/home/reviews";
import OffersSection from "@/sections/home/offers";
import GallerySection from "@/sections/home/gallery";
import FAQSection from "@/sections/home/faqs";
import ContactSection from "@/sections/home/contact";
import NewsletterSection from "@/sections/home/newsletter";

export default function RestaurantHomepage() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <OffersSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
