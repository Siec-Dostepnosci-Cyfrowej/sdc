---
id: test-fokus-niezakryty
title: Fokus niezakryty
sidebar_label: Fokus niezakryty
sidebar_position: 87
description: Scenariusz testu sprawdzającego, czy element interfejsu posiadający fokus klawiatury pozostaje co najmniej częściowo widoczny i nie jest całkowicie zasłonięty przez inne elementy interfejsu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,fokus niezakryty]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,fokus niezakryty]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-087**

## 2. Nazwa testu

**Fokus niezakryty**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy element interfejsu posiadający fokus klawiatury pozostaje co najmniej częściowo widoczny i nie jest całkowicie zasłonięty przez inne elementy interfejsu.

### Co oznacza „fokus”?

Fokus (ang. *focus*) oznacza element interfejsu, który jest aktualnie aktywny z punktu widzenia obsługi klawiaturą.

To właśnie do tego elementu trafi działanie użytkownika po naciśnięciu klawisza, na przykład:

- Enter,
- Spacja,
- klawisze strzałek.

Podczas nawigacji klawiszem Tab fokus przemieszcza się pomiędzy kolejnymi elementami interaktywnymi strony lub aplikacji.

### Co oznacza „wskaźnik fokusu”?

Wskaźnik fokusu to wizualne oznaczenie elementu posiadającego fokus.

Może mieć postać:

- obramowania,
- podświetlenia,
- zmiany koloru,
- cienia,
- innego wyróżnienia wizualnego.

Dzięki wskaźnikowi fokusu użytkownik wie, który element jest aktualnie aktywny i zostanie uruchomiony po naciśnięciu odpowiedniego klawisza.

Test nie ocenia wyglądu wskaźnika fokusu. Sprawdza natomiast, czy element posiadający fokus pozostaje widoczny i nie jest zasłonięty przez inne elementy interfejsu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.4.11 Fokus niezakryty (minimum) (Poziom AA)

### EN 301 549

Po publikacji wersji normy uwzględniającej WCAG 2.2:

- 9.2.4.11 Focus Not Obscured (Minimum)
- 11.2.4.11 Focus Not Obscured (Minimum)

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- aplikacji webowych,
- formularzy,
- menu nawigacyjnych,
- okien dialogowych,
- komponentów przewijanych,
- paneli administracyjnych,
- aplikacji mobilnych obsługujących klawiaturę.

## 7. Oczekiwany wynik

Każdy element posiadający fokus pozostaje co najmniej częściowo widoczny.

Użytkownik może:

- zidentyfikować element posiadający fokus,
- określić jego położenie,
- świadomie podjąć dalszą interakcję.

## 8. Dlaczego to jest ważne

Użytkownicy korzystający z klawiatury muszą wiedzieć, który element aktualnie posiada fokus.

Jeżeli element zostanie zasłonięty przez:

- przyklejony nagłówek,
- baner cookies,
- wysuwany panel,
- komunikat systemowy,
- okno dialogowe,

użytkownik może nie wiedzieć:

- gdzie znajduje się fokus,
- jaki element zostanie aktywowany,
- jak kontynuować wykonywane zadanie.

Problem szczególnie dotyczy użytkowników klawiatury oraz osób korzystających z powiększenia ekranu.

## 9. Kogo to dotyczy

Szczególnie:

- osób korzystających wyłącznie z klawiatury,
- osób niewidomych korzystających z resztek wzroku,
- osób słabowidzących,
- użytkowników korzystających z powiększenia ekranu,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Nawigacja klawiaturą

Przemieszczaj fokus przy użyciu klawiszy:

- Tab,
- Shift+Tab.

### Krok 2. Obserwacja elementu z fokusem

Dla każdego elementu sprawdź, czy:

- pozostaje widoczny,
- nie jest całkowicie zasłonięty,
- może zostać jednoznacznie zidentyfikowany.

### Krok 3. Weryfikacja sytuacji problemowych

Szczególną uwagę zwróć na:

- przyklejone nagłówki,
- przyklejone stopki,
- banery cookies,
- komunikaty o stanie,
- okna dialogowe,
- rozwijane menu,
- przewijane obszary.

### Krok 4. Ocena przewijania

Sprawdź, czy automatyczne przewijanie strony lub kontenera nie powoduje ukrycia elementu posiadającego fokus.

## 11. Kryteria oceny wyniku

### Spełnione

Każdy element posiadający fokus pozostaje co najmniej częściowo widoczny.

### Częściowo spełnione

Większość elementów pozostaje widoczna, jednak występują pojedyncze przypadki zasłonięcia fokusu.

### Niespełnione

Istnieją sytuacje, w których element posiadający fokus jest całkowicie zasłonięty przez inne elementy interfejsu.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie umożliwiające nawigację klawiaturą powinno spełniać to wymaganie.

## 12. Typowe niezgodności

- fokus ukryty pod przyklejonym nagłówkiem,
- fokus ukryty pod banerem cookies,
- fokus znajdujący się poza widocznym obszarem przewijania,
- automatyczne przewijanie ukrywające element z fokusem,
- fokus zasłonięty przez wysuwany panel,
- fokus ukryty pod komunikatem systemowym.

## 13. Dobre praktyki

- pozostawianie marginesu bezpieczeństwa podczas przewijania,
- testowanie interfejsu wyłącznie przy użyciu klawiatury,
- uwzględnianie przyklejonych elementów podczas automatycznego przewijania,
- stosowanie wyraźnego wskaźnika fokusu,
- regularne testowanie przy powiększeniu ekranu.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu oraz wskazanie sytuacji, w których fokus został zasłonięty.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu występują sytuacje, w których element posiadający fokus klawiatury jest całkowicie zasłonięty przez inne elementy interfejsu. Użytkownik nie może ustalić położenia fokusu ani określić, który element zostanie aktywowany podczas dalszej interakcji.

## 17. Rekomendacje naprawcze

- dostosować mechanizmy automatycznego przewijania,
- uwzględnić wysokość przyklejonych nagłówków i innych nakładek,
- zapewnić widoczność elementu posiadającego fokus,
- testować rozwiązanie przy użyciu klawiatury i powiększenia ekranu,
- przeanalizować wszystkie komponenty wykorzystujące przewijanie.

## 18. Powiązane testy

- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-026 Kolejność fokusu
- testID-027 Widoczność fokusu
- testID-091 Wygląd fokusu
- testID-055 Modalne okno dialogowe
- testID-061 Menu nawigacyjne
