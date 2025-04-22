
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 bg-gradient-to-br from-gray-100 to-white">
        <h1 className="text-5xl font-bold mb-4">PT Aziel Bangun Negeri</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Mitra terpercaya Anda di bidang IT sejak 2020. Google Partner bersertifikasi resmi, berbasis di Pekanbaru.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Produk & Layanan Kami</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Google Workspace</h3>
              <p>Solusi produktivitas: email bisnis, Google Docs, pelatihan dan konfigurasi lengkap.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Google Cloud Platform</h3>
              <p>Platform cloud untuk aplikasi dan server digital Anda. Aman, scalable, dan efisien.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Pembuatan Aplikasi</h3>
              <p>Kami bantu Anda membuat sistem dan aplikasi sesuai kebutuhan bisnis Anda.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Klien Kami</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          {[
            "PT Garuda Sakti Nusantara Indonesia",
            "IGNOS Law Alliance",
            "PT Solomon Wira Makmur",
            "PT Tian Tujuhpuluh Utama",
            "PT Infratama Muda Perkasa",
            "PT Sri Ulina Ersada Karina"
          ].map((client, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center font-medium">{client}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Bidang Usaha Lain</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Penyedia Komputer / Laptop</h3>
              <p>Kami menyediakan perangkat keras untuk kebutuhan pribadi maupun korporasi.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Penyedia Angkutan Dump Truck</h3>
              <p>Layanan transportasi untuk kebutuhan logistik dan proyek konstruksi Anda.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2 font-semibold text-lg">Hubungi Kami</p>
          <p>Email: info@aziel-bn.com</p>
          <p>Alamat: Komplek Mega Asri Green Office Blok A4<br />Jl. Arifin Ahmad, RT. 001, RW 015,<br />Kel. Tengkerang Tengah, Kec. Marpoyan Damai,<br />Pekanbaru, Riau 28125</p>
        </div>
      </footer>
    </main>
  );
}
