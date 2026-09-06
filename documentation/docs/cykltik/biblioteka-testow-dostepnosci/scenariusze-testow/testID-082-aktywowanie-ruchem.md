---
id: test-aktywowanie-ruchem
title: Scenariusz testu - Aktywowanie ruchem
sidebar_label: Aktywowanie ruchem
sidebar_position: 82
description: Scenariusz testu sprawdzającego, czy funkcjonalności uruchamiane przez ruch urządzenia lub gest wykonywany kamerą mogą być realizowane również w inny sposób oraz czy użytkownik może wyłączyć aktywowanie ruchem, gdy nie jest ono niezbędne.
keywords: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,aktywowanie ruchem,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,aktywowanie ruchem,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-082**

## 2. Nazwa testu

**Aktywowanie ruchem**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy funkcjonalności uruchamiane przez ruch urządzenia lub gest wykonywany przez użytkownika mogą zostać wykonane również w inny sposób oraz czy użytkownik może wyłączyć aktywowanie ruchem, jeżeli nie jest ono niezbędne dla charakteru funkcjonalności.

### Co oznacza „aktywowanie ruchem”?

Aktywowanie ruchem oznacza wykonywanie określonej funkcji urządzenia lub aplikacji poprzez wykrycie ruchu urządzenia albo ruchu wykonywanego przez użytkownika.

Przykładami aktywowania ruchem są:

- potrząśnięcie telefonem w celu wykonania określonej operacji,
- obrócenie urządzenia powodujące uruchomienie funkcji,
- przechylenie urządzenia wywołujące zmianę widoku,
- sterowanie aplikacją za pomocą ruchów urządzenia wykrywanych przez akcelerometr lub żyroskop,
- wykonywanie poleceń poprzez ruch głowy lub ciała rejestrowany przez czujniki urządzenia.

Funkcje aktywowane ruchem mogą być wygodne dla części użytkowników, jednak dla innych mogą być trudne lub niemożliwe do wykonania.

Dlatego użytkownik powinien mieć możliwość:

- wykonania tej samej czynności w inny sposób, na przykład za pomocą przycisku lub elementu interfejsu,
- wyłączenia funkcji aktywowanych ruchem, jeżeli mogą być uruchamiane przypadkowo.

### Czym aktywowanie ruchem różni się od gestów wskaźnika?

Aktywowanie ruchem dotyczy ruchu urządzenia lub ruchu użytkownika wykrywanego przez czujniki urządzenia.

Gesty wskaźnika dotyczą natomiast ruchów wykonywanych na ekranie dotykowym, takich jak:

- przesunięcie palcem,
- przeciągnięcie elementu,
- szczypanie w celu powiększenia,
- gest wielopunktowy.

Są to dwa odrębne wymagania WCAG i powinny być oceniane niezależnie.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.5.4 Aktywowanie ruchem (Poziom A)

### EN 301 549

- 9.2.5.4 Motion Actuation
- 11.2.5.4 Motion Actuation

## 6. Zastosowanie do treści

Test stosuje się do rozwiązań wykorzystujących:

- akcelerometr,
- żyroskop,
- czujniki ruchu,
- wykrywanie potrząśnięcia urządzeniem,
- wykrywanie przechylenia urządzenia,
- sterowanie ruchem głowy,
- sterowanie gestami rozpoznawanymi przez kamerę,
- inne mechanizmy aktywowane ruchem.

W szczególności do:

- aplikacji mobilnych,
- aplikacji wykorzystujących czujniki urządzenia,
- rozwiązań sterowanych kamerą,
- interfejsów wykorzystujących sterowanie ruchem.

## 7. Oczekiwany wynik

Dla każdej funkcji aktywowanej ruchem użytkownik może:

- wykonać tę samą czynność przy użyciu standardowych elementów interfejsu,

lub

- wyłączyć aktywowanie ruchem,

lub

- wykorzystanie ruchu jest niezbędne dla charakteru funkcjonalności.

## 8. Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą wykonywać ruchy wymagane przez urządzenie lub aplikację.

Problemy mogą dotyczyć między innymi:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z urządzeń zamocowanych na wózkach lub uchwytach,
- osób z ograniczoną siłą lub zakresem ruchów,
- użytkowników korzystających z urządzeń w warunkach utrudniających wykonywanie gestów.

Jeżeli funkcja jest dostępna wyłącznie poprzez potrząśnięcie urządzeniem, przechylenie telefonu lub wykonanie określonego ruchu przed kamerą, część użytkowników może zostać całkowicie pozbawiona możliwości skorzystania z tej funkcji.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z technologii wspomagających,
- osób starszych,
- użytkowników urządzeń mobilnych,
- osób korzystających z urządzeń zamocowanych w uchwytach,
- osób korzystających z urządzeń w nietypowych warunkach.

## 10. Sposób testowania

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
- standardowych mechanizmów sterowania.

### Krok 3. Sprawdzenie możliwości wyłączenia

Sprawdź, czy użytkownik może:

- wyłączyć funkcję aktywowaną ruchem,
- zablokować przypadkowe uruchamianie,
- korzystać z rozwiązania bez wykonywania ruchów.

### Krok 4. Ocena wyjątków

Jeżeli aktywowanie ruchem jest wykorzystywane jako jedyna metoda wykonania funkcji, oceń, czy rzeczywiście jest ono niezbędne dla charakteru funkcjonalności.

## 11. Kryteria oceny wyniku

### Spełnione

Dla wszystkich funkcji aktywowanych ruchem istnieje alternatywna metoda wykonania działania, możliwość wyłączenia funkcji lub wykorzystanie ruchu jest niezbędne dla charakteru funkcjonalności.

### Częściowo spełnione

Alternatywne metody lub możliwość wyłączenia zapewniono jedynie dla części funkcji.

### Niespełnione

Istnieją funkcje:

- dostępne wyłącznie przez ruch urządzenia lub użytkownika,
- których nie można wykonać w inny sposób,
- których nie można wyłączyć.

### Nie dotyczy

Rozwiązanie nie wykorzystuje aktywowania ruchem.

## 12. Typowe niezgodności

- funkcja „cofnij” dostępna wyłącznie przez potrząśnięcie urządzeniem,
- sterowanie aplikacją wyłącznie przez przechylenie telefonu,
- uruchamianie funkcji wyłącznie gestem wykonywanym przed kamerą,
- brak możliwości wyłączenia sterowania ruchem,
- brak alternatywnych kontrolek interfejsu.

## 13. Dobre praktyki

- zapewnienie przycisków realizujących te same funkcje,
- możliwość wyłączenia sterowania ruchem,
- możliwość korzystania z aplikacji bez używania czujników ruchu,
- traktowanie sterowania ruchem jako funkcji dodatkowej,
- dokumentowanie funkcji wykorzystujących ruch.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie funkcji wykorzystujących ruch oraz opis stwierdzonych ograniczeń.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanym rozwiązaniu część funkcjonalności dostępna jest wyłącznie poprzez aktywowanie ruchem urządzenia lub użytkownika. Nie zapewniono alternatywnej metody wykonania tych działań ani możliwości wyłączenia funkcji wykorzystujących ruch. Może to utrudniać lub uniemożliwiać korzystanie z rozwiązania osobom z ograniczoną sprawnością ruchową.

## 17. Rekomendacje naprawcze

- zapewnić alternatywne przyciski lub kontrolki realizujące te same funkcje,
- umożliwić wyłączenie funkcji aktywowanych ruchem,
- zapewnić obsługę funkcji przy użyciu standardowych elementów interfejsu,
- przeanalizować zasadność wykorzystania aktywowania ruchem jako podstawowego mechanizmu sterowania,
- przetestować rozwiązanie z użytkownikami korzystającymi z technologii wspomagających.

## 18. Powiązane testy

- testID-080 Gesty wskaźnika
- testID-081 Rezygnacja ze wskazania
- testID-088 Przeciąganie
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-097 Gesty systemowe i niestandardowe (aplikacja mobilna)
- testID-070 Dostępna nazwa elementu interaktywnego
