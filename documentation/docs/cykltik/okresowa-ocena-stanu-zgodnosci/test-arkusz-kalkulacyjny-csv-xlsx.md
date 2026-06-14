---
id: test-arkusz-kalkulacyjny-csv-xlsx
title: Karta testu — Arkusz kalkulacyjny (CSV/XLSX)
sidebar_label: Arkusz kalkulacyjny (CSV/XLSX)
sidebar_position: 109
description: Scenariusz testu sprawdzającego, czy arkusz kalkulacyjny udostępnia dane w sposób umożliwiający ich odczytanie, zrozumienie i wykorzystanie przez użytkowników technologii wspomagających.
keywords: [arkusz kalkulacyjny, CSV, XLSX, Excel, dane tabelaryczne, dostępność danych, WCAG]
tags: [test dostępności, dane, CSV, XLSX, Excel, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-109**

## 2. Nazwa testu

Arkusz kalkulacyjny (CSV/XLSX)

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **nie**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy dane udostępnione w postaci arkusza kalkulacyjnego mogą być odczytane, zrozumiane i wykorzystane przez użytkowników technologii wspomagających.

Celem testu jest ustalenie, czy:

- dane mają logiczną strukturę,
- nagłówki wierszy i kolumn są jednoznaczne,
- arkusz nie zawiera barier utrudniających analizę danych,
- użytkownik może zrozumieć znaczenie prezentowanych informacji,
- dane mogą być odczytywane przez technologie wspomagające.

## 5. Mapowanie do standardów

### WCAG 2.1 / WCAG 2.2

- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 1.3.3 Charakterystyki sensoryczne
- 1.4.1 Użycie koloru
- 2.4.6 Nagłówki i etykiety
- 3.3.2 Etykiety lub instrukcje

### EN 301 549

- 10.1.3.1 Info and Relationships
- 10.1.3.2 Meaningful Sequence
- 10.1.4.1 Use of Colour
- 10.2.4.6 Headings and Labels

## 6. Zastosowanie do treści

Test stosuje się do:

- plików XLSX,
- plików XLS,
- plików CSV,
- zestawień finansowych,
- rejestrów,
- wykazów,
- raportów statystycznych,
- danych publikowanych jako otwarte dane.

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- zidentyfikować strukturę danych,
- rozpoznać znaczenie nagłówków,
- odnaleźć potrzebne informacje,
- analizować dane przy użyciu technologii wspomagających.

## 8. Dlaczego to jest ważne

Arkusze kalkulacyjne są często wykorzystywane do publikowania danych publicznych.

Jeżeli dane nie posiadają prawidłowej struktury lub wymagają interpretacji wizualnej, osoby korzystające z technologii wspomagających mogą nie być w stanie ich wykorzystać.

Dostępność danych jest warunkiem ich ponownego wykorzystania oraz skutecznego dostępu do informacji publicznej.

## 9. Kogo to dotyczy

W szczególności:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających z czytników ekranu,
- osób z trudnościami poznawczymi,
- osób analizujących dane przy użyciu specjalistycznego oprogramowania.

## 10. Sposób testowania

### Krok 1

Otwórz arkusz kalkulacyjny.

### Krok 2

Sprawdź, czy dane mają postać tabelaryczną.

### Krok 3

Zweryfikuj, czy kolumny posiadają jednoznaczne nagłówki.

### Krok 4

Sprawdź, czy nie zastosowano pustych wierszy lub kolumn w celu uzyskania efektu wizualnego.

### Krok 5

Sprawdź, czy znaczenie danych nie jest przekazywane wyłącznie przez:

- kolor,
- położenie,
- formatowanie.

### Krok 6

Jeżeli arkusz zawiera wiele kart, sprawdź, czy ich nazwy są zrozumiałe.

### Krok 7

Uruchom czytnik ekranu i sprawdź możliwość odczytu struktury danych.

### Krok 8

Sprawdź, czy zastosowane scalone komórki nie utrudniają interpretacji danych.

## 11. Kryteria oceny wyniku

### Spełnia

Dane są poprawnie uporządkowane, posiadają jednoznaczne nagłówki i mogą być analizowane przez użytkowników technologii wspomagających.

### Częściowo spełnia

Dane są zasadniczo dostępne, jednak występują elementy utrudniające ich interpretację lub analizę.

### Nie spełnia

Struktura danych uniemożliwia lub znacząco utrudnia ich wykorzystanie przez użytkowników technologii wspomagających.

### Nie dotyczy

Oceniany materiał nie jest arkuszem kalkulacyjnym.

## 12. Typowe niezgodności

- brak nagłówków kolumn,
- wielopoziomowe scalone komórki bez wyjaśnienia struktury,
- używanie koloru jako jedynego nośnika znaczenia,
- puste kolumny i wiersze wykorzystywane do formatowania,
- niezrozumiałe nazwy arkuszy,
- mieszanie różnych zestawów danych w jednej tabeli,
- brak możliwości jednoznacznego ustalenia znaczenia danych.

## 13. Dobre praktyki

- stosowanie jednego wiersza nagłówkowego,
- używanie jednoznacznych nazw kolumn,
- stosowanie zrozumiałych nazw arkuszy,
- publikowanie danych w postaci uporządkowanych tabel,
- unikanie nadmiernego formatowania wizualnego,
- publikowanie danych również w formacie CSV, jeżeli jest to uzasadnione.

## 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia
- Nie dotyczy

## 15. Ustalenia

Miejsce na zapisanie:

- rodzaju danych,
- jakości struktury,
- problemów z nagłówkami,
- problemów z interpretacją danych,
- innych obserwacji.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Opublikowany arkusz kalkulacyjny nie posiada jednoznacznie zdefiniowanych nagłówków kolumn. Dodatkowo zastosowano liczne scalone komórki oraz formatowanie wizualne utrudniające interpretację danych przez użytkowników czytników ekranu i narzędzi analizy danych.

## 17. Rekomendacje naprawcze

- uporządkować strukturę tabel,
- wprowadzić jednoznaczne nagłówki,
- ograniczyć stosowanie scalonych komórek,
- nie przekazywać informacji wyłącznie za pomocą koloru,
- poprawić nazwy arkuszy,
- udostępnić dane w bardziej uporządkowanej postaci.

## 18. Powiązane testy

- Tabela danych
- Wykres i wizualizacja danych
- Użycie koloru
- Dokument PDF
- Skan dokumentu
- Odczyt struktury przez czytnik ekranu
- Tekst alternatywny

---
