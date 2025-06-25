import { useState } from "react";

export default function OrderForm() {
  const [data, setData] = useState({ name: "", phone: "", model: "", problem: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      const res = await fetch("http://localhost:4000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Chyba při odesílání.");
      setSent(true);
    } catch (e) {
      setErr(e.message);
    }
  }

  if (sent) return (
    <div className="bg-green-100 border border-green-300 rounded p-4 my-4 text-center">
      Děkujeme za objednávku! Brzy se vám ozveme.
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Objednávka opravy</h2>
      <div className="grid gap-3">
        <input name="name" placeholder="Jméno a příjmení" required className="border p-2 rounded" value={data.name} onChange={handleChange} />
        <input name="phone" placeholder="Telefon" required className="border p-2 rounded" value={data.phone} onChange={handleChange} />
        <input name="model" placeholder="Model telefonu" required className="border p-2 rounded" value={data.model} onChange={handleChange} />
        <textarea name="problem" placeholder="Popište problém" required className="border p-2 rounded" value={data.problem} onChange={handleChange} />
        {err && <div className="text-red-600">{err}</div>}
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Odeslat objednávku</button>
      </div>
    </form>
  );
}
