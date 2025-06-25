require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const DB_FILE = './db.json';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "servis2024";

// Load orders from file (simple JSON DB)
function loadOrders() {
  if (!fs.existsSync(DB_FILE)) return [];
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data || '[]');
}

// Save orders
function saveOrders(orders) {
  fs.writeFileSync(DB_FILE, JSON.stringify(orders, null, 2));
}

// PUBLIC - Create new order
app.post('/api/order', (req, res) => {
  const { name, phone, model, problem } = req.body;
  if (!name || !phone || !model || !problem) {
    return res.status(400).json({ error: "Všechna pole jsou povinná." });
  }
  const orders = loadOrders();
  const newOrder = { id: Date.now(), name, phone, model, problem, status: 'Nová' };
  orders.push(newOrder);
  saveOrders(orders);
  res.json({ success: true, order: newOrder });
});

// ADMIN - Login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: "admin-token" }); // demo token
  }
  res.status(401).json({ error: "Neplatné heslo." });
});

// ADMIN - Get orders
app.get('/api/admin/orders', (req, res) => {
  const { token } = req.headers;
  if (token !== 'admin-token') return res.status(401).json({ error: "Neautorizováno." });
  const orders = loadOrders();
  res.json(orders);
});

// ADMIN - Change order status
app.post('/api/admin/order/:id/status', (req, res) => {
  const { token } = req.headers;
  if (token !== 'admin-token') return res.status(401).json({ error: "Neautorizováno." });
  const { id } = req.params;
  const { status } = req.body;
  let orders = loadOrders();
  orders = orders.map(o => o.id == id ? { ...o, status } : o);
  saveOrders(orders);
  res.json({ success: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Backend běží na portu', PORT));
