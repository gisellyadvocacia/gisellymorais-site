'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export default function GoogleAdsTracker() {
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      // Intercepta todos os cliques em links de WhatsApp (wa.me ou api.whatsapp.com)
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-16658443724/fCBTCJSKiawcEMzbroc-',
            value: 1.0,
            currency: 'BRL',
          });
        }
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}
