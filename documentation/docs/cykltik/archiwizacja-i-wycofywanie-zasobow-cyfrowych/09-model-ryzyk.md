---
id: 09-model-ryzyk-archiwizacji
title: Model ryzyk archiwizacji i wycofywania zasobów cyfrowych
description: Kategorie ryzyk oraz działania ograniczające przy archiwizacji, migracji i wycofywaniu zasobów cyfrowych.
sidebar_label: Model ryzyk
sidebar_position: 9
keywords: [ryzyka, archiwizacja, migracja danych, wycofywanie systemów, dane osobowe]
tags: [cykl-zycia-tik, ryzyka]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Model ryzyk archiwizacji i wycofywania zasobów cyfrowych

## Cel

Celem modelu jest wskazanie ryzyk, które należy ocenić przed archiwizacją, migracją, wycofaniem z publikacji albo wycofaniem systemu. Model pokazuje, że procedura archiwizacji i wycofywania jest narzędziem zarządzania ryzykiem, a nie wyłącznie czynnością techniczną.

## 1. Ryzyka prawne

**Opis ryzyka:** podmiot usuwa, ukrywa albo pozostawia zasób w sposób niezgodny z obowiązkami dotyczącymi dokumentacji, informacji publicznej, BIP, dostępności cyfrowej, ochrony danych osobowych albo przepisów branżowych.

**Przykłady:** usunięcie treści BIP bez decyzji, wycofanie dokumentu będącego informacją publiczną, brak uwzględnienia okresu retencji, brak podstawy ograniczenia dostępu.

**Skutki:** brak możliwości wykazania prawidłowości działania, spór z użytkownikiem, skarga, utrata dokumentacji, naruszenie obowiązków publicznych.

**Działania ograniczające:** stosowanie [Modelu decyzyjnego](./08-model-decyzyjny.md), konsultacja z archiwum zakładowym i obsługą prawną, rejestrowanie decyzji, weryfikacja podstaw prawnych.

**Powiązane pliki:** [Podstawy prawne](./04-podstawy-prawne.md), [Zakres stosowania](./03-zakres-stosowania.md).

## 2. Ryzyka archiwalne

**Opis ryzyka:** zasób traci wartość dowodową, kontekst albo kompletność, ponieważ nie został powiązany ze sprawą, JRWA, kategorią archiwalną albo archiwum zakładowym.

**Przykłady:** brak metadanych, brak kategorii A albo B, brak udziału archiwum zakładowego, brak potwierdzenia przekazania, brak paczki archiwalnej.

**Skutki:** utrata możliwości odtworzenia historii sprawy, błędne brakowanie, niekompletna dokumentacja, problemy przy przekazaniu materiałów archiwalnych.

**Działania ograniczające:** uzupełnianie metadanych, klasyfikacja w JRWA, konsultacja archiwalna, zabezpieczenie integralności, dokumentowanie przekazania.

**Powiązane pliki:** [Model cyklu życia](./06-model-cyklu-zycia.md), [Model statusów zasobów](./07-model-statusow-zasobow.md).

## 3. Ryzyka dostępnościowe

**Opis ryzyka:** użytkownik nie może skorzystać z treści archiwalnej, ponieważ zasób jest niedostępny cyfrowo, nieoznaczony, niezrozumiały albo pozbawiony alternatywy.

**Przykłady:** pozostawienie niedostępnych PDF bez oznaczenia, nagranie transmisji bez napisów i transkrypcji, archiwalna strona bez informacji o statusie, brak kontaktu w sprawie dostępu alternatywnego.

**Skutki:** ograniczenie dostępu do informacji, skargi użytkowników, niespójność deklaracji dostępności, utrata zaufania.

**Działania ograniczające:** ocena dostępności przy przeglądzie, oznaczenie treści archiwalnych, przygotowanie dostępnej wersji albo dostępu alternatywnego, aktualizacja komunikacji o dostępności.

**Powiązane pliki:** [Powiązania z zaleceniami SDC](./05-powiazania-z-zaleceniami-sdc.md), [Model decyzyjny](./08-model-decyzyjny.md).

## 4. Ryzyka technologiczne

**Opis ryzyka:** zasób nie może zostać odczytany, wyeksportowany, zweryfikowany albo przeniesiony z powodu ograniczeń technicznych systemu, formatu albo infrastruktury.

**Przykłady:** wyłączenie starego CMS bez eksportu, format niemożliwy do odczytu, brak dokumentacji technicznej, brak logów, brak wersjonowania, uszkodzenie załączników.

**Skutki:** utrata danych, utrata relacji między dokumentami, niemożność odtworzenia publikacji, zależność od wykonawcy albo starego oprogramowania.

**Działania ograniczające:** wymagania eksportu w systemach, test odtworzenia, kontrola sum, dokumentacja techniczna, wybór trwałych formatów, zachowanie oryginału przy konwersji.

**Powiązane pliki:** [Model cyklu życia](./06-model-cyklu-zycia.md), [Model decyzyjny](./08-model-decyzyjny.md).

## 5. Ryzyka organizacyjne

**Opis ryzyka:** podmiot nie ma jasno przypisanych ról, odpowiedzialności i decyzji, przez co zasoby są utrzymywane albo wycofywane przypadkowo.

**Przykłady:** brak właściciela zasobu, brak właściciela systemu, decyzje redaktora bez akceptacji, brak rejestru, brak wiedzy po zmianie pracownika.

**Skutki:** chaos informacyjny, powielanie zasobów, brak kontroli terminów, trudność w audycie, utrata pamięci organizacyjnej.

**Działania ograniczające:** mapa odpowiedzialności, statusy zasobów, rejestr decyzji, okresowy przegląd, minimalne metadane.

**Powiązane pliki:** [Model statusów zasobów](./07-model-statusow-zasobow.md), [Zakres stosowania](./03-zakres-stosowania.md).

## 6. Ryzyka ochrony danych osobowych

**Opis ryzyka:** zasób zawiera dane osobowe, które są publikowane zbyt długo, migrowane bez zabezpieczeń albo przechowywane bez ustalonej podstawy i okresu.

**Przykłady:** stary dokument z danymi osobowymi w BIP, brak udziału IOD, przeniesienie danych do nowego systemu bez oceny zakresu, brak anonimizacji.

**Skutki:** naruszenie prywatności, naruszenie zasad minimalizacji i ograniczenia przechowywania, incydent bezpieczeństwa, odpowiedzialność administracyjna.

**Działania ograniczające:** udział IOD, rozróżnienie publikacji i przechowywania, ograniczenie dostępu publicznego, anonimizacja, ocena podstawy prawnej i retencji.

**Powiązane pliki:** [Podstawy prawne](./04-podstawy-prawne.md), [Model decyzyjny](./08-model-decyzyjny.md).

## 7. Ryzyka wizerunkowe

**Opis ryzyka:** sposób utrzymania albo wycofania treści osłabia zaufanie do podmiotu.

**Przykłady:** pozostawienie błędnych informacji bez oznaczenia, usunięcie dokumentów bez wyjaśnienia, brak dostępu do dokumentów historycznych, niedziałające linki w BIP.

**Skutki:** zarzut braku przejrzystości, skargi, trudności w komunikacji z użytkownikami, utrata wiarygodności.

**Działania ograniczające:** jasne oznaczenia treści archiwalnych, komunikaty o dostępie alternatywnym, przekierowania, dokumentowanie decyzji.

**Powiązane pliki:** [Powiązania z zaleceniami SDC](./05-powiazania-z-zaleceniami-sdc.md).

## 8. Ryzyka ciągłości działania

**Opis ryzyka:** wycofanie systemu albo zasobu zakłóca realizację zadań publicznych, obsługę spraw albo dostęp użytkowników do informacji.

**Przykłady:** brak planu migracji, brak testu odtworzenia, zamknięcie formularza bez kanału zastępczego, brak informacji dla użytkowników.

**Skutki:** przerwa w usługach, utrata spraw, zwiększenie liczby zgłoszeń, niemożność kontynuacji procesu.

**Działania ograniczające:** plan ciągłości, test migracji, okres przejściowy, informacja dla użytkowników, utrzymanie systemu źródłowego do czasu potwierdzenia migracji.

**Powiązane pliki:** [Model cyklu życia](./06-model-cyklu-zycia.md).

## 9. Ryzyka związane z wykonawcami zewnętrznymi

**Opis ryzyka:** wykonawca systemu, CMS, repozytorium albo usługi hostingowej nie zapewnia eksportu, dokumentacji, formatów, wsparcia migracji albo przekazania danych.

**Przykłady:** brak umownych wymagań wobec wykonawcy systemu, eksport tylko w formacie zamkniętym, brak dostępu do bazy danych, brak dokumentacji API.

**Skutki:** zależność od wykonawcy, wysokie koszty migracji, utrata danych, opóźnienie wycofania systemu.

**Działania ograniczające:** wymagania eksportu i migracji w umowie, odbiór dokumentacji technicznej, prawo do danych i metadanych, test eksportu przed zakończeniem umowy.

**Powiązane pliki:** [Model decyzyjny](./08-model-decyzyjny.md), [Podstawy prawne](./04-podstawy-prawne.md).

## 10. Ryzyka migracji i wycofania systemów

**Opis ryzyka:** system zostaje wycofany bez pełnej inwentaryzacji danych, testów, protokołu i decyzji o losie zasobów.

**Przykłady:** brak planu migracji, brak protokołu wycofania systemu, utrata metadanych, brak mapowania pól, brak potwierdzenia integralności, brak archiwizacji logów.

**Skutki:** trwała utrata zasobów, brak możliwości odtworzenia historii, przerwanie usług, naruszenie obowiązków archiwalnych i informacyjnych.

**Działania ograniczające:** inwentaryzacja, plan migracji, eksport próbny, test odtworzenia, protokół migracji, decyzja o zamknięciu, rejestr ryzyk.

**Powiązane pliki:** [Model cyklu życia](./06-model-cyklu-zycia.md), [Model statusów zasobów](./07-model-statusow-zasobow.md).

## Wniosek dla wdrożenia

Procedura archiwizacji i wycofywania zasobów cyfrowych jest narzędziem zarządzania ryzykiem. Pozwala zapobiegać utracie dokumentacji, odcinaniu użytkowników od informacji, błędnemu brakowaniu, niekontrolowanej migracji, naruszeniom danych osobowych i zależności od systemów, których nie można już utrzymywać.

Podmiot publiczny powinien traktować każdy przegląd, migrację i wycofanie jako decyzję wymagającą metadanych, odpowiedzialności, oceny ryzyk i dokumentacji. Tylko wtedy koniec życia zasobu cyfrowego jest elementem zarządzania TIK, a nie przypadkowym skutkiem zmian technicznych.

