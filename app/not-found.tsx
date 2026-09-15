import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="artigo-single-container" style={{ textAlign: 'center', paddingTop: 180 }}>
        <span className="section-tag">404</span>
        <h1>Página não encontrada</h1>
        <p style={{ color: 'var(--text-muted)', margin: '16px 0 32px' }}>
          O endereço que você acessou não existe ou foi movido. Use o menu para continuar.
        </p>
        <Link href="/" className="btn btn-whatsapp">
          Voltar ao início
        </Link>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
