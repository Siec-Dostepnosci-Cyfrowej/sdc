---
id: test-punkty-orientacyjne
title: Scenariusz testu - Punkty orientacyjne
sidebar_label: Punkty orientacyjne
sidebar_position: 31
description: Scenariusz testu sprawdzającego, czy treści strony zostały rozmieszczone w poprawnie oznaczonych obszarach kluczowych umożliwiających nawigację użytkownikom technologii wspomagających.
keywords: [cecha dostępności, profil wstępny, punkty orientacyjne,kryterium sukcesu, ocena zgodności]
tags: [cecha dostępności, profil wstępny, punkty orientacyjne,kryterium sukcesu, ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-031**

---

## 2. Nazwa testu

**Punkty orientacyjne**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy treści strony zostały rozmieszczone w poprawnie oznaczonych obszarach kluczowych, umożliwiających użytkownikom szybkie zrozumienie struktury strony oraz przemieszczanie się pomiędzy jej głównymi częściami.

### Co oznacza pojęcie „punkt orientacyjny”?

Punkt orientacyjny (ang. *landmark*) to oznaczony programowo obszar strony pełniący określoną funkcję.

Przykładowe punkty orientacyjne:

* treść główna (`main`),
* nagłówek strony (`banner`),
* nawigacja (`navigation`),
* stopka (`contentinfo`),
* wyszukiwarka (`search`),
* treść uzupełniająca (`complementary`),
* region (`region`),
* formularz (`form`).

Technologie wspomagające pozwalają użytkownikom wyświetlić listę punktów orientacyjnych i przejść bezpośrednio do wybranego obszaru strony.

### Co oznacza „obszar kluczowy”?

Obszar kluczowy to punkt orientacyjny najwyższego poziomu organizujący główną strukturę strony.

Przykładami obszarów kluczowych są:

* treść główna,
* nagłówek,
* stopka,
* nawigacja,
* treść uzupełniająca.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **1.3.1 Informacje i relacje (A)**
* **2.4.1 Możliwość pominięcia bloków (A)**

### EN 301 549

* **9.1.3.1 Info and Relationships**

* **9.2.4.1 Bypass Blocks**

* **10.1.3.1 Info and Relationships**

* **10.2.4.1 Bypass Blocks**

* **11.1.3.1 Info and Relationships**

* **11.2.4.1 Bypass Blocks**

### Techniki WCAG

* ARIA11
* H69
* H97
* ARIA Landmarks

---

## 6. Zastosowanie do treści

Test stosuje się do stron wykorzystujących:

* znaczniki sekcjonujące HTML5,
* role ARIA punktów orientacyjnych,
* obszary strukturalne strony.

W szczególności do:

* stron internetowych,
* aplikacji webowych,
* portali informacyjnych,
* serwisów administracji publicznej,
* systemów transakcyjnych.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której:

* istnieje obszar treści głównej (`main`),
* obszary pełniące funkcję punktów orientacyjnych są oznaczone programowo,
* gdy istnieje więcej niż jeden punkt orientacyjny tego samego typu, każdy posiada unikalną nazwę,
* użytkownik może odróżnić poszczególne punkty orientacyjne.

---

## 8. Dlaczego to jest ważne

Punkty orientacyjne porządkują strukturę strony i umożliwiają szybkie przemieszczanie się pomiędzy jej głównymi częściami.

Dzięki nim użytkownik może:

* przejść bezpośrednio do treści głównej,
* pominąć powtarzane elementy,
* przejść do nawigacji,
* odnaleźć wyszukiwarkę,
* przejść do stopki lub treści dodatkowych.

Bez poprawnie oznaczonych punktów orientacyjnych korzystanie z rozbudowanych stron staje się znacznie trudniejsze.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób słabowidzących korzystających z technologii wspomagających,
* osób korzystających wyłącznie z klawiatury,
* osób z ograniczoną sprawnością ruchową,
* osób korzystających z mechanizmów szybkiej nawigacji.

---

## 10. Sposób testowania

### Krok 1

Uruchom narzędzie prezentujące punkty orientacyjne, np.:

* Landmark Navigation via Keyboard or Pop-up,
* Landmarks,
* Accessibility Insights,
* narzędzia czytnika ekranu.

### Krok 2

Wyświetl listę punktów orientacyjnych strony.

### Krok 3

Sprawdź, czy istnieje obszar treści głównej (`main`).

### Krok 4

Sprawdź, czy występujące punkty orientacyjne odpowiadają rzeczywistej strukturze strony.

### Krok 5

Jeżeli występuje więcej niż jeden punkt orientacyjny tego samego typu, sprawdź, czy posiadają unikalne nazwy.

### Krok 6

Sprawdź możliwość przechodzenia pomiędzy punktami orientacyjnymi.

### Krok 7

Zweryfikuj, czy lista punktów orientacyjnych nie zawiera zbędnych lub mylących obszarów.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

* Istnieje obszar treści głównej.
* Punkty orientacyjne są oznaczone programowo.
* Punkty orientacyjne tego samego typu posiadają unikalne nazwy.

### Wynik częściowo pozytywny

* Występują pojedyncze problemy z nazwami lub organizacją punktów orientacyjnych.
* Nie wpływa to znacząco na możliwość nawigacji.

### Wynik negatywny

* Brak obszaru treści głównej.
* Punkty orientacyjne nie są oznaczone programowo.
* Punkty orientacyjne tego samego typu nie mogą zostać rozróżnione.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* brak obszaru `main`,
* wiele punktów orientacyjnych tego samego typu bez nazw,
* powielone nazwy punktów orientacyjnych,
* niewłaściwe użycie ról ARIA,
* oznaczanie zbyt wielu elementów jako regiony,
* punkty orientacyjne nieodpowiadające rzeczywistej strukturze strony.

---

## 13. Dobre praktyki

* Stosowanie natywnych elementów HTML5 (`main`, `nav`, `header`, `footer`, `aside`).
* Ograniczanie liczby punktów orientacyjnych do rzeczywiście potrzebnych.
* Nadawanie jednoznacznych nazw obszarom tego samego typu.
* Zachowanie spójnej struktury w całym serwisie.
* Testowanie struktury punktów orientacyjnych przy użyciu czytników ekranu.

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

> Na stronie nie został zdefiniowany obszar treści głównej (`main`). Użytkownicy technologii wspomagających nie mogą szybko przejść do zasadniczej treści strony.

lub

> Na stronie występują dwa obszary nawigacyjne oznaczone identycznie. Użytkownik nie może rozróżnić ich funkcji podczas korzystania z listy punktów orientacyjnych.

---

## 17. Rekomendacje naprawcze

* Dodać obszar treści głównej (`main`).
* Oznaczyć główne części strony za pomocą odpowiednich punktów orientacyjnych.
* Nadać unikalne nazwy punktom orientacyjnym tego samego typu.
* Ograniczyć stosowanie ról punktów orientacyjnych do rzeczywistych obszarów funkcjonalnych.
* Zweryfikować strukturę strony przy użyciu technologii wspomagających.

---

## 18. Powiązane testy

* Struktura strony
* Nagłówki
* Możliwość pominięcia bloków
* Tytuł strony
* Kolejność fokusu
* Dostęp z klawiatury
