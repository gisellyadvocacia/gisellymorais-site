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
export const PERSON_ID = `${SITE_URL}/#giselly-morais`;

export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Dra. Giselly Maria de Morais',
      givenName: 'Giselly Maria',
      familyName: 'de Morais',
      jobTitle: 'Advogada Especialista em Direito Imobiliário e Sucessório',
      description:
        'Advogada inscrita na OAB/MG nº 171.639, graduada pela Universidade de Uberaba (UNIUBE) em 2015 e pós-graduada pelo CERS. Especialista em Direito Imobiliário, Notarial, Registral e Sucessório.',
      image: `${SITE_URL}/images/profile.jpg`,
      url: SITE_URL,
      telephone: '+55-34-99288-1500',
      email: 'gisellyadvocacia@gmail.com',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Universidade de Uberaba (UNIUBE)',
        url: 'https://uniube.br',
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Ordem dos Advogados do Brasil - Seção de Minas Gerais (OAB/MG)',
        url: 'https://www.oabmg.org.br',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registro Profissional',
        name: 'OAB/MG 171.639',
      },
      worksFor: {
        '@id': ATTORNEY_ID,
      },
      sameAs: [
        'https://www.instagram.com/gisellymoraisadv/',
        'https://www.facebook.com/share/85fmUVdDaPRjiyyA/',
        'https://www.linkedin.com/in/giselly-morais-advogada-imobiliarista-a57344263',
      ],
    },
    {
      '@type': 'LegalService',
      '@id': ATTORNEY_ID,
      name: 'Dra. Giselly Morais - Advocacia Imobiliária e Sucessória',
      alternateName: [
        'Giselly Maria de Morais | Advogada Especialista em Direito Imobiliário',
        'Giselly Morais Advogada',
        'Dra. Giselly Morais',
      ],
      image: `${SITE_URL}/images/hero.jpg`,
      url: SITE_URL,
      hasMap:
        'https://maps.google.com/?q=Giselly+Maria+de+Morais+Advogada+Especialista+em+Direito+Imobili%C3%A1rio+Uberaba',
      telephone: '+55-34-99288-1500',
      email: 'gisellyadvocacia@gmail.com',
      founder: { '@id': PERSON_ID },
      employee: [{ '@id': PERSON_ID }],
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
        'https://www.google.com/search?q=Giselly+Maria+de+Morais+%7C+Advogada+Especialista+em+Direito+Imobili%C3%A1rio',
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
            text: 'A regularização de imóveis sem escritura pública é conduzida principalmente pela via administrativa extrajudicial nos Cartórios de Registro de Imóveis de Uberaba (1º e 2º Ofícios). Conforme a Lei Federal nº 6.015/1973 (Lei de Registros Públicos), imóveis adquiridos por contratos de gaveta, posse prolongada ou pendências de herança podem obter matrícula própria e escritura definitiva por meio de Usucapião Extrajudicial ou Adjudicação Compulsória, eliminando a morosidade do Judiciário e assegurando a propriedade jurídica plena para venda financiada ou transferência para herdeiros.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais cuidados e certidões são indispensáveis antes de assinar um contrato de compra e venda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Antes de assinar qualquer contrato ou realizar transferências bancárias, é indispensável a realização de uma Due Diligence Imobiliária (auditoria preventiva de risco). Essa auditoria engloba a análise da Certidão Vintenária com negativa de ônus no Cartório de Registro de Imóveis, certidões negativas cíveis, criminais, fiscais e trabalhistas junto ao TJMG, Justiça Federal e TRT, além da Certidão de Quitação de IPTU na Prefeitura Municipal de Uberaba, blindando o comprador contra fraudes, dívidas pretéritas do vendedor ou riscos de perda do imóvel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como funciona a realização de inventário e partilha de bens em cartório?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Havendo acordo entre todos os herdeiros maiores e capazes, o inventário é realizado por Escritura Pública diretamente no Cartório de Notas. A presença do advogado é obrigatória por lei. O procedimento extrajudicial é substancialmente mais rápido que o processo judicial, regularizando a divisão dos imóveis e permitindo a transferência das escrituras em curto prazo.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso desistir da compra de um imóvel na planta ou loteamento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Lei do Distrato Imobiliário (Lei nº 13.786/2018) regulamenta a rescisão contratual com devolução dos valores pagos. Se o motivo for atraso injustificado na entrega da obra pela construtora, o comprador tem direito à restituição de 100% dos valores pagos com correção monetária e juros. Caso a desistência parta do comprador, há limites legais para retenção das multas, protegendo contra cláusulas abusivas.',
          },
        },
      ],
    },
  ],
};
