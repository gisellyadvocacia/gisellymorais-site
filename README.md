# Dra. Giselly Morais — Site institucional (Next.js)

Migração do Wix para Next.js App Router, preservando SEO, redirects 301 e Schema.org.

- **Domínio institucional (este projeto):** `gisellymoraisadvogada.com`
- **Domínio de ads (não mexer):** `gisellymorais.adv.br`

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Rotas

| Rota | Origem Wix |
|---|---|
| `/` | Home |
| `/artigos/inventario-formal-partilha` | `/post/finalizou-o-inventário-...` |
| `/artigos/advocacia-extrajudicial` | `/post/advocacia-extrajudicial-...` |
| `/artigos/distrato-imobiliario` | `/post/assinou-contrato-e-quer-desistir-do-imóvel` |
| `/artigos/checklist-compra-segura` | `/post/checklist-rápido-...` |
| `/artigos/imovel-na-planta` | `/post/vale-a-pena-comprar-um-imóvel-na-planta` |
| `/artigos/locacao-segura` | `/post/proteja-seu-imóvel-antes-de-alugar-...` |
| `/artigos/erros-regularizacao` | `/post/erros-mais-comuns-na-regularização-...` |
| `/artigos/contrato-de-gaveta` | `/post/cuidado-com-o-contrato-de-gaveta-...` |
| `/artigos/parcelas-em-atraso` | `/post/parcelas-em-atraso-...` |
| `/artigos/descomplicando-direito-imobiliario` | `/post/descomplicando-o-direito-imobiliário-...` |
| `/ebook-regularizacao-imoveis.pdf` | PDF do ebook (antes em `/_files/ugd/...`) |

Redirects 301 (incluindo `/book-online`, booking e leftovers do Wix) estão em `vercel.json`.

## Checklist de deploy na Vercel

1. Conta Vercel + GitHub (ou upload da pasta `C:\Projetos\gisellymorais-next`).
2. **New Project** → Framework: Next.js → Root: este repositório.
3. Build: `next build` (padrão). Sem variáveis de ambiente obrigatórias.
4. Deploy de preview e validar:
   - Home `/`
   - Um artigo `/artigos/distrato-imobiliario`
   - Redirect: `/post/assinou-contrato-e-quer-desistir-do-imóvel` → 301 para `/artigos/distrato-imobiliario`
   - `/book-online?utm_source=google` → `/`
   - `/ebook-regularizacao-imoveis.pdf` abre o PDF
   - `/sitemap.xml` e `/robots.txt`
5. **Domínio (só o institucional):**
   - Vercel → Project → Settings → Domains → adicionar:
     - `gisellymoraisadvogada.com`
     - `www.gisellymoraisadvogada.com`
   - Preferir `www` como canonical (já está no `metadataBase`) **ou** o apex — o código usa `https://www.gisellymoraisadvogada.com`.
6. **DNS no registrador atual do domínio** (onde o Wix aponta hoje):
   - **Não alterar** `gisellymorais.adv.br`.
   - Em `gisellymoraisadvogada.com`:
     - Se usar nameservers da Vercel: trocar NS para os 4 NS que a Vercel mostrar.
     - Se manter DNS no registrador:
       - `A` do apex `@` → `76.76.21.21` (IP da Vercel; confirmar no painel)
       - `CNAME` de `www` → `cname.vercel-dns.com`
   - Remover/desligar apontamento Wix (A/CNAME `sites.wixdns.net` / nameservers Wix) **só depois** do certificado SSL da Vercel ficar “Valid”.
7. Pós-cutover:
   - Search Console: pedir reindexação da home e dos 10 `/artigos/...`
   - Conferir que AdsBot e Googlebot batem 200 (não 403)
   - Tag Google Ads `AW-16658443724` já está no `app/layout.tsx`

## Observação sobre imagens

Alguns arquivos em `public/images/` vieram da Wix com nomes que podem não bater com o conteúdo (ex.: `ebook.jpg` pode ser peça de Instagram, não capa de ebook). Conferir visualmente antes do lançamento.
