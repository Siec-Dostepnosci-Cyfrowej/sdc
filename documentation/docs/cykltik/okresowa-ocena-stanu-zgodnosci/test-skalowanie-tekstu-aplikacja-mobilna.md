---
id: test-skalowanie-tekstu-aplikacja-mobilna
title: Skalowanie tekstu (aplikacja mobilna)
sidebar_label: Skalowanie tekstu (aplikacja mobilna)
sidebar_position: 101
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna prawidłowo reaguje na zmianę rozmiaru tekstu ustawioną przez użytkownika w systemie operacyjnym oraz czy treść i funkcjonalność pozostają dostępne przy znacznym powiększeniu tekstu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,skalowanie tekstu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,skalowanie tekstu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## Identyfikator testu

**testID-101**

## Nazwa testu

Skalowanie tekstu (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy aplikacja mobilna prawidłowo reaguje na zmianę rozmiaru tekstu ustawioną przez użytkownika w systemie operacyjnym oraz czy treść i funkcjonalność pozostają dostępne przy znacznym powiększeniu tekstu.

## Powiązane wymagania

### WCAG 2.1 / 2.2

W szczególności:

- 1.4.4 Zmiana rozmiaru tekstu
- 1.4.10 Dopasowanie do szerokości ekranu (w zakresie mającym zastosowanie do aplikacji mobilnych)
- 1.4.12 Odstępy w tekście
- 1.3.1 Informacje i relacje

### EN 301 549

W szczególności:

- 11.1.4.4 Resize Text
- 11.1.4.10 Reflow
- wymagania dotyczące współpracy z ustawieniami dostępności systemu operacyjnego.

---

## Dlaczego to jest ważne

Wielu użytkowników korzysta z powiększonego tekstu ustawionego w systemie operacyjnym.

Dotyczy to szczególnie:

- osób słabowidzących,
- osób starszych,
- osób z dysleksją,
- użytkowników korzystających z urządzeń mobilnych w trudnych warunkach oświetleniowych.

Jeżeli aplikacja nie reaguje prawidłowo na zmianę rozmiaru tekstu, może dochodzić do sytuacji, w których:

- tekst zostaje obcięty,
- nakłada się na inne elementy,
- znika część informacji,
- przyciski i pola formularzy stają się niedostępne.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób słabowidzących,
- osób starszych,
- osób z trudnościami w czytaniu,
- użytkowników korzystających z ustawień dostępności systemu.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- menu,
- list wyników,
- ekranów ustawień,
- komunikatów,
- okien dialogowych,
- procesów użytkownika.

---

## Narzędzia

### Android

- ustawienia rozmiaru czcionki,
- ustawienia wielkości wyświetlania (Display Size).

### iOS

- Dynamic Type,
- Larger Accessibility Sizes.

---

## Metoda badania

### Krok 1. Ustawienie powiększonego tekstu

Zwiększ rozmiar tekstu w ustawieniach systemu operacyjnego.

Zaleca się zastosowanie:

- największego standardowego rozmiaru tekstu,
- a następnie największego rozmiaru dostępności (jeżeli system taki oferuje).

### Krok 2. Ponowne uruchomienie aplikacji

Uruchom aplikację lub przejdź ponownie przez oceniane ekrany.

### Krok 3. Ocena prezentacji treści

Sprawdź, czy:

- tekst pozostaje czytelny,
- tekst nie jest obcinany,
- tekst nie nakłada się na inne elementy,
- nie dochodzi do utraty informacji.

### Krok 4. Ocena funkcjonalności

Sprawdź, czy nadal można:

- korzystać z menu,
- wypełniać formularze,
- odczytywać komunikaty,
- wykonywać kluczowe procesy.

### Krok 5. Ocena komponentów

Sprawdź działanie:

- przycisków,
- kart,
- zakładek,
- komunikatów,
- okien dialogowych,
- elementów niestandardowych.

---

## Pytania kontrolne

1. Czy aplikacja reaguje na zmianę rozmiaru tekstu ustawioną przez użytkownika?
2. Czy tekst pozostaje czytelny?
3. Czy nie dochodzi do obcinania tekstu?
4. Czy elementy nie nakładają się na siebie?
5. Czy wszystkie funkcje pozostają dostępne?
6. Czy użytkownik może wykonać kluczowe zadania przy największym rozmiarze tekstu?

---

## Kryteria oceny

### Spełnia

Aplikacja poprawnie reaguje na zwiększenie rozmiaru tekstu.

Treść pozostaje czytelna, a funkcjonalność dostępna.

### Częściowo spełnia

Występują lokalne problemy związane ze skalowaniem tekstu, jednak nie uniemożliwiają one realizacji kluczowych zadań.

### Nie spełnia

Powiększenie tekstu powoduje utratę treści, funkcjonalności lub uniemożliwia wykonanie zadań.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna wykorzystująca tekst może zostać oceniona.

---

## Typowe niezgodności

- obcinanie tekstu w przyciskach,
- ucinanie etykiet formularzy,
- nakładanie się elementów,
- niewidoczne komunikaty,
- utrata części treści,
- przyciski wychodzące poza ekran,
- komponenty niereagujące na ustawienia systemowe.

---

## Dobre praktyki

- korzystanie z Dynamic Type (iOS),
- korzystanie z mechanizmów skalowania Androida,
- projektowanie elastycznych układów,
- testowanie przy maksymalnych ustawieniach tekstu,
- unikanie sztywno definiowanych wysokości elementów.

---

## Klasyfikacja problemów

### Krytyczne

- użytkownik nie może wykonać kluczowego zadania po zwiększeniu rozmiaru tekstu,
- istotne informacje stają się niedostępne.

### Istotne

- formularze lub menu stają się trudne albo niemożliwe do użycia.

### Umiarkowane

- lokalne problemy z układem lub czytelnością.

### Drobne

- pojedyncze przypadki nieoptymalnego skalowania.

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

- Orientacja ekranu (aplikacja mobilna)
- Obsługa czytnikiem ekranu (aplikacja mobilna)
- Etykiety elementów (aplikacja mobilna)
- Zmiana rozmiaru tekstu
- Dopasowanie do szerokości ekranu
- Odstępy w tekście
- Rozmiar celu (minimum)
- Rozmiar celu dotykowego (ulepszone)

---

## Uwagi

Test ten jest jednym z najważniejszych testów dostępności aplikacji mobilnych. W przeciwieństwie do stron internetowych problem zwykle nie polega na możliwości powiększenia treści przez użytkownika, lecz na tym, czy aplikacja respektuje systemowe ustawienia rozmiaru tekstu. Szczególną uwagę należy zwracać na formularze, komunikaty, przyciski i niestandardowe komponenty interfejsu, ponieważ właśnie tam najczęściej występują błędy związane ze skalowaniem. W praktyce monitoringu aplikacji mobilnych test ten powinien należeć do podstawowego zestawu badań.
