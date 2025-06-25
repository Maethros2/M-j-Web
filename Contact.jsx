export default function Contact() {
  return (
    <div className="bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Kontakt & mapa</h2>
      <div className="mb-2">
        <strong>Adresa:</strong> Hlavní 123, Krnov<br />
        <strong>Telefon:</strong> 777 123 456<br />
        <strong>Email:</strong> servis@opravasmartphonu.cz
      </div>
      <iframe
        title="mapa"
        className="w-full h-52 rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.703964263713!2d17.693895515697666!3d50.09034947943073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711683b2a9d1c15%3A0x3aece66e5ad7ae88!2sKrnov!5e0!3m2!1scs!2scz!4v1719344170729!5m2!1scs!2scz"
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
