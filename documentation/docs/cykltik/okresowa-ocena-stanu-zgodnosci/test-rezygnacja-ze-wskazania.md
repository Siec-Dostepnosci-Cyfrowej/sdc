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

## 1. Identyfikator testu

**testID-081**

## 2. Nazwa testu

**Rezygnacja ze wskazania**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy funkcjonalności uruchamiane za pomocą pojedynczego wskaźnika (np. kliknięcia myszą, dotknięcia ekranu lub użycia pióra cyfrowego) nie są wykonywane natychmiast po zdarzeniu „w dół” (naciśnięciu), chyba że użytkownik może anulować działanie, cofnąć jego skutki lub wykorzystanie zdarzenia „w dół” jest niezbędne dla charakteru funkcjonalności.

### Co oznacza „rezygnacja ze wskazania”?

Rezygnacja ze wskazania oznacza możliwość przerwania lub wycofania działania wykonywanego za pomocą wskaźnika przed jego ostatecznym zakończeniem.

W praktyce użytkownik powinien mieć możliwość zmiany decyzji, jeżeli przypadkowo dotknął ekranu, kliknął element lub rozpoczął wykonywanie gestu.

Przykładowo:

- użytkownik naciska przycisk, ale może zrezygnować z jego aktywacji przed zwolnieniem palca lub przycisku myszy,
- użytkownik rozpoczyna przeciąganie elementu, ale może przerwać operację bez wykonania działania,
- użytkownik przypadkowo dotyka elementu interfejsu, ale nie powoduje to natychmiastowego wykonania nieodwracalnej operacji.

W większości przypadków aktywacja funkcji powinna następować po zakończeniu działania użytkownika (na przykład po zwolnieniu przycisku myszy lub oderwaniu palca od ekranu), a nie w chwili jego rozpoczęcia.

### Dlaczego jest to ważne?

Wielu użytkowników może przypadkowo:

- dotknąć ekranu,
- kliknąć niewłaściwy element,
- wykonać niezamierzony ruch ręką,
- utracić kontrolę nad wskaźnikiem.

Jeżeli działanie zostaje wykonane natychmiast po dotknięciu lub naciśnięciu, użytkownik nie ma możliwości poprawienia błędu.

Może to prowadzić do:

- przypadkowego wysłania formularza,
- uruchomienia niepożądanej funkcji,
- usunięcia danych,
- wykonania operacji finansowej lub administracyjnej bez zamiaru użytkownika.

### Przykłady prawidłowych rozwiązań

- aktywacja przycisku następuje po zwolnieniu przycisku myszy lub oderwaniu palca od ekranu,
- użytkownik może anulować działanie przez odsunięcie wskaźnika od elementu przed zakończeniem gestu,
- system umożliwia cofnięcie lub anulowanie skutków działania,
- dla działań o istotnych konsekwencjach wyświetlane jest okno potwierdzenia.

### Czym „rezygnacja ze wskazania” różni się od „aktywowania ruchem”?

Rezygnacja ze wskazania dotyczy działań wykonywanych za pomocą wskaźnika, takich jak:

- kliknięcie myszą,
- dotknięcie ekranu,
- przeciąganie,
- inne gesty wykonywane na ekranie.

Aktywowanie ruchem dotyczy natomiast funkcji uruchamianych przez:

- ruch urządzenia,
- przechylenie urządzenia,
- potrząśnięcie urządzeniem,
- ruch użytkownika wykrywany przez czujniki urządzenia.

Są to odrębne wymagania WCAG i powinny być oceniane niezależnie.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.2 Rezygnacja ze wskazania (Poziom A)

### EN 301 549

- 9.2.5.2 Pointer Cancellation
- 11.2.5.2 Pointer Cancellation

## 6. Zastosowanie do treści

Test stosuje się do wszystkich funkcji uruchamianych za pomocą:

- kliknięcia myszą,
- dotknięcia ekranu,
- pióra cyfrowego,
- innych pojedynczych wskaźników.

W szczególności do:

- przycisków akcji,
- formularzy,
- operacji usuwania danych,
- publikowania treści,
- wysyłania formularzy,
- operacji finansowych,
- działań powodujących zmianę stanu systemu.

## 7. Oczekiwany wynik

Funkcje uruchamiane za pomocą pojedynczego wskaźnika nie wykonują działania już w chwili naciśnięcia, chyba że:

- użytkownik może anulować działanie,
- użytkownik może cofnąć skutki działania,
- zdarzenie „w górę” anuluje efekt zdarzenia „w dół”,
- wykorzystanie zdarzenia „w dół” jest niezbędne dla charakteru funkcjonalności.

## 8. Dlaczego to jest ważne

Użytkownicy mogą przypadkowo dotknąć ekranu, kliknąć niewłaściwy element lub rozpocząć działanie, którego nie zamierzali wykonać.

Jeżeli funkcja zostaje wykonana natychmiast po naciśnięciu przycisku lub dotknięciu ekranu, użytkownik może nie mieć możliwości:

- przerwania działania,
- poprawienia pomyłki,
- cofnięcia skutków przypadkowej aktywacji.

Problem ten szczególnie dotyczy osób korzystających z ekranów dotykowych oraz osób z ograniczoną precyzją ruchów.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- osób korzystających z alternatywnych urządzeń wskazujących,
- użytkowników ekranów dotykowych,
- osób starszych,
- użytkowników technologii wspomagających.

## 10. Sposób testowania

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

Jeżeli funkcjonalność wykorzystuje zdarzenie „w dół”, sprawdź, czy:

- użytkownik może przerwać działanie przed jego wykonaniem,
- użytkownik może cofnąć skutki działania,
- zdarzenie „w górę” anuluje efekt zdarzenia „w dół”.

### Krok 4. Ocena wyjątków

Jeżeli działanie wykonywane jest przy zdarzeniu „w dół”, oceń, czy jest to niezbędne dla charakteru funkcjonalności.

Przykłady dopuszczalnych wyjątków:

- rysowanie,
- podpis odręczny,
- przeciąganie elementów,
- funkcje wymagające ciągłego śledzenia ruchu wskaźnika.

## 11. Kryteria oceny wyniku

### Spełnione

Dla każdej funkcjonalności uruchamianej pojedynczym wskaźnikiem spełniony jest co najmniej jeden z warunków określonych w kryterium sukcesu.

### Częściowo spełnione

Większość funkcji spełnia wymaganie, jednak stwierdzono pojedyncze przypadki niezgodne z wymaganiem.

### Niespełnione

Istnieją funkcjonalności uruchamiane pojedynczym wskaźnikiem, które:

- wykonują działanie już przy zdarzeniu „w dół”,
- nie mogą zostać anulowane,
- nie mogą zostać cofnięte,
- nie należą do dopuszczalnych wyjątków.

### Nie dotyczy

Brak funkcjonalności uruchamianych pojedynczym wskaźnikiem.

## 12. Typowe niezgodności

- usuwanie elementu natychmiast po naciśnięciu przycisku,
- wysyłanie formularza przy samym dotknięciu przycisku,
- uruchamianie akcji podczas naciśnięcia bez możliwości anulowania,
- brak możliwości cofnięcia przypadkowo wykonanej operacji,
- interfejs oparty na natychmiastowej aktywacji elementów.

## 13. Dobre praktyki

- wykonywanie funkcji dopiero przy zdarzeniu „w górę”,
- stosowanie przycisków potwierdzenia dla operacji istotnych,
- umożliwienie cofnięcia operacji,
- stosowanie mechanizmów „Anuluj” lub „Cofnij”,
- projektowanie interakcji odpornych na przypadkowe aktywacje.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie badanych funkcjonalności oraz opis stwierdzonych ograniczeń.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu część funkcjonalności wykonywana jest natychmiast po zdarzeniu „w dół” (naciśnięciu) i nie zapewnia możliwości anulowania lub cofnięcia skutków działania. Może to prowadzić do przypadkowej aktywacji funkcji oraz utrudniać korzystanie z rozwiązania osobom z ograniczoną sprawnością ruchową.

## 17. Rekomendacje naprawcze

- wykonywać działania dopiero po zdarzeniu „w górę”,
- umożliwić anulowanie operacji przed jej wykonaniem,
- zapewnić możliwość cofnięcia skutków działania,
- stosować mechanizmy potwierdzania dla operacji istotnych,
- przeanalizować wszystkie funkcje uruchamiane pojedynczym wskaźnikiem pod kątem przypadkowej aktywacji.

## 18. Powiązane testy

- testID-080 Gesty wskaźnika
- testID-088 Przeciąganie
- testID-120 Formularz
- testID-044 Identyfikacja błędów
- testID-043 Sugestie korekty błędów
- testID-069 Komunikaty o stanie
