---
id: Flowchart1
title: Przykładowy workflow (diagram) procesu weryfikacji treści przed publikacją
opracował: Aleksandra Cybulska
data utworzenia: 17 listopada 2025 r.
---

## Przykładowy workflow (diagram)

```mermaid
flowchart TD
    A[Autor treści] --> B[Przygotowanie materiału zgodnie z zasadami dostępności]
    B --> C[Weryfikacja techniczna przez osobę odpowiedzialną]
    C -->|Braki| D[Zwrot do autora z listą poprawek]
    C -->|OK| E[Akceptacja]
    E --> F[Publikacja w kanałach cyfrowych]

    %% Oddzielny proces dla social media
    B --> G[Publikacja w mediach społecznościowych]
    G --> H[Okresowy przegląd treści opublikowanych w mediach społecznościowych]
    H -->|Braki| I[Informacja zwrotna do autora + ustalenie terminu poprawek]
    I --> H[Okresowy przegląd treści opublikowanych w mediach społecznościowych]
    H -->|OK| E[Akceptacja]
