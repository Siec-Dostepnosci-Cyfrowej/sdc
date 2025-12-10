---
id: cykl-zycia-strony-internetowej
title: Cykl życia strony internetowej (TIK). Ramowe wytyczne
sidebar_label: Cykl życia strony internetowej
sidebar_position: 4 
keywords: [
dostepnosc cyfrowa, 
cykl życia
]
tags: [
dostepnosc cyfrowa, 
cykl życia
]
data_zgloszenia: 6 października 2025 r.
ostatnia_aktualizacja: 6 października 2025 r
opracowanie: Dawid Górny
wersja_robocza: true
---



## 1. Cel dokumentu

Celem dokumentu jest przedstawienie minimalnych zasad, według których
instytucja publiczna powinna planować, zamawiać, tworzyć, testować,
utrzymywać i wycofywać stronę internetową w sposób dostępny cyfrowo.
Treść ma charakter ramowy i powinna zostać uzupełniona o procedury
wewnętrzne właściwe dla danej jednostki.

## 2. Podstawy prawne i standardy

* Ustawa z 4 kwietnia 2019 r. o dostępności cyfrowej stron
internetowych i aplikacji mobilnych podmiotów publicznych.
* WCAG 2.1 na poziomie AA (zaleca się uwzględnienie nowych kryteriów
WCAG 2.2).
* EN 301 549 jako norma obowiązująca przy interpretacji wymagań
technicznych.
* Rozporządzenie w sprawie Biuletynu Informacji Publicznej. Treści BIP
muszą jednocześnie spełniać WCAG 2.1 AA.

## 3. Role i odpowiedzialność

### 3.1 Opis ról

* Koordynator dostępności - odpowiada za dostępność strony przez cały
czas jej działania, uczestniczy w wyborze wykonawców, definiuje
wytyczne, przyjmuje i rozpatruje skargi, zleca audyty oraz nadzoruje
wyniki monitoringu.
* Kierownik działu IT - zarządza serwerem i systemem CMS, utrzymuje
repozytorium kodu, konfiguruje proces ciągłej integracji z testami WCAG
i zapewnia działanie narzędzi monitorujących.
* Zespół redakcyjny - publikuje treści zgodne z WCAG, dba o strukturę
nagłówków, teksty alternatywne, nazwy elementów aktywnych i język
prosty, bierze udział w przeglądach treści.
* Projektant UX UI - tworzy makiety i style zgodne z zasadami
projektowania uniwersalnego, w dużych projektach konsultuje się z firmą
testerską.
* Programista - koduje semantyczny HTML CSS JS, stosuje znaczniki
ARIA, konfiguruje szablony CMS.
* Firma testerska - skaluje zakres audytów do wielkości projektu,
dostarcza raporty z zaleceniami.

### 3.2 Matryca RACI (przykład)

| Faza            | Koordynator | Kierownik IT | Zespół         | Firma         |
|-----------------|-------------|--------------|---------------|---------------|
| Planowanie      | A           | R            | C             | C             |
| Projektowanie   | C           | C            | I             | C             |
| Wykonanie       | C           | A R          | I             | I             |
| Testowanie      | A           | C            | C             | R             |
| Utrzymanie      | A           | R            | R             | C             |

Legenda: R - wykonuje, A - odpowiada, C - konsultuje, I - informowany.

## 4. Szkolenia

* Przed projektowaniem: warsztat WCAG 2.1 2.2 dla projektantów,
programistów i kierownika IT.
* Przed kodowaniem: szkolenie redakcji i administratorów CMS z
tworzenia treści dostępnych.
* Przed publikacją: krótkie przypomnienie list kontrolnych dla
wszystkich ról.
* Co 12 miesięcy: sesja odświeżenia wiedzy o aktualnych standardach
oraz najczęstszych problemach dostępności.

## 5. Cykl życia strony internetowej

### Faza 1 - Koncepcja i definiowanie wymagań

* W opisie zamówienia i SIWZ zapisuje się WCAG 2.1 (zalecane 2.2) AA,
EN 301 549 oraz obowiązek posiadania Deklaracji Dostępności.
* Powstaje matryca RACI oraz wstępny budżet na szkolenia, testy i
audyty.
* Analizowane są ryzyka i wybierane technologie przyjazne dostępności.

### Faza 2 - Projektowanie

* Projektant przygotowuje makiety zgodne z zasadami projektowania
uniwersalnego.
* W dużych projektach makiety konsultowane są z firmą testerską.
* Dokumentacja projektowa zawiera odniesienie do konkretnych kryteriów
WCAG.

### Faza 3 - Wykonanie (kodowanie i integracja CMS)

* Programista implementuje semantyczny kod, proces CI CD uruchamia
testy automatyczne WCAG.
* Redakcja publikuje treści testowe, kierownik IT uruchamia skanery
automatyczne.

### Faza 4 - Testowanie i walidacja

* Mały serwis: pojedynczy audyt kandydata do publikacji.
* Średni serwis: audyt wersji beta, audyt kandydata do publikacji.
* Duży projekt: doradztwo przy makietach, testy iteracyjne w trakcie
budowy, audyt kandydata do publikacji.
* Raporty trafiają do koordynatora, poprawki są weryfikowane w testach
weryfikacyjnych.

### Faza 5 - Publikacja i deklaracja

* Po pozytywnym audycie strona trafia na serwer produkcyjny.
* Kierownik IT publikuje Deklarację Dostępności i formularz zgłaszania
barier.
* Dział IT lub firma zewnętrzna aktywuje monitoring automatyczny.

### Faza 6 - Utrzymanie i rozwój

* Skargi użytkowników usuwa się w terminach ustawowych.
* Audyt kontrolny przeprowadzany jest co najmniej raz w roku lub po
każdej dużej aktualizacji (nowy szablon, zmiana silnika CMS, duży
moduł).
* Procedura regresji: każda zmiana przechodzi test automatyczny i
ręczny. Starsze wersje treści są archiwizowane, a Deklaracja Dostępności
aktualizowana.

### Faza 7 - Starzenie się i wycofanie

* Tworzona jest dostępna kopia (HTML lub PDF UA), plan przekierowań i
komunikat dla użytkowników.
* Informacja trafia do Deklaracji Dostępności i rocznego raportu.

## 6. Monitorowanie dostępności

Monitoring automatyczny jest konfigurowany i utrzymywany przez dział IT lub firmę zewnętrzną. Obejmuje skanery WCAG oraz kontrolę błędów 404. Koordynator dostępności otrzymuje okresowe raporty i zleca działania korygujące.

## 7. Planowane dokumenty pomocnicze

* Lista kontrolna koordynatora dostępności dla każdej fazy.
* Wzór klauzuli dostępności do SIWZ i umów.
* Procedura reagowania na regresję oraz formularz zgłaszania barier.