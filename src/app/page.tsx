import { Hero } from "@/components/sections/Hero";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { generalFaq } from "@/data/faq";

export const metadata = createMetadata({
  title: `${siteConfig.name} — Assistente Remota Especializada`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection
        items={generalFaq.slice(0, 5)}
        title="Tudo o que você precisa saber"
        emphasis="antes de delegar."
        viewAllHref="/faq"
      />
      <CTASection />
    </>
  );
}
