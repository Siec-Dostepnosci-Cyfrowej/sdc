---
id: test-rozmiar-celu-ulepszone
title: Rozmiar celu dotykowego (ulepszone)
sidebar_label: Rozmiar celu dotykowego (ulepszone)
sidebar_position: 90
description: Scenariusz testu sprawdzającego, czy elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS, co ułatwia ich aktywowanie użytkownikom korzystającym z ekranów dotykowych i urządzeń wskazujących.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-090**

## Nazwa testu

Rozmiar celu dotykowego (ulepszone)

## Cel testu

Sprawdzenie, czy elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS, co ułatwia ich aktywowanie użytkownikom korzystającym z ekranów dotykowych i urządzeń wskazujących.

## Powiązane wymagania

### WCAG 2.1 / 2.2

- 2.5.5 Rozmiar celu (Target Size) – poziom AAA

### EN 301 549

- 9.2.5.5 Target Size
- 11.2.5.5 Target Size

---

## Dlaczego to jest ważne

Małe elementy interaktywne wymagają dużej precyzji ruchów.

Problem ten szczególnie dotyczy:

- użytkowników urządzeń mobilnych,
- osób z niepełnosprawnościami ruchowymi,
- osób starszych,
- użytkowników z drżeniem rąk,
- osób korzystających z alternatywnych urządzeń wskazujących.

Większy obszar aktywny:

- zmniejsza liczbę błędnych aktywacji,
- przyspiesza wykonywanie zadań,
- poprawia komfort korzystania,
- ogranicza frustrację użytkowników.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z ograniczoną sprawnością ruchową,
- osób starszych,
- użytkowników urządzeń mobilnych,
- użytkowników ekranów dotykowych,
- osób korzystających z technologii wspomagających sterowanie wskaźnikiem.

---

## Zakres stosowania

Test należy wykonywać dla:

- przycisków,
- ikon pełniących funkcję przycisku,
- łączy prezentowanych jako samodzielne elementy interfejsu,
- elementów menu,
- przełączników,
- pól wyboru,
- przycisków radiowych,
- elementów sterujących aplikacji mobilnych,
- niestandardowych komponentów interaktywnych.

---

## Metoda badania

### Krok 1. Identyfikacja elementów interaktywnych

Zidentyfikuj wszystkie elementy aktywowane za pomocą:

- dotknięcia,
- kliknięcia,
- wskaźnika.

### Krok 2. Ocena obszaru aktywnego

Sprawdź, czy każdy element posiada aktywny obszar o rozmiarze co najmniej:

**44 × 44 piksele CSS**

Rozmiar odnosi się do rzeczywistego obszaru aktywnego, a nie wyłącznie do widocznego elementu.

### Krok 3. Ocena odstępów

Sprawdź, czy sąsiednie elementy nie utrudniają aktywacji właściwego celu.

### Krok 4. Test praktyczny

Na urządzeniu mobilnym lub przy użyciu wskaźnika sprawdź, czy element można łatwo aktywować bez ryzyka przypadkowego wybrania sąsiedniego elementu.

---

## Kryteria oceny

### Spełnia

Wszystkie oceniane elementy interaktywne posiadają obszar aktywny o rozmiarze co najmniej 44 × 44 piksele CSS lub spełniają jeden z wyjątków przewidzianych przez WCAG.

### Częściowo spełnia

Większość elementów spełnia wymaganie, jednak występują pojedyncze elementy o mniejszym obszarze aktywnym.

### Nie spełnia

Istnieją elementy interaktywne, których obszar aktywny jest mniejszy niż 44 × 44 piksele CSS i nie zachodzi żaden z wyjątków.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie zawierające elementy interaktywne może zostać ocenione pod kątem tego wymagania.

---

## Typowe niezgodności

- małe ikony akcji bez powiększonego obszaru aktywnego,
- przyciski sterujące o rozmiarze mniejszym niż 44 × 44 piksele CSS,
- niewielkie przyciski zamykania okien dialogowych,
- małe elementy menu w aplikacjach mobilnych,
- ciasno rozmieszczone przyciski akcji.

---

## Dobre praktyki

- projektowanie przycisków o rozmiarze większym niż wymagane minimum,
- zwiększanie aktywnego obszaru ikon,
- zapewnianie odpowiednich odstępów pomiędzy elementami,
- testowanie interfejsu na urządzeniach mobilnych,
- stosowanie zasad projektowania „mobile first”.

---

## Wyjątki przewidziane przez WCAG

Wymaganie nie ma zastosowania do:

### Elementów równoważnych

Jeżeli istnieje inny sposób wykonania tej samej funkcji spełniający wymaganie.

### Treści w tekście

Łącza znajdujące się w zwykłym tekście nie muszą spełniać wymogu 44 × 44 piksele CSS.

### Elementów niezbędnych

Gdy określony rozmiar jest istotny dla charakteru prezentowanych informacji.

### Elementów określonych przez przepisy lub standardy zewnętrzne

Jeżeli rozmiar wynika z wymagań niezależnych od autora rozwiązania.

---

## Klasyfikacja problemów

### Istotne

- małe cele występujące w kluczowych procesach użytkownika.

### Umiarkowane

- elementy powodujące częste błędne aktywacje.

### Drobne

- pojedyncze elementy o niewielkim odstępstwie od wymaganego rozmiaru.

---

## Profil stosowania testu

| Profil                                       | Stosowanie  |
| -------------------------------------------- | ----------- |
| Okresowa ocena stanu zgodności — minimum     | Nie         |
| Okresowa ocena stanu zgodności — rozszerzona | Opcjonalnie |
| Ocena przed odbiorem rozwiązania             | Tak         |
| Audyt zgodności                              | Tak         |
| ACR-MIN                                      | Nie         |
| ACR-EXT                                      | Opcjonalnie |
| ACR-AUDIT                                    | Tak         |

---

## Powiązane testy

- Rozmiar celu (minimum) – 2.5.8
- Gesty wskaźnika
- Przeciąganie
- Rezygnacja ze wskazania
- Dostęp z klawiatury
- Dostępna nazwa elementu interaktywnego

---

## Uwagi

Kryterium 2.5.5 pochodzi z WCAG 2.1 i należy do poziomu AAA. W przeciwieństwie do kryterium 2.5.8 (Rozmiar celu – minimum), które wymaga obszaru 24 × 24 piksele CSS i należy do poziomu AA, kryterium 2.5.5 wymaga obszaru co najmniej 44 × 44 piksele CSS. W praktyce oba kryteria warto analizować łącznie. Kryterium 2.5.8 określa minimalny akceptowalny poziom dostępności, natomiast 2.5.5 wskazuje poziom rekomendowany, zapewniający wyższy komfort i mniejsze ryzyko błędów podczas korzystania z interfejsu.
