---
id: przeglad-dostepnosci-instrukcja-uzytkownika
title: Instrukcja użytkownika szablonu przeglądu dostępności cyfrowej
sidebar_label: Instrukcja użytkownika szablonu przeglądu
sidebar_position: 4
description: Organizacja poprzedza coroczną aktualizację deklaracji dostępności strony internetowej przeglądem dostępności
keywords: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
tags: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
opracowanie: Stefan Wajda 
data_zgloszenia: 4 listopada 2025 r.
ostatnia_aktualizacja: 4 listopada 2025 r.
wersja_robocza: true

---


Urząd Miejski w Nowoczesnym Mieście Cyfrowym

## 1. Cel dokumentu

Celem niniejszej instrukcji jest przedstawienie zasad korzystania z
arkusza „Przegląd dostępności cyfrowej" służącego do corocznej,
wewnętrznej oceny dostępności stron internetowych i aplikacji mobilnych
jednostki sektora publicznego. Arkusz ma charakter pomocniczy i stanowi
podstawę do aktualizacji deklaracji dostępności cyfrowej.

## 2. Zakres i częstotliwość przeglądu

Przegląd dostępności cyfrowej należy przeprowadzać co najmniej raz w
roku, najlepiej w lutym lub marcu - przed aktualizacją deklaracji
dostępności. Może być wykonany także po istotnych zmianach w strukturze
strony lub systemie CMS.

## 3. Struktura arkusza

Arkusz Excel składa się z czterech części:
- Dane ogólne (jednostka, data, adres, osoby przeprowadzające przegląd)
- Lista 25 kryteriów dostępności zgodnych z WCAG 2.1 AA
- Kolumny oceny („Spełnione -- TAK/NIE/CZĘŚCIOWO", „Uwagi/Zalecenia")
- Sekcja automatycznego podsumowania (liczba kryteriów spełnionych 
  i procent zgodności)

## 4. Sposób wypełniania arkusza

1. Wypełnij sekcję danych ogólnych: nazwę jednostki, datę, adres strony oraz osoby wykonujące przegląd.
2. Dla każdego z 25 kryteriów wpisz w kolumnie „Spełnione" jedną z wartości: TAK / NIE / CZĘŚCIOWO.
3. W kolumnie „Uwagi / zalecenia" opisz zauważone problemy, błędy lub działania naprawcze.
4. Nie usuwaj formuł w dolnych wierszach - system sam obliczy wyniki przeglądu.

## 5. Automatyczne obliczenia

W dolnej części arkusza znajdują się formuły automatycznie zliczające
liczbę kryteriów spełnionych i niespełnionych, oraz obliczające poziom
zgodności w procentach. Przykład:

- Liczba kryteriów spełnionych: `=COUNTIF(C7:C31,"TAK")`
- Poziom zgodności (%): =`(COUNTIF(C7:C31,"TAK")/COUNTA(C7:C31))*100`

## 6. Interpretacja wyniku

Wynik przeglądu wyrażony w procentach stanowi przybliżony poziom
zgodności strony z wymaganiami WCAG 2.1 AA.

- **90-100%**: bardzo dobra dostępność (niewielkie korekty redakcyjne)
- **70-89%**: średnia dostępność (zalecane działania naprawcze)
- **poniżej 70%**: niska dostępność (wymagany audyt szczegółowy)

Na podstawie wyniku można uzupełnić deklarację dostępności, określając
stopień zgodności oraz opisując obszary niedostępne.

## 7. Archiwizacja i aktualizacja

1. Po zakończeniu przeglądu arkusz należy zapisać w formacie XLSX i przekazać do koordynatora ds. dostępności.
2. Plik należy archiwizować przez okres co najmniej 3 lat.
3. W przypadku zmian w strukturze strony, arkusz powinien zostać uaktualniony i ponownie wypełniony.
4. Zaktualizowany wynik należy uwzględnić przy corocznej publikacji deklaracji dostępności cyfrowej.

Opracował:

Zatwierdził:

Data zatwierdzenia:

Podpis:
