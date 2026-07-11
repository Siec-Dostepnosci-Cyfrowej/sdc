---
id: test-gesty-wskaznika
title: Gesty wskaźnika
sidebar_label: Gesty wskaźnika
sidebar_position: 80
description: Scenariusz testu sprawdzającego, czy funkcje rozwiązania wymagające wykonania gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu mogą zostać wykonane również przy użyciu prostego gestu wykonywanego jednym wskaźnikiem, bez konieczności wykonywania złożonych ruchów.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gesty wskaźnika]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gesty wskaźnika]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-080**

## 2. Nazwa testu

**Gesty wskaźnika**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy funkcje rozwiązania wymagające wykonania gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu mogą zostać wykonane również przy użyciu prostego gestu wykonywanego jednym wskaźnikiem, bez konieczności wykonywania złożonych ruchów.

### Co oznaczają „gesty wskaźnika”?

Gesty wskaźnika to działania wykonywane przy użyciu urządzenia wskazującego, które służą do sterowania interfejsem użytkownika.

W zależności od rodzaju urządzenia mogą to być:

- dotknięcia ekranu,
- kliknięcia myszą,
- przesunięcia palcem lub wskaźnikiem,
- przeciąganie elementów,
- gesty wielopunktowe (np. używające dwóch lub więcej palców),
- gesty wykonywane piórem cyfrowym.

Wymaganie dotyczące gestów wskaźnika odnosi się przede wszystkim do gestów złożonych, które wymagają:

- wykonania określonego ruchu,
- użycia więcej niż jednego punktu dotyku,
- zachowania odpowiedniej precyzji lub koordynacji ruchów.

Jeżeli wykonanie funkcji wymaga takiego gestu, użytkownik powinien mieć możliwość wykonania tej samej czynności również w prostszy sposób, na przykład za pomocą przycisku, menu lub pojedynczego dotknięcia.

Przykładami gestów wskaźnika objętych tym wymaganiem są:

- gest „szczypania” służący do powiększania lub pomniejszania,
- przeciągnięcie elementu w określone miejsce,
- przesunięcie palcem w celu usunięcia elementu,
- gest wykonany dwoma lub trzema palcami,
- narysowanie określonego kształtu na ekranie.

### Jaka jest różnica między gestem prostym a gestem złożonym?

Gest prosty to działanie niewymagające wykonywania określonego ruchu ani używania wielu punktów dotyku.

Przykładami gestów prostych są:

- pojedyncze dotknięcie,
- pojedyncze kliknięcie,
- aktywowanie przycisku,
- wybór elementu z listy.

Gest złożony wymaga wykonania określonego ruchu, użycia wielu punktów dotyku lub zachowania odpowiedniej precyzji.

Przykładami gestów złożonych są:

- gest „szczypania” służący do powiększania lub pomniejszania,
- przeciąganie elementu,
- przesunięcie palcem w określonym kierunku,
- gest wykonywany dwoma lub trzema palcami,
- narysowanie określonego kształtu na ekranie.

Wymaganie WCAG dotyczące gestów wskaźnika koncentruje się na gestach złożonych. Jeżeli wykonanie funkcji wymaga takiego gestu, użytkownik powinien mieć możliwość wykonania tej samej czynności również przy użyciu prostszego sposobu obsługi, niewymagającego złożonych ruchów lub używania wielu punktów dotyku.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.1 Gesty wskaźnika (Poziom A)

### EN 301 549

- 9.2.5.1 Pointer Gestures
- 11.2.5.1 Pointer Gestures

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji mobilnych,
- responsywnych stron internetowych obsługiwanych dotykowo,
- map interaktywnych,
- galerii obrazów,
- karuzel,
- komponentów wykorzystujących przeciąganie,
- innych interfejsów wykorzystujących gesty dotykowe.

## 7. Oczekiwany wynik

Wszystkie funkcje wymagające gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu posiadają alternatywny sposób wykonania niewymagający takich gestów.

Użytkownik może wykonać tę samą operację przy użyciu pojedynczego wskaźnika, prostego gestu lub standardowych kontrolek interfejsu.

## 8. Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą wykonywać precyzyjne lub złożone gesty dotykowe.

Problemy mogą dotyczyć między innymi:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z urządzeń wspomagających,
- osób starszych,
- użytkowników obsługujących urządzenie jedną ręką,
- osób z ograniczoną precyzją ruchów.

Funkcje wymagające gestów takich jak szczypanie, rozsuwanie palców, obracanie dwoma palcami lub przeciąganie po określonej ścieżce mogą być dla tych osób niedostępne.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z alternatywnych urządzeń wskazujących,
- osób korzystających z technologii wspomagających,
- osób starszych,
- użytkowników urządzeń mobilnych,
- użytkowników obsługujących urządzenie jedną ręką.

## 10. Sposób testowania

### Krok 1. Identyfikacja gestów

Zidentyfikuj funkcje wymagające:

- użycia więcej niż jednego palca,
- wykonania określonego ruchu po ścieżce,
- przeciągania elementów,
- gestów powiększania lub obracania.

### Krok 2. Próba wykonania funkcji prostym gestem

Sprawdź, czy ta sama funkcja może zostać wykonana przy użyciu:

- pojedynczego dotknięcia,
- kliknięcia,
- prostego przeciągnięcia,
- przycisków sterujących,
- innych alternatywnych mechanizmów.

### Krok 3. Ocena dostępności alternatywy

Sprawdź, czy alternatywny sposób:

- jest łatwo dostępny,
- zapewnia tę samą funkcjonalność,
- nie wymaga wykonywania gestów wielopunktowych.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie funkcje wymagające gestów wielopunktowych lub gestów opartych na ścieżce ruchu posiadają alternatywny sposób wykonania niewymagający takich gestów.

### Częściowo spełnione

Alternatywne metody są dostępne tylko dla części funkcji.

### Niespełnione

Istnieją funkcje, których wykonanie wymaga użycia gestów wielopunktowych lub gestów opartych na ścieżce ruchu i nie zapewniono alternatywnego sposobu wykonania tych działań.

### Nie dotyczy

Rozwiązanie nie wykorzystuje gestów wielopunktowych ani gestów opartych na ścieżce ruchu.

## 12. Typowe niezgodności

- powiększanie treści wyłącznie przez gest szczypania,
- galeria zdjęć wymagająca gestów wielopunktowych,
- mapa wymagająca wyłącznie gestów powiększania lub obracania,
- funkcje dostępne jedynie przez przeciąganie elementów,
- brak przycisków umożliwiających wykonanie tej samej operacji.

## 13. Dobre praktyki

- zapewnienie przycisków powiększania i pomniejszania,
- możliwość wykonania operacji za pomocą pojedynczego dotknięcia,
- alternatywne sterowanie klawiaturą,
- zapewnienie równoważnych kontrolek interfejsu dla wszystkich funkcji realizowanych gestami.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie badanych funkcji oraz opis stwierdzonych ograniczeń.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu część funkcji wymaga wykonania gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu. Nie zapewniono alternatywnych metod wykonania tych działań przy użyciu pojedynczego wskaźnika lub standardowych kontrolek interfejsu. Problem może utrudniać lub uniemożliwiać korzystanie z rozwiązania osobom z ograniczoną sprawnością ruchową.

## 17. Rekomendacje naprawcze

- zapewnić alternatywne przyciski lub kontrolki realizujące te same funkcje,
- umożliwić wykonanie operacji przy użyciu pojedynczego wskaźnika,
- wyeliminować konieczność wykonywania gestów wielopunktowych tam, gdzie nie jest to niezbędne,
- zapewnić obsługę funkcji za pomocą klawiatury lub innych mechanizmów dostępności.

## 18. Powiązane testy

- testID-088 Przeciąganie
- testID-082 Aktywowanie ruchem
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-097 Gesty systemowe i niestandardowe (aplikacja mobilna)
- testID-058 Karuzela
- testID-068 Galeria obrazów
- testID-055 Modalne okno dialogowe
