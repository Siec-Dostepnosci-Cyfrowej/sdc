---
id: test-ustawienia-dostepnosci-systemu-aplikacja-mobilna
title: Ustawienia dostępności systemu (aplikacja mobilna)
sidebar_label: Ustawienia dostępności systemu (aplikacja mobilna)
sidebar_position: 102
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna prawidłowo współpracuje z ustawieniami dostępności systemu operacyjnego oraz czy respektuje preferencje użytkownika wpływające na sposób prezentacji i obsługi interfejsu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,ustawienia dostępności systemu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,ustawienia dostępności systemu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-102**

## 2. Nazwa testu

**Ustawienia dostępności systemu (aplikacja mobilna)**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy aplikacja mobilna prawidłowo współpracuje z ustawieniami dostępności systemu operacyjnego oraz czy respektuje preferencje użytkownika wpływające na sposób prezentacji treści, działania interfejsu oraz obsługi aplikacji.

### Co oznaczają „ustawienia dostępności systemu”?

Systemy Android i iOS udostępniają funkcje pozwalające użytkownikowi dostosować urządzenie do własnych potrzeb.

Przykładowe ustawienia obejmują:

- zwiększenie rozmiaru tekstu,
- pogrubienie tekstu,
- zwiększenie kontrastu,
- ograniczenie animacji,
- czytnik ekranu,
- przełączniki dostępności,
- funkcje powiększania,
- ustawienia kolorów,
- alternatywne metody sterowania.

Aplikacja powinna współpracować z tymi funkcjami oraz respektować ustawienia wybrane przez użytkownika.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę wielu kryteriów sukcesu, w szczególności:

- 1.3.4 Orientacja,
- 1.4.3 Kontrast (minimum),
- 1.4.4 Zmiana rozmiaru tekstu,
- 1.4.10 Dopasowanie do szerokości ekranu,
- 2.2.2 Wstrzymywanie, zatrzymywanie, ukrywanie,
- 2.3.3 Animacje wywołane interakcją,
- 2.5.4 Aktywowanie ruchem,
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

W szczególności wymagania dotyczące:

- współpracy z usługami dostępności,
- współpracy z ustawieniami systemowymi,
- współpracy z technologiami wspomagającymi,
- dostępności aplikacji mobilnych.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- procesów użytkownika,
- komponentów niestandardowych,
- ekranów zawierających animacje,
- ekranów zawierających multimedia,
- ustawień aplikacji.

## 7. Oczekiwany wynik

Aplikacja:

- respektuje ustawienia dostępności systemu,
- zachowuje funkcjonalność po ich włączeniu,
- współpracuje z technologiami wspomagającymi,
- nie wymaga wyłączania funkcji dostępności systemu,
- nie ogranicza użytkownikowi możliwości korzystania z preferowanych ustawień.

## 8. Dlaczego to jest ważne

Użytkownicy często korzystają z funkcji dostępności systemu jako podstawowego sposobu dostosowania urządzenia do swoich potrzeb.

Jeżeli aplikacja ignoruje te ustawienia lub działa z nimi nieprawidłowo, użytkownik może:

- utracić dostęp do części funkcji,
- mieć trudności z odczytywaniem treści,
- nie być w stanie obsługiwać aplikacji,
- utracić możliwość korzystania z preferowanych technologii wspomagających.

Problem może występować nawet wtedy, gdy aplikacja spełnia część wymagań WCAG ocenianych oddzielnie.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- osób z nadwrażliwością na ruch i animacje,
- osób starszych,
- użytkowników technologii wspomagających,
- osób korzystających z indywidualnych ustawień dostępności.

## 10. Sposób testowania

### Krok 1. Ocena podstawowa

Uruchom aplikację przy domyślnych ustawieniach systemu.

### Krok 2. Włączenie funkcji dostępności

Włącz kolejno wybrane funkcje dostępności systemu.

Przykładowo:

#### Android

- zwiększenie rozmiaru tekstu,
- zwiększenie wielkości wyświetlania,
- TalkBack,
- przełączniki dostępności,
- wysoki kontrast tekstu,
- ograniczenie animacji,
- korekcję kolorów,
- odwracanie kolorów.

#### iOS

- Dynamic Type,
- większe rozmiary dostępności,
- VoiceOver,
- Switch Control,
- pogrubienie tekstu,
- zwiększenie kontrastu,
- ograniczenie ruchu,
- ograniczenie przezroczystości,
- powiększenie ekranu.

### Krok 3. Ocena reakcji aplikacji

Po każdej zmianie sprawdź:

- czy aplikacja działa poprawnie,
- czy treść pozostaje czytelna,
- czy interfejs zachowuje spójność,
- czy funkcjonalność pozostaje dostępna.

### Krok 4. Ocena procesów użytkownika

Przeprowadź najważniejsze procesy użytkownika przy aktywnych ustawieniach dostępności.

### Krok 5. Ocena komponentów niestandardowych

Sprawdź, czy komponenty niestandardowe prawidłowo reagują na ustawienia systemowe.

### Krok 6. Ocena technologii wspomagających

Sprawdź współpracę aplikacji z:

- TalkBack,
- VoiceOver,
- przełącznikami dostępności,
- innymi technologiami wspomagającymi dostępnymi na urządzeniu.

## 11. Kryteria oceny wyniku

### Spełnione

Aplikacja prawidłowo współpracuje z ustawieniami dostępności systemu i nie utrudnia korzystania z funkcji dostępności urządzenia.

### Częściowo spełnione

Większość ustawień działa poprawnie, jednak występują pojedyncze problemy lub ograniczenia.

### Niespełnione

Aplikacja ignoruje istotne ustawienia dostępności lub ich wykorzystanie powoduje utratę funkcjonalności, informacji albo możliwości wykonania zadania.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna funkcjonuje w środowisku wyposażonym w funkcje dostępności.

## 12. Typowe niezgodności

- ignorowanie systemowego rozmiaru tekstu,
- nieprawidłowe działanie po włączeniu pogrubienia tekstu,
- brak współpracy z VoiceOver lub TalkBack,
- błędy interfejsu po zwiększeniu kontrastu,
- animacje pozostające aktywne mimo ustawienia ograniczenia ruchu,
- komponenty niestandardowe nieobsługujące technologii wspomagających,
- utrata funkcjonalności po zmianie ustawień dostępności,
- nieprawidłowa współpraca z przełącznikami dostępności.

## 13. Dobre praktyki

- korzystanie z natywnych komponentów systemowych,
- respektowanie ustawień użytkownika,
- testowanie aplikacji z funkcjami dostępności systemu,
- ograniczanie własnych mechanizmów zastępujących rozwiązania systemowe,
- regularne testowanie nowych wersji aplikacji na aktualnych wersjach Androida i iOS,
- uwzględnianie funkcji dostępności już na etapie projektowania.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę współpracy aplikacji z ustawieniami dostępności systemu oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nie współpracuje prawidłowo z wybranymi funkcjami dostępności systemu operacyjnego. Włączenie niektórych ustawień powoduje utratę funkcjonalności, pogorszenie czytelności lub problemy z obsługą aplikacji. Może to utrudniać korzystanie z rozwiązania osobom korzystającym z technologii wspomagających i indywidualnych ustawień dostępności.

## 17. Rekomendacje naprawcze

- zapewnić zgodność aplikacji z funkcjami dostępności Androida i iOS,
- respektować ustawienia wybrane przez użytkownika,
- dostosować komponenty niestandardowe do współpracy z technologiami wspomagającymi,
- testować aplikację przy aktywnych funkcjach dostępności systemu,
- zweryfikować wszystkie kluczowe procesy użytkownika przy różnych konfiguracjach dostępności,
- regularnie testować aplikację po aktualizacjach systemów operacyjnych.

## 18. Powiązane testy

- testID-101 Skalowanie tekstu (aplikacja mobilna)
- testID-100 Orientacja ekranu (aplikacja mobilna)
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- testID-097 Gesty systemowe i niestandardowe (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-082 Aktywowanie ruchem
- testID-078 Kontrola odtwarzania dźwięku
