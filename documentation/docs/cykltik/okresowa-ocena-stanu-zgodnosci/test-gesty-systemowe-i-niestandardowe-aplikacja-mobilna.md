---
id: test-gesty-systemowe-i-niestandardowe-aplikacja-mobilna
title: Gesty systemowe i niestandardowe (aplikacja mobilna)
sidebar_label: Gesty systemowe i niestandardowe
sidebar_position: 97
description: Scenariusz testu sprawdzającego, czy funkcje aplikacji mobilnej wykorzystujące gesty systemowe lub niestandardowe pozostają dostępne dla użytkowników korzystających z technologii wspomagających oraz czy dla gestów złożonych zapewniono alternatywne sposoby wykonania tych samych działań.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gest systemowy,gest niestandardowy]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gest systemowy,gest niestandardowy]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-097**

## 2. Nazwa testu

**Gesty systemowe i niestandardowe (aplikacja mobilna)**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy funkcje aplikacji mobilnej wykorzystujące gesty systemowe lub niestandardowe pozostają dostępne dla użytkowników korzystających z technologii wspomagających oraz czy dla gestów złożonych zapewniono alternatywne sposoby wykonania tych samych działań.

### Co oznacza „gest systemowy”?

Gest systemowy to gest obsługiwany przez system operacyjny urządzenia.

Przykładami są:

- przewijanie,
- przechodzenie pomiędzy ekranami,
- cofanie,
- standardowe gesty TalkBack,
- standardowe gesty VoiceOver.

Użytkownicy urządzeń mobilnych zazwyczaj znają te gesty i korzystają z nich niezależnie od konkretnej aplikacji.

### Co oznacza „gest niestandardowy”?

Gest niestandardowy to gest zdefiniowany przez twórcę aplikacji.

Przykładami są:

- przesunięcie karty w celu usunięcia,
- gest dwoma lub trzema palcami,
- przeciągnięcie elementu do określonego miejsca,
- specjalny skrót gestowy,
- własny sposób sterowania funkcjami aplikacji.

Takie gesty mogą być trudne lub niemożliwe do wykonania przez część użytkowników.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

W szczególności:

- 2.5.1 Gesty wskaźnika,
- 2.5.2 Rezygnacja ze wskazania,
- 2.5.4 Aktywowanie ruchem,
- 2.5.7 Przeciąganie,
- 2.1.1 Klawiatura,
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

W szczególności:

- 11.2.5.1 Pointer Gestures,
- 11.2.5.2 Pointer Cancellation,
- 11.2.5.4 Motion Actuation,
- 11.2.5.7 Dragging Movements,
- 11.2.1.1 Keyboard,
- 11.4.1.2 Name, Role, Value.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów wykorzystujących gesty,
- galerii zdjęć,
- map,
- karuzel,
- list przewijanych gestami,
- komponentów niestandardowych,
- systemów nawigacji opartych na gestach.

## 7. Oczekiwany wynik

Każda funkcja dostępna za pomocą gestu złożonego lub niestandardowego może zostać wykonana również przy użyciu alternatywnej metody.

Użytkownik nie jest zmuszony do wykonywania gestów wielopunktowych, niestandardowych lub wymagających dużej precyzji.

## 8. Dlaczego to jest ważne

Wiele aplikacji mobilnych wykorzystuje:

- przesunięcia palcem,
- gesty wielopunktowe,
- przeciąganie,
- ruch urządzenia,
- niestandardowe skróty gestowe.

Dla części użytkowników wykonanie takich gestów jest trudne lub niemożliwe.

Problem szczególnie dotyczy:

- osób niewidomych korzystających z czytników ekranu,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników przełączników,
- użytkowników klawiatur zewnętrznych,
- osób korzystających z alternatywnych metod sterowania.

Brak alternatywy może uniemożliwiać korzystanie z części funkcji aplikacji.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- użytkowników przełączników,
- użytkowników alternatywnych metod sterowania.

## 10. Sposób testowania

### Krok 1. Identyfikacja gestów

Przejrzyj aplikację i zidentyfikuj funkcje wykorzystujące:

- przesunięcia,
- przeciąganie,
- gesty wielopunktowe,
- ruch urządzenia,
- niestandardowe skróty gestowe.

### Krok 2. Ocena alternatyw

Dla każdej funkcji sprawdź, czy dostępna jest alternatywna metoda wykonania tej samej czynności.

Przykładowo:

- przycisk,
- menu,
- polecenie kontekstowe,
- obsługa klawiaturą,
- standardowy element interfejsu.

### Krok 3. Test z czytnikiem ekranu

Uruchom:

- TalkBack (Android),

lub

- VoiceOver (iOS).

Sprawdź, czy funkcjonalność pozostaje dostępna podczas korzystania z czytnika ekranu.

### Krok 4. Ocena procesów użytkownika

Sprawdź, czy wszystkie kluczowe zadania mogą zostać wykonane bez konieczności używania gestów niestandardowych lub wielopunktowych.

### Krok 5. Ocena dostępności alternatyw

Sprawdź, czy alternatywne metody są łatwo dostępne i zapewniają osiągnięcie tego samego rezultatu.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie funkcje wykorzystujące gesty złożone lub niestandardowe posiadają alternatywną metodę wykonania.

### Częściowo spełnione

Większość funkcji posiada alternatywy, jednak część funkcjonalności nadal wymaga gestów niedostępnych dla części użytkowników.

### Niespełnione

Istnieją funkcje, które mogą zostać wykonane wyłącznie przy użyciu gestów niestandardowych, wielopunktowych lub wymagających dużej precyzji.

### Nie dotyczy

Aplikacja nie wykorzystuje gestów wykraczających poza standardowe aktywowanie elementów interfejsu.

## 12. Typowe niezgodności

- usuwanie elementów wyłącznie przez przesunięcie palcem,
- brak alternatywy dla przeciągania,
- funkcje dostępne wyłącznie po wykonaniu gestu wielopunktowego,
- sterowanie mapą wyłącznie przy użyciu gestów szczypania,
- ukryte funkcje dostępne wyłącznie przez niestandardowe gesty,
- brak możliwości wykonania zadania podczas korzystania z czytnika ekranu.

## 13. Dobre praktyki

- zapewnianie przycisków wykonujących te same funkcje co gesty,
- udostępnianie funkcji poprzez menu kontekstowe,
- stosowanie standardowych komponentów systemowych,
- testowanie aplikacji z TalkBack i VoiceOver,
- unikanie ukrywania kluczowych funkcji za gestami niestandardowymi,
- projektowanie alternatywnych ścieżek realizacji zadań.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wykrytych gestów oraz ocenę dostępności alternatywnych metod wykonania zadań.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W aplikacji występują funkcje dostępne wyłącznie za pomocą gestów niestandardowych lub wielopunktowych. Nie zapewniono alternatywnych metod wykonania tych samych działań. Problem może uniemożliwiać korzystanie z części funkcji osobom korzystającym z technologii wspomagających oraz użytkownikom z ograniczoną sprawnością ruchową.

## 17. Rekomendacje naprawcze

- zapewnić alternatywne sposoby wykonania funkcji aktywowanych gestami,
- udostępnić funkcje poprzez standardowe elementy interfejsu,
- ograniczyć wykorzystanie gestów niestandardowych jako jedynej metody obsługi,
- testować aplikację z użytkownikami TalkBack i VoiceOver,
- zweryfikować wszystkie procesy użytkownika pod kątem dostępności bez gestów złożonych.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- testID-080 Gesty wskaźnika
- testID-081 Rezygnacja ze wskazania
- testID-082 Aktywowanie ruchem
- testID-088 Przeciąganie
- testID-058 Karuzela
- testID-068 Galeria obrazów
