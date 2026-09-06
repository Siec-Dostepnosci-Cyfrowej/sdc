---
id: 11-standard-przygotowania-dokumentow-pdf
title: Standard przygotowania dokumentów PDF
description: Zasady tworzenia i publikowania dostępnych dokumentów PDF.
sidebar_label: Dokumenty PDF
sidebar_position: 11
keywords: [PDF, tagi, kolejność odczytu, formularz PDF, dostępność]
tags: [PDF, dokumenty, dostępność cyfrowa]
opracowanie: Stefan Wajda
wspolpraca: Bartłomiej Wilk
ostatnia_aktualizacja: 6 września 2026 r.
wersja_robocza: true
---

## Cel

Zapewnienie, aby dokument PDF miał strukturę i właściwości umożliwiające poprawny odczyt, nawigację i obsługę przy użyciu technologii wspomagających.

## Zakres

Standard obejmuje dokumenty PDF tworzone z dokumentów źródłowych, skany przekształcane do PDF oraz interaktywne formularze PDF.

## Wymagania i zasady przygotowania

- Jeżeli dokument powstaje z edytowalnego źródła, najpierw zapewnij dostępność dokumentu źródłowego, a następnie eksportuj go do PDF w sposób zachowujący strukturę i tagi.
- Dokument powinien zawierać tekst możliwy do odczytania i wyszukania; sam obraz strony nie jest równoważny dokumentowi tekstowemu.
- Skan wymagający publikacji poddaj rozpoznaniu tekstu i popraw wynik OCR; samo OCR nie zapewnia poprawnej struktury dokumentu.
- Zapewnij poprawne tagi odpowiadające strukturze dokumentu, w szczególności nagłówkom, akapitom, listom, tabelom i elementom graficznym.
- Sprawdź logiczną kolejność odczytu i kolejność nawigacji.
- Znaczącym obrazom zapewnij właściwe teksty alternatywne lub inne równoważne opisy.
- Tabele powinny mieć poprawnie określone komórki nagłówkowe i relacje z danymi.
- Ustaw tytuł dokumentu i właściwy język.
- Linki i zakładki, jeżeli są potrzebne do nawigacji, powinny mieć zrozumiałe nazwy i działać poprawnie.
- Formularze PDF powinny mieć programowo powiązane etykiety pól, logiczną kolejność fokusu, dostępne instrukcje oraz zrozumiałe komunikaty błędów.
- Sprawdzenie automatyczne programu traktuj jako element kontroli, a nie potwierdzenie pełnej zgodności dokumentu.

## Zalecany sposób realizacji

Preferuj tworzenie PDF z dostępnego dokumentu źródłowego. Ręczna remediacja PDF jest potrzebna wtedy, gdy eksport nie zachował poprawnej struktury lub gdy nie ma dostępnego źródła. Po remediacji sprawdź dokument także za pomocą czytnika ekranu lub innej metody manualnej odpowiedniej do jego złożoności.

## Najczęstsze błędy

- skan bez warstwy tekstowej,
- OCR bez poprawy struktury i błędów rozpoznawania,
- brak tagów albo niepoprawna hierarchia nagłówków,
- błędna kolejność odczytu,
- obrazy bez odpowiedników,
- tabele bez nagłówków,
- formularze bez etykiet pól,
- drukowanie dokumentu do PDF zamiast eksportu zachowującego strukturę.

## Powiązane standardy

- [Standard przygotowania dokumentów tekstowych](./08-standard-przygotowania-dokumentow-tekstowych)
- [Standard opisów alternatywnych i treści równoważnych](./05-standard-opisow-alternatywnych-i-tresci-rownowaznych)
