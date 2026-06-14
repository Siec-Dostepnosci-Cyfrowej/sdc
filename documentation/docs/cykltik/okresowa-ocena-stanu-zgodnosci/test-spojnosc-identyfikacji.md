---
id: test-spojnosc-identyfikacji
title: Karta testu — Spójność identyfikacji
sidebar_label: Spójność identyfikacji
sidebar_position: 73
description: Scenariusz testu sprawdzającego, czy elementy pełniące tę samą funkcję są identyfikowane w spójny sposób w obrębie serwisu lub aplikacji.
keywords: [spójność identyfikacji, consistent identification, etykiety, nazwy, dostępność cyfrowa]
tags: [test dostępności, nawigacja, interfejs użytkownika, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-073**

---

## 2. Nazwa testu

**Spójność identyfikacji**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy elementy pełniące tę samą funkcję są identyfikowane w spójny sposób w obrębie serwisu lub aplikacji.

### Co oznacza „spójność identyfikacji”?

Jeżeli dwa elementy pełnią tę samą funkcję, użytkownik powinien rozpoznawać je jako ten sam rodzaj elementu.

Dotyczy to między innymi:

- nazw przycisków,
- nazw łączy,
- ikon,
- oznaczeń funkcji,
- nazw pól formularzy,
- nazw sekcji interfejsu.

### Przykład poprawny

W całym serwisie funkcja wyszukiwania oznaczona jest jako:

> Szukaj

lub

> Wyszukiwarka

i stosowane jest jedno rozwiązanie.

### Przykład niepoprawny

Na różnych stronach ta sama funkcja oznaczona jest jako:

- Szukaj
- Znajdź
- Wyszukaj
- Przeszukaj serwis

mimo że realizuje dokładnie to samo zadanie.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **3.2.4 Spójna identyfikacja (AA)**

### EN 301 549

* **9.3.2.4 Consistent Identification**

### Techniki WCAG

* G197

---

## 6. Zastosowanie do treści

Test stosuje się do:

- menu,
- przycisków,
- formularzy,
- wyszukiwarek,
- komponentów interaktywnych,
- aplikacji internetowych,
- systemów transakcyjnych,
- paneli użytkownika.

### Wyjątki

Test nie dotyczy elementów pełniących różne funkcje, nawet jeśli są podobne wizualnie.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się rozwiązanie, dla którego:

- elementy pełniące tę samą funkcję są identyfikowane w ten sam sposób,
- nazwy funkcji są spójne w całym rozwiązaniu,
- stosowane są te same oznaczenia i ikony dla tych samych funkcji,
- użytkownik może przewidzieć działanie elementu na podstawie wcześniejszych doświadczeń z serwisem.

---

## 8. Dlaczego to jest ważne

Użytkownicy uczą się sposobu działania interfejsu.

Jeżeli te same funkcje są oznaczane różnie:

- trudniej odnaleźć potrzebne funkcje,
- rośnie obciążenie poznawcze,
- użytkownik może błędnie interpretować przeznaczenie elementów,
- korzystanie z serwisu staje się mniej przewidywalne.

Spójność identyfikacji poprawia orientację i użyteczność całego rozwiązania.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- osób korzystających sporadycznie z serwisu,
- wszystkich użytkowników uczących się sposobu działania interfejsu.

---

## 10. Sposób testowania

### Krok 1

Wybierz kilka stron, ekranów lub procesów należących do tego samego rozwiązania.

### Krok 2

Zidentyfikuj funkcje występujące wielokrotnie.

Przykłady:

- wyszukiwanie,
- logowanie,
- pobieranie dokumentów,
- drukowanie,
- kontakt,
- przejście do strony głównej.

### Krok 3

Porównaj sposób identyfikacji tych funkcji.

Sprawdź:

- nazwy,
- etykiety,
- ikony,
- komunikaty.

### Krok 4

Oceń, czy użytkownik może łatwo rozpoznać tę samą funkcję w różnych miejscach serwisu.

### Krok 5

Sprawdź, czy podobne oznaczenia nie są używane dla różnych funkcji.

### Krok 6

Jeżeli serwis wykorzystuje ikony bez tekstu, sprawdź, czy te same ikony zawsze oznaczają tę samą funkcję.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Elementy pełniące te same funkcje są identyfikowane w sposób spójny.

### Wynik częściowo pozytywny

Występują pojedyncze niespójności, które nie utrudniają znacząco korzystania z serwisu.

### Wynik negatywny

Te same funkcje są oznaczane w różny sposób lub te same oznaczenia są wykorzystywane dla różnych funkcji.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- różne nazwy dla tej samej funkcji,
- różne ikony dla tej samej funkcji,
- ta sama ikona używana do różnych funkcji,
- niespójne nazwy przycisków akcji,
- różne nazwy formularzy realizujących ten sam proces,
- różne określenia tych samych usług lub sekcji.

---

## 13. Dobre praktyki

- Stosowanie słownika nazw funkcji i elementów interfejsu.
- Utrzymywanie spójnego systemu ikon.
- Projektowanie komponentów wielokrotnego użytku.
- Stosowanie tych samych nazw dla tych samych działań.
- Weryfikowanie spójności podczas przeglądów jakości.

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

> Elementy realizujące te same funkcje są oznaczane w różny sposób w różnych częściach serwisu. Może to utrudniać użytkownikom rozpoznawanie funkcji i przewidywanie działania interfejsu.

lub

> W serwisie stosowane są niespójne nazwy i oznaczenia dla tych samych funkcji, co zwiększa obciążenie poznawcze użytkowników.

---

## 17. Rekomendacje naprawcze

- Ujednolicić nazewnictwo funkcji i elementów interfejsu.
- Opracować słownik stosowanych oznaczeń.
- Ujednolicić zestaw ikon.
- Zweryfikować komponenty wielokrotnego użytku pod kątem spójności.
- Wprowadzić kontrolę spójności podczas publikacji i odbioru zmian.

---

## 18. Powiązane testy

- Spójność nawigacji
- Dostępna nazwa elementu interaktywnego
- Dostępna nazwa w widocznej etykiecie
- Menu nawigacyjne
- Wyszukiwanie w witrynie
- Opisowe etykiety
- Widoczne etykiety lub instrukcje

---