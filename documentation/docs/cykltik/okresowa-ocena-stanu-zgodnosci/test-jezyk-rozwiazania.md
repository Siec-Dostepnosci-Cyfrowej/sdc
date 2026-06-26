---
id: test-jezyk-rozwiazania
title: Karta testu — Język rozwiązania (aplikacja mobilna)
sidebar_label: Język rozwiązania
sidebar_position: 137
description: Scenariusz testu sprawdzającego, główny język aplikacji mobilnej został poprawnie określony programowo oraz czy technologie wspomagające mogą prawidłowo rozpoznawać język interfejsu, treści i komunikatów prezentowanych użytkownikowi.
keywords: [język, język strony, dostępność cyfrowa,interfejs użytkownika, okresowa ocena zgodności,aplikacja mobilna]
tags: [język, język strony, dostępność cyfrowa,interfejs użytkownika, okresowa ocena zgodności,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-137**

## 2. Nazwa testu

**Język rozwiązania (aplikacja mobilna)**

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy główny język aplikacji mobilnej został poprawnie określony programowo oraz czy technologie wspomagające mogą prawidłowo rozpoznawać język interfejsu, treści i komunikatów prezentowanych użytkownikowi.

### Co oznacza „język rozwiązania”?

Język rozwiązania to podstawowy język wykorzystywany przez aplikację do prezentowania:

- interfejsu użytkownika,
- treści informacyjnych,
- komunikatów systemowych,
- etykiet formularzy,
- instrukcji,
- komunikatów błędów,
- informacji pomocniczych.

Przykładowo:

- polska aplikacja wykorzystuje język polski,
- angielska aplikacja wykorzystuje język angielski,
- niemiecka aplikacja wykorzystuje język niemiecki.

### Dlaczego język musi być określony programowo?

Technologie wspomagające, takie jak TalkBack lub VoiceOver, wykorzystują informację o języku do:

- wyboru odpowiedniego głosu syntezatora mowy,
- poprawnego odczytu słów,
- prawidłowego wymawiania nazw i komunikatów.

Brak prawidłowego określenia języka może powodować niezrozumiały odczyt treści.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 3.1.1 Język strony

### EN 301 549

- 11.3.1.1 Language of Page

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- menu,
- komunikatów systemowych,
- komunikatów błędów,
- ekranów pomocy,
- ekranów ustawień,
- wszystkich części interfejsu użytkownika.

## 7. Oczekiwany wynik

Główny język aplikacji:

- jest określony programowo,
- jest zgodny z rzeczywistym językiem treści,
- jest prawidłowo rozpoznawany przez technologie wspomagające.

TalkBack, VoiceOver oraz inne technologie wspomagające poprawnie odczytują treść aplikacji.

## 8. Dlaczego to jest ważne

Użytkownicy technologii wspomagających korzystają z informacji o języku do prawidłowego odczytu treści.

Jeżeli język nie został określony lub został określony nieprawidłowo:

- syntezator mowy może błędnie wymawiać słowa,
- komunikaty mogą być niezrozumiałe,
- użytkownik może mieć trudności ze zrozumieniem treści.

Problem szczególnie wpływa na osoby niewidome i słabowidzące korzystające z czytników ekranu.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- użytkowników monitorów brajlowskich,
- osób korzystających z technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Ustalenie języka aplikacji

Ustal główny język interfejsu aplikacji.

### Krok 2. Uruchomienie czytnika ekranu

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS).

### Krok 3. Odczyt treści

Przejdź przez:

- ekran główny,
- menu,
- formularze,
- komunikaty,
- ekrany pomocy.

Sprawdź, czy czytnik ekranu poprawnie wymawia słowa i komunikaty.

### Krok 4. Ocena spójności języka

Sprawdź, czy język określony przez aplikację odpowiada rzeczywistemu językowi treści.

### Krok 5. Ocena komunikatów systemowych

Sprawdź, czy komunikaty błędów, potwierdzeń i instrukcje również są odczytywane przy użyciu właściwego języka.

## 11. Kryteria oceny wyniku

### Spełnione

Główny język aplikacji został prawidłowo określony, a technologie wspomagające poprawnie odczytują treść.

### Częściowo spełnione

Większość treści jest odczytywana prawidłowo, jednak występują pojedyncze problemy związane z rozpoznawaniem języka.

### Niespełnione

Język aplikacji nie został określony lub został określony nieprawidłowo, co powoduje błędny odczyt treści.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja posiada główny język interfejsu i może zostać oceniona.

## 12. Typowe niezgodności

- brak określenia języka aplikacji,
- określenie niewłaściwego języka,
- polska treść odczytywana jako język angielski,
- błędna wymowa komunikatów przez czytnik ekranu,
- niespójne określenie języka w różnych częściach aplikacji,
- nieprawidłowy odczyt nazw i komunikatów.

## 13. Dobre praktyki

- prawidłowe definiowanie języka aplikacji,
- testowanie aplikacji z TalkBack i VoiceOver,
- weryfikowanie poprawności wymowy komunikatów,
- stosowanie spójnych ustawień językowych,
- testowanie wszystkich wersji językowych aplikacji.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę poprawności określenia języka oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Główny język aplikacji nie został prawidłowo określony programowo. Technologie wspomagające nie rozpoznają poprawnie języka treści, co powoduje błędny odczyt komunikatów i może utrudniać korzystanie z aplikacji użytkownikom czytników ekranu.

## 17. Rekomendacje naprawcze

- poprawnie określić główny język aplikacji,
- zweryfikować konfigurację wszystkich wersji językowych,
- przetestować aplikację przy użyciu TalkBack i VoiceOver,
- sprawdzić poprawność odczytu komunikatów systemowych,
- uwzględnić kontrolę języka w procesie testowania jakości.

## 18. Powiązane testy

- testID-021 Język strony
- testID-062 Język części strony
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-103 Komunikaty o stanie (aplikacja mobilna)
- testID-104 Czytelność treści
- testID-085 Nietypowe słowa
- testID-086 Skróty
