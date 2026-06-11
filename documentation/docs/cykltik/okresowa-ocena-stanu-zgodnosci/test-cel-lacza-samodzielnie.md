---
id: test-cel-lacza-samodzielnie
title: Karta testu — Cel łącza (samodzielnie)
sidebar_label: Cel łącza (samodzielnie)
sidebar_position: 36
description: Scenariusz testu sprawdzającego, czy przeznaczenie każdego łącza można określić na podstawie samej nazwy łącza, bez konieczności analizowania kontekstu.
keywords: [cel łącza, link purpose, linki, WCAG AAA, dostępność cyfrowa]
tags: [test dostępności, linki, WCAG AAA, profil rozszerzony]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---



## 1. ID testu

**testID-036**

---

## 2. Nazwa testu

**Cel łącza (samodzielnie)**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie  |
| --------------- | ----------- |
| Podstawowy      | Nie         |
| Rozszerzony     | Tak         |
| Audyt zgodności | Opcjonalnie |
| Ekspercki       | Tak         |

---

## 4. Opis testu

Test służy do sprawdzenia, czy przeznaczenie każdego łącza można określić na podstawie samej jego nazwy, bez konieczności analizowania otaczającego kontekstu.

### Co oznacza pojęcie „cel łącza”?

Cel łącza to informacja o tym:

- dokąd prowadzi łącze,
- jaki zasób zostanie otwarty,
- jakie działanie zostanie wykonane po aktywowaniu łącza.

### Co oznacza „samodzielnie”?

W tym teście oceniamy wyłącznie nazwę samego łącza.

Nie bierzemy pod uwagę:

- nagłówków,
- akapitów,
- opisów znajdujących się obok,
- układu strony,
- innych informacji kontekstowych.

Użytkownik powinien rozumieć przeznaczenie łącza po przeczytaniu wyłącznie jego nazwy.

### Przykłady

#### Poprawne

- Deklaracja dostępności
- Regulamin rekrutacji
- Formularz zgłoszeniowy
- Kontakt z urzędem
- Wyniki konsultacji społecznych

#### Niepoprawne

- Więcej
- Czytaj
- Zobacz
- Pobierz
- Kliknij tutaj

Takie nazwy mogą być zgodne z WCAG 2.4.4, ale nie spełniają wymagań WCAG 2.4.9.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.9 Cel łącza (samodzielnie) (AAA)**

### EN 301 549

Brak odpowiednika w wymaganiach opartych na poziomie AA.

### Techniki WCAG

- G91
- H30
- H77
- ARIA8

### Status

**Wymaganie dodatkowe (profil rozszerzony).**

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich łączy występujących w:

- treści stron,
- artykułach,
- aktualnościach,
- listach dokumentów,
- wynikach wyszukiwania,
- kartach usług,
- tabelach,
- menu,
- aplikacjach internetowych.

Dotyczy również:

- obrazów będących łączami,
- ikon będących łączami,
- przycisków realizowanych jako łącza.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się łącze, którego przeznaczenie można określić na podstawie samej nazwy łącza.

Użytkownik powinien móc przewidzieć rezultat aktywowania łącza bez konieczności analizowania dodatkowego kontekstu.

---

## 8. Dlaczego to jest ważne

Wiele technologii wspomagających umożliwia wyświetlenie listy wszystkich łączy znajdujących się na stronie.

Na takiej liście użytkownik często widzi wyłącznie nazwy łączy.

Jeżeli nazwy są niejednoznaczne:

- trudno odnaleźć potrzebną informację,
- wzrasta liczba błędów nawigacyjnych,
- korzystanie z serwisu wymaga większego wysiłku.

Jednoznaczne nazwy łączy zwiększają efektywność korzystania ze strony i poprawiają orientację użytkownika.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z list łączy generowanych przez czytniki ekranu,
- osób korzystających z monitorów brajlowskich,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób starszych,
- wszystkich użytkowników szybko przeglądających treść strony.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie łącza znajdujące się na stronie.

### Krok 2

Dla każdego łącza odczytaj wyłącznie jego nazwę.

### Krok 3

Nie analizuj otaczającego tekstu.

### Krok 4

Oceń, czy na podstawie samej nazwy można określić:

- dokąd prowadzi łącze,
- jaki zasób zostanie otwarty,
- jakie działanie zostanie wykonane.

### Krok 5

Sprawdź szczególnie łącza zawierające nazwy:

- Więcej,
- Czytaj,
- Zobacz,
- Pobierz,
- Kliknij tutaj,
- Szczegóły.

### Krok 6

Sprawdź również nazwy dostępnościowe ikon i obrazów pełniących funkcję łączy.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Cel każdego łącza można określić na podstawie samej nazwy.

### Wynik częściowo pozytywny

Pojedyncze łącza wymagają kontekstu do zrozumienia celu, ale większość spełnia wymaganie.

### Wynik negatywny

Znaczna część łączy wymaga dodatkowego kontekstu do określenia celu.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- wiele łączy o nazwie „Więcej”,
- wiele łączy o nazwie „Czytaj”,
- wiele łączy „Pobierz” bez wskazania pobieranego dokumentu,
- identyczne nazwy prowadzące do różnych zasobów,
- ikony będące łączami bez jednoznacznej nazwy dostępnościowej,
- obrazy będące łączami bez tekstu alternatywnego określającego cel.

---

## 13. Dobre praktyki

- Formułowanie nazw łączy opisujących ich przeznaczenie.
- Wskazywanie rodzaju dokumentu i formatu pliku.
- Wskazywanie nazwy usługi, dokumentu lub zasobu.
- Unikanie ogólnych określeń typu „Więcej” lub „Kliknij tutaj”.
- Projektowanie treści tak, aby lista wszystkich łączy była zrozumiała sama w sobie.

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

> Nazwy części łączy nie pozwalają określić ich przeznaczenia bez analizy otaczającego kontekstu. Użytkownicy korzystający z listy łączy nie mogą skutecznie zidentyfikować prowadzących do poszczególnych zasobów odnośników.

lub

> W serwisie występuje wiele łączy o nazwie „Więcej”, które prowadzą do różnych treści. Cel tych łączy nie jest możliwy do określenia na podstawie samej nazwy.

---

## 17. Rekomendacje naprawcze

- Zastąpić ogólne nazwy łączy nazwami opisującymi ich przeznaczenie.
- Wskazywać nazwę dokumentu, usługi lub zasobu docelowego.
- Uzupełnić nazwy dostępnościowe obrazów i ikon będących łączami.
- Zweryfikować listę wszystkich łączy pod kątem samodzielnej zrozumiałości.
- Wprowadzić zasady redakcyjne dotyczące tworzenia nazw łączy.

---

## 18. Powiązane testy

- Cel łącza (w kontekście)
- Tekst alternatywny
- Nazwa dostępnościowa
- Tytuł strony
- Nagłówki
- Zrozumiałość treści
