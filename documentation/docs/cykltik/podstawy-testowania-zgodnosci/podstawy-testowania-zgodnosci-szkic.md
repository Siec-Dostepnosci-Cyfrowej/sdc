---
id: podstawy-testowania-zgodnosci-szkic
title: Szkic polskiej Podstawy testowania zgodności technologii informacyjno-komunikacyjnych (TIK) z EN 301 549
sidebar_label: Podstawy - szkic koncepcyjny
sidebar_position: 2
description: Zarys koncepcji polskich podstaw metodyki testowania zgodności produktów cyfrowych z EN 301 549
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 26 lutego 2026 r.
wersja_robocza: true

---



**Dokument koncepcyjny – załącznik do dezyderatu Sieci Dostępności Cyfrowej**

---

## 1. Cel, zakres i zasady

### 1.1 Cel dokumentu

Celem „Podstawy testowania zgodności TIK” jest ustanowienie jednolitej, referencyjnej metodyki testowania zgodności produktów i usług cyfrowych z EN 301 549.

Dokument ma zapewnić:

- porównywalność wyników audytów,
- wspólny standard dowodowy,
- ujednolicenie praktyk dla przeglądów rocznych, audytów, monitoringu, certyfikacji i zamówień publicznych,
- podstawę programową dla szkoleń testerów i audytorów.

---

### 1.2 Zakres technologii informacyjno-komunikacyjnych (TIK)

Metodyka obejmuje następujące profile produktowe:

- Strony internetowe i aplikacje webowe  
- Aplikacje mobilne  
- Dokumenty elektroniczne (PDF, Office, e-publikacje)  
- Oprogramowanie (desktop, klient–serwer, kioski, aplikacje dedykowane)  
- Usługi wsparcia i dokumentacja użytkownika (jeżeli objęte zakresem oceny)

Każdy profil posiada wspólne zasady procesowe oraz odrębne moduły testowe.

---

### 1.3 Zasady nadrzędne

1. Testy badają spełnienie wymagania normy, nie obecność konkretnej techniki.
2. Wynik testu musi być obronny dowodowo.
3. Testy muszą być powtarzalne.
4. Wymagane są testy manualne oraz – tam, gdzie to uzasadnione – testy z użyciem technologii asystujących (AT).
5. Narzędzia automatyczne mają charakter wspomagający.

---

## 2. Model zgodności i mapowanie normatywne

### 2.1 Źródła wymagań

- EN 301 549 – dokument nadrzędny.
- WCAG 2.x – w zakresie, w jakim EN odwołuje się do WCAG.
- Wymagania EN 301 549 wykraczające poza WCAG.

---

### 2.2 Matryca mapowania

Każdy test posiada metadane:

- Identyfikator testu  
- Odniesienie do EN 301 549  
- Odpowiedni WCAG SC (jeżeli dotyczy)  
- Typ produktu (web/mobile/docs/software)  
- Rodzaj testu (manualny/AT/narzędziowy)  
- Kryterium oceny (PASS/FAIL/N/A/INCONCLUSIVE)  
- Wymagane dowody  

---

### 2.3 Profile zgodności

Metodyka definiuje profile stosowania:

- Profil minimalny – przegląd roczny (deklaracja dostępności)  
- Profil audytu pełnego  
- Profil monitoringu  
- Profil certyfikacyjny  

Każdy profil określa zakres próbki, głębokość testów i wymagania dowodowe.

---

## 3. Proces testowania

### 3.1 Planowanie

- Identyfikacja produktu, wersji i środowiska.
- Wybór profilu testu.
- Określenie kluczowych przepływów użytkownika.

---

### 3.2 Dobór próbki

Metodyka określa:

- minimalną liczbę stron/ekranów/dokumentów,
- obowiązkowe typy treści i funkcjonalności,
- zasady rozszerzania próbki w przypadku wykrycia istotnych niezgodności.

---

### 3.3 Wykonanie testów

- Testy manualne.
- Testy z wykorzystaniem technologii asystujących.
- Weryfikacja wyników narzędzi automatycznych.

---

### 3.4 Dokumentowanie dowodów

Minimalny zakres dowodów:

- identyfikacja miejsca testu,
- opis kroku testowego,
- wynik,
- zrzuty ekranu/nagrania/logi AT,
- w razie potrzeby fragment kodu lub drzewa dostępności.

---

### 3.5 Klasyfikacja wyników

Każdy test kończy się jednym z wyników:

- PASS  
- FAIL  
- N/A  
- INCONCLUSIVE  

Metodyka definiuje zasady stosowania N/A oraz rozstrzygania wątpliwości.

---

### 3.6 Raportowanie

Raport powinien zawierać:

- zakres i profil testu,
- zastosowaną próbkę,
- konfigurację środowiska testowego,
- zestawienie wyników,
- opis niezgodności,
- odniesienia do dowodów.

---

## 4. Standard procedury testowej

Każda procedura testowa zawiera:

1. Identyfikator i nazwę testu  
2. Odniesienie do EN 301 549  
3. Cel testu  
4. Warunki zastosowania  
5. Kroki testowe  
6. Oczekiwany rezultat  
7. Wymagane dowody  
8. Przypadki graniczne  
9. Wskazówki naprawcze (nienormatywne)

---

## 5. Środowisko i metody testowania

### 5.1 Minimalne środowisko referencyjne

- Aktualne wersje przeglądarek.
- Co najmniej jedna technologia asystująca dla każdej platformy.
- Standardowe konfiguracje powiększenia i kontrastu.

---

### 5.2 Narzędzia automatyczne

- Narzędzia automatyczne wspierają proces.
- Brak błędów w narzędziu nie oznacza zgodności.

---

## 6. Klasyfikacja wagi niezgodności

Niezgodności klasyfikowane są według wpływu na wykonalność zadania:

- Krytyczne  
- Poważne  
- Umiarkowane  
- Niskie  

Waga musi odnosić się do realnego wpływu na użytkownika.

---

## 7. Moduły testowe

Metodyka jest publikowana modułowo:

- Moduł Web (EN 9.x)
- Moduł Dokumenty (EN 10.x)
- Moduł Oprogramowanie (EN 11.x)
- Moduł wymagań EN poza WCAG

---

## 8. Produkty wyjściowe

Minimalne produkty procesu:

- Protokół testów
- Rejestr niezgodności
- Repozytorium dowodów
- Raport końcowy

Opcjonalnie: struktura danych w formacie maszynowym (np. JSON) dla monitoringu.

---

## 9. Kompetencje i zapewnienie jakości

### 9.1 Role w procesie

- Tester
- Weryfikator (peer review)
- Lider audytu
- Przedstawiciel zamawiającego

---

### 9.2 Zapewnienie jakości

- Weryfikacja części próbki przez drugiego testera.
- Procedura rozstrzygania rozbieżności.
- Dokumentowanie poziomu pewności oceny.

---

## 10. Wdrożenie i utrzymanie

Metodyka powinna:

- być publikowana w wersjonowanej formie,
- posiadać rejestr zmian,
- podlegać okresowej aktualizacji,
- stanowić podstawę dla szkoleń i egzaminów testerów.

---

## 11. Załączniki operacyjne

- Szablon planu testów  
- Szablon rejestru niezgodności  
- Szablon raportu  
- Zasady doboru próbki  
- Słownik pojęć operacyjnych  
- Minimalne konfiguracje środowiska testowego  
- Wzór kryteriów oceny ofert w zamówieniach publicznych  

---

## Podsumowanie

„Podstawa testowania zgodności TIK z EN 301 549” nie zastępuje norm technicznych.

Operacjonalizuje je w postaci jednolitych, powtarzalnych procedur testowych, stanowiących fundament spójnego systemu oceny dostępności w Polsce.