---
id: test-spojnosc-nawigacji
title: Scenariusz testu - Spójność nawigacji
sidebar_label: Spójność nawigacji
sidebar_position: 74
description: Scenariusz testu sprawdzającego, czy mechanizmy nawigacyjne występujące na wielu stronach są prezentowane w spójnej kolejności i w przewidywalnych miejscach.
keywords: [spójność nawigacji, consistent navigation, menu, nawigacja, dostępność cyfrowa]
tags: [test dostępności, nawigacja, architektura informacji, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-074**

---

## 2. Nazwa testu

**Spójność nawigacji**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy mechanizmy nawigacyjne występujące na wielu stronach są prezentowane w spójnej kolejności i w przewidywalnych miejscach.

### Co oznacza „spójność nawigacji”?

Jeżeli użytkownik nauczył się korzystania z mechanizmu nawigacyjnego na jednej stronie, powinien móc korzystać z niego w podobny sposób na kolejnych stronach serwisu.

Dotyczy to między innymi:

- menu głównego,
- menu lokalnego,
- wyszukiwarki,
- okruszków (breadcrumbs),
- menu stopki,
- paneli nawigacyjnych,
- przełączników języka,
- mechanizmów logowania i wylogowania.

### Co oznacza „ta sama kolejność”?

Jeżeli mechanizm nawigacyjny występuje na wielu stronach, jego elementy powinny być prezentowane w tej samej względnej kolejności.

### Przykład poprawny

Na wszystkich stronach serwisu:

1. Logo
2. Menu główne
3. Wyszukiwarka
4. Treść główna

### Przykład niepoprawny

Na jednej stronie:

1. Menu
2. Wyszukiwarka

a na innej:

1. Wyszukiwarka
2. Menu

bez uzasadnionej potrzeby wynikającej z funkcji strony.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **3.2.3 Spójna nawigacja (AA)**

### EN 301 549

* **9.3.2.3 Consistent Navigation**

### Techniki WCAG

* G61
* G197

---

## 6. Zastosowanie do treści

Test stosuje się do:

- serwisów internetowych,
- portali,
- BIP,
- aplikacji webowych,
- systemów transakcyjnych,
- paneli użytkownika,
- systemów wieloekranowych.

### Wyjątki

Test nie dotyczy stron lub ekranów pełniących odmienną funkcję, dla których zastosowano inną strukturę nawigacji z uzasadnionych powodów.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się rozwiązanie, dla którego:

- mechanizmy nawigacyjne występujące na wielu stronach są umieszczone w przewidywalnych miejscach,
- elementy nawigacyjne są prezentowane w spójnej kolejności,
- użytkownik może korzystać z tych samych mechanizmów nawigacyjnych na różnych stronach,
- kolejność mechanizmów nie zmienia się bez uzasadnionej potrzeby.

---

## 8. Dlaczego to jest ważne

Użytkownicy uczą się sposobu poruszania po serwisie.

Jeżeli nawigacja jest spójna:

- łatwiej odnajdują informacje,
- szybciej wykonują zadania,
- nie muszą ponownie uczyć się obsługi każdej strony,
- mogą przewidywać położenie ważnych funkcji.

Brak spójności zwiększa obciążenie poznawcze i utrudnia orientację.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami uczenia się,
- osób starszych,
- osób korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- wszystkich użytkowników regularnie korzystających z serwisu.

---

## 10. Sposób testowania

### Krok 1

Wybierz co najmniej kilka stron lub ekranów należących do tego samego rozwiązania.

### Krok 2

Zidentyfikuj mechanizmy nawigacyjne występujące na każdej z nich.

Przykłady:

- menu główne,
- wyszukiwarka,
- okruszki,
- przełącznik języka,
- menu użytkownika,
- stopka.

### Krok 3

Porównaj ich rozmieszczenie.

### Krok 4

Sprawdź, czy elementy występują w tej samej kolejności.

### Krok 5

Sprawdź, czy nazwy i struktura głównych sekcji menu pozostają spójne.

### Krok 6

Jeżeli serwis posiada wersję mobilną, porównaj sposób działania nawigacji pomiędzy różnymi ekranami mobilnymi.

### Krok 7

Uruchom czytnik ekranu i sprawdź, czy kolejność głównych obszarów nawigacyjnych jest przewidywalna na różnych stronach.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Mechanizmy nawigacyjne są rozmieszczone i uporządkowane w sposób spójny.

### Wynik częściowo pozytywny

Występują pojedyncze odstępstwa, które nie utrudniają znacząco korzystania z serwisu.

### Wynik negatywny

Nawigacja zmienia się pomiędzy stronami w sposób utrudniający orientację i korzystanie z rozwiązania.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- zmieniające się położenie wyszukiwarki,
- różne kolejności elementów menu,
- zmieniająca się lokalizacja przełącznika języka,
- różne sposoby dostępu do tych samych sekcji serwisu,
- usuwanie lub dodawanie elementów menu bez uzasadnienia,
- niespójna struktura menu pomiędzy stronami.

---

## 13. Dobre praktyki

- Stosowanie wspólnego szablonu stron.
- Zachowanie stałej struktury nagłówka i stopki.
- Zachowanie tej samej kolejności elementów menu.
- Stosowanie jednolitej architektury informacji.
- Projektowanie nawigacji na poziomie całego serwisu, a nie pojedynczych stron.
- Testowanie spójności podczas rozwoju i utrzymania rozwiązania.

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

> Mechanizmy nawigacyjne są rozmieszczone w niespójny sposób na różnych stronach serwisu. Użytkownicy mogą mieć trudności z odnajdywaniem funkcji i orientacją w strukturze rozwiązania.

lub

> Kolejność elementów nawigacyjnych zmienia się pomiędzy stronami bez uzasadnionej potrzeby, co utrudnia korzystanie z serwisu osobom wymagającym przewidywalnego interfejsu.

---

## 17. Rekomendacje naprawcze

- Ujednolicić strukturę nawigacji w całym rozwiązaniu.
- Zachować stałe położenie głównych mechanizmów nawigacyjnych.
- Ujednolicić kolejność elementów menu.
- Zweryfikować szablony stron pod kątem spójności.
- Uwzględnić wymaganie spójnej nawigacji w standardach projektowych organizacji.

---

## 18. Powiązane testy

- Menu nawigacyjne
- Wyszukiwanie w witrynie
- Łącza pomijania
- Punkty orientacyjne
- Spójność identyfikacji
- Odczyt struktury przez czytnik ekranu
- Dostęp z klawiatury

---