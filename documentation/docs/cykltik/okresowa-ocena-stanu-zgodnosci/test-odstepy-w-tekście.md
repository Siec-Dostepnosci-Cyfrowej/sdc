---
id: test-odstepy-w-tekście
title: Odstępy w tekście
sidebar_label: Odstępy w tekście
sidebar_position: 83
description: Scenariusz testu sprawdzającego, czy użytkownik może zwiększyć odstępy pomiędzy znakami, wyrazami, wierszami i akapitami bez utraty treści lub funkcjonalności rozwiązania.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,odstępy w tekście]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,odstępy w tekście]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-083**

## Nazwa testu

Odstępy w tekście

## Cel testu

Sprawdzenie, czy użytkownik może zwiększyć odstępy pomiędzy znakami, wyrazami, wierszami i akapitami bez utraty treści lub funkcjonalności rozwiązania.

## Powiązane wymagania

### WCAG 2.1

- 1.4.12 Odstępy w tekście (Text Spacing) – poziom AA

### EN 301 549

- 9.1.4.12 Text Spacing
- 11.1.4.12 Text Spacing

---

## Dlaczego to jest ważne

Wiele osób ma trudności z czytaniem tekstu o zbyt małych odstępach pomiędzy znakami, wyrazami lub wierszami.

Zwiększenie odstępów może znacząco poprawić czytelność dla:

- osób słabowidzących,
- osób z dysleksją,
- osób z trudnościami poznawczymi,
- osób czytających tekst przy dużym powiększeniu.

Użytkownik powinien mieć możliwość dostosowania sposobu prezentacji tekstu do własnych potrzeb bez utraty dostępu do treści i funkcji.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób słabowidzących,
- osób z dysleksją,
- osób z trudnościami w czytaniu,
- użytkowników korzystających z własnych arkuszy stylów,
- osób powiększających treść strony.

---

## Zakres stosowania

Test należy wykonywać dla:

- stron internetowych,
- aplikacji webowych,
- formularzy,
- artykułów,
- dokumentacji online,
- paneli administracyjnych,
- innych rozwiązań zawierających tekst.

---

## Metoda badania

### Krok 1. Wybór stron i ekranów

Wybierz strony zawierające:

- dłuższe teksty,
- formularze,
- komunikaty,
- elementy interfejsu zawierające tekst.

### Krok 2. Zastosowanie wymaganych odstępów

Przy użyciu narzędzi deweloperskich przeglądarki, własnego arkusza stylów lub rozszerzenia przeglądarki zastosuj następujące wartości:

- wysokość wiersza (line-height): co najmniej 1,5,
- odstęp po akapicie: co najmniej 2 × wielkość czcionki,
- odstęp między literami (letter-spacing): co najmniej 0,12 em,
- odstęp między wyrazami (word-spacing): co najmniej 0,16 em.

### Krok 3. Ocena efektu

Sprawdź, czy po zastosowaniu odstępów:

- wszystkie treści pozostają dostępne,
- tekst nie jest obcinany,
- tekst nie nakłada się na inne elementy,
- nie pojawiają się poziome paski przewijania wynikające wyłącznie z zastosowania odstępów,
- formularze i elementy interfejsu pozostają używalne.

---

## Kryteria oceny

### Spełnia

Po zastosowaniu wymaganych odstępów:

- treść pozostaje dostępna,
- funkcjonalność rozwiązania nie ulega pogorszeniu,
- tekst nie jest obcinany ani ukrywany.

### Częściowo spełnia

Większość treści pozostaje dostępna, ale występują pojedyncze problemy, np.:

- obcinanie tekstu w niektórych komponentach,
- nakładanie się tekstu na elementy interfejsu.

### Nie spełnia

Po zwiększeniu odstępów:

- część treści staje się niedostępna,
- tekst jest obcinany,
- tekst nakłada się na inne elementy,
- korzystanie z funkcjonalności staje się niemożliwe lub istotnie utrudnione.

### Nie dotyczy

Nie stosuje się.

Kryterium dotyczy wszystkich rozwiązań zawierających tekst.

---

## Typowe niezgodności

- obcinanie tekstu w przyciskach,
- nakładanie się etykiet formularzy,
- ukrywanie części tekstu w kartach lub panelach,
- stałe wysokości kontenerów uniemożliwiające rozszerzenie treści,
- przycinanie tekstu przez właściwość CSS `overflow:hidden`.

---

## Dobre praktyki

- projektowanie komponentów umożliwiających naturalne zwiększanie wysokości,
- unikanie sztywnych wysokości elementów zawierających tekst,
- stosowanie układów elastycznych (responsive),
- testowanie interfejsu przy zwiększonych odstępach i powiększeniu tekstu.

---

## Klasyfikacja problemów

### Krytyczne

- utrata dostępu do istotnych treści lub funkcji po zwiększeniu odstępów.

### Istotne

- obcinanie tekstu uniemożliwiające zrozumienie informacji,
- niedostępne formularze lub komunikaty.

### Umiarkowane

- lokalne problemy prezentacyjne utrudniające czytanie.

### Drobne

- pojedyncze błędy wizualne bez istotnego wpływu na użytkowanie.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Nie        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Nie        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Zmiana rozmiaru tekstu
- Dopasowanie do szerokości ekranu
- Wystarczający kontrast
- Obrazy tekstu
- Użycie koloru
- Tabela
- Formularz

---

## Uwagi

Test nie wymaga udostępnienia użytkownikowi mechanizmu zmiany odstępów. Wymaga jedynie, aby rozwiązanie działało poprawnie w sytuacji, gdy użytkownik sam zastosuje zwiększone odstępy przy użyciu funkcji przeglądarki, własnych ustawień lub technologii wspomagających. Najczęstszą przyczyną niezgodności są sztywne układy interfejsu oraz elementy o stałej wysokości, które nie dostosowują się do większej ilości miejsca potrzebnej na wyświetlenie tekstu.
