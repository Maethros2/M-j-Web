import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [err, setErr] = useState("");

  async function fetchOrders() {
    const res = await fetch("http://localhost:4000/api/admin/orders", {
      headers: { token: "admin-token" }
    });
    if (res.ok) setOrders(await res.json());
    else setErr("Chyba načtení objednávek.");
  }

  useEffect(() => { fetchOrders(); }, []);

  async function changeStatus(id, status) {
    await fetch(`http://localhost:4000/api/admin/order/${id}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json", token: "admin-token" },
      body: JSON.stringify({ status }),
    });
    fetchOrders();
  }

  return (
    <div className="bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Správa objednávek</h2>
      {err && <div className="text-red-600">{err}</div>}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th>ID</th><th>Jméno</th><th>Model</th><th>Popis</th><th>Status</th><th>Akce</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-b">
              <td>{o.id}</td>
              <td>{o.name}</td>
              <td>{o.model}</td>
              <td>{o.problem}</td>
              <td>
                <select value={o.status}
                  onChange={e => changeStatus(o.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option>Nová</option>
                  <option>Řeší se</option>
                  <option>Hotovo</option>
                </select>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
