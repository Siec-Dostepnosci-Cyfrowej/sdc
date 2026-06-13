---
id: test-tytul-strony
title: Karta testu — Tytuł strony
sidebar_label: Tytuł strony
sidebar_position: 20
description: Scenariusz testu sprawdzającego, czy strona ma zwięzły, unikalny i opisowy tytuł oraz czy osadzone ramki mają zrozumiałe tytuły.
keywords: [tytuł strony, title, iframe, ramka, dostępność cyfrowa, WCAG]
tags: [test dostępności, tytuł strony, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-020**


## Nazwa testu

Tytuł strony

## Profil stosowania testu

- profil podstawowy,
- profil rozszerzony,
- audyt zgodności.

## Opis testu

Sprawdzamy, czy każda strona ma unikalny tytuł, który zwięźle opisuje jej cel lub temat oraz określa jej miejsce w zestawie stron.

Sprawdzamy również, czy każda ramka wbudowana (`iframe`) oraz każda zwykła ramka (`frame`) ma unikalny tytuł lub nazwę, która zwięźle opisuje jej cel lub temat.

## Mapowanie do standardów

- WCAG 2.2: 2.4.2 Tytuły stron (A).
- WCAG 2.2: 4.1.2 Nazwa, rola, wartość (A), w zakresie nazw ramek i komponentów interfejsu.
- EN 301 549: wymagania odpowiadające wskazanym kryteriom WCAG.

## Zastosowanie do treści

Test stosuje się do:

- każdej strony internetowej,
- każdej ramki wbudowanej (`iframe`),
- każdej zwykłej ramki (`frame`),
- każdego osadzonego widżetu, obiektu albo medium, jeżeli wymaga własnej nazwy lub opisu.

## Oczekiwany wynik

Wynik jest pozytywny, jeżeli:

- każda strona ma tytuł określony w znaczniku `title`,
- tytuł strony zwięźle opisuje jej treść, cel lub przeznaczenie,
- tytuł strony jest unikalny w zestawie stron,
- strona ma tylko jeden tytuł,
- każda ramka wbudowana (`iframe`) ma unikalny i zrozumiały tytuł,
- każda ramka (`frame`), jeżeli występuje, ma unikalny i zrozumiały tytuł.

## Dlaczego to jest ważne

Tytuł strony jest zwykle pierwszą informacją, którą użytkownik widzi lub słyszy po otwarciu strony. Pomaga zrozumieć, gdzie użytkownik się znajduje, jaki jest temat strony oraz czy jest to właściwa strona.

Tytuły stron są wykorzystywane przez przeglądarki, wyszukiwarki, zakładki, historię przeglądania oraz technologie wspomagające. Czytniki ekranu często odczytują tytuł strony jako pierwszą informację o stronie.

Zwięzły, opisowy i unikalny tytuł ułatwia orientację, przełączanie się między kartami przeglądarki oraz odnajdywanie właściwej treści.

## Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących korzystających z powiększenia ekranu,
- osób korzystających z klawiatury lub sterowania głosem,
- osób korzystających z wielu kart lub okien przeglądarki,
- wszystkich użytkowników wyszukujących i rozpoznających treści po tytule.

## Sposób testowania

1. Otwórz ocenianą stronę.
2. Sprawdź tytuł strony widoczny na karcie przeglądarki lub w pasku tytułu okna.
3. Sprawdź, czy tytuł strony opisuje jej treść, cel lub przeznaczenie.
4. Sprawdź, czy tytuł różni się od tytułów innych stron w tym samym serwisie lub rozwiązaniu.
5. Sprawdź, czy tytuł strony nie składa się wyłącznie z nazwy instytucji, nazwy systemu albo ogólnego określenia, np. „Strona główna”, „Aktualności”, „Dokument”.
6. Sprawdź w kodzie strony, czy tytuł jest określony w znaczniku `title`.
7. Sprawdź, czy na stronie występuje tylko jeden tytuł strony.
8. Jeżeli strona zawiera ramki wbudowane (`iframe`), sprawdź, czy każda z nich ma zrozumiały i unikalny tytuł.
9. Jeżeli strona zawiera zwykłe ramki (`frame`), sprawdź, czy każda z nich ma zrozumiały i unikalny tytuł.
10. W razie potrzeby sprawdź tytuł strony przy użyciu czytnika ekranu lub narzędzia pokazującego strukturę strony.

## Kryteria oceny wyniku

### Wynik pozytywny

Wynik jest pozytywny, gdy:

- strona ma poprawnie określony tytuł,
- tytuł opisuje treść, cel lub przeznaczenie strony,
- tytuł jest unikalny w zestawie stron,
- tytuł jest zwięzły i zrozumiały,
- ramki występujące na stronie mają zrozumiałe i unikalne tytuły.

### Wynik negatywny

Wynik jest negatywny, gdy:

- strona nie ma tytułu,
- tytuł strony nie opisuje jej treści, celu lub przeznaczenia,
- wiele stron ma ten sam tytuł,
- tytuł jest zbyt ogólny,
- tytuł wprowadza w błąd,
- tytuł składa się wyłącznie z nazwy instytucji lub systemu,
- ramka wbudowana nie ma tytułu,
- tytuł ramki nie opisuje jej celu.

### Nie dotyczy

Wynik „nie dotyczy” można zastosować wyłącznie do elementów, które nie są stronami, ekranami ani ramkami i nie wymagają tytułu.

## Typowe niezgodności

Typowe niezgodności:

- brak znacznika `title`,
- pusty tytuł strony,
- ten sam tytuł na wielu stronach,
- tytuł strony nie opisuje jej treści,
- tytuł strony jest zbyt ogólny,
- tytuł strony zawiera wyłącznie nazwę instytucji lub systemu,
- tytuł strony nie odróżnia podstrony od innych stron,
- tytuł jest zbyt długi lub nieczytelny,
- ramka `iframe` nie ma atrybutu `title`,
- tytuł ramki jest pusty, powtarzalny albo niezrozumiały.

## Dobre praktyki

Dobre praktyki:

- tytuł strony rozpoczyna się od opisu głównej treści lub funkcji strony,
- tytuł strony zawiera nazwę serwisu lub instytucji po opisie treści,
- tytuł strony wskazuje miejsce strony w strukturze serwisu,
- tytuł strony jest krótki i jednoznaczny,
- tytuł nie zawiera zbędnej interpunkcji,
- tytuły stron są tworzone według wspólnego wzorca,
- tytuły ramek opisują cel osadzonej treści.

## Wynik testu

- [ ] Pozytywny — strona spełnia wymaganie.
- [ ] Negatywny — strona nie spełnia wymagania.
- [ ] Nie dotyczy — test nie ma zastosowania.
- [ ] Nie można ustalić — wynik wymaga dodatkowej weryfikacji.

## Ustalenia

Miejsce na opis ustaleń:

```text
Opisz, co sprawdzono, jakie strony lub ramki objęto testem, jaki wynik uzyskano oraz jakie problemy stwierdzono.

```

## Przykładowy opis niezgodności do raportu lub deklaracji

### Możliwe sformułowania:

- Strony nie mają poprawnie określonych tytułów.
- Tytuły stron nie opisują odpowiednio treści lub przeznaczenia stron.
- Tytuły stron nie są unikalne.
- W serwisie występuje wiele stron pod tym samym tytułem.
- Osadzone ramki nie mają zrozumiałych tytułów.

## Rekomendacje naprawcze

### Zalecane działania:

- uzupełnić brakujące tytuły stron,
- zmienić tytuły ogólne na tytuły opisujące treść lub funkcję strony,
- zapewnić unikalne tytuły dla stron w tym samym serwisie,
- stosować spójny wzorzec tytułów,
- uzupełnić tytuły ramek wbudowanych,
- usunąć lub zastąpić przestarzałe ramki frame.

## Powiązane testy

- Struktura nagłówków.
- Cel linku.
- Język strony.
- Nawigacja klawiaturą.
- Komponenty interfejsu użytkownika.

