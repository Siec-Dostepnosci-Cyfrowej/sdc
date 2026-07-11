---
id: test-zlozenie-wniosku
title: Scenariusz testu - Złożenie wniosku
sidebar_label: Złożenie wniosku
sidebar_position: 117
description: Scenariusz testu sprawdzającego, czy użytkownik może samodzielnie przygotować, wypełnić, zweryfikować i złożyć wniosek oraz otrzymać potwierdzenie jego przekazania.
keywords: [wniosek, formularz, proces użytkownika, usługa publiczna, WCAG, dostępność cyfrowa]
tags: [test dostępności, proces użytkownika, formularze, usługi cyfrowe, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-117**

---

## 2. Nazwa testu

**Złożenie wniosku**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może skutecznie zrealizować cały proces złożenia wniosku, od momentu rozpoczęcia procedury do otrzymania potwierdzenia jej zakończenia.

Test obejmuje zarówno dostępność techniczną interfejsu, jak i możliwość wykonania zadania przez użytkownika.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 2.1.1 Klawiatura
- 2.4.3 Kolejność fokusu
- 2.4.6 Nagłówki i etykiety
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety i instrukcje
- 3.3.3 Sugestie korekty błędów
- 3.3.4 Zapobieganie błędom
- 3.3.7 Ponowne wpisy
- 3.3.8 Dostępne uwierzytelnianie (minimum)
- 3.3.9 Dostępne uwierzytelnianie (ulepszone)
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

### EN 301 549

- Rozdział 9 (WWW)
- Rozdział 11 (Aplikacje)
- Rozdział 13 (Dokumentacja i wsparcie)

---

## 6. Zastosowanie do treści

Test stosuje się do:

- elektronicznych formularzy wniosków,
- usług publicznych online,
- formularzy składanych przez ePUAP,
- usług realizowanych przez systemy dziedzinowe,
- procesów rejestracyjnych kończących się przekazaniem danych do organizacji.

---

## 7. Oczekiwany wynik

Użytkownik może:

- odnaleźć formularz,
- zrozumieć wymagania,
- wypełnić wszystkie pola,
- poprawić błędy,
- załączyć wymagane dokumenty,
- złożyć wniosek,
- otrzymać potwierdzenie wykonania operacji.

---

## 8. Dlaczego to jest ważne

Dostępność strony lub formularza nie gwarantuje jeszcze możliwości załatwienia sprawy.

Celem użytkownika nie jest korzystanie z formularza, lecz skuteczne złożenie wniosku.

Każda przeszkoda występująca w procesie może uniemożliwić realizację usługi publicznej.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z ograniczoną sprawnością rąk,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Rozpoczęcie procesu

Sprawdź, czy użytkownik może odnaleźć i uruchomić proces składania wniosku.

Zweryfikuj:

- dostępność przycisku lub linku rozpoczynającego proces,
- jednoznaczność jego nazwy,
- możliwość obsługi klawiaturą.

### Krok 2. Zapoznanie się z wymaganiami

Sprawdź, czy użytkownik może ustalić:

- jakie dokumenty są wymagane,
- jakie dane należy przygotować,
- czy występują opłaty,
- jakie są warunki realizacji usługi.

### Krok 3. Wypełnienie formularza

Sprawdź, czy:

- wszystkie pola posiadają etykiety,
- instrukcje są zrozumiałe,
- pola wymagane są oznaczone,
- formularz jest obsługiwany klawiaturą.

### Krok 4. Załączanie dokumentów

Sprawdź, czy:

- użytkownik może dodać załączniki,
- komunikaty są zrozumiałe,
- system informuje o błędach przesyłania plików.

### Krok 5. Obsługa błędów

Celowo wprowadź błędne dane.

Sprawdź, czy:

- błędy są identyfikowane,
- użytkownik otrzymuje informację o przyczynie błędu,
- możliwe jest poprawienie danych.

### Krok 6. Przegląd danych

Sprawdź, czy użytkownik może:

- przejrzeć wprowadzone informacje,
- poprawić dane przed wysłaniem,
- zweryfikować kompletność wniosku.

### Krok 7. Złożenie wniosku

Sprawdź, czy:

- operacja może zostać wykonana bez użycia myszy,
- system jednoznacznie informuje o wykonaniu operacji,
- nie występują nieoczekiwane zmiany kontekstu.

### Krok 8. Potwierdzenie

Sprawdź, czy użytkownik otrzymuje:

- potwierdzenie złożenia wniosku,
- numer sprawy lub identyfikator zgłoszenia (jeżeli dotyczy),
- informację o dalszych krokach.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może samodzielnie przejść cały proces od rozpoczęcia do potwierdzenia złożenia wniosku.

### Częściowo spełnione

Proces jest możliwy do wykonania, lecz występują utrudnienia.

### Niespełnione

Co najmniej jeden etap procesu uniemożliwia skuteczne złożenie wniosku.

---

## 12. Typowe niezgodności

- brak etykiet formularza,
- błędy nie są komunikowane użytkownikowi,
- komunikaty błędów nie są odczytywane przez czytniki ekranu,
- formularz wymaga użycia myszy,
- brak możliwości poprawienia danych,
- niedostępne załączniki lub mechanizm ich przesyłania,
- brak potwierdzenia złożenia wniosku,
- utrata danych po wykryciu błędu,
- limit czasu uniemożliwiający dokończenie procesu.

---

## 13. Dobre praktyki

- prezentowanie procesu krok po kroku,
- automatyczne zapisywanie postępu,
- podsumowanie danych przed wysłaniem,
- możliwość pobrania potwierdzenia,
- jednoznaczne komunikaty o błędach,
- możliwość wznowienia przerwanego procesu.

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Proces składania wniosku nie zapewnia skutecznej identyfikacji błędów. Po przesłaniu formularza użytkownik otrzymuje jedynie ogólny komunikat o błędzie bez wskazania pól wymagających poprawy. Problem szczególnie utrudnia korzystanie z usługi osobom korzystającym z czytników ekranu oraz użytkownikom z niepełnosprawnością poznawczą.

---

## 17. Rekomendacje naprawcze

- zapewnić pełną obsługę formularza z klawiatury,
- powiązać komunikaty błędów z odpowiednimi polami,
- zapewnić odczytywanie komunikatów przez technologie wspomagające,
- umożliwić przegląd i poprawę danych przed wysłaniem,
- zapewnić dostępne potwierdzenie wykonania operacji,
- ograniczyć konieczność ponownego wpisywania danych.

---

## 18. Powiązane testy

- testID-037 Formularz elektroniczny
- testID-026 Identyfikacja błędów
- testID-027 Sugestie korekty błędów
- testID-101 Ponowne wpisy
- testID-102 Dostępne uwierzytelnianie
- testID-103 Dostępne uwierzytelnianie (ulepszone)
- testID-040 Komunikaty o stanie
- testID-115 Katalog usług
- testID-116 Karta usługi

---