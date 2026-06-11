---
id: test-wykres
title: Karta testu — Wykres
sidebar_label: Wykres
sidebar_position: 63
description: Scenariusz testu sprawdzającego, czy informacje prezentowane na wykresie są dostępne dla użytkowników technologii wspomagających oraz osób niemogących korzystać z wizualnej formy prezentacji danych.
keywords: [wykres, dane, wizualizacja danych, infografika, dostępność cyfrowa]
tags: [test dostępności, wykresy, wizualizacja danych, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-063**

---

## 2. Nazwa testu

**Wykres**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy informacje przedstawione na wykresie są dostępne dla użytkowników, którzy nie mogą korzystać z wizualnej formy prezentacji danych.

### Co oznacza „wykres”?

Wykres jest graficzną reprezentacją danych lub zależności pomiędzy danymi.

Przykłady:

- wykres słupkowy,
- wykres liniowy,
- wykres kołowy,
- histogram,
- wykres punktowy,
- wykres obszarowy.

### Co sprawdza test?

Test nie ocenia poprawności merytorycznej danych.

Sprawdza natomiast, czy użytkownik może:

- uzyskać dostęp do danych,
- zrozumieć znaczenie wykresu,
- poznać główne wnioski wynikające z prezentowanych danych,
- korzystać z informacji bez konieczności percepcji wizualnej.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **1.3.3 Właściwości zmysłowe (A)**
- **1.4.1 Użycie koloru (A)**
- **1.4.3 Kontrast (minimalny) (AA)**
- **1.4.11 Kontrast elementów nietekstowych (AA)**

### EN 301 549

- **9.1.1.1 Non-text Content**
- **9.1.3.1 Info and Relationships**
- **9.1.3.3 Sensory Characteristics**
- **9.1.4.1 Use of Color**
- **9.1.4.3 Contrast (Minimum)**
- **9.1.4.11 Non-text Contrast**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- wykresów publikowanych na stronach internetowych,
- wykresów w dokumentach PDF,
- wykresów w dokumentach DOCX i ODT,
- wykresów interaktywnych,
- raportów statystycznych,
- prezentacji danych liczbowych.

### Wyjątki

Nie dotyczy:

- tabel danych,
- map,
- infografik wieloelementowych,
- dashboardów analitycznych.

Dla tych obiektów stosuje się odrębne testy.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się wykres, dla którego:

- zapewniono alternatywę umożliwiającą zrozumienie prezentowanych danych,
- użytkownik może poznać główne informacje i zależności przedstawione na wykresie,
- znaczenie danych nie jest przekazywane wyłącznie kolorem,
- etykiety i opisy są czytelne,
- kontrast elementów wykresu spełnia wymagania dostępności,
- dane lub ich równoważna prezentacja są dostępne dla technologii wspomagających.

---

## 8. Dlaczego to jest ważne

Wykresy często przedstawiają informacje niedostępne w innych częściach dokumentu lub strony.

Jeżeli wykres nie posiada odpowiedniej alternatywy:

- osoby niewidome nie poznają danych,
- osoby słabowidzące mogą mieć trudności z odczytem informacji,
- osoby z zaburzeniami rozpoznawania kolorów mogą nie rozróżnić elementów wykresu.

W rezultacie część użytkowników może zostać pozbawiona dostępu do istotnych informacji.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających z czytników ekranu,
- osób z zaburzeniami rozpoznawania kolorów,
- osób korzystających z powiększenia ekranu,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wykres.

### Krok 2

Określ, jakie informacje prezentuje.

### Krok 3

Sprawdź, czy wykres posiada:

- tytuł,
- opis,
- etykiety osi (jeżeli występują),
- legendę (jeżeli jest potrzebna).

### Krok 4

Sprawdź, czy znaczenie danych nie jest przekazywane wyłącznie kolorem.

### Krok 5

Sprawdź kontrast:

- tekstów,
- osi,
- linii,
- słupków,
- legendy.

### Krok 6

Sprawdź, czy dostępna jest alternatywa umożliwiająca poznanie danych.

Może to być:

- tabela danych,
- opis tekstowy,
- szczegółowe podsumowanie.

### Krok 7

Uruchom czytnik ekranu.

### Krok 8

Oceń, czy użytkownik może zrozumieć główne informacje prezentowane na wykresie.

### Krok 9

Oceń, czy użytkownik może uzyskać dostęp do danych bez konieczności oglądania wykresu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie istotne informacje prezentowane na wykresie są dostępne również dla użytkowników niekorzystających z percepcji wizualnej.

### Wynik częściowo pozytywny

Dostępna jest alternatywa, lecz nie przekazuje wszystkich informacji lub zależności.

### Wynik negatywny

Istotne informacje są dostępne wyłącznie w postaci wizualnej.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak opisu wykresu,
- brak dostępu do danych źródłowych,
- znaczenie przekazywane wyłącznie kolorem,
- niewystarczający kontrast,
- brak legendy,
- nieczytelne etykiety,
- obraz wykresu bez alternatywy tekstowej,
- interaktywny wykres niedostępny z klawiatury.

---

## 13. Dobre praktyki

- Publikowanie danych również w formie tabeli.
- Dodawanie podsumowania najważniejszych wniosków.
- Stosowanie wzorów, oznaczeń i etykiet oprócz koloru.
- Projektowanie wykresów z wysokim kontrastem.
- Udostępnianie danych źródłowych.
- Testowanie wykresów z użytkownikami technologii wspomagających.

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

> Wykres nie posiada alternatywy umożliwiającej poznanie prezentowanych danych oraz zależności osobom korzystającym z technologii wspomagających.

lub

> Znaczenie danych na wykresie jest przekazywane wyłącznie kolorem, co utrudnia lub uniemożliwia ich interpretację części użytkowników.

---

## 17. Rekomendacje naprawcze

- Dodać opis wykresu.
- Udostępnić dane w postaci tabeli.
- Opisać najważniejsze zależności i wnioski.
- Zapewnić odpowiedni kontrast elementów wykresu.
- Nie opierać rozróżniania danych wyłącznie na kolorze.
- Zweryfikować dostępność interaktywnych funkcji wykresu.

---

## 18. Powiązane testy

- Tabela danych
- Wizualizacja danych
- Tekst alternatywny
- Wystarczający kontrast
- Użycie koloru
- Dokument PDF
- Dokument DOCX (ODT)
---