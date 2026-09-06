---
id: test-kolejnosc-fokusu
title: Scenariusz testu - Kolejność fokusu
sidebar_label: Kolejność fokusu
sidebar_position: 26
description: Scenariusz testu sprawdzającego, czy fokus podczas nawigacji klawiaturą przemieszcza się w logicznej i przewidywalnej kolejności.
keywords: [cecha dostępności, profil wstępny, kolejność fokusu, kryterium sukcesu, ocena zgodności]
tags: [cecha dostępności, profil wstępny, kolejność fokusu, kryterium sukcesu, ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-026**

---

## 2. Nazwa testu

**Kolejność fokusu**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy podczas nawigacji klawiaturą fokus przemieszcza się pomiędzy elementami interaktywnymi w logicznej i przewidywalnej kolejności.

### Co oznacza pojęcie „fokus”?

Fokus (ang. *focus*) oznacza element strony, który jest aktualnie aktywny i gotowy do odbierania poleceń z klawiatury.

Jeżeli użytkownik naciśnie klawisz:

* Enter,
* Spacja,
* Strzałki,
* inne klawisze sterujące,

to działanie zostanie wykonane właśnie na elemencie posiadającym fokus.

### Co oznacza pojęcie „wskaźnik fokusu”?

Wskaźnik fokusu to widoczne oznaczenie elementu, który aktualnie posiada fokus.

Może mieć postać:

* obramowania,
* podświetlenia,
* zmiany koloru,
* innego wyróżnienia wizualnego.

Wskaźnik fokusu pozwala użytkownikowi określić, gdzie aktualnie znajduje się fokus.

**Uwaga:** Widoczność wskaźnika fokusu jest przedmiotem odrębnego testu „Widoczny fokus”. W tym teście oceniamy wyłącznie kolejność przemieszczania się fokusu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **2.4.3 Kolejność fokusu (A)**

### EN 301 549

* **9.2.4.3 Focus Order**
* **10.2.4.3 Focus Order**
* **11.2.4.3 Focus Order**

### Techniki WCAG

* G59
* C27

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich stron i aplikacji internetowych zawierających elementy interaktywne, w szczególności:

* łącza,
* przyciski,
* formularze,
* menu,
* wyszukiwarki,
* listy rozwijane,
* zakładki,
* harmonijki,
* okna dialogowe,
* odtwarzacze multimedialne.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której kolejność przemieszczania fokusu zachowuje znaczenie i funkcjonalność treści.

Podczas nawigacji klawiaturą użytkownik może przewidzieć, który element otrzyma fokus jako następny.

---

## 8. Dlaczego to jest ważne

Użytkownicy korzystający z klawiatury poznają stronę w kolejności wyznaczanej przez przemieszczanie fokusu.

Jeżeli fokus przeskakuje w nieprzewidywalny sposób:

* użytkownik może utracić orientację,
* może pominąć istotne funkcje,
* może mieć trudności ze zrozumieniem struktury strony,
* wykonywanie zadań staje się wolniejsze i bardziej podatne na błędy.

Logiczna kolejność fokusu wspiera zarówno nawigację, jak i zrozumienie treści.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób korzystających wyłącznie z klawiatury,
* osób z ograniczoną sprawnością ruchową,
* osób z niepełnosprawnościami poznawczymi,
* osób korzystających z technologii wspomagających wykorzystujących mechanizmy klawiaturowe.

---

## 10. Sposób testowania

### Krok 1

Odłóż mysz.

### Krok 2

Rozpocznij nawigację po stronie przy użyciu klawisza Tab.

### Krok 3

Obserwuj kolejność przemieszczania się fokusu.

### Krok 4

Sprawdź, czy fokus przemieszcza się zgodnie z logicznym układem strony.

Przykładowo:

* od góry do dołu,
* od lewej do prawej,
* zgodnie z kolejnością odczytu treści.

### Krok 5

Sprawdź, czy fokus nie przeskakuje pomiędzy odległymi obszarami strony bez uzasadnienia.

### Krok 6

Sprawdź działanie formularzy, menu, wyszukiwarek oraz innych komponentów interaktywnych.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Kolejność przemieszczania fokusu jest logiczna i nie utrudnia korzystania ze strony.

### Wynik częściowo pozytywny

Występują pojedyncze odstępstwa od logicznej kolejności, ale nie uniemożliwiają wykonania głównych zadań.

### Wynik negatywny

Kolejność fokusu jest nielogiczna i powoduje utratę orientacji lub utrudnia korzystanie z funkcji strony.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* fokus przeskakuje pomiędzy odległymi obszarami strony,
* kolejność tabulacji nie odpowiada kolejności treści,
* elementy formularza otrzymują fokus w niewłaściwej kolejności,
* ukryte elementy otrzymują fokus,
* elementy wizualnie znajdujące się obok siebie otrzymują fokus w odległych momentach sekwencji.

---

## 13. Dobre praktyki

* Zachowanie zgodności kolejności fokusu z kolejnością prezentacji treści.
* Unikanie dodatnich wartości tabindex.
* Projektowanie formularzy zgodnie z naturalną kolejnością odczytu.
* Testowanie wszystkich nowych komponentów przy użyciu klawisza Tab.

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

> Kolejność przemieszczania fokusu nie odpowiada logicznej kolejności treści strony. Podczas nawigacji klawiaturą fokus przeskakuje pomiędzy odległymi sekcjami, co utrudnia orientację i korzystanie z funkcji serwisu.

lub

> Pola formularza otrzymują fokus w kolejności niezgodnej z kolejnością ich prezentacji wizualnej, co utrudnia wypełnienie formularza przy użyciu klawiatury.

---

## 17. Rekomendacje naprawcze

* Zapewnić logiczną kolejność fokusu odpowiadającą strukturze strony.
* Usunąć nieuzasadnione wartości tabindex.
* Dostosować kolejność elementów w kodzie do kolejności prezentacji treści.
* Zweryfikować kolejność fokusu podczas odbiorów i testów regresyjnych.

---

## 18. Powiązane testy

* Dostęp z klawiatury
* Pułapka klawiaturowa
* Widoczny fokus
* Zmiana po uzyskaniu fokusu
* Formularze
* Menu nawigacyjne
