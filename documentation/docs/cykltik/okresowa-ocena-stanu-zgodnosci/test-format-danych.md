---
id: test-format-danych
title: Karta testu — Format danych
sidebar_label: Format danych
sidebar_position: 42
description: Scenariusz testu sprawdzającego, czy użytkownik otrzymuje informację o wymaganym formacie, typie lub strukturze danych przed rozpoczęciem wypełniania formularza.
keywords: [format danych, formularze, instrukcje formularzy, walidacja, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, format danych, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-042**

---

## 2. Nazwa testu

**Format danych**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik otrzymuje informacje o wymaganym formacie, typie lub strukturze danych przed rozpoczęciem wypełniania formularza.

### Co oznacza pojęcie „format danych”?

Format danych określa sposób, w jaki użytkownik powinien wprowadzić informację do pola formularza.

Przykłady:

- data: DD-MM-RRRR,
- kod pocztowy: NN-NNN,
- numer telefonu: 123 456 789,
- numer PESEL: 11 cyfr,
- hasło: minimum 12 znaków.

### Dlaczego informacja o formacie jest ważna?

Użytkownik powinien wiedzieć przed rozpoczęciem wpisywania danych:

- jakiego rodzaju danych oczekuje formularz,
- jaki format jest wymagany,
- jakie ograniczenia obowiązują.

Informowanie o wymaganym formacie dopiero po wystąpieniu błędu nie jest rozwiązaniem wystarczającym.

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

- G184
- G89
- G131
- H90
- H71

#### Techniki wspierające

- ARIA1
- ARIA9
- ARIA17

---

## 6. Zastosowanie do treści

Test stosuje się do pól formularzy, dla których obowiązują określone wymagania dotyczące danych.

W szczególności:

- pól daty,
- numerów telefonów,
- kodów pocztowych,
- numerów identyfikacyjnych,
- numerów dokumentów,
- adresów e-mail,
- haseł,
- pól liczbowych,
- pól z ograniczoną liczbą znaków.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego użytkownik przed wprowadzeniem danych otrzymuje informację o:

- wymaganym formacie danych,
- wymaganym typie danych,
- wymaganej długości danych, jeżeli ma znaczenie,
- innych regułach wpływających na poprawność danych.

Informacje te są dostępne przed próbą wysłania formularza.

---

## 8. Dlaczego to jest ważne

Brak informacji o formacie danych powoduje, że użytkownik:

- popełnia błędy,
- musi wielokrotnie poprawiać formularz,
- traci czas,
- może zrezygnować z realizacji zadania.

Przekazanie wymagań przed rozpoczęciem wpisywania danych pomaga unikać błędów i zwiększa skuteczność korzystania z formularzy.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- osób korzystających z technologii wspomagających,
- osób słabiej znających język formularza,
- wszystkich użytkowników korzystających z formularzy.

---

## 10. Sposób testowania

### Krok 1

Odszukaj pola formularzy wymagające określonego formatu danych.

### Krok 2

Sprawdź etykiety oraz instrukcje dotyczące tych pól.

### Krok 3

Oceń, czy użytkownik przed rozpoczęciem wpisywania danych otrzymuje informację o wymaganym formacie.

### Krok 4

Sprawdź, czy użytkownik może określić:

- jaki format jest wymagany,
- jaka długość danych jest wymagana,
- jakie ograniczenia obowiązują.

### Krok 5

Spróbuj wpisać dane w nieprawidłowym formacie.

### Krok 6

Jeżeli formularz odrzuca dane, sprawdź, czy odpowiednie informacje były dostępne jeszcze przed ich wprowadzeniem.

### Krok 7

Sprawdź, czy wymagania dotyczące danych nie są przekazywane wyłącznie:

- w komunikatach błędów,
- po wysłaniu formularza,
- po utracie fokusu przez pole.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie wymagania dotyczące formatu danych są przedstawione użytkownikowi przed rozpoczęciem wprowadzania danych.

### Wynik częściowo pozytywny

Część pól zawiera informacje o wymaganym formacie, ale niektóre wymagania są niepełne lub niejednoznaczne.

### Wynik negatywny

Formularz wymaga określonego formatu danych, ale nie informuje użytkownika o tych wymaganiach przed wprowadzeniem danych.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak informacji o formacie daty,
- brak informacji o wymaganej długości hasła,
- brak informacji o wymaganym formacie numeru telefonu,
- wymagania prezentowane wyłącznie w komunikacie błędu,
- informacje prezentowane dopiero po wysłaniu formularza,
- używanie wyłącznie tekstu zastępczego (*placeholder*) do przekazania formatu danych,
- niejednoznaczne instrukcje dotyczące sposobu wprowadzania danych.

---

## 13. Dobre praktyki

- Umieszczanie informacji o formacie bezpośrednio przy polu.
- Informowanie o ograniczeniach jeszcze przed rozpoczęciem wpisywania danych.
- Stosowanie przykładów poprawnych wartości.
- Informowanie o wymaganej długości hasła lub numeru identyfikacyjnego.
- Zachowanie spójnego sposobu prezentowania wymagań w całym serwisie.

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

> Formularz wymaga podania danych w określonym formacie, jednak użytkownik nie otrzymuje informacji o obowiązujących wymaganiach przed rozpoczęciem wprowadzania danych. Informacje te pojawiają się dopiero po wystąpieniu błędu walidacji.

lub

> Pola formularza wymagają określonego formatu danych, lecz etykiety i instrukcje nie zawierają informacji pozwalających użytkownikowi ustalić poprawny sposób wprowadzenia danych.

---

## 17. Rekomendacje naprawcze

- Uzupełnić etykiety lub instrukcje o informacje o wymaganym formacie danych.
- Przedstawić użytkownikowi wymagania przed rozpoczęciem wpisywania danych.
- Dodać przykłady poprawnych wartości.
- Nie przekazywać informacji o formacie wyłącznie za pomocą komunikatów błędów.
- Zweryfikować wszystkie formularze pod kątem zgodności z WCAG 3.3.2.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Programowe powiązanie etykiety z polem
- Identyfikacja błędów
- Komunikaty o błędach
- Sugestie korekty błędów
- Pomoc kontekstowa
