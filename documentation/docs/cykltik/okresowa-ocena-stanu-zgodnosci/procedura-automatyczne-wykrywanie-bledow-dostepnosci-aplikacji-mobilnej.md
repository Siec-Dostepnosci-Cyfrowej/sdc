---
id: procedura-automatyczne-wykrywanie-bledow-dostepnosci-aplikacji-mobilnej
title: Procedura Automatyczne wykrywanie błędów dostępności aplikacji mobilnej
sidebar_label: Automatyczne wykrywanie (aplikacja mobilna)
sidebar_position: 18
description: Test procesowy sprawdzający, czy organizacja wykorzystuje narzędzia automatyczne do identyfikowania problemów dostępności aplikacji mobilnych oraz czy wyniki analiz są wykorzystywane w procesie zapewniania jakości i dostępności.
keywords: [aplikacja mobilna,testy automatyczne,automatyczne wykrywanie błędów,Accessibility Scanner,Accessibility Inspector,Accessibility Insights,CI/CD,dostępność aplikacji mobilnych,kontrola jakości,]
tags: [aplikacja mobilna,testy automatyczne,automatyczne wykrywanie błędów,Accessibility Scanner,Accessibility Inspector,Accessibility Insights,CI/CD,dostępność aplikacji mobilnych,kontrola jakości,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**procID-002**

## 2. Nazwa testu

**Automatyczne wykrywanie błędów dostępności aplikacji mobilnej**

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

Może być stosowany również w audytach zgodności oraz ocenach dojrzałości organizacji.

## 4. Opis testu

Test sprawdza, czy organizacja wykorzystuje narzędzia automatyczne do identyfikowania problemów dostępności aplikacji mobilnych oraz czy wyniki analiz są wykorzystywane w procesie zapewniania jakości i dostępności.

### Co oznacza „automatyczne wykrywanie błędów dostępności”?

Automatyczne wykrywanie błędów polega na wykorzystaniu narzędzi programowych analizujących aplikację pod kątem występowania znanych problemów dostępności.

Narzędzia takie mogą wykrywać między innymi:

- brak etykiet elementów,
- problemy z kontrastem,
- błędne role elementów,
- problemy z dostępnością formularzy,
- błędy struktury interfejsu,
- problemy związane z technologiami wspomagającymi.

### Jakie narzędzia mogą być wykorzystywane?

Przykładowo:

- Accessibility Scanner (Android),
- Accessibility Insights for Android,
- Accessibility Inspector (iOS),
- XCTest Accessibility Audits,
- Espresso Accessibility Checks,
- Appium Accessibility Testing,
- narzędzia zintegrowane z procesem CI/CD.

Automatyczne testowanie nie zastępuje testów eksperckich ani testów z udziałem użytkowników.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę wszystkich kryteriów sukcesu możliwych do częściowej automatyzacji.

### EN 301 549

Test wspiera ocenę wymagań dotyczących:

- aplikacji mobilnych,
- technologii wspomagających,
- elementów interaktywnych,
- prezentacji informacji.

### W3C Accessibility Maturity Model

Powiązane obszary:

- ICT Development Lifecycle,
- Quality Assurance,
- Testing and Validation.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- aplikacji natywnych,
- aplikacji hybrydowych,
- aplikacji wieloplatformowych,
- nowych wersji aplikacji,
- procesów wytwarzania i utrzymania oprogramowania.

## 7. Oczekiwany wynik

Organizacja:

- wykorzystuje automatyczne narzędzia wykrywania problemów,
- wykonuje analizy regularnie,
- dokumentuje wyniki,
- usuwa wykryte problemy,
- wykorzystuje wyniki analiz w procesie rozwoju aplikacji.

## 8. Dlaczego to jest ważne

Automatyczne narzędzia pozwalają szybko wykrywać powtarzalne problemy dostępności.

Ich wykorzystanie:

- obniża koszty testowania,
- przyspiesza wykrywanie błędów,
- zmniejsza ryzyko publikacji niedostępnych rozwiązań,
- wspiera proces ciągłego doskonalenia.

Brak automatycznych analiz powoduje, że wiele problemów może pozostawać niewykrytych aż do momentu zgłoszenia przez użytkowników.

## 9. Kogo to dotyczy

Pośrednio wszystkich użytkowników aplikacji.

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników technologii wspomagających.

Bezpośrednio test dotyczy:

- właścicieli aplikacji,
- zespołów projektowych,
- zespołów zapewniania jakości (QA),
- wykonawców oprogramowania,
- administratorów aplikacji.

## 10. Sposób testowania

### Krok 1. Ustal wykorzystywane narzędzia

Sprawdź, czy organizacja korzysta z narzędzi automatycznego wykrywania błędów dostępności.

### Krok 2. Zweryfikuj zakres analiz

Sprawdź, czy analizy obejmują:

- Android,
- iOS,
- kluczowe ekrany aplikacji,
- nowe wersje aplikacji.

### Krok 3. Oceń częstotliwość wykonywania analiz

Sprawdź, czy analizy wykonywane są:

- przed publikacją,
- po aktualizacjach,
- cyklicznie,
- w ramach procesu CI/CD.

### Krok 4. Zweryfikuj wyniki

Sprawdź, czy wyniki analiz:

- są dokumentowane,
- zawierają wykryte problemy,
- są przekazywane do usunięcia.

### Krok 5. Oceń wykorzystanie wyników

Sprawdź, czy wykryte problemy:

- są analizowane,
- są naprawiane,
- są weryfikowane po naprawie.

## 11. Kryteria oceny wyniku

### Spełnione

Organizacja systematycznie wykorzystuje automatyczne narzędzia wykrywania błędów dostępności i wykorzystuje wyniki w procesie utrzymania aplikacji.

### Częściowo spełnione

Analizy są wykonywane sporadycznie lub nie obejmują wszystkich istotnych aplikacji albo wyniki nie są konsekwentnie wykorzystywane.

### Niespełnione

Organizacja nie stosuje automatycznych analiz dostępności aplikacji mobilnych.

### Nie dotyczy

Organizacja nie posiada aplikacji mobilnych.

## 12. Typowe niezgodności

- brak automatycznych analiz,
- wykonywanie analiz wyłącznie przed publikacją,
- brak dokumentowania wyników,
- brak procesu usuwania wykrytych problemów,
- nieuwzględnianie dostępności w procesie CI/CD,
- analizowanie wyłącznie części ekranów aplikacji,
- brak ponownej weryfikacji po naprawach.

## 13. Dobre praktyki

- wykorzystywanie Accessibility Scanner i Accessibility Inspector,
- automatyzacja testów w procesie CI/CD,
- dokumentowanie wyników analiz,
- monitorowanie trendów jakości,
- łączenie testów automatycznych z testami eksperckimi,
- regularna weryfikacja nowych wersji aplikacji.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis stosowanych narzędzi, częstotliwości analiz oraz sposobu wykorzystania wyników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Organizacja nie wykorzystuje lub wykorzystuje w ograniczonym zakresie narzędzia automatycznego wykrywania błędów dostępności aplikacji mobilnych. Powoduje to zwiększone ryzyko niewykrywania problemów dostępności oraz ogranicza możliwość systematycznego monitorowania jakości aplikacji.

## 17. Rekomendacje naprawcze

- wdrożyć narzędzia automatycznej analizy dostępności aplikacji,
- objąć analizami wszystkie utrzymywane aplikacje mobilne,
- zintegrować testy dostępności z procesem wytwarzania oprogramowania,
- dokumentować wyniki analiz,
- monitorować realizację działań naprawczych,
- łączyć testy automatyczne z testami eksperckimi i testami użytkowników.

## 18. Powiązane testy

- procID-001 Automatyczne wykrywanie błędów dostępności stron internetowych
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- testID-097 Gesty systemowe i niestandardowe (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-102 Ustawienia dostępności systemu (aplikacja mobilna)
