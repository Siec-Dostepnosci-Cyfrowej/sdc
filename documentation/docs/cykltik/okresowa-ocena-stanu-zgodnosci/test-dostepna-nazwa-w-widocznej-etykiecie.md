---
id: test-dostepna-nazwa-w-widocznej-etykiecie
title: Karta testu — Dostępna nazwa w widocznej etykiecie
sidebar_label: Dostępna nazwa w widocznej etykiecie
sidebar_position: 70
description: Scenariusz testu sprawdzającego, czy dostępna nazwa elementu interaktywnego zawiera tekst widoczny dla użytkownika.
keywords: [label in name, dostępna nazwa, widoczna etykieta, rozpoznawanie mowy, dostępność cyfrowa]
tags: [test dostępności, dostępna nazwa, etykieta, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-071**

---

## 2. Nazwa testu

**Dostępna nazwa w widocznej etykiecie**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy dostępna nazwa elementu interaktywnego zawiera tekst widoczny dla użytkownika.

### Co oznacza „widoczna etykieta”?

Widoczna etykieta to tekst wyświetlany na ekranie jako nazwa elementu interaktywnego.

Przykłady:

- „Szukaj”
- „Wyślij”
- „Zaloguj się”
- „Pobierz dokument”
- „Dodaj do koszyka”

### Co oznacza „dostępna nazwa”?

Dostępna nazwa to nazwa odczytywana przez technologie wspomagające, np. czytniki ekranu lub programy rozpoznawania mowy.

### Jakie jest wymaganie?

Jeżeli element posiada widoczną etykietę, tekst tej etykiety powinien występować również w dostępnej nazwie.

### Przykład poprawny

Widoczna etykieta:

> Szukaj

Dostępna nazwa:

> Szukaj

lub

> Szukaj w serwisie

### Przykład niepoprawny

Widoczna etykieta:

> Szukaj

Dostępna nazwa:

> Wykonaj wyszukiwanie

Użytkownik rozpoznawania mowy może powiedzieć:

> Kliknij Szukaj

a system nie będzie w stanie jednoznacznie dopasować polecenia.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **2.5.3 Etykieta w nazwie (A)**

### EN 301 549

* **9.2.5.3 Label in Name**

### Techniki WCAG

* G208
* ARIA8

---

## 6. Zastosowanie do treści

Test stosuje się do:

- przycisków,
- łączy,
- pól formularzy,
- przełączników,
- pól wyszukiwania,
- przycisków ikonowych posiadających widoczną etykietę,
- komponentów interaktywnych posiadających tekstową nazwę.

### Wyjątki

Test nie dotyczy elementów nieposiadających widocznej etykiety tekstowej.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się element interaktywny, dla którego:

- dostępna nazwa zawiera cały tekst widocznej etykiety lub jej początek,
- użytkownik może rozpoznać związek pomiędzy etykietą widoczną i odczytywaną,
- widoczna etykieta nie jest zastępowana całkowicie innym tekstem w dostępnej nazwie.

---

## 8. Dlaczego to jest ważne

Wielu użytkowników korzysta z:

- rozpoznawania mowy,
- sterowania głosem,
- technologii wspomagających wykorzystujących nazwy elementów.

Tacy użytkownicy identyfikują elementy na podstawie tekstu widocznego na ekranie.

Jeżeli dostępna nazwa nie zawiera tego tekstu:

- mogą nie być w stanie aktywować elementu,
- mogą mieć trudność ze zrozumieniem działania interfejsu,
- mogą utracić zaufanie do działania systemu.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób korzystających z rozpoznawania mowy,
- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z czytników ekranu,
- osób słabowidzących korzystających jednocześnie z mowy syntetycznej,
- osób z niepełnosprawnościami poznawczymi.

---

## 10. Sposób testowania

### Krok 1

Odszukaj elementy interaktywne posiadające widoczne etykiety tekstowe.

### Krok 2

Zanotuj tekst widocznej etykiety.

### Krok 3

Sprawdź dostępną nazwę elementu.

Można wykorzystać:

- Accessibility Insights,
- axe DevTools,
- narzędzia deweloperskie przeglądarki,
- czytnik ekranu.

### Krok 4

Porównaj widoczną etykietę z dostępną nazwą.

### Krok 5

Sprawdź, czy tekst widocznej etykiety występuje w dostępnej nazwie.

### Krok 6

Zwróć szczególną uwagę na:

- przyciski formularzy,
- pola wyszukiwania,
- przyciski wysyłania formularza,
- przyciski akcji,
- komponenty tworzone przy użyciu JavaScript.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Dostępna nazwa wszystkich badanych elementów zawiera tekst widocznej etykiety.

### Wynik częściowo pozytywny

Występują pojedyncze przypadki niezgodności.

### Wynik negatywny

Widoczne etykiety i dostępne nazwy znacząco się różnią lub są niespójne.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- widoczna etykieta „Szukaj”, dostępna nazwa „Wykonaj wyszukiwanie”,
- widoczna etykieta „Wyślij”, dostępna nazwa „Prześlij formularz kontaktowy”,
- widoczna etykieta „Zamknij”, dostępna nazwa „Ukryj okno dialogowe”,
- widoczna etykieta nie występuje w dostępnej nazwie,
- całkowicie różne nazwy widoczne i programowe.

---

## 13. Dobre praktyki

- Stosowanie identycznej nazwy widocznej i dostępnej.
- Rozszerzanie dostępnej nazwy poprzez dodanie dodatkowych informacji po tekście etykiety.
- Zachowanie spójnego nazewnictwa w całym serwisie.
- Testowanie interfejsu przy użyciu technologii rozpoznawania mowy.
- Kontrola zgodności nazw podczas odbioru komponentów.

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

> Dostępne nazwy części elementów interaktywnych nie zawierają tekstu widocznych etykiet. Użytkownicy korzystający z rozpoznawania mowy mogą mieć trudności z aktywowaniem tych elementów.

lub

> Widoczne etykiety i dostępne nazwy elementów interaktywnych są niespójne, co utrudnia korzystanie z interfejsu użytkownikom technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- Dostosować dostępne nazwy do widocznych etykiet.
- Zapewnić, aby tekst etykiety był zawarty w dostępnej nazwie.
- Zweryfikować komponenty wykorzystujące aria-label.
- Przetestować działanie z technologiami rozpoznawania mowy.
- Wprowadzić kontrolę zgodności nazw podczas publikacji i odbioru rozwiązań.

---

## 18. Powiązane testy

- Dostępna nazwa elementu interaktywnego
- Etykiety powiązane programowo
- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Odczyt formularza przez czytnik ekranu
- Menu nawigacyjne
- Wyszukiwanie w witrynie
- Modalne okno dialogowe

---