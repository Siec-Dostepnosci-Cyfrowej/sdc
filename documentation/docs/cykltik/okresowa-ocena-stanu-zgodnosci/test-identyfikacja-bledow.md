---
id: test-identyfikacja-bledow
title: Karta testu — Identyfikacja błędów
sidebar_label: Identyfikacja błędów
sidebar_position: 44
description: Scenariusz testu sprawdzającego, czy formularz wskazuje błędnie wypełnione pola oraz przekazuje użytkownikowi tekstową informację o występującym błędzie.
keywords: [identyfikacja błędów, błędy formularzy, komunikaty błędów, walidacja, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, błędy, walidacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-044**

---

## 2. Nazwa testu

**Identyfikacja błędów**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy w przypadku automatycznego wykrycia błędu formularz:

- wskazuje pole zawierające błąd,
- informuje użytkownika o wystąpieniu błędu,
- opisuje błąd w postaci tekstu. 

### Co oznacza pojęcie „identyfikacja błędu”?

Identyfikacja błędu polega na poinformowaniu użytkownika:

- że wystąpił błąd,
- którego pola dotyczy błąd,
- na czym polega problem.

Przykłady poprawnych komunikatów:

- „Pole Adres e-mail jest wymagane.”
- „W polu Data urodzenia podano nieprawidłowy format daty.”
- „Hasło nie spełnia wymagań bezpieczeństwa.”

### Czego nie sprawdza ten test?

Test nie ocenia, czy formularz podpowiada sposób poprawienia błędu.

To zagadnienie jest przedmiotem odrębnego testu:

**Sugestie korekty błędów (WCAG 3.3.3).** 

### Czy każdy formularz musi wykrywać błędy?

Nie.

WCAG nie wymaga automatycznego wykrywania błędów.

Jeżeli jednak formularz wykrywa błędy, musi je poprawnie identyfikować i opisywać użytkownikowi. 

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.3.1 Identyfikacja błędów (A)**

### EN 301 549

- **9.3.3.1 Error Identification**
- **10.3.3.1 Error Identification**
- **11.3.3.1 Error Identification**

### Techniki WCAG

#### Techniki wystarczające

- G83
- G84
- G85
- ARIA18
- ARIA19
- ARIA21
- SCR18
- SCR32
- PDF5
- PDF22

#### Techniki wspierające

- G139
- G199



---

## 6. Zastosowanie do treści

Test stosuje się do formularzy, które:

- sprawdzają poprawność danych,
- wykrywają brak wymaganych danych,
- wykrywają nieprawidłowy format danych,
- wykrywają niedozwolone wartości,
- uniemożliwiają wysłanie formularza zawierającego błędy.

W szczególności dotyczy:

- formularzy kontaktowych,
- formularzy rejestracyjnych,
- formularzy logowania,
- formularzy usług publicznych,
- formularzy zakupowych,
- formularzy rekrutacyjnych,
- formularzy elektronicznych.

### Wyjątki

Jeżeli formularz nie wykrywa automatycznie błędów, wynik oznacza się jako:

**Nie dotyczy (ND).** 

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- użytkownik jest informowany o wystąpieniu błędu,
- błędne pole jest wskazane,
- błąd jest opisany tekstem,
- użytkownik może ustalić, którego pola dotyczy problem,
- komunikat jest możliwy do odnalezienia i odczytania przez użytkownika.

---

## 8. Dlaczego to jest ważne

Użytkownik nie może poprawić błędu, jeżeli nie wie:

- że błąd wystąpił,
- gdzie wystąpił,
- czego dotyczy.

Brak identyfikacji błędów powoduje:

- dezorientację,
- wielokrotne nieudane próby wysłania formularza,
- frustrację użytkowników,
- rezygnację z korzystania z usługi.

Prawidłowa identyfikacja błędów jest podstawowym warunkiem skutecznego korzystania z formularzy. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- wszystkich użytkowników korzystających z formularzy.

---

## 10. Sposób testowania

### Krok 1

Odszukaj formularze zawierające automatyczne wykrywanie błędów.

### Krok 2

Zidentyfikuj pola:

- wymagane,
- posiadające określony format danych,
- posiadające ograniczenia wartości.

### Krok 3

Celowo wprowadź błędne dane.

Przykłady:

- pozostaw wymagane pole puste,
- wpisz adres e-mail bez znaku „@”,
- wpisz datę w nieprawidłowym formacie,
- wpisz hasło niespełniające wymagań.

### Krok 4

Spróbuj przesłać formularz lub przejść do kolejnego kroku.

### Krok 5

Sprawdź, czy formularz wykrywa błąd.

### Krok 6

Sprawdź, czy użytkownik otrzymuje komunikat tekstowy.

### Krok 7

Sprawdź, czy komunikat:

- wskazuje błędne pole,
- opisuje charakter błędu,
- jest możliwy do odnalezienia.

### Krok 8

Sprawdź, czy błędne pole jest odpowiednio oznaczone wizualnie lub programowo.

### Krok 9 (opcjonalnie – profil audytowy)

Sprawdź, czy zastosowano mechanizmy wspomagające technologie asystujące, np.:

- `aria-invalid`,
- `aria-describedby`,
- `aria-labelledby`,
- `role="alert"`,
- `aria-live`.



---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Każdy automatycznie wykryty błąd jest wskazany użytkownikowi oraz opisany tekstem.

### Wynik częściowo pozytywny

Błędy są wykrywane, ale część komunikatów jest niepełna lub nie pozwala jednoznacznie określić błędnego pola.

### Wynik negatywny

Formularz wykrywa błędy, lecz nie wskazuje ich użytkownikowi lub nie opisuje ich w sposób zrozumiały.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- oznaczenie błędu wyłącznie kolorem,
- oznaczenie błędu wyłącznie ikoną,
- brak tekstowego opisu błędu,
- komunikat „Wystąpił błąd” bez wskazania pola,
- komunikat „Nieprawidłowe dane” bez wyjaśnienia problemu,
- brak powiązania komunikatu z polem formularza,
- komunikat znajdujący się poza obszarem widocznym dla użytkownika,
- błędne pole nieoznaczone wizualnie ani programowo.

---

## 13. Dobre praktyki

- Umieszczanie komunikatów bezpośrednio przy błędnym polu.
- Wyświetlanie listy błędów na początku formularza.
- Przenoszenie fokusu do listy błędów po nieudanym wysłaniu formularza.
- Oznaczanie błędnych pól zarówno wizualnie, jak i tekstowo.
- Zachowanie wprowadzonych danych w polach niezawierających błędów.
- Stosowanie komunikatów zrozumiałych dla użytkownika.

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

> Formularz wykrywa błędnie wprowadzone dane, jednak nie wskazuje użytkownikowi, którego pola dotyczy problem. Komunikaty błędów nie umożliwiają jednoznacznej identyfikacji błędnych pól formularza.

lub

> Błędy formularza oznaczane są wyłącznie kolorem i nie posiadają tekstowych opisów. Użytkownicy technologii wspomagających nie otrzymują informacji o występujących błędach.

---

## 17. Rekomendacje naprawcze

- Zapewnić tekstowe komunikaty opisujące każdy wykryty błąd.
- Wskazywać użytkownikowi błędne pole formularza.
- Powiązać komunikaty błędów z odpowiednimi polami formularza.
- Nie opierać identyfikacji błędów wyłącznie na kolorze lub ikonach.
- Zapewnić obsługę technologii wspomagających za pomocą odpowiednich mechanizmów ARIA.
- Uwzględnić test identyfikacji błędów w procedurach odbioru formularzy.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Format danych
- Sugestie korekty błędów
- Komunikaty o błędach
- Zapobieganie błędom
- Programowe powiązanie etykiety z polem
---