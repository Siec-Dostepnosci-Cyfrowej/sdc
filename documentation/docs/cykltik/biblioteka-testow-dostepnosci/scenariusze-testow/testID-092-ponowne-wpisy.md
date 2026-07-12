---
id: test-ponowne-wpisy
title: Ponowne wpisy
sidebar_label: Ponowne wpisy
sidebar_position: 92
description: Scenariusz testu sprawdzającego, czy użytkownik nie musi ponownie wprowadzać informacji, które zostały już wcześniej podane w tym samym procesie, chyba że jest to niezbędne ze względów bezpieczeństwa, poprawności danych lub charakteru procesu.
keywords: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,ponowne wpisy,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,ponowne wpisy,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-092**

## 2. Nazwa testu

**Ponowne wpisy**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy użytkownik nie musi ponownie wprowadzać informacji, które zostały już wcześniej podane w tym samym procesie, chyba że jest to niezbędne ze względów bezpieczeństwa, poprawności danych lub charakteru procesu.

### Co oznaczają „ponowne wpisy”?

Przez ponowne wpisy rozumie się sytuacje, w których użytkownik musi ponownie wpisać informację, którą wcześniej podał już w tym samym procesie.

Przykłady:

- ponowne wpisanie imienia i nazwiska w kolejnym kroku formularza,
- ponowne podanie adresu zamieszkania,
- przepisywanie danych pomiędzy formularzami należącymi do tej samej usługi,
- ponowne wpisywanie danych, które system już zna.

Kryterium nie zabrania ponownego wpisywania informacji w sytuacjach uzasadnionych, na przykład gdy służy to bezpieczeństwu lub potwierdzeniu poprawności danych.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 3.3.7 Ponowne wpisy (Poziom A)

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.3.7 Redundant Entry
- 11.3.3.7 Redundant Entry

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy wieloetapowych,
- elektronicznych usług publicznych,
- procesów składania wniosków,
- procesów rejestracyjnych,
- systemów transakcyjnych,
- procesów zakupowych,
- aplikacji mobilnych,
- usług wymagających wprowadzania danych użytkownika.

## 7. Oczekiwany wynik

Informacje podane wcześniej przez użytkownika:

- są automatycznie wykorzystywane przez system,

lub

- są dostępne do wyboru lub potwierdzenia,

a użytkownik nie musi ich ponownie wpisywać bez uzasadnionej potrzeby.

## 8. Dlaczego to jest ważne

Ponowne wpisywanie tych samych informacji:

- wydłuża czas realizacji zadania,
- zwiększa ryzyko popełnienia błędu,
- powoduje dodatkowy wysiłek poznawczy,
- może być szczególnie trudne dla osób korzystających z technologii wspomagających.

Problem jest szczególnie odczuwalny podczas korzystania z:

- rozbudowanych formularzy,
- procesów wieloetapowych,
- usług publicznych wymagających wielu danych,
- aplikacji mobilnych.

Jeżeli system zna już określoną informację, powinien umożliwiać jej ponowne wykorzystanie zamiast wymagać jej ponownego wpisania.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w koncentracji,
- osób z dysleksją,
- osób z niepełnosprawnością intelektualną,
- użytkowników korzystających z technologii wspomagających,
- osób z ograniczoną sprawnością ruchową,
- wszystkich użytkowników realizujących złożone procesy.

## 10. Sposób testowania

### Krok 1. Identyfikacja procesu

Wybierz proces obejmujący więcej niż jeden krok, formularz lub ekran.

### Krok 2. Wprowadzenie danych

Przejdź proces jako użytkownik i zanotuj wszystkie informacje wymagane przez system.

### Krok 3. Analiza kolejnych etapów

Sprawdź, czy system ponownie wymaga podania informacji, które:

- zostały już wcześniej wprowadzone,
- są już dostępne w procesie,
- mogłyby zostać wykorzystane automatycznie.

### Krok 4. Ocena możliwości ponownego wykorzystania danych

Sprawdź, czy użytkownik może:

- wykorzystać wcześniej podane dane,
- potwierdzić wcześniej podane dane,
- wybrać wcześniej podane dane bez ponownego wpisywania.

### Krok 5. Ocena wyjątków

Sprawdź, czy ponowne wpisanie informacji jest uzasadnione:

- względami bezpieczeństwa,
- koniecznością potwierdzenia danych,
- wymogami prawnymi,
- charakterem procesu.

## 11. Kryteria oceny wyniku

### Spełnione

Informacje podane wcześniej przez użytkownika są automatycznie wykorzystywane lub dostępne do ponownego wykorzystania bez konieczności ponownego wpisywania.

Wyjątki dotyczą wyłącznie sytuacji uzasadnionych charakterem procesu.

### Częściowo spełnione

Większość danych jest ponownie wykorzystywana, jednak część informacji wymaga nieuzasadnionego ponownego wpisania.

### Niespełnione

Użytkownik musi wielokrotnie wpisywać te same informacje pomimo możliwości ich ponownego wykorzystania.

### Nie dotyczy

Proces nie obejmuje wieloetapowego wprowadzania danych lub nie występują informacje, które mogłyby zostać ponownie wykorzystane.

## 12. Typowe niezgodności

- wielokrotne wpisywanie imienia i nazwiska w kolejnych krokach formularza,
- ponowne podawanie adresu korespondencyjnego,
- konieczność przepisywania danych między formularzami tego samego procesu,
- ponowne wpisywanie danych identyfikacyjnych znanych systemowi,
- brak możliwości wykorzystania danych podanych wcześniej.

## 13. Dobre praktyki

- automatyczne przenoszenie danych pomiędzy etapami procesu,
- oferowanie opcji „użyj wcześniej podanych danych”,
- wstępne wypełnianie formularzy znanymi informacjami,
- umożliwienie wyboru wcześniej podanych danych,
- ograniczanie liczby pól wymagających ręcznego wpisywania,
- prezentowanie danych do potwierdzenia zamiast ponownego wpisywania.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie przypadków ponownego wpisywania danych oraz ocenę ich wpływu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym procesie użytkownik jest zobowiązany do ponownego wpisywania informacji, które zostały już wcześniej podane w tym samym procesie. System nie wykorzystuje dostępnych danych ani nie umożliwia ich ponownego użycia. Powoduje to dodatkowe obciążenie użytkownika i zwiększa ryzyko popełnienia błędów.

## 17. Rekomendacje naprawcze

- automatycznie wykorzystywać wcześniej podane dane,
- umożliwić wybór lub potwierdzenie wcześniej wprowadzonych informacji,
- ograniczyć konieczność ręcznego przepisywania danych,
- przeanalizować wszystkie etapy procesu pod kątem zbędnego powtarzania informacji,
- pozostawić ponowne wpisywanie wyłącznie w sytuacjach uzasadnionych bezpieczeństwem lub charakterem procesu.

## 18. Powiązane testy

- testID-039 Widoczne etykiety lub instrukcje
- testID-040 Oznaczenie pól wymaganych
- testID-041 Format danych
- testID-043 Sugestie korekty błędów
- testID-044 Identyfikacja błędów
- testID-045 Zapobieganie błędom
- testID-120 Formularz
- testID-117 Złożenie wniosku
- testID-118 Rejestracja / Logowanie
