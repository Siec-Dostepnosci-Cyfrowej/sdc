---
id: test-naglowki
title: Karta testu — Nagłówki
sidebar_label: Nagłówki
sidebar_position: 19
description: Scenariusz testu sprawdzającego, czy nagłówki są poprawnie oznaczone programowo oraz czy opisują tytułowaną przez siebie treść.
keywords: [nagłówki, heading, h1, h2, struktura treści, dostępność cyfrowa, WCAG]
tags: [test dostępności, nagłówki, struktura treści, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-019**

---

## 2. Nazwa testu

**Nagłówki**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy napisy pełniące funkcję tytułów lub śródtytułów zostały poprawnie oznaczone jako nagłówki oraz czy opisują następującą po nich treść.

W ramach testu należy zweryfikować:

- czy wszystkie napisy pełniące funkcję nagłówków są oznaczone programowo jako nagłówki,
- czy nagłówki opisują temat lub cel następującej po nich treści,
- czy struktura nagłówków odzwierciedla strukturę treści strony.

Test koncentruje się przede wszystkim na znaczeniu i funkcji nagłówków, a nie wyłącznie na ich wyglądzie wizualnym.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.6 Nagłówki i etykiety (AA)**
- **1.3.1 Informacje i relacje (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.2.4.6 Headings and Labels**
- **10.1.3.1 Info and Relationships**
- **10.2.4.6 Headings and Labels**
- **11.1.3.1 Info and Relationships**
- **11.2.4.6 Headings and Labels**

### Powiązane dobre praktyki

- Stosowanie logicznej hierarchii nagłówków H1–H6
- Rozpoczynanie treści głównej od nagłówka H1
- Unikanie pomijania poziomów nagłówków

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich stron i dokumentów internetowych zawierających:

- sekcje treści,
- artykuły,
- aktualności,
- opisy usług,
- formularze,
- dokumentację,
- strony informacyjne,
- publikacje elektroniczne.

Dotyczy wszystkich napisów, które:

- wyglądają jak nagłówki,
- pełnią funkcję nagłówków,
- opisują następującą po nich treść.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której:

- każdy tekst pełniący funkcję nagłówka został oznaczony jako nagłówek,
- każdy nagłówek opisuje temat lub cel następującej po nim treści,
- struktura nagłówków umożliwia zrozumienie organizacji treści.

Dodatkowo jako dobra praktyka:

- treść główna rozpoczyna się od nagłówka H1,
- poziomy nagłówków odzwierciedlają hierarchię treści,
- nie są pomijane poziomy nagłówków bez uzasadnienia.

---

## 8. Dlaczego to jest ważne

Nagłówki pełnią funkcję drogowskazów w treści.

Pozwalają użytkownikom:

- szybko zorientować się w strukturze strony,
- odnaleźć interesujące informacje,
- zrozumieć organizację treści,
- sprawnie przemieszczać się pomiędzy sekcjami.

Czytniki ekranu umożliwiają wyświetlenie listy nagłówków oraz nawigację pomiędzy nimi. Jeżeli nagłówki nie są oznaczone programowo lub nie opisują treści, użytkownicy tracą możliwość efektywnego korzystania z tych funkcji.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących korzystających z narzędzi nawigacji strukturalnej,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- wszystkich użytkowników przeglądających długie lub złożone treści.

---

## 10. Sposób testowania

### Krok 1

Otwórz stronę i zidentyfikuj wszystkie napisy pełniące funkcję tytułów lub śródtytułów.

### Krok 2

Uruchom walidator Nu HTML Checker lub inne narzędzie prezentujące strukturę nagłówków.

### Krok 3

Przeanalizuj konspekt (outline) nagłówków wygenerowany przez narzędzie.

### Krok 4

Sprawdź, czy wszystkie widoczne nagłówki występują w strukturze nagłówków.

### Krok 5

Sprawdź, czy w strukturze nie występują elementy oznaczone jako nagłówki, które nie pełnią tej funkcji wizualnie lub znaczeniowo.

### Krok 6

Zweryfikuj, czy każdy nagłówek opisuje następującą po nim treść.

### Krok 7

Oceń logiczność struktury i hierarchii nagłówków.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

- Wszystkie napisy pełniące funkcję nagłówków są oznaczone jako nagłówki.
- Wszystkie nagłówki opisują tytułowaną treść.

### Wynik częściowo pozytywny

- Występują pojedyncze przypadki nieprawidłowych nagłówków.
- Liczba takich przypadków nie przekracza 10% wszystkich nagłówków na stronie.

### Wynik negatywny

- Istotna część nagłówków nie została oznaczona programowo.
- Nagłówki nie opisują tytułowanej treści.
- Elementy niebędące nagłówkami zostały oznaczone jako nagłówki.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- tekst wyglądający jak nagłówek nie został oznaczony znacznikiem nagłówka,
- zastosowanie pogrubienia lub większej czcionki zamiast nagłówka,
- nagłówek nie opisuje treści znajdującej się poniżej,
- element dekoracyjny oznaczony jako nagłówek,
- używanie nagłówków wyłącznie do uzyskania efektu wizualnego,
- brak nagłówków w długich treściach podzielonych na sekcje.

---

## 13. Dobre praktyki

- Rozpoczynanie treści głównej od nagłówka H1.
- Stosowanie logicznej hierarchii H1–H6.
- Zachowanie spójnego sposobu budowania struktury nagłówków w całym serwisie.
- Formułowanie krótkich i jednoznacznych nagłówków.
- Wykorzystywanie nagłówków do organizowania treści, a nie wyłącznie do stylizacji.

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

> Na stronie występują sekcje treści oznaczone wizualnie jako nagłówki, które nie zostały oznaczone programowo za pomocą elementów nagłówków HTML. W rezultacie struktura treści nie jest poprawnie przekazywana technologiom wspomagającym.

lub

> Część elementów oznaczonych jako nagłówki nie opisuje następującej po nich treści, co utrudnia zrozumienie struktury strony i korzystanie z nawigacji nagłówkami.

---

## 17. Rekomendacje naprawcze

- Oznaczyć wszystkie nagłówki za pomocą odpowiednich elementów H1–H6.
- Usunąć oznaczenia nagłówków z elementów niepełniących funkcji nagłówków.
- Dostosować treść nagłówków do opisywanej sekcji.
- Wprowadzić zasady redakcyjne dotyczące stosowania nagłówków.
- Uwzględnić kontrolę struktury nagłówków w procesie publikacji i odbioru stron.

---

## 18. Powiązane testy

- Tytuł strony
- Język strony
- Struktura strony
- Obszary strony (landmarki)
- Kolejność fokusu
- Linki i ich cel
