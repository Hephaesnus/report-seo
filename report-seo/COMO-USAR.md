# Framework SEO Sallus — Guia Completo

Este repositório contém o sistema de reporting SEO mensal do site `sallus.pt`.
O relatório é um ficheiro HTML dinâmico alimentado por um ficheiro de dados JavaScript.
Não há servidor, não há base de dados — tudo funciona localmente no browser.

---

## Estrutura do repositório

```
report-seo/
├── relatorio-seo.html          ← relatório dinâmico (nunca apagar)
├── seo-data.js                 ← FICHEIRO DE DADOS (editar mensalmente)
├── COMO-USAR.md                ← este ficheiro
│
├── 2026-launch/                ← Período 0: Diagnóstico inicial (Mar 29 – Mai 12 2026, 45 dias)
│   ├── grafico.csv
│   ├── consultas.csv
│   ├── paginas.csv
│   ├── paises.csv
│   └── relatorio-diagnostico-inicial.html   ← relatório original manual (arquivo)
│
├── 2026-05/                    ← Período 1: Maio 2026 (1–31 Mai 2026, 31 dias) ✓ COMPLETO
│   ├── grafico.csv
│   ├── consultas.csv
│   ├── paginas.csv
│   └── paises.csv
│
└── 2026-06/                    ← Período 2: Junho 2026 — aguarda dados (exportar na 1ª semana de Jul)
```

---

## Como funciona o relatório

`relatorio-seo.html` carrega `seo-data.js` como script e constrói toda a interface dinamicamente.
O ficheiro `seo-data.js` contém um array `SEO_DATA.periods[]` — cada elemento é um mês.
Quando abres o HTML no browser, mostra sempre o período mais recente com:
- KPIs com deltas vs. período anterior
- Leitura rápida (observations)
- Gráfico diário de cliques e impressões
- Top queries com variação de posição
- Top páginas com alerta de 0% CTR
- Distribuição por países
- Gráficos de tendência acumulada (todos os períodos)
- Painel de acções com histórico de execução

---

## Rotina mensal — passo a passo

### Passo 1 — Exportar os dados do Google Search Console

1. Vai a [search.google.com/search-console](https://search.google.com/search-console)
2. Selecciona a propriedade `https://www.sallus.pt/`
3. Menu lateral: **Desempenho → Resultados de pesquisa**
4. Define o intervalo de datas: **personalizado** → 1º ao último dia do mês anterior
5. Certifica que estão activos os 4 botões: Cliques totais, Impressões totais, CTR médio, Posição média
6. Exporta os seguintes 4 separadores (botão "Exportar" → CSV):

| Separador no GSC | Guardar como |
|-----------------|-------------|
| Gráfico (linha temporal) | `grafico.csv` |
| Consultas | `consultas.csv` |
| Páginas | `paginas.csv` |
| Países | `paises.csv` |

> **Não exportar:** Dispositivos, Aspeto da pesquisa, Filtros — não têm sinal útil para análise mensal.

7. Cria a pasta `report-seo/YYYY-MM/` (ex: `2026-06`) e coloca os 4 CSVs lá dentro.
   Os ficheiros devem ter exactamente esses nomes em minúsculas sem acentos.

### Passo 2 — Ler os CSVs para preencher o template

Os CSVs do GSC têm este formato (separador: vírgula, primeira linha é cabeçalho):

**`grafico.csv`** — uma linha por dia:
```
Data,Cliques,Impressões,CTR,Posição
2026-06-01,0,8,0%,12.5
2026-06-02,1,11,9.09%,7.2
...
```

**`consultas.csv`** — uma linha por query:
```
Principais consultas,Cliques,Impressões,CTR,Posição
sallus,5,62,8.06%,6.23
sallus guard,0,4,0%,3
...
```

**`paginas.csv`** — uma linha por URL:
```
Páginas mais visitadas,Cliques,Impressões,CTR,Posição
https://www.sallus.pt/pt,4,45,8.88%,8.1
...
```

**`paises.csv`** — uma linha por país:
```
País,Cliques,Impressões,CTR,Posição
Portugal,9,187,4.81%,7.8
Espanha,3,42,7.14%,9.2
...
```

### Passo 3 — Adicionar o novo período ao `seo-data.js`

Abre `seo-data.js`. No fundo do array `SEO_DATA.periods`, adiciona um novo objecto seguindo o template:

```javascript
{
  id: "2026-06",
  label: "Junho 2026",
  shortLabel: "Jun 26",
  dateRange: "1 jun – 30 jun 2026",
  days: 30,
  issuedOn: "2026-07-02",   // data em que o relatório foi gerado/entregue

  // Estes 4 valores vêm da barra de resumo no topo do GSC (não dos CSVs)
  clicks: 0,
  impressions: 0,
  ctr: 0.00,       // percentagem como número: 5.51% → 5.51
  position: 0.0,   // média ponderada — ver nota abaixo

  // Linha a linha do grafico.csv
  daily: [
    { date: "2026-06-01", clicks: 0, impressions: 0 },
    // uma entrada por dia do mês
  ],

  // Top 25 do consultas.csv, ordenado por impressões (decrescente)
  queries: [
    { q: "sallus", clicks: 5, impressions: 62, ctr: 8.06, pos: 6.23 },
    // ctr como número: 8.06% → 8.06
  ],

  // Top 20 do paginas.csv, ordenado por impressões (decrescente)
  // Usar só o path, não o URL completo: "/pt" em vez de "https://www.sallus.pt/pt"
  pages: [
    { url: "/pt", clicks: 4, impressions: 45, ctr: 8.88, pos: 8.1 },
  ],

  // Top 15 do paises.csv — adicionar emoji de bandeira
  countries: [
    { name: "Portugal",  flag: "🇵🇹", clicks: 9,  impressions: 187, ctr: 4.81, pos: 7.8 },
    { name: "Espanha",   flag: "🇪🇸", clicks: 3,  impressions: 42,  ctr: 7.14, pos: 9.2 },
    { name: "França",    flag: "🇫🇷", clicks: 0,  impressions: 12,  ctr: 0,    pos: 14.1 },
    { name: "Itália",    flag: "🇮🇹", clicks: 0,  impressions: 8,   ctr: 0,    pos: 18.3 },
    { name: "Brasil",    flag: "🇧🇷", clicks: 1,  impressions: 5,   ctr: 20,   pos: 6.0 },
    // outros países conforme aparecem no CSV
  ],

  // Escrito manualmente: 2-4 frases com a leitura do mês
  // O que correu bem, o que piorou, o que explica os números
  // Usar aspas simples ' dentro do texto se precisar de aspas (NUNCA aspas duplas dentro de aspas duplas)
  observations: "Resumo em 2-3 frases do que aconteceu este mês.",

  // Acções identificadas para este período
  // No próximo mês, actualizar o status de cada uma para reflectir o que foi feito
  actions: [
    {
      text: "Descrição da acção",
      priority: "alta",      // alta | media | baixa
      status: "pendente",    // pendente | em-progresso | completado | adiado
      context: "Contexto opcional — porquê esta acção, qual o impacto esperado"
    },
  ]
}
```

**Nota sobre `position`:** O GSC mostra a posição média global no topo da página. Usa esse valor directamente. Se precisares de calcular manualmente a partir do `grafico.csv`, a fórmula é média ponderada: `sum(posição × impressões) / sum(impressões)` — mas o valor do GSC overview é mais fiável.

**Nota sobre URLs de páginas:** Remove sempre o domínio. `https://www.sallus.pt/pt/blog/artigo` → `/pt/blog/artigo`.

**Nota sobre `observations`:** NUNCA usar aspas duplas `"` dentro do texto — usa aspas simples `'` se precisares de citar algo. Aspas duplas dentro de uma string JavaScript com aspas duplas partem o ficheiro.

### Passo 4 — Verificar o relatório

Abre `relatorio-seo.html` no browser. Deverás ver o novo período seleccionado automaticamente (é sempre o último do array).

Se os gráficos não aparecerem ou os KPIs estiverem a zero, há provavelmente um erro de sintaxe no `seo-data.js`. Verifica com:
```bash
node --check seo-data.js
```

### Passo 5 — Commit e push

```bash
cd report-seo
git add -A
git commit -m "feat(seo): add June 2026 period"
git push origin main
```

O remote está configurado para `git@github.com-hephaesnus:Hephaesnus/report-seo.git` (conta GitHub Hephaesnus).

---

## Instruções para Coding Agent

Se estás a usar um AI Coding Agent (Claude Code ou similar) para gerar o relatório, passa-lhe estas instruções:

> Lê os ficheiros CSV em `report-seo/YYYY-MM/` (grafico.csv, consultas.csv, paginas.csv, paises.csv).
> Lê o ficheiro `seo-data.js` para ver o formato do array `SEO_DATA.periods` e o PERIOD TEMPLATE no topo.
> Cria um novo objecto de período com os dados dos CSVs e adiciona-o ao final do array.
> Regras: CTR como número (5.51% → 5.51), URL das páginas sem domínio (/pt não https://...), aspas simples no campo observations, top 25 queries por impressões, top 20 páginas por impressões, top 15 países.
> Depois de adicionar, corre `node --check seo-data.js` para verificar sintaxe.

---

## Referências de bandeiras por país

| País | Emoji |
|------|-------|
| Portugal | 🇵🇹 |
| Espanha | 🇪🇸 |
| França | 🇫🇷 |
| Itália | 🇮🇹 |
| Brasil | 🇧🇷 |
| Reino Unido | 🇬🇧 |
| Alemanha | 🇩🇪 |
| Estados Unidos | 🇺🇸 |
| Países Baixos | 🇳🇱 |
| Bélgica | 🇧🇪 |
| Suíça | 🇨🇭 |
| Polónia | 🇵🇱 |
| Angola | 🇦🇴 |
| Moçambique | 🇲🇿 |

---

## Histórico de períodos

| ID | Período | Dias | Estado |
|----|---------|------|--------|
| `2026-launch` | 29 Mar – 12 Mai 2026 | 45 | ✓ Completo (período de referência) |
| `2026-05` | 1–31 Mai 2026 | 31 | ✓ Completo — emitido 7 Jun 2026 |
| `2026-06` | 1–30 Jun 2026 | 30 | ⏳ Exportar na 1ª semana de Julho |
| `2026-07` | 1–31 Jul 2026 | 31 | ⏳ Exportar na 1ª semana de Agosto |
