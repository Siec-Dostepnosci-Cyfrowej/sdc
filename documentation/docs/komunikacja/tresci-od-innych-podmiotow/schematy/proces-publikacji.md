---
title: Proces publikacji treści pochodzących od innych podmiotów
keywords: [dostępność cyfrowa, publikacja treści, treści zewnętrzne, BIP, informacja publiczna, WCAG 2.2, wyłączenia ustawowe]
tags: [komunikacja, dostępność cyfrowa, publikacja, administracja publiczna]
ostatnia_aktualizacja: 27 kwietnia 2026 r.
---
## Charakter materiału

Ten materiał ma charakter wdrożeniowy i wspiera stosowanie zalecenia.

Nie zastępuje oceny prawnej ani indywidualnej decyzji organizacji.

Model A/B/C/D jest pomocniczym modelem operacyjnym, który porządkuje możliwe ścieżki postępowania. Nie zastępuje indywidualnej oceny obowiązku publikacji, możliwości dostosowania materiału, przesłanek wyłączenia oraz obowiązku zapewnienia dostępu do informacji.

## Diagram procesu

```mermaid
flowchart TD
    A[Materiał od innego podmiotu] --> B[Sprawdzenie kompletności]
    B --> C{Czy publikacja jest obowiązkowa?}
    C --> D[Ocena dostępności]
    D --> E{Czy materiał jest dostępny?}
    E -->|Tak| F[Publikacja]
    E -->|Nie| G{Czy można dostosować materiał?}
    G -->|Tak| H[Dostosowanie materiału]
    H --> F
    G -->|Nie| I{Czy można zapewnić dostęp do informacji w innej formie?}
    I -->|Tak| J[Publikacja z działaniami uzupełniającymi]
    I -->|Nie| K{Czy istnieje podstawa wyłączenia?}
    K -->|Tak| L[Publikacja z uzasadnieniem i dokumentacją]
    K -->|Nie| M[Odmowa publikacji albo ponowna kwalifikacja]
    F --> N[Dokumentowanie decyzji]
    J --> N
    L --> N
    M --> N
    N --> O[Obsługa zgłoszeń po publikacji]
```

## Parametry decyzyjne

1. Co to za materiał?
2. Kto go wytworzył?
3. Czy podmiot publikujący może go zmienić?
4. Czy publikacja jest obowiązkowa?
5. Czy materiał spełnia wymagania dostępności?
6. Czy możliwe jest dostosowanie?
7. Czy można zapewnić dostęp do informacji w inny sposób?
8. Czy istnieją podstawy zastosowania wyłączenia?
9. Jaka decyzja jest uzasadniona?
10. Jak decyzja zostaje udokumentowana?
