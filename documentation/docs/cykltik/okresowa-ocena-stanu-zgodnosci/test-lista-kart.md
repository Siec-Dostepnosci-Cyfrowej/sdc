---
id: test-lista-kart
title: Karta testu — Lista kart
sidebar_label: Lista kart
sidebar_position: 57
description: Scenariusz testu sprawdzającego, czy lista kart jest prezentowana jako dostępny i przewidywalny zbiór elementów umożliwiający użytkownikom sprawną orientację, nawigację i przeglądanie treści.
keywords: [lista kart, karty, card list, grid, lista wyników, dostępność cyfrowa]
tags: [test dostępności, komponenty, lista kart, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-057**

---

## 2. Nazwa testu

**Lista kart**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy zbiór kart jest prezentowany jako dostępna lista umożliwiająca użytkownikom rozpoznanie struktury zbioru, liczby elementów oraz sprawne przeglądanie treści.

### Co oznacza „lista kart”?

Lista kart jest komponentem grupującym wiele kart prezentujących podobne typy informacji.

Przykłady:

- lista aktualności,
- lista wydarzeń,
- lista usług,
- lista wyników wyszukiwania,
- lista publikacji,
- lista projektów.

### Co sprawdza test?

Test ocenia między innymi:

- czy zbiór jest rozpoznawalny jako lista,
- czy kolejność elementów jest logiczna,
- czy układ wizualny odpowiada kolejności odczytu,
- czy użytkownik może sprawnie poruszać się po kartach,
- czy technologie wspomagające poprawnie identyfikują strukturę zbioru.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **1.3.2 Znacząca kolejność (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.3 Kolejność fokusu (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.1.3.2 Meaningful Sequence**
- **9.2.1.1 Keyboard**
- **9.2.1.2 No Keyboard Trap**
- **9.2.4.3 Focus Order**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- list aktualności,
- list wydarzeń,
- list usług,
- list publikacji,
- list wyników wyszukiwania,
- katalogów obiektów,
- katalogów produktów,
- wszelkich siatek kart prezentujących powtarzalne elementy.

### Wyjątki

Jeżeli strona nie zawiera list kart:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodną uznaje się listę kart, dla której:

- zbiór jest programowo rozpoznawalny jako lista,
- użytkownik może określić liczbę elementów zbioru,
- kolejność odczytu odpowiada kolejności prezentacji,
- nawigacja klawiaturą przebiega w logiczny sposób,
- lista nie przechwytuje fokusu,
- układ responsywny nie zmienia znaczenia ani kolejności treści.

---

## 8. Dlaczego to jest ważne

Listy kart są jednym z najczęściej stosowanych wzorców prezentowania treści.

Nieprawidłowa implementacja może powodować:

- utratę orientacji w liczbie elementów,
- trudności w odnalezieniu informacji,
- chaotyczną nawigację klawiaturą,
- nieprawidłowy odczyt przez czytniki ekranu.

Dobrze przygotowana lista pozwala użytkownikowi szybko zrozumieć strukturę zbioru i sprawnie odnaleźć interesujące go treści.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj listę kart na stronie.

### Krok 2

Sprawdź wizualnie:

- czy wszystkie karty tworzą jeden logiczny zbiór,
- czy układ jest czytelny i przewidywalny.

### Krok 3

Przemieszczaj się po stronie klawiszem Tab.

### Krok 4

Sprawdź, czy fokus przechodzi wyłącznie przez elementy interaktywne znajdujące się w kartach.

### Krok 5

Sprawdź, czy lista nie przechwytuje fokusu.

### Krok 6

Uruchom czytnik ekranu.

### Krok 7

Sprawdź, czy użytkownik otrzymuje informację o:

- liście,
- liczbie elementów,
- pozycji elementu w zbiorze.

### Krok 8

Sprawdź, czy kolejność odczytu odpowiada kolejności prezentacji.

### Krok 9

Zmniejsz szerokość okna lub użyj urządzenia mobilnego.

### Krok 10

Sprawdź, czy:

- kolejność elementów pozostaje logiczna,
- układ nie zmienia znaczenia treści,
- użytkownik nie traci orientacji po zmianie widoku.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Lista kart jest poprawnie rozpoznawana jako zbiór elementów, zachowuje logiczną strukturę i umożliwia sprawną nawigację.

### Wynik częściowo pozytywny

Występują drobne problemy związane z kolejnością, semantyką lub nawigacją, które nie uniemożliwiają korzystania z listy.

### Wynik negatywny

Lista kart nie jest poprawnie rozpoznawana jako lista lub powoduje istotne problemy z orientacją i nawigacją.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak semantyki listy,
- karty umieszczone wyłącznie w elementach `div`,
- niezgodność kolejności DOM z układem wizualnym,
- przechwytywanie fokusu przez kontener listy,
- chaotyczna kolejność tabulacji,
- układ responsywny zmieniający kolejność treści,
- brak możliwości określenia liczby elementów zbioru.

---

## 13. Dobre praktyki

- Stosowanie natywnej semantyki list (`ul`, `ol`, `li`).
- Zachowanie zgodności kolejności DOM i prezentacji wizualnej.
- Ograniczenie odpowiedzialności listy do układu i odstępów.
- Umieszczanie nagłówka sekcji bezpośrednio przed listą.
- Testowanie komponentu z czytnikiem ekranu i klawiaturą.
- Zachowanie tej samej logiki prezentacji w widoku mobilnym i desktopowym.

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

> Lista kart nie jest poprawnie identyfikowana jako lista elementów. Użytkownicy technologii wspomagających nie otrzymują informacji o strukturze i liczbie elementów zbioru.

lub

> Kolejność odczytu elementów listy kart nie odpowiada kolejności prezentowanej wizualnie, co utrudnia orientację i nawigację.

---

## 17. Rekomendacje naprawcze

- Wprowadzić semantykę listy.
- Zapewnić zgodność kolejności DOM i prezentacji wizualnej.
- Usunąć mechanizmy przechwytujące fokus.
- Zweryfikować kolejność tabulacji.
- Przetestować komponent z czytnikiem ekranu.
- Zachować spójność działania komponentu w różnych rozdzielczościach.

---

## 18. Powiązane testy

- Karta
- Karuzela
- Tabela danych
- Dostęp z klawiatury
- Kolejność fokusu
- Odczyt struktury przez czytnik ekranu
- Punkty orientacyjne
---