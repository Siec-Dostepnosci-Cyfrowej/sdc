---
id: 16-standard-metadanych
title: Standard metadanych
description: Standard minimalnych i rozszerzonych metadanych wymaganych dla zasobów cyfrowych.
sidebar_label: Standard metadanych
sidebar_position: 16
keywords: [metadane, identyfikator, status, kategoria archiwalna, powiązanie ze sprawą]
tags: [cykl-zycia-tik, standard]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Standard metadanych

## Cel

Celem standardu jest określenie metadanych potrzebnych do zarządzania zasobem cyfrowym w całym cyklu życia: od utworzenia i publikacji, przez przegląd, archiwizację, migrację i wycofanie, aż po przekazanie albo brakowanie.

## Zakres

Standard stosuje się do dokumentów elektronicznych, treści BIP i WWW, załączników, multimediów, rekordów baz danych, eksportów systemowych, paczek archiwalnych, zasobów historycznych oraz danych systemowych i konfiguracji.

## Zasady

Metadane są warunkiem zachowania kontekstu. Bez metadanych zasób może pozostać technicznie dostępny, ale traci zdolność do wykazania pochodzenia, statusu, podstawy publikacji, powiązania ze sprawą, kategorii archiwalnej i decyzji o dalszym postępowaniu.

Metadane powinny być utrzymywane w systemie źródłowym, rejestrze, repozytorium albo paczce archiwalnej. Nie powinny być przechowywane wyłącznie w nazwie pliku.

## Wymagania minimalne

Każdy zasób cyfrowy powinien mieć co najmniej:

- identyfikator,
- tytuł,
- typ zasobu,
- datę utworzenia albo publikacji,
- właściciela zasobu,
- obecny status,
- lokalizację albo adres URL,
- format,
- datę ostatniej aktualizacji albo przeglądu.

Te metadane pozwalają ustalić, czym jest zasób, gdzie się znajduje, kto odpowiada za jego dalsze utrzymanie i jaki ma status zgodnie z [Modelem statusów zasobów](./07-model-statusow-zasobow.md).

## Wymagania rozszerzone

Dla zasobów publikowanych, migrowanych, archiwizowanych albo wycofywanych należy utrzymywać także:

- autora albo twórcę,
- źródło,
- podstawę publikacji,
- powiązanie ze sprawą,
- klasę JRWA,
- kategorię archiwalną,
- wersję,
- historię zmian,
- informację o dostępności cyfrowej,
- informację o danych osobowych,
- decyzję o wycofaniu albo archiwizacji,
- sposób dalszego dostępu,
- powiązane zasoby i załączniki.

## Metadane dla archiwizacji i przekazania

Dla zasobów przekazywanych do archiwum zakładowego, repozytorium archiwalnego albo przygotowywanych do przekazania do archiwum państwowego wymagany jest pełniejszy zestaw metadanych:

- identyfikator paczki albo eksportu,
- system źródłowy,
- zakres paczki,
- struktura folderów albo danych,
- formaty plików,
- sumy kontrolne,
- data archiwizacji,
- osoba przygotowująca,
- potwierdzenie kompletności,
- ograniczenia dostępu,
- kategoria archiwalna i okres przechowywania,
- informacja o podpisach, pieczęciach albo znacznikach czasu,
- protokół przekazania,
- opis danych systemowych i konfiguracji oraz relacji między systemami.

## Wymagania rozszerzone dla migracji

Migracja wymaga metadanych technicznych i logicznych: mapowania pól, identyfikatorów źródłowych i docelowych, formatu eksportu, daty eksportu, wyniku testu odtworzenia, informacji o błędach i decyzji dotyczącej danych nieprzeniesionych.

## Błędy

Najczęstsze błędy to brak właściciela, brak statusu, brak dat, brak powiązania ze sprawą, brak informacji o wersji, ręczne dopisywanie metadanych tylko w nazwie pliku, utrata metadanych przy eksporcie i nieuwzględnienie danych o dostępności.

## Konsekwencje niespełnienia

Brak metadanych może uniemożliwić kwalifikację archiwalną, migrację, przekazanie do archiwum, obsługę wniosku o informację publiczną, ocenę RODO, naprawę dostępności i ustalenie odpowiedzialności.

Zasób bez metadanych nie powinien być usuwany. Powinien otrzymać status do przeglądu albo wymagający uzupełnienia metadanych i zostać oceniony według [Modelu decyzyjnego](./08-model-decyzyjny.md).

## Powiązania

Standard wspiera [Procedurę archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md), [Procedurę migracji danych](./13-procedura-migracji-danych.md), [Procedurę kwalifikacji archiwalnej](./14-procedura-kwalifikacji-archiwalnej.md) i [Procedurę przekazania do archiwum](./15-procedura-przekazania-do-archiwum.md). Metadane są wymagane w każdej fazie [Modelu cyklu życia](./06-model-cyklu-zycia.md), opisują status z [Modelu statusów zasobów](./07-model-statusow-zasobow.md), umożliwiają decyzje z [Modelu decyzyjnego](./08-model-decyzyjny.md) i ograniczają ryzyka z [Modelu ryzyk](./09-model-ryzyk.md).
