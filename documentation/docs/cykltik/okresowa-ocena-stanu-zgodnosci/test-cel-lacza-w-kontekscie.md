---
id: test-cel-lacza-w-kontekscie
title: Karta testu — Cel łącza (w kontekście)
sidebar_label: Cel łącza (w kontekście)
sidebar_position: 35
description: Scenariusz testu sprawdzającego, czy przeznaczenie łącza można określić na podstawie jego treści lub treści dostępnej w bezpośrednim kontekście.
keywords: [cel łącza, link purpose, linki, odnośniki, dostępność cyfrowa, WCAG]
tags: [test dostępności, linki, nawigacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---



## 1. Identyfikator testu

**testID-035**

---

## 2. Nazwa testu

**Cel łącza (w kontekście)**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik może określić przeznaczenie łącza na podstawie jego treści lub treści dostępnej w bezpośrednim kontekście.

### Co oznacza pojęcie „cel łącza”?

Cel łącza to informacja o tym, dokąd prowadzi łącze lub jakie działanie zostanie wykonane po jego aktywowaniu.

Przykłady poprawnie określonego celu:

- „Deklaracja dostępności”
- „Regulamin rekrutacji”
- „Pobierz formularz zgłoszeniowy (PDF)”
- „Kontakt z urzędem”

Po przeczytaniu treści łącza użytkownik wie, czego może się spodziewać po jego aktywowaniu.

### Co oznacza pojęcie „kontekst łącza”?

Kontekst to informacje znajdujące się bezpośrednio przy łączu, które pomagają zrozumieć jego przeznaczenie.

Przykład:

**Program konferencji**

[Więcej]

W tym przypadku słowo „Więcej” samo w sobie nie określa celu łącza, ale jego znaczenie wynika z bezpośredniego kontekstu.

### Kiedy występuje problem?

Problem występuje wtedy, gdy użytkownik nie jest w stanie określić celu łącza.

Przykłady niejednoznacznych łączy:

- „Kliknij tutaj”
- „Czytaj”
- „Więcej”
- „Zobacz”
- „Pobierz”

bez dodatkowego kontekstu wyjaśniającego ich znaczenie.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.4 Cel łącza (w kontekście) (A)**

### EN 301 549

- **9.2.4.4 Link Purpose (In Context)**
- **10.2.4.4 Link Purpose (In Context)**
- **11.2.4.4 Link Purpose (In Context)**

### Techniki WCAG

- G91
- H30
- H77
- ARIA8

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich łączy występujących w:

- treści stron,
- artykułach,
- aktualnościach,
- listach dokumentów,
- wynikach wyszukiwania,
- menu,
- kartach usług,
- tabelach danych,
- komponentach interfejsu użytkownika.

Dotyczy zarówno:

- łączy tekstowych,
- obrazów będących łączami,
- ikon będących łączami.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się łącze, dla którego cel można określić:

- na podstawie samej treści łącza,

lub

- na podstawie treści łącza oraz jego bezpośredniego kontekstu.

Użytkownik powinien móc przewidzieć rezultat aktywowania łącza.

---

## 8. Dlaczego to jest ważne

Użytkownicy technologii wspomagających często przeglądają strony za pomocą listy wszystkich łączy.

Jeżeli nazwy łączy są niejednoznaczne:

- trudniej odnaleźć potrzebne informacje,
- wzrasta liczba błędów nawigacyjnych,
- korzystanie ze strony staje się wolniejsze,
- użytkownik może nie wiedzieć, które łącze wybrać.

Jednoznaczne określenie celu łącza poprawia orientację i efektywność korzystania z serwisu.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających z listy łączy generowanej przez technologie wspomagające,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób starszych,
- wszystkich użytkowników szybko skanujących treść strony.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie łącza występujące na stronie.

### Krok 2

Dla każdego łącza przeczytaj wyłącznie jego treść.

### Krok 3

Oceń, czy na podstawie samej treści można określić jego przeznaczenie.

### Krok 4

Jeżeli nie jest to możliwe, sprawdź bezpośredni kontekst łącza.

### Krok 5

Oceń, czy użytkownik może przewidzieć rezultat aktywowania łącza.

### Krok 6

Zwróć szczególną uwagę na łącza o nazwach:

- „Więcej”
- „Czytaj”
- „Zobacz”
- „Pobierz”
- „Kliknij tutaj”

oraz podobne skrócone formy.

### Krok 7

Sprawdź również obrazy i ikony pełniące funkcję łączy.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Cel każdego łącza można określić na podstawie jego treści lub bezpośredniego kontekstu.

### Wynik częściowo pozytywny

Występują pojedyncze niejednoznaczne łącza, które nie utrudniają istotnie korzystania z serwisu.

### Wynik negatywny

Wiele łączy nie pozwala określić celu ich aktywowania.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- łącza „Kliknij tutaj” bez kontekstu,
- liczne łącza „Więcej” prowadzące do różnych treści,
- łącza „Pobierz” bez wskazania pobieranego dokumentu,
- ikony będące łączami bez nazwy dostępnościowej,
- obrazy będące łączami bez alternatywy tekstowej,
- kilka różnych łączy o identycznej nazwie prowadzących do różnych miejsc.

---

## 13. Dobre praktyki

- Tworzenie nazw łączy opisujących ich cel.
- Wskazywanie rodzaju zasobu, np. PDF, DOCX, XLSX.
- Wskazywanie nazwy dokumentu lub usługi.
- Unikanie zwrotów typu „Kliknij tutaj”.
- Projektowanie treści umożliwiającej zrozumienie celu łącza bez konieczności czytania dużych fragmentów tekstu.

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

> Część łączy nie pozwala określić celu ich aktywowania. Nazwy takie jak „Więcej”, „Czytaj” lub „Kliknij tutaj” nie umożliwiają użytkownikowi przewidzenia rezultatu przejścia do wskazanego zasobu.

lub

> Obrazy pełniące funkcję łączy nie posiadają alternatyw tekstowych określających ich przeznaczenie, przez co cel łącza nie jest dostępny dla użytkowników technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- Zastąpić ogólne nazwy łączy nazwami opisującymi ich cel.
- Uzupełnić kontekst dla łączy o skróconych nazwach.
- Zapewnić nazwy dostępnościowe dla ikon i obrazów będących łączami.
- Wskazywać rodzaj oraz nazwę zasobu docelowego.
- Zweryfikować wszystkie łącza podczas publikacji treści.

---

## 18. Powiązane testy

- Tekst alternatywny
- Nazwa dostępnościowa
- Tytuł strony
- Nagłówki
- Łącza pomijania
- Struktura strony
- Zrozumiałość treści
