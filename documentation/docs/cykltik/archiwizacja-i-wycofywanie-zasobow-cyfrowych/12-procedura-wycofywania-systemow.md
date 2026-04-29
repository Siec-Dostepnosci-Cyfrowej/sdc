---
id: 12-procedura-wycofywania-systemow
title: Procedura wycofywania systemów
description: Procedura wycofywania systemów teleinformatycznych z zachowaniem danych, metadanych i ciągłości dostępu.
sidebar_label: Wycofywanie systemów
sidebar_position: 12
keywords: [wycofywanie systemów, migracja danych, system teleinformatyczny, eksport, dokumentowanie]
tags: [cykl-zycia-tik, procedura]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Procedura wycofywania systemów

## Cel

Celem procedury jest zapewnienie, aby system teleinformatyczny został wycofany z eksploatacji dopiero po zabezpieczeniu danych, dokumentów, metadanych, logów, historii zmian, powiązań z innymi systemami oraz dostępu użytkowników do informacji, które nadal powinny być dostępne.

Systemu nie wolno wyłączyć tylko dlatego, że kończy się umowa, wsparcie techniczne albo finansowanie. Wycofanie systemu jest decyzją zarządczą, prawną, archiwalną, technologiczną i dostępnościową.

## Zakres

Procedurę stosuje się do CMS, BIP, EZD, repozytoriów plików, aplikacji mobilnych, systemów dziedzinowych, baz danych, systemów formularzy, platform projektowych, usług zewnętrznych i systemów pomocniczych, jeżeli przechowują zasoby cyfrowe albo dane potrzebne do realizacji zadań publicznych.

## Zasady

Wycofanie systemu wymaga planu. Plan musi obejmować dane, dokumenty, metadane, użytkowników, integracje, dostępność, bezpieczeństwo, archiwizację i komunikację.

Nie wolno wyłączyć systemu bez migracji albo innej decyzji o losie danych. Jeżeli część danych nie jest migrowana, trzeba wskazać, czy zostaje zarchiwizowana, przekazana, brakowana albo przechowywana w trybie odczytu.

## Warunki wejścia

Przesłankami rozpoczęcia procedury są:

- koniec wsparcia producenta albo wykonawcy,
- migracja do systemu docelowego,
- istotne ryzyko bezpieczeństwa,
- brak zgodności z wymaganiami dostępności albo interoperacyjności,
- nadmierne koszty utrzymania,
- dublowanie funkcji z innym systemem,
- zakończenie projektu,
- decyzja o reorganizacji procesu.

## Przebieg krok po kroku

### 1. Decyzja wstępna

Kierownictwo albo właściciel systemu podejmuje decyzję o rozpoczęciu analizy wycofania. Decyzja wstępna nie jest zgodą na wyłączenie systemu. Oznacza rozpoczęcie inwentaryzacji i oceny ryzyk.

### 2. Inwentaryzacja zasobów

Należy ustalić, jakie dane, dokumenty, załączniki, multimedia, formularze, logi, metadane i konfiguracje znajdują się w systemie. Trzeba wskazać właścicieli danych i powiązania ze sprawami, BIP, WWW, EZD albo systemami dziedzinowymi.

### 3. Analiza zależności

Należy sprawdzić integracje, API, zależności raportowe, konta użytkowników, linki publiczne, przekierowania, procesy biznesowe, zadania automatyczne i powiązania z usługami zewnętrznymi.

### 4. Analiza obowiązków prawnych

Należy ustalić obowiązki wynikające z JRWA, kategorii A/B, informacji publicznej, BIP, RODO, przepisów branżowych, umów, finansowania projektów i dostępności cyfrowej. W analizie uczestniczą właściciel systemu, właściciel zasobów, archiwum zakładowe, IOD i obsługa prawna odpowiednio do ryzyka. Analiza powinna również objąć wymagania umowne wobec wykonawcy systemu, w tym prawo do eksportu danych, dokumentacji API i wsparcie migracyjne.

### 5. Plan migracji

Plan określa zakres danych, system docelowy, format eksportu, metadane, mapowanie pól, harmonogram, role, testy, kryteria odbioru i plan awaryjny. Plan powinien być zgodny z [Procedurą migracji danych](./13-procedura-migracji-danych.md).

### 6. Eksport danych

Eksport powinien obejmować dane, dokumenty, załączniki, metadane, relacje, wersje, logi wymagane do rozliczalności i informacje o statusach. Eksport testowy powinien poprzedzać eksport końcowy.

### 7. Test odtworzenia

Należy sprawdzić, czy dane można odczytać, wyszukać, powiązać z kontekstem i wykorzystać w systemie docelowym albo repozytorium archiwalnym. Test powinien obejmować próbki typowych i trudnych przypadków.

### 8. Archiwizacja

Dane i dokumenty, które nie są migrowane do systemu aktywnego, powinny zostać zarchiwizowane zgodnie z [Procedurą archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md). Należy zachować metadane, integralność i informację o sposobie dostępu.

### 9. Komunikacja

Należy poinformować użytkowników wewnętrznych i, gdy dotyczy, użytkowników publicznych o zmianie systemu, terminach, kanałach zastępczych, przekierowaniach i sposobie uzyskania dostępu do zasobów historycznych.

### 10. Wyłączenie systemu

System można wyłączyć dopiero po potwierdzeniu migracji albo archiwizacji, testu odtworzenia, zabezpieczenia kopii, zamknięcia integracji, odebrania dokumentacji i zatwierdzenia protokołu.

## Wariant minimalny (system ograniczony)

Jeżeli system nie posiada eksportu danych, logów, metadanych albo wersjonowania, nie wolno uznać tego za zgodę na wyłączenie systemu bez zabezpieczenia zasobów. Należy zastosować wariant minimalny i udokumentować jego ograniczenia.

W wariancie minimalnym należy:

- wykonać manualną kopię plików,
- wykonać zrzut bazy danych, jeżeli jest to możliwe,
- sporządzić wykaz URL,
- sporządzić wykaz plików,
- opisać brak funkcji systemu, w szczególności brak eksportu, logów, metadanych albo wersjonowania,
- sporządzić protokół braków,
- wskazać, które dane mogą zostać odtworzone tylko częściowo,
- uzyskać decyzję właściciela systemu albo kierownictwa o ryzyku resztkowym.

Wariant minimalny nie zastępuje pełnej migracji. Służy ograniczeniu szkód, gdy stary system nie pozwala wykonać procesu w standardowy sposób.

## Warunki wyjścia

System może zostać uznany za wycofany, gdy:

- dane i dokumenty zostały zabezpieczone,
- dostęp wymagany prawnie albo organizacyjnie został zachowany,
- decyzja jest udokumentowana,
- migracja została odebrana,
- ryzyka resztkowe zostały opisane,
- użytkownicy otrzymali potrzebne informacje,
- umowy i dostęp wykonawców zostały zamknięte albo ograniczone.

## Decyzje

Decyzje obejmują zakres migracji, zakres archiwizacji, dane pozostawione w trybie odczytu, system docelowy, termin wyłączenia, odpowiedzialność za dane historyczne i sposób obsługi wniosków po zamknięciu systemu.

## Błędy i ryzyka

Najpoważniejsze błędy to wyłączenie bez eksportu, brak planu migracji, brak testu odtworzenia, brak udziału archiwum zakładowego, brak udziału IOD, utrata metadanych, brak dokumentacji technicznej i brak wymagań wobec wykonawcy.

Ryzyka opisano w [Modelu ryzyk](./09-model-ryzyk.md). Przy wycofaniu systemu szczególnie istotne są ryzyka technologiczne, archiwalne, ochrony danych osobowych, ciągłości działania i zależności od wykonawcy.

## Powiązania

Procedura rozwija fazę wycofania z [Modelu cyklu życia](./06-model-cyklu-zycia.md), wykorzystuje status przeznaczony do migracji z [Modelu statusów zasobów](./07-model-statusow-zasobow.md), odpowiada na pytania z [Modelu decyzyjnego](./08-model-decyzyjny.md) i powinna być stosowana z [Kryteriami wycofania systemu](./25-kryteria-wycofania-systemu.md). Do wykonania procedury należy stosować [Listę kontrolną wycofania systemu](./37-lista-kontrolna-wycofania-systemu.md), [Formularz decyzji o wycofaniu](./39-formularz-decyzji-o-wycofaniu.md), [Rejestr wycofania systemów](./41-rejestr-wycofania-systemow.md) oraz [Dokumentowanie procesu wycofania](./26-dokumentowanie-procesu-wycofania.md).
