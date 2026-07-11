---
id: test-zapobieganie-bledom
title: Scenariusz testu - Zapobieganie błędom
sidebar_label: Zapobieganie błędom
sidebar_position: 45
description: Scenariusz testu sprawdzającego, czy użytkownik może sprawdzić, poprawić, potwierdzić lub cofnąć operację przed wykonaniem działania powodującego skutki prawne, finansowe lub dotyczącego ważnych danych.
keywords: [zapobieganie błędom, formularze, dane osobowe, transakcje finansowe, potwierdzenie danych, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, błędy, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---



## 1. Identyfikator testu

**testID-045**

---

## 2. Nazwa testu

**Zapobieganie błędom**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik może sprawdzić, poprawić, potwierdzić lub cofnąć operację przed wykonaniem działania mogącego wywołać istotne skutki prawne, finansowe lub dotyczące ważnych danych. 

### Co oznacza „zapobieganie błędom”?

Zapobieganie błędom polega na zastosowaniu mechanizmów chroniących użytkownika przed skutkami pomyłki w sytuacjach, w których błędne działanie może mieć poważne konsekwencje.

Przykłady takich sytuacji:

- złożenie wniosku urzędowego,
- zawarcie umowy,
- wykonanie płatności,
- zakup biletu lub usługi,
- zmiana danych osobowych,
- usunięcie danych użytkownika,
- przesłanie odpowiedzi egzaminacyjnych lub testowych.

### Jakie zabezpieczenia są dopuszczalne?

Wymaganie zostaje spełnione, jeżeli zastosowano co najmniej jeden z następujących mechanizmów:

1. **Odwracalność** – użytkownik może anulować lub cofnąć operację.
2. **Sprawdzanie** – system wykrywa błędy i umożliwia ich poprawienie.
3. **Potwierdzenie** – użytkownik może sprawdzić, potwierdzić i poprawić dane przed ostatecznym wysłaniem. 

### Dlaczego jest to wymaganie poziomu AA?

Niektóre błędy mogą powodować skutki, których użytkownik nie może łatwo odwrócić. W takich sytuacjach sam komunikat o błędzie może być niewystarczający. Konieczne jest zastosowanie dodatkowych zabezpieczeń ograniczających ryzyko pomyłki. 

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.3.4 Zapobieganie błędom (prawne, finansowe, dane) (AA)**

### EN 301 549

- **9.3.3.4 Error Prevention (Legal, Financial, Data)**
- **10.3.3.4 Error Prevention (Legal, Financial, Data)**
- **11.3.3.4 Error Prevention (Legal, Financial, Data)**

### Techniki WCAG

#### Techniki wystarczające

- G98
- G99
- G155
- SCR10

#### Techniki wspierające

- G164
- G168

---

## 6. Zastosowanie do treści

Test stosuje się do formularzy i procesów, które:

- powodują skutki prawne,
- powodują skutki finansowe,
- zmieniają dane użytkownika,
- usuwają dane użytkownika,
- przesyłają odpowiedzi testowe lub egzaminacyjne.

Przykłady:

- e-usługi administracji publicznej,
- formularze podatkowe,
- systemy płatności,
- sklepy internetowe,
- systemy bankowe,
- systemy rekrutacyjne,
- systemy egzaminacyjne,
- portale klienta umożliwiające zmianę danych.

### Wyjątki

Test nie ma zastosowania do formularzy, które:

- nie powodują skutków prawnych,
- nie powodują skutków finansowych,
- nie zmieniają ani nie usuwają danych użytkownika,
- nie służą do przesyłania odpowiedzi egzaminacyjnych lub testowych.

W takich przypadkach wynik oznacza się jako:

**Nie dotyczy (ND).** 

---

## 7. Oczekiwany wynik

Za zgodny uznaje się proces, dla którego spełniony jest co najmniej jeden z warunków:

- użytkownik może cofnąć operację po jej wykonaniu,

lub

- system sprawdza dane przed ich ostatecznym przesłaniem i umożliwia poprawienie błędów,

lub

- użytkownik może przejrzeć, potwierdzić i poprawić dane przed ich ostatecznym przesłaniem.

---

## 8. Dlaczego to jest ważne

Pomyłki podczas wypełniania formularzy zdarzają się wszystkim użytkownikom.

Skutki błędów mogą jednak być szczególnie dotkliwe, gdy dotyczą:

- pieniędzy,
- zobowiązań prawnych,
- danych osobowych,
- wyników egzaminów lub testów.

Możliwość sprawdzenia lub cofnięcia operacji zmniejsza ryzyko nieodwracalnych konsekwencji wynikających z przypadkowej pomyłki.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób z trudnościami pamięci krótkotrwałej,
- osób korzystających z technologii wspomagających,
- osób starszych,
- wszystkich użytkowników wykonujących działania o istotnych skutkach.

---

## 10. Sposób testowania

### Krok 1

Ustal, czy badany formularz lub proces:

- powoduje skutki prawne,
- powoduje skutki finansowe,
- zmienia dane użytkownika,
- usuwa dane użytkownika,
- przesyła odpowiedzi egzaminacyjne lub testowe.

Jeżeli nie, zakończ test wynikiem **Nie dotyczy (ND)**.

### Krok 2

Wypełnij formularz wymaganymi danymi.

### Krok 3

Celowo wprowadź jedną lub więcej nieprawidłowych informacji.

### Krok 4

Przejdź do etapu przesłania danych.

### Krok 5

Sprawdź, czy spełniony jest co najmniej jeden z warunków:

#### Wariant A – Odwracalność

Użytkownik może:

- anulować operację,
- wycofać przesłanie,
- cofnąć skutki działania.

#### Wariant B – Sprawdzanie

System:

- analizuje dane,
- wykrywa błędy,
- umożliwia ich poprawienie przed zakończeniem procesu.

#### Wariant C – Potwierdzenie

Przed ostatecznym przesłaniem użytkownik może:

- przejrzeć dane,
- potwierdzić poprawność danych,
- wrócić do wcześniejszego kroku,
- poprawić dane.

### Krok 6

Udokumentuj zastosowany mechanizm zabezpieczający.

### Krok 7 (opcjonalnie – profil audytowy)

Przeanalizuj cały proces użytkownika, zwracając uwagę na:

- możliwość cofnięcia operacji po jej wykonaniu,
- możliwość poprawy danych po przejściu między etapami procesu,
- działanie mechanizmu potwierdzenia przy użyciu klawiatury i technologii wspomagających.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Spełniony jest co najmniej jeden z warunków:

- odwracalność,
- sprawdzanie,
- potwierdzenie.

### Wynik częściowo pozytywny

Mechanizmy ochronne istnieją, ale nie obejmują wszystkich działań o istotnych skutkach lub są trudne do wykorzystania.

### Wynik negatywny

Użytkownik nie może:

- cofnąć operacji,
- poprawić danych,
- sprawdzić danych przed ostatecznym przesłaniem,

a wykonana operacja może powodować skutki prawne, finansowe lub dotyczące ważnych danych.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak możliwości sprawdzenia danych przed wysłaniem,
- brak możliwości poprawienia danych po przejściu do kolejnego kroku,
- natychmiastowe wykonanie operacji finansowej bez potwierdzenia,
- usunięcie danych bez możliwości anulowania operacji,
- brak mechanizmu cofnięcia zmian,
- przesłanie odpowiedzi egzaminacyjnych bez możliwości weryfikacji,
- wieloetapowy proces bez ekranu podsumowania danych.

---

## 13. Dobre praktyki

- Stosowanie ekranów podsumowania przed ostatecznym wysłaniem danych.
- Umożliwienie powrotu do poprzednich kroków formularza.
- Wprowadzenie okresu umożliwiającego anulowanie operacji.
- Wyraźne oznaczanie działań nieodwracalnych.
- Wyświetlanie pełnego zestawu danych przed ich zatwierdzeniem.
- Zachowanie spójnego mechanizmu potwierdzania w całym serwisie.

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

> Proces umożliwia wykonanie operacji wywołującej skutki prawne lub finansowe bez zapewnienia możliwości sprawdzenia, poprawienia lub cofnięcia danych przed jej ostatecznym zatwierdzeniem.

lub

> Formularz umożliwia trwałą zmianę danych użytkownika bez mechanizmu potwierdzenia lub możliwości korekty danych przed zapisaniem zmian.

---

## 17. Rekomendacje naprawcze

- Wprowadzić ekran podsumowania danych przed ich ostatecznym przesłaniem.
- Zapewnić możliwość powrotu do wcześniejszych kroków procesu.
- Wprowadzić mechanizm cofania lub anulowania operacji.
- Zapewnić walidację danych przed ich ostatecznym zapisaniem.
- Przeanalizować wszystkie procesy powodujące skutki prawne, finansowe lub dotyczące danych pod kątem zgodności z WCAG 3.3.4.
- Uwzględnić test zapobiegania błędom w procedurach odbioru usług cyfrowych.

---

## 18. Powiązane testy

- Identyfikacja błędów
- Sugestie korekty błędów
- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Format danych
- Potwierdzenie operacji
- Komunikaty o błędach
---