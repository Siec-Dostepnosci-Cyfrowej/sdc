---
id: test-formularz-pdf
title: Karta testu — Formularz PDF
sidebar_label: Formularz PDF
sidebar_position: 107
description: Scenariusz testu sprawdzającego, czy formularz PDF może być odczytany, wypełniony i przesłany przez użytkowników technologii wspomagających.
keywords: [formularz PDF, PDF, PDF/UA, formularze elektroniczne, dostępność dokumentów, WCAG]
tags: [test dostępności, dokumenty, PDF, formularze, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

# 1. Identyfikator testu

**testID-107**

# 2. Nazwa testu

Formularz PDF

# 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

# 4. Opis testu

Test sprawdza, czy formularz PDF może zostać samodzielnie odczytany, wypełniony, zweryfikowany i zapisany przez użytkowników technologii wspomagających.

Celem testu jest ustalenie, czy:

- pola formularza są dostępne,
- pola posiadają prawidłowe etykiety,
- zachowana jest logiczna kolejność nawigacji,
- komunikaty i instrukcje są dostępne,
- formularz może być obsługiwany przy użyciu klawiatury i czytnika ekranu.

# 5. Mapowanie do standardów

## WCAG 2.1 / WCAG 2.2

- 1.3.1 Informacje i relacje
- 2.1.1 Klawiatura
- 2.4.3 Kolejność fokusu
- 2.4.6 Nagłówki i etykiety
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety lub instrukcje
- 3.3.3 Sugestie korekty błędów
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

## EN 301 549

- 10.1.3.1 Info and Relationships
- 10.2.1.1 Keyboard
- 10.2.4.3 Focus Order
- 10.3.3.1 Error Identification
- 10.3.3.2 Labels or Instructions
- 10.4.1.2 Name, Role, Value

# 6. Zastosowanie do treści

Test stosuje się do:

- formularzy PDF udostępnianych do pobrania,
- formularzy urzędowych,
- wniosków elektronicznych,
- formularzy zgłoszeniowych,
- formularzy rekrutacyjnych,
- formularzy składanych poza systemami elektronicznymi.

# 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- odczytać formularz,
- przejść pomiędzy polami,
- zrozumieć wymagane informacje,
- wypełnić formularz,
- zweryfikować poprawność danych.

# 8. Dlaczego to jest ważne

Formularz PDF często stanowi jedyną drogę załatwienia sprawy.

Jeżeli pola formularza są niedostępne lub nieopisane, użytkownik może nie być w stanie:

- złożyć wniosku,
- przekazać wymaganych informacji,
- skorzystać z usługi publicznej.

# 9. Kogo to dotyczy

W szczególności:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób korzystających z czytników ekranu,
- osób z ograniczeniami ruchowymi.

# 10. Sposób testowania

## Krok 1

Otwórz formularz w programie obsługującym formularze PDF.

## Krok 2

Sprawdź możliwość przechodzenia pomiędzy polami za pomocą klawisza Tab.

## Krok 3

Zweryfikuj logiczną kolejność fokusu.

## Krok 4

Sprawdź, czy każde pole posiada zrozumiałą etykietę.

## Krok 5

Uruchom czytnik ekranu i sprawdź sposób odczytywania formularza.

## Krok 6

Spróbuj wypełnić wszystkie pola formularza.

## Krok 7

Jeżeli formularz zawiera walidację, sprawdź dostępność komunikatów błędów.

## Krok 8

Sprawdź możliwość zapisania formularza po wypełnieniu.

# 11. Kryteria oceny wyniku

## Spełnia

Formularz może zostać samodzielnie odczytany i wypełniony przy użyciu technologii wspomagających.

## Częściowo spełnia

Większość formularza jest dostępna, jednak występują pojedyncze problemy utrudniające jego obsługę.

## Nie spełnia

Istnieją problemy uniemożliwiające samodzielne wypełnienie formularza.

## Nie dotyczy

Dokument nie zawiera formularza.

# 12. Typowe niezgodności

- pola formularza nie są programowo oznaczone,
- brak etykiet pól,
- czytnik ekranu odczytuje pola jako „puste pole”,
- nieprawidłowa kolejność tabulacji,
- brak informacji o polach wymaganych,
- niedostępne komunikaty błędów,
- brak możliwości obsługi klawiaturą.

# 13. Dobre praktyki

- stosowanie formularzy zgodnych z PDF/UA,
- nadawanie jednoznacznych etykiet wszystkim polom,
- oznaczanie pól wymaganych,
- zapewnienie logicznej kolejności nawigacji,
- testowanie formularzy z użyciem czytnika ekranu.

# 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia
- Nie dotyczy

# 15. Ustalenia

Miejsce na zapisanie:

- rodzaju formularza,
- liczby problematycznych pól,
- jakości etykiet,
- problemów z nawigacją,
- problemów z walidacją.

# 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Formularz PDF nie zapewnia dostępnych etykiet dla części pól formularza. Użytkownicy czytników ekranu nie otrzymują informacji o przeznaczeniu pól, co utrudnia lub uniemożliwia samodzielne wypełnienie dokumentu.

# 17. Rekomendacje naprawcze

- oznaczyć wszystkie pola formularza programowo,
- dodać jednoznaczne etykiety,
- poprawić kolejność tabulacji,
- zapewnić dostępne komunikaty błędów,
- przygotować formularz zgodny z PDF/UA,
- rozważyć udostępnienie formularza w postaci formularza internetowego.

# 18. Powiązane testy

- Dokument PDF
- Skan dokumentu
- Dokument podpisany elektronicznie
- Widoczne etykiety lub instrukcje
- Identyfikacja błędów
- Sugestie korekty błędów
- Odczyt formularza przez czytnik ekranu
- Dostęp z klawiatury

---
