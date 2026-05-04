---
id: organizacja-i-zadania-zespolu-naprawczego
title: Organizacja i zadania zespołu odpowiedzialnego za naprawę problemów dostępności cyfrowej. Załącznik nr 1
description: Model operacyjny organizacji i zadań zespołu naprawczego ds. dostępności cyfrowej
sidebar_label: Zespół naprawczy
sidebar_position: 2
keywords: [rozwiązanie systemowe, cykl życia TIK]
tags: [rozwiązanie systemowe, cykl życia TIK]
opracowanie: Stefan Wajda, Cezary Tomczyk
data_zgloszenia: 30 marca 2026
data_aktualizacji: 30 marca 2026
wersja_robocza: true
---

**Załącznik nr 1 do Zalecenia w sprawie systemowego rozwiązywania problemów dostępności cyfrowej**

## 1. Cel

Organizacja zapewnia zdolność do skutecznego, terminowego i udokumentowanego usuwania problemów dostępności cyfrowej oraz koordynacji działań naprawczych w całym cyklu życia usług i produktów cyfrowych, w tym zapewnienia zgodności z obowiązującymi wymaganiami prawnymi i standardami.

## 2. Zakres odpowiedzialności

Zespół naprawczy (lub wyznaczona osoba) jest odpowiedzialny za:

- koordynację procesu naprawy problemów dostępności,
- ustalanie priorytetów napraw zgodnie z przyjętym modelem klasyfikacji,
- zapewnienie kompletności zgłoszeń (opis, lokalizacja, kroki reprodukcji, załączniki),
- współpracę z zespołami IT, redakcyjnymi, biznesowymi i wykonawcami zewnętrznymi,
- monitorowanie skuteczności działań naprawczych,
- zapewnienie zgodności napraw z wymaganiami dostępności,
- inicjowanie działań zapobiegawczych na podstawie analizy przyczyn źródłowych.

## 3. Forma organizacyjna

- Zespół może funkcjonować jako wyodrębniona jednostka organizacyjna lub jako zespół zadaniowy powołany spośród pracowników różnych komórek.
- W małych podmiotach dopuszcza się realizację zadań przez jedną osobę (np. koordynatora dostępności) przy zapewnieniu zastępowalności i wsparcia wykonawcy zewnętrznego.
- Zakres odpowiedzialności, dostępność czasowa oraz ścieżka eskalacji muszą być formalnie określone.

Decyzja o wyborze formy organizacyjnej musi być udokumentowana i uwzględniać analizę ryzyka związanego z dostępnością cyfrową w danej organizacji.

## 4. Minimalny skład i role

Zespół obejmuje co najmniej:

- **Lidera** - odpowiedzialnego za nadzór nad procesem naprawy, przydzielanie zgłoszeń, nadzór nad SLA, raportowanie, zatwierdzanie zamknięcia zgłoszeń oraz uruchamianie środków na naprawy zewnętrzne.
- **Rolę techniczną (IT / deweloperską / administratora systemu)** - odpowiedzialną za realizację lub zlecanie napraw, zapewnienie braku regresji oraz współpracę z QA.
- **Rolę treściową (redakcja / komunikacja / UX writer)** - odpowiedzialną za naprawy dotyczące treści, w tym alternatywy tekstowe, strukturę nagłówków, język i poprawność redakcyjną.
- **Rolę weryfikacyjną (QA / tester dostępności)** - odpowiedzialną za potwierdzanie poprawności napraw przy użyciu testów automatycznych i manualnych oraz weryfikację braku regresji. W małych podmiotach rola ta może być łączona z rolą techniczną, co musi być wyraźnie odnotowane w dokumentacji zespołu.

W zależności od skali organizacji role mogą być łączone.

## 5. Zadania operacyjne

### 5.1. Obsługa problemów

- przyjmowanie i rejestracja zgłoszeń w rejestrze problemów,
- wstępna analiza i klasyfikacja problemów zgodnie z modelem priorytetów,
- weryfikacja kompletności zgłoszeń,
- przypisywanie odpowiedzialności za naprawę.

### 5.2. Koordynacja napraw

- nadzór nad terminową realizacją napraw zgodnie z SLA,
- współpraca z wykonawcami i zespołami wewnętrznymi,
- zapewnienie komunikacji zwrotnej do zgłaszającego,
- eskalacja w przypadku opóźnień lub braku możliwości realizacji.

### 5.3. Weryfikacja

- potwierdzanie usunięcia problemów na podstawie testów automatycznych lub manualnych - w zależności od charakteru problemu i wymaganej metody weryfikacji,
- weryfikacja, czy naprawa nie spowodowała nowych problemów w miejscach, które współdziałają z naprawianym fragmentem,
- potwierdzanie naprawy przez zgłaszającego - z wyjątkiem zgłoszeń pochodzących z monitoringu automatycznego lub audytów zewnętrznych.

### 5.4. Monitorowanie i raportowanie

- prowadzenie rejestru problemów,
- analiza czasu naprawy i zgodności z SLA,
- identyfikacja problemów powtarzalnych,
- raportowanie do kierownictwa, w tym liczby napraw nieskutecznych.

### 5.5. Działania zapobiegawcze

- identyfikacja przyczyn źródłowych problemów,
- dokumentowanie wyników analiz i przekazywanie ich właścicielom procesów,
- rekomendowanie zmian w procesach publikacji, wytwarzania oprogramowania i utrzymania,
- współpraca przy tworzeniu standardów i wytycznych.

## 6. Uprawnienia zespołu

Zespół posiada:

- uprawnienie do wstrzymania publikacji treści lub zablokowania wdrożenia zmiany w przypadku krytycznego naruszenia dostępności - decyzja w tym zakresie nie wymaga dodatkowej akceptacji przełożonych i jest skuteczna z chwilą jej podjęcia przez lidera zespołu,
- dostęp do systemów zgłoszeń, monitoringu i backlogów zespołów IT/redakcyjnych,
- możliwość zgłaszania zadań do realizacji przez zespoły IT lub wykonawców,
- możliwość inicjowania przeglądów jakości dostępności,
- możliwość eskalacji problemów do kierownictwa,
- dostęp do informacji o planowanych zmianach w systemach.

## 7. Współpraca z wykonawcami zewnętrznymi

Zespół współpracuje z wykonawcami w zakresie:

- przekazywania zgłoszeń i ustalania priorytetów,
- realizacji napraw zgodnie z formalnymi SLA,
- odbioru prac na podstawie dowodów naprawy (zrzuty ekranu, opis zmian, wyniki testów automatycznych i/lub manualnych).

## 8. Powiązanie z innymi procesami

Zespół działa w powiązaniu z:

- procesem utrzymania systemów IT,
- procesem zarządzania zmianą (z obowiązkową weryfikacją dostępności przed wdrożeniem),
- procesem budżetowania (na wypadek płatnych napraw zewnętrznych),
- monitoringiem dostępności (ciągłym lub okresowym) - z obowiązkową integracją wyników z rejestrem problemów,
- obsługą zgłoszeń użytkowników,
- aktualizacją deklaracji dostępności.

Monitoring dostępności obejmuje co najmniej automatyczne sprawdzanie stron i zasobów po stronie serwera (np. weryfikacja kodu HTML, dostępności usługi, poprawności nagłówków).

Jednak monitoring po stronie serwera wykrywa jedynie część problemów i nie odzwierciedla rzeczywistego doświadczenia użytkownika korzystającego z konkretnej przeglądarki, urządzenia lub technologii asystującej.

Monitoring w środowisku użytkownika umożliwia wykrywanie problemów w warunkach rzeczywistego korzystania: przy wprowadzaniu nowych treści, aktualizacjach systemu CMS lub zmianach konfiguracji - zanim problem zauważy użytkownik. Z tego względu powinien być traktowany jako docelowy poziom dojrzałości monitoringu dostępności.

## 9. Minimalne wymagania wdrożeniowe

Organizacja spełnia co najmniej:

- wyznaczenie osoby odpowiedzialnej za koordynację,
- przeprowadzenie szkolenia z dostępności cyfrowej dla członków zespołu (lub jednej osoby),
- przyjęcie modelu klasyfikacji problemów i priorytetów,
- przyjęcie minimalnego SLA dla napraw,
- zapewnienie narzędzi do testowania dostępności (automatycznych i manualnych),
- zapewnienie dostępu do zasobów technicznych (wewnętrznych lub zewnętrznych),
- prowadzenie rejestru problemów,
- monitorowanie czasu naprawy i zgodności z SLA.

## 10. Zasada działania

Zespół działa w trybie ciągłym (w godzinach pracy organizacji, z określoną ścieżką awaryjną poza nimi). Każde wykrycie lub zgłoszenie problemu dostępności - niezależnie od źródła (użytkownik, monitoring automatyczny, audyt) - uruchamia proces naprawczy koordynowany przez zespół lub wyznaczoną osobę.

Ścieżka awaryjna musi być formalnie opisana i dostępna dla wszystkich członków zespołu.
