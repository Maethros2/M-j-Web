import { useState } from 'react';
import OrderForm from './components/OrderForm';
import ServiceList from './components/ServiceList';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-700 text-white p-6 shadow">
        <h1 className="text-3xl font-bold mb-2">Oprava Smartphonů Krnov</h1>
        <p className="text-lg">Expresní servis všech značek • Výhodné ceny • Profesionální přístup</p>
      </header>
      <main className="p-4 max-w-3xl mx-auto">
        {admin ? (
          <AdminPanel />
        ) : (
          <>
            <OrderForm />
            <ServiceList />
            <Testimonials />
            <Contact />
            <AdminLogin onLogin={() => setAdmin(true)} />
          </>
        )}
      </main>
      <footer className="bg-gray-200 p-4 text-center text-sm mt-10">
        &copy; {new Date().getFullYear()} OpravaSmartphonu.cz | Krnov
      </footer>
    </div>
  );
}
