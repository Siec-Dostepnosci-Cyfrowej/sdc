---
id: 18-standard-integralnosci-i-autentycznosci
title: Standard integralności i autentyczności
description: Standard zabezpieczania integralności, autentyczności i śladu audytowego zasobów cyfrowych.
sidebar_label: Integralność
sidebar_position: 18
keywords: [integralność, autentyczność, sumy kontrolne, podpis elektroniczny, logi zmian]
tags: [cykl-zycia-tik, standard]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Standard integralności i autentyczności

## Cel

Celem standardu jest określenie, jak zabezpieczać zasób cyfrowy przed nieautoryzowaną zmianą, utratą wersji, utratą podpisu, brakiem możliwości wykazania pochodzenia i brakiem śladu audytowego.

## Zakres

Standard stosuje się do dokumentów elektronicznych, treści BIP i WWW, eksportów z systemów, paczek archiwalnych, danych migrowanych, formularzy, logów, dokumentacji technicznej i zasobów historycznych.

## Zasady

Integralność oznacza, że zasób nie został zmieniony w sposób niekontrolowany. Autentyczność oznacza możliwość wykazania pochodzenia, twórcy, decyzji, wersji i kontekstu. Obie cechy wymagają metadanych, kontroli dostępu, śladu zmian i odpowiedniego przechowywania.

Po archiwizacji zasób nie powinien być edytowany jak materiał roboczy. Jeżeli konieczna jest korekta opisu, powinna dotyczyć metadanych albo nowej wersji, a nie niekontrolowanej zmiany archiwalnego oryginału.

## Wymagania minimalne

Podmiot powinien zapewnić:

- identyfikator zasobu,
- kontrolę wersji,
- informację o autorze albo źródle,
- daty utworzenia, publikacji, aktualizacji i archiwizacji,
- ograniczenie uprawnień edycyjnych po archiwizacji,
- zapis decyzji o archiwizacji albo wycofaniu,
- lokalizację kopii archiwalnej,
- możliwość ustalenia, kto i kiedy zmienił zasób.

## Wymagania rozszerzone

Dla zasobów o większym znaczeniu należy stosować:

- sumy kontrolne,
- podpisy elektroniczne albo pieczęcie elektroniczne,
- znaczniki czasu,
- logi zmian,
- rejestr dostępu administracyjnego,
- raport eksportu albo migracji,
- porównanie kopii źródłowej i docelowej,
- blokadę edycji po nadaniu statusu archiwalnego.

## Wersjonowanie

Wersjonowanie powinno pozwalać odtworzyć historię zmian i ustalić, która wersja była publicznie dostępna w danym czasie. Dotyczy to zwłaszcza BIP, dokumentów publicznych, regulaminów, formularzy i informacji o usługach.

Nie należy zastępować wersji bez zachowania informacji o zmianie, jeżeli dokument ma znaczenie publiczne, prawne albo archiwalne.

## Sumy kontrolne

Sumy kontrolne należy stosować przy eksporcie, migracji, przekazaniu do archiwum, tworzeniu paczek archiwalnych i zabezpieczaniu dokumentów o wysokiej wartości. Suma kontrolna powinna być przechowywana razem z metadanymi i protokołem.

## Podpisy i pieczęcie

Dokument podpisany elektronicznie wymaga zachowania danych potrzebnych do weryfikacji podpisu, pieczęci albo znacznika czasu. Konwersja dokumentu nie powinna niszczyć możliwości ustalenia, że dokument był podpisany i kiedy.

## Logi i ślad audytowy

Ślad audytowy powinien obejmować utworzenie, publikację, aktualizację, zmianę statusu, eksport, migrację, archiwizację, wycofanie z publikacji i przekazanie. Logi powinny być chronione przed nieautoryzowaną zmianą i przechowywane przez okres wynikający z potrzeb prawnych oraz organizacyjnych.

## Błędy

Błędami są: edycja pliku archiwalnego bez nowej wersji, brak logów, brak ograniczenia uprawnień, utrata podpisu przy konwersji, brak sum kontrolnych przy migracji, przechowywanie jedynej kopii w folderze roboczym i brak protokołu przekazania.

## Konsekwencje niespełnienia

Brak integralności i autentyczności może uniemożliwić wykazanie, że zasób jest wiarygodny. Może też zablokować przekazanie, utrudnić rozpatrzenie wniosku o informację publiczną, podważyć wartość dowodową dokumentu i zwiększyć ryzyko naruszeń bezpieczeństwa.

## Powiązania

Standard wspiera [Procedurę archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md), [Procedurę migracji danych](./13-procedura-migracji-danych.md), [Procedurę przekazania do archiwum](./15-procedura-przekazania-do-archiwum.md) i ryzyka opisane w [Modelu ryzyk](./09-model-ryzyk.md). Integralność i autentyczność powinny być utrzymywane w fazach [Modelu cyklu życia](./06-model-cyklu-zycia.md), odzwierciedlone w [Modelu statusów zasobów](./07-model-statusow-zasobow.md) i sprawdzane przy decyzjach z [Modelu decyzyjnego](./08-model-decyzyjny.md).
