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



## Identyfikator testu

**testID-087**

## Nazwa testu

Fokus niezakryty

## Cel testu

Sprawdzenie, czy element interfejsu posiadający fokus klawiatury pozostaje co najmniej częściowo widoczny i nie jest całkowicie zasłonięty przez inne elementy interfejsu.

## Powiązane wymagania

### WCAG 2.2

- 2.4.11 Fokus niezakryty (minimum) (Focus Not Obscured (Minimum)) – poziom AA

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.2.4.11 Focus Not Obscured (Minimum)
- 11.2.4.11 Focus Not Obscured (Minimum)

---

## Dlaczego to jest ważne

Użytkownicy korzystający z klawiatury muszą widzieć element, który aktualnie posiada fokus.

Jeżeli element z fokusem zostanie zasłonięty przez:

- nagłówek przyklejony do górnej krawędzi,
- baner cookies,
- okno dialogowe,
- panel boczny,
- inne elementy nakładane na stronę,

użytkownik może nie wiedzieć:

- gdzie znajduje się fokus,
- jaki element zostanie aktywowany,
- jak kontynuować pracę.

Problem ten szczególnie dotyczy osób korzystających wyłącznie z klawiatury oraz użytkowników powiększających widok strony.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- użytkowników klawiatury,
- osób niewidomych korzystających z częściowego wzroku,
- osób słabowidzących,
- użytkowników korzystających z powiększenia ekranu,
- osób z niepełnosprawnościami ruchowymi.

---

## Zakres stosowania

Test należy wykonywać dla:

- stron internetowych,
- aplikacji webowych,
- formularzy,
- menu nawigacyjnych,
- okien dialogowych,
- komponentów przewijanych,
- paneli administracyjnych,
- aplikacji mobilnych obsługujących klawiaturę.

---

## Metoda badania

### Krok 1. Nawigacja klawiaturą

Przemieszczaj fokus przy użyciu klawisza Tab oraz Shift+Tab.

### Krok 2. Obserwacja elementu z fokusem

Dla każdego elementu sprawdź, czy:

- pozostaje widoczny,
- nie jest całkowicie zasłonięty,
- użytkownik może go zidentyfikować.

### Krok 3. Weryfikacja sytuacji problemowych

Szczególną uwagę zwróć na:

- przyklejone nagłówki (sticky headers),
- przyklejone stopki,
- banery cookies,
- komunikaty o stanie,
- okna dialogowe,
- rozwijane menu,
- obszary przewijane.

### Krok 4. Ocena przewijania

Sprawdź, czy automatyczne przewijanie strony lub kontenera nie powoduje ukrycia elementu posiadającego fokus.

---

## Kryteria oceny

### Spełnia

Każdy element posiadający fokus pozostaje co najmniej częściowo widoczny.

Użytkownik może zidentyfikować element posiadający fokus i podjąć świadomą decyzję dotyczącą dalszej interakcji.

### Częściowo spełnia

Większość elementów z fokusem pozostaje widoczna, jednak występują pojedyncze sytuacje, w których fokus zostaje zasłonięty.

### Nie spełnia

Istnieją sytuacje, w których element posiadający fokus jest całkowicie zasłonięty przez inny element interfejsu.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie umożliwiające nawigację klawiaturą powinno spełniać to wymaganie.

---

## Typowe niezgodności

- fokus ukryty pod przyklejonym nagłówkiem,
- fokus ukryty pod banerem cookies,
- fokus znajdujący się poza widocznym obszarem przewijania,
- automatyczne przewinięcie strony powodujące ukrycie elementu,
- fokus zasłonięty przez wysuwany panel.

---

## Dobre praktyki

- pozostawianie marginesu bezpieczeństwa podczas przewijania do elementu,
- testowanie interfejsu przy użyciu wyłącznie klawiatury,
- uwzględnianie przyklejonych elementów podczas automatycznego przewijania,
- zapewnienie wyraźnego i widocznego wskaźnika fokusu.

---

## Klasyfikacja problemów

### Krytyczne

- ukrycie fokusu w kluczowym procesie uniemożliwiające ukończenie zadania.

### Istotne

- całkowite zasłonięcie elementów interaktywnych posiadających fokus.

### Umiarkowane

- sporadyczne przypadki utrudniające identyfikację fokusu.

### Drobne

- lokalne problemy niewpływające istotnie na możliwość wykonania zadania.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Tak        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Tak        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Dostęp z klawiatury
- Kolejność fokusu
- Widoczność fokusu
- Wygląd fokusu
- Łącza pomijania
- Modalne okno dialogowe
- Menu nawigacyjne

---

## Uwagi

Kryterium 2.4.11 zostało wprowadzone w WCAG 2.2. Wymaga ono, aby element posiadający fokus nie był całkowicie zasłonięty przez treść stworzoną przez autora. Kryterium nie wymaga pełnej widoczności elementu — wystarczy, że użytkownik może zidentyfikować element posiadający fokus. Pełna widoczność elementu jest przedmiotem bardziej rygorystycznego kryterium 2.4.12 Fokus niezakryty (rozszerzony), które należy do poziomu AAA.
