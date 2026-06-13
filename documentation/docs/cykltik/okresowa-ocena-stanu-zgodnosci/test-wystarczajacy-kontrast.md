---
id: test-wystarczajacy-kontrast
title: Karta testu — Wystarczający kontrast
sidebar_label: Wystarczający kontrast
sidebar_position: 32
description: Scenariusz testu sprawdzającego, czy kontrast tekstu, elementów interfejsu użytkownika oraz istotnych elementów graficznych jest wystarczający do ich odczytania i rozpoznania.
keywords: [kontrast, contrast, tekst, elementy interfejsu, WCAG, dostępność cyfrowa]
tags: [test dostępności, kontrast, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
--------------------


## 1. Identyfikator testu

**testID-032**

---

## 2. Nazwa testu

**Wystarczający kontrast**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy kontrast pomiędzy tekstem i tłem oraz pomiędzy istotnymi elementami interfejsu lub grafiki a ich otoczeniem jest wystarczający do ich odczytania i rozpoznania.

### Co oznacza pojęcie „kontrast”?

Kontrast określa różnicę jasności pomiędzy dwoma sąsiadującymi elementami, np.:

- tekstem i jego tłem,
- ikoną i jej tłem,
- obramowaniem pola formularza i tłem strony.

WCAG określa minimalne wartości kontrastu za pomocą współczynnika kontrastu, np. 4,5:1 lub 3:1.

Im wyższa wartość współczynnika, tym łatwiej dostrzec i odczytać element.

### Jakie elementy obejmuje test?

Test obejmuje:

- tekst,
- obrazy tekstu,
- przyciski,
- pola formularzy,
- łącza,
- ikony,
- wskaźniki stanu,
- istotne części grafik niezbędne do zrozumienia informacji.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.4.3 Kontrast minimalny (AA)**
- **1.4.11 Kontrast elementów nietekstowych (AA)**

### EN 301 549

- **9.1.4.3 Contrast (Minimum)**
- **9.1.4.11 Non-text Contrast**
- **10.1.4.3 Contrast (Minimum)**
- **10.1.4.11 Non-text Contrast**
- **11.1.4.3 Contrast (Minimum)**
- **11.1.4.11 Non-text Contrast**

### Techniki WCAG

- G18
- G145
- G174

---

## 6. Zastosowanie do treści

Test stosuje się do:

### Tekstu

- tekstu podstawowego,
- tekstów pomocniczych,
- etykiet formularzy,
- komunikatów,
- tekstów w menu,
- tekstów pojawiających się po najechaniu kursorem lub uzyskaniu fokusu.

### Elementów nietekstowych

- przycisków,
- pól formularzy,
- ikon,
- kontrolek interfejsu,
- wskaźników stanu,
- istotnych elementów wykresów i diagramów.

### Wyjątki

Test nie dotyczy:

- logotypów,
- elementów nieaktywnych (wyłączonych),
- dekoracyjnych elementów graficznych nieprzekazujących informacji.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się element, dla którego:

- współczynnik kontrastu zwykłego tekstu względem tła wynosi co najmniej **4,5:1**,
- współczynnik kontrastu dużego tekstu względem tła wynosi co najmniej **3:1**,
- współczynnik kontrastu istotnych elementów nietekstowych względem otoczenia wynosi co najmniej **3:1**.

---

## 8. Dlaczego to jest ważne

Niewystarczający kontrast może powodować, że tekst lub elementy interfejsu stają się trudne lub niemożliwe do zauważenia.

Problem ten dotyczy szczególnie osób:

- słabowidzących,
- starszych,
- z zaburzeniami widzenia kolorów,
- korzystających z urządzeń mobilnych w trudnych warunkach oświetleniowych.

Odpowiedni kontrast zwiększa czytelność i zmniejsza wysiłek potrzebny do korzystania z serwisu.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób słabowidzących,
- osób z ograniczonym rozpoznawaniem kolorów,
- osób nierozróżniających niektórych kolorów,
- osób starszych,
- osób korzystających z powiększenia ekranu,
- osób korzystających z trybów wysokiego kontrastu.

---

## 10. Sposób testowania

### Krok 1

Uruchom narzędzie do badania kontrastu, np.:

- WCAG Color Contrast Checker,
- Colour Contrast Analyser,
- Accessibility Insights,
- Axe DevTools.

### Krok 2

Sprawdź kontrast tekstów względem ich tła.

### Krok 3

Sprawdź kontrast:

- przycisków,
- ikon,
- pól formularzy,
- wskaźników stanu,
- elementów aktywnych.

### Krok 4

Sprawdź elementy widoczne dopiero po:

- najechaniu kursorem,
- uzyskaniu fokusu,
- rozwinięciu menu,
- otwarciu okna dialogowego.

### Krok 5

Zweryfikuj uzyskane wartości współczynnika kontrastu.

**Uwaga:*- Wartości nie zaokrągla się w górę. Współczynnik 4,46:1 nie spełnia wymagania 4,5:1.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie badane elementy spełniają wymagania dotyczące kontrastu.

### Wynik częściowo pozytywny

Występują pojedyncze przypadki niewystarczającego kontrastu dotyczące mniej istotnych elementów.

### Wynik negatywny

Wiele elementów nie spełnia wymagań dotyczących kontrastu lub problem dotyczy istotnych treści i funkcji.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- jasnoszary tekst na białym tle,
- jasne etykiety formularzy,
- ikony o zbyt niskim kontraście,
- przyciski z niewidocznym obramowaniem,
- komunikaty błędów o niewystarczającym kontraście,
- elementy menu rozwijanego trudne do odczytania.

---

## 13. Dobre praktyki

- Projektowanie z zapasem ponad minimalne wymagania WCAG.
- Sprawdzanie kontrastu już na etapie projektowania graficznego.
- Stosowanie kontrastu wyższego niż wymagane minimum dla kluczowych treści.
- Uwzględnianie trybów wysokiego kontrastu systemu operacyjnego.
- Regularne testowanie nowych komponentów i szablonów.

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

> Część tekstów oraz elementów interfejsu użytkownika nie spełnia minimalnych wymagań dotyczących kontrastu. Współczynnik kontrastu pomiędzy tekstem a tłem jest niższy niż wymagane 4,5:1, co utrudnia odczytanie treści osobom słabowidzącym.

lub

> Ikony i obramowania pól formularzy posiadają kontrast niższy niż wymagane 3:1, przez co są trudne do rozpoznania przez część użytkowników.

---

## 17. Rekomendacje naprawcze

- Zwiększyć kontrast tekstu względem tła.
- Zwiększyć kontrast elementów interfejsu użytkownika.
- Zmodyfikować kolory ikon, obramowań i wskaźników stanu.
- Zweryfikować kontrast wszystkich nowych komponentów przed publikacją.
- Wprowadzić kontrolę kontrastu do procesu projektowania i odbioru serwisu.

---

## 18. Powiązane testy

- Użycie koloru
- Widoczny fokus
- Wygląd fokusu
- Obrazy tekstu
- Komunikaty o błędach
- Etykiety formularzy
- Czytelność treści
