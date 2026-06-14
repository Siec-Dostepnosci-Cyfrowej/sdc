---
id: test-rozmiar-celu-ulepszone
title: Rozmiar celu dotyku(ulepszone)
sidebar_label: Rozmiar celu dotyku (ulepszone)
sidebar_position: 90
description: Scenariusz testu sprawdzającego, czy elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS, co ułatwia ich aktywowanie użytkownikom korzystającym z ekranów dotykowych i urządzeń wskazujących.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-090**

## 2. Nazwa testu

**Rozmiar celu (ulepszone)**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **opcjonalnie**,
- profil pogłębiony: **opcjonalnie**.

## 4. Opis testu

Test sprawdza, czy elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS, co ułatwia ich aktywowanie użytkownikom korzystającym z urządzeń wskazujących.

### Co oznacza „cel dotyku”?

Cel dotyku (ang. *target*) to obszar interfejsu, który użytkownik może aktywować za pomocą:

- dotyku,
- kliknięcia myszą,
- pióra cyfrowego,
- innego urządzenia wskazującego.

Celami dotyku są między innymi:

- przyciski,
- łącza,
- ikony pełniące funkcję przycisku,
- przełączniki,
- pola wyboru,
- elementy sterujące formularzy.

Wymaganie nie odnosi się wyłącznie do widocznego rozmiaru elementu. Istotny jest rozmiar rzeczywistego **obszaru aktywnego**, który reaguje na działanie użytkownika.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.5 Rozmiar celu (Poziom AAA)

### EN 301 549

- 9.2.5.5 Target Size
- 11.2.5.5 Target Size

## 6. Zastosowanie do treści

Test stosuje się do:

- przycisków,
- ikon pełniących funkcję przycisku,
- łączy prezentowanych jako samodzielne elementy interfejsu,
- elementów menu,
- przełączników,
- pól wyboru,
- przycisków radiowych,
- elementów sterujących formularzy,
- elementów sterujących aplikacji mobilnych,
- niestandardowych komponentów interaktywnych.

## 7. Oczekiwany wynik

Wszystkie oceniane elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej:

**44 × 44 piksele CSS**

lub spełniają jeden z wyjątków przewidzianych przez WCAG.

Użytkownik może łatwo aktywować element bez ryzyka przypadkowego uruchomienia sąsiednich funkcji.

## 8. Dlaczego to jest ważne

Małe elementy interaktywne wymagają dużej precyzji ruchów.

Problem ten szczególnie dotyczy:

- osób z niepełnosprawnościami ruchowymi,
- osób starszych,
- użytkowników korzystających z urządzeń mobilnych,
- osób z drżeniem rąk,
- osób korzystających z alternatywnych urządzeń wskazujących.

Większy obszar aktywny:

- zmniejsza liczbę błędnych aktywacji,
- przyspiesza wykonywanie zadań,
- poprawia komfort korzystania,
- ogranicza frustrację użytkowników.

## 9. Kogo to dotyczy

Szczególnie:

- osób z ograniczoną sprawnością ruchową,
- osób starszych,
- użytkowników urządzeń mobilnych,
- osób korzystających z dotyku,
- osób korzystających z technologii wspomagających sterowanie wskaźnikiem,
- użytkowników alternatywnych urządzeń wskazujących.

## 10. Sposób testowania

### Krok 1. Identyfikacja elementów interaktywnych

Zidentyfikuj wszystkie elementy aktywowane za pomocą:

- dotyku,
- kliknięcia,
- wskaźnika.

### Krok 2. Ocena obszaru aktywnego

Sprawdź, czy każdy element posiada aktywny obszar o rozmiarze co najmniej:

**44 × 44 piksele CSS**

Rozmiar odnosi się do rzeczywistego obszaru aktywnego, a nie wyłącznie do widocznego elementu.

### Krok 3. Ocena odstępów

Sprawdź, czy sąsiednie elementy nie utrudniają aktywacji właściwego celu.

### Krok 4. Test praktyczny

Przy użyciu dotyku lub innego urządzenia wskazującego sprawdź, czy element można łatwo aktywować bez ryzyka przypadkowego uruchomienia sąsiedniego elementu.

### Krok 5. Ocena wyjątków

Sprawdź, czy element należy do jednego z wyjątków przewidzianych przez WCAG.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie oceniane elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS lub spełniają jeden z wyjątków przewidzianych przez WCAG.

### Częściowo spełnione

Większość elementów spełnia wymaganie, jednak występują pojedyncze elementy o mniejszym obszarze aktywnym.

### Niespełnione

Istnieją elementy interaktywne, których obszar aktywny jest mniejszy niż 44 × 44 piksele CSS i nie zachodzi żaden z wyjątków.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie zawierające elementy interaktywne może zostać ocenione pod kątem tego wymagania.

## 12. Typowe niezgodności

- małe ikony akcji bez powiększonego obszaru aktywnego,
- przyciski sterujące o rozmiarze mniejszym niż 44 × 44 piksele CSS,
- niewielkie przyciski zamykania okien dialogowych,
- małe elementy menu w aplikacjach mobilnych,
- ciasno rozmieszczone przyciski akcji,
- niewielkie pola wyboru i przełączniki.

## 13. Dobre praktyki

- projektowanie przycisków większych niż wymagane minimum,
- zwiększanie aktywnego obszaru ikon,
- zapewnianie odpowiednich odstępów pomiędzy elementami,
- testowanie interfejsu przy użyciu dotyku,
- projektowanie z uwzględnieniem potrzeb użytkowników urządzeń mobilnych,
- stosowanie rozwiązań zgodnych z zasadą „mobile first”.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie elementów o niewystarczającym rozmiarze oraz ocenę wpływu problemu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu występują elementy interaktywne o obszarze aktywnym mniejszym niż 44 × 44 piksele CSS. Może to utrudniać ich aktywowanie osobom korzystającym z dotyku, użytkownikom urządzeń mobilnych oraz osobom z ograniczoną precyzją ruchów.

## 17. Rekomendacje naprawcze

- zwiększyć obszar aktywny elementów interaktywnych,
- zapewnić większe odstępy pomiędzy sąsiadującymi elementami,
- powiększyć aktywne obszary ikon i kontrolek,
- przeprowadzić testy przy użyciu dotyku i urządzeń mobilnych,
- uwzględnić wymagania WCAG 2.5.5 już na etapie projektowania interfejsu.

## 18. Powiązane testy

- testID-089 Rozmiar celu (minimum)
- testID-080 Gesty wskaźnika
- testID-081 Rezygnacja ze wskazania
- testID-088 Przeciąganie
- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-070 Dostępna nazwa elementu interaktywnego
- testID-087 Fokus niezakryty
- testID-091 Wygląd fokusu
