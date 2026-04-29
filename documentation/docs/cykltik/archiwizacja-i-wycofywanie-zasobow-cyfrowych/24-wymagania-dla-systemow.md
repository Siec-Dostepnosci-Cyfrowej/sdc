---
id: 24-wymagania-dla-systemow
title: Wymagania dla systemów
description: Minimalne wymagania dla systemów przechowujących, publikujących i eksportujących zasoby cyfrowe.
sidebar_label: Wymagania systemowe
sidebar_position: 24
keywords: [wymagania systemowe, CMS, BIP, repozytorium, eksport, logi]
tags: [cykl-zycia-tik, systemy]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Wymagania dla systemów

## Cel

Celem dokumentu jest określenie minimalnych wymagań dla systemów, które tworzą, przechowują, publikują, archiwizują, migrują albo wycofują zasoby cyfrowe. Brak tych wymagań może oznaczać brak realnej możliwości archiwizacji, migracji albo udokumentowanego wycofania.

## Zakres

Wymagania dotyczą CMS, BIP, EZD, repozytoriów plików, aplikacji mobilnych, systemów dziedzinowych, baz danych, systemów formularzy, platform projektowych i usług zewnętrznych, które przechowują zasoby publiczne albo dokumentację podmiotu.

## Zasady

System powinien wspierać cały [Model cyklu życia](./06-model-cyklu-zycia.md), a nie tylko etap publikacji albo bieżącej obsługi. Już przy zakupie, wdrożeniu albo modernizacji systemu należy przewidzieć statusy, eksport, metadane, logi, migrację i wycofanie.

System, który nie zapewnia eksportu danych, metadanych i dokumentacji technicznej, tworzy istotne ryzyko dla podmiotu publicznego. Takie ryzyko powinno być oceniane przed wdrożeniem i przed przedłużeniem umowy.

## Wymagania minimalne

System powinien zapewniać:

- metadane dla zasobów,
- statusy zasobów zgodne z [Modelem statusów zasobów](./07-model-statusow-zasobow.md),
- eksport danych i plików,
- eksport metadanych,
- wersjonowanie dokumentów i treści,
- logi zmian i działań administracyjnych,
- zarządzanie uprawnieniami,
- oznaczanie treści archiwalnych,
- możliwość wskazania daty publikacji i wycofania,
- dokumentację techniczną,
- możliwość migracji do systemu docelowego.

## Metadane

System powinien umożliwiać zapis co najmniej identyfikatora, tytułu, właściciela, dat, statusu, formatu, lokalizacji, powiązania ze sprawą, kategorii archiwalnej, podstawy publikacji i informacji o dostępności. Zakres powinien być zgodny ze [Standardem metadanych](./16-standard-metadanych.md).

## Statusy

System powinien umożliwiać oznaczanie zasobów jako aktywne, do przeglądu, nieaktualne, archiwalne, wycofane z publikacji, przeznaczone do migracji, zmigrowane, przekazane albo wymagające dostępu alternatywnego.

## Eksport danych

Eksport powinien obejmować dane, dokumenty, załączniki, metadane, wersje, relacje, statusy i informacje o publikacji. Eksport powinien być możliwy w formatach udokumentowanych, możliwych do kontroli i ponownego wykorzystania.

## Wersjonowanie i logi

System powinien umożliwiać ustalenie, kto utworzył, zmienił, opublikował, zarchiwizował albo wycofał zasób. Logi powinny wspierać ślad audytowy opisany w [Standardzie integralności i autentyczności](./18-standard-integralnosci-i-autentycznosci.md).

## Uprawnienia

System powinien rozróżniać role autora, redaktora, właściciela zasobu, administratora, właściciela systemu i osoby zatwierdzającej. Po nadaniu statusu archiwalnego możliwość edycji powinna być ograniczona.

## Oznaczanie archiwum

CMS i BIP powinny umożliwiać oznaczanie treści jako archiwalnych, nieaktualnych albo dostępnych na wniosek. Oznaczenie powinno być widoczne dla użytkownika, a jego metadane powinny być dostępne dla administratora i właściciela zasobu.

## Wariant minimalny (system ograniczony)

Jeżeli istniejący system nie posiada eksportu danych, logów, metadanych albo wersjonowania, podmiot powinien wdrożyć minimalny sposób ograniczenia ryzyka do czasu modernizacji, migracji albo wycofania systemu.

W wariancie minimalnym należy:

- wykonać manualną kopię plików,
- wykonać zrzut bazy danych, jeżeli jest to możliwe,
- sporządzić wykaz URL,
- sporządzić wykaz plików,
- opisać brak funkcji systemu, w szczególności brak eksportu, logów, metadanych albo wersjonowania,
- sporządzić protokół braków,
- wskazać właściciela systemu i osobę odpowiedzialną za ręczne utrzymanie wykazu,
- zaplanować naprawę, migrację albo wycofanie systemu.

Wariant minimalny jest rozwiązaniem przejściowym. Nie powinien być traktowany jako docelowy standard dla nowego systemu albo zamówienia.

## Ryzyka i konsekwencje niespełnienia

Brak spełnienia wymagań może oznaczać brak możliwości archiwizacji, brak migracji, utratę metadanych, brak historii publikacji, brak możliwości wykazania decyzji, zależność od wykonawcy i ryzyko naruszenia obowiązków prawnych.

System niespełniający wymagań powinien zostać objęty planem naprawczym, migracją albo oceną wycofania zgodnie z [Kryteriami wycofania systemu](./25-kryteria-wycofania-systemu.md).

## Powiązania

Wymagania wynikają z [Modelu cyklu życia](./06-model-cyklu-zycia.md), [Modelu decyzyjnego](./08-model-decyzyjny.md), [Modelu ryzyk](./09-model-ryzyk.md), [Procedury migracji danych](./13-procedura-migracji-danych.md), [Procedury wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Standardu metadanych](./16-standard-metadanych.md) i [Standardu formatów archiwalnych](./17-standard-formatow-archiwalnych.md).
