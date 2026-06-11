---
id: test-ruch-miganie-i-blyski
title: Karta testu — Ruch, miganie i błyski
sidebar_label: Ruch, miganie i błyski
sidebar_position: 54
description: Scenariusz testu sprawdzającego, czy użytkownik może zatrzymać, wstrzymać lub ukryć poruszające się treści oraz czy na stronie nie występują niebezpieczne błyski mogące wywołać reakcje chorobowe.
keywords: [ruch, miganie, błyski, karuzele, animacje, automatyczna aktualizacja, WCAG, dostępność cyfrowa]
tags: [test dostępności, multimedia, ruch, błyski, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-054**

---

## 2. Nazwa testu

**Ruch, miganie i błyski**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy:

- użytkownik może zatrzymać, wstrzymać lub ukryć treści poruszające się, migające lub automatycznie aktualizowane,
- na stronie nie występują błyski mogące wywołać napady padaczki światłoczułej,
- użytkownik ma kontrolę nad treściami, które mogą rozpraszać uwagę lub utrudniać korzystanie z serwisu.

### Co oznacza „ruch”?

Do treści ruchomych zalicza się między innymi:

- karuzele i slidery,
- automatycznie przewijane komunikaty,
- animowane banery,
- automatycznie zmieniające się reklamy,
- automatycznie aktualizowane treści,
- ruchome elementy interfejsu.

### Co oznacza „miganie”?

Miganie to okresowa zmiana stanu elementu, która może przyciągać uwagę lub rozpraszać użytkownika.

Przykłady:

- pulsujące komunikaty,
- migające ikony,
- zmieniające się napisy.

### Co oznacza „błyskanie”?

Błyskanie oznacza gwałtowne zmiany jasności lub kontrastu, które mogą wywołać reakcje neurologiczne, w tym napady padaczki światłoczułej.

W odróżnieniu od zwykłego migania błyski mogą być niebezpieczne nawet wtedy, gdy użytkownik ma możliwość ich zatrzymania.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.2.2 Pauza, zatrzymanie, ukrycie (A)**
- **2.3.1 Trzy błyski lub wartości poniżej progu (A)**

### EN 301 549

- **9.2.2.2 Pause, Stop, Hide**
- **9.2.3.1 Three Flashes or Below Threshold**
- **10.2.2.2 Pause, Stop, Hide**
- **10.2.3.1 Three Flashes or Below Threshold**
- **11.2.2.2 Pause, Stop, Hide**
- **11.2.3.1 Three Flashes or Below Threshold**

### Techniki WCAG

#### Dla KS 2.2.2

- G4
- G11
- G186
- SCR33

#### Dla KS 2.3.1

- G19
- G176

---

## 6. Zastosowanie do treści

Test stosuje się do:

- karuzel,
- sliderów,
- animowanych banerów,
- reklam,
- tickerów wiadomości,
- automatycznie aktualizowanych danych,
- liczników,
- notowań giełdowych,
- transmisji wyników,
- elementów migających,
- animacji i efektów wizualnych.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się rozwiązanie, dla którego:

### Ruch i aktualizacje

- treści poruszające się automatycznie dłużej niż 5 sekund można zatrzymać, wstrzymać lub ukryć,
- treści aktualizowane automatycznie można zatrzymać, wstrzymać lub ukryć,
- użytkownik może kontrolować częstotliwość automatycznych aktualizacji, jeżeli są stosowane.

### Błyski

- na stronie nie występują błyski przekraczające dopuszczalne progi określone w WCAG,
- nie występują elementy błyskające częściej niż trzy razy na sekundę.

### Dźwięk

- automatycznie uruchamiany dźwięk trwający dłużej niż 3 sekundy można zatrzymać, wstrzymać lub wyciszyć.

---

## 8. Dlaczego to jest ważne

Treści poruszające się lub migające mogą:

- rozpraszać uwagę,
- utrudniać czytanie,
- utrudniać korzystanie z formularzy i innych elementów strony,
- powodować zmęczenie poznawcze.

Błyski mogą natomiast:

- wywoływać napady padaczki światłoczułej,
- powodować dyskomfort neurologiczny,
- powodować zaburzenia równowagi i orientacji.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z zaburzeniami koncentracji uwagi,
- osób z ADHD,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób słabowidzących,
- osób z zaburzeniami przedsionkowymi,
- osób cierpiących na padaczkę światłoczułą,
- osób starszych.

---

## 10. Sposób testowania

### Krok 1

Obejrzyj stronę przez co najmniej 15–20 sekund.

### Krok 2

Sprawdź, czy występują treści:

- poruszające się,
- przewijające,
- migające,
- zmieniające się automatycznie.

### Krok 3

Dla każdej takiej treści sprawdź, czy istnieje możliwość:

- zatrzymania,
- wstrzymania,
- ukrycia.

### Krok 4

Jeżeli treść jest aktualizowana automatycznie, sprawdź, czy użytkownik może:

- zatrzymać aktualizację,
- kontrolować częstotliwość aktualizacji.

### Krok 5

Sprawdź, czy występują elementy błyskające.

### Krok 6

Jeżeli występują błyski:

- oceń ich częstotliwość,
- oceń, czy mogą stanowić zagrożenie.

W przypadku okresowych ocen zgodności każdy zauważalny efekt błyskania należy traktować jako potencjalną niezgodność wymagającą dalszej analizy.

### Krok 7

Sprawdź, czy automatycznie uruchamia się dźwięk.

### Krok 8

Jeżeli dźwięk trwa dłużej niż 3 sekundy, sprawdź, czy można go:

- zatrzymać,
- wyciszyć,
- wstrzymać.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Można zatrzymać, wstrzymać lub ukryć wszystkie treści poruszające się lub aktualizowane automatycznie, a na stronie nie występują niedozwolone błyski.

### Wynik częściowo pozytywny

Nie stosuje się tej oceny.

### Wynik negatywny

Występuje co najmniej jedna z sytuacji:

- nie można zatrzymać ruchomej treści,
- nie można zatrzymać automatycznej aktualizacji,
- nie można kontrolować automatycznie uruchamianego dźwięku,
- na stronie występują błyski mogące naruszać wymagania WCAG.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- automatycznie obracająca się karuzela bez przycisku zatrzymania,
- migające komunikaty systemowe,
- animowane reklamy bez możliwości wyłączenia,
- automatycznie odświeżane treści bez kontroli użytkownika,
- automatycznie uruchamiane filmy z dźwiękiem,
- błyskające banery,
- elementy wizualne błyskające wielokrotnie w krótkim czasie.

---

## 13. Dobre praktyki

- Domyślne zatrzymywanie automatycznych karuzel.
- Udostępnianie wyraźnego przycisku „Pauza”.
- Ograniczanie animacji do sytuacji uzasadnionych funkcjonalnie.
- Unikanie błyskających efektów wizualnych.
- Rezygnacja z automatycznie odtwarzanych materiałów.
- Stosowanie preferencji użytkownika dotyczących ograniczania ruchu.

---

## 14. Wynik testu

- Zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Na stronie występują automatycznie poruszające się treści, których użytkownik nie może zatrzymać, wstrzymać ani ukryć. Utrudnia to korzystanie z serwisu osobom z zaburzeniami koncentracji oraz innymi niepełnosprawnościami poznawczymi.

lub

> Na stronie występują elementy błyskające mogące stanowić zagrożenie dla osób cierpiących na padaczkę światłoczułą.

---

## 17. Rekomendacje naprawcze

- Dodać mechanizmy zatrzymywania i wstrzymywania ruchomych treści.
- Umożliwić kontrolę automatycznych aktualizacji.
- Usunąć błyskające elementy lub ograniczyć ich częstotliwość zgodnie z WCAG.
- Wyłączyć automatyczne odtwarzanie dźwięku.
- Uwzględnić test ruchu i błysków w procedurach odbioru treści oraz komponentów interfejsu.

---

## 18. Powiązane testy

- Dostęp z klawiatury
- Zmiana po uzyskaniu fokusu
- Zmiana po wprowadzeniu danych
- Odtwarzacz multimedialny
- Sterowanie multimediami z klawiatury
- Preferencje użytkownika dotyczące ruchu (profil rozszerzony)
---