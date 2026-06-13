---
id: test-wyszukiwanie-w-witrynie
title: Karta testu — Wyszukiwanie w witrynie
sidebar_label: Wyszukiwanie w witrynie
sidebar_position: 67
description: Scenariusz testu sprawdzającego, czy mechanizm wyszukiwania umożliwia użytkownikom skuteczne odnajdywanie treści i usług oraz zrozumienie wyników wyszukiwania.
keywords: [wyszukiwarka, wyszukiwanie, wyniki wyszukiwania, formularz wyszukiwania, dostępność cyfrowa]
tags: [test dostępności, wyszukiwarka, wyszukiwanie, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-067**

---

## 2. Nazwa testu

**Wyszukiwanie w witrynie**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik może skutecznie korzystać z mechanizmu wyszukiwania w serwisie.

### Co obejmuje test?

Test obejmuje:

- formularz wyszukiwania,
- uruchamianie wyszukiwania,
- prezentację wyników,
- komunikaty o wynikach,
- sytuację braku wyników,
- filtry i sortowanie (jeżeli występują),
- nawigację po wynikach.

### Co sprawdza test?

Test ocenia, czy użytkownik może:

- odnaleźć wyszukiwarkę,
- zrozumieć jej przeznaczenie,
- wprowadzić zapytanie,
- uruchomić wyszukiwanie,
- zrozumieć otrzymane wyniki,
- przejść do wybranego wyniku,
- korzystać z wyszukiwarki przy użyciu klawiatury i technologii wspomagających.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **2.4.7 Widoczny fokus (AA)**
- **3.3.2 Etykiety lub instrukcje (A)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- 9.1.3.1 Info and Relationships
- 9.2.1.1 Keyboard
- 9.2.1.2 No Keyboard Trap
- 9.2.4.3 Focus Order
- 9.2.4.4 Link Purpose (In Context)
- 9.2.4.6 Headings and Labels
- 9.2.4.7 Focus Visible
- 9.3.3.2 Labels or Instructions
- 9.4.1.2 Name, Role, Value

---

## 6. Zastosowanie do treści

Test stosuje się do:

- wyszukiwarek serwisowych,
- wyszukiwarek BIP,
- wyszukiwarek katalogów usług,
- wyszukiwarek dokumentów,
- wyszukiwarek zasobów edukacyjnych,
- wyszukiwarek obiektów i wydarzeń.

### Wyjątki

Jeżeli serwis nie posiada wyszukiwarki:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się mechanizm wyszukiwania, dla którego:

- formularz wyszukiwania posiada dostępną nazwę i etykietę,
- wszystkie elementy są dostępne z klawiatury,
- użytkownik może uruchomić wyszukiwanie bez użycia urządzenia wskazującego,
- wyniki wyszukiwania są prezentowane w sposób zrozumiały i uporządkowany,
- użytkownik otrzymuje informację o liczbie wyników lub braku wyników,
- wyniki posiadają jednoznaczne nazwy i umożliwiają przejście do właściwej treści,
- filtry, sortowanie i paginacja są dostępne i zrozumiałe.

---

## 8. Dlaczego to jest ważne

W dużych serwisach wyszukiwarka często jest podstawowym sposobem odnajdywania informacji.

Jeżeli działa nieprawidłowo:

- użytkownik może nie odnaleźć potrzebnej treści,
- może nie wiedzieć, czy wyszukiwanie zakończyło się sukcesem,
- może nie rozumieć prezentowanych wyników,
- może utracić orientację podczas korzystania z filtrów i paginacji.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wyszukiwarkę.

### Krok 2

Sprawdź, czy pole wyszukiwania posiada etykietę lub dostępną nazwę.

### Krok 3

Przejdź do wyszukiwarki przy użyciu klawiatury.

### Krok 4

Wprowadź przykładowe zapytanie.

### Krok 5

Uruchom wyszukiwanie bez użycia myszy.

### Krok 6

Sprawdź, czy po wyszukaniu:

- widoczna jest fraza wyszukiwania,
- widoczna jest liczba wyników,
- użytkownik rozumie rezultat działania.

### Krok 7

Zweryfikuj strukturę wyników.

Sprawdź, czy każdy wynik:

- posiada tytuł,
- posiada opis lub kontekst,
- umożliwia przejście do treści.

### Krok 8

Sprawdź zachowanie przy braku wyników.

### Krok 9

Jeżeli występują:

- filtry,
- sortowanie,
- paginacja,

sprawdź ich działanie przy użyciu klawiatury.

### Krok 10

Uruchom czytnik ekranu.

### Krok 11

Sprawdź, czy użytkownik może:

- odnaleźć wyszukiwarkę,
- zidentyfikować jej przeznaczenie,
- odczytać wyniki,
- przejść do wybranego wyniku.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Użytkownik może samodzielnie wyszukiwać informacje oraz korzystać z wyników wyszukiwania.

### Wynik częściowo pozytywny

Wyszukiwanie działa, jednak występują utrudnienia wpływające na część użytkowników.

### Wynik negatywny

Wyszukiwanie nie pozwala skutecznie odnajdywać informacji lub korzystać z wyników.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak etykiety pola wyszukiwania,
- wyszukiwarka oznaczona wyłącznie ikoną,
- brak możliwości uruchomienia wyszukiwania z klawiatury,
- brak informacji o liczbie wyników,
- nieczytelna lista wyników,
- wyniki bez opisów lub kontekstu,
- brak komunikatu o braku wyników,
- niedostępne filtry,
- niedostępna paginacja,
- utrata fokusu po wyszukaniu.

---

## 13. Dobre praktyki

- Udostępnianie wyszukiwarki w przewidywalnym miejscu.
- Stosowanie widocznej etykiety „Szukaj w serwisie”.
- Prezentowanie liczby wyników.
- Wyświetlanie fragmentu treści przy wynikach.
- Udostępnianie filtrów i sortowania zgodnych z klawiaturą.
- Informowanie o braku wyników oraz sposobach poprawienia zapytania.
- Testowanie z czytnikiem ekranu.

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

> Mechanizm wyszukiwania nie zapewnia pełnej dostępności. Część użytkowników nie może skutecznie odnaleźć informacji lub korzystać z wyników wyszukiwania przy użyciu technologii wspomagających.

lub

> Wyniki wyszukiwania nie są prezentowane w sposób umożliwiający jednoznaczne rozpoznanie celu poszczególnych wyników, co utrudnia odnajdywanie informacji.

---

## 17. Rekomendacje naprawcze

- Zapewnić dostępne etykiety formularza wyszukiwania.
- Udostępnić pełną obsługę klawiaturą.
- Wprowadzić komunikaty o liczbie wyników.
- Poprawić strukturę i opisy wyników.
- Zapewnić dostępność filtrów i paginacji.
- Zweryfikować działanie wyszukiwarki z czytnikami ekranu.
- Przetestować mechanizm w wersji mobilnej.

---

## 18. Powiązane testy

- Menu nawigacyjne
- Łącza pomijania
- Punkty orientacyjne
- Dostęp z klawiatury
- Kolejność fokusu
- Widoczność fokusu
- Widoczne etykiety lub instrukcje
- Odczyt formularza przez czytnik ekranu
- Odczyt struktury przez czytnik ekranu
---