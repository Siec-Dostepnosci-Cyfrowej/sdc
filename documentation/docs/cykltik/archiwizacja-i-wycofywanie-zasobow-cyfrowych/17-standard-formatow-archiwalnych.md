---
id: 17-standard-formatow-archiwalnych
title: Standard formatów archiwalnych
description: Standard doboru formatów trwałych i zasad konwersji zasobów cyfrowych.
sidebar_label: Formaty archiwalne
sidebar_position: 17
keywords: [formaty archiwalne, PDF/A, XML, CSV, ODF, konwersja]
tags: [cykl-zycia-tik, standard]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Standard formatów archiwalnych

## Cel

Celem standardu jest wskazanie zasad doboru formatów, które umożliwiają długotrwałe przechowywanie, migrację, odczyt i weryfikację zasobów cyfrowych. Format powinien wspierać archiwizację, a nie utrudniać zachowanie dokumentu, metadanych i kontekstu.

## Zakres

Standard dotyczy dokumentów tekstowych, arkuszy, danych tabelarycznych, eksportów z systemów, stron WWW, multimediów, skanów, paczek archiwalnych i dokumentacji technicznej.

## Zasady

Format archiwalny powinien być możliwie otwarty, udokumentowany, stabilny, powszechnie obsługiwany i możliwy do walidacji. Wybór formatu musi uwzględniać treść, funkcję dokumentu, podpisy, metadane, dostępność cyfrową i wymagania systemu docelowego.

Konwersja nie może niszczyć oryginału, podpisu, metadanych, struktury, dostępności ani kontekstu sprawy. Oryginał powinien być zachowany co najmniej do czasu zatwierdzenia konwersji i decyzji o dalszym postępowaniu.

## Wymagania minimalne

Podmiot powinien:

- wskazać format źródłowy i docelowy,
- zachować oryginał albo kopię kontrolną,
- udokumentować konwersję,
- sprawdzić czytelność po konwersji,
- zachować metadane,
- sprawdzić wpływ konwersji na dostępność cyfrową,
- powiązać format z decyzją archiwizacyjną.

## Wymagania rozszerzone

Dla zasobów o większym znaczeniu należy stosować walidację formatu, sumy kontrolne, raport konwersji, test odtworzenia w niezależnym środowisku, opis utraconych właściwości i zgodę właściciela zasobu na postać docelową.

## Formaty trwałe

Jako formaty sprzyjające długotrwałemu przechowywaniu można stosować w szczególności:

- PDF/A dla dokumentów przeznaczonych do utrwalenia w postaci wizualnej,
- XML dla danych strukturalnych i metadanych,
- CSV dla danych tabelarycznych, gdy zachowana jest dokumentacja pól,
- TXT dla prostych treści tekstowych,
- ODF dla dokumentów edytowalnych w otwartym standardzie,
- formaty multimedialne o powszechnej obsłudze, z opisem parametrów technicznych.

Dobór formatu powinien wynikać z funkcji zasobu. Nie każdy dokument powinien być automatycznie konwertowany do PDF, jeżeli traci wtedy strukturę danych albo możliwość ponownego wykorzystania.

## Formaty ryzykowne

Formatami ryzykownymi są w szczególności stare formaty DOC, zamknięte formaty producentów, pliki wymagające nieutrzymywanego oprogramowania, eksporty bez dokumentacji struktury, skany bez warstwy tekstowej, pliki multimedialne bez kodeków powszechnie dostępnych oraz archiwa bez opisu zawartości.

Format ryzykowny nie oznacza automatycznej utraty wartości zasobu. Oznacza konieczność oceny, konwersji, zachowania oryginału i udokumentowania decyzji.

## Zasady konwersji

Konwersja powinna być przeprowadzona według zasad:

- przed konwersją identyfikuje się oryginał i jego metadane,
- wykonuje się kopię roboczą,
- dokumentuje się narzędzie i ustawienia,
- porównuje się wynik z oryginałem,
- sprawdza się dostępność cyfrową,
- sprawdza się podpisy i integralność,
- zapisuje się decyzję o przyjęciu formatu docelowego.

## Błędy

Błędami są: konwersja bez zachowania oryginału, utrata warstwy tekstowej, zapis danych tabelarycznych wyłącznie jako obraz, brak dokumentacji pól CSV, spłaszczenie podpisów, usunięcie metadanych i brak testu odczytu.

## Konsekwencje niespełnienia

Niewłaściwy format może uniemożliwić odczyt w czasie, migrację, dostępność cyfrową, weryfikację autentyczności, przekazanie do archiwum albo ponowne wykorzystanie informacji publicznej.

## Powiązania

Standard należy stosować z [Procedurą migracji danych](./13-procedura-migracji-danych.md), [Procedurą przekazania do archiwum](./15-procedura-przekazania-do-archiwum.md), [Standardem metadanych](./16-standard-metadanych.md) i [Standardem integralności i autentyczności](./18-standard-integralnosci-i-autentycznosci.md). Dobór formatu powinien wynikać z fazy [Modelu cyklu życia](./06-model-cyklu-zycia.md), statusu z [Modelu statusów zasobów](./07-model-statusow-zasobow.md), decyzji z [Modelu decyzyjnego](./08-model-decyzyjny.md) i oceny [Modelu ryzyk](./09-model-ryzyk.md).
