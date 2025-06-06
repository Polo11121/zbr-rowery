import { ScrollToTopButton } from "@/components/scroll-top-button";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ServiceInfo } from "@/components/service-info";
import { CheckOutOurOffer } from "@/components/check-out-our-offer";
import { Opinions } from "@/components/opinions";
import { Gallery } from "@/components/gallery";
import lokum from "@/../public/lokum.webp";

const HomePage = () => (
  <>
    <main>
      <Hero />
      <ServiceInfo
        title="Z pasji do rowerów"
        description="Jesteśmy zespołem, który kocha rowery tak samo jak Ty. W ZBR ROWERY łączymy doświadczenie z nowoczesnym podejściem, by każdy serwis był szybki, dokładny i bezproblemowy."
        image={lokum}
        className="flex-col md:flex-col-reverse mt-8 md:px-0 px-4"
      />
      <CheckOutOurOffer />
      <Opinions />
      <Gallery />
      <Contact />
      <ScrollToTopButton />
    </main>
  </>
);

export default HomePage;
