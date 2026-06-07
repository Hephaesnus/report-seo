/**
 * Sallus SEO — Master Data File
 *
 * MONTHLY UPDATE WORKFLOW
 * ────────────────────────
 * 1. On the 1st–3rd of the month, go to Google Search Console → Desempenho
 * 2. Set date range: custom, 1st to last day of the previous calendar month
 * 3. Export these 4 tabs as CSV:
 *      - Gráfico (daily trend)         → save as: grafico.csv
 *      - Consultas (queries)           → save as: consultas.csv
 *      - Páginas (pages)               → save as: paginas.csv
 *      - Países (countries)            → save as: paises.csv
 * 4. Create folder: report-seo/YYYY-MM/  and put the 4 CSVs inside
 * 5. Copy the PERIOD TEMPLATE below and fill in the values
 * 6. Append the new period object to the SEO_DATA.periods array
 * 7. Open relatorio-seo.html in browser — report auto-updates
 *
 * PERIOD TEMPLATE (copy this block to add a new month)
 * ─────────────────────────────────────────────────────
 *  {
 *    id: "YYYY-MM",
 *    label: "Mês YYYY",           // e.g. "Maio 2026"
 *    shortLabel: "Mai 26",        // used on chart axis
 *    dateRange: "1 mai – 31 mai 2026",
 *    days: 31,
 *
 *    // SUMMARY — from GSC overview bar at the top
 *    clicks: 0,
 *    impressions: 0,
 *    ctr: 0.00,       // percentage, e.g. 1.75 = 1.75%
 *    position: 0.0,
 *
 *    // DAILY — from grafico.csv (one object per row)
 *    daily: [
 *      { date: "2026-05-01", clicks: 0, impressions: 0 },
 *      // ...
 *    ],
 *
 *    // QUERIES — from consultas.csv (top 25, sort by impressions)
 *    queries: [
 *      { q: "query text", clicks: 0, impressions: 0, ctr: 0.00, pos: 0.0 },
 *      // ...
 *    ],
 *
 *    // PAGES — from paginas.csv (top 20, sort by impressions)
 *    pages: [
 *      { url: "/pt", clicks: 0, impressions: 0, ctr: 0.00, pos: 0.0 },
 *      // ...
 *    ],
 *
 *    // COUNTRIES — from paises.csv (top 15)
 *    countries: [
 *      { name: "Portugal", flag: "🇵🇹", clicks: 0, impressions: 0, ctr: 0.00, pos: 0.0 },
 *      // ...
 *    ],
 *
 *    // ISSUE DATE — when this report was generated/delivered
 *    issuedOn: "YYYY-MM-DD",  // e.g. "2026-06-07"
 *
 *    // NARRATIVE — written by you after analysis
 *    observations: "Resumo em 2-3 frases do que aconteceu este mês.",
 *
 *    // ACTIONS — for this period
 *    actions: [
 *      { text: "Descrição da ação", priority: "alta", status: "pendente", context: "Contexto opcional" },
 *      // priority: alta | media | baixa
 *      // status:   pendente | em-progresso | completado | adiado
 *    ]
 *  }
 */

const SEO_DATA = {
  site: "sallus.pt",
  property: "https://www.sallus.pt/",

  periods: [

    // ═══════════════════════════════════════════════════════
    // PERIOD 0 — Diagnóstico Inicial
    // Mar 29 – Mai 12 2026 (45 dias)
    // NOTA: Período de referência. 45 dias ≠ 1 mês padrão.
    // Não comparar valores absolutos directamente com períodos mensais.
    // ═══════════════════════════════════════════════════════
    {
      id: "launch",
      label: "Diagnóstico Inicial",
      shortLabel: "Lançamento",
      dateRange: "29 mar – 12 mai 2026",
      issuedOn: "2026-05-15",
      days: 45,

      clicks: 9,
      impressions: 515,
      ctr: 1.75,
      position: 25.8,

      daily: [
        { date: "2026-03-29", clicks: 0, impressions: 0 },
        { date: "2026-03-30", clicks: 0, impressions: 0 },
        { date: "2026-03-31", clicks: 0, impressions: 3 },
        { date: "2026-04-01", clicks: 0, impressions: 3 },
        { date: "2026-04-02", clicks: 1, impressions: 9 },
        { date: "2026-04-03", clicks: 0, impressions: 2 },
        { date: "2026-04-04", clicks: 0, impressions: 3 },
        { date: "2026-04-05", clicks: 0, impressions: 5 },
        { date: "2026-04-06", clicks: 1, impressions: 6 },
        { date: "2026-04-07", clicks: 0, impressions: 3 },
        { date: "2026-04-08", clicks: 0, impressions: 5 },
        { date: "2026-04-09", clicks: 0, impressions: 9 },
        { date: "2026-04-10", clicks: 0, impressions: 17 },
        { date: "2026-04-11", clicks: 0, impressions: 26 },
        { date: "2026-04-12", clicks: 0, impressions: 21 },
        { date: "2026-04-13", clicks: 0, impressions: 19 },
        { date: "2026-04-14", clicks: 0, impressions: 30 },
        { date: "2026-04-15", clicks: 0, impressions: 26 },
        { date: "2026-04-16", clicks: 0, impressions: 13 },
        { date: "2026-04-17", clicks: 0, impressions: 26 },
        { date: "2026-04-18", clicks: 0, impressions: 11 },
        { date: "2026-04-19", clicks: 0, impressions: 19 },
        { date: "2026-04-20", clicks: 0, impressions: 40 },
        { date: "2026-04-21", clicks: 0, impressions: 28 },
        { date: "2026-04-22", clicks: 1, impressions: 30 },
        { date: "2026-04-23", clicks: 0, impressions: 20 },
        { date: "2026-04-24", clicks: 0, impressions: 8 },
        { date: "2026-04-25", clicks: 1, impressions: 8 },
        { date: "2026-04-26", clicks: 0, impressions: 2 },
        { date: "2026-04-27", clicks: 1, impressions: 7 },
        { date: "2026-04-28", clicks: 0, impressions: 10 },
        { date: "2026-04-29", clicks: 0, impressions: 2 },
        { date: "2026-04-30", clicks: 0, impressions: 16 },
        { date: "2026-05-01", clicks: 0, impressions: 4 },
        { date: "2026-05-02", clicks: 0, impressions: 2 },
        { date: "2026-05-03", clicks: 0, impressions: 10 },
        { date: "2026-05-04", clicks: 0, impressions: 11 },
        { date: "2026-05-05", clicks: 0, impressions: 11 },
        { date: "2026-05-06", clicks: 0, impressions: 6 },
        { date: "2026-05-07", clicks: 1, impressions: 8 },
        { date: "2026-05-08", clicks: 1, impressions: 12 },
        { date: "2026-05-09", clicks: 0, impressions: 1 },
        { date: "2026-05-10", clicks: 0, impressions: 5 },
        { date: "2026-05-11", clicks: 1, impressions: 5 },
        { date: "2026-05-12", clicks: 1, impressions: 13 }
      ],

      queries: [
        { q: "sallus",                              clicks: 4, impressions: 99,  ctr: 4.04, pos: 3.87  },
        { q: "fire retardant",                      clicks: 0, impressions: 78,  ctr: 0,    pos: 60.55 },
        { q: "what does fire retardant mean",       clicks: 0, impressions: 52,  ctr: 0,    pos: 62.56 },
        { q: "sallus guard",                        clicks: 0, impressions: 33,  ctr: 0,    pos: 3.48  },
        { q: "how to protect your property from fire", clicks: 0, impressions: 15, ctr: 0, pos: 75.33 },
        { q: "what is fire retardant",              clicks: 0, impressions: 9,   ctr: 0,    pos: 46.0  },
        { q: "fire retardants",                     clicks: 0, impressions: 7,   ctr: 0,    pos: 63.29 },
        { q: "hephaesnus",                          clicks: 0, impressions: 6,   ctr: 0,    pos: 12.0  },
        { q: "what is fire retardant made of",      clicks: 0, impressions: 4,   ctr: 0,    pos: 45.75 },
        { q: "how does fire retardant work",        clicks: 0, impressions: 3,   ctr: 0,    pos: 20.67 },
        { q: "retardant",                           clicks: 0, impressions: 3,   ctr: 0,    pos: 23.0  },
        { q: "retardant incendie",                  clicks: 0, impressions: 2,   ctr: 0,    pos: 13.0  },
        { q: "produit retardant incendie",          clicks: 0, impressions: 2,   ctr: 0,    pos: 48.0  },
        { q: "fire retard",                         clicks: 0, impressions: 1,   ctr: 0,    pos: 7.0   },
        { q: "retard fire",                         clicks: 0, impressions: 1,   ctr: 0,    pos: 7.0   },
        { q: "retardant feu",                       clicks: 0, impressions: 1,   ctr: 0,    pos: 10.0  },
        { q: "protect from fire",                   clicks: 0, impressions: 1,   ctr: 0,    pos: 20.0  },
        { q: "what is in fire retardant",           clicks: 0, impressions: 1,   ctr: 0,    pos: 33.0  },
        { q: "retardante de fogo",                  clicks: 0, impressions: 1,   ctr: 0,    pos: 40.0  },
        { q: "how do fire retardants work",         clicks: 0, impressions: 1,   ctr: 0,    pos: 48.0  },
        { q: "flame retardant",                     clicks: 0, impressions: 1,   ctr: 0,    pos: 54.0  },
        { q: "protect your home from wildfire",     clicks: 0, impressions: 1,   ctr: 0,    pos: 60.0  },
        { q: "retardant fire",                      clicks: 0, impressions: 1,   ctr: 0,    pos: 61.0  },
        { q: "protection feu",                      clicks: 0, impressions: 1,   ctr: 0,    pos: 68.0  },
        { q: "what does fire retardant do",         clicks: 0, impressions: 1,   ctr: 0,    pos: 73.0  },
        { q: "protection from fire",                clicks: 0, impressions: 1,   ctr: 0,    pos: 96.0  }
      ],

      pages: [
        { url: "/pt",                                                                clicks: 2, impressions: 26,  ctr: 7.69,  pos: 6.88  },
        { url: "/en",                                                                clicks: 1, impressions: 75,  ctr: 1.33,  pos: 3.92  },
        { url: "/pt/blog/retardante-de-fogo-para-madeira-como-escolher-aplicar",     clicks: 1, impressions: 37,  ctr: 2.7,   pos: 8.7   },
        { url: "/fr/blog/o-que-e-retardante-de-fogo-como-funciona",                 clicks: 1, impressions: 25,  ctr: 4.0,   pos: 13.0  },
        { url: "/es",                                                                clicks: 1, impressions: 21,  ctr: 4.76,  pos: 5.95  },
        { url: "/",                                                                  clicks: 1, impressions: 15,  ctr: 6.67,  pos: 4.67  },
        { url: "/fr/produto",                                                        clicks: 1, impressions: 5,   ctr: 20.0,  pos: 3.6   },
        { url: "/es/sobre",                                                          clicks: 1, impressions: 3,   ctr: 33.33, pos: 7.0   },
        { url: "/en/aplicacoes",                                                     clicks: 1, impressions: 2,   ctr: 50.0,  pos: 4.5   },
        { url: "/en/blog/o-que-e-retardante-de-fogo-como-funciona",                 clicks: 0, impressions: 182, ctr: 0,     pos: 52.97 },
        { url: "/en/blog/como-proteger-casa-incendios-florestais-guia-completo",     clicks: 0, impressions: 42,  ctr: 0,     pos: 39.29 },
        { url: "/en/produto",                                                        clicks: 0, impressions: 40,  ctr: 0,     pos: 11.47 },
        { url: "/en/",                                                               clicks: 0, impressions: 21,  ctr: 0,     pos: 5.24  },
        { url: "/en/produto/sallus-retardant-25l",                                  clicks: 0, impressions: 17,  ctr: 0,     pos: 29.41 },
        { url: "/en/faq",                                                            clicks: 0, impressions: 16,  ctr: 0,     pos: 26.0  },
        { url: "/en/produto/sallus-retardant-5l",                                   clicks: 0, impressions: 15,  ctr: 0,     pos: 26.93 },
        { url: "/pt/produto/como-funciona",                                          clicks: 0, impressions: 14,  ctr: 0,     pos: 11.79 },
        { url: "/en/produto/sallus-retardant-1l",                                   clicks: 0, impressions: 14,  ctr: 0,     pos: 19.64 },
        { url: "/it",                                                                clicks: 0, impressions: 12,  ctr: 0,     pos: 6.5   },
        { url: "/en/aplicacoes/florestal",                                           clicks: 0, impressions: 10,  ctr: 0,     pos: 5.4   }
      ],

      countries: [
        { name: "Portugal",       flag: "🇵🇹", clicks: 4, impressions: 141, ctr: 2.84, pos: 5.01  },
        { name: "Estados Unidos", flag: "🇺🇸", clicks: 0, impressions: 102, ctr: 0,    pos: 40.87 },
        { name: "Reino Unido",    flag: "🇬🇧", clicks: 0, impressions: 51,  ctr: 0,    pos: 61.69 },
        { name: "Espanha",        flag: "🇪🇸", clicks: 1, impressions: 32,  ctr: 3.12, pos: 8.38  },
        { name: "França",         flag: "🇫🇷", clicks: 2, impressions: 31,  ctr: 6.45, pos: 9.55  },
        { name: "Alemanha",       flag: "🇩🇪", clicks: 0, impressions: 22,  ctr: 0,    pos: 49.77 },
        { name: "Países Baixos",  flag: "🇳🇱", clicks: 0, impressions: 19,  ctr: 0,    pos: 58.89 },
        { name: "Itália",         flag: "🇮🇹", clicks: 0, impressions: 12,  ctr: 0,    pos: 10.33 },
        { name: "Noruega",        flag: "🇳🇴", clicks: 1, impressions: 11,  ctr: 9.09, pos: 3.27  },
        { name: "Brasil",         flag: "🇧🇷", clicks: 0, impressions: 6,   ctr: 0,    pos: 7.33  }
      ],

      observations: "Quase todos os cliques (4/9) vêm da query de marca 'sallus'. O maior problema isolado é a URL /en/blog/o-que-e-retardante-de-fogo-como-funciona com 182 impressões e 0 cliques — slug em português numa rota inglesa. França tem o CTR mais alto dos mercados-alvo (6.45%) e duas queries quase no top 10. Este diagnóstico é a baseline: os números absolutos são baixos por ser um site novo.",

      actions: [
        { text: "Traduzir slugs blog PT→EN/FR/IT/ES",     priority: "alta",  status: "pendente",  context: "/en/blog/o-que-e-retardante-de-fogo-como-funciona — 182 imp, 0 cliques. Maior fuga isolada do site." },
        { text: "Auditar canonicals apex vs www",          priority: "baixa", status: "pendente",  context: "sallus.pt e www.sallus.pt a aparecer separados no GSC. Confirmar 301 e canonical tags." },
        { text: "Investigar query 'sallus guard'",         priority: "baixa", status: "pendente",  context: "33 imp, pos 3.48, 0 cliques — combinação anómala. Possível Knowledge Panel ou produto concorrente." },
        { text: "Otimizar PDPs inglesas (1L, 5L, 25L)",   priority: "media", status: "pendente",  context: "/en/produto/sallus-retardant-1l pos 19.6, 5l pos 26.9 — título + Product JSON-LD." },
        { text: "Reforçar conteúdo francês",               priority: "baixa", status: "pendente",  context: "'retardant feu' pos 10, 'retardant incendie' pos 13 — quase top 10, vale a pena empurrar." },
        { text: "H2 com queries exatas nos artigos EN",    priority: "alta",  status: "pendente",  context: "'how does fire retardant work' pos 20.7 — adicionar H2 + parágrafo de resposta directa." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // PERIOD 1 — Maio 2026
    // Mai 1 – Mai 31 2026 (31 dias)
    // ═══════════════════════════════════════════════════════
    {
      id: "2026-05",
      label: "Maio 2026",
      shortLabel: "Mai 26",
      dateRange: "1 mai – 31 mai 2026",
      issuedOn: "2026-06-07",
      days: 31,

      clicks: 14,
      impressions: 254,
      ctr: 5.51,
      position: 6.96,

      daily: [
        { date: "2026-05-01", clicks: 0, impressions: 4  },
        { date: "2026-05-02", clicks: 0, impressions: 2  },
        { date: "2026-05-03", clicks: 0, impressions: 10 },
        { date: "2026-05-04", clicks: 0, impressions: 11 },
        { date: "2026-05-05", clicks: 0, impressions: 11 },
        { date: "2026-05-06", clicks: 0, impressions: 6  },
        { date: "2026-05-07", clicks: 1, impressions: 8  },
        { date: "2026-05-08", clicks: 1, impressions: 12 },
        { date: "2026-05-09", clicks: 0, impressions: 1  },
        { date: "2026-05-10", clicks: 0, impressions: 5  },
        { date: "2026-05-11", clicks: 1, impressions: 5  },
        { date: "2026-05-12", clicks: 1, impressions: 13 },
        { date: "2026-05-13", clicks: 1, impressions: 11 },
        { date: "2026-05-14", clicks: 1, impressions: 12 },
        { date: "2026-05-15", clicks: 0, impressions: 8  },
        { date: "2026-05-16", clicks: 1, impressions: 8  },
        { date: "2026-05-17", clicks: 0, impressions: 6  },
        { date: "2026-05-18", clicks: 0, impressions: 11 },
        { date: "2026-05-19", clicks: 0, impressions: 11 },
        { date: "2026-05-20", clicks: 1, impressions: 13 },
        { date: "2026-05-21", clicks: 1, impressions: 9  },
        { date: "2026-05-22", clicks: 0, impressions: 9  },
        { date: "2026-05-23", clicks: 1, impressions: 7  },
        { date: "2026-05-24", clicks: 0, impressions: 4  },
        { date: "2026-05-25", clicks: 1, impressions: 9  },
        { date: "2026-05-26", clicks: 1, impressions: 11 },
        { date: "2026-05-27", clicks: 0, impressions: 7  },
        { date: "2026-05-28", clicks: 1, impressions: 10 },
        { date: "2026-05-29", clicks: 0, impressions: 2  },
        { date: "2026-05-30", clicks: 1, impressions: 9  },
        { date: "2026-05-31", clicks: 0, impressions: 9  }
      ],

      // NOTA: Apenas 5 queries visíveis no GSC (vs. 26 no diagnóstico).
      // As queries informacionais EN ("fire retardant", pos 60+) desapareceram —
      // ver observações abaixo.
      queries: [
        { q: "sallus",                    clicks: 5, impressions: 62, ctr: 8.06, pos: 6.23  },
        { q: "sallus guard",              clicks: 0, impressions: 4,  ctr: 0,    pos: 3.0   },
        { q: "engineering fire retardant",clicks: 0, impressions: 3,  ctr: 0,    pos: 16.67 },
        { q: "sallus care",               clicks: 0, impressions: 1,  ctr: 0,    pos: 8.0   },
        { q: "hephaesnus",                clicks: 0, impressions: 1,  ctr: 0,    pos: 46.0  }
      ],

      pages: [
        { url: "/pt",                                                                    clicks: 5, impressions: 33, ctr: 15.15, pos: 4.48  },
        { url: "/en",                                                                    clicks: 4, impressions: 55, ctr: 7.27,  pos: 6.95  },
        { url: "/pt/blog/o-que-e-retardante-de-fogo-como-funciona",                      clicks: 2, impressions: 31, ctr: 6.45,  pos: 5.94  },
        { url: "/fr/blog/o-que-e-retardante-de-fogo-como-funciona",                      clicks: 1, impressions: 21, ctr: 4.76,  pos: 8.33  },
        { url: "/fr",                                                                    clicks: 1, impressions: 14, ctr: 7.14,  pos: 2.14  },
        { url: "/es/sobre",                                                              clicks: 1, impressions: 3,  ctr: 33.33, pos: 5.67  },
        { url: "/en/aplicacoes",                                                         clicks: 1, impressions: 2,  ctr: 50.0,  pos: 4.5   },
        { url: "/pt/blog/retardante-de-fogo-para-madeira-como-escolher-aplicar",         clicks: 0, impressions: 29, ctr: 0,     pos: 7.62  },
        { url: "/en/blog/o-que-e-retardante-de-fogo-como-funciona",                      clicks: 0, impressions: 18, ctr: 0,     pos: 11.56 },
        { url: "/en/blog/retardante-de-fogo-para-madeira-como-escolher-aplicar",         clicks: 0, impressions: 13, ctr: 0,     pos: 9.92  },
        { url: "/en/blog/como-proteger-casa-incendios-florestais-guia-completo",         clicks: 0, impressions: 13, ctr: 0,     pos: 10.23 },
        { url: "/es",                                                                    clicks: 0, impressions: 9,  ctr: 0,     pos: 10.33 },
        { url: "/en/aplicacoes/residencial",                                             clicks: 0, impressions: 6,  ctr: 0,     pos: 2.33  },
        { url: "/en/aplicacoes/industrial",                                              clicks: 0, impressions: 6,  ctr: 0,     pos: 4.67  },
        { url: "/pt/blog/como-proteger-casa-incendios-florestais-guia-completo",         clicks: 0, impressions: 6,  ctr: 0,     pos: 10.83 },
        { url: "/en/aplicacoes/florestal",                                               clicks: 0, impressions: 5,  ctr: 0,     pos: 6.6   },
        { url: "/en/sobre",                                                              clicks: 0, impressions: 4,  ctr: 0,     pos: 5.0   },
        { url: "/pt/produto/conformidade",                                               clicks: 0, impressions: 2,  ctr: 0,     pos: 5.5   },
        { url: "/pt/produto/como-funciona",                                              clicks: 0, impressions: 1,  ctr: 0,     pos: 2.0   },
        { url: "/it/faq",                                                                clicks: 0, impressions: 1,  ctr: 0,     pos: 2.0   }
      ],

      countries: [
        { name: "Portugal",       flag: "🇵🇹", clicks: 9,  impressions: 87, ctr: 10.34, pos: 5.91 },
        { name: "Noruega",        flag: "🇳🇴", clicks: 2,  impressions: 14, ctr: 14.29, pos: 2.93 },
        { name: "França",         flag: "🇫🇷", clicks: 1,  impressions: 25, ctr: 4.0,   pos: 5.24 },
        { name: "Índia",          flag: "🇮🇳", clicks: 1,  impressions: 5,  ctr: 20.0,  pos: 8.4  },
        { name: "Moçambique",     flag: "🇲🇿", clicks: 1,  impressions: 1,  ctr: 100.0, pos: 2.0  },
        { name: "Estados Unidos", flag: "🇺🇸", clicks: 0,  impressions: 33, ctr: 0,     pos: 7.94 },
        { name: "Reino Unido",    flag: "🇬🇧", clicks: 0,  impressions: 22, ctr: 0,     pos: 13.14},
        { name: "Brasil",         flag: "🇧🇷", clicks: 0,  impressions: 10, ctr: 0,     pos: 9.1  },
        { name: "Espanha",        flag: "🇪🇸", clicks: 0,  impressions: 6,  ctr: 0,     pos: 4.5  },
        { name: "Canadá",         flag: "🇨🇦", clicks: 0,  impressions: 6,  ctr: 0,     pos: 7.33 },
        { name: "Itália",         flag: "🇮🇹", clicks: 0,  impressions: 3,  ctr: 0,     pos: 7.0  }
      ],

      observations: "O site entrou na página 1 do Google: posição média passou de 25.8 para 7.0 e o CTR triplicou (1.75% → 5.51%). Cliques/dia mais do que dobraram (0.20 → 0.45/dia). Contudo, as impressões totais desceram ligeiramente (11.4 → 8.2/dia) porque as queries informacionais EN de longo alcance (\"fire retardant\" pos 60, \"what does fire retardant mean\" pos 62) desapareceram — o Google deixou de testar o site para queries onde não tem autoridade suficiente. Isto é saudável: o tráfego que chega agora está bem alinhado com o conteúdo. A correcção dos slugs PT nas rotas EN confirmou-se: /en/blog/o-que-e-retardante-de-fogo-como-funciona desceu de 182 para 18 impressões. Espanha é o sinal de alerta: 32 imp no diagnóstico → 6 imp em Maio.",

      actions: [
        // Status das ações do diagnóstico inicial (actualizar aqui):
        // - "Traduzir slugs blog PT→EN" → completado (evidenciado pela queda /en/blog: 182→18 imp)
        // - Restantes: ver status abaixo

        { text: "Investigar colapso de queries visíveis (26 → 5)",    priority: "alta",  status: "pendente",  context: "Queries EN informacionais desapareceram. Verificar no GSC se o filtro de data captura todas — pode ser threshold de volume. Confirmar se /en/blog/what-is-fire-retardant-how-it-works está a ranquear." },
        { text: "Recuperar visibilidade em Espanha",                   priority: "alta",  status: "pendente",  context: "Espanha: 32 imp → 6 imp, 1 clique → 0. Queda abrupta. Verificar hreflang /es e title tags espanholas. Pode estar relacionado com a limpeza de slugs PT." },
        { text: "Empurrar /pt/blog/o-que-e-retardante-de-fogo para top 3", priority: "media", status: "pendente", context: "Já com 6.45% CTR e pos 5.94. Adicionar internal links a este artigo e reforçar H1/título." },
        { text: "Resolver /pt/blog/retardante-de-fogo-para-madeira (29 imp, 0 cliques)", priority: "media", status: "pendente", context: "29 impressões a pos 7.62 mas CTR zero. Rever title tag e meta description PT." },
        { text: "Itália: 3 impressões, 0 cliques — verificar IT locale",  priority: "baixa", status: "pendente", context: "Era 12 imp no diagnóstico. Desceu. Verificar se hreflang IT está correcto após slug fix." },
        { text: "Auditar canonicals apex vs www",                       priority: "baixa", status: "pendente",  context: "Persistem URLs sallus.pt/ sem www em Páginas. Confirmar 301 e canonical tags." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // PERIOD 2 — Junho 2026
    // AGUARDANDO DADOS: exportar GSC para 1 jun – 30 jun 2026
    // Guardar CSVs em: report-seo/2026-06/
    // ═══════════════════════════════════════════════════════

  ]
};
