---
id: test-opisowe-etykiety
title: Karta testu — Opisowe etykiety
sidebar_label: Opisowe etykiety
sidebar_position: 40
description: Scenariusz testu sprawdzającego, czy etykiety i instrukcje formularza w sposób jasny, jednoznaczny i wystarczająco szczegółowy opisują cel pól oraz wymagania dotyczące wprowadzanych danych.
keywords: [etykiety formularzy, instrukcje formularzy, nagłówki i etykiety, formularze, WCAG, dostępność cyfrowa]
tags: [test dostępności, formularze, etykiety, instrukcje, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---



## 1. Identyfikator testu

**testID-040**

---

## 2. Nazwa testu

**Opisowe etykiety**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy etykiety i instrukcje formularza w sposób jasny, jednoznaczny i wystarczająco szczegółowy opisują cel pól formularza oraz oczekiwane dane. 

### Co oznacza pojęcie „opisowa etykieta”?

Opisowa etykieta to taka etykieta lub instrukcja, która pozwala użytkownikowi zrozumieć:

- jakie informacje należy podać,
- czego dotyczy pole,
- jakie dane są oczekiwane.

Przykłady poprawnych etykiet:

- Imię
- Adres e-mail
- Numer PESEL
- Data urodzenia

Przykłady niejednoznacznych etykiet:

- Dane
- Informacja
- Pole 1
- Wpisz tutaj

### Co oznacza „wystarczająco opisowa”?

Etykieta powinna przekazywać dokładnie tyle informacji, ile użytkownik potrzebuje do poprawnego wypełnienia pola.

Zbyt mała ilość informacji może powodować błędy.

Zbyt duża ilość informacji może utrudniać korzystanie z formularza. 

### Czego nie sprawdza ten test?

Test nie ocenia:

- programowego powiązania etykiety z polem,
- komunikatów błędów,
- poprawności nazw dostępnościowych,
- zgodności nazwy dostępnościowej z etykietą.

Przedmiotem oceny jest wyłącznie treść etykiety lub instrukcji. 

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.6 Nagłówki i etykiety (AA)**

### EN 301 549

- **9.2.4.6 Headings and Labels**
- **10.2.4.6 Headings and Labels**
- **11.2.4.6 Headings and Labels**

### Techniki WCAG

#### Techniki wystarczające

- G131 – Zapewnienie opisowych etykiet

#### Techniki wspierające

- ARIA1
- ARIA9
- ARIA17
- G184
- H71
- G167



---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy internetowych,
- formularzy aplikacji webowych,
- formularzy wyszukiwania,
- formularzy logowania,
- formularzy kontaktowych,
- formularzy usług publicznych,
- formularzy zakupowych,
- formularzy rekrutacyjnych.

Obejmuje:

- etykiety pól,
- instrukcje dotyczące pól,
- etykiety grup pól,
- instrukcje dotyczące grup pól,
- etykiety realizowane przez sąsiadujące przyciski.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- każda etykieta lub instrukcja opisuje cel pola formularza,
- użytkownik może określić, jakie dane należy podać,
- etykiety grup pól opisują znaczenie grupy oraz dostępnych odpowiedzi,
- zastosowane nazwy są jednoznaczne i zrozumiałe,
- etykiety nie wprowadzają użytkownika w błąd.

---

## 8. Dlaczego to jest ważne

Formularz może być technicznie poprawny, a mimo to trudny lub niemożliwy do wypełnienia.

Jeżeli etykiety są niejasne:

- użytkownik nie wie, jakie dane należy podać,
- częściej popełnia błędy,
- potrzebuje więcej czasu na realizację zadania,
- może zrezygnować z korzystania z usługi.

Opisowe etykiety zmniejszają liczbę błędów i zwiększają skuteczność korzystania z formularzy. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- osób korzystających z tłumaczenia automatycznego,
- osób słabiej znających język formularza,
- wszystkich użytkowników korzystających z formularzy po raz pierwszy.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie formularze występujące na stronie.

### Krok 2

Dla każdego pola formularza odczytaj:

- etykietę,
- instrukcję,
- etykietę grupy pól,
- instrukcję dotyczącą grupy pól.

### Krok 3

Oceń, czy użytkownik może jednoznacznie określić:

- jakie dane ma podać,
- czego dotyczy pole,
- jakie odpowiedzi może wybrać.

### Krok 4

Sprawdź, czy etykiety nie są zbyt ogólne.

Przykłady potencjalnie problematycznych etykiet:

- Dane
- Informacje
- Numer
- Nazwa
- Pole tekstowe

### Krok 5

Sprawdź grupy pól wyboru i przycisków opcji.

Oceń, czy:

- grupa ma własną etykietę,
- odpowiedzi są zrozumiałe,
- użytkownik rozumie znaczenie wyboru.

### Krok 6

Jeżeli formularz zawiera szczególne wymagania dotyczące danych, sprawdź, czy są one opisane w sposób zrozumiały.

### Krok 7 (opcjonalnie – profil audytowy)

Sprawdź również treści dostarczane za pomocą:

- `title`,
- `aria-label`,
- `aria-labelledby`,
- `aria-describedby`.

Jeżeli są wykorzystywane jako instrukcje lub etykiety, oceń ich trafność i jednoznaczność.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie etykiety i instrukcje jednoznacznie opisują cel pól formularza.

### Wynik częściowo pozytywny

Występują pojedyncze niejednoznaczne etykiety, ale użytkownik może poprawnie wypełnić formularz.

### Wynik negatywny

Jedna lub więcej etykiet nie pozwala określić celu pola lub wymaganych danych.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- etykiety zbyt ogólne,
- etykiety niejednoznaczne,
- kilka różnych pól posiadających identyczne etykiety,
- brak etykiety grupy pól,
- instrukcje nieinformujące o oczekiwanych danych,
- używanie terminologii niezrozumiałej dla użytkowników,
- stosowanie skrótów bez wyjaśnienia znaczenia,
- etykiety opisujące coś innego niż rzeczywiste przeznaczenie pola.

Przykłady:

- „Numer” zamiast „Numer telefonu”
- „Data” zamiast „Data urodzenia”
- „Kod” zamiast „Kod pocztowy”



---

## 13. Dobre praktyki

- Formułowanie etykiet językiem użytkownika.
- Stosowanie jednoznacznych nazw pól.
- Opisywanie przeznaczenia pola, a nie jego typu technicznego.
- Stosowanie krótkich i zwięzłych instrukcji.
- Wyjaśnianie skrótów i specjalistycznych pojęć.
- Testowanie formularzy z udziałem rzeczywistych użytkowników.

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

> Część etykiet formularza nie opisuje jednoznacznie celu pól. Użytkownik nie otrzymuje wystarczających informacji pozwalających określić, jakie dane należy podać.

lub

> Zastosowane etykiety są zbyt ogólne i nie pozwalają jednoznacznie odróżnić poszczególnych pól formularza, co zwiększa ryzyko błędnego wprowadzenia danych.

---

## 17. Rekomendacje naprawcze

- Zastąpić ogólne etykiety nazwami opisującymi oczekiwane dane.
- Doprecyzować instrukcje dotyczące pól formularza.
- Uzupełnić etykiety grup pól.
- Ograniczyć użycie skrótów i terminologii specjalistycznej.
- Zweryfikować formularz z perspektywy użytkownika, który nie zna jego struktury ani celu.
- Wprowadzić przegląd jakości etykiet do procesu projektowania i odbioru formularzy.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Programowe powiązanie etykiety z polem
- Nazwa dostępnościowa pola formularza
- Zgodność nazwy z etykietą
- Wymagane pola formularza
- Format danych
- Identyfikacja błędów
- Sugestie korekty błędów
---