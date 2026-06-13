---
id: test-deklaracja-dostepnosci
title: Karta testu — Deklaracja dostępności
sidebar_label: Deklaracja dostępności
sidebar_position: 110
description: Scenariusz testu sprawdzającego, czy deklaracja dostępności została opublikowana, jest kompletna, aktualna, dostępna cyfrowo oraz umożliwia użytkownikowi uzyskanie informacji o stanie dostępności i zgłoszenie problemu.
keywords: [deklaracja dostępności, dostępność cyfrowa, ustawa o dostępności cyfrowej, WCAG, informacja publiczna]
tags: [test dostępności, deklaracja dostępności, WCAG, zgodność, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-110**

## 2. Nazwa testu

Deklaracja dostępności

## 3. Profil stosowania testu

ACR-MIN

## 4. Opis testu

Test sprawdza, czy organizacja opublikowała deklarację dostępności oraz czy dokument:

- jest dostępny z poziomu serwisu lub aplikacji,
- zawiera wymagane informacje,
- jest aktualny,
- umożliwia zgłoszenie problemu z dostępnością,
- jest dostępny cyfrowo dla użytkowników technologii wspomagających.

Test opiera się na wymaganiach ustawy o dostępności cyfrowej oraz warunkach technicznych publikacji deklaracji dostępności. 

## 5. Mapowanie do standardów

### Ustawa o dostępności cyfrowej

- art. 10–11 (deklaracja dostępności)

### WCAG 2.1 / WCAG 2.2

- 1.3.1 Informacje i relacje
- 2.1.1 Klawiatura
- 2.4.1 Możliwość pominięcia bloków
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.1.1 Język strony
- 4.1.2 Nazwa, rola, wartość

## 6. Zastosowanie do treści

Test stosuje się do:

- deklaracji dostępności stron internetowych,
- deklaracji dostępności aplikacji mobilnych,
- deklaracji publikowanych w BIP,
- deklaracji publikowanych w serwisach instytucji publicznych.

## 7. Oczekiwany wynik

Użytkownik może:

- łatwo odnaleźć deklarację dostępności,
- zapoznać się ze stanem dostępności rozwiązania,
- dowiedzieć się o istniejących ograniczeniach,
- zgłosić problem z dostępnością,
- uzyskać informacje o procedurze żądania zapewnienia dostępności.

## 8. Dlaczego to jest ważne

Deklaracja dostępności jest podstawowym źródłem informacji o stanie dostępności rozwiązania cyfrowego.

Pozwala użytkownikowi:

- ocenić możliwość skorzystania z usługi,
- poznać istniejące ograniczenia,
- uzyskać pomoc,
- skorzystać z procedur przewidzianych prawem.

Jest również jednym z podstawowych obowiązków podmiotów publicznych. 

## 9. Kogo to dotyczy

W szczególności:

- osób z niepełnosprawnościami,
- osób starszych,
- użytkowników technologii wspomagających,
- osób zgłaszających problemy z dostępnością,
- wszystkich użytkowników poszukujących informacji o dostępności usługi.

## 10. Sposób testowania

### Krok 1

Sprawdź, czy deklaracja dostępności została opublikowana.

### Krok 2

Sprawdź, czy link do deklaracji jest łatwy do odnalezienia (np. w stopce strony).

### Krok 3

Sprawdź, czy deklaracja jest dostępna w formie strony HTML.

### Krok 4

Zweryfikuj obecność podstawowych informacji:

- nazwa podmiotu,
- identyfikacja rozwiązania,
- status dostępności,
- data publikacji,
- data aktualizacji,
- dane kontaktowe.

### Krok 5

Sprawdź, czy deklaracja zawiera:

- opis niezgodności,
- informacje o zgłaszaniu problemów,
- informacje o żądaniu zapewnienia dostępności,
- informacje o procedurze skargowej.

### Krok 6

Sprawdź, czy deklaracja jest dostępna z klawiatury.

### Krok 7

Sprawdź poprawność struktury nagłówków.

### Krok 8

Zweryfikuj aktualność deklaracji.

## 11. Kryteria oceny wyniku

### Spełnia

Deklaracja została opublikowana, jest kompletna, aktualna i dostępna cyfrowo.

### Częściowo spełnia

Deklaracja istnieje, ale zawiera braki formalne, nieaktualne informacje lub problemy dostępnościowe.

### Nie spełnia

Deklaracja nie została opublikowana albo nie zawiera kluczowych informacji wymaganych przepisami.

### Nie dotyczy

Nie stosuje się.

## 12. Typowe niezgodności

- brak deklaracji dostępności,
- brak linku do deklaracji z poziomu serwisu,
- nieaktualne daty,
- brak opisu niezgodności,
- brak danych kontaktowych,
- brak procedury zgłaszania problemów,
- deklaracja opublikowana wyłącznie jako PDF,
- deklaracja niedostępna dla użytkowników technologii wspomagających,
- ogólnikowe informacje niepozwalające ocenić stanu dostępności.

## 13. Dobre praktyki

- publikowanie deklaracji w HTML,
- stosowanie prostego języka,
- regularna aktualizacja treści,
- powiązanie deklaracji z raportem zgodności lub wynikami oceny,
- wskazywanie konkretnych problemów i ich wpływu na użytkownika,
- umieszczanie linku do deklaracji w stopce każdej strony serwisu. 

## 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia

## 15. Ustalenia

Miejsce na zapisanie:

- adresu deklaracji,
- dat publikacji i aktualizacji,
- brakujących elementów,
- problemów dostępnościowych,
- innych obserwacji.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Deklaracja dostępności została opublikowana, jednak nie zawiera informacji o sposobie zgłaszania problemów z dostępnością oraz procedurze żądania zapewnienia dostępności. Dodatkowo część informacji jest nieaktualna, co może utrudniać użytkownikom skorzystanie z przysługujących im uprawnień.

## 17. Rekomendacje naprawcze

- uzupełnić brakujące informacje wymagane przepisami,
- zaktualizować dane kontaktowe i daty,
- zapewnić dostępność cyfrową deklaracji,
- opublikować deklarację w HTML,
- doprecyzować opis niezgodności i ograniczeń,
- zapewnić łatwy dostęp do deklaracji z każdej strony serwisu.

## 18. Powiązane testy

- Zgłoszenie problemu dostępności
- Formularz kontaktowy
- Informacja o podmiocie w ETR
- Informacja o podmiocie w języku migowym
- Polityka prywatności
- Strona kontaktowa
- Odczyt struktury przez czytnik ekranu
- Obsługa klawiaturą

---