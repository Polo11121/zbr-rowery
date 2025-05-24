import Link from "next/link";

type SpaPackageProps = {
  title: string;
  features: string[];
};

export const SpaPackageCard = ({ title, features }: SpaPackageProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
    <h4 className="text-xl font-semibold mb-4 text-center">{title}</h4>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-zbr mr-2" aria-hidden="true">
            ✓
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8 text-center">
      <Link
        href="/cennik"
        className="px-4 py-2 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50"
      >
        Sprawdź cenę
      </Link>
    </div>
  </div>
);
