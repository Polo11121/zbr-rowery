type ServiceCardProps = {
  title: string;
  items: string[][];
};

export const ServiceTable = ({ title, items }: ServiceCardProps) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <table className="w-full" aria-label={`Cennik usług: ${title}`}>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="border-b border-gray-300">
            <td className="py-2">{item[0]}</td>
            <td className="py-2 font-semibold text-right">{item[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
