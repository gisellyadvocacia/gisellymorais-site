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
        <nav className={`nav-links${open ? ' active' : ''}`}>
          <Link href="/#inicio" onClick={close}>Início</Link>
          <Link href="/#servicos" onClick={close}>Serviços</Link>
          <Link href="/#ebook" onClick={close}>Ebook Grátis</Link>
          <Link href="/#artigos" onClick={close}>Orientações</Link>
          <Link href="/#sobre" onClick={close}>A Especialista</Link>
          <Link href="/#faq" onClick={close}>Dúvidas</Link>
          <Link href="/#contato" onClick={close}>Contato</Link>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold-outline nav-cta"
        >
          (34) 99288-1500
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
    </header>
  );
}
