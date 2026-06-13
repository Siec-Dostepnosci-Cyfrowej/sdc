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



## Identyfikator testu

**testID-099**

## Nazwa testu

Etykiety elementów (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy elementy interaktywne aplikacji mobilnej posiadają jednoznaczne, zrozumiałe i programowo określone etykiety umożliwiające ich identyfikację przez użytkowników oraz technologie wspomagające.

## Powiązane wymagania

### WCAG 2.1 / 2.2

W szczególności:

- 1.3.1 Informacje i relacje
- 2.4.4 Cel łącza (w kontekście)
- 2.4.6 Nagłówki i etykiety
- 2.5.3 Etykieta w nazwie
- 3.3.2 Etykiety lub instrukcje
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

W szczególności:

- 11.5.2.5 Object Information
- 11.5.2.8 Label Relationships
- 11.5.2.10 Text
- 11.5.2.12 Name, Role, Value

---

## Dlaczego to jest ważne

Użytkownik powinien wiedzieć:

- czym jest dany element,
- do czego służy,
- jaki jest jego aktualny stan.

W aplikacjach mobilnych często występują:

- przyciski przedstawione wyłącznie ikoną,
- pola formularzy bez opisów,
- niestandardowe komponenty,
- elementy sterujące generowane dynamicznie.

Brak prawidłowych etykiet może powodować, że użytkownik:

- nie rozumie funkcji elementu,
- nie może skutecznie korzystać z czytnika ekranu,
- popełnia błędy podczas wykonywania zadań.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących,
- użytkowników czytników ekranu,
- osób korzystających ze sterowania głosowego,
- osób z trudnościami poznawczymi.

---

## Zakres stosowania

Test należy wykonywać dla:

- przycisków,
- ikon pełniących funkcję przycisku,
- pól formularzy,
- przełączników,
- przycisków radiowych,
- pól wyboru,
- kart,
- zakładek,
- elementów menu,
- niestandardowych komponentów interaktywnych.

---

## Narzędzia

### Android

- TalkBack
- Accessibility Scanner (opcjonalnie)

### iOS

- VoiceOver
- Accessibility Inspector (opcjonalnie)

---

## Metoda badania

### Krok 1. Identyfikacja elementów

Zidentyfikuj wszystkie elementy interaktywne dostępne na ekranie.

### Krok 2. Odczyt przy użyciu czytnika ekranu

Uruchom:

- TalkBack

lub

- VoiceOver.

Przejdź kolejno przez wszystkie elementy interaktywne.

### Krok 3. Ocena etykiety

Dla każdego elementu sprawdź:

- czy posiada etykietę,
- czy etykieta jest zrozumiała,
- czy etykieta opisuje funkcję elementu,
- czy etykieta jest wystarczająco jednoznaczna.

### Krok 4. Ocena elementów ikonowych

Sprawdź, czy elementy reprezentowane wyłącznie przez ikonę posiadają prawidłową nazwę dostępną.

### Krok 5. Ocena formularzy

Sprawdź, czy:

- każde pole posiada etykietę,
- etykieta jest powiązana z polem,
- użytkownik rozumie oczekiwane działanie.

---

## Pytania kontrolne

1. Czy każdy element interaktywny posiada etykietę?
2. Czy etykieta pozwala zrozumieć funkcję elementu?
3. Czy etykieta jest jednoznaczna?
4. Czy elementy ikonowe posiadają dostępną nazwę?
5. Czy pola formularzy posiadają prawidłowe etykiety?
6. Czy użytkownik korzystający z czytnika ekranu rozumie znaczenie elementu bez dodatkowego kontekstu?

---

## Kryteria oceny

### Spełnia

Wszystkie oceniane elementy posiadają jednoznaczne, zrozumiałe i programowo określone etykiety.

### Częściowo spełnia

Występują pojedyncze elementy z brakującymi lub niejednoznacznymi etykietami.

### Nie spełnia

Znaczna liczba elementów nie posiada etykiet lub etykiety nie pozwalają zrozumieć funkcji elementu.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna zawiera elementy wymagające identyfikacji.

---

## Typowe niezgodności

- przyciski odczytywane jako „przycisk” bez nazwy,
- elementy odczytywane jako „nieoznaczone”,
- ikony bez dostępnej nazwy,
- pola formularzy bez etykiet,
- etykiety techniczne niezrozumiałe dla użytkownika,
- wiele elementów posiadających identyczną nazwę mimo różnych funkcji,
- etykiety nieopisujące rzeczywistego działania elementu.

---

## Dobre praktyki

- stosowanie jednoznacznych nazw opisujących funkcję,
- nadawanie nazw wszystkim przyciskom ikonowym,
- korzystanie z natywnych mechanizmów etykietowania systemu,
- testowanie aplikacji przy użyciu TalkBack i VoiceOver,
- projektowanie etykiet z perspektywy użytkownika, a nie programisty.

---

## Klasyfikacja problemów

### Krytyczne

- brak możliwości zidentyfikowania funkcji kluczowych elementów procesu.

### Istotne

- brak etykiet formularzy,
- brak nazw istotnych przycisków lub przełączników.

### Umiarkowane

- niejednoznaczne lub mylące etykiety.

### Drobne

- pojedyncze elementy o nazwach wymagających dopracowania.

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

- Obsługa czytnikiem ekranu (aplikacja mobilna)
- Kolejność fokusu (aplikacja mobilna)
- Dostępna nazwa elementu interaktywnego
- Dostępna nazwa w widocznej etykiecie
- Widoczne etykiety lub instrukcje
- Formularz elektroniczny
- Komunikaty o stanie

---

## Uwagi

Test ten jest mobilnym odpowiednikiem testów „Dostępna nazwa elementu interaktywnego”, „Dostępna nazwa w widocznej etykiecie” oraz częściowo „Widoczne etykiety lub instrukcje”. W praktyce aplikacji mobilnych szczególnie często wykrywa problemy związane z ikonami pozbawionymi nazw dostępnych, niestandardowymi komponentami oraz formularzami projektowanymi wyłącznie z myślą o użytkownikach widzących. W scenariuszu minimum dla aplikacji mobilnych test ten powinien być traktowany jako jeden z podstawowych testów dostępności.
