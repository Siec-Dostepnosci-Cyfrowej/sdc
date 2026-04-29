---
id: 06-model-cyklu-zycia-zasobu-cyfrowego
title: Model cyklu życia zasobu cyfrowego
description: Model faz zarządzania zasobem cyfrowym od projektowania do przekazania albo brakowania.
sidebar_label: Model cyklu życia
sidebar_position: 6
keywords: [cykl życia TIK, zasób cyfrowy, archiwizacja, migracja, brakowanie]
tags: [cykl-zycia-tik, model]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---
# Model cyklu życia zasobu cyfrowego

## Cel

Celem modelu jest opisanie archiwizacji i wycofywania jako części pełnego cyklu życia TIK. Model pokazuje, że decyzje podejmowane przy projektowaniu, tworzeniu i publikacji zasobu wpływają na możliwość jego przeglądu, archiwizacji, migracji, wycofania i późniejszego odczytu.

## Fazy cyklu życia

### 1. Projektowanie

**Cel:** zaplanowanie zasobu, systemu albo publikacji w sposób umożliwiający późniejsze zarządzanie.  
**Decyzje:** kto jest właścicielem zasobu, gdzie zasób będzie przechowywany, jakie metadane są wymagane, czy zasób może stać się dokumentem sprawy, czy będzie wymagał publikacji w BIP albo WWW.  
**Metadane:** planowany identyfikator, właściciel, typ zasobu, podstawa publikacji, przewidywany status, powiązanie z systemem.  
**Odpowiedzialność:** właściciel zasobu, właściciel systemu, redaktor, IT, koordynator dostępności i w razie potrzeby archiwum zakładowe.  
**Ryzyka:** brak wymagań eksportu, brak metadanych, brak planu dostępności, brak właściciela.  
**Powiązania:** [Zakres stosowania](./03-zakres-stosowania.md), [Model ryzyk](./09-model-ryzyk.md).

### 2. Utworzenie lub pozyskanie

**Cel:** utworzenie dokumentu, danych, treści albo pozyskanie materiału od innego podmiotu.  
**Decyzje:** czy zasób jest dokumentem sprawy, czy pochodzi od podmiotu zewnętrznego, czy wymaga dostępności, czy zawiera dane osobowe.  
**Metadane:** twórca, źródło, data utworzenia, wersja, format, właściciel, powiązanie ze sprawą.  
**Odpowiedzialność:** autor, komórka merytoryczna, redaktor albo właściciel procesu.  
**Ryzyka:** utrata źródła, brak praw do modyfikacji, nieczytelny format, brak informacji o danych osobowych.  
**Powiązania:** [Model decyzyjny](./08-model-decyzyjny.md).

### 3. Publikacja

**Cel:** udostępnienie zasobu w WWW, BIP, aplikacji albo innym kanale publicznym.  
**Decyzje:** czy zasób jest informacją publiczną, czy powinien być publicznie dostępny, czy spełnia wymagania dostępności, czy wymaga oznaczenia wersji.  
**Metadane:** data publikacji, adres URL, podstawa publikacji, status aktywny, redaktor, wersja publikowana.  
**Odpowiedzialność:** redaktor, administrator BIP, właściciel zasobu, koordynator dostępności.  
**Ryzyka:** publikacja niedostępnego pliku, brak powiązania z aktami sprawy, brak kontroli wersji.  
**Powiązania:** [Powiązania z zaleceniami SDC](./05-powiazania-z-zaleceniami-sdc.md).

### 4. Utrzymanie

**Cel:** zapewnienie aktualności, dostępności, bezpieczeństwa i możliwości odczytu zasobu.  
**Decyzje:** czy zasób wymaga aktualizacji, czy nadal ma status aktywny, czy linki i pliki działają, czy format jest nadal obsługiwany.  
**Metadane:** data aktualizacji, osoba aktualizująca, historia wersji, status, powiązania z innymi zasobami.  
**Odpowiedzialność:** właściciel zasobu, redaktor, administrator systemu.  
**Ryzyka:** pozostawienie treści nieaktualnej, utrata linków, brak kontroli nad załącznikami.  
**Powiązania:** [Model statusów zasobów](./07-model-statusow-zasobow.md).

### 5. Przegląd

**Cel:** okresowa ocena aktualności, dostępności, wartości informacyjnej, obowiązków retencyjnych i potrzeb użytkowników.  
**Decyzje:** utrzymać, poprawić, oznaczyć, wycofać z publikacji, zmigrować, przekazać albo brakować.  
**Metadane:** data przeglądu, wynik oceny, rekomendacja, osoba oceniająca, termin kolejnego przeglądu.  
**Odpowiedzialność:** właściciel zasobu, redaktor, archiwum zakładowe, IOD, koordynator dostępności.  
**Ryzyka:** pominięcie zasobów historycznych, brak udziału właściwych ról, decyzje bez podstawy.  
**Powiązania:** [Model decyzyjny](./08-model-decyzyjny.md).

### 6. Kwalifikacja

**Cel:** ustalenie znaczenia zasobu dla sprawy, dokumentacji, informacji publicznej, retencji i archiwizacji.  
**Decyzje:** kategoria A albo B, dostęp publiczny albo na wniosek, potrzeba naprawy dostępności, potrzeba migracji, możliwość brakowania.  
**Metadane:** kategoria archiwalna, klasa JRWA, podstawa kwalifikacji, powiązanie ze sprawą, decyzja właściciela.  
**Odpowiedzialność:** właściciel zasobu, komórka merytoryczna, archiwum zakładowe, obsługa prawna.  
**Ryzyka:** błędna kwalifikacja, brak JRWA, uznanie treści informacyjnej za nieistotną mimo znaczenia publicznego.  
**Powiązania:** [Podstawy prawne](./04-podstawy-prawne.md).

### 7. Archiwizacja

**Cel:** zachowanie zasobu, dokumentu albo danych w sposób umożliwiający odczyt, zrozumienie i wykazanie autentyczności w czasie.  
**Decyzje:** archiwizacja operacyjna, archiwizacja formalna, publiczne archiwum treści, dostęp na wniosek, przygotowanie paczki archiwalnej.  
**Metadane:** status archiwalny, lokalizacja, format, suma kontrolna, wersja, data archiwizacji, osoba odpowiedzialna.  
**Odpowiedzialność:** właściciel zasobu, IT, archiwum zakładowe.  
**Ryzyka:** archiwum jako folder bez opisu, utrata metadanych, brak blokady edycji, brak dostępu alternatywnego.  
**Powiązania:** [Model ryzyk](./09-model-ryzyk.md).

### 8. Migracja

**Cel:** przeniesienie danych, dokumentów i metadanych do nowego systemu, formatu albo repozytorium bez utraty kontekstu.  
**Decyzje:** zakres migracji, mapowanie pól, format eksportu, test odtworzenia, zachowanie oryginału, plan wycofania systemu źródłowego.  
**Metadane:** identyfikator eksportu, zakres danych, data migracji, system źródłowy, system docelowy, protokół testu.  
**Odpowiedzialność:** właściciel systemu, IT, właściciel danych, wykonawca, archiwum zakładowe.  
**Ryzyka:** utrata relacji, utrata podpisów, uszkodzenie plików, niepełny eksport.  
**Powiązania:** [Model decyzyjny](./08-model-decyzyjny.md).

### 9. Wycofanie

**Cel:** kontrolowane zakończenie publicznej dostępności treści albo eksploatacji systemu.  
**Decyzje:** wycofanie z publikacji, oznaczenie archiwalne, przekierowanie, dostęp na wniosek, zamknięcie systemu po migracji.  
**Metadane:** powód wycofania, data, decyzja, osoba odpowiedzialna, sposób dalszego dostępu, link do zasobu zastępczego.  
**Odpowiedzialność:** kierownictwo, właściciel zasobu, właściciel systemu, redaktor, IT, IOD, archiwum zakładowe.  
**Ryzyka:** odcięcie użytkowników od informacji, usunięcie bez decyzji, wyłączenie systemu bez danych.  
**Powiązania:** [Model statusów zasobów](./07-model-statusow-zasobow.md).

### 10. Przekazanie albo brakowanie

**Cel:** zakończenie cyklu życia zgodnie z kategorią archiwalną i obowiązkami prawnymi.  
**Decyzje:** przekazanie do archiwum zakładowego, przygotowanie do przekazania materiałów archiwalnych do archiwum państwowego, brakowanie dokumentacji kategorii B po spełnieniu warunków.  
**Metadane:** kategoria, podstawa przekazania albo brakowania, potwierdzenie, zakres paczki, lokalizacja docelowa.  
**Odpowiedzialność:** archiwum zakładowe, właściciel zasobu, kierownictwo, właściwe archiwum państwowe w wymaganych przypadkach.  
**Ryzyka:** przedwczesne brakowanie, niekompletna paczka, brak potwierdzenia przekazania, brak możliwości odczytu.  
**Powiązania:** [Podstawy prawne](./04-podstawy-prawne.md).

## Cykl życia treści, dokumentu i systemu

Cykl życia treści dotyczy przede wszystkim publikacji, aktualności, oznaczeń, dostępności i potrzeb użytkowników. Treść może być aktywna, archiwalna, nieaktualna albo wycofana z publikacji.

Cykl życia dokumentu dotyczy powiązania ze sprawą, metadanych, kwalifikacji archiwalnej, integralności, autentyczności, przechowywania i przekazania albo brakowania. Dokument opublikowany w WWW albo BIP nie traci charakteru dokumentu.

Cykl życia systemu dotyczy zdolności systemu do tworzenia, przechowywania, eksportowania, zabezpieczania i migrowania zasobów. System może zostać wycofany dopiero po ustaleniu losu danych i dokumentów.

## Moment transformacji

Treść informacyjna może stać się dokumentem wymagającym zachowania, jeżeli dokumentuje działanie podmiotu, wykonanie obowiązku, decyzję, komunikację publiczną albo realizację projektu. Dokument opublikowany w WWW albo BIP pozostaje dokumentem, jeżeli wynika z akt sprawy albo obowiązku działania podmiotu.

Transformacja następuje w chwili, gdy zasób przestaje być wyłącznie bieżącą treścią użytkową, a staje się dowodem działania, elementem pamięci instytucjonalnej, informacją publiczną o znaczeniu historycznym albo dokumentacją wymagającą przechowywania. Od tego momentu nie wolno traktować go jak zwykłego pliku do usunięcia.

