export default function Testimonials() {
  const items = [
    { author: "Petra H.", text: "Oprava byla rychlá a telefon je jako nový. Doporučuji!" },
    { author: "Tomáš S.", text: "Příjemný přístup a rozumné ceny. Děkuji!" },
    { author: "Lucie V.", text: "Servis mi zachránil všechny fotky i kontakty." }
  ];
  return (
    <div className="bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Reference zákazníků</h2>
      <div className="space-y-3">
        {items.map((i, idx) => (
          <div key={idx} className="border-l-4 border-blue-700 pl-4 italic">
            <div>{i.text}</div>
            <div className="text-sm text-gray-500 text-right">– {i.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
