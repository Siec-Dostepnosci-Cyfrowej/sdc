---
id: test-etykiety-elementow-aplikacja-mobilna
title: Etykiety elementów (aplikacja mobilna)
sidebar_label: Etykiety elementów (aplikacja mobilna)
sidebar_position: 99
description: Scenariusz testu sprawdzającego, czy elementy interaktywne aplikacji mobilnej posiadają jednoznaczne, zrozumiałe i programowo określone etykiety umożliwiające ich identyfikację przez użytkowników oraz technologie wspomagające.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,etykiety,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,etykiety,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-099**

## 2. Nazwa testu

**Etykiety elementów interaktywnych (aplikacja mobilna)**

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy elementy interaktywne aplikacji mobilnej posiadają jednoznaczne, zrozumiałe i programowo określone etykiety umożliwiające ich identyfikację przez użytkowników oraz technologie wspomagające.

### Co oznacza „etykieta elementu”?

Etykieta elementu to nazwa lub opis pozwalający użytkownikowi zrozumieć:

- czym jest dany element,
- do czego służy,
- jakie działanie zostanie wykonane po jego aktywowaniu.

Etykieta może być:

- widocznym tekstem,
- nazwą dostępną odczytywaną przez czytnik ekranu,
- połączeniem obu tych form.

Przykładowo:

- przycisk „Wyślij” posiada etykietę „Wyślij”,
- ikona kosza może posiadać etykietę „Usuń”,
- pole formularza może posiadać etykietę „Adres e-mail”.

### Co oznacza „programowo określona etykieta”?

Programowo określona etykieta to etykieta dostępna dla technologii wspomagających, takich jak TalkBack lub VoiceOver.

Dzięki niej użytkownik niewidomy może zrozumieć funkcję elementu nawet wtedy, gdy element nie zawiera widocznego tekstu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

W szczególności:

- 1.3.1 Informacje i relacje,
- 2.4.4 Cel łącza (w kontekście),
- 2.4.6 Nagłówki i etykiety,
- 2.5.3 Etykieta w nazwie,
- 3.3.2 Etykiety lub instrukcje,
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

W szczególności:

- 11.5.2.5 Object Information,
- 11.5.2.8 Label Relationships,
- 11.5.2.10 Text,
- 11.5.2.12 Name, Role, Value.

## 6. Zastosowanie do treści

Test stosuje się do:

- przycisków,
- ikon pełniących funkcję przycisku,
- pól formularzy,
- przełączników,
- przycisków radiowych,
- pól wyboru,
- kart interaktywnych,
- zakładek,
- elementów menu,
- komponentów niestandardowych.

## 7. Oczekiwany wynik

Każdy element interaktywny:

- posiada etykietę,
- posiada nazwę dostępną dla technologii wspomagających,
- jest jednoznacznie identyfikowany przez użytkownika,
- pozwala zrozumieć swoje przeznaczenie bez konieczności zgadywania.

## 8. Dlaczego to jest ważne

Użytkownik powinien wiedzieć:

- czym jest dany element,
- do czego służy,
- jaki jest jego aktualny stan.

Brak prawidłowych etykiet może powodować, że użytkownik:

- nie rozumie funkcji elementu,
- nie może skutecznie korzystać z czytnika ekranu,
- popełnia błędy podczas wykonywania zadań,
- nie potrafi ukończyć procesu.

Problem szczególnie często występuje w przypadku ikon, niestandardowych komponentów i formularzy.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników czytników ekranu,
- osób korzystających ze sterowania głosowego,
- osób z niepełnosprawnościami poznawczymi,
- osób uczących się korzystania z aplikacji.

## 10. Sposób testowania

### Krok 1. Identyfikacja elementów

Zidentyfikuj wszystkie elementy interaktywne dostępne na ekranie.

### Krok 2. Test z czytnikiem ekranu

Uruchom:

- TalkBack (Android)

lub

- VoiceOver (iOS).

Przejdź kolejno przez wszystkie elementy interaktywne.

### Krok 3. Ocena etykiet

Dla każdego elementu sprawdź:

- czy posiada etykietę,
- czy etykieta jest zrozumiała,
- czy etykieta opisuje funkcję elementu,
- czy etykieta jest jednoznaczna.

### Krok 4. Ocena elementów ikonowych

Sprawdź, czy elementy reprezentowane wyłącznie przez ikonę posiadają nazwę dostępną.

### Krok 5. Ocena formularzy

Sprawdź, czy:

- każde pole posiada etykietę,
- etykieta jest powiązana z polem,
- użytkownik rozumie oczekiwane działanie.

### Krok 6. Ocena praktyczna

Sprawdź, czy użytkownik korzystający z czytnika ekranu może zrozumieć funkcję każdego elementu bez dodatkowego kontekstu wizualnego.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie oceniane elementy posiadają jednoznaczne, zrozumiałe i programowo określone etykiety.

### Częściowo spełnione

Występują pojedyncze elementy z brakującymi lub niejednoznacznymi etykietami.

### Niespełnione

Znaczna liczba elementów nie posiada etykiet lub etykiety nie pozwalają zrozumieć funkcji elementu.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna zawiera elementy wymagające identyfikacji.

## 12. Typowe niezgodności

- przyciski odczytywane jako „przycisk” bez nazwy,
- elementy odczytywane jako „nieoznaczone”,
- ikony bez nazwy dostępnej,
- pola formularzy bez etykiet,
- techniczne lub niezrozumiałe nazwy elementów,
- wiele elementów posiadających identyczną nazwę mimo różnych funkcji,
- etykiety nieopisujące rzeczywistego działania elementu.

## 13. Dobre praktyki

- stosowanie nazw opisujących funkcję elementu,
- nadawanie nazw wszystkim przyciskom ikonowym,
- korzystanie z natywnych mechanizmów etykietowania systemu,
- testowanie aplikacji przy użyciu TalkBack i VoiceOver,
- projektowanie etykiet z perspektywy użytkownika,
- stosowanie spójnego nazewnictwa w całej aplikacji.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie elementów z nieprawidłowymi etykietami oraz ocenę wpływu problemów na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W aplikacji występują elementy interaktywne pozbawione etykiet lub posiadające etykiety niepozwalające jednoznacznie określić ich funkcji. Problem utrudnia korzystanie z aplikacji użytkownikom czytników ekranu oraz może prowadzić do błędów podczas wykonywania zadań.

## 17. Rekomendacje naprawcze

- zapewnić etykiety wszystkim elementom interaktywnym,
- nadać nazwy dostępne elementom ikonowym,
- stosować nazwy opisujące funkcję elementu,
- zweryfikować poprawność etykiet formularzy,
- testować aplikację przy użyciu TalkBack i VoiceOver,
- przeprowadzić przegląd wszystkich komponentów niestandardowych.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-070 Dostępna nazwa elementu interaktywnego
- testID-071 Dostępna nazwa w widocznej etykiecie
- testID-039 Widoczne etykiety lub instrukcje
- testID-120 Formularz
- testID-069 Komunikaty o stanie
