import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd, { legalServiceSchema } from '@/components/JsonLd';
import { artigos } from '@/lib/artigos-data';

const WA =
  'https://wa.me/5534992881500?text=Ol%C3%A1%2C%20Dra.%20Giselly!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.';
const WA_CASO =
  'https://wa.me/5534992881500?text=Ol%C3%A1%2C%20Dra.%20Giselly!%20Preciso%20de%20ajuda%20para%20resolver%20meu%20caso%20imobili%C3%A1rio.';
const WA_EBOOK =
  'https://wa.me/5534992881500?text=Ol%C3%A1%2C%20Dra.%20Giselly!%20Li%20o%20ebook%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20meu%20im%C3%B3vel.';

const IconWa = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema} />
      <Navbar />

      {/* 1. HERO — EDITORIAL LUXURY & SILHUETA IMERSIVA */}
      <section id="inicio" className="hero">
        <div className="hero-bg-glow" />
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-badge-item">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                OAB/MG nº 171.639
              </span>
              <span className="hero-badge-separator" aria-hidden="true">•</span>
              <span className="hero-badge-item">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Uberaba / MG
              </span>
            </div>

            <h1>
              Segurança e Proteção Jurídica para o seu{' '}
              <span className="hero-title-gold">Patrimônio Imobiliário e Sucessório</span>
            </h1>
            <p className="hero-lead">
              Regularização de imóveis, auditoria preventiva de contratos e inventários extrajudiciais
              conduzidos com rigor técnico, agilidade em cartório e atendimento humanizado.
            </p>

            <div className="hero-cta-wrapper">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp hero-cta-btn">
                <IconWa />
                <span>Falar com a Dra. Giselly no WhatsApp</span>
              </a>
              <span className="microcopy">
                <i className="dot-online" aria-hidden="true" />
                Atendimento direto e personalizado • (34) 99288-1500
              </span>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-silhouette-container">
              <div className="hero-silhouette-backlight" aria-hidden="true" />
              <Image
                src="/images/giselly-hero-transparente.png"
                alt="Dra. Giselly Morais - Advogada Especialista em Direito Imobiliário e Sucessório em Uberaba"
                width={408}
                height={612}
                className="hero-silhouette-img"
                priority
              />
              <div className="hero-authority-pill">
                <span className="hero-pill-dot" aria-hidden="true" />
                <div>
                  <strong>Dra. Giselly Morais</strong>
                  <span>Especialista em Direito Imobiliário &amp; Sucessório</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE — A ESPECIALISTA (Posicionamento Estratégico no Topo / Mobile-First) */}
      <section id="sobre" className="sobre-section">
        <div className="container sobre-grid">
          <div className="sobre-image-wrapper">
            <div className="sobre-image-frame">
              <Image
                src="/images/profile.jpg"
                alt="Dra. Giselly Maria de Morais - Advogada Imobiliária em Uberaba"
                width={440}
                height={587}
                className="sobre-image"
              />
            </div>
          </div>
          <div className="sobre-content">
            <span className="sobre-label">A ESPECIALISTA</span>
            <h2>Dra. Giselly Morais</h2>
            <span className="sobre-oab">OAB/MG nº 171.639</span>
            <div className="sobre-bio">
              <p>
                Sou <strong>Giselly Maria de Morais</strong>, advogada especializada em{' '}
                <strong>Direito Imobiliário e Direito Sucessório</strong>. Graduei-me em Direito pela
                Universidade de Uberaba (UNIUBE) em 2015 e pós-graduei-me pelo CERS.
              </p>
              <p>
                Acredito que a advocacia vai muito além de solucionar conflitos jurídicos: exige uma
                abordagem humana e acolhedora, onde cada cliente é ouvido com empatia e dedicação.
              </p>
              <p>
                Meu compromisso é descomplicar processos, garantir total segurança nas suas
                negociações e proteger o patrimônio que você levou anos para construir.
              </p>
            </div>
            <div className="numeros-inline">
              <div className="num-box">
                <strong>+9 Anos</strong>
                <span>De Formação Jurídica</span>
              </div>
              <div className="num-box">
                <strong>Especialista</strong>
                <span>Imobiliário &amp; Sucessório</span>
              </div>
              <div className="num-box">
                <strong>100%</strong>
                <span>Foco em Segurança</span>
              </div>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Falar com a Dra. Giselly
            </a>
          </div>
        </div>
      </section>

      {/* 3. SITUAÇÕES */}
      <section id="situacoes" className="dores-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PROTEÇÃO PATRIMONIAL</span>
            <h2 className="text-gold">Você está vivenciando alguma dessas situações?</h2>
            <p>
              Pendências imobiliárias e contratuais não resolvidas causam desvalorização patrimonial
              e riscos reais de perda do bem.
            </p>
          </div>

          <div className="dores-grid">
            <div className="dor-card glass-panel">
              <div className="dor-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3>Imóvel sem Escritura / Gaveta</h3>
              <p>
                Regularização completa com obtenção de matrícula definitiva via Usucapião
                Extrajudicial ou Adjudicação Compulsória em cartório.
              </p>
            </div>
            <div className="dor-card glass-panel">
              <div className="dor-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Compra &amp; Venda de Alto Risco</h3>
              <p>
                Auditoria preventiva de certidões (Due Diligence) e redação de contratos blindados
                para evitar golpes, penhoras e prejuízos.
              </p>
            </div>
            <div className="dor-card glass-panel">
              <div className="dor-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
              </div>
              <h3>Inventário e Partilha Travados</h3>
              <p>
                Condução célere da partilha de bens em cartório ou via judicial, preservando o
                patrimônio e reduzindo o desgaste entre herdeiros.
              </p>
            </div>
            <div className="dor-card glass-panel">
              <div className="dor-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Conflitos de Posse &amp; Distratos</h3>
              <p>
                Notificações extrajudiciais, defesa da posse, ações possessórias e cancelamento legal
                de contratos com restituição de valores.
              </p>
            </div>
          </div>

          <div className="section-center-cta">
            <a href={WA_CASO} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Quero Analisar Meu Caso com a Dra. Giselly
            </a>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS */}
      <section id="servicos" className="servicos-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SERVIÇOS ESPECIALIZADOS</span>
            <h2>
              Áreas de Atuação em{' '}
              <span className="text-gold italic">Direito Imobiliário &amp; Sucessório</span>
            </h2>
            <p>
              Atuação estratégica em âmbito extrajudicial (cartórios de notas e registros) e judicial
              em Uberaba e região.
            </p>
          </div>

          <div className="servicos-grid-visual">
            <article className="servico-card-visual">
              <div className="servico-img-wrap">
                <Image
                  src="/images/servico-transacoes.jpg"
                  alt="Transações Imobiliárias e Contratos - Dra. Giselly Morais"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="servico-body">
                <h3>Transações Imobiliárias</h3>
                <p>
                  Compra, venda, locação, cessão de direitos possessórios, financiamentos, análise
                  minuciosa de documentos e elaboração de contratos personalizados.
                </p>
                <p className="servico-destaques">
                  <strong>Diferencial:</strong> Atuação jurídica preventiva e estratégica em todas as
                  etapas da negociação, garantindo segurança patrimonial máxima.
                </p>
              </div>
            </article>

            <article className="servico-card-visual">
              <div className="servico-img-wrap">
                <Image
                  src="/images/servico-regularizacao.jpg"
                  alt="Regularização de Imóveis e Usucapião em Uberaba - Dra. Giselly Morais"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="servico-body">
                <h3>Regularização de Imóveis</h3>
                <p>
                  Correção registral, averbações, usucapião extrajudicial/judicial, retificação de
                  área, unificação, desmembramento e regularização de construções junto à Prefeitura
                  e Cartórios.
                </p>
                <p className="servico-destaques">
                  <strong>Diferencial:</strong> Trabalho técnico e ágil que valoriza seu imóvel
                  comercialmente e viabiliza financiamento bancário e venda segura.
                </p>
              </div>
            </article>

            <article className="servico-card-visual">
              <div className="servico-img-wrap">
                <Image
                  src="/images/servico-sucessao.jpg"
                  alt="Direito Sucessório e Inventários em Uberaba - Dra. Giselly Morais"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="servico-body">
                <h3>Sucessão &amp; Inventários</h3>
                <p>
                  Planejamento sucessório, inventários em cartório (extrajudiciais) e judiciais,
                  testamentos, partilhas amigáveis e organização jurídica completa do patrimônio
                  familiar.
                </p>
                <p className="servico-destaques">
                  <strong>Diferencial:</strong> Estruturação estratégica para proteger os bens da
                  família e facilitar transições com o menor custo tributário possível.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. EBOOK */}
      <section id="ebook" className="ebook-section">
        <div className="container">
          <div className="ebook-card-box">
            <div className="ebook-cover">
              <Image
                src="/images/ebook.jpg"
                alt="Guia em Livro 3D de Luxo: 5 Passos para Regularizar seu Imóvel - Dra. Giselly Morais"
                width={300}
                height={400}
                className="ebook-cover-img"
              />
            </div>
            <div className="ebook-info">
              <span className="section-tag">EBOOK GRATUITO EM PDF</span>
              <h2>5 Passos para Regularizar seu Imóvel sem Complicações</h2>
              <p>
                Descubra os procedimentos práticos e indispensáveis para transformar contratos de
                gaveta ou imóveis sem escritura em propriedades 100% regulares, valorizadas e
                seguras perante a lei e os cartórios.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
                <a
                  href="/ebook-regularizacao-imoveis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Baixar o Ebook Grátis Agora
                </a>
                <a href={WA_EBOOK} target="_blank" rel="noopener noreferrer" className="btn btn-gold-outline">
                  Tirar Dúvidas no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARTIGOS — Orientações Práticas */}
      <section id="artigos" style={{ backgroundColor: 'var(--surface-color)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">GUIA JURÍDICO &amp; ARTIGOS</span>
            <h2>
              Orientações Práticas para{' '}
              <span className="text-gold italic">Compradores e Proprietários</span>
            </h2>
            <p>
              Conteúdos informativos e guias práticos elaborados pela Dra. Giselly Morais para
              proteger você de riscos contratuais e patrimoniais.
            </p>
          </div>

          <div className="artigos-grid">
            {artigos.map((a) => (
              <article key={a.slug} className="artigo-card">
                <div className="artigo-header-tag">{a.categoria}</div>
                <div className="artigo-content">
                  <h3>
                    <Link href={`/artigos/${a.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
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
        </div>
      </section>

      {/* 7. ATENDIMENTO */}
      <section id="atendimento" className="como-funciona-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">METODOLOGIA CLARA</span>
            <h2>
              Como Funciona o <span className="text-gold italic">Nosso Atendimento</span>
            </h2>
            <p>Um processo ágil, transparente e seguro do primeiro contato à solução final do seu caso.</p>
          </div>
          <div className="como-funciona-grid">
            <div className="passo-card glass-panel">
              <div className="passo-numero">1</div>
              <h3>Contato Inicial</h3>
              <p>Envie sua mensagem pelo WhatsApp apresentando sua dúvida, contrato ou situação do imóvel.</p>
            </div>
            <div className="passo-card glass-panel">
              <div className="passo-numero">2</div>
              <h3>Análise Estratégica</h3>
              <p>
                A Dra. Giselly avalia as certidões, contratos e riscos, indicando a solução cartorial
                ou jurídica mais econômica.
              </p>
            </div>
            <div className="passo-card glass-panel">
              <div className="passo-numero">3</div>
              <h3>Condução &amp; Resolução</h3>
              <p>
                Atuação técnica rigorosa junto aos Cartórios de Uberaba ou Judiciário com
                acompanhamento em tempo real.
              </p>
            </div>
          </div>
          <div className="section-center-cta">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Iniciar Atendimento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">DÚVIDAS FREQUENTES</span>
            <h2>
              Perguntas Frequentes sobre{' '}
              <span className="text-gold italic">Direito Imobiliário em Uberaba</span>
            </h2>
            <p>Esclarecimentos objetivos para orientar suas decisões com respaldo técnico.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* 9. CTA */}
      <section id="contato" className="cta-final-section">
        <div className="container cta-final-content">
          <h2>
            Proteja seu patrimônio com a{' '}
            <span className="text-gold italic">assessoria jurídica certa.</span>
          </h2>
          <p
            style={{
              maxWidth: 650,
              margin: '0 auto 32px',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
            }}
          >
            Agende uma consulta presencial em nosso escritório ou receba atendimento digital
            personalizado pelo WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Falar no WhatsApp • (34) 99288-1500
            </a>
            <a href="mailto:gisellyadvocacia@gmail.com" className="btn btn-gold-outline">
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
