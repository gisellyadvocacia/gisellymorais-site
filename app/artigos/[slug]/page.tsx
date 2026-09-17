import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import JsonLd, { ATTORNEY_ID, PERSON_ID, SITE_URL } from '@/components/JsonLd';
import { artigos, getArtigoBySlug } from '@/lib/artigos-data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artigo = getArtigoBySlug(params.slug);
  if (!artigo) return { title: 'Artigo não encontrado' };

  const url = `${SITE_URL}/artigos/${artigo.slug}`;
  return {
    title: artigo.titulo,
    description: artigo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url,
      title: artigo.titulo,
      description: artigo.metaDescription,
      images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
      publishedTime: artigo.dataPublicacao,
      modifiedTime: artigo.dataModificacao,
      authors: ['Dra. Giselly Maria de Morais'],
      section: artigo.categoria,
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.titulo,
      description: artigo.metaDescription,
      images: ['/images/hero.jpg'],
    },
  };
}

export default function ArtigoPage({ params }: Props) {
  const artigo = getArtigoBySlug(params.slug);
  if (!artigo) notFound();

  const url = `${SITE_URL}/artigos/${artigo.slug}`;
  const wa = `https://wa.me/5534992881500?text=${artigo.ctaWhatsapp}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: artigo.titulo,
        description: artigo.metaDescription,
        datePublished: artigo.dataPublicacao,
        dateModified: artigo.dataModificacao,
        inLanguage: 'pt-BR',
        articleSection: artigo.categoria,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: {
          '@type': 'Person',
          '@id': PERSON_ID,
          name: 'Dra. Giselly Maria de Morais',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'LegalService',
          '@id': ATTORNEY_ID,
          name: 'Dra. Giselly Morais - Advocacia Imobiliária e Sucessória',
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-adv.png` },
        },
        image: `${SITE_URL}/images/hero.jpg`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: artigo.titulo,
            item: url,
          },
        ],
      },
    ],
  };

  const relacionados = artigos.filter((a) => a.slug !== artigo.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="artigo-single-container">
        <article>
          <header className="artigo-single-header">
            <nav
              aria-label="Trilha de navegação"
              style={{
                marginBottom: 20,
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Início
              </Link>
              <span>›</span>
              <Link href="/artigos" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Orientações
              </Link>
              <span>›</span>
              <span style={{ color: 'var(--gold-primary)' }}>{artigo.categoria}</span>
            </nav>
            <span className="section-tag">{artigo.categoria}</span>
            <h1>{artigo.titulo}</h1>
            <div className="artigo-meta-bar">
              <span>Dra. Giselly Maria de Morais • OAB/MG 171.639</span>
              <span>{artigo.tempoLeitura}</span>
              <time dateTime={artigo.dataPublicacao}>
                Atualizado em{' '}
                {new Date(artigo.dataModificacao).toLocaleDateString('pt-BR')}
              </time>
            </div>
          </header>

          <div
            className="artigo-body-single"
            dangerouslySetInnerHTML={{ __html: artigo.conteudoHtml }}
          />

          <div className="artigo-autor-box">
            <Image
              src="/images/profile.jpg"
              alt="Dra. Giselly Maria de Morais"
              width={80}
              height={80}
              className="artigo-autor-img"
            />
            <div>
              <strong style={{ color: '#fff', display: 'block', marginBottom: 6 }}>
                Dra. Giselly Maria de Morais
              </strong>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                Advogada especialista em Direito Imobiliário e Sucessório. OAB/MG 171.639.
                Escritório em Uberaba/MG.
              </p>
            </div>
          </div>

          <div className="artigo-single-cta">
            <h2 style={{ fontSize: '1.6rem', marginBottom: 12 }}>
              Precisa de orientação sobre este tema?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
              Envie uma mensagem pelo WhatsApp. A Dra. Giselly analisa o seu caso com clareza e
              segurança jurídica.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Falar no WhatsApp • (34) 99288-1500
            </a>
          </div>
        </article>

        <section style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 24 }}>Outras orientações</h2>
          <div className="artigos-grid">
            {relacionados.map((r) => (
              <article key={r.slug} className="artigo-card">
                <div className="artigo-header-tag">{r.categoria}</div>
                <div className="artigo-content">
                  <h3>
                    <Link href={`/artigos/${r.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {r.titulo}
                    </Link>
                  </h3>
                  <p>{r.metaDescription}</p>
                  <Link href={`/artigos/${r.slug}`} className="artigo-link">
                    Ler artigo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
