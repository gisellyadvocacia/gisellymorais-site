'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WA =
  'https://wa.me/5534992881500?text=Ol%C3%A1%2C%20Dra.%20Giselly!%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20sobre%20meu%20im%C3%B3vel/contrato.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link href="/#inicio" className="nav-logo" aria-label="Dra. Giselly Morais" onClick={close}>
          <Image
            src="/images/logo-adv.png"
            alt="Dra. Giselly Morais - Advocacia Imobiliária e Sucessória"
            width={180}
            height={48}
            priority
          />
        </Link>
        <nav className={`nav-links${open ? ' active' : ''}`} aria-label="Menu principal">
          <Link href="/#inicio" onClick={close}>Início</Link>
          <Link href="/#sobre" onClick={close}>A Especialista</Link>
          <Link href="/#servicos" onClick={close}>Serviços</Link>
          <Link href="/#ebook" onClick={close}>Ebook Grátis</Link>
          <Link href="/#artigos" onClick={close}>Orientações</Link>
          <Link href="/#faq" onClick={close}>Dúvidas</Link>
          <Link href="/#contato" onClick={close}>Contato</Link>
          <div className="nav-drawer-cta">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={close}
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
        <div className="nav-actions">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp nav-cta"
            aria-label="Atendimento pelo WhatsApp: (34) 99288-1500"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="nav-cta-text">WhatsApp</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && <div className="nav-backdrop" onClick={close} />}
    </header>
  );
}
