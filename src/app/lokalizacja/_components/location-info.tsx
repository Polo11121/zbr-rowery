import Image from "next/image";

export const LocationInfo = () => (
  <section
    aria-labelledby="location-heading"
    className="flex flex-col-reverse xl:flex-row items-center justify-center gap-8 mb-8"
  >
    <div className="flex items-center justify-center flex-col max-w-3xl">
      <h2
        id="location-heading"
        className="text-2xl font-bold text-zbr mb-4 text-center"
      >
        Gdzie nas znajdziesz?
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8 md:mb-0">
        Nasz serwis mieści się w samym sercu Ostródy i stanowi idealne miejsce
        dla każdego, kto ceni sobie profesjonalizm, dokładność i indywidualne
        podejście. Niezależnie od tego, czy przyjeżdżasz do nas po raz pierwszy,
        czy jesteś naszym stałym klientem – zawsze możesz liczyć na najwyższy
        standard obsługi. Łatwy dojazd oraz dogodna lokalizacja sprawiają, że
        jesteśmy dostępni zarówno dla mieszkańców Ostródy, jak i okolicznych
        miejscowości. <br />
        <strong>ul. Stefana Czarnieckiego 15A/II, 14-100 Ostróda</strong>
        <br />
        <br />
        <strong className="block mt-4 mb-2">Godziny otwarcia:</strong>
        <span className="block">Poniedziałek: 09:00–12:00</span>
        <span className="block">Wtorek: 09:00–12:00</span>
        <span className="block">Środa: 13:00–16:00</span>
        <span className="block">Czwartek: 09:00–12:00</span>
        <span className="block">Piątek: 09:00–12:00</span>
        <span className="block">Sobota: Zamknięte</span>
        <span className="block">Niedziela: Zamknięte</span>
      </p>
    </div>
    <div className="w-full md:w-[450px]">
      <Image
        src="/lokum.webp"
        alt="Zdjęcie siedziby serwisu ZBR Rowery przy ul. Czarnieckiego 15A/II w Ostródzie"
        width={450}
        height={675}
        priority
        className="md:rounded-lg w-full h-auto object-cover"
      />
    </div>
  </section>
);
