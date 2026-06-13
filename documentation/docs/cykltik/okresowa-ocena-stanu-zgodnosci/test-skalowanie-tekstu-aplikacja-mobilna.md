---
id: test-skalowanie-tekstu-aplikacja-mobilna
title: Skalowanie tekstu (aplikacja mobilna)
sidebar_label: Skalowanie tekstu (aplikacja mobilna)
sidebar_position: 101
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna prawidłowo reaguje na zmianę rozmiaru tekstu ustawioną przez użytkownika w systemie operacyjnym oraz czy treść i funkcjonalność pozostają dostępne przy znacznym powiększeniu tekstu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,skalowanie tekstu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,skalowanie tekstu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-101**

## 2. Nazwa testu

**Skalowanie tekstu (aplikacja mobilna)**

## 3. Profil stosowania testu

**ACR-MIN**

## 4. Opis testu

Test sprawdza, czy aplikacja mobilna prawidłowo reaguje na zmianę rozmiaru tekstu ustawioną przez użytkownika w systemie operacyjnym oraz czy treść i funkcjonalność pozostają dostępne przy znacznym powiększeniu tekstu.

### Co oznacza „skalowanie tekstu”?

Skalowanie tekstu oznacza dostosowanie wielkości tekstu wyświetlanego w aplikacji do ustawień wybranych przez użytkownika w systemie operacyjnym urządzenia.

Użytkownik może zwiększyć rozmiar tekstu między innymi w celu:

- poprawy czytelności,
- ograniczenia zmęczenia wzroku,
- korzystania z urządzenia przy słabszym wzroku,
- dostosowania interfejsu do własnych potrzeb.

Aplikacja powinna respektować te ustawienia i zachowywać czytelność oraz funkcjonalność również przy bardzo dużych rozmiarach tekstu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

W szczególności:

- 1.4.4 Zmiana rozmiaru tekstu,
- 1.4.10 Dopasowanie do szerokości ekranu,
- 1.4.12 Odstępy w tekście,
- 1.3.1 Informacje i relacje.

### EN 301 549

W szczególności:

- 11.1.4.4 Resize Text,
- 11.1.4.10 Reflow,
- wymagania dotyczące współpracy z ustawieniami dostępności systemu operacyjnego.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- menu,
- list wyników,
- ekranów ustawień,
- komunikatów,
- okien dialogowych,
- procesów użytkownika,
- komponentów niestandardowych.

## 7. Oczekiwany wynik

Po zwiększeniu rozmiaru tekstu:

- treść pozostaje czytelna,
- informacje nie są obcinane,
- elementy nie nakładają się na siebie,
- użytkownik może wykonywać wszystkie kluczowe zadania,
- funkcjonalność aplikacji pozostaje zachowana.

## 8. Dlaczego to jest ważne

Wielu użytkowników korzysta z powiększonego tekstu ustawionego w systemie operacyjnym.

Dotyczy to szczególnie:

- osób słabowidzących,
- osób starszych,
- osób z trudnościami w czytaniu,
- użytkowników korzystających z urządzeń mobilnych w trudnych warunkach oświetleniowych.

Jeżeli aplikacja nie respektuje ustawień użytkownika, może dochodzić do sytuacji, w których:

- tekst zostaje obcięty,
- informacje stają się niedostępne,
- elementy interfejsu nakładają się na siebie,
- formularze stają się trudne lub niemożliwe do obsługi.

## 9. Kogo to dotyczy

Szczególnie:

- osób słabowidzących,
- osób starszych,
- osób z dysleksją,
- osób z trudnościami w czytaniu,
- użytkowników korzystających z ustawień dostępności systemu,
- wszystkich użytkowników preferujących większy tekst.

## 10. Sposób testowania

### Krok 1. Ustawienie powiększonego tekstu

Zwiększ rozmiar tekstu w ustawieniach systemu operacyjnego.

Zaleca się sprawdzenie:

- największego standardowego rozmiaru tekstu,
- największego rozmiaru dostępności oferowanego przez system.

### Krok 2. Uruchomienie aplikacji

Uruchom aplikację lub przejdź ponownie przez oceniane ekrany.

### Krok 3. Ocena prezentacji treści

Sprawdź, czy:

- tekst pozostaje czytelny,
- tekst nie jest obcinany,
- tekst nie nakłada się na inne elementy,
- nie dochodzi do utraty informacji.

### Krok 4. Ocena funkcjonalności

Sprawdź, czy nadal można:

- korzystać z menu,
- wypełniać formularze,
- odczytywać komunikaty,
- wykonywać kluczowe procesy użytkownika.

### Krok 5. Ocena komponentów

Sprawdź działanie:

- przycisków,
- kart,
- zakładek,
- komunikatów,
- okien dialogowych,
- komponentów niestandardowych.

### Krok 6. Weryfikacja procesów użytkownika

Przeprowadź najważniejsze procesy użytkownika przy maksymalnym rozmiarze tekstu i oceń, czy nadal można je ukończyć.

## 11. Kryteria oceny wyniku

### Spełnione

Aplikacja prawidłowo reaguje na zwiększenie rozmiaru tekstu. Treść pozostaje czytelna, a funkcjonalność dostępna.

### Częściowo spełnione

Występują lokalne problemy związane ze skalowaniem tekstu, jednak nie uniemożliwiają wykonania kluczowych zadań.

### Niespełnione

Powiększenie tekstu powoduje utratę informacji, funkcjonalności lub uniemożliwia wykonanie zadania.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna wykorzystująca tekst może zostać oceniona.

## 12. Typowe niezgodności

- obcinanie tekstu w przyciskach,
- ucinanie etykiet formularzy,
- nakładanie się elementów interfejsu,
- niewidoczne komunikaty,
- utrata części treści,
- przyciski wychodzące poza ekran,
- komponenty ignorujące ustawienia systemowe,
- błędne działanie formularzy po zwiększeniu rozmiaru tekstu.

## 13. Dobre praktyki

- korzystanie z Dynamic Type w iOS,
- korzystanie z mechanizmów skalowania Androida,
- projektowanie elastycznych układów interfejsu,
- testowanie przy maksymalnych ustawieniach dostępności,
- unikanie sztywno definiowanych wysokości elementów,
- uwzględnianie skalowania tekstu już na etapie projektowania.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie problemów związanych ze skalowaniem tekstu oraz ocenę ich wpływu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nieprawidłowo reaguje na zwiększenie rozmiaru tekstu ustawionego przez użytkownika. Po zastosowaniu dużych rozmiarów czcionki część treści jest obcinana, nakłada się na inne elementy lub staje się niedostępna. Problem może utrudniać korzystanie z aplikacji osobom słabowidzącym oraz użytkownikom korzystającym z ustawień dostępności systemu operacyjnego.

## 17. Rekomendacje naprawcze

- dostosować interfejs do współpracy z systemowymi ustawieniami rozmiaru tekstu,
- usunąć przypadki obcinania treści,
- zapewnić elastyczne skalowanie komponentów,
- przeprojektować elementy o sztywno określonych wymiarach,
- testować aplikację przy maksymalnych ustawieniach dostępności,
- zweryfikować wszystkie kluczowe procesy użytkownika przy powiększonym tekście.

## 18. Powiązane testy

- testID-100 Orientacja ekranu (aplikacja mobilna)
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-033 Zmiana rozmiaru tekstu
- testID-034 Dopasowanie do szerokości ekranu
- testID-035 Reflow (dopasowanie treści)
- testID-084 Odstępy w tekście
- testID-089 Rozmiar celu (minimum)
- testID-090 Rozmiar celu (ulepszone)
