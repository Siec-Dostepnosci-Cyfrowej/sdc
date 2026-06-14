---
id: test-obsluga-czytnikiem-ekranu-aplikacja-mobilna
title: Obsługa czytnikiem ekranu (aplikacja mobilna)
sidebar_label: Obsługa czytnikiem ekranu (aplikacja mobilna)
sidebar_position: 95
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być skutecznie używana przy wykorzystaniu wbudowanego czytnika ekranu oraz czy użytkownik otrzymuje informacje niezbędne do orientacji, nawigacji i wykonania zadań.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,czytnik ekranu,TalkBack,VoiceOver,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,czytnik ekranu,TalkBack,VoiceOver,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-095**

## 2. Nazwa testu

**Obsługa czytnikiem ekranu (aplikacja mobilna)**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy aplikacja mobilna może być skutecznie używana przy wykorzystaniu czytnika ekranu oraz czy użytkownik otrzymuje informacje niezbędne do orientacji, nawigacji i wykonania zadań.

### Co oznacza „czytnik ekranu”?

Czytnik ekranu to technologia wspomagająca, która odczytuje użytkownikowi informacje prezentowane na ekranie urządzenia.

Użytkownik nie widzi interfejsu lub korzysta z niego w ograniczonym zakresie, dlatego informacje są przekazywane za pomocą:

- syntezy mowy,
- komunikatów dźwiękowych,
- monitora brajlowskiego.

Najczęściej wykorzystywane czytniki ekranu w urządzeniach mobilnych to:

- **TalkBack*- (Android),
- **VoiceOver*- (iOS).

Prawidłowa współpraca z czytnikiem ekranu wymaga między innymi poprawnego oznaczenia elementów interaktywnych, komunikatów, formularzy oraz zmian zachodzących w interfejsie.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę wielu kryteriów sukcesu, w szczególności:

- 1.1.1 Treści nietekstowe,
- 1.3.1 Informacje i relacje,
- 2.4.3 Kolejność fokusu,
- 2.4.4 Cel łącza,
- 2.4.6 Nagłówki i etykiety,
- 3.3.2 Etykiety lub instrukcje,
- 4.1.2 Nazwa, rola, wartość,
- 4.1.3 Komunikaty o stanie.

### EN 301 549

W szczególności:

- 11.5.2.5 Object Information,
- 11.5.2.6 Row, Column and Headers,
- 11.5.2.7 Values,
- 11.5.2.8 Label Relationships,
- 11.5.2.9 Hierarchical Relationships,
- 11.5.2.13 Modifications of States and Properties,
- 11.5.2.17 Change Notification.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych aplikacji,
- formularzy,
- menu,
- procesów użytkownika,
- komponentów niestandardowych,
- funkcji wymagających interakcji użytkownika.

## 7. Oczekiwany wynik

Użytkownik korzystający wyłącznie z czytnika ekranu może:

- zrozumieć strukturę aplikacji,
- odnaleźć potrzebne funkcje,
- wykonać kluczowe zadania,
- odczytać komunikaty i informacje zwrotne,
- korzystać z aplikacji bez pomocy osoby trzeciej.

## 8. Dlaczego to jest ważne

Dla wielu osób niewidomych czytnik ekranu jest podstawowym sposobem korzystania z aplikacji mobilnych.

Jeżeli aplikacja nie współpracuje prawidłowo z czytnikiem ekranu, użytkownik może:

- nie wiedzieć, jakie elementy znajdują się na ekranie,
- nie rozumieć struktury aplikacji,
- nie odnaleźć potrzebnych funkcji,
- nie otrzymywać informacji o wynikach działań,
- nie być w stanie wykonać zadania.

Brak kompatybilności z czytnikiem ekranu może całkowicie uniemożliwić korzystanie z aplikacji.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących korzystających z czytników ekranu,
- użytkowników monitorów brajlowskich,
- osób korzystających z technologii wspomagających,
- użytkowników obsługi głosowej urządzenia.

## 10. Sposób testowania

### Krok 1. Uruchomienie czytnika ekranu

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS).

### Krok 2. Nawigacja po ekranach

Przemieszczaj się po aplikacji przy użyciu standardowych gestów czytnika ekranu.

Sprawdź, czy użytkownik może:

- odczytać wszystkie elementy,
- zrozumieć strukturę ekranu,
- zlokalizować funkcje.

### Krok 3. Ocena elementów interaktywnych

Dla każdego elementu interaktywnego sprawdź, czy:

- posiada dostępną nazwę,
- czytnik informuje o jego roli,
- odczytywany jest jego stan,
- możliwe jest wykonanie akcji.

### Krok 4. Wykonanie zadań

Przeprowadź kluczowe procesy użytkownika wyłącznie przy użyciu czytnika ekranu.

Przykładowo:

- logowanie,
- wyszukiwanie informacji,
- wysłanie formularza,
- wykonanie podstawowych operacji dostępnych w aplikacji.

### Krok 5. Ocena komunikatów

Sprawdź, czy czytnik odczytuje:

- komunikaty o błędach,
- komunikaty sukcesu,
- zmiany stanu,
- wyniki operacji,
- informacje o przejściu pomiędzy ekranami.

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może skutecznie korzystać z aplikacji wyłącznie przy użyciu czytnika ekranu.

Elementy są poprawnie identyfikowane, odczytywane i obsługiwane.

### Częściowo spełnione

Większość funkcji działa poprawnie, jednak występują problemy utrudniające korzystanie z aplikacji.

### Niespełnione

Występują bariery uniemożliwiające lub znacząco utrudniające korzystanie z aplikacji przy użyciu czytnika ekranu.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna powinna zostać oceniona pod kątem współpracy z czytnikiem ekranu.

## 12. Typowe niezgodności

- elementy bez dostępnej nazwy,
- przyciski odczytywane jako „nieoznaczony element”,
- brak informacji o stanie przełączników,
- błędna kolejność nawigacji,
- pomijanie elementów przez czytnik,
- brak odczytu komunikatów o błędach,
- brak odczytu zmian zawartości ekranu,
- komponenty niestandardowe niewspółpracujące z API dostępności.

## 13. Dobre praktyki

- korzystanie z natywnych komponentów systemowych,
- definiowanie nazw, ról i stanów elementów,
- testowanie aplikacji z TalkBack i VoiceOver,
- zapewnianie logicznej kolejności nawigacji,
- informowanie o zmianach stanu interfejsu,
- przeprowadzanie testów z rzeczywistymi użytkownikami czytników ekranu.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę współpracy aplikacji z czytnikiem ekranu oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nie współpracuje prawidłowo z czytnikiem ekranu. Część elementów nie posiada dostępnych nazw lub nie przekazuje informacji o swojej roli i stanie. Występują również problemy z odczytem komunikatów oraz wykonaniem kluczowych zadań użytkownika. Może to uniemożliwiać korzystanie z aplikacji osobom niewidomym i użytkownikom technologii wspomagających.

## 17. Rekomendacje naprawcze

- zapewnić dostępne nazwy wszystkich elementów interaktywnych,
- poprawnie definiować role i stany komponentów,
- zapewnić odczyt komunikatów o stanie,
- stosować natywne komponenty systemowe lub poprawnie implementować API dostępności,
- testować aplikację z TalkBack i VoiceOver na każdym etapie rozwoju.

## 18. Powiązane testy

- testID-070 Dostępna nazwa elementu interaktywnego
- testID-071 Dostępna nazwa w widocznej etykiecie
- testID-069 Komunikaty o stanie
- testID-026 Kolejność fokusu
- testID-120 Formularz
- testID-080 Gesty wskaźnika
- testID-082 Aktywowanie ruchem
- testID-096 Obsługa klawiaturą (aplikacja mobilna)
- testID-097 Współpraca z technologiami wspomagającymi (aplikacja mobilna)
