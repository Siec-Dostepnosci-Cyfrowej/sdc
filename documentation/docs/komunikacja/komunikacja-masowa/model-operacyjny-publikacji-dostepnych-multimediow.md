---
id: model-operacyjny-publikacji-dostepnych-multimediow
title: Model operacyjny publikacji dostępnych multimediów
description: Model operacyjny opisujący proces przygotowania i publikacji dostępnych materiałów multimedialnych.
sidebar_label: Model operacyjny
sidebar_position: 10
keywords: [dostępność cyfrowa, model operacyjny, publikacja, multimedia, proces]
tags: [model operacyjny, komunikacja, dostępność cyfrowa]
opracowanie: Bartłomiej Wilk
wspolpraca: Joanna Kapa, Damian Żłobicki, Aleksandra Cybulska
data_zgloszenia: 16 kwietnia 2026 r.
ostatnia_aktualizacja: 28 kwietnia 2026 r.
wersja_robocza: true
---

## Cel

Model określa jednolity przebieg procesu przygotowania, weryfikacji i publikacji materiałów dostępnych.

## Zakres

Model obejmuje publikację materiałów w:
- systemie zarządzania treścią (CMS),
- Biuletynie Informacji Publicznych (BIP),
- serwisie internetowym,
- mediach społecznościowych,
- platformie zewnętrznej.

Obejmuje materiały wideo, audio, grafiki i treści tekstowe.

## Materiały zewnętrzne

Model stosuje się również do materiałów zewnętrznych, w tym:
- materiału od wykonawcy,
- materiału od partnera,
- nagrania transmisji,
- materiału osadzanego z platformy zewnętrznej.

Wymagania dostępności dla materiałów zewnętrznych należy określać już na etapie:
- zamówienia,
- zlecenia,
- briefu,
- umowy,
- odbioru materiału.

## Role i odpowiedzialność

- **Autor/redaktor:** przygotowanie treści i struktury komunikatu.
- **Osoba opracowująca dostępność:** napisy, transkrypcje, opisy alternatywne, treści równoważne.
- **Osoba weryfikująca:** kontrola wymagań przed publikacją.
- **Osoba publikująca:** publikacja techniczna i kontrola po publikacji.
- **Nadzór procesowy:** monitoring błędów i doskonalenie procesu.

## Schemat procesu

```mermaid
flowchart TD
    A[Planowanie komunikatu] --> B[Przygotowanie treści lub materiału]
    B --> C[Opracowanie elementów dostępności]
    C --> D[Weryfikacja przed publikacją]
    D --> E{Czy wymagania są spełnione?}
    E -- Tak --> F[Publikacja]
    E -- Nie --> G{Czy zachodzi sytuacja wyjątkowa?}
    G -- Nie --> H[Poprawa materiału]
    H --> D
    G -- Tak --> I[Decyzja osoby odpowiedzialnej]
    I --> J[Udokumentowanie odstępstwa]
    J --> K[Publikacja warunkowa]
    K --> L[Uzupełnienie braków w terminie]
    L --> M[Kontrola po publikacji]
    F --> M
    M --> N[Monitoring zgłoszeń i błędów]
    N --> O[Działania korygujące i doskonalenie procesu]
```

## Zasady decyzyjne

Materiał publikuje się po pozytywnej weryfikacji.

Jeżeli wymagania nie są spełnione, materiał wraca do poprawy albo przechodzi ścieżkę procedury wyjątkowej zgodnie z [Procedurą postępowania w sytuacjach wyjątkowych](./procedura-sytuacji-wyjatkowych.md).

## Powiązane dokumenty

- [Minimalne wymagania dostępności](./minimalne-wymagania.md)
- [Mapa odpowiedzialności w procesie publikacji](./mapa-odpowiedzialnosci.md)
- [Listy kontrolne publikacji](./listy-kontrolne-index.md)
- [05. Standard tworzenia dostępnych materiałów audio](./05-standard-tworzenia-dostepnych-materialow-audio.md)
- [Procedura postępowania w sytuacjach wyjątkowych](./procedura-sytuacji-wyjatkowych.md)
