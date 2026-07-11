---
id: test-jednoznakowe-skroty-klawiaturowe
title: Scenariusz testu - Jednoznakowe skróty klawiaturowe
sidebar_label: Jednoznakowe skróty klawiaturowe
sidebar_position: 136
description: Scenariusz testu sprawdzającego, czy skróty klawiaturowe wykorzystujące pojedyncze znaki mogą zostać wyłączone, zmienione lub są aktywne wyłącznie po uzyskaniu fokusu przez odpowiedni komponent.
keywords: [skróty klawiaturowe, pojedynczy znak, klawiatura, rozpoznawanie mowy, WCAG 2.1.4, dostępność cyfrowa]
tags: [test dostępności, klawiatura, skróty klawiaturowe, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-136**

---

## 2. Nazwa testu

**Jednoznakowe skróty klawiaturowe**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy skróty klawiaturowe uruchamiane pojedynczym znakiem (literą, cyfrą, znakiem interpunkcyjnym lub symbolem) mogą zostać wyłączone, zmienione albo działają wyłącznie wtedy, gdy fokus znajduje się na odpowiednim komponencie.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- **2.1.4 Jednoznakowe skróty klawiaturowe (A)**

### Powiązane wymagania

- obsługa klawiaturą,
- rozpoznawanie mowy,
- aplikacje internetowe,
- systemy redakcyjne,
- aplikacje biznesowe.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji internetowych,
- systemów CMS,
- systemów elektronicznego obiegu dokumentów,
- edytorów tekstu online,
- aplikacji biurowych,
- aplikacji webowych wykorzystujących skróty klawiaturowe.

W większości typowych stron informacyjnych test nie będzie miał zastosowania.

---

## 7. Oczekiwany wynik

Jeżeli aplikacja wykorzystuje jednoznakowe skróty klawiaturowe, użytkownik może:

- wyłączyć je,
- zmienić je na skróty wieloklawiszowe,
- lub korzystać z nich wyłącznie wtedy, gdy odpowiedni komponent posiada fokus.

---

## 8. Dlaczego to jest ważne

Osoby korzystające z rozpoznawania mowy często wypowiadają pojedyncze litery, cyfry lub słowa zawierające takie znaki.

Jeżeli aplikacja interpretuje je jako polecenia klawiaturowe, może dojść do:

- przypadkowego uruchomienia funkcji,
- utraty danych,
- niezamierzonych zmian w dokumencie,
- dezorientacji użytkownika.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób korzystających z oprogramowania do rozpoznawania mowy,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników alternatywnych metod sterowania komputerem,
- użytkowników zaawansowanych aplikacji internetowych.

---

## 10. Sposób testowania

### Krok 1. Identyfikacja skrótów

Sprawdź dokumentację aplikacji lub interfejs użytkownika.

Ustal, czy wykorzystywane są skróty aktywowane pojedynczym znakiem, np.:

- A
- S
- D
- 1
- 2
- /
- ?

bez konieczności użycia klawiszy:

- Ctrl,
- Alt,
- Shift,
- Command.

---

### Krok 2. Test działania

Uruchom aplikację i sprawdź, czy naciśnięcie pojedynczego znaku powoduje wykonanie funkcji.

---

### Krok 3. Możliwość wyłączenia

Sprawdź, czy użytkownik może wyłączyć skróty jednoznakowe.

---

### Krok 4. Możliwość zmiany skrótów

Jeżeli nie można ich wyłączyć:

sprawdź, czy użytkownik może przypisać inne kombinacje klawiszy.

---

### Krok 5. Zależność od fokusu

Jeżeli skróty nie mogą zostać wyłączone ani zmienione:

sprawdź, czy działają wyłącznie wtedy, gdy fokus znajduje się na odpowiednim komponencie.

Przykład:

Skrót działa wyłącznie wewnątrz edytora tekstu, a nie w całej aplikacji.

---

### Krok 6. Test z polem edycyjnym

Sprawdź, czy wpisywanie tekstu do formularza lub pola edycyjnego nie powoduje przypadkowego uruchamiania funkcji.

---

### Krok 7. Test z rozpoznawaniem mowy

Jeżeli to możliwe:

zweryfikuj działanie aplikacji podczas korzystania z oprogramowania rozpoznającego mowę.

---

## 11. Kryteria oceny wyniku

### Spełnione

Jednoznakowe skróty klawiaturowe mogą zostać wyłączone, zmienione lub działają wyłącznie w kontekście komponentu posiadającego fokus.

### Częściowo spełnione

Część skrótów spełnia wymagania, ale nie wszystkie.

### Niespełnione

Jednoznakowe skróty działają globalnie i nie można ich wyłączyć ani zmodyfikować.

---

## 12. Typowe niezgodności

- globalne skróty aktywowane pojedynczą literą,
- brak możliwości wyłączenia skrótów,
- brak możliwości zmiany skrótów,
- aktywowanie funkcji podczas wpisywania tekstu,
- konflikt z oprogramowaniem do rozpoznawania mowy.

---

## 13. Dobre praktyki

- stosowanie skrótów wieloklawiszowych,
- umożliwienie wyłączenia skrótów,
- umożliwienie konfiguracji skrótów,
- ograniczenie działania skrótów do aktywnego komponentu,
- dokumentowanie dostępnych skrótów.

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

> Aplikacja wykorzystuje jednoznakowe skróty klawiaturowe aktywne globalnie. Użytkownik nie może ich wyłączyć ani zmienić. Może to powodować przypadkowe uruchamianie funkcji podczas korzystania z oprogramowania do rozpoznawania mowy lub innych technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- umożliwić wyłączenie jednoznakowych skrótów,
- zastąpić je skrótami wieloklawiszowymi,
- umożliwić konfigurację skrótów,
- ograniczyć ich działanie do aktywnego komponentu,
- przetestować aplikację z technologiami rozpoznawania mowy.

---

## 18. Powiązane testy

- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-025 Pułapka klawiaturowa
- testID-093 Dostępne uwierzytelnianie
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)

---