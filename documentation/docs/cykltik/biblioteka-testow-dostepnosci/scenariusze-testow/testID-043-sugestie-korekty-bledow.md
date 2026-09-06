---
id: test-sugestie-korekty-bledow
title: Scenariusz testu - Sugestie korekty błędów
sidebar_label: Sugestie korekty błędów
sidebar_position: 43
description: Scenariusz testu sprawdzającego, czy w przypadku automatycznego wykrycia błędu formularz podaje użytkownikowi wskazówki umożliwiające poprawienie błędnie wprowadzonych danych.
keywords: [ocena zgodności,strona internetowa,cecha dostępności,profil wstępny,sugestie korekty błędów,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,cecha dostępności,profil wstępny,sugestie korekty błędów,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-043**

---

## 2. Nazwa testu

**Sugestie korekty błędów**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy w przypadku automatycznego wykrycia błędu użytkownik otrzymuje wskazówki umożliwiające poprawienie błędu. 

### Co oznacza pojęcie „sugestia korekty błędu”?

Sugestia korekty błędu to informacja pomagająca użytkownikowi zrozumieć:

- dlaczego wystąpił błąd,
- które dane są nieprawidłowe,
- jak należy poprawić dane, aby formularz został zaakceptowany.

Przykłady poprawnych sugestii:

- „Wprowadź adres e-mail w formacie nazwa@domena.pl.”
- „Hasło musi zawierać co najmniej 12 znaków.”
- „Data powinna być podana w formacie DD-MM-RRRR.”
- „Wybierz jedną z dostępnych opcji.”

### Kiedy sugestia nie jest wymagana?

Sugestia nie jest wymagana, gdy:

- nie można ustalić poprawnej wartości,
- nie istnieje sensowna sugestia korekty,
- ujawnienie szczegółów mogłoby zagrozić bezpieczeństwu lub celowi systemu.

Przykładem może być błędne hasło – system nie powinien podpowiadać poprawnej wartości hasła. 

### Czym różni się ten test od testu „Identyfikacja błędów”?

Test **Identyfikacja błędów** sprawdza, czy użytkownik został poinformowany o wystąpieniu błędu.

Test **Sugestie korekty błędów** sprawdza dodatkowo, czy użytkownik otrzymał informacje pomagające poprawić błąd.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.3.3 Sugestie korekty błędów (AA)**

### EN 301 549

- **9.3.3.3 Error Suggestion**
- **10.3.3.3 Error Suggestion**
- **11.3.3.3 Error Suggestion**

### Techniki WCAG

#### Techniki wystarczające

- G83
- G84
- G85
- G177
- ARIA18
- SCR18
- SCR32
- PDF22
- PDF5

#### Techniki wspierające

- G139
- G199


---

## 6. Zastosowanie do treści

Test stosuje się do formularzy, które:

- automatycznie wykrywają błędy,
- sprawdzają poprawność danych,
- wymagają określonego formatu danych,
- wymagają wypełnienia pól obowiązkowych,
- ograniczają dopuszczalne wartości.

W szczególności dotyczy:

- formularzy kontaktowych,
- formularzy logowania,
- formularzy rejestracyjnych,
- formularzy usług publicznych,
- formularzy zakupowych,
- formularzy rekrutacyjnych,
- formularzy elektronicznych.

### Wyjątki

Test nie ma zastosowania, gdy:

- formularz nie wykrywa automatycznie błędów,
- nie istnieje możliwa do podania sugestia korekty,
- podanie sugestii naruszałoby bezpieczeństwo systemu lub użytkownika.

W takich przypadkach wynik oznacza się jako:

**Nie dotyczy (ND)**. 

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- użytkownik jest informowany o wykrytym błędzie,
- komunikat błędu zawiera wskazówki umożliwiające poprawienie błędu,

lub

- komunikat zawiera informacje pozwalające użytkownikowi ustalić, jakie dane należy podać lub poprawić.

Jeżeli możliwe jest wskazanie poprawnego formatu lub poprawnego sposobu wprowadzenia danych, formularz przekazuje taką informację użytkownikowi. 

---

## 8. Dlaczego to jest ważne

Samo poinformowanie o wystąpieniu błędu często nie wystarcza do jego usunięcia.

Komunikaty takie jak:

- „Wystąpił błąd”,
- „Nieprawidłowe dane”,
- „Formularz zawiera błędy”

nie pomagają użytkownikowi zrozumieć problemu.

Sugestie korekty błędów:

- zmniejszają liczbę nieudanych prób,
- skracają czas realizacji zadania,
- ograniczają frustrację użytkownika,
- zwiększają skuteczność korzystania z usług cyfrowych. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- osób korzystających z technologii wspomagających,
- osób słabiej znających język formularza,
- wszystkich użytkowników popełniających błędy podczas wprowadzania danych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj formularze zawierające automatyczne wykrywanie błędów.

### Krok 2

Zidentyfikuj pola, które:

- są wymagane,
- wymagają określonego formatu,
- mają ograniczony zakres dopuszczalnych wartości.

### Krok 3

Celowo wprowadź nieprawidłowe dane.

Przykłady:

- pozostaw puste pole wymagane,
- wpisz adres e-mail bez znaku „@”,
- wpisz datę w nieprawidłowym formacie,
- wpisz hasło niespełniające wymagań,
- wybierz niedozwoloną wartość.

### Krok 4

Sprawdź, czy formularz wykrywa błąd.

### Krok 5

Sprawdź, czy użytkownik otrzymuje komunikat o błędzie.

### Krok 6

Sprawdź, czy komunikat zawiera wskazówki umożliwiające poprawienie błędu.

### Krok 7

Oceń, czy wskazówki:

- są zrozumiałe,
- są wystarczająco szczegółowe,
- pomagają poprawić dane,
- zawierają przykład poprawnego formatu lub poprawnej wartości, jeżeli jest to możliwe.

### Krok 8

Sprawdź, czy brak sugestii jest uzasadniony względami bezpieczeństwa.



---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Dla wszystkich wykrywanych błędów formularz przekazuje użytkownikowi wskazówki umożliwiające poprawienie błędu, o ile jest to możliwe.

### Wynik częściowo pozytywny

Dla części błędów formularz przekazuje sugestie korekty, ale niektóre komunikaty są niepełne lub niewystarczająco szczegółowe.

### Wynik negatywny

Formularz wykrywa błędy, ale nie przekazuje użytkownikowi informacji pozwalających poprawić błędne dane.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- komunikat „Wystąpił błąd” bez dodatkowych informacji,
- komunikat „Nieprawidłowe dane” bez wskazania problemu,
- brak informacji o oczekiwanym formacie danych,
- brak informacji o wymaganej długości hasła,
- komunikat wskazujący błąd bez wyjaśnienia sposobu poprawy,
- komunikat zawierający wyłącznie kod błędu,
- komunikat techniczny niezrozumiały dla użytkownika.

---

## 13. Dobre praktyki

- Wyjaśnianie przyczyny błędu prostym językiem.
- Podawanie przykładu poprawnej wartości.
- Informowanie o wymaganym formacie danych.
- Wskazywanie pola wymagającego poprawy.
- Zachowanie spójnego sposobu prezentowania komunikatów błędów.
- Stosowanie komunikatów zrozumiałych dla użytkownika, a nie dla programisty.

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

> Formularz wykrywa błędnie wprowadzone dane, jednak komunikaty błędów nie zawierają informacji pozwalających użytkownikowi ustalić sposób poprawienia błędu. W rezultacie użytkownik nie otrzymuje wskazówek niezbędnych do skutecznego ukończenia formularza.

lub

> Komunikaty błędów informują o wystąpieniu problemu, lecz nie wskazują poprawnego formatu danych ani sposobu usunięcia błędu.

---

## 17. Rekomendacje naprawcze

- Uzupełnić komunikaty błędów o wskazówki dotyczące poprawienia danych.
- Podawać przykłady poprawnych wartości lub formatów.
- Informować użytkownika o wymaganiach dotyczących danych.
- Stosować komunikaty zrozumiałe dla użytkownika końcowego.
- Zweryfikować wszystkie formularze pod kątem zgodności z WCAG 3.3.3.
- Uwzględnić test sugestii korekty błędów w procedurze odbioru formularzy.

---

## 18. Powiązane testy

- Identyfikacja błędów
- Komunikaty o błędach
- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Format danych
- Programowe powiązanie etykiety z polem
- Pomoc kontekstowa
---