---
id: test-wizualizacja-danych
title: Karta testu — Wizualizacja danych
sidebar_label: Wizualizacja danych
sidebar_position: 64
description: Scenariusz testu sprawdzającego, czy złożona wizualizacja danych umożliwia użytkownikom dostęp do prezentowanych informacji, danych i funkcji niezależnie od sposobu korzystania z interfejsu.
keywords: [wizualizacja danych, dashboard, analityka, infografika, mapa danych, business intelligence, dostępność cyfrowa]
tags: [test dostępności, wizualizacja danych, dashboard, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-064**

---

## 2. Nazwa testu

**Wizualizacja danych**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownicy mogą uzyskać dostęp do informacji prezentowanych za pomocą złożonych wizualizacji danych.

### Co oznacza „wizualizacja danych”?

Wizualizacja danych to prezentacja danych wykorzystująca elementy graficzne, interaktywne lub przestrzenne.

Przykłady:

- dashboardy analityczne,
- panele statystyczne,
- mapy prezentujące dane,
- raporty Business Intelligence,
- infografiki analityczne,
- interaktywne wykresy wielowymiarowe,
- kokpity zarządcze.

Wizualizacja może zawierać:

- wykresy,
- tabele,
- mapy,
- filtry,
- wskaźniki KPI,
- przełączniki widoków,
- elementy interaktywne.

### Co sprawdza test?

Test ocenia, czy użytkownik może:

- uzyskać dostęp do danych,
- zrozumieć znaczenie prezentowanych informacji,
- korzystać z funkcji interaktywnych,
- analizować dane bez konieczności percepcji wizualnej.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **1.3.2 Znacząca kolejność (A)**
- **1.3.3 Właściwości zmysłowe (A)**
- **1.4.1 Użycie koloru (A)**
- **1.4.3 Kontrast (minimalny) (AA)**
- **1.4.10 Dopasowanie do szerokości ekranu (AA)**
- **1.4.11 Kontrast elementów nietekstowych (AA)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.7 Widoczny fokus (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

Odpowiednie wymagania odpowiadające wskazanym kryteriom WCAG.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- dashboardów,
- kokpitów menedżerskich,
- raportów statystycznych online,
- map danych,
- interaktywnych paneli analitycznych,
- wizualizacji GIS,
- systemów BI,
- interaktywnych infografik.

### Wyjątki

Nie dotyczy:

- pojedynczych wykresów,
- pojedynczych tabel danych.

Dla nich stosuje się odrębne testy.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się wizualizację danych, dla której:

- informacje są dostępne niezależnie od percepcji wizualnej,
- użytkownik może korzystać z funkcji interaktywnych przy użyciu klawiatury,
- znaczenie danych nie jest przekazywane wyłącznie kolorem,
- dostępne są alternatywy umożliwiające poznanie danych,
- elementy interfejsu posiadają dostępne nazwy,
- kolejność nawigacji jest logiczna,
- wizualizacja zachowuje użyteczność przy powiększeniu i zmianie szerokości ekranu.

---

## 8. Dlaczego to jest ważne

Wizualizacje danych coraz częściej stanowią podstawowy sposób prezentowania informacji publicznych.

Jeżeli wizualizacja nie jest dostępna:

- użytkownik może nie mieć dostępu do danych,
- może nie rozumieć zależności prezentowanych wizualnie,
- może nie móc korzystać z filtrów lub funkcji eksploracji danych,
- może utracić dostęp do istotnych informacji publicznych.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób z zaburzeniami rozpoznawania kolorów,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wizualizację danych.

### Krok 2

Określ:

- jakie informacje prezentuje,
- jakie funkcje oferuje użytkownikowi.

### Krok 3

Sprawdź możliwość obsługi wyłącznie przy użyciu klawiatury.

### Krok 4

Sprawdź działanie:

- filtrów,
- przełączników,
- rozwijanych list,
- przycisków,
- mechanizmów eksploracji danych.

### Krok 5

Sprawdź widoczność fokusu.

### Krok 6

Sprawdź, czy informacje nie są przekazywane wyłącznie kolorem.

### Krok 7

Sprawdź kontrast elementów.

### Krok 8

Sprawdź dostępność danych źródłowych.

Mogą być udostępnione jako:

- tabela,
- raport,
- zestaw danych,
- opis tekstowy.

### Krok 9

Uruchom czytnik ekranu.

### Krok 10

Sprawdź, czy użytkownik może:

- rozpoznać strukturę wizualizacji,
- korzystać z funkcji,
- odczytać informacje.

### Krok 11

Sprawdź działanie przy:

- powiększeniu 200%,
- szerokości ekranu 320 CSS px.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wizualizacja umożliwia dostęp do danych i funkcji wszystkim użytkownikom niezależnie od sposobu korzystania z interfejsu.

### Wynik częściowo pozytywny

Dostęp do danych jest możliwy, jednak niektóre funkcje lub informacje są utrudnione.

### Wynik negatywny

Istotne dane lub funkcje są niedostępne dla części użytkowników.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak dostępu do danych źródłowych,
- znaczenie przekazywane wyłącznie kolorem,
- niedostępne filtry,
- niedostępne wykresy interaktywne,
- brak obsługi klawiaturą,
- niewidoczny fokus,
- nieczytelny kontrast,
- brak alternatywy tekstowej,
- utrata funkcjonalności po powiększeniu.

---

## 13. Dobre praktyki

- Udostępnianie danych również w postaci tabel.
- Publikowanie podsumowań tekstowych.
- Zapewnienie pełnej obsługi klawiaturą.
- Projektowanie zgodnie z zasadą „najpierw dane, potem wizualizacja”.
- Testowanie z czytnikiem ekranu.
- Testowanie na urządzeniach mobilnych.

---

## 14. Wynik testu

- Zgodne
- Częściowo zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Wizualizacja danych nie zapewnia dostępu do części informacji użytkownikom korzystającym z technologii wspomagających. Istotne dane są prezentowane wyłącznie w formie graficznej.

lub

> Funkcje filtrowania i eksploracji danych nie są w pełni dostępne z klawiatury, co ogranicza możliwość korzystania z wizualizacji części użytkowników.

---

## 17. Rekomendacje naprawcze

- Udostępnić dane źródłowe w formie tabelarycznej.
- Zapewnić alternatywy tekstowe i podsumowania.
- Umożliwić pełną obsługę klawiaturą.
- Poprawić kontrast elementów interfejsu.
- Wyeliminować zależność od koloru jako jedynego nośnika informacji.
- Zweryfikować działanie z technologiami wspomagającymi.
- Przetestować wizualizację przy powiększeniu i na urządzeniach mobilnych.

---

## 18. Powiązane testy

- Wykres
- Tabela danych
- Tekst alternatywny
- Wystarczający kontrast
- Użycie koloru
- Dostęp z klawiatury
- Kolejność fokusu
- Widoczność fokusu
- Dopasowanie do szerokości ekranu
- Odczyt struktury przez czytnik ekranu
---