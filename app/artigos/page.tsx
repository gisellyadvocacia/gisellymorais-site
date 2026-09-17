import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import JsonLd, { SITE_URL } from '@/components/JsonLd';
import { artigos } from '@/lib/artigos-data';

export const metadata: Metadata = {
  title: 'Orientações e Artigos em Direito Imobiliário',
  description:
    'Artigos e orientações jurídicas sobre regularização de imóveis, usucapião, contratos de compra e venda, distratos e inventários em Uberaba/MG por Dra. Giselly Morais.',
  alternates: {
    canonical: `${SITE_URL}/artigos`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${SITE_URL}/artigos`,
    title: 'Orientações e Artigos em Direito Imobiliário | Dra. Giselly Morais',
    description:
      'Artigos práticos sobre regularização de imóveis, usucapião, contratos e inventários em Uberaba/MG.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orientações e Artigos em Direito Imobiliário | Dra. Giselly Morais',
    description:
      'Artigos práticos sobre regularização de imóveis, usucapião, contratos e inventários em Uberaba/MG.',
    images: ['/images/hero.jpg'],
  },
};

export default function ArtigosArchivePage() {
  const waGeral =
    'https://wa.me/5534992881500?text=Ol%C3%A1%2C%20Dra.%20Giselly!%20Li%20seus%20artigos%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20para%20o%20meu%20caso.';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/artigos#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Orientações',
        item: `${SITE_URL}/artigos`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="artigo-single-container" style={{ maxWidth: 1140, margin: '140px auto 80px' }}>
        <header className="artigo-single-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0 }}>
          <nav
            aria-label="Trilha de navegação"
            style={{
              marginBottom: 20,
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Início
            </Link>
            <span>›</span>
            <span style={{ color: 'var(--gold-primary)' }}>Orientações</span>
          </nav>
          <span className="section-tag">GUIA JURÍDICO &amp; ARTIGOS</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 16 }}>
            Orientações Práticas em Direito Imobiliário
          </h1>
          <p
            style={{
              maxWidth: 720,
              margin: '0 auto 40px',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            Conteúdos informativos e análises técnicas elaboradas pela Dra. Giselly Maria de Morais
            (OAB/MG nº 171.639) para orientar decisões seguras em compra, venda, posse, regularização
            e partilha de bens em Uberaba e região.
          </p>
        </header>

        <div className="artigos-grid" style={{ marginTop: 20 }}>
          {artigos.map((a) => (
            <article key={a.slug} className="artigo-card">
              <div className="artigo-header-tag">{a.categoria}</div>
              <div className="artigo-content">
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{a.tempoLeitura}</span>
                  <span>
                    {new Date(a.dataModificacao).toLocaleDateString('pt-BR', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3>
                  <Link
                    href={`/artigos/${a.slug}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {a.titulo}
                  </Link>
                </h3>
                <p>{a.metaDescription}</p>
                <Link href={`/artigos/${a.slug}`} className="artigo-link">
                  Ler artigo completo →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="artigo-single-cta" style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 12 }}>
            Precisa de assessoria jurídica especializada?
          </h2>
          <p style={{ maxWidth: 640, margin: '0 auto 24px', color: 'var(--text-muted)' }}>
            Se você possui dúvidas sobre contratos, imóveis irregulares ou inventário familiar, fale
            diretamente com a Dra. Giselly Morais pelo WhatsApp.
          </p>
          <a
            href={waGeral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Falar no WhatsApp • (34) 99288-1500
          </a>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
