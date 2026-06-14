---
id: test-menu-nawigacyjne
title: Karta testu — Menu nawigacyjne
sidebar_label: Menu nawigacyjne
sidebar_position: 66
description: Scenariusz testu sprawdzającego, czy główne menu nawigacyjne umożliwia użytkownikom skuteczne odnajdywanie i wybieranie ścieżek nawigacji niezależnie od sposobu korzystania z interfejsu.
keywords: [menu nawigacyjne, nawigacja, menu główne, submenu, dostępność cyfrowa]
tags: [test dostępności, menu, nawigacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-066**

---

## 2. Nazwa testu

**Menu nawigacyjne**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy główne menu nawigacyjne umożliwia użytkownikowi skuteczne przemieszczanie się pomiędzy głównymi obszarami serwisu.

### Co oznacza „menu nawigacyjne”?

Menu nawigacyjne to główny mechanizm orientacji i poruszania się po serwisie.

Może występować jako:

- menu poziome,
- menu pionowe,
- menu rozwijane,
- menu wielopoziomowe,
- menu mobilne („hamburger”),
- menu wysuwane.

### Co sprawdza test?

Test ocenia, czy użytkownik może:

- odnaleźć menu,
- zrozumieć jego strukturę,
- przechodzić pomiędzy pozycjami,
- korzystać z submenu,
- rozpoznać aktualną lokalizację w serwisie,
- korzystać z menu przy użyciu klawiatury i technologii wspomagających.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.1 Możliwość pominięcia bloków (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **2.4.7 Widoczny fokus (AA)**
- **3.2.3 Spójna nawigacja (AA)**
- **3.2.4 Spójna identyfikacja (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- 9.1.3.1 Info and Relationships
- 9.2.1.1 Keyboard
- 9.2.1.2 No Keyboard Trap
- 9.2.4.1 Bypass Blocks
- 9.2.4.3 Focus Order
- 9.2.4.4 Link Purpose (In Context)
- 9.2.4.6 Headings and Labels
- 9.2.4.7 Focus Visible
- 9.3.2.3 Consistent Navigation
- 9.3.2.4 Consistent Identification
- 9.4.1.2 Name, Role, Value

---

## 6. Zastosowanie do treści

Test stosuje się do:

- menu głównego strony,
- menu wielopoziomowego,
- menu rozwijanych,
- menu mobilnych,
- paneli nawigacyjnych udostępniających główne sekcje serwisu.

### Wyjątki

Nie dotyczy:

- okruszków (breadcrumbs),
- list linków kontekstowych,
- menu lokalnych w obrębie pojedynczej sekcji.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się menu nawigacyjne, dla którego:

- menu jest dostępne programowo jako mechanizm nawigacji,
- użytkownik może dotrzeć do wszystkich pozycji menu przy użyciu klawiatury,
- użytkownik może korzystać z submenu bez użycia urządzenia wskazującego,
- kolejność fokusu jest logiczna,
- widoczny jest wskaźnik fokusu,
- pozycje menu posiadają jednoznaczne nazwy,
- bieżąca strona lub sekcja jest oznaczona,
- stany rozwinięcia i zwinięcia submenu są komunikowane programowo.

---

## 8. Dlaczego to jest ważne

Menu jest podstawowym mechanizmem orientacji w serwisie.

Jeżeli działa nieprawidłowo:

- użytkownik może nie odnaleźć potrzebnej informacji,
- może utracić orientację w strukturze serwisu,
- może nie mieć dostępu do części funkcji lub usług,
- może nie wiedzieć, gdzie aktualnie się znajduje.

Problemy z menu wpływają zwykle na cały serwis, a nie pojedynczą stronę.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami ruchowymi,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj główne menu nawigacyjne.

### Krok 2

Sprawdź, czy można przejść do menu przy użyciu klawiatury.

### Krok 3

Przemieszczaj się po pozycjach menu klawiszem Tab.

### Krok 4

Sprawdź, czy fokus jest widoczny na wszystkich elementach.

### Krok 5

Sprawdź, czy wszystkie pozycje menu posiadają jednoznaczne nazwy.

### Krok 6

Jeżeli menu zawiera submenu:

- rozwiń submenu przy użyciu klawiatury,
- przejdź do elementów submenu,
- zamknij submenu.

### Krok 7

Sprawdź, czy podczas korzystania z submenu nie występuje pułapka klawiaturowa.

### Krok 8

Sprawdź, czy użytkownik może opuścić menu i przejść do dalszej części strony.

### Krok 9

Uruchom czytnik ekranu.

### Krok 10

Sprawdź, czy:

- menu jest rozpoznawane jako nawigacja,
- odczytywane są nazwy pozycji,
- odczytywany jest stan rozwinięcia submenu,
- odczytywana jest aktualna pozycja w strukturze.

### Krok 11

Jeżeli istnieje wersja mobilna menu:

- otwórz menu,
- przejdź do jego elementów,
- zamknij menu,
- sprawdź zachowanie fokusu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Menu umożliwia skuteczne odnajdywanie i wybieranie ścieżek nawigacji niezależnie od sposobu korzystania z interfejsu.

### Wynik częściowo pozytywny

Menu jest zasadniczo użyteczne, jednak występują pojedyncze utrudnienia.

### Wynik negatywny

Menu uniemożliwia lub znacząco utrudnia korzystanie z nawigacji części użytkowników.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- menu dostępne wyłącznie po najechaniu myszą,
- submenu niedostępne z klawiatury,
- brak widocznego fokusu,
- nieopisane przyciski rozwijania menu,
- brak informacji o stanie rozwinięcia submenu,
- pułapka klawiaturowa,
- brak oznaczenia bieżącej strony,
- niejednoznaczne nazwy pozycji menu,
- menu mobilne bez dostępnej nazwy przycisku otwierającego.

---

## 13. Dobre praktyki

- Stosowanie semantycznego elementu nawigacji.
- Ograniczanie liczby poziomów menu.
- Rozdzielanie funkcji „przejdź do działu” i „rozwiń submenu”.
- Oznaczanie aktualnej strony.
- Zapewnienie pełnej obsługi klawiaturą.
- Testowanie menu w wersji desktopowej i mobilnej.
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

> Główne menu nawigacyjne nie zapewnia pełnej obsługi przy użyciu klawiatury. Część pozycji lub submenu nie jest dostępna bez użycia urządzenia wskazującego.

lub

> Menu nie komunikuje poprawnie stanów rozwinięcia i zwinięcia submenu, co utrudnia orientację użytkownikom technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- Zapewnić pełną obsługę menu z klawiatury.
- Dodać dostępne nazwy przycisków sterujących submenu.
- Komunikować programowo stan rozwinięcia submenu.
- Zapewnić widoczny wskaźnik fokusu.
- Oznaczyć bieżącą stronę lub sekcję.
- Zweryfikować działanie menu z czytnikiem ekranu.
- Przetestować menu w wariancie mobilnym.

---

## 18. Powiązane testy

- Łącza pomijania
- Punkty orientacyjne
- Cel łącza (w kontekście)
- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Widoczność fokusu
- Odczyt struktury przez czytnik ekranu
- Modalne okno dialogowe
---