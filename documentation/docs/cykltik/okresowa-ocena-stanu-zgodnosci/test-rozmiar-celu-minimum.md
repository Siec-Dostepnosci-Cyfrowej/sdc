---
id: test-rozmiar-celu-minimum
title: Rozmiar celu (minimum)
sidebar_label: Rozmiar celu (minimum)
sidebar_position: 89
description: Scenariusz testu sprawdzającego, czy elementy interaktywne posiadają wystarczająco duży obszar aktywny lub odpowiednie odstępy od sąsiednich elementów, tak aby mogły być łatwo aktywowane przez użytkowników korzystających z myszy, ekranu dotykowego lub innych urządzeń wskazujących.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-089**

## 2. Nazwa testu

**Rozmiar celu (minimum)**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy elementy interaktywne posiadają wystarczająco duży obszar aktywny lub odpowiednie odstępy od sąsiednich elementów, tak aby mogły być łatwo aktywowane przez użytkowników korzystających z myszy, ekranu dotykowego lub innych urządzeń wskazujących.

### Co oznacza „cel dotyku”?

Cel dotyku (ang. *target*) to obszar interfejsu, który użytkownik może aktywować za pomocą:

- kliknięcia myszą,
- dotknięcia ekranu,
- pióra cyfrowego,
- innego urządzenia wskazującego.

Celami dotyku są między innymi:

- przyciski,
- łącza,
- ikony pełniące funkcję przycisku,
- pola wyboru,
- przełączniki,
- elementy sterujące formularzy.

Wymaganie nie odnosi się wyłącznie do widocznego rozmiaru elementu. Istotny jest rozmiar **obszaru aktywnego**, czyli miejsca, które reaguje na działanie użytkownika.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.8 Rozmiar celu (minimum) (Poziom AA)

### EN 301 549

Po publikacji wersji normy uwzględniającej WCAG 2.2:

- 9.2.5.8 Target Size (Minimum)
- 11.2.5.8 Target Size (Minimum)

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów interaktywnych, w szczególności:

- przycisków,
- łączy,
- ikon pełniących funkcję przycisku,
- przełączników,
- pól wyboru,
- przycisków radiowych,
- elementów sterujących formularzy,
- elementów sterujących aplikacji mobilnych.

## 7. Oczekiwany wynik

Każdy element interaktywny:

- posiada obszar aktywny o rozmiarze co najmniej 24 × 24 piksele CSS,

lub

- jest wystarczająco odseparowany od innych elementów interaktywnych,

lub

- spełnia jeden z wyjątków przewidzianych przez WCAG.

Użytkownik może łatwo aktywować element bez ryzyka przypadkowego uruchomienia sąsiednich funkcji.

## 8. Dlaczego to jest ważne

Małe elementy interaktywne mogą być trudne do trafienia i aktywowania.

Problem ten szczególnie dotyczy:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- użytkowników urządzeń mobilnych,
- osób korzystających z ekranów dotykowych,
- użytkowników o ograniczonej precyzji ruchów,
- osób starszych.

Zbyt małe cele mogą prowadzić do przypadkowego aktywowania niewłaściwych elementów lub uniemożliwiać wykonanie zadania.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób starszych,
- użytkowników urządzeń mobilnych,
- użytkowników ekranów dotykowych,
- osób korzystających z alternatywnych urządzeń wskazujących,
- osób o ograniczonej precyzji ruchów.

## 10. Sposób testowania

### Krok 1. Identyfikacja elementów interaktywnych

Zidentyfikuj elementy, które użytkownik może aktywować za pomocą wskaźnika.

### Krok 2. Ocena rozmiaru celu

Sprawdź, czy obszar aktywny elementu ma rozmiar co najmniej:

**24 × 24 piksele CSS**

lub

czy wokół elementu zapewniono wystarczającą przestrzeń zapobiegającą przypadkowemu aktywowaniu sąsiednich elementów.

### Krok 3. Ocena wyjątków

Sprawdź, czy element należy do jednego z wyjątków przewidzianych przez WCAG.

### Krok 4. Ocena użyteczności

Przy użyciu myszy lub ekranu dotykowego sprawdź, czy element można łatwo aktywować bez ryzyka przypadkowego uruchomienia sąsiednich elementów.

### Krok 5. Ocena interfejsu mobilnego

Jeżeli rozwiązanie jest dostępne na urządzeniach mobilnych, sprawdź wygodę aktywowania elementów przy użyciu dotyku.

## 11. Kryteria oceny wyniku

### Spełnione

Każdy element interaktywny:

- posiada obszar aktywny o rozmiarze co najmniej 24 × 24 piksele CSS,

lub

- jest wystarczająco odseparowany od innych elementów,

lub

- spełnia jeden z wyjątków określonych przez WCAG.

### Częściowo spełnione

Większość elementów spełnia wymaganie, jednak występują pojedyncze elementy o zbyt małym rozmiarze lub niewystarczających odstępach.

### Niespełnione

Istnieją elementy interaktywne:

- mniejsze niż 24 × 24 piksele CSS,
- położone zbyt blisko innych elementów,
- trudne do aktywowania.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie zawierające elementy interaktywne powinno spełniać to wymaganie.

## 12. Typowe niezgodności

- bardzo małe ikony pełniące funkcję przycisku,
- grupy małych łączy umieszczonych bardzo blisko siebie,
- małe przyciski sterujące w aplikacjach mobilnych,
- niewielkie pola wyboru bez odpowiednio dużych etykiet,
- ikony akcji dostępne wyłącznie jako małe symbole graficzne,
- przyciski umieszczone zbyt blisko siebie.

## 13. Dobre praktyki

- stosowanie obszarów aktywnych większych niż minimalne wymaganie,
- zapewnianie odpowiednich odstępów między elementami,
- powiększanie obszaru aktywnego ikon,
- wykorzystywanie etykiet zwiększających obszar aktywacji,
- projektowanie interfejsów z myślą o obsłudze dotykowej,
- testowanie interfejsu na urządzeniach mobilnych.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie elementów o niewystarczającym rozmiarze oraz ocenę wpływu problemu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu występują elementy interaktywne o zbyt małym obszarze aktywnym lub umieszczone zbyt blisko innych elementów. Może to utrudniać ich aktywowanie użytkownikom korzystającym z ekranów dotykowych, osobom z ograniczoną sprawnością ruchową oraz użytkownikom o ograniczonej precyzji ruchów.

## 17. Rekomendacje naprawcze

- zwiększyć obszar aktywny elementów interaktywnych,
- zapewnić większe odstępy pomiędzy sąsiadującymi elementami,
- powiększyć obszary aktywne ikon i kontrolek,
- wykorzystać etykiety zwiększające obszar aktywacji,
- przeprowadzić testy użyteczności na urządzeniach mobilnych.

## 18. Powiązane testy

- testID-080 Gesty wskaźnika
- testID-081 Rezygnacja ze wskazania
- testID-088 Przeciąganie
- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-070 Dostępna nazwa elementu interaktywnego
- testID-087 Fokus niezakryty
- testID-091 Wygląd fokusu
