type ServiceCardProps = {
  title: string;
  price: string;
  description?: string;
  items: string[];
};

export const ServiceCard = ({
  title,
  price,
  description,
  items,
}: ServiceCardProps) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-lg font-bold text-zbr mb-4">{price}</p>
    {description && <p className="font-bold mb-2">{description}</p>}
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
