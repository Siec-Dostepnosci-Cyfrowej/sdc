---
id: test-komponent-kalendarz
title: Karta testu — Komponent Kalendarz
sidebar_label: Komponent Kalendarz
sidebar_position: 130
description: Scenariusz testu sprawdzającego, czy komponent kalendarza umożliwia wszystkim użytkownikom wyszukiwanie, przeglądanie i filtrowanie wydarzeń oraz przechodzenie do ich szczegółów. 
keywords: [kalendarz, wydarzenia, terminarz, harmonogram, wydarzenia publiczne, dostępność cyfrowa]
tags: [test dostępności, kalendarz, wydarzenia, komponent, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-130**

---

## 2. Nazwa testu

**Komponent Kalendarz**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test sprawdza, czy użytkownik może skutecznie przeglądać wydarzenia, poruszać się pomiędzy okresami czasu, korzystać z filtrów oraz przechodzić do szczegółów wydarzeń niezależnie od sposobu obsługi, urządzenia lub technologii wspomagającej. Test obejmuje zarówno widok kalendarza, jak i powiązane z nim funkcje wyszukiwania i filtrowania wydarzeń. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 1.4.3 Kontrast (minimalny)
- 2.1.1 Klawiatura
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 4.1.2 Nazwa, rola, wartość

### Powiązane wymagania

- dostępność wydarzeń publicznych,
- dostępność harmonogramów,
- dostępność kalendarzy internetowych.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- kalendarzy wydarzeń,
- harmonogramów spotkań,
- terminarzy wydarzeń publicznych,
- kalendarzy konsultacji społecznych,
- kalendarzy rezerwacji,
- widżetów kalendarza publikowanych na stronach internetowych.

---

## 7. Oczekiwany wynik

Użytkownik może:

- odnaleźć wydarzenia,
- przeglądać wydarzenia według dat,
- korzystać z filtrów i wyszukiwarki,
- przechodzić do szczegółów wydarzeń,
- obsługiwać kalendarz z klawiatury,
- korzystać z kalendarza przy użyciu technologii wspomagających.

---

## 8. Dlaczego to jest ważne

Kalendarze są często wykorzystywane do publikowania informacji o wydarzeniach, spotkaniach, konsultacjach społecznych i terminach realizacji usług.

Niedostępny kalendarz może uniemożliwić użytkownikowi odnalezienie ważnych informacji lub zapisanie się na wydarzenie. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnością poznawczą,
- użytkowników urządzeń mobilnych,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Informacje podstawowe

Sprawdź, czy użytkownik może ustalić:

- że znajduje się w kalendarzu wydarzeń,
- jaki okres czasu jest aktualnie wyświetlany,
- jaki jest cel komponentu. 

### Krok 2. Lista wydarzeń

Sprawdź, czy każde wydarzenie zawiera:

- tytuł,
- datę,
- godzinę (jeżeli dotyczy),
- lokalizację (jeżeli dotyczy),
- odnośnik do szczegółów wydarzenia. 

### Krok 3. Nawigacja po okresach czasu

Sprawdź, czy użytkownik może:

- przejść do poprzedniego okresu,
- przejść do następnego okresu,
- rozpoznać aktualnie wyświetlany miesiąc lub zakres dat.

Zweryfikuj działanie tych funkcji przy użyciu klawiatury. 

### Krok 4. Widok kalendarza

Jeżeli dostępny jest widok siatki kalendarza:

sprawdź, czy:

- dni tygodnia są jednoznacznie oznaczone,
- dni zawierające wydarzenia są rozpoznawalne bez użycia koloru,
- wydarzenia posiadają dostępne nazwy lub linki,
- aktualna data jest odpowiednio oznaczona. 

### Krok 5. Widok alternatywny

Sprawdź, czy dostępny jest:

- widok listy wydarzeń,
- alternatywny sposób przeglądania wydarzeń bez konieczności korzystania z siatki kalendarza. 

### Krok 6. Filtry i wyszukiwarka

Jeżeli kalendarz posiada filtry:

sprawdź, czy:

- pola formularza posiadają etykiety,
- filtry są dostępne z klawiatury,
- użytkownik otrzymuje informację o wynikach filtrowania,
- fokus pozostaje przewidywalny po zastosowaniu filtrów. 

### Krok 7. Obsługa klawiaturą

Sprawdź, czy:

- wszystkie funkcje kalendarza są dostępne z klawiatury,
- widoczny jest fokus,
- kolejność nawigacji jest logiczna. 

### Krok 8. Widok mobilny

Sprawdź, czy:

- kalendarz działa na urządzeniach mobilnych,
- treści nie wymagają poziomego przewijania,
- użytkownik może korzystać zarówno z kalendarza, jak i listy wydarzeń. 

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może skutecznie odnajdywać, przeglądać i filtrować wydarzenia oraz przechodzić do ich szczegółów.

### Częściowo spełnione

Podstawowe funkcje są dostępne, ale występują utrudnienia wpływające na korzystanie z kalendarza.

### Niespełnione

Kalendarz nie umożliwia skutecznego odnajdywania lub przeglądania wydarzeń.

---

## 12. Typowe niezgodności

- kalendarz dostępny wyłącznie jako siatka,
- brak widoku listy wydarzeń,
- przyciski poprzedni/następny bez etykiet,
- wydarzenia oznaczone wyłącznie kolorem,
- brak informacji o aktualnym miesiącu,
- filtry bez etykiet,
- niedostępna obsługa klawiaturą,
- brak widocznego fokusu,
- niedostępne wydarzenia w komórkach kalendarza. 

---

## 13. Dobre praktyki

- zapewnienie widoku listy wydarzeń,
- umożliwienie filtrowania wydarzeń,
- jednoznaczne oznaczanie okresu czasu,
- stosowanie opisowych nazw wydarzeń,
- oznaczanie bieżącej daty,
- stosowanie czytelnych etykiet dla przycisków nawigacji,
- publikowanie instrukcji korzystania z kalendarza. 

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

> Komponent kalendarza nie zapewnia wszystkim użytkownikom równorzędnego dostępu do informacji o wydarzeniach. Część funkcji nawigacyjnych lub filtrujących jest niedostępna z klawiatury albo nie została poprawnie opisana dla technologii wspomagających. Może to utrudniać odnajdywanie i przeglądanie wydarzeń.

---

## 17. Rekomendacje naprawcze

- zapewnić alternatywny widok listy wydarzeń,
- poprawić dostępność przycisków nawigacyjnych,
- oznaczyć wydarzenia w sposób niezależny od koloru,
- poprawić dostępność filtrów i wyszukiwarki,
- zapewnić pełną obsługę klawiaturą,
- poprawić oznaczenia semantyczne kalendarza.

---

## 18. Powiązane testy

- testID-119 Rezerwacja terminu
- testID-122 Mapa dojazdu / Lokalizacja
- testID-123 Strona kontaktowa
- testID-033 Linki
- testID-004 Klawiatura
- testID-028 Nagłówki
- testID-071 Fokus niezakryty
- testID-090 Gesty wskaźnika

---