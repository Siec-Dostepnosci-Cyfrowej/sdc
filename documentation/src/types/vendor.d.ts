// Deklaracje dla zależności, które nie dostarczają własnych typów.

// Plugin jest czystym JavaScriptem i nie ma pliku .d.ts.
declare module '@barrierenlos/docusaurus-prerender-mermaid/remark';

// mammoth udostępnia convertToMarkdown w czasie działania, ale pomija je we
// własnych deklaracjach typów. Interfejs Mammoth nie jest eksportowany, więc
// nie da się go rozszerzyć — stąd osobny typ do rzutowania w miejscu użycia.
declare module 'mammoth-markdown' {
  export type MammothWithMarkdown = {
    convertToMarkdown: (
      input: {arrayBuffer: ArrayBuffer},
      options?: unknown,
    ) => Promise<{value: string; messages: unknown[]}>;
  };
}
