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



## Identyfikator testu

**testID-089**

## Nazwa testu

Rozmiar celu (minimum)

## Cel testu

Sprawdzenie, czy elementy interaktywne posiadają wystarczająco duży obszar aktywny lub odpowiednie odstępy od sąsiednich elementów, tak aby mogły być łatwo aktywowane przez użytkowników korzystających z myszy, ekranu dotykowego lub innych urządzeń wskazujących.

## Powiązane wymagania

### WCAG 2.2

- 2.5.8 Rozmiar celu (minimum) (Target Size (Minimum)) – poziom AA

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.2.5.8 Target Size (Minimum)
- 11.2.5.8 Target Size (Minimum)

---

## Dlaczego to jest ważne

Małe elementy interaktywne mogą być trudne do trafienia i aktywowania.

Problem ten szczególnie dotyczy:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- użytkowników urządzeń mobilnych,
- osób korzystających z ekranów dotykowych,
- użytkowników o ograniczonej precyzji ruchów.

Zbyt małe cele mogą prowadzić do przypadkowego aktywowania niewłaściwych elementów lub uniemożliwiać wykonanie zadania.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami ruchowymi,
- osób starszych,
- użytkowników urządzeń mobilnych,
- użytkowników ekranów dotykowych,
- osób korzystających z alternatywnych urządzeń wskazujących.

---

## Zakres stosowania

Test należy wykonywać dla wszystkich elementów interaktywnych, w szczególności:

- przycisków,
- łączy,
- ikon pełniących funkcję przycisku,
- przełączników,
- pól wyboru,
- przycisków radiowych,
- elementów sterujących formularzy,
- elementów sterujących aplikacji mobilnych.

---

## Metoda badania

### Krok 1. Identyfikacja elementów interaktywnych

Zidentyfikuj elementy, które użytkownik może aktywować za pomocą wskaźnika.

### Krok 2. Ocena rozmiaru celu

Sprawdź, czy obszar aktywny elementu ma rozmiar co najmniej:

**24 × 24 piksele CSS**

lub

czy wokół elementu zapewniono wystarczającą przestrzeń, która zapobiega przypadkowemu aktywowaniu sąsiednich elementów.

### Krok 3. Ocena wyjątków

Sprawdź, czy element należy do jednego z wyjątków przewidzianych przez WCAG.

### Krok 4. Ocena użyteczności

Przy użyciu myszy lub ekranu dotykowego sprawdź, czy element można łatwo aktywować bez ryzyka przypadkowego uruchomienia sąsiednich elementów.

---

## Kryteria oceny

### Spełnia

Każdy element interaktywny:

- posiada obszar aktywny o rozmiarze co najmniej 24 × 24 piksele CSS,

lub

- jest wystarczająco odseparowany od innych elementów,

lub

- spełnia jeden z wyjątków określonych przez WCAG.

### Częściowo spełnia

Większość elementów spełnia wymaganie, jednak występują pojedyncze elementy o zbyt małym rozmiarze lub niewystarczających odstępach.

### Nie spełnia

Istnieją elementy interaktywne:

- mniejsze niż 24 × 24 piksele CSS,
- położone zbyt blisko innych elementów,
- trudne do aktywowania.

### Nie dotyczy

Nie stosuje się.

Każde rozwiązanie zawierające elementy interaktywne powinno spełniać to wymaganie.

---

## Typowe niezgodności

- bardzo małe ikony pełniące funkcję przycisku,
- grupy małych łączy umieszczonych bardzo blisko siebie,
- małe przyciski sterujące w aplikacjach mobilnych,
- niewielkie pola wyboru bez odpowiednio dużych etykiet,
- ikony akcji dostępne wyłącznie jako małe symbole graficzne.

---

## Dobre praktyki

- stosowanie obszarów aktywnych większych niż minimalne wymaganie,
- zapewnianie odpowiednich odstępów między elementami,
- powiększanie obszaru aktywnego ikon,
- wykorzystywanie etykiet zwiększających obszar aktywacji,
- projektowanie interfejsów z myślą o obsłudze dotykowej.

---

## Klasyfikacja problemów

### Istotne

- małe elementy występujące w kluczowych procesach użytkownika.

### Umiarkowane

- elementy trudne do aktywowania, powodujące częste pomyłki.

### Drobne

- pojedyncze elementy o nieco zbyt małym rozmiarze, których aktywacja pozostaje możliwa.

---

## Wyjątki przewidziane przez WCAG

Wymaganie nie ma zastosowania do elementów:

- których rozmiar wynika bezpośrednio z prezentowanej treści (np. link w tekście),
- których rozmiar został określony przez przepisy lub standardy zewnętrzne,
- których położenie lub rozmiar jest niezbędny dla charakteru funkcjonalności,
- dla których dostępna jest równoważna kontrolka spełniająca wymaganie.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Nie        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Nie        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Gesty wskaźnika
- Rezygnacja ze wskazania
- Przeciąganie
- Dostępna nazwa elementu interaktywnego
- Fokus niezakryty
- Widoczność fokusu
- Dostęp z klawiatury

---

## Uwagi

Kryterium 2.5.8 zostało wprowadzone w WCAG 2.2. Jego celem jest ograniczenie problemów wynikających z konieczności precyzyjnego trafiania w małe elementy interfejsu. Wymaganie nie oznacza, że każdy przycisk musi mieć widoczny rozmiar 24 × 24 piksele CSS — wystarczy, że taki rozmiar ma obszar aktywny elementu lub że zapewniono odpowiednie odstępy między sąsiednimi elementami. Szczególną uwagę należy zwracać na interfejsy mobilne oraz komponenty oparte na ikonach.
