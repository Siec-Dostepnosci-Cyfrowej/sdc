---
id: test-tekst-alternatywny
title: Scenariusz testu - Tekst alternatywny
sidebar_label: Tekst alternatywny
sidebar_position: 33
description: Scenariusz testu sprawdzającego, czy obrazy przekazujące informacje lub pełniące funkcję interaktywną mają odpowiednie alternatywy tekstowe.
keywords: [cecha dostępności, profil wstępny,tekst alternatywny,kryterium sukcesu, ocena zgodności]
tags: [cecha dostępności, profil wstępny,tekst alternatywny,kryterium sukcesu, ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-033**

---

## 2. Nazwa testu

**Tekst alternatywny**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy każdy obraz przekazujący informacje lub pełniący określoną funkcję ma odpowiednią alternatywę tekstową.

### Co oznacza pojęcie „tekst alternatywny”?

Tekst alternatywny (ang. *alternative text*, *alt text*) to tekstowy odpowiednik obrazu.

Jego zadaniem jest przekazanie osobie, która nie widzi obrazu, tych samych informacji lub tej samej funkcji, które przekazuje obraz.

Najczęściej tekst alternatywny jest umieszczany w atrybucie `alt` elementu `img`.

### Czy każdy obraz powinien mieć tekst alternatywny?

Tak, ale nie każdy obraz powinien mieć **niepusty** tekst alternatywny.

#### Obrazy informacyjne

Powinny mieć tekst alternatywny opisujący ich znaczenie lub funkcję.

Przykłady:

* zdjęcia ilustrujące treść,
* wykresy,
* schematy,
* mapy,
* ikony pełniące funkcję przycisku lub łącza.

#### Obrazy dekoracyjne

Nie powinny być odczytywane przez technologie wspomagające.

Takie obrazy powinny mieć pustą alternatywę tekstową:

```html
alt=""
```

### Kiedy sam tekst alternatywny nie wystarcza?

W przypadku obrazów złożonych, takich jak:

* wykresy,
* schematy,
* mapy,
* plakaty,
* infografiki,

krótki tekst alternatywny może być niewystarczający.

W takiej sytuacji należy zapewnić również pełny opis w sąsiedztwie obrazu lub łącze prowadzące do takiego opisu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **1.1.1 Treści nietekstowe (A)**

### EN 301 549

* **9.1.1.1 Non-text Content**
* **10.1.1.1 Non-text Content**
* **11.1.1.1 Non-text Content**

### Techniki WCAG

* H37
* G94
* G95
* ARIA10

---

## 6. Zastosowanie do treści

Test stosuje się do:

### Obrazów

* zdjęć,
* ilustracji,
* ikon,
* wykresów,
* map,
* schematów,
* infografik.

### Elementów interaktywnych

* obrazów będących łączami,
* obrazów będących przyciskami,
* ikon pełniących funkcję sterującą.

### Elementów osadzonych w treści

* obrazów HTML (`img`),
* obrazów używanych jako elementy funkcjonalne interfejsu.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się obraz, dla którego:

* obraz przekazujący informacje posiada alternatywę tekstową przekazującą równoważne informacje,
* obraz pełniący funkcję posiada alternatywę tekstową opisującą tę funkcję,
* obraz dekoracyjny posiada pustą alternatywę tekstową (`alt=""`),
* dla obrazów złożonych zapewniono pełny opis przekazujący równoważne informacje.

---

## 8. Dlaczego to jest ważne

Osoby niewidome lub słabowidzące nie mogą odczytać informacji zawartych wyłącznie w obrazie.

Bez alternatywy tekstowej:

* nie poznają treści obrazu,
* nie zrozumieją znaczenia wykresu lub schematu,
* mogą nie wiedzieć, do czego prowadzi obraz będący łączem,
* mogą nie rozumieć funkcji przycisku graficznego.

Tekst alternatywny pozwala przekazać te same informacje przy użyciu technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób korzystających z monitorów brajlowskich,
* osób słabowidzących,
* osób korzystających z przeglądarek tekstowych,
* osób, u których obrazy nie zostały załadowane,
* osób korzystających z alternatywnych sposobów prezentacji treści.

---

## 10. Sposób testowania

### Krok 1

Uruchom narzędzie umożliwiające analizę alternatyw tekstowych, np.:

* Web Developer,
* Accessibility Insights,
* Axe DevTools,
* Nu HTML Checker (Image Report).

### Krok 2

Odszukaj wszystkie obrazy występujące na stronie.

### Krok 3

Dla każdego obrazu sprawdź:

* czy posiada alternatywę tekstową,
* czy alternatywa tekstowa odpowiada znaczeniu obrazu,
* czy alternatywa opisuje funkcję obrazu, jeśli obraz jest interaktywny.

### Krok 4

Dla obrazów dekoracyjnych sprawdź, czy posiadają pustą alternatywę tekstową (`alt=""`).

### Krok 5

Dla obrazów złożonych sprawdź, czy istnieje pełny opis przekazujący równoważne informacje.

### Krok 6

Oceń, czy tekst alternatywny:

* przekazuje znaczenie obrazu,
* nie powtarza zbędnie informacji widocznych obok,
* nie zawiera zbędnych zwrotów typu:

  * „Obraz przedstawia...”,
  * „Zdjęcie pokazuje...”,
  * „Grafika przedstawia...”.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie obrazy posiadają odpowiednie alternatywy tekstowe zgodne z ich rolą i znaczeniem.

### Wynik częściowo pozytywny

Występują pojedyncze nieprawidłowości, które nie wpływają znacząco na zrozumienie treści strony.

### Wynik negatywny

Wiele obrazów nie posiada alternatyw tekstowych lub alternatywy nie przekazują równoważnych informacji.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* brak atrybutu `alt`,
* pusty `alt` dla obrazu informacyjnego,
* tekst alternatywny niezgodny z funkcją obrazu,
* opis wyglądu zamiast znaczenia,
* powtarzanie treści znajdującej się bezpośrednio obok obrazu,
* dekoracyjne ikony posiadające zbędny tekst alternatywny,
* brak pełnego opisu dla wykresów lub schematów.

---

## 13. Dobre praktyki

* Opisywanie znaczenia obrazu, a nie jego wyglądu.
* Opisywanie funkcji obrazów interaktywnych.
* Stosowanie pustego `alt=""` dla grafik dekoracyjnych.
* Zapewnianie pełnych opisów dla obrazów złożonych.
* Uwzględnianie tekstów alternatywnych już na etapie tworzenia treści.

---

## 14. Wynik testu

* Zgodne
* Częściowo zgodne
* Niezgodne
* Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Część obrazów informacyjnych nie posiada alternatyw tekstowych lub alternatywy nie przekazują informacji równoważnych treści obrazu. W rezultacie użytkownicy technologii wspomagających nie otrzymują pełnej informacji prezentowanej wizualnie.

lub

> Obrazy pełniące funkcję przycisków lub łączy nie posiadają alternatyw tekstowych opisujących ich przeznaczenie, co utrudnia korzystanie z serwisu osobom niewidomym.

---

## 17. Rekomendacje naprawcze

* Dodać brakujące alternatywy tekstowe.
* Poprawić alternatywy tekstowe nieprzekazujące znaczenia obrazu.
* Wprowadzić pusty `alt=""` dla obrazów dekoracyjnych.
* Zapewnić pełne opisy dla wykresów, schematów i innych obrazów złożonych.
* Wprowadzić procedurę weryfikacji tekstów alternatywnych przed publikacją.

---

## 18. Powiązane testy

* Obrazy tekstu
* Treści multimedialne
* Ikony i elementy graficzne
* Nazwa dostępnościowa elementów interaktywnych
* Wystarczający kontrast
* Zrozumiałość treści
