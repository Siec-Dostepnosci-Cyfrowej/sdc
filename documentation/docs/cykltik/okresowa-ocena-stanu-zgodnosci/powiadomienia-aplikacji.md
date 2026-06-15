---
id: powiadomienia-aplikacji
title: Powiadomienia aplikacji
sidebar_label: Powiadomienia aplikacji
sidebar_position: 142
description: Test sprawdza, czy powiadomienia generowane przez aplikację mobilną są dostępne, zrozumiałe, możliwe do obsłużenia oraz zgodne z ustawieniami użytkownika i systemu operacyjnego.
keywords: [aplikacja mobilna,powiadomienia,alerty,komunikaty,komunikaty o stanie,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
tags: [aplikacja mobilna,powiadomienia,alerty,komunikaty,komunikaty o stanie,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-142**

## 2. Nazwa testu

**Powiadomienia aplikacji**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy powiadomienia generowane przez aplikację mobilną są dostępne, zrozumiałe, możliwe do obsłużenia oraz zgodne z ustawieniami użytkownika i systemu operacyjnego.

### Co oznacza „powiadomienie aplikacji”?

Powiadomienie aplikacji to komunikat wysyłany przez aplikację poza jej bieżącym ekranem lub w trakcie działania aplikacji.

Może informować użytkownika na przykład o:

- nowej wiadomości,
- zmianie statusu sprawy,
- konieczności wykonania działania,
- przypomnieniu o terminie,
- błędzie lub przerwaniu operacji,
- zakończeniu procesu.

Powiadomienia mogą pojawiać się jako:

- powiadomienia systemowe,
- komunikaty typu push,
- alerty,
- banery,
- komunikaty w aplikacji,
- oznaczenia liczby nowych elementów.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę w szczególności:

- 1.3.1 Informacje i relacje,
- 1.4.1 Użycie koloru,
- 2.2.2 Wstrzymywanie, zatrzymywanie, ukrywanie,
- 2.4.3 Kolejność fokusu,
- 2.4.6 Nagłówki i etykiety,
- 3.2.2 Po wprowadzeniu danych,
- 3.3.2 Etykiety lub instrukcje,
- 4.1.2 Nazwa, rola, wartość,
- 4.1.3 Komunikaty o stanie.

### EN 301 549

W szczególności wymagania dotyczące:

- komunikatów o stanie,
- powiadomień o zmianach,
- identyfikacji elementów interaktywnych,
- współpracy z technologiami wspomagającymi,
- ustawień i preferencji użytkownika.

## 6. Zastosowanie do treści

Test stosuje się do:

- powiadomień systemowych aplikacji,
- komunikatów typu push,
- alertów,
- banerów,
- powiadomień w aplikacji,
- komunikatów o zmianie statusu,
- przypomnień,
- oznaczeń liczby nowych wiadomości lub zdarzeń,
- komunikatów wymagających reakcji użytkownika.

## 7. Oczekiwany wynik

Użytkownik może:

- odebrać powiadomienie,
- zrozumieć jego treść,
- odczytać je przy użyciu technologii wspomagających,
- wykonać dostępne działania,
- zarządzać ustawieniami powiadomień,
- nie tracić orientacji w aplikacji po pojawieniu się powiadomienia.

## 8. Dlaczego to jest ważne

Powiadomienia często informują użytkownika o sprawach wymagających uwagi lub działania.

Jeżeli powiadomienie jest niedostępne, użytkownik może:

- nie dowiedzieć się o ważnej zmianie,
- przegapić termin,
- nie zareagować na błąd,
- nie ukończyć procesu,
- utracić kontrolę nad przebiegiem sprawy.

Problem szczególnie dotyczy:

- użytkowników czytników ekranu,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z indywidualnych ustawień powiadomień.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- osób głuchych i słabosłyszących,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- użytkowników korzystających z ustawień dostępności systemu.

## 10. Sposób testowania

### Krok 1. Identyfikacja powiadomień

Zidentyfikuj sytuacje, w których aplikacja generuje powiadomienia.

Uwzględnij:

- powiadomienia systemowe,
- powiadomienia wewnątrz aplikacji,
- komunikaty wymagające reakcji użytkownika,
- oznaczenia nowych elementów.

### Krok 2. Wywołanie powiadomienia

Wykonaj działanie powodujące pojawienie się powiadomienia.

Przykładowo:

- wysłanie formularza,
- zmianę statusu sprawy,
- otrzymanie wiadomości,
- ustawienie przypomnienia,
- wystąpienie błędu.

### Krok 3. Ocena treści powiadomienia

Sprawdź, czy powiadomienie:

- jest zrozumiałe,
- wskazuje, czego dotyczy,
- informuje o wymaganym działaniu,
- nie opiera się wyłącznie na kolorze, ikonie lub dźwięku.

### Krok 4. Ocena z technologiami wspomagającymi

Włącz TalkBack lub VoiceOver.

Sprawdź, czy:

- powiadomienie jest odczytywane,
- użytkownik rozumie jego znaczenie,
- dostępne działania są poprawnie nazwane,
- użytkownik może przejść do właściwego miejsca w aplikacji.

### Krok 5. Ocena działania po aktywowaniu powiadomienia

Sprawdź, czy po aktywowaniu powiadomienia użytkownik trafia do odpowiedniego ekranu lub kontekstu.

### Krok 6. Ocena ustawień powiadomień

Sprawdź, czy użytkownik może:

- włączyć lub wyłączyć powiadomienia,
- zmienić ich zakres,
- korzystać z systemowych ustawień powiadomień,
- zachować kontrolę nad sposobem otrzymywania powiadomień.

## 11. Kryteria oceny wyniku

### Spełnione

Powiadomienia są dostępne, zrozumiałe, obsługiwalne i respektują ustawienia użytkownika oraz systemu.

### Częściowo spełnione

Większość powiadomień działa poprawnie, jednak występują pojedyncze problemy z treścią, odczytem, działaniami lub ustawieniami.

### Niespełnione

Powiadomienia nie są dostępne dla technologii wspomagających, są niezrozumiałe lub nie pozwalają użytkownikowi podjąć właściwego działania.

### Nie dotyczy

Aplikacja nie generuje powiadomień.

## 12. Typowe niezgodności

- powiadomienie widoczne wyłącznie wizualnie,
- brak odczytu powiadomienia przez TalkBack,
- brak odczytu powiadomienia przez VoiceOver,
- powiadomienie oparte wyłącznie na dźwięku,
- powiadomienie oparte wyłącznie na kolorze lub ikonie,
- niejednoznaczna treść powiadomienia,
- brak informacji o wymaganym działaniu,
- przyciski w powiadomieniu bez dostępnych nazw,
- aktywowanie powiadomienia prowadzi do niewłaściwego ekranu,
- brak możliwości zarządzania powiadomieniami.

## 13. Dobre praktyki

- stosowanie krótkich i jednoznacznych treści powiadomień,
- przekazywanie informacji tekstowo, a nie wyłącznie dźwiękiem, kolorem lub ikoną,
- zapewnianie poprawnych nazw działań w powiadomieniu,
- respektowanie ustawień systemowych powiadomień,
- umożliwienie zarządzania powiadomieniami w aplikacji,
- testowanie powiadomień z TalkBack i VoiceOver,
- kierowanie użytkownika do właściwego miejsca po aktywowaniu powiadomienia.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, typów sprawdzonych powiadomień oraz problemów wpływających na ich dostępność i zrozumiałość.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Powiadomienia aplikacji nie są w pełni dostępne dla użytkowników technologii wspomagających. Część powiadomień nie jest odczytywana przez czytnik ekranu, zawiera niejednoznaczną treść lub nie prowadzi użytkownika do właściwego miejsca w aplikacji. Może to utrudniać odbiór ważnych informacji i wykonanie wymaganych działań.

## 17. Rekomendacje naprawcze

- zapewnić dostępność powiadomień dla TalkBack i VoiceOver,
- poprawić treść powiadomień tak, aby jasno wskazywały znaczenie i wymagane działanie,
- nie przekazywać informacji wyłącznie dźwiękiem, kolorem lub ikoną,
- poprawić dostępne nazwy działań w powiadomieniach,
- zapewnić przejście do właściwego ekranu po aktywowaniu powiadomienia,
- umożliwić użytkownikowi zarządzanie powiadomieniami,
- testować powiadomienia przy aktywnych ustawieniach dostępności systemu.

## 18. Powiązane testy

- testID-103 Komunikaty o stanie (aplikacja mobilna)
- testID-141 Ustawienia aplikacji
- testID-102 Ustawienia dostępności systemu (aplikacja mobilna)
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-075 Użycie koloru
- testID-078 Kontrola odtwarzania dźwięku
- testID-143 Nazwa ekranu aplikacji
