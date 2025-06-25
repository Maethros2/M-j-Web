export default function ServiceList() {
  const services = [
    { name: "Výměna displeje", price: "od 900 Kč" },
    { name: "Výměna baterie", price: "od 500 Kč" },
    { name: "Oprava nabíjení", price: "od 600 Kč" },
    { name: "Diagnostika zdarma", price: "0 Kč" },
    { name: "Záchrana dat", price: "dle náročnosti" },
  ];
  return (
    <div className="bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Ceník služeb</h2>
      <ul className="divide-y">
        {services.map(s => (
          <li key={s.name} className="py-2 flex justify-between">
            <span>{s.name}</span>
            <span className="font-semibold">{s.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
