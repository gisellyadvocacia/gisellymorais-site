import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/#inicio" aria-label="Voltar ao início">
              <Image
                src="/images/logo-adv.png"
                alt="Dra. Giselly Morais - Advocacia Imobiliária"
                width={200}
                height={112}
                className="footer-logo-img"
              />
            </Link>
            <p>
              Assessoria jurídica especializada em Direito Imobiliário, Notarial, Registral e
              Sucessório para garantir solidez e segurança patrimonial em Uberaba e região.
            </p>
            <div className="social-icons-wrap" style={{ marginTop: 20 }}>
              <a
                href="https://www.instagram.com/gisellymoraisadv/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/85fmUVdDaPRjiyyA/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/giselly-morais-advogada-imobiliarista-a57344263"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Navegação Rápida</h4>
            <ul className="footer-links">
              <li><Link href="/#inicio">Início</Link></li>
              <li><Link href="/#servicos">Especialidades</Link></li>
              <li><Link href="/#ebook">Ebook Grátis</Link></li>
              <li><Link href="/#artigos">Orientações</Link></li>
              <li><Link href="/#sobre">A Especialista</Link></li>
              <li><Link href="/#faq">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Escritório &amp; Atendimento</h4>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="https://wa.me/5534992881500" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                (34) 99288-1500
              </a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:gisellyadvocacia@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                gisellyadvocacia@gmail.com
              </a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Rua Tristão de Castro, 676, Bairro São Benedito, Uberaba - MG
            </p>
            <p className="oab-highlight">Dra. Giselly Morais • OAB/MG 171.639</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Dra. Giselly Maria de Morais - Todos os direitos reservados.</span>
          <span className="developer-credit">OAB/MG 171.639 • Uberaba/MG</span>
        </div>
      </div>
    </footer>
  );
}
