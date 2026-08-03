---
id: test-wyglad-fokusu
title: Scenariusz testu - Wygląd fokusu
sidebar_label: Wygląd fokusu
sidebar_position: 28
description: Scenariusz testu sprawdzającego, czy wskaźnik fokusu jest wystarczająco widoczny i wyróżnia się zgodnie z wymaganiami WCAG 2.2.
keywords: [cecha dostępności, profil rozszerzony, wygląd fokusu,wskaźnik fokusu,kryterium sukcesu, ocena zgodności]
tags: [cecha dostępności, profil rozszerzony, wygląd fokusu,wskaźnik fokusu,kryterium sukcesu, ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-028**

---

## 2. Nazwa testu

**Wygląd fokusu**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy wskaźnik fokusu jest wystarczająco wyraźny, łatwy do zauważenia i odpowiednio odróżnia element posiadający fokus od jego zwykłego wyglądu.

### Co oznacza pojęcie „wygląd fokusu”?

Wygląd fokusu to sposób wizualnego oznaczenia elementu, który aktualnie posiada fokus.

W odróżnieniu od testu „Widoczny fokus”, który sprawdza jedynie obecność wskaźnika fokusu, ten test ocenia jego jakość.

Badamy między innymi:

- wielkość wskaźnika,
- kontrast wskaźnika,
- stopień wyróżnienia,
- łatwość zauważenia przez użytkownika.

---

## 5. Mapowanie do standardów

### WCAG 2.2

- **2.4.11 Focus Appearance (Minimum) (AA)**

### EN 301 549

Brak odpowiednika w wersjach normy opartych na WCAG 2.1.

### Status

**Wymaganie dodatkowe (profil rozszerzony).**

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów interaktywnych otrzymujących fokus, w szczególności:

- łączy,
- przycisków,
- pól formularzy,
- list rozwijanych,
- kart,
- menu,
- komponentów niestandardowych.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się wskaźnik fokusu, który:

- jest wyraźnie widoczny,
- posiada kontrast co najmniej 3:1 względem sąsiadujących kolorów,
- zajmuje powierzchnię określoną przez WCAG 2.2,
- powoduje wyraźną zmianę wyglądu elementu po otrzymaniu fokusu.

---

## 8. Dlaczego to jest ważne

Wiele stron posiada formalnie widoczny fokus, który jednak jest tak słabo widoczny, że użytkownicy mają trudność z jego odnalezieniem.

Problem szczególnie dotyka:

- osób słabowidzących,
- osób korzystających z dużego powiększenia,
- osób starszych,
- osób z trudnościami koncentracji.

Dobrze zaprojektowany wskaźnik fokusu pozwala szybko odnaleźć aktywny element i zmniejsza ryzyko błędów podczas korzystania z klawiatury.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób słabowidzących,
- osób korzystających z powiększenia ekranu,
- osób starszych,
- osób z niepełnosprawnościami poznawczymi,
- wszystkich użytkowników korzystających z klawiatury.

---

## 10. Sposób testowania

### Krok 1

Przemieszczaj fokus po stronie klawiszem Tab.

### Krok 2

Dla każdego elementu sprawdź, czy wskaźnik fokusu jest łatwy do zauważenia.

### Krok 3

Porównaj wygląd elementu przed i po uzyskaniu fokusu.

### Krok 4

Sprawdź widoczność fokusu:

- na jasnych tłach,
- na ciemnych tłach,
- na obrazach,
- w komponentach niestandardowych.

### Krok 5

Jeżeli prowadzona jest ocena ekspercka, zweryfikuj zgodność z wymaganiami liczbowymi WCAG 2.2 dotyczącymi kontrastu i powierzchni wskaźnika fokusu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wskaźnik fokusu jest wyraźny, łatwy do zauważenia i spełnia wymagania WCAG 2.2.

### Wynik częściowo pozytywny

Wskaźnik jest widoczny, ale nie spełnia części wymagań jakościowych WCAG 2.2.

### Wynik negatywny

Wskaźnik fokusu jest trudny do zauważenia lub nie spełnia wymagań WCAG 2.2.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- bardzo cienkie obramowanie,
- niski kontrast wskaźnika,
- minimalna zmiana koloru niezauważalna dla użytkownika,
- fokus widoczny tylko na części elementu,
- brak wyraźnej różnicy między stanem normalnym a stanem fokusu.

---

## 13. Dobre praktyki

- Stosowanie obramowania o grubości co najmniej 2 px.
- Zachowanie wysokiego kontrastu.
- Stosowanie dodatkowego podświetlenia lub cienia.
- Zachowanie spójnego wyglądu fokusu w całym serwisie.
- Testowanie z użytkownikami słabowidzącymi.

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

> Wskaźnik fokusu jest formalnie obecny, jednak jego kontrast i powierzchnia nie spełniają wymagań WCAG 2.2. Użytkownik może mieć trudność z szybkim zlokalizowaniem aktywnego elementu.

---

## 17. Rekomendacje naprawcze

- Zwiększyć kontrast wskaźnika fokusu.
- Zwiększyć powierzchnię oznaczenia fokusu.
- Wprowadzić bardziej wyraźne wyróżnienie stanu aktywnego.
- Zweryfikować zgodność z wymaganiami WCAG 2.2.

---

## 18. Powiązane testy

- Widoczny fokus
- Kolejność fokusu
- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kontrast elementów interaktywnych
