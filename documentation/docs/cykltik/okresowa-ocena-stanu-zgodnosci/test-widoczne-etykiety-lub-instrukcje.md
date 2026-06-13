---
id: test-widoczne-etykiety-lub-instrukcje
title: Karta testu — Widoczne etykiety lub instrukcje
sidebar_label: Widoczne etykiety lub instrukcje
sidebar_position: 39
description: Scenariusz testu sprawdzającego, czy wszystkie pola formularzy mają widoczne etykiety lub instrukcje umożliwiające użytkownikowi zrozumienie celu pola i sposobu jego wypełnienia.
keywords: [etykiety formularzy, instrukcje formularzy, formularze, pola formularzy, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, etykiety, instrukcje, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-039**

---

## 2. Nazwa testu

**Widoczne etykiety lub instrukcje**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy wszystkie pola formularzy posiadają widoczne etykiety lub instrukcje umożliwiające użytkownikowi zrozumienie celu pola oraz sposobu wprowadzenia danych.

### Co oznacza pojęcie „etykieta”?

Etykieta to tekst identyfikujący pole formularza i informujący użytkownika, jakie dane należy w nim wprowadzić.

Przykłady etykiet:

- Imię
- Nazwisko
- Adres e-mail
- Data urodzenia
- Numer telefonu

### Co oznacza pojęcie „instrukcja”?

Instrukcja dostarcza dodatkowych informacji niezbędnych do poprawnego wypełnienia pola.

Przykłady instrukcji:

- „Podaj datę w formacie DD-MM-RRRR”
- „Hasło musi zawierać co najmniej 12 znaków”
- „Wybierz jedną lub więcej odpowiedzi”

### Czy każde pole musi mieć etykietę?

Nie zawsze.

Pole formularza musi mieć:

- etykietę,
- instrukcję,

lub

- etykietę i instrukcję jednocześnie.

Najważniejsze jest, aby użytkownik rozumiał przeznaczenie pola i sposób jego wypełnienia. 

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
- H44
- H71
- H90
- G89
- G184
- G162
- ARIA1
- ARIA9
- ARIA17
- G167

#### Typowe błędy

- F82



---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich aktywnych elementów formularzy zbierających dane, w szczególności:

- pól tekstowych,
- pól wyszukiwania,
- pól liczbowych,
- pól daty,
- pól hasła,
- list rozwijanych,
- pól wyboru,
- przycisków opcji,
- pól tylko do odczytu otrzymujących fokus,
- przycisków zarządzających formularzem (np. Wyślij, Wyczyść, Anuluj).

### Wyjątki

Testu nie stosuje się do:

- elementów wyłączonych,
- nieaktywnych kontrolek formularzy.

Jeżeli na stronie nie występują formularze, wynik oznacza się jako:

**Nie dotyczy (ND)**. 

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- każde pole formularza posiada widoczną etykietę lub instrukcję,
- etykieta lub instrukcja jest widoczna podczas korzystania z pola,
- grupy powiązanych pól posiadają wspólną etykietę lub instrukcję objaśniającą grupę,
- użytkownik może określić przeznaczenie każdego pola formularza.

---

## 8. Dlaczego to jest ważne

Formularze służą do przekazywania informacji, składania wniosków, dokonywania zgłoszeń oraz korzystania z usług.

Jeżeli pole formularza nie posiada etykiety lub instrukcji:

- użytkownik może nie wiedzieć, jakie dane należy wpisać,
- może popełniać błędy,
- może nie ukończyć procesu,
- może zrezygnować z korzystania z usługi.

Problem jest szczególnie dotkliwy dla osób korzystających z technologii wspomagających oraz osób z niepełnosprawnościami poznawczymi. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- wszystkich użytkowników wypełniających formularze.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie formularze występujące na stronie.

### Krok 2

Zidentyfikuj wszystkie pola zbierające dane:

- pola tekstowe,
- pola wyboru,
- przyciski opcji,
- listy rozwijane,
- pola tylko do odczytu otrzymujące fokus.

### Krok 3

Dla każdego pola sprawdź, czy:

- znajduje się przy nim widoczna etykieta,

lub

- znajduje się przy nim widoczna instrukcja,

lub

- etykieta lub instrukcja pojawia się po uzyskaniu fokusu przez pole.

### Krok 4

Sprawdź grupy pól, np.:

- pola wyboru,
- przyciski opcji,
- grupy odpowiedzi.

Zweryfikuj, czy grupa posiada wspólną etykietę lub instrukcję.

### Krok 5

Oceń, czy użytkownik może jednoznacznie określić:

- cel pola,
- rodzaj oczekiwanych danych.

### Krok 6 (opcjonalnie – profil audytowy)

Sprawdź programowe powiązanie etykiety z polem formularza za pomocą:

- `label`,
- `aria-label`,
- `aria-labelledby`,
- `aria-describedby`,
- `title`.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Każde aktywne pole formularza posiada widoczną etykietę lub instrukcję.

### Wynik częściowo pozytywny

Pojedyncze pola nie posiadają etykiet lub instrukcji, ale problem nie uniemożliwia korzystania z formularza.

### Wynik negatywny

Jedno lub więcej pól formularza nie posiada etykiety ani instrukcji, przez co użytkownik nie może określić celu pola lub sposobu jego wypełnienia.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak etykiety pola formularza,
- brak instrukcji dla pola wymagającego określonego formatu danych,
- brak etykiety grupy pól wyboru,
- etykieta widoczna wyłącznie wizualnie, ale niepowiązana z polem,
- etykieta zbyt oddalona od pola,
- etykieta ukrywana po rozpoczęciu wpisywania danych,
- pole formularza wykorzystujące wyłącznie tekst zastępczy (*placeholder*) jako etykietę,
- wieloczęściowe pola (np. numer telefonu) bez wspólnej etykiety.

Na szczególną uwagę zasługują przypadki opisane błędem WCAG F82, dotyczące pól podzielonych na kilka części bez odpowiedniego oznaczenia.

---

## 13. Dobre praktyki

- Stosowanie widocznych etykiet dla wszystkich pól formularza.
- Umieszczanie etykiet bezpośrednio przy polach.
- Stosowanie elementów `fieldset` i `legend` dla grup pól.
- Zapewnianie instrukcji dla pól wymagających określonego formatu danych.
- Zachowanie widoczności etykiety po rozpoczęciu wpisywania danych.
- Zapewnienie zgodności pomiędzy etykietą widoczną a nazwą dostępną pola.

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

> Część pól formularza nie posiada widocznych etykiet ani instrukcji. Użytkownik nie może jednoznacznie określić celu pól oraz rodzaju oczekiwanych danych.

lub

> Grupa pól wyboru nie posiada wspólnej etykiety opisującej znaczenie odpowiedzi. Użytkownicy technologii wspomagających nie otrzymują pełnej informacji o przeznaczeniu grupy pól.

---

## 17. Rekomendacje naprawcze

- Dodać widoczne etykiety do wszystkich pól formularza.
- Zapewnić instrukcje dla pól wymagających określonego formatu danych.
- Oznaczyć grupy pól za pomocą `fieldset` i `legend`.
- Zachować widoczność etykiet podczas korzystania z formularza.
- Zweryfikować formularze pod kątem zgodności z WCAG 3.3.2 przed publikacją.
- Wprowadzić kontrolę jakości formularzy do procesu projektowania i odbioru usług cyfrowych.

---

## 18. Powiązane testy

- Nazwa dostępnościowa pola formularza
- Widoczna etykieta zgodna z nazwą dostępnościową
- Wymagane pola formularza
- Identyfikacja błędów
- Komunikaty o błędach
- Sugestie korekty błędów
- Cel formularza
---