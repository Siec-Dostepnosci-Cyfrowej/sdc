---
id: historia-wersji-dziennik-zmian-dokumentow-sieci
title: Historia wersji i dziennik zmian dokumentów Sieci
description: Określa zasady oznaczania i dokumentowania kolejnych wersji dokumentów Sieci Dostępności Cyfrowej
sidebar_label: Historia wersji i dziennik zmian 
sidebar_position: 2
keywords: [dokumenty Sieci, wersjonowanie, historia wersji, dziennik zmian]
opracowanie: Stefan Wajda
data_zgloszenia: 10 września 2026 r.
ostatnia_aktualizacja: 10 września 2026 r.
wersja_robocza: true
---

**====== PROJEKT ========**

## 1. Cel i zakres

Dokument określa zasady **oznaczania i dokumentowania kolejnych wersji dokumentów Sieci Dostępności Cyfrowej**.

Zasady służą temu, aby użytkownik dokumentu mógł jednoznacznie ustalić:

- z jakiej wersji dokumentu korzysta,
- jaki jest jej status,
- kiedy została opublikowana,
- jakie wcześniejsze publiczne wersje dokumentu istniały,
- jakie istotne zmiany wprowadzono w kolejnych wersjach.

Zasady stosuje się do wszystkich dokumentów Sieci, dla których prowadzone jest wersjonowanie, niezależnie od ich rodzaju.

---

## 2. Oznaczanie wersji dokumentów

Numer wersji identyfikuje określony stan dokumentu i pozwala odróżnić go od jego wcześniejszych i późniejszych wersji.

Stosuje się następujące oznaczenia:

- **0.x** – wersje robocze powstające podczas opracowywania, konsultowania i uzgadniania dokumentu;
- **1.0-RC1, 1.0-RC2 itd.** – kolejne wersje dokumentu, którego opracowanie przez Sieć zostało zakończone i który został zatwierdzony przez Sieć do publikacji, ale nie został jeszcze formalnie przyjęty przez właściwy organ;
- **1.0** – pierwsza wersja dokumentu formalnie przyjęta przez właściwy organ;
- **1.1, 1.2 itd.** – kolejne zatwierdzone aktualizacje dokumentu, które nie zmieniają zasadniczo jego przedmiotu i podstawowych założeń;
- **2.0, 3.0 itd.** – kolejne wydania dokumentu wprowadzające istotne zmiany jego przedmiotu, założeń, struktury lub przyjętych rozwiązań.

Określenie „właściwy organ” oznacza organ lub podmiot uprawniony do zatwierdzenia danej wersji dokumentu zgodnie z obowiązującą procedurą zatwierdzania dokumentów Sieci.

Numer wersji nie zastępuje informacji o **statusie dokumentu**. Numer wersji identyfikuje określone wydanie dokumentu, natomiast status wskazuje etap jego zatwierdzenia lub formalnego przyjęcia.

---

## 3. Historia wersji

### 3.1. Funkcja historii wersji

**Historia wersji** przedstawia kolejne publiczne, kontrolowane wersje dokumentu.

Historia wersji rozpoczyna się od **pierwszej wersji zatwierdzonej przez Sieć do publikacji**. Nie obejmuje wersji roboczych powstających podczas opracowywania, konsultowania i uzgadniania dokumentu.

Dzięki temu historia wersji dokumentuje historię dokumentu udostępnionego użytkownikom, a nie przebieg prac redakcyjnych nad jego przygotowaniem.

### 3.2. Umiejscowienie historii wersji

Historię wersji umieszcza się **na końcu dokumentu, po jego treści merytorycznej**.

Historia wersji jest elementem dokumentacyjnym dołączonym do dokumentu. **Nie stanowi części jego treści merytorycznej** i nie jest uwzględniana przy określaniu wymaganej struktury danego rodzaju dokumentu.

Informację o aktualnej wersji dokumentu można dodatkowo podawać w jego metadanych.

### 3.3. Tabela historii wersji

Historię wersji przedstawia się w tabeli:

| Wersja  | Data   | Status                  | Opis                                                    |
| ------- | ------ | ----------------------- | ------------------------------------------------------- |
| 1.0-RC1 | [data] | Zatwierdzona przez Sieć | Pierwsza wersja zatwierdzona przez Sieć do publikacji   |
| 1.0-RC2 | [data] | Zatwierdzona przez Sieć | Wersja uwzględniająca zmiany wprowadzone po [...]       |
| 1.0     | [data] | Formalnie przyjęta      | Pierwsza wersja formalnie przyjęta przez właściwy organ |

W tabeli podaje się:

- **Wersję** – oznaczenie wersji dokumentu;
- **Datę** – datę zatwierdzenia danej wersji do publikacji albo jej formalnego przyjęcia;
- **Status** – informację o statusie danej wersji;
- **Opis** – krótką informację pozwalającą rozpoznać charakter wersji lub najważniejszy zakres wprowadzonych zmian.

Opis w tabeli powinien być zwięzły. Szczegółowe informacje o zmianach przedstawia się, jeżeli jest to potrzebne, w Dzienniku zmian.

---

## 4. Dziennik zmian

### 4.1. Funkcja dziennika zmian

**Dziennik zmian** przedstawia istotne zmiany wprowadzone w kolejnej publicznej wersji dokumentu w stosunku do wersji poprzedniej.

Jego celem jest umożliwienie użytkownikowi rozpoznania zmian, które mogą mieć znaczenie dla rozumienia lub stosowania dokumentu, bez konieczności samodzielnego porównywania jego kolejnych wersji.

### 4.2. Kiedy prowadzi się dziennik zmian

Dziennik zmian zamieszcza się, gdy kolejna wersja dokumentu wprowadza **zmiany merytoryczne istotne dla jego użytkowników**.

W dzienniku zmian nie trzeba odnotowywać zmian, które nie wpływają na znaczenie lub sposób stosowania dokumentu, w szczególności:

- korekt literówek i oczywistych błędów językowych,
- zmian formatowania,
- zmian technicznych dotyczących sposobu publikacji,
- innych drobnych korekt redakcyjnych, które nie zmieniają treści merytorycznej.

### 4.3. Sposób dokumentowania zmian

Dziennik zmian umieszcza się **bezpośrednio pod tabelą Historii wersji**.

Zmiany opisuje się w odniesieniu do konkretnej wersji dokumentu, np.:

```md
### Dziennik zmian

#### Wersja 1.1

W stosunku do wersji 1.0:

- dodano [...]
- zmieniono [...]
- doprecyzowano [...]
- usunięto [...]

#### Wersja 1.2

W stosunku do wersji 1.1:

- [...]
```

Opisujemy przede wszystkim **co zmieniło się z punktu widzenia użytkownika dokumentu**. Dziennik zmian nie służy do rejestrowania wszystkich czynności redakcyjnych wykonanych podczas przygotowywania kolejnej wersji.

---

## 5. Relacja między historią wersji a dziennikiem zmian

Historia wersji i Dziennik zmian pełnią różne, uzupełniające się funkcje.

**Historia wersji** pozwala ustalić, jakie publiczne wersje dokumentu istniały, kiedy zostały opublikowane lub formalnie przyjęte oraz jaki miały status.

**Dziennik zmian** pozwala ustalić, jakie istotne zmiany merytoryczne wprowadzono w kolejnych wersjach.

Historia wersji jest prowadzona dla każdego wersjonowanego dokumentu. Dziennik zmian jest dodawany wtedy, gdy zakres zmian wymaga dokładniejszego przedstawienia niż krótki opis w tabeli Historii wersji.

---

## 6. Wersje robocze

Wersje robocze służą opracowywaniu, konsultowaniu i uzgadnianiu treści dokumentu. Mogą być oznaczane numerami **0.x**.

Wersji roboczych:

- nie umieszcza się w tabeli Historii wersji,
- nie opisuje się w Dzienniku zmian przeznaczonym dla użytkowników dokumentu,
- nie traktuje się jako publicznych, kontrolowanych wersji dokumentu.

Przebieg prac nad wersjami roboczymi może być dokumentowany za pomocą mechanizmów wykorzystywanych podczas opracowywania dokumentów, w szczególności historii zmian w repozytorium.

---

## 7. Zasada ogólna

Każdy opublikowany, wersjonowany dokument Sieci zawiera na końcu **Historię wersji**, rozpoczynającą się od pierwszej wersji zatwierdzonej przez Sieć do publikacji.

Jeżeli kolejna publiczna wersja wprowadza istotne zmiany merytoryczne, Historię wersji uzupełnia się **Dziennikiem zmian**.

Historia wersji i Dziennik zmian są elementami dokumentacyjnymi dokumentu i **nie stanowią części jego treści merytorycznej**.
