---
id: test-wydarzenie
title: Karta testu — Wydarzenie
sidebar_label: Wydarzenie
sidebar_position: 131
description: Scenariusz testu sprawdzającego, czy strona wydarzenia zawiera kompletne informacje o wydarzeniu, jego dostępności, lokalizacji i sposobie uczestnictwa oraz umożliwia skuteczne skorzystanie z tych informacji przez wszystkich użytkowników.
keywords: [wydarzenie, wydarzenia, konferencja, warsztaty, spotkanie, wydarzenie publiczne, dostępność cyfrowa]
tags: [test dostępności, wydarzenie, komunikacja, usługi publiczne, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

# Wydarzenie

## 1. Identyfikator testu

**testID-131**

---

## 2. Nazwa testu

**Wydarzenie**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test sprawdza, czy użytkownik może skutecznie uzyskać informacje o wydarzeniu, jego terminie, lokalizacji, dostępności oraz zasadach uczestnictwa. Ocenie podlega kompletność informacji, sposób ich prezentacji oraz możliwość skorzystania z funkcji związanych z udziałem w wydarzeniu. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.1.1 Treści nietekstowe
- 1.3.1 Informacje i relacje
- 1.4.3 Kontrast (minimalny)
- 2.1.1 Klawiatura
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.1.1 Język strony
- 3.2.2 Podczas wprowadzania danych
- 4.1.2 Nazwa, rola, wartość

### Powiązane wymagania

- dostępność wydarzeń publicznych,
- dostępność informacji o wydarzeniach,
- komunikacja z uczestnikami wydarzeń.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- wydarzeń kulturalnych,
- wydarzeń edukacyjnych,
- konferencji,
- seminariów,
- warsztatów,
- konsultacji społecznych,
- spotkań informacyjnych,
- wydarzeń organizowanych przez podmioty publiczne.

---

## 7. Oczekiwany wynik

Użytkownik może:

- ustalić czego dotyczy wydarzenie,
- poznać termin i miejsce wydarzenia,
- uzyskać informacje o dostępności wydarzenia,
- zapisać się na wydarzenie lub uzyskać informacje o uczestnictwie,
- skontaktować się z organizatorem,
- przygotować się do udziału w wydarzeniu.

---

## 8. Dlaczego to jest ważne

Strona wydarzenia jest często jedynym źródłem informacji o organizowanym spotkaniu, konferencji lub wydarzeniu publicznym.

Brak informacji o dostępności, lokalizacji lub zasadach uczestnictwa może uniemożliwić części użytkowników udział w wydarzeniu. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami,
- osób starszych,
- osób korzystających z urządzeń mobilnych,
- osób korzystających z technologii wspomagających,
- uczestników wydarzeń wymagających wcześniejszej rejestracji.

---

## 10. Sposób testowania

### Krok 1. Informacje podstawowe

Sprawdź, czy użytkownik może łatwo odnaleźć:

- tytuł wydarzenia,
- datę wydarzenia,
- godzinę rozpoczęcia,
- godzinę zakończenia (jeżeli dotyczy),
- miejsce wydarzenia. 

### Krok 2. Opis wydarzenia

Sprawdź, czy:

- wydarzenie posiada opis,
- opis wyjaśnia charakter wydarzenia,
- użytkownik może ustalić cel wydarzenia,
- informacje nie są publikowane wyłącznie w formie plakatu lub grafiki.

### Krok 3. Informacje o dostępności

Sprawdź, czy podano informacje dotyczące:

- dostępności architektonicznej,
- dostępności sensorycznej,
- wsparcia dla osób z niepełnosprawnościami,
- sposobu zgłaszania potrzeb dostępnościowych,
- kontaktu w sprawach dostępności. 

### Krok 4. Program wydarzenia

Jeżeli wydarzenie posiada program:

sprawdź, czy:

- agenda jest dostępna w formie HTML,
- zachowano logiczną strukturę informacji,
- program nie jest publikowany wyłącznie jako grafika lub plakat.

### Krok 5. Lokalizacja

Sprawdź, czy użytkownik może ustalić:

- adres wydarzenia,
- sposób dotarcia,
- informacje o parkingu lub transporcie publicznym (jeżeli są istotne).

Jeżeli użyto mapy, sprawdź dostępność alternatywy tekstowej.

### Krok 6. Grafiki i plakaty

Sprawdź, czy:

- plakaty posiadają tekst alternatywny,
- informacje przedstawione na plakacie są dostępne również w treści strony,
- grafiki nie są jedynym źródłem informacji o wydarzeniu.

### Krok 7. Rejestracja lub bilety

Jeżeli wydarzenie wymaga zapisów:

sprawdź, czy:

- przycisk zapisów jest jednoznacznie opisany,
- działa z klawiatury,
- użytkownik może przejść do formularza rejestracji,
- proces rejestracji jest przewidywalny. 

### Krok 8. Widok mobilny

Sprawdź, czy:

- wszystkie kluczowe informacje są dostępne na urządzeniach mobilnych,
- treści nie wymagają poziomego przewijania,
- kolejność informacji pozostaje logiczna. 

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może uzyskać wszystkie istotne informacje o wydarzeniu oraz przygotować się do udziału.

### Częściowo spełnione

Podstawowe informacje są dostępne, ale występują utrudnienia lub braki.

### Niespełnione

Użytkownik nie może skutecznie uzyskać informacji niezbędnych do uczestnictwa w wydarzeniu.

---

## 12. Typowe niezgodności

- brak informacji o dostępności wydarzenia,
- brak daty lub godziny wydarzenia,
- brak lokalizacji,
- informacje publikowane wyłącznie jako plakat PDF,
- niedostępny formularz zapisów,
- mapa bez alternatywy tekstowej,
- brak kontaktu do organizatora,
- nieuporządkowana struktura strony,
- grafiki bez tekstów alternatywnych. 

---

## 13. Dobre praktyki

- publikowanie krótkiego streszczenia wydarzenia,
- publikowanie szczegółowych informacji o dostępności,
- umożliwienie zgłaszania potrzeb dostępnościowych,
- stosowanie czytelnych przycisków akcji,
- publikowanie programu wydarzenia w HTML,
- stosowanie opisów lokalizacji niezależnie od mapy,
- publikowanie danych kontaktowych organizatora.

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

> Strona wydarzenia nie zawiera wszystkich informacji niezbędnych do udziału w wydarzeniu lub część tych informacji jest niedostępna dla użytkowników korzystających z technologii wspomagających. Brakuje informacji o dostępności wydarzenia, lokalizacji lub zasadach uczestnictwa, co może utrudniać przygotowanie się do udziału.

---

## 17. Rekomendacje naprawcze

- uzupełnić informacje o terminie i lokalizacji,
- opublikować informacje o dostępności wydarzenia,
- zapewnić dostępne formularze zapisów,
- publikować program wydarzenia w HTML,
- poprawić dostępność map i grafik,
- udostępnić dane kontaktowe organizatora,
- umożliwić zgłaszanie potrzeb dostępnościowych.

---

## 18. Powiązane testy

- testID-130 Komponent Kalendarz
- testID-119 Rezerwacja terminu
- testID-120 Formularz
- testID-122 Mapa dojazdu / Lokalizacja
- testID-123 Strona kontaktowa
- testID-104 Skan dokumentu
- testID-128 Pliki do pobrania
- testID-082 Multimedia
- testID-124 Informacja o podmiocie w PJM
- testID-125 Informacja o podmiocie w ETR

---