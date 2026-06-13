---
id: test-obsluga-czytnikiem-ekranu-aplikacja-mobilna
title: Obsługa czytnikiem ekranu (aplikacja mobilna)
sidebar_label: Obsługa czytnikiem ekranu (aplikacja mobilna)
sidebar_position: 95
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być skutecznie używana przy wykorzystaniu wbudowanego czytnika ekranu oraz czy użytkownik otrzymuje informacje niezbędne do orientacji, nawigacji i wykonania zadań.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-095**

## Nazwa testu

Obsługa czytnikiem ekranu (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy aplikacja mobilna może być skutecznie używana przy wykorzystaniu wbudowanego czytnika ekranu oraz czy użytkownik otrzymuje informacje niezbędne do orientacji, nawigacji i wykonania zadań.

## Powiązane wymagania

### WCAG 2.1 / 2.2

Test wspiera ocenę wielu kryteriów sukcesu, w szczególności:

- 1.1.1 Treści nietekstowe
- 1.3.1 Informacje i relacje
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 3.3.2 Etykiety lub instrukcje
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

### EN 301 549

W szczególności:

- 11.5.2.5 Object information
- 11.5.2.6 Row, column and headers
- 11.5.2.7 Values
- 11.5.2.8 Label relationships
- 11.5.2.9 Hierarchical relationships
- 11.5.2.13 Modifications of states and properties
- 11.5.2.17 Change notification

---

## Dlaczego to jest ważne

Dla wielu osób niewidomych czytnik ekranu jest podstawowym sposobem korzystania z aplikacji mobilnych.

Jeżeli aplikacja nie współpracuje prawidłowo z czytnikiem ekranu, użytkownik może:

- nie wiedzieć, jakie elementy znajdują się na ekranie,
- nie móc odnaleźć funkcji,
- nie rozumieć komunikatów,
- nie być w stanie wykonać zadania.

Prawidłowa współpraca z czytnikiem ekranu jest jednym z najważniejszych wymagań dostępności aplikacji mobilnych.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących,
- użytkowników korzystających z technologii wspomagających,
- osób korzystających z obsługi głosowej urządzenia.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji Android,
- aplikacji iOS,
- wszystkich głównych ekranów aplikacji,
- kluczowych procesów użytkownika,
- formularzy,
- menu,
- komponentów niestandardowych.

---

## Narzędzia

### Android

- TalkBack

### iOS

- VoiceOver

---

## Metoda badania

### Krok 1. Uruchomienie czytnika ekranu

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS)

### Krok 2. Nawigacja po ekranie

Przejdź przez ekran wykorzystując standardowe gesty czytnika ekranu.

Sprawdź, czy użytkownik może:

- odczytać wszystkie elementy,
- zrozumieć strukturę ekranu,
- odnaleźć funkcje.

### Krok 3. Ocena elementów interaktywnych

Dla każdego elementu interaktywnego sprawdź:

- czy posiada dostępną nazwę,
- czy czytnik informuje o jego roli,
- czy odczytywany jest jego stan.

Przykłady:

- przycisk,
- przełącznik,
- pole edycji,
- karta,
- zakładka.

### Krok 4. Ocena wykonywania zadań

Wykonaj kluczowe zadania użytkownika wyłącznie przy użyciu czytnika ekranu.

Przykładowo:

- zalogowanie,
- wyszukanie informacji,
- wysłanie formularza,
- dokonanie operacji biznesowej.

### Krok 5. Ocena komunikatów

Sprawdź, czy czytnik odczytuje:

- komunikaty o błędach,
- komunikaty sukcesu,
- zmiany stanu,
- wyniki operacji.

---

## Kryteria oceny

### Spełnia

Użytkownik może:

- zrozumieć strukturę aplikacji,
- odnaleźć elementy,
- wykonać kluczowe zadania,
- korzystać z funkcji aplikacji wyłącznie przy użyciu czytnika ekranu.

Elementy są prawidłowo identyfikowane i odczytywane.

### Częściowo spełnia

Większość funkcji działa poprawnie, jednak występują problemy utrudniające korzystanie z aplikacji.

### Nie spełnia

Istnieją istotne bariery uniemożliwiające lub znacząco utrudniające korzystanie z aplikacji przy użyciu czytnika ekranu.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna powinna zostać oceniona pod kątem współpracy z czytnikiem ekranu.

---

## Typowe niezgodności

- elementy bez dostępnej nazwy,
- przyciski odczytywane jako „button” lub „nieoznaczony element”,
- brak informacji o stanie przełączników,
- błędna kolejność nawigacji,
- pomijanie elementów przez czytnik,
- brak odczytu komunikatów o błędach,
- nieodczytywanie zmian zawartości ekranu,
- niestandardowe komponenty niewspółpracujące z API dostępności.

---

## Dobre praktyki

- korzystanie z natywnych komponentów systemowych,
- definiowanie nazw, ról i stanów elementów,
- testowanie aplikacji z TalkBack i VoiceOver,
- zapewnianie poprawnej kolejności nawigacji,
- informowanie o zmianach stanu interfejsu.

---

## Klasyfikacja problemów

### Krytyczne

- brak możliwości wykonania kluczowego zadania przy użyciu czytnika ekranu,
- brak dostępu do podstawowych funkcji aplikacji.

### Istotne

- błędnie oznaczone lub nieoznaczone elementy interaktywne,
- brak informacji o stanie elementów.

### Umiarkowane

- problemy z orientacją i nawigacją,
- niepełne komunikaty.

### Drobne

- pojedyncze nieczytelne etykiety lub komunikaty.

---

## Profil stosowania testu

| Profil                                       | Stosowanie              |
| -------------------------------------------- | ----------------------- |
| Okresowa ocena stanu zgodności — minimum     | Tak (aplikacje mobilne) |
| Okresowa ocena stanu zgodności — rozszerzona | Tak                     |
| Ocena przed odbiorem rozwiązania             | Tak                     |
| Audyt zgodności                              | Tak                     |
| ACR-MIN                                      | Tak                     |
| ACR-EXT                                      | Tak                     |
| ACR-AUDIT                                    | Tak                     |

---

## Powiązane testy

- Dostępna nazwa elementu interaktywnego
- Dostępna nazwa w widocznej etykiecie
- Formularz elektroniczny
- Komunikaty o stanie
- Kolejność fokusu
- Gesty wskaźnika
- Aktywowanie ruchem
- Obsługa klawiaturą (aplikacja mobilna)
- Współpraca z technologiami wspomagającymi

---

## Uwagi

Jest to test scenariuszowy, obejmujący wiele wymagań dostępności jednocześnie. Nie zastępuje szczegółowych testów poszczególnych kryteriów sukcesu WCAG, lecz pozwala ocenić rzeczywistą możliwość korzystania z aplikacji przez osoby używające TalkBack lub VoiceOver. W przypadku okresowej oceny stanu zgodności aplikacji mobilnych test ten powinien być traktowany jako jeden z podstawowych testów minimalnego zakresu badania.
