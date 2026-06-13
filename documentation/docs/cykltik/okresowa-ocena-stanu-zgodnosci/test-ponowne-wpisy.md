---
id: test-ponowne-wpisy
title: Ponowne wpisy
sidebar_label: Ponowne wpisy
sidebar_position: 92
description: Scenariusz testu sprawdzającego, czy użytkownik nie musi ponownie wprowadzać informacji, które zostały już wcześniej podane w tym samym procesie, chyba że jest to niezbędne ze względów bezpieczeństwa, poprawności danych lub charakteru procesu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-092**

## Nazwa testu

Ponowne wpisy

## Cel testu

Sprawdzenie, czy użytkownik nie musi ponownie wprowadzać informacji, które zostały już wcześniej podane w tym samym procesie, chyba że jest to niezbędne ze względów bezpieczeństwa, poprawności danych lub charakteru procesu.

## Powiązane wymagania

### WCAG 2.2

- 3.3.7 Ponowne wpisy (Redundant Entry) – poziom A

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.3.7 Redundant Entry
- 11.3.3.7 Redundant Entry

---

## Dlaczego to jest ważne

Ponowne wpisywanie tych samych informacji:

- wydłuża czas realizacji zadania,
- zwiększa ryzyko popełnienia błędu,
- powoduje dodatkowy wysiłek poznawczy,
- może stanowić istotną barierę dla części użytkowników.

Problem jest szczególnie odczuwalny podczas korzystania z rozbudowanych formularzy, procesów wieloetapowych oraz usług elektronicznych wymagających wprowadzenia dużej liczby danych.

Jeżeli system zna już określoną informację, powinien umożliwiać jej ponowne wykorzystanie zamiast wymagać jej ponownego wpisania.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w koncentracji,
- osób z dysleksją,
- użytkowników korzystających z technologii wspomagających,
- osób z ograniczoną sprawnością ruchową,
- wszystkich użytkowników realizujących złożone procesy.

---

## Zakres stosowania

Test należy wykonywać dla:

- formularzy wieloetapowych,
- elektronicznych usług publicznych,
- procesów składania wniosków,
- procesów zakupowych,
- procesów rejestracyjnych,
- systemów transakcyjnych,
- aplikacji mobilnych.

---

## Metoda badania

### Krok 1. Identyfikacja procesu

Wybierz proces obejmujący więcej niż jeden krok lub formularz.

### Krok 2. Wprowadzenie danych

Przejdź proces jako użytkownik i zanotuj wszystkie wprowadzane informacje.

### Krok 3. Analiza kolejnych kroków

Sprawdź, czy system ponownie wymaga podania danych, które:

- zostały już wcześniej wprowadzone,
- są już dostępne w systemie,
- mogłyby zostać automatycznie wykorzystane.

### Krok 4. Ocena wyjątków

Sprawdź, czy ponowne wprowadzenie danych jest uzasadnione:

- względami bezpieczeństwa,
- koniecznością potwierdzenia informacji,
- wymogami prawnymi,
- charakterem procesu.

---

## Kryteria oceny

### Spełnia

Informacje podane wcześniej przez użytkownika są automatycznie wykorzystywane lub udostępniane do wyboru i nie wymagają ponownego wpisywania.

Wyjątki dotyczą wyłącznie sytuacji uzasadnionych charakterem procesu.

### Częściowo spełnia

Większość danych jest ponownie wykorzystywana, jednak część informacji wymaga nieuzasadnionego ponownego wpisania.

### Nie spełnia

Użytkownik musi wielokrotnie wpisywać te same informacje pomimo możliwości ich automatycznego wykorzystania.

### Nie dotyczy

Proces nie wymaga wielokrotnego podawania informacji lub nie obejmuje wielu etapów.

---

## Typowe niezgodności

- wielokrotne wpisywanie imienia i nazwiska w kolejnych krokach formularza,
- ponowne podawanie adresu korespondencyjnego już wprowadzonego wcześniej,
- konieczność przepisywania danych między formularzami należącymi do tego samego procesu,
- ponowne wpisywanie danych identyfikacyjnych użytkownika znanych systemowi,
- brak możliwości skorzystania z danych podanych w poprzednich etapach.

---

## Dobre praktyki

- automatyczne przenoszenie danych pomiędzy etapami procesu,
- oferowanie opcji „użyj wcześniej podanych danych”,
- wstępne wypełnianie formularzy znanymi informacjami,
- umożliwienie wyboru danych z wcześniej wprowadzonych informacji,
- ograniczanie liczby pól wymagających ręcznego wpisywania.

---

## Wyjątki

Ponowne wpisanie informacji może być uzasadnione, gdy:

- jest niezbędne do potwierdzenia poprawności danych,
- wynika z wymogów bezpieczeństwa,
- służy potwierdzeniu wykonania operacji o istotnych skutkach,
- jest wymagane przez przepisy prawa,
- użytkownik musi świadomie potwierdzić określoną informację.

Przykłady:

- ponowne wpisanie nowego hasła,
- potwierdzenie adresu e-mail,
- potwierdzenie numeru rachunku bankowego,
- potwierdzenie danych przed podpisaniem dokumentu.

---

## Klasyfikacja problemów

### Istotne

- wielokrotne wymaganie podawania tych samych danych w kluczowym procesie użytkownika.

### Umiarkowane

- powtarzanie części informacji powodujące dodatkowy wysiłek użytkownika.

### Drobne

- sporadyczne przypadki nieuzasadnionego ponownego wpisywania danych o niewielkim znaczeniu.

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

- Widoczne etykiety lub instrukcje
- Oznaczenie pól wymaganych
- Format danych
- Identyfikacja błędów
- Sugestie korekty błędów
- Zapobieganie błędom
- Formularz elektroniczny

---

## Uwagi

Kryterium 3.3.7 zostało wprowadzone w WCAG 2.2. Dotyczy wyłącznie informacji, które użytkownik już wcześniej podał w tym samym procesie. Nie wymaga automatycznego pobierania danych z innych systemów ani rejestrów, choć takie rozwiązania mogą dodatkowo poprawiać użyteczność. Celem kryterium jest ograniczenie zbędnego obciążenia użytkownika oraz zmniejszenie liczby błędów wynikających z konieczności wielokrotnego wprowadzania tych samych danych.
