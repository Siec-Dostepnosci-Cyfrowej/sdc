---
id: test-dopasowanie-do-szerokosci-ekranu
title: Karta testu — Dopasowanie do szerokości ekranu
sidebar_label: Dopasowanie do szerokości ekranu
sidebar_position: 38
description: Scenariusz testu sprawdzającego, czy treść strony dostosowuje się do szerokości ekranu bez utraty informacji i funkcjonalności oraz bez konieczności przewijania w poziomie.
keywords: [reflow, dopasowanie do szerokości ekranu, responsywność, przewijanie poziome, WCAG, dostępność cyfrowa]
tags: [test dostępności, responsywność, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-038**

---

## 2. Nazwa testu

**Dopasowanie do szerokości ekranu**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy treść strony dostosowuje się do dostępnej szerokości ekranu bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania strony w poziomie.

### Co oznacza „dopasowanie do szerokości ekranu”?

Dopasowanie do szerokości ekranu (ang. *reflow*) oznacza, że po zmniejszeniu szerokości obszaru wyświetlania treść automatycznie reorganizuje się w taki sposób, aby nadal była dostępna i czytelna.

Użytkownik powinien móc korzystać ze strony:

- na małym ekranie,
- przy dużym powiększeniu,
- w wąskim oknie przeglądarki,

bez konieczności ciągłego przewijania w poziomie.

### Czego nie dotyczy ten test?

Wymaganie nie dotyczy treści, które ze swojej natury wymagają prezentacji dwuwymiarowej, np.:

- dużych tabel danych,
- map,
- wykresów,
- obrazów technicznych,
- partytur muzycznych.

Dla takich treści przewijanie poziome może być uzasadnione.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.4.10 Dopasowanie do szerokości ekranu (AA)**

### EN 301 549

- **9.1.4.10 Reflow**
- **10.1.4.10 Reflow**
- **11.1.4.10 Reflow**

### Techniki WCAG

- C32
- C31
- G206

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- artykułów,
- aktualności,
- formularzy,
- wyszukiwarek,
- paneli użytkownika,
- aplikacji internetowych,
- dokumentów HTML.

W szczególności do:

- menu,
- formularzy,
- kart usług,
- komunikatów,
- treści redakcyjnych.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której przy szerokości odpowiadającej 320 pikselom CSS:

- nie dochodzi do utraty informacji,
- nie dochodzi do utraty funkcjonalności,
- treść pozostaje dostępna,
- przewijanie w poziomie nie jest wymagane do odczytania treści ani wykonania typowych działań użytkownika,

z wyjątkiem treści, które wymagają układu dwuwymiarowego.

---

## 8. Dlaczego to jest ważne

Wiele osób korzysta z:

- telefonów komórkowych,
- tabletów,
- dużego powiększenia ekranu,
- małych okien przeglądarki.

Jeżeli strona nie dostosowuje się do dostępnej szerokości:

- część treści może zostać ukryta,
- korzystanie z formularzy może być utrudnione,
- użytkownik musi stale przewijać stronę w poziomie,
- wzrasta ryzyko pominięcia ważnych informacji.

Dopasowanie treści do szerokości ekranu poprawia dostępność i wygodę korzystania z serwisu.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób słabowidzących korzystających z dużego powiększenia,
- osób korzystających z powiększalników ekranu,
- osób korzystających z urządzeń mobilnych,
- osób starszych,
- osób z niepełnosprawnościami poznawczymi,
- wszystkich użytkowników korzystających z małych ekranów.

---

## 10. Sposób testowania

### Krok 1

Otwórz badaną stronę.

### Krok 2

Ustaw szerokość obszaru wyświetlania odpowiadającą 320 pikselom CSS.

Można to zrobić na przykład poprzez:

- użycie narzędzi deweloperskich przeglądarki,
- tryb urządzenia mobilnego,
- zmniejszenie szerokości okna przeglądarki,
- powiększenie strony do około 400% przy standardowej szerokości ekranu.

### Krok 3

Sprawdź, czy treść pozostaje dostępna.

### Krok 4

Zweryfikuj, czy nie występuje poziomy pasek przewijania dla całej strony.

### Krok 5

Sprawdź szczególnie:

- menu,
- formularze,
- komunikaty,
- wyszukiwarki,
- tabele układu,
- komponenty interaktywne.

### Krok 6

Sprawdź, czy użytkownik może:

- przeczytać treść,
- wypełnić formularz,
- skorzystać z menu,
- aktywować przyciski,
- przejść do kolejnych podstron.

### Krok 7

Udokumentuj wszystkie przypadki utraty treści lub funkcjonalności.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Treść dostosowuje się do szerokości ekranu bez utraty informacji i funkcjonalności.

### Wynik częściowo pozytywny

Występują pojedyncze problemy z układem strony, które nie uniemożliwiają realizacji głównych zadań użytkownika.

### Wynik negatywny

Zmniejszenie szerokości ekranu powoduje:

- utratę treści,
- utratę funkcjonalności,
- konieczność przewijania w poziomie dla podstawowych treści,
- brak możliwości wykonania istotnych działań.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- poziome przewijanie całej strony,
- obcinanie treści poza ekranem,
- ukrywanie części formularza,
- niedostępne przyciski,
- elementy wychodzące poza obszar ekranu,
- sztywne szerokości kontenerów,
- okna dialogowe większe od ekranu,
- menu niedostosowujące się do małej szerokości.

---

## 13. Dobre praktyki

- Stosowanie responsywnych układów strony.
- Korzystanie z elastycznych szerokości elementów.
- Testowanie przy szerokości 320 pikseli CSS.
- Projektowanie formularzy w układzie jednokolumnowym dla małych ekranów.
- Regularne testowanie nowych komponentów na urządzeniach mobilnych.

---

## 14. Wynik testu

- Zgodne
- Częściowo zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Po zmniejszeniu szerokości obszaru wyświetlania do 320 pikseli CSS część treści wychodzi poza ekran i wymaga przewijania w poziomie. Użytkownik nie może wygodnie odczytać treści ani korzystać z wszystkich funkcji strony.

lub

> Formularz nie dostosowuje się do szerokości ekranu. Część pól oraz przycisków znajduje się poza widocznym obszarem, co utrudnia realizację usługi.

---

## 17. Rekomendacje naprawcze

- Usunąć sztywne szerokości elementów.
- Zastosować responsywny układ strony.
- Zapewnić poprawne zawijanie treści.
- Dostosować formularze do małych szerokości ekranu.
- Zweryfikować działanie wszystkich komponentów przy szerokości 320 pikseli CSS.
- Wprowadzić test reflow do procedury odbioru i publikacji serwisu.

---

## 18. Powiązane testy

- Zmiana rozmiaru tekstu
- Wystarczający kontrast
- Odstępy w tekście
- Widoczny fokus
- Formularze
- Responsywność interfejsu
- Orientacja ekranu
---