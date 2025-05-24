import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  isExpanded: boolean;
  serviceId: string;
  onToggle: (id: string) => void;
};

export const ServiceCard = ({
  title,
  description,
  isExpanded,
  serviceId,
  onToggle,
}: ServiceCardProps) => (
  <div className="mb-8" data-testid={`service-card-${serviceId}`}>
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4 text-center">
        <Button
          onClick={() => onToggle(serviceId)}
          className="px-4 py-2 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50"
          aria-expanded={isExpanded}
          aria-controls={`section-content-${serviceId}`}
        >
          {isExpanded ? "Zwiń szczegóły" : "Dowiedz się więcej"}
        </Button>
      </div>
    </div>
  </div>
);
