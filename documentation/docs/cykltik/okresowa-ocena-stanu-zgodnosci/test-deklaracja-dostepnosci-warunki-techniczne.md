---
id: test-deklaracja-dostepnosci-warunki-techniczne
title: Karta testu — Deklaracja dostępności (zgodność z warunkami technicznymi MC)
sidebar_label: Deklaracja dostępności (MC)
sidebar_position: 111
description: Scenariusz testu sprawdzającego zgodność deklaracji dostępności z warunkami technicznymi publikacji deklaracji dostępności określonymi przez Ministerstwo Cyfryzacji.
keywords: [deklaracja dostępności, warunki techniczne, Ministerstwo Cyfryzacji, dostępność cyfrowa, interoperacyjność]
tags: [test dostępności, deklaracja dostępności, warunki techniczne, WCAG, zgodność]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-111**

## 2. Nazwa testu

Deklaracja dostępności (zgodność z warunkami technicznymi MC)

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza zgodność deklaracji dostępności z obowiązującymi warunkami technicznymi publikacji deklaracji dostępności określonymi przez Ministerstwo Cyfryzacji.

Badanie obejmuje w szczególności:

- strukturę deklaracji,
- kompletność wymaganych sekcji,
- obecność wymaganych identyfikatorów technicznych,
- poprawność danych obowiązkowych,
- zgodność sposobu publikacji z wymaganiami interoperacyjności.

Test nie zastępuje oceny dostępności samej deklaracji. Jego celem jest ocena zgodności formalnej i technicznej dokumentu.

## 5. Mapowanie do standardów

### Ustawa o dostępności cyfrowej

- art. 10
- art. 11

### Warunki techniczne publikacji deklaracji dostępności

- struktura deklaracji,
- wymagane sekcje,
- wymagane identyfikatory,
- wymagane pola danych.

### WCAG

Pośrednio:

- 1.3.1 Informacje i relacje
- 2.4.6 Nagłówki i etykiety
- 4.1.1 Parsowanie
- 4.1.2 Nazwa, rola, wartość

## 6. Zastosowanie do treści

Test stosuje się do:

- deklaracji dostępności stron internetowych,
- deklaracji dostępności aplikacji mobilnych,
- deklaracji publikowanych w BIP,
- deklaracji publikowanych w innych serwisach podmiotów publicznych.

## 7. Oczekiwany wynik

Deklaracja:

- zawiera wszystkie wymagane sekcje,
- zawiera wszystkie wymagane informacje,
- wykorzystuje wymagane identyfikatory techniczne,
- umożliwia automatyczne odnajdywanie i przetwarzanie informacji,
- jest zgodna z aktualnymi warunkami technicznymi publikacji.

## 8. Dlaczego to jest ważne

Warunki techniczne zostały opracowane w celu:

- ujednolicenia publikacji deklaracji,
- umożliwienia automatycznej analizy deklaracji,
- zwiększenia interoperacyjności,
- poprawy jakości informacji o dostępności,
- ułatwienia użytkownikom odnajdywania potrzebnych informacji. 

Brak zgodności z wymaganiami technicznymi utrudnia zarówno użytkownikom, jak i narzędziom automatycznym korzystanie z deklaracji.

## 9. Kogo to dotyczy

- użytkowników deklaracji dostępności,
- osób zgłaszających problemy z dostępnością,
- administratorów serwisów,
- organów monitorujących,
- systemów automatycznie analizujących deklaracje.

## 10. Sposób testowania

### Krok 1. Weryfikacja dostępności deklaracji

Sprawdź, czy deklaracja jest opublikowana jako odrębna strona HTML.

### Krok 2. Weryfikacja struktury

Sprawdź obecność wymaganych sekcji.

W szczególności:

- wstęp,
- informacje o stanie dostępności,
- treści niedostępne,
- kontakt,
- procedura zgłaszania problemów,
- procedura odwoławcza,
- pozostałe sekcje wymagane aktualnymi warunkami technicznymi.

### Krok 3. Weryfikacja danych obowiązkowych

Sprawdź obecność:

- nazwy podmiotu,
- adresu strony lub identyfikatora aplikacji,
- daty publikacji deklaracji,
- daty aktualizacji deklaracji,
- statusu dostępności,
- danych kontaktowych.

### Krok 4. Weryfikacja identyfikatorów technicznych

Sprawdź obecność wymaganych identyfikatorów `id="a11y-*"`.

Przykładowo:

- `a11y-wstep`,
- `a11y-url`,
- `a11y-data-publikacja`,
- `a11y-data-aktualizacja`,
- `a11y-status`,
- `a11y-kontakt`,
- `a11y-procedura`. 

### Krok 5. Weryfikacja dat

Sprawdź:

- poprawność formatu dat,
- logiczną spójność dat,
- aktualność informacji.

### Krok 6. Walidacja struktury

Sprawdź, czy deklaracja przechodzi walidację zgodności z wymaganiami technicznymi.

## 11. Kryteria oceny wyniku

### Spełnia

Deklaracja spełnia wymagania techniczne i formalne.

### Częściowo spełnia

Stwierdzono pojedyncze braki lub niezgodności, które nie uniemożliwiają korzystania z deklaracji.

### Nie spełnia

Brak wymaganych sekcji, identyfikatorów lub danych obowiązkowych.

### Nie dotyczy

Nie stosuje się.

## 12. Typowe niezgodności

- brak wymaganych sekcji,
- brak identyfikatorów `a11y-*`,
- nieprawidłowe identyfikatory,
- brak dat publikacji lub aktualizacji,
- brak informacji kontaktowych,
- nieprawidłowy status dostępności,
- niezgodna kolejność sekcji,
- błędna struktura dokumentu,
- niespójność danych pomiędzy sekcjami.

## 13. Dobre praktyki

- generowanie deklaracji z wykorzystaniem szablonów zgodnych z wymaganiami MC,
- automatyczna walidacja deklaracji przed publikacją,
- stosowanie identyfikatorów zgodnych z dokumentacją MC,
- regularne przeglądy zgodności technicznej deklaracji,
- powiązanie deklaracji z raportem zgodności (ACR).

## 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia

## 15. Ustalenia

Miejsce na zapisanie:

- brakujących sekcji,
- brakujących identyfikatorów,
- błędów struktury,
- niezgodności formalnych,
- wyników walidacji.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Deklaracja dostępności nie spełnia wszystkich wymagań technicznych publikacji. Stwierdzono brak części wymaganych identyfikatorów `a11y-*` oraz brak sekcji opisującej procedurę zgłaszania problemów z dostępnością. Może to utrudniać automatyczne przetwarzanie deklaracji oraz odnajdywanie informacji przez użytkowników.

## 17. Rekomendacje naprawcze

- uzupełnić brakujące sekcje,
- zastosować wymagane identyfikatory techniczne,
- poprawić strukturę dokumentu,
- przeprowadzić walidację zgodności z warunkami technicznymi,
- wdrożyć procedurę okresowego przeglądu deklaracji.

## 18. Powiązane testy

- testID-110 Deklaracja dostępności
- Zgłoszenie problemu dostępności
- Formularz kontaktowy
- Polityka prywatności
- Odczyt struktury przez czytnik ekranu
- Nagłówki
- Punkty orientacyjne
- Linki i cel łączy

---