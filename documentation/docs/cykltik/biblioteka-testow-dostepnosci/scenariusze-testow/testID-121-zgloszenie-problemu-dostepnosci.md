---
id: test-zgloszenie-problemu-dostepnosci
title: Scenariusz testu - Zgłoszenie problemu dostępności
sidebar_label: Zgłoszenie problemu dostępności
sidebar_position: 121
description: Scenariusz testu sprawdzającego, czy użytkownik może samodzielnie zgłosić problem z dostępnością cyfrową oraz otrzymać potwierdzenie przyjęcia zgłoszenia.
keywords: [zgłoszenie problemu dostępności, dostępność cyfrowa, formularz kontaktowy, żądanie zapewnienia dostępności, ustawa o dostępności cyfrowej]
tags: [test dostępności, dostępność cyfrowa, zgłoszenia, formularz, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-121**

---

## 2. Nazwa testu

**Zgłoszenie problemu dostępności**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może samodzielnie:

- odnaleźć informacje o sposobie zgłoszenia problemu dostępności,
- zgłosić problem dotyczący dostępności cyfrowej,
- złożyć żądanie zapewnienia dostępności cyfrowej,
- przekazać informacje niezbędne do obsługi zgłoszenia,
- otrzymać potwierdzenie przyjęcia zgłoszenia.

Test obejmuje zarówno formularze elektroniczne, jak i inne kanały kontaktu wskazane przez organizację.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.5 Określenie celu danych wejściowych
- 2.1.1 Klawiatura
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety i instrukcje
- 3.3.3 Sugestie korekty błędów
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

### Wymagania prawne

- art. 18–22 ustawy o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych

---

## 6. Zastosowanie do treści

Test stosuje się do:

- deklaracji dostępności,
- formularzy zgłoszenia problemu dostępności,
- formularzy żądania zapewnienia dostępności cyfrowej,
- formularzy kontaktowych wykorzystywanych do zgłoszeń dostępnościowych,
- innych kanałów kontaktu wskazanych przez organizację.

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- odnaleźć sposób zgłoszenia problemu,
- przekazać zgłoszenie,
- zrozumieć wymagane informacje,
- wysłać zgłoszenie,
- otrzymać potwierdzenie przyjęcia zgłoszenia.

---

## 8. Dlaczego to jest ważne

Możliwość zgłoszenia problemu dostępności jest jednym z podstawowych mechanizmów ochrony praw użytkowników.

Jeżeli proces zgłoszenia jest niedostępny, osoba napotykająca barierę może zostać pozbawiona możliwości poinformowania organizacji o problemie lub skorzystania z procedury przewidzianej przez przepisy.

Niedostępny formularz zgłaszania problemów może prowadzić do sytuacji, w której użytkownik nie ma skutecznego sposobu uzyskania dostępu do informacji lub usługi.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób głuchych,
- osób z niepełnosprawnością ruchową,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z technologii wspomagających,
- wszystkich użytkowników napotykających bariery dostępności.

---

## 10. Sposób testowania

### Krok 1. Odnalezienie informacji o zgłoszeniu

Sprawdź, czy użytkownik może łatwo odnaleźć:

- informacje o zgłaszaniu problemów dostępności,
- informacje o żądaniu zapewnienia dostępności cyfrowej,
- dane kontaktowe umożliwiające zgłoszenie.

Zweryfikuj, czy informacje znajdują się w deklaracji dostępności lub innym wskazanym miejscu.

### Krok 2. Dostępność formularza

Jeżeli organizacja udostępnia formularz:

sprawdź, czy:

- formularz jest dostępny z klawiatury,
- pola posiadają etykiety,
- instrukcje są zrozumiałe,
- formularz działa z czytnikiem ekranu.

### Krok 3. Zakres wymaganych informacji

Sprawdź, czy użytkownik może zrozumieć:

- jakie informacje powinien przekazać,
- które pola są obowiązkowe,
- czego dotyczy zgłoszenie.

### Krok 4. Obsługa błędów

Celowo pozostaw niewypełnione pole obowiązkowe.

Sprawdź, czy:

- błąd jest identyfikowany,
- komunikat jest zrozumiały,
- użytkownik otrzymuje wskazówki umożliwiające poprawę.

### Krok 5. Wysłanie zgłoszenia

Sprawdź, czy:

- formularz można wysłać,
- użytkownik otrzymuje potwierdzenie,
- komunikat sukcesu jest dostępny dla technologii wspomagających.

### Krok 6. Alternatywne kanały kontaktu

Sprawdź, czy organizacja zapewnia alternatywne sposoby zgłoszenia, np.:

- adres poczty elektronicznej,
- numer telefonu,
- adres korespondencyjny,
- ePUAP lub inne kanały elektroniczne.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może samodzielnie odnaleźć i skutecznie wysłać zgłoszenie problemu dostępności.

### Częściowo spełnione

Proces jest możliwy do wykonania, ale występują utrudnienia.

### Niespełnione

Użytkownik nie może skutecznie zgłosić problemu dostępności lub procedura jest niedostępna.

---

## 12. Typowe niezgodności

- brak informacji o sposobie zgłoszenia problemu,
- brak danych kontaktowych,
- formularz niedostępny z klawiatury,
- brak etykiet pól formularza,
- błędy oznaczane wyłącznie kolorem,
- brak informacji o wymaganych danych,
- brak potwierdzenia wysłania zgłoszenia,
- formularz niedziałający z czytnikiem ekranu,
- wymaganie niedostępnej CAPTCHA.

---

## 13. Dobre praktyki

- zamieszczenie bezpośredniego odnośnika do formularza w deklaracji dostępności,
- udostępnienie kilku kanałów zgłoszenia,
- stosowanie prostego języka,
- ograniczenie liczby wymaganych pól,
- automatyczne potwierdzenie przyjęcia zgłoszenia,
- prezentowanie informacji o dalszym przebiegu sprawy.

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Organizacja nie zapewnia dostępnego sposobu zgłaszania problemów z dostępnością cyfrową. Formularz zgłoszeniowy nie może zostać poprawnie obsłużony przy użyciu klawiatury i czytnika ekranu, co utrudnia użytkownikom przekazywanie informacji o napotkanych barierach oraz korzystanie z procedury przewidzianej przepisami.

---

## 17. Rekomendacje naprawcze

- zapewnić dostępny formularz zgłoszeniowy,
- udostępnić alternatywne kanały kontaktu,
- poprawić dostępność formularza zgodnie z WCAG,
- zapewnić dostępne komunikaty błędów i sukcesu,
- ograniczyć liczbę wymaganych danych,
- regularnie testować proces zgłoszenia.

---

## 18. Powiązane testy

- testID-110 Deklaracja dostępności
- testID-111 Deklaracja dostępności (zgodność z warunkami technicznymi MC)
- testID-120 Formularz
- testID-037 Formularz elektroniczny
- testID-026 Identyfikacja błędów
- testID-027 Sugestie korekty błędów
- testID-040 Komunikaty o stanie
- testID-035 Dostęp z klawiatury
- testID-118 Rejestracja / Logowanie

---