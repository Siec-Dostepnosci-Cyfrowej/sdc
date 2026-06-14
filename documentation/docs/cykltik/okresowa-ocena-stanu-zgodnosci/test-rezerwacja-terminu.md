---
id: test-rezerwacja-terminu
title: Karta testu — Rezerwacja terminu
sidebar_label: Rezerwacja terminu
sidebar_position: 119
description: Scenariusz testu sprawdzającego, czy użytkownik może samodzielnie znaleźć dostępny termin, wybrać go, zarezerwować wizytę oraz otrzymać potwierdzenie rezerwacji.
keywords: [rezerwacja terminu, kalendarz, umawianie wizyty, e-usługa, harmonogram, WCAG, dostępność cyfrowa]
tags: [test dostępności, proces użytkownika, rezerwacja, kalendarz, usługi cyfrowe, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-119**

---

## 2. Nazwa testu

**Rezerwacja terminu**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test sprawdza, czy użytkownik może samodzielnie:

- odnaleźć usługę wymagającą rezerwacji,
- sprawdzić dostępne terminy,
- wybrać termin wizyty,
- zarezerwować termin,
- otrzymać potwierdzenie rezerwacji,
- zmienić lub anulować rezerwację (jeżeli system udostępnia takie funkcje).

Test obejmuje cały proces rezerwacji, a nie wyłącznie dostępność pojedynczego kalendarza lub formularza.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 1.4.1 Użycie koloru
- 1.4.3 Kontrast
- 2.1.1 Klawiatura
- 2.1.2 Bez pułapki klawiaturowej
- 2.4.3 Kolejność fokusu
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.2.2 Zmiana podczas wprowadzania danych
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety i instrukcje
- 3.3.3 Sugestie korekty błędów
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

### EN 301 549

- 9.1
- 9.2
- 9.3
- 9.4

---

## 6. Zastosowanie do treści

Test stosuje się do:

- systemów rezerwacji wizyt,
- systemów umawiania spotkań,
- rezerwacji konsultacji,
- rezerwacji usług publicznych,
- systemów kolejkowych,
- kalendarzy wizyt,
- formularzy umawiania spotkań.

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- odnaleźć dostępne terminy,
- rozpoznać wolne i zajęte terminy,
- wybrać termin wizyty,
- potwierdzić wybór,
- otrzymać potwierdzenie rezerwacji,
- wykonać proces bez konieczności korzystania z myszy.

---

## 8. Dlaczego to jest ważne

Coraz więcej usług publicznych wymaga wcześniejszej rezerwacji terminu.

Jeżeli proces rezerwacji jest niedostępny, użytkownik może zostać pozbawiony możliwości skorzystania z usługi, mimo że sama usługa jest formalnie dostępna.

Szczególne problemy powodują kalendarze wykorzystujące wyłącznie interakcje wizualne, kolory lub operacje typu przeciągnij i upuść.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością rąk,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z technologii wspomagających,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1. Odszukanie usługi

Sprawdź, czy użytkownik może odnaleźć funkcję rezerwacji terminu.

Zweryfikuj:

- nazwy przycisków i linków,
- zrozumiałość instrukcji,
- dostępność nawigacji.

### Krok 2. Dostępność kalendarza

Sprawdź, czy:

- kalendarz jest dostępny z klawiatury,
- czytnik ekranu odczytuje dni i godziny,
- fokus jest widoczny,
- użytkownik może przechodzić pomiędzy miesiącami.

### Krok 3. Dostępność terminów

Sprawdź, czy:

- dostępne i niedostępne terminy są rozróżnialne nie tylko kolorem,
- status terminu jest odczytywany przez technologie wspomagające,
- użytkownik rozumie znaczenie oznaczeń.

### Krok 4. Wybór terminu

Sprawdź, czy:

- termin można wybrać bez użycia myszy,
- wybrany termin jest jednoznacznie oznaczony,
- system nie zmienia nieoczekiwanie kontekstu.

### Krok 5. Formularz rezerwacji

Sprawdź, czy:

- formularz posiada etykiety,
- pola obowiązkowe są oznaczone,
- instrukcje są zrozumiałe,
- formularz jest obsługiwany klawiaturą.

### Krok 6. Obsługa błędów

Celowo wprowadź błędne dane.

Sprawdź, czy:

- błędy są identyfikowane,
- komunikaty wskazują sposób poprawy,
- komunikaty są odczytywane przez technologie wspomagające.

### Krok 7. Potwierdzenie rezerwacji

Sprawdź, czy użytkownik:

- otrzymuje potwierdzenie,
- zna datę i godzinę wizyty,
- zna sposób odwołania lub zmiany rezerwacji (jeżeli jest dostępny).

### Krok 8. Zmiana lub anulowanie

Jeżeli system przewiduje takie funkcje:

- sprawdź możliwość zmiany terminu,
- sprawdź możliwość anulowania wizyty,
- sprawdź komunikaty potwierdzające wykonanie operacji.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może samodzielnie odnaleźć, wybrać i zarezerwować termin.

### Częściowo spełnione

Proces jest możliwy do wykonania, ale występują istotne utrudnienia.

### Niespełnione

Użytkownik nie może skutecznie zarezerwować terminu.

---

## 12. Typowe niezgodności

- kalendarz niedostępny z klawiatury,
- brak odczytu dat przez czytnik ekranu,
- dostępność terminów oznaczona wyłącznie kolorem,
- brak informacji o wybranym terminie,
- niewidoczny fokus,
- komunikaty błędów niedostępne dla technologii wspomagających,
- brak możliwości wyboru terminu bez myszy,
- brak potwierdzenia rezerwacji,
- nieczytelne oznaczenia terminów.

---

## 13. Dobre praktyki

- możliwość wyboru terminu zarówno z kalendarza, jak i listy terminów,
- wyraźne oznaczanie wybranego terminu,
- prezentowanie terminów w formie tekstowej,
- dostępne komunikaty o stanie,
- możliwość filtrowania terminów,
- możliwość ponownego wyboru bez utraty danych,
- czytelne potwierdzenie rezerwacji.

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

> Mechanizm rezerwacji terminu nie jest w pełni dostępny dla użytkowników korzystających wyłącznie z klawiatury. Kalendarz wizyt wymaga użycia myszy do wyboru daty, a informacje o dostępności terminów są przekazywane wyłącznie za pomocą koloru. Problem utrudnia lub uniemożliwia samodzielne umówienie wizyty części użytkowników.

---

## 17. Rekomendacje naprawcze

- zapewnić pełną obsługę kalendarza z klawiatury,
- udostępnić alternatywną listę terminów,
- nie opierać informacji wyłącznie na kolorze,
- zapewnić poprawny odczyt terminów przez technologie wspomagające,
- zapewnić dostępne komunikaty o stanie,
- umożliwić zmianę i anulowanie rezerwacji w dostępny sposób.

---

## 18. Powiązane testy

- testID-117 Złożenie wniosku
- testID-118 Rejestracja / Logowanie
- testID-037 Formularz elektroniczny
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu
- testID-040 Komunikaty o stanie
- testID-023 Użycie koloru
- testID-026 Identyfikacja błędów
- testID-027 Sugestie korekty błędów
- testID-094 Przeciąganie
- testID-098 Fokus niezakryty

---