---
id: test-obsluga-klawiatura-zewnetrzna-aplikacja-mobilna
title: Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
sidebar_label: Obsługa klawiaturą zewnętrzną
sidebar_position: 96
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być skutecznie obsługiwana przy użyciu zewnętrznej klawiatury oraz czy użytkownik może wykonywać kluczowe zadania bez konieczności korzystania z ekranu dotykowego.
keywords: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil pogłębiony,obsługa klawiaturą zewnętrzną(aplikacja mobilna),kryterium sukcesu]
tags: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil pogłębiony,obsługa klawiaturą zewnętrzną(aplikacja mobilna),kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-096**

## 2. Nazwa testu

**Obsługa klawiaturą zewnętrzną (aplikacja mobilna)**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil pogłębiony**

## 4. Opis testu

Test sprawdza, czy aplikacja mobilna może być skutecznie obsługiwana przy użyciu klawiatury zewnętrznej oraz czy użytkownik może wykonywać kluczowe zadania bez konieczności korzystania z dotyku.

### Co oznacza „klawiatura zewnętrzna”?

Klawiatura zewnętrzna to klawiatura podłączona do urządzenia mobilnego, na przykład:

- klawiatura Bluetooth,
- klawiatura podłączona przez USB,
- klawiatura stanowiąca część stacji dokującej,
- urządzenie wspomagające wykorzystujące interfejs klawiatury.

Z punktu widzenia dostępności test obejmuje również technologie wspomagające, które sterują aplikacją za pomocą poleceń klawiaturowych lub wykorzystują mechanizmy nawigacji klawiaturowej systemu operacyjnego.

### Co oznacza „obsługa klawiaturą”?

Obsługa klawiaturą oznacza możliwość:

- przemieszczania się pomiędzy elementami,
- aktywowania funkcji,
- wprowadzania danych,
- wykonywania zadań,

bez konieczności korzystania z dotyku lub gestów wskaźnika.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

W szczególności:

- 2.1.1 Klawiatura,
- 2.1.2 Bez pułapki na klawiaturę,
- 2.4.3 Kolejność fokusu,
- 2.4.7 Widoczny fokus,
- 2.4.11 Fokus niezakryty (minimum),
- 2.4.12 Fokus niezakryty (ulepszone),
- 2.5.1 Gesty wskaźnika,
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

W szczególności:

- 11.2.1.1 Keyboard,
- 11.2.1.2 No Keyboard Trap,
- 11.2.4.3 Focus Order,
- 11.2.4.7 Focus Visible,
- 11.2.4.11 Focus Not Obscured (Minimum),
- 11.2.4.12 Focus Not Obscured (Enhanced).

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych aplikacji,
- formularzy,
- menu,
- okien dialogowych,
- procesów użytkownika,
- komponentów niestandardowych,
- elementów interaktywnych.

## 7. Oczekiwany wynik

Użytkownik może przy użyciu klawiatury:

- dotrzeć do wszystkich istotnych elementów,
- zrozumieć położenie fokusu,
- aktywować funkcje,
- wykonywać zadania,
- korzystać z aplikacji bez konieczności używania dotyku.

## 8. Dlaczego to jest ważne

Dla wielu użytkowników klawiatura jest podstawowym lub jedynym sposobem obsługi urządzenia mobilnego.

Dotyczy to między innymi:

- osób z niepełnosprawnościami ruchowymi,
- użytkowników przełączników,
- użytkowników alternatywnych metod sterowania,
- osób korzystających z tabletów z klawiaturą,
- części użytkowników technologii wspomagających.

Jeżeli aplikacja nie obsługuje klawiatury, użytkownik może nie być w stanie wykonać podstawowych czynności lub ukończyć procesu.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- użytkowników przełączników,
- osób korzystających z alternatywnych urządzeń sterujących,
- użytkowników tabletów i urządzeń hybrydowych,
- osób korzystających z klawiatur Bluetooth,
- użytkowników technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Podłączenie klawiatury

Podłącz klawiaturę zewnętrzną do urządzenia mobilnego.

### Krok 2. Nawigacja po aplikacji

Sprawdź możliwość przemieszczania się pomiędzy elementami przy użyciu:

- Tab,
- Shift + Tab,
- klawiszy strzałek,
- Enter,
- Spacji,
- innych standardowych mechanizmów systemowych.

### Krok 3. Ocena fokusu

Sprawdź, czy:

- fokus jest widoczny,
- kolejność fokusu jest logiczna,
- fokus nie jest gubiony podczas zmiany ekranów,
- fokus nie zostaje zasłonięty.

### Krok 4. Wykonanie zadań

Przeprowadź najważniejsze procesy użytkownika wyłącznie przy użyciu klawiatury.

Przykładowo:

- logowanie,
- wyszukiwanie informacji,
- wypełnienie formularza,
- wykonanie głównych funkcji aplikacji.

### Krok 5. Ocena komponentów niestandardowych

Sprawdź działanie:

- menu,
- zakładek,
- akordeonów,
- karuzel,
- okien dialogowych,
- komponentów tworzonych indywidualnie.

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może wykonać wszystkie kluczowe zadania przy użyciu klawiatury.

### Częściowo spełnione

Większość funkcji działa poprawnie, jednak część elementów lub procesów nie jest w pełni dostępna.

### Niespełnione

Istnieją istotne bariery uniemożliwiające korzystanie z aplikacji przy użyciu klawiatury.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna powinna współpracować z mechanizmami nawigacji klawiaturowej systemu operacyjnego.

## 12. Typowe niezgodności

- brak możliwości przejścia do części elementów,
- nieprawidłowa kolejność fokusu,
- niewidoczny fokus,
- brak możliwości aktywacji przycisków,
- pułapka klawiaturowa,
- utrata fokusu po zmianie ekranu,
- komponenty niestandardowe nieobsługujące klawiatury,
- konieczność użycia dotyku do wykonania części operacji.

## 13. Dobre praktyki

- testowanie aplikacji z klawiaturą zewnętrzną,
- stosowanie natywnych komponentów systemowych,
- zapewnianie widocznego fokusu,
- zachowanie logicznej kolejności nawigacji,
- obsługa standardowych zachowań systemowych,
- testowanie aplikacji z użytkownikami technologii wspomagających.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę obsługi klawiaturą oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nie zapewnia pełnej obsługi przy użyciu klawiatury zewnętrznej. Część elementów nie jest dostępna w nawigacji klawiaturowej lub nie może zostać aktywowana bez użycia dotyku. Problem może uniemożliwiać korzystanie z aplikacji osobom z niepełnosprawnościami ruchowymi oraz użytkownikom technologii wspomagających.

## 17. Rekomendacje naprawcze

- zapewnić dostępność wszystkich funkcji przy użyciu klawiatury,
- poprawić kolejność i widoczność fokusu,
- usunąć pułapki klawiaturowe,
- dostosować komponenty niestandardowe do obsługi klawiatury,
- testować aplikację z klawiaturami Bluetooth oraz technologiami wspomagającymi.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-025 Bez pułapki klawiaturowej
- testID-026 Kolejność fokusu
- testID-027 Widoczność fokusu
- testID-087 Fokus niezakryty
- testID-080 Gesty wskaźnika
- testID-082 Aktywowanie ruchem
