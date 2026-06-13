---
id: test-aktywowanie-ruchem
title: Karta testu — Aktywowanie ruchem
sidebar_label: Aktywowanie ruchem
sidebar_position: 82
description: Scenariusz testu sprawdzającego, czy funkcjonalności uruchamiane przez ruch urządzenia lub gest wykonywany kamerą mogą być realizowane również w inny sposób oraz czy użytkownik może wyłączyć aktywowanie ruchem, gdy nie jest ono niezbędne.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,aktywowanie ruchem]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,aktywowanie ruchem]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-082**

## Nazwa testu

Aktywowanie ruchem

## Cel testu

Sprawdzenie, czy funkcjonalności uruchamiane przez ruch urządzenia lub gest wykonywany kamerą mogą być realizowane również w inny sposób oraz czy użytkownik może wyłączyć aktywowanie ruchem, gdy nie jest ono niezbędne.

## Powiązane wymagania

### WCAG 2.1

- 2.5.4 Aktywowanie ruchem (Motion Actuation) – poziom A

### EN 301 549

- 9.2.5.4 Motion Actuation
- 11.2.5.4 Motion Actuation

---

## Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą wykonywać ruchy wymagane przez urządzenie lub aplikację.

Problemy mogą dotyczyć między innymi:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z urządzeń zamocowanych na wózkach lub uchwytach,
- osób z ograniczoną siłą lub zakresem ruchów,
- użytkowników korzystających z urządzeń w warunkach utrudniających wykonywanie gestów.

Jeżeli funkcja jest dostępna wyłącznie poprzez potrząśnięcie urządzeniem, przechylenie telefonu lub wykonanie określonego ruchu przed kamerą, część użytkowników może zostać całkowicie pozbawiona możliwości skorzystania z tej funkcji.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami ruchowymi,
- użytkowników urządzeń mobilnych,
- osób korzystających z technologii wspomagających,
- osób używających urządzeń w nietypowych warunkach.

---

## Zakres stosowania

Test należy wykonywać dla rozwiązań wykorzystujących:

- akcelerometr,
- żyroskop,
- czujniki ruchu,
- wykrywanie potrząśnięcia urządzeniem,
- wykrywanie przechylenia urządzenia,
- sterowanie ruchem głowy,
- sterowanie gestami rozpoznawanymi przez kamerę,
- inne mechanizmy aktywowane ruchem.

---

## Metoda badania

### Krok 1. Identyfikacja funkcji wykorzystujących ruch

Sprawdź, czy rozwiązanie umożliwia wykonywanie działań poprzez:

- potrząśnięcie urządzeniem,
- przechylenie urządzenia,
- ruch urządzeniem w przestrzeni,
- ruch głowy,
- gest rozpoznawany przez kamerę,
- inne formy aktywowania ruchem.

### Krok 2. Sprawdzenie alternatywnego sposobu wykonania

Dla każdej funkcji sprawdź, czy można ją wykonać również przy użyciu:

- przycisku,
- elementu interfejsu,
- klawiatury,
- innej standardowej metody sterowania.

### Krok 3. Sprawdzenie możliwości wyłączenia

Sprawdź, czy użytkownik może:

- wyłączyć funkcję aktywowaną ruchem,
- zablokować przypadkowe uruchamianie,
- korzystać z rozwiązania bez wykonywania ruchów.

### Krok 4. Ocena wyjątków

Jeżeli aktywowanie ruchem jest niezbędne dla charakteru funkcjonalności, oceń, czy rzeczywiście nie istnieje rozsądna alternatywa.

---

## Kryteria oceny

### Spełnia

Dla wszystkich funkcji aktywowanych ruchem:

- istnieje alternatywny sposób wykonania działania niezależny od ruchu

lub

- funkcja może zostać wyłączona

lub

- wykorzystanie ruchu jest niezbędne dla charakteru funkcjonalności.

### Częściowo spełnia

Alternatywne metody lub możliwość wyłączenia zapewniono tylko dla części funkcji.

### Nie spełnia

Istnieją funkcje:

- dostępne wyłącznie przez ruch urządzenia lub użytkownika,
- których nie można wykonać w inny sposób,
- których nie można wyłączyć.

### Nie dotyczy

Rozwiązanie nie wykorzystuje aktywowania ruchem.

---

## Typowe niezgodności

- funkcja „cofnij” dostępna wyłącznie przez potrząśnięcie urządzeniem,
- sterowanie aplikacją wyłącznie przez przechylenie telefonu,
- uruchamianie funkcji wyłącznie gestem wykonywanym przed kamerą,
- brak możliwości wyłączenia sterowania ruchem,
- brak alternatywnych kontrolek interfejsu.

---

## Dobre praktyki

- zapewnienie przycisków wykonujących te same funkcje,
- możliwość wyłączenia sterowania ruchem,
- możliwość korzystania z aplikacji bez używania czujników ruchu,
- traktowanie sterowania ruchem jako funkcji dodatkowej, a nie jedynej metody obsługi.

---

## Klasyfikacja problemów

### Krytyczne

- kluczowa funkcjonalność dostępna wyłącznie przez aktywowanie ruchem.

### Istotne

- brak alternatywnej metody wykonania ważnych działań.

### Systemowe

- projekt interfejsu oparty na założeniu, że wszyscy użytkownicy mogą wykonywać wymagane ruchy.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Nie        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Nie        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Gesty wskaźnika
- Rezygnacja ze wskazania
- Dostęp z klawiatury
- Odczyt przez czytnik ekranu
- Dostępna nazwa elementu interaktywnego

---

## Uwagi

Kryterium nie zabrania stosowania aktywowania ruchem. Wymaga jedynie, aby użytkownik miał możliwość wykonania tej samej czynności w inny sposób lub wyłączenia sterowania ruchem, chyba że wykorzystanie ruchu jest niezbędne dla charakteru funkcjonalności. Przykładem dopuszczalnego wyjątku może być aplikacja, której podstawowym celem jest analiza lub trening ruchu użytkownika.
