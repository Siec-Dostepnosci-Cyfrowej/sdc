---
id: test-lacza-pomijania
title: Karta testu — Łącza pomijania
sidebar_label: Łącza pomijania
sidebar_position: 34
description: Scenariusz testu sprawdzającego, czy użytkownik może pominąć powtarzalne bloki treści i przejść bezpośrednio do głównej zawartości strony.
keywords: [łącze pomijania, skip link, pomijanie bloków, bypass blocks, klawiatura, dostępność cyfrowa, WCAG]
tags: [test dostępności, nawigacja, klawiatura, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-034**

---

## 2. Nazwa testu

**Łącza pomijania**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik może pominąć powtarzalne bloki treści i przejść bezpośrednio do głównej zawartości strony.

### Co oznacza pojęcie „łącze pomijania”?

Łącze pomijania (ang. *skip link*) to specjalne łącze umożliwiające szybkie przejście do określonego obszaru strony.

Najczęściej spotykanym przykładem jest:

> Przejdź do treści głównej

Po aktywowaniu takiego łącza użytkownik omija:

- menu,
- banery,
- wyszukiwarki,
- inne powtarzalne elementy strony

i przechodzi bezpośrednio do zasadniczej treści.

### Czy łącze pomijania musi być stale widoczne?

Nie.

Łącze pomijania może być ukryte wizualnie do momentu uzyskania fokusu.

Po przejściu do niego klawiszem Tab powinno stać się widoczne i możliwe do użycia.

### Czy punkty orientacyjne mogą zastąpić łącza pomijania?

W niektórych przypadkach punkty orientacyjne (landmarks) zapewniają podobną funkcjonalność.

Jednak WCAG 2.4.1 wymaga zapewnienia mechanizmu umożliwiającego pomijanie powtarzalnych bloków treści. Najczęściej realizowane jest to właśnie za pomocą łączy pomijania.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.1 Możliwość pominięcia bloków (A)**

### EN 301 549

- **9.2.4.1 Bypass Blocks**
- **10.2.4.1 Bypass Blocks**
- **11.2.4.1 Bypass Blocks**

### Techniki WCAG

- G1
- G123
- G124
- ARIA11

---

## 6. Zastosowanie do treści

Test stosuje się do stron zawierających powtarzalne bloki treści, w szczególności:

- menu główne,
- menu boczne,
- nagłówki serwisu,
- wyszukiwarki,
- rozbudowane sekcje nawigacyjne,
- powtarzalne elementy szablonu strony.

Największe znaczenie ma na stronach:

- portali informacyjnych,
- serwisów administracji publicznej,
- aplikacji internetowych,
- systemów transakcyjnych.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której istnieje mechanizm umożliwiający pominięcie powtarzalnych bloków treści i przejście bezpośrednio do głównej zawartości strony.

Mechanizm ten działa poprawnie i prowadzi do właściwego miejsca.

---

## 8. Dlaczego to jest ważne

Osoby korzystające z klawiatury lub czytników ekranu często odwiedzają wiele stron w obrębie tego samego serwisu.

Bez mechanizmu pomijania bloków muszą za każdym razem przechodzić przez:

- menu,
- wyszukiwarki,
- elementy nagłówka,
- inne powtarzalne sekcje.

Łącza pomijania znacząco skracają czas nawigacji i ułatwiają dotarcie do właściwej treści.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością ruchową,
- osób korzystających z alternatywnych urządzeń wejściowych,
- osób regularnie odwiedzających rozbudowane serwisy internetowe.

---

## 10. Sposób testowania

### Krok 1

Otwórz stronę.

### Krok 2

Nie używaj myszy.

### Krok 3

Naciśnij klawisz Tab.

### Krok 4

Sprawdź, czy pojawia się łącze pomijania lub inny mechanizm umożliwiający przejście do treści głównej.

### Krok 5

Aktywuj łącze klawiszem Enter.

### Krok 6

Sprawdź, czy fokus został przeniesiony do treści głównej lub innego wskazanego obszaru.

### Krok 7

Zweryfikuj, czy użytkownik może rozpocząć korzystanie z głównej treści bez konieczności przechodzenia przez powtarzalne elementy strony.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Istnieje skuteczny mechanizm umożliwiający pominięcie powtarzalnych bloków treści.

### Wynik częściowo pozytywny

Mechanizm istnieje, ale działa nieprawidłowo lub prowadzi do niewłaściwego miejsca.

### Wynik negatywny

Brak mechanizmu umożliwiającego pominięcie powtarzalnych bloków treści.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak łącza pomijania,
- łącze pomijania prowadzi do niewłaściwego miejsca,
- łącze pomijania jest niedostępne z klawiatury,
- łącze pomijania nie staje się widoczne po uzyskaniu fokusu,
- aktywacja łącza nie przenosi fokusu do treści głównej,
- łącze prowadzi do elementu, który nie istnieje.

---

## 13. Dobre praktyki

- Umieszczanie łącza pomijania jako pierwszego elementu strony.
- Stosowanie jednoznacznych nazw, np. „Przejdź do treści głównej”.
- Przenoszenie fokusu bezpośrednio do obszaru głównej treści.
- Łączenie mechanizmu skip link z poprawnie oznaczonym obszarem `main`.
- Testowanie działania przy użyciu klawiatury i czytnika ekranu.

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

> Strona nie zapewnia mechanizmu umożliwiającego pominięcie powtarzalnych bloków treści. Użytkownicy korzystający z klawiatury oraz technologii wspomagających muszą każdorazowo przechodzić przez pełną strukturę nawigacyjną przed dotarciem do treści głównej.

lub

> Łącze pomijania jest dostępne, jednak po jego aktywacji fokus nie zostaje przeniesiony do treści głównej, przez co mechanizm nie spełnia swojej funkcji.

---

## 17. Rekomendacje naprawcze

- Dodać mechanizm umożliwiający pomijanie powtarzalnych bloków treści.
- Umieścić łącze pomijania na początku strony.
- Zapewnić poprawne przenoszenie fokusu do treści głównej.
- Powiązać mechanizm z obszarem `main`.
- Zweryfikować działanie przy użyciu klawiatury i czytników ekranu.

---

## 18. Powiązane testy

- Punkty orientacyjne
- Dostęp z klawiatury
- Kolejność fokusu
- Widoczny fokus
- Tytuł strony
- Nagłówki
- Struktura strony
