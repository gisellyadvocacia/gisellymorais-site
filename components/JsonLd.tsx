export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const SITE_URL = 'https://www.gisellymoraisadvogada.com';
export const ATTORNEY_ID = `${SITE_URL}/#attorney`;

export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': ATTORNEY_ID,
      name: 'Dra. Giselly Morais - Advocacia Imobiliária e Sucessória',
      alternateName: 'Giselly Morais Advogada',
      image: `${SITE_URL}/images/hero.jpg`,
      url: SITE_URL,
      telephone: '+55-34-99288-1500',
      email: 'gisellyadvocacia@gmail.com',
      priceRange: '$$',
      description:
        'Assessoria jurídica especializada em Direito Imobiliário e Sucessório em Uberaba e região. Regularização de imóveis, usucapião, contratos de compra e venda, auditoria preventiva (due diligence) e inventários.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Tristão de Castro, 676',
        addressLocality: 'Uberaba',
        addressRegion: 'MG',
        postalCode: '38022-010',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -19.7523,
        longitude: -47.9351,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/gisellymoraisadv/',
        'https://www.facebook.com/share/85fmUVdDaPRjiyyA/',
        'https://www.linkedin.com/in/giselly-morais-advogada-imobiliarista-a57344263',
      ],
      knowsAbout: [
        'Direito Imobiliário',
        'Direito Sucessório',
        'Regularização de Imóveis',
        'Usucapião Extrajudicial',
        'Adjudicação Compulsória',
        'Due Diligence Imobiliária',
        'Contratos de Compra e Venda',
        'Inventário em Cartório e Judicial',
        'Distrato Imobiliário',
        'Desmembramento e Averbações',
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Uberaba' },
        { '@type': 'AdministrativeArea', name: 'Triângulo Mineiro' },
        { '@type': 'AdministrativeArea', name: 'Minas Gerais' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como regularizar um imóvel urbano ou rural sem escritura definitiva em Uberaba/MG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A regularização de imóveis sem escritura pública é conduzida com celeridade pela via extrajudicial diretamente nos Cartórios de Registro de Imóveis de Uberaba (1º e 2º Ofícios). Através de procedimentos como Usucapião Extrajudicial ou Adjudicação Compulsória (conforme a Lei de Registros Públicos nº 6.015/1973), imóveis de gaveta, posses consolidadas ou pendências sucessórias recebem matrícula individual e escritura definitiva sem depender de processo judicial demorado.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais cuidados são indispensáveis antes de assinar um contrato de compra e venda de imóvel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Antes de qualquer pagamento ou assinatura, é fundamental realizar a Due Diligence Imobiliária (auditoria jurídica preventiva). Esse procedimento analisa a Certidão Vintenária no Cartório de Registro de Imóveis, certidões negativas cíveis, fiscais e trabalhistas junto ao TJMG, TRF e TST, além de débitos municipais de IPTU e ITBI na Prefeitura de Uberaba, prevenindo golpes, fraudes contra credores ou perda do bem.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como funciona o inventário extrajudicial em cartório e a partilha de bens imóveis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quando há consenso entre os herdeiros e todos são maiores e capazes, o inventário pode ser lavrado diretamente em Cartório de Notas por escritura pública, assistido por advogado especialista. O procedimento é concluído em poucas semanas, permitindo a regularização célere das matrículas dos imóveis e partilha sem a burocracia do processo judicial.',
          },
        },
        {
          '@type': 'Question',
          name: 'Assinei um contrato de promessa de compra e venda e quero desistir do imóvel, o que fazer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Com a Lei do Distrato Imobiliário (Lei nº 13.786/2018), o comprador tem direitos claros quanto à retenção de valores e devolução das quantias pagas em caso de desistência ou atraso injustificado na entrega da obra pela construtora. Uma análise técnica do contrato verifica a legalidade das multas e garante a restituição justa.',
          },
        },
      ],
    },
  ],
};
