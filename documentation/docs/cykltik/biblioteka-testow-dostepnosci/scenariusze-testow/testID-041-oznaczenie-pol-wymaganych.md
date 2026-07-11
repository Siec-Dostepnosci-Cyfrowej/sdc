---
id: test-oznaczenie-pol-wymaganych
title: Scenariusz testu - Oznaczenie pól wymaganych
sidebar_label: Oznaczenie pól wymaganych
sidebar_position: 41
description: Scenariusz testu sprawdzającego, czy użytkownik jest informowany, które pola formularza są obowiązkowe do wypełnienia.
keywords: [pole wymagane, wymagane pola, formularze, etykiety formularzy, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, pola wymagane, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-041**

---

## 2. Nazwa testu

**Oznaczenie pól wymaganych**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik jest informowany, które pola formularza są obowiązkowe do wypełnienia.

### Co oznacza pojęcie „pole wymagane”?

Pole wymagane to takie pole formularza, którego wypełnienie jest konieczne do ukończenia procesu lub wysłania formularza.

Przykłady:

- adres e-mail wymagany do założenia konta,
- numer PESEL wymagany do złożenia wniosku,
- zgoda na warunki korzystania z usługi.

### Dlaczego oznaczenie pól wymaganych jest ważne?

Użytkownik powinien wiedzieć jeszcze przed rozpoczęciem wypełniania formularza:

- które pola są obowiązkowe,
- które pola są opcjonalne,
- jakie informacje musi przygotować.

Informowanie o obowiązkowości pola dopiero po wystąpieniu błędu jest rozwiązaniem niewystarczającym.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.3.2 Etykiety lub instrukcje (A)**

### EN 301 549

- **9.3.3.2 Labels or Instructions**
- **10.3.3.2 Labels or Instructions**
- **11.3.3.2 Labels or Instructions**

### Techniki WCAG

#### Techniki wystarczające

- G131
- G184
- H90
- H71

#### Techniki wspierające

- ARIA1
- ARIA9
- ARIA17

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich formularzy zawierających pola obowiązkowe, w szczególności:

- formularzy kontaktowych,
- formularzy logowania,
- formularzy rejestracyjnych,
- formularzy usług publicznych,
- formularzy zamówień,
- formularzy zgłoszeniowych,
- formularzy rekrutacyjnych.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- każde pole wymagane jest oznaczone,
- oznaczenie jest widoczne przed rozpoczęciem wypełniania formularza,
- użytkownik może odróżnić pola wymagane od opcjonalnych,
- oznaczenie nie opiera się wyłącznie na kolorze,
- oznaczenie nie opiera się wyłącznie na właściwościach zmysłowych, takich jak położenie, kształt lub rozmiar.

---

## 8. Dlaczego to jest ważne

Brak oznaczenia pól wymaganych powoduje, że użytkownik:

- nie wie, które dane musi podać,
- częściej popełnia błędy,
- traci czas na poprawianie formularza,
- może zrezygnować z realizacji zadania.

Wyraźne oznaczenie pól wymaganych pomaga użytkownikowi przygotować potrzebne informacje i poprawnie wypełnić formularz za pierwszym razem.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób starszych,
- wszystkich użytkowników wypełniających formularze.

---

## 10. Sposób testowania

### Krok 1

Odszukaj formularze zawierające pola obowiązkowe.

### Krok 2

Przeanalizuj etykiety oraz instrukcje formularza.

### Krok 3

Sprawdź, czy każde pole wymagane jest oznaczone.

### Krok 4

Sprawdź, czy użytkownik może rozpoznać oznaczenie jeszcze przed rozpoczęciem wypełniania formularza.

### Krok 5

Spróbuj wysłać formularz bez wypełnienia części pól.

### Krok 6

Na podstawie komunikatów błędów ustal, które pola są faktycznie wymagane.

### Krok 7

Porównaj pola wymagane z oznaczeniami widocznymi w formularzu.

### Krok 8

Sprawdź, czy oznaczenie pól wymaganych:

- nie opiera się wyłącznie na kolorze,
- nie opiera się wyłącznie na położeniu,
- nie opiera się wyłącznie na kształcie lub rozmiarze.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie pola wymagane są jednoznacznie oznaczone.

### Wynik częściowo pozytywny

Pojedyncze pola wymagane nie są oznaczone lub oznaczenie jest niejednoznaczne.

### Wynik negatywny

Pola wymagane nie są oznaczone albo oznaczenie nie pozwala użytkownikowi określić obowiązkowości pola.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak oznaczenia pól wymaganych,
- oznaczenie pól wymaganych wyłącznie kolorem,
- oznaczenie wymaganych pól wyłącznie przez położenie,
- brak wyjaśnienia znaczenia symbolu gwiazdki,
- nieoznaczenie części pól wymaganych,
- pola oznaczone jako opcjonalne, mimo że są wymagane.

---

## 13. Dobre praktyki

- Stosowanie symbolu „*” wraz z objaśnieniem jego znaczenia.
- Informowanie na początku formularza o sposobie oznaczania pól wymaganych.
- Oznaczanie pól wymaganych bezpośrednio przy etykiecie.
- Zachowanie spójnego sposobu oznaczania w całym serwisie.
- Testowanie formularzy przy użyciu technologii wspomagających.

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

> Formularz zawiera pola obowiązkowe, które nie są oznaczone przed rozpoczęciem jego wypełniania. Użytkownik dowiaduje się o konieczności podania danych dopiero po wystąpieniu błędu walidacji.

lub

> Oznaczenie pól wymaganych opiera się wyłącznie na kolorze etykiety, co może być niedostępne dla części użytkowników.

---

## 17. Rekomendacje naprawcze

- Oznaczyć wszystkie pola wymagane.
- Umieścić oznaczenie bezpośrednio przy etykiecie pola.
- Zapewnić wyjaśnienie znaczenia stosowanych oznaczeń.
- Nie opierać oznaczeń wyłącznie na kolorze.
- Zweryfikować zgodność formularzy z WCAG 3.3.2 przed publikacją.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Format danych
- Programowe powiązanie etykiety z polem
- Identyfikacja błędów
- Komunikaty o błędach
- Sugestie korekty błędów
