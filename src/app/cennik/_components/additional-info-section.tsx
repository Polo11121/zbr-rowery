export const AdditionalInfoSection = () => (
  <section
    className="bg-gray-100 rounded-lg p-6 shadow-md mb-8"
    aria-labelledby="additional-info-heading"
  >
    <h2
      id="additional-info-heading"
      className="text-2xl font-semibold mb-4 text-zbr"
    >
      DODATKOWE INFORMACJE
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        Do cen usługi <span className="font-bold">NALEŻY</span> doliczyć koszty
        materiałów.
      </li>
      <li>
        Rower należy dostarczyć do serwisu{" "}
        <span className="font-bold">CZYSTY</span>. W przypadku roweru brudnego
        należy doliczyć koszt mycia roweru{" "}
        <span className="font-bold">80 PLN</span>.
      </li>
      <li>
        <span className="font-bold">USŁUGA EXPRESS + 50% DO CENY USŁUGI</span>
      </li>
      <li>
        Wszystkie podane ceny mogą ulec zmianie z powodu utrudnień napotkanych
        przy pracy z rowerem. Przykładem może być skompilowana budowa roweru,
        zapieczone gwinty i uszkodzone części.
      </li>
      <li>
        W przypadku usług nieujętych w cenniku obowiązuje stawka za
        roboczogodzinę – <span className="font-bold">150 PLN</span>
      </li>
      <li>Wszystkie podane ceny są cenami brutto.</li>
    </ul>
  </section>
);
