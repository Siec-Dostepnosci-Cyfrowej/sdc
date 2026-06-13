---
id: test-przeciaganie
title: Przeciąganie
sidebar_label: Przeciąganie
sidebar_position: 88
description: Scenariusz testu sprawdzającego, czy funkcjonalności wymagające przeciągania elementów mogą zostać wykonane również przy użyciu alternatywnego sposobu niewymagającego operacji przeciągania.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,przeciąganie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,przeciąganie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-088**

## 2. Nazwa testu

**Przeciąganie**

## 3. Profil stosowania testu

**ACR-EXT**

## 4. Opis testu

Test sprawdza, czy funkcjonalności wymagające przeciągania elementów mogą zostać wykonane również przy użyciu alternatywnego sposobu niewymagającego operacji przeciągania.

### Co oznacza „przeciąganie”?

Przeciąganie (ang. *dragging movement*) polega na:

1. wskazaniu elementu,
2. przytrzymaniu przycisku myszy lub utrzymaniu kontaktu z ekranem dotykowym,
3. przesunięciu elementu do nowego miejsca,
4. zakończeniu operacji poprzez zwolnienie przycisku lub oderwanie palca od ekranu.

Przykładami przeciągania są:

- zmiana kolejności elementów metodą „przeciągnij i upuść”,
- przesuwanie wydarzeń w kalendarzu,
- przenoszenie plików,
- przesuwanie elementów na mapie,
- obsługa suwaków wymagających ciągłego ruchu wskaźnika.

Test nie dotyczy zwykłego kliknięcia, dotknięcia ani prostego wyboru elementu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.7 Przeciąganie (Poziom AA)

### EN 301 549

Po publikacji wersji normy uwzględniającej WCAG 2.2:

- 9.2.5.7 Dragging Movements
- 11.2.5.7 Dragging Movements

## 6. Zastosowanie do treści

Test stosuje się do:

- komponentów typu „przeciągnij i upuść”,
- list umożliwiających zmianę kolejności elementów,
- planów i harmonogramów,
- kalendarzy,
- map interaktywnych,
- suwaków,
- kreatorów graficznych,
- systemów zarządzania treścią,
- aplikacji biznesowych wykorzystujących przeciąganie.

## 7. Oczekiwany wynik

Dla każdej funkcjonalności wykorzystującej przeciąganie istnieje alternatywna metoda wykonania tego samego zadania niewymagająca przeciągania.

Alternatywa umożliwia osiągnięcie tego samego rezultatu przy użyciu standardowych elementów interfejsu.

## 8. Dlaczego to jest ważne

Przeciąganie wymaga wykonywania precyzyjnych ruchów oraz utrzymywania ciągłej kontroli nad wskaźnikiem.

Dla wielu użytkowników może być trudne lub niemożliwe, szczególnie dla:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- użytkowników technologii wspomagających,
- osób korzystających z alternatywnych urządzeń wskazujących,
- użytkowników ekranów dotykowych,
- osób starszych.

Jeżeli wykonanie zadania wymaga wyłącznie przeciągania, część użytkowników może zostać całkowicie pozbawiona możliwości skorzystania z funkcjonalności.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z technologii wspomagających,
- osób korzystających z alternatywnych urządzeń wskazujących,
- użytkowników urządzeń mobilnych,
- osób starszych,
- użytkowników korzystających wyłącznie z klawiatury.

## 10. Sposób testowania

### Krok 1. Identyfikacja funkcji wykorzystujących przeciąganie

Zidentyfikuj funkcjonalności wymagające:

- przeciągania elementów,
- przenoszenia obiektów,
- zmiany kolejności elementów,
- przesuwania wskaźnika po określonej ścieżce.

### Krok 2. Próba wykonania zadania bez przeciągania

Sprawdź, czy tę samą funkcję można wykonać przy użyciu:

- przycisków,
- menu kontekstowego,
- pól wyboru,
- klawiatury,
- innych standardowych elementów interfejsu.

### Krok 3. Ocena kompletności alternatywy

Sprawdź, czy alternatywny sposób:

- umożliwia wykonanie tej samej operacji,
- zapewnia ten sam rezultat,
- jest dostępny dla wszystkich użytkowników,
- nie wymaga przeciągania.

### Krok 4. Ocena wyjątków

Sprawdź, czy wykorzystanie przeciągania jest rzeczywiście niezbędne dla charakteru funkcjonalności.

Przykładem dopuszczalnego wyjątku może być:

- rysowanie,
- malowanie,
- modelowanie graficzne,
- inne działania wymagające ciągłego ruchu wskaźnika.

## 11. Kryteria oceny wyniku

### Spełnione

Dla każdej funkcjonalności wykorzystującej przeciąganie dostępna jest alternatywna metoda wykonania zadania niewymagająca przeciągania.

### Częściowo spełnione

Alternatywny sposób wykonania zadania zapewniono jedynie dla części funkcjonalności.

### Niespełnione

Istnieją funkcjonalności, które mogą zostać wykonane wyłącznie przez przeciąganie elementów.

### Nie dotyczy

Rozwiązanie nie wykorzystuje przeciągania jako sposobu realizacji funkcjonalności.

## 12. Typowe niezgodności

- zmiana kolejności elementów wyłącznie przez przeciąganie,
- plan zajęć umożliwiający modyfikację wyłącznie metodą „przeciągnij i upuść”,
- kalendarz wymagający przeciągania wydarzeń,
- zarządzanie plikami wyłącznie metodą „drag and drop”,
- suwak możliwy do obsługi wyłącznie przez przeciąganie,
- brak alternatywnych przycisków „Przenieś”, „Przesuń”, „W górę”, „W dół”.

## 13. Dobre praktyki

- stosowanie przycisków zmiany kolejności,
- umożliwienie wykonania operacji z poziomu klawiatury,
- stosowanie menu kontekstowych,
- traktowanie przeciągania jako dodatkowego, a nie jedynego sposobu wykonania zadania,
- zapewnienie alternatywnej ścieżki realizacji wszystkich funkcji.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie funkcjonalności wykorzystujących przeciąganie oraz opis stwierdzonych ograniczeń.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu część funkcjonalności może zostać wykonana wyłącznie poprzez przeciąganie elementów. Nie zapewniono alternatywnego sposobu realizacji tych działań. Problem może uniemożliwiać korzystanie z funkcjonalności osobom z ograniczoną sprawnością ruchową oraz użytkownikom korzystającym z technologii wspomagających.

## 17. Rekomendacje naprawcze

- zapewnić alternatywne przyciski realizujące te same operacje,
- umożliwić wykonanie funkcji przy użyciu klawiatury,
- zastosować menu kontekstowe lub dodatkowe kontrolki,
- zapewnić alternatywną ścieżkę wykonania każdej funkcji wymagającej przeciągania,
- przetestować rozwiązanie z użytkownikami korzystającymi z technologii wspomagających.

## 18. Powiązane testy

- testID-080 Gesty wskaźnika
- testID-081 Rezygnacja ze wskazania
- testID-082 Aktywowanie ruchem
- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-058 Karuzela
- testID-068 Galeria obrazów
- testID-130 Komponent Kalendarz
