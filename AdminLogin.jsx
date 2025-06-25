import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setErr("");
    const res = await fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      onLogin();
    } else {
      setErr("Špatné heslo.");
    }
  }

  return (
    <div className="my-8 text-center">
      {!show ? (
        <button onClick={() => setShow(true)} className="underline text-blue-700">
          Admin přihlášení
        </button>
      ) : (
        <form onSubmit={handleLogin} className="inline-block bg-white p-3 rounded shadow">
          <input type="password" placeholder="Heslo" value={pw} onChange={e => setPw(e.target.value)}
            className="border p-2 rounded mr-2" />
          <button className="bg-blue-700 text-white px-3 py-1 rounded">Přihlásit</button>
          {err && <div className="text-red-600 mt-1">{err}</div>}
        </form>
      )}
    </div>
  );
}
