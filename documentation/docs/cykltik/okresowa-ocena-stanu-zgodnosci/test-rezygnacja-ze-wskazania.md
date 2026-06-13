---
id: test-rezygnacja-ze-wskazania
title: Rezygnacja ze wskazania
sidebar_label: Rezygnacja ze wskazania
sidebar_position: 81
description: Scenariusz testu sprawdzającego, czy funkcjonalności uruchamiane za pomocą pojedynczego wskaźnika nie są wykonywane natychmiast po zdarzeniu „w dół” (naciśnięciu).
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rezygnacja ze wskazania]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rezygnacja ze wskazania]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-081**

## Nazwa testu

Rezygnacja ze wskazania

## Cel testu

Sprawdzenie, czy funkcjonalności uruchamiane za pomocą pojedynczego wskaźnika (np. kliknięcia myszą, dotknięcia ekranu) nie są wykonywane natychmiast po zdarzeniu „w dół” (naciśnięciu), chyba że użytkownik może przerwać działanie, cofnąć jego skutki lub wykorzystanie zdarzenia „w dół” jest niezbędne dla charakteru funkcjonalności.

## Powiązane wymagania

### WCAG 2.1

- 2.5.2 Rezygnacja ze wskazania (Pointer Cancellation) – poziom A

### EN 301 549

- 9.2.5.2 Pointer Cancellation
- 11.2.5.2 Pointer Cancellation

---

## Dlaczego to jest ważne

Użytkownicy mogą przypadkowo dotknąć ekranu, kliknąć niewłaściwy element lub rozpocząć działanie, którego nie zamierzali wykonać.

Jeżeli funkcja zostaje wykonana natychmiast po naciśnięciu przycisku lub dotknięciu ekranu, użytkownik może nie mieć możliwości:

- przerwania działania,
- poprawienia pomyłki,
- cofnięcia skutków przypadkowej aktywacji.

Problem ten szczególnie dotyczy:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- użytkowników ekranów dotykowych,
- osób korzystających z alternatywnych urządzeń wskazujących.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- użytkowników urządzeń mobilnych,
- osób z ograniczoną precyzją ruchów,
- osób korzystających z technologii wspomagających,
- wszystkich użytkowników wykonujących działania mogące powodować istotne skutki.

---

## Zakres stosowania

Test należy wykonywać dla wszystkich funkcji uruchamianych za pomocą:

- kliknięcia myszą,
- dotknięcia ekranu,
- pióra cyfrowego,
- innych pojedynczych wskaźników.

W szczególności dla:

- przycisków akcji,
- formularzy,
- operacji usuwania danych,
- publikowania treści,
- wysyłania formularzy,
- operacji finansowych,
- działań powodujących zmianę stanu systemu.

---

## Metoda badania

### Krok 1. Identyfikacja funkcji aktywowanych wskaźnikiem

Zidentyfikuj funkcjonalności uruchamiane przez:

- kliknięcie,
- dotknięcie,
- naciśnięcie elementu interfejsu.

### Krok 2. Sprawdzenie momentu wykonania funkcji

Dla każdej funkcjonalności ustal:

- czy działanie wykonywane jest już przy zdarzeniu „w dół”,
- czy wykonywane jest dopiero przy zdarzeniu „w górę”.

### Krok 3. Ocena możliwości anulowania

Jeżeli funkcjonalność wykorzystuje zdarzenie „w dół”, sprawdź czy:

- użytkownik może przerwać działanie przed jego wykonaniem,
- użytkownik może cofnąć skutki działania,
- zdarzenie „w górę” anuluje efekt zdarzenia „w dół”.

### Krok 4. Ocena wyjątków

Jeżeli działanie wykonywane jest przy zdarzeniu „w dół”, oceń czy jest to niezbędne dla charakteru funkcjonalności.

Przykłady funkcji, dla których wykorzystanie zdarzenia „w dół” może być uzasadnione:

- rysowanie,
- odręczne podpisywanie dokumentów,
- przeciąganie elementów,
- inne funkcje wymagające ciągłego śledzenia ruchu wskaźnika.

---

## Kryteria oceny

### Spełnia

Dla każdej funkcjonalności uruchamianej pojedynczym wskaźnikiem spełnione jest co najmniej jedno z poniższych warunków:

- zdarzenie „w dół” nie wykonuje funkcji,
- funkcja wykonywana jest przy zdarzeniu „w górę”,
- użytkownik może anulować działanie przed jego wykonaniem,
- użytkownik może cofnąć skutki działania,
- zdarzenie „w górę” anuluje efekt zdarzenia „w dół”,
- wykorzystanie zdarzenia „w dół” jest niezbędne dla charakteru funkcjonalności.

### Częściowo spełnia

Większość funkcji spełnia wymaganie, ale stwierdzono pojedyncze przypadki niezgodne z wymaganiem.

### Nie spełnia

Istnieją funkcjonalności uruchamiane przez pojedynczy wskaźnik, które:

- wykonują działanie już przy zdarzeniu „w dół”,
- nie mogą zostać anulowane,
- nie mogą zostać cofnięte,
- nie należą do wyjątków przewidzianych przez WCAG.

### Nie dotyczy

Brak funkcjonalności uruchamianych pojedynczym wskaźnikiem.

---

## Typowe niezgodności

- usuwanie elementu natychmiast po naciśnięciu przycisku,
- wysyłanie formularza przy samym dotknięciu przycisku,
- uruchamianie akcji podczas naciśnięcia bez możliwości anulowania,
- brak możliwości cofnięcia przypadkowo wykonanej operacji,
- interfejs oparty na natychmiastowej aktywacji elementów.

---

## Dobre praktyki

- wykonywanie funkcji dopiero przy zdarzeniu „w górę”,
- stosowanie przycisków potwierdzenia dla operacji istotnych,
- umożliwienie cofnięcia operacji,
- stosowanie mechanizmów „Anuluj” lub „Cofnij”,
- projektowanie interakcji odpornych na przypadkowe aktywacje.

---

## Klasyfikacja problemów

### Krytyczne

- nieodwracalne działania uruchamiane przy zdarzeniu „w dół”,
- usuwanie danych bez możliwości anulowania lub cofnięcia.

### Istotne

- brak możliwości cofnięcia działań mających wpływ na użytkownika,
- wysyłanie formularzy bez możliwości przerwania działania.

### Systemowe

- projekt interfejsu oparty na natychmiastowej aktywacji elementów bez mechanizmów ochronnych.

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
- Dostęp z klawiatury
- Formularz
- Identyfikacja błędów
- Sugestie korekty błędów
- Komunikaty o stanie

---

## Uwagi

Pojęcie „istotne dla charakteru funkcjonalności” należy interpretować wąsko. Nie oznacza ono rozwiązania wygodniejszego dla projektanta lub łatwiejszego do zaimplementowania. Oznacza sytuację, w której funkcjonalność nie może być zrealizowana bez wykorzystania zdarzenia „w dół”, np. podczas rysowania lub składania podpisu odręcznego.
