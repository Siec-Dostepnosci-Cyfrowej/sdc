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

## 1. Identyfikator testu

**testID-083**

## 2. Nazwa testu

**Odstępy w tekście**

## 3. Profil stosowania testu

**ACR-EXT**

## 4. Opis testu

Test sprawdza, czy użytkownik może zwiększyć odstępy pomiędzy znakami, wyrazami, wierszami i akapitami bez utraty treści lub funkcjonalności rozwiązania.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.4.12 Odstępy w tekście (Poziom AA)

### EN 301 549

- 9.1.4.12 Text Spacing
- 11.1.4.12 Text Spacing

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- aplikacji internetowych,
- formularzy,
- artykułów,
- dokumentacji online,
- paneli administracyjnych,
- systemów informacyjnych,
- innych rozwiązań zawierających tekst.

## 7. Oczekiwany wynik

Po zwiększeniu odstępów zgodnie z wymaganiami WCAG:

- wszystkie treści pozostają dostępne,
- tekst nie jest obcinany,
- tekst nie nakłada się na inne elementy,
- funkcjonalność rozwiązania pozostaje zachowana,
- użytkownik może nadal korzystać z formularzy i elementów interfejsu.

## 8. Dlaczego to jest ważne

Wiele osób ma trudności z czytaniem tekstu o zbyt małych odstępach pomiędzy znakami, wyrazami lub wierszami.

Zwiększenie odstępów może znacząco poprawić czytelność dla:

- osób słabowidzących,
- osób z dysleksją,
- osób z trudnościami poznawczymi,
- osób korzystających z dużych powiększeń,
- osób stosujących własne arkusze stylów.

Użytkownik powinien mieć możliwość dostosowania sposobu prezentacji tekstu do własnych potrzeb bez utraty dostępu do treści i funkcji.

## 9. Kogo to dotyczy

Szczególnie:

- osób słabowidzących,
- osób z dysleksją,
- osób z trudnościami w czytaniu,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników korzystających z własnych arkuszy stylów,
- osób powiększających treść strony.

## 10. Sposób testowania

### Krok 1. Wybór stron i ekranów

Wybierz strony zawierające:

- dłuższe teksty,
- formularze,
- komunikaty,
- elementy interfejsu zawierające tekst.

### Krok 2. Zastosowanie wymaganych odstępów

Przy użyciu własnego arkusza stylów, rozszerzenia przeglądarki lub narzędzi deweloperskich zastosuj następujące wartości:

- wysokość wiersza (line-height): co najmniej 1,5,
- odstęp po akapicie: co najmniej 2 × wielkość czcionki,
- odstęp między literami (letter-spacing): co najmniej 0,12 em,
- odstęp między wyrazami (word-spacing): co najmniej 0,16 em.

### Krok 3. Ocena prezentacji treści

Sprawdź, czy po zastosowaniu odstępów:

- wszystkie treści pozostają dostępne,
- tekst nie jest obcinany,
- tekst nie nakłada się na inne elementy,
- nie pojawiają się dodatkowe problemy z nawigacją.

### Krok 4. Ocena funkcjonalności

Sprawdź, czy formularze, przyciski i pozostałe elementy interfejsu pozostają używalne po zastosowaniu zwiększonych odstępów.

## 11. Kryteria oceny wyniku

### Spełnione

Po zastosowaniu wymaganych odstępów treść pozostaje dostępna, czytelna i funkcjonalna.

### Częściowo spełnione

Większość treści pozostaje dostępna, jednak występują pojedyncze problemy prezentacyjne lub funkcjonalne.

### Niespełnione

Po zwiększeniu odstępów część treści lub funkcjonalności staje się niedostępna.

### Nie dotyczy

Nie stosuje się.

Kryterium dotyczy wszystkich rozwiązań zawierających tekst.

## 12. Typowe niezgodności

- obcinanie tekstu w przyciskach,
- nakładanie się etykiet formularzy,
- ukrywanie części tekstu w kartach lub panelach,
- stałe wysokości kontenerów uniemożliwiające rozszerzenie treści,
- przycinanie tekstu przez właściwość CSS `overflow:hidden`,
- nachodzenie elementów interfejsu na tekst.

## 13. Dobre praktyki

- projektowanie komponentów umożliwiających naturalne zwiększanie wysokości,
- unikanie sztywnych wysokości elementów zawierających tekst,
- stosowanie elastycznych układów interfejsu,
- testowanie interfejsu przy zwiększonych odstępach i powiększeniu tekstu,
- stosowanie responsywnych komponentów.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie problematycznych komponentów oraz opis zaobserwowanych niezgodności.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Po zastosowaniu zwiększonych odstępów pomiędzy znakami, wyrazami, wierszami i akapitami część treści jest obcinana lub nakłada się na inne elementy interfejsu. Powoduje to utrudnienia w odczycie informacji oraz korzystaniu z funkcjonalności serwisu przez użytkowników dostosowujących sposób prezentacji tekstu do własnych potrzeb.

## 17. Rekomendacje naprawcze

- usunąć sztywne wysokości elementów zawierających tekst,
- dostosować komponenty do zwiększonych odstępów,
- wyeliminować przycinanie treści przez właściwości CSS,
- stosować elastyczne układy interfejsu,
- przeprowadzić testy przy zwiększonych odstępach i powiększeniu tekstu.

## 18. Powiązane testy

- testID-037 Zmiana rozmiaru tekstu
- testID-038 Dopasowanie do szerokości ekranu
- testID-032 Wystarczający kontrast
- testID-072 Obrazy tekstu
- testID-075 Użycie koloru
- testID-062 Tabela danych
- testID-120 Formularz
