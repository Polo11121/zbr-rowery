import { ScrollToTopButton } from "@/components/scroll-top-button";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ServiceInfo } from "@/components/service-info";
import { CheckOutOurOffer } from "@/components/check-out-our-offer";
import { Opinions } from "@/components/opinions";
import { Gallery } from "@/components/gallery";
import Head from "next/head";

const HomePage = () => (
  <>
    <Head>
      <link rel="preload" as="image" href="/hero-banner.webp" />
      <link rel="preload" as="image" href="/logo.webp" />
    </Head>
    <main>
      <Hero />
      <ServiceInfo
        title="Z pasji do rowerów"
        description="Jesteśmy zespołem, który kocha rowery tak samo jak Ty. W ZBR Rowery łączymy doświadczenie z nowoczesnym podejściem, by każdy serwis był szybki, dokładny i bezproblemowy."
        imageSrc="/lokum.webp"
        className="flex-col md:flex-col-reverse mt-8 md:px-0 px-4"
      />
      <CheckOutOurOffer />
      <Opinions />
      <Gallery />
      <Contact className="pb-10 md:px-0 px-4" />
      <ScrollToTopButton />
    </main>
  </>
);

export default HomePage;
