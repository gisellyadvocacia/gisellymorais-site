'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: 'Como regularizar um imóvel urbano ou rural sem escritura definitiva em Uberaba/MG?',
    a: (
      <>
        <p>
          <strong>
            A regularização de imóveis sem escritura pública é conduzida principalmente pela via
            administrativa extrajudicial nos Cartórios de Registro de Imóveis de Uberaba (1º e 2º
            Ofícios).
          </strong>
        </p>
        <p>
          Conforme a Lei Federal nº 6.015/1973 (Lei de Registros Públicos), imóveis adquiridos por
          contratos de gaveta, posse prolongada ou pendências de herança podem obter matrícula própria
          e escritura definitiva por meio de <strong>Usucapião Extrajudicial</strong> ou{' '}
          <strong>Adjudicação Compulsória</strong>.
        </p>
        <p>
          Esse procedimento em cartório elimina a morosidade do Judiciário, assegurando a propriedade
          jurídica plena para venda financiada ou transferência para herdeiros.
        </p>
      </>
    ),
  },
  {
    q: 'Quais cuidados e certidões são indispensáveis antes de assinar um contrato de compra e venda?',
    a: (
      <>
        <p>
          <strong>
            Antes de assinar qualquer contrato ou realizar transferências bancárias, é indispensável a
            realização de uma Due Diligence Imobiliária (auditoria preventiva de risco).
          </strong>
        </p>
        <p>
          Essa auditoria engloba a análise da Certidão Vintenária com negativa de ônus no Cartório de
          Registro de Imóveis, certidões negativas cíveis, criminais, fiscais e trabalhistas junto ao
          TJMG, Justiça Federal e TRT, além da Certidão de Quitação de IPTU na Prefeitura Municipal de
          Uberaba.
        </p>
        <p>
          Esse exame criterioso blinda o comprador contra fraudes, dívidas pretéritas do vendedor ou
          riscos de perda do imóvel.
        </p>
      </>
    ),
  },
  {
    q: 'Como funciona a realização de inventário e partilha de bens em cartório?',
    a: (
      <>
        <p>
          <strong>
            Havendo acordo entre todos os herdeiros maiores e capazes, o inventário é realizado por
            Escritura Pública diretamente no Cartório de Notas.
          </strong>
        </p>
        <p>
          A presença do advogado é obrigatória por lei. O procedimento extrajudicial é
          substancialmente mais rápido que o processo judicial, regularizando a divisão dos imóveis e
          permitindo a transferência das escrituras em curto prazo.
        </p>
      </>
    ),
  },
  {
    q: 'Posso desistir da compra de um imóvel na planta ou loteamento?',
    a: (
      <>
        <p>
          <strong>
            Sim. A Lei do Distrato Imobiliário (Lei nº 13.786/2018) regulamenta a rescisão contratual
            com devolução dos valores pagos.
          </strong>
        </p>
        <p>
          Se o motivo for atraso injustificado na entrega da obra pela construtora, o comprador tem
          direito à restituição de 100% dos valores pagos com correção monetária e juros. Caso a
          desistência parta do comprador, há limites legais para retenção das multas, protegendo
          contra cláusulas abusivas.
        </p>
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-accordion">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item glass-panel${isOpen ? ' active' : ''}`}>
            <button
              type="button"
              id={`faq-btn-${i}`}
              aria-controls={`faq-content-${i}`}
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={`faq-content-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="faq-answer"
              style={{ maxHeight: isOpen ? 480 : 0 }}
            >
              <div className="faq-answer-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
