---
id: 32-przypadki-szczegolne
title: Przypadki szczególne
description: Zasady postępowania w trudnych przypadkach archiwizacji i wycofywania zasobów cyfrowych.
sidebar_label: Przypadki szczególne
sidebar_position: 32
keywords: [brak metadanych, brak JRWA, brak właściciela, uszkodzone pliki, format nieczytelny]
tags: [cykl-zycia-tik, przypadki-szczegolne]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Przypadki szczególne

## Cel

Celem dokumentu jest określenie sposobu postępowania, gdy zasób nie spełnia warunków zwykłej archiwizacji, migracji albo wycofania. Przypadek szczególny nie uzasadnia pominięcia procedury. Wymaga opisania problemu, ryzyka, decyzji tymczasowej i sposobu doprowadzenia zasobu do stanu możliwego do oceny.

## Zakres

Dokument obejmuje zasoby bez metadanych, bez klasyfikacji JRWA, bez właściciela, bez dostępu do systemu, z uszkodzonymi plikami, w formatach nieczytelnych oraz zasoby historyczne bez statusu.

Przypadki szczególne należy rozstrzygać z użyciem [Modelu decyzyjnego](./08-model-decyzyjny.md), [Modelu ryzyk](./09-model-ryzyk.md) i [Mapy odpowiedzialności](./30-mapa-odpowiedzialnosci.md).

## Zasady

Nie wolno usuwać zasobu tylko dlatego, że brakuje metadanych, właściciela, dostępu technicznego albo jednoznacznej kwalifikacji. Najpierw należy zabezpieczyć stan zastany, ograniczyć ryzyko utraty, opisać braki i wyznaczyć osobę odpowiedzialną za wyjaśnienie.

Jeżeli nie można ustalić pełnego stanu zasobu, należy nadać mu status tymczasowy zgodny z [Modelem statusów zasobów](./07-model-statusow-zasobow.md), na przykład do przeglądu, niedostępny technicznie, przeznaczony do migracji albo wymagający dostępu alternatywnego.

## Szczegóły

### Brak metadanych

**Problem:** zasób istnieje jako plik, wpis, strona albo rekord, ale nie wiadomo, kto go utworzył, kiedy powstał, z jaką sprawą jest powiązany, jaki ma status i dlaczego został opublikowany.

**Ryzyko:** błędna archiwizacja, utrata kontekstu, usunięcie informacji publicznej, niemożność wykazania autentyczności, brak odpowiedzialności.

**Możliwe rozwiązanie:** zabezpieczyć kopię, ustalić minimalne metadane, sprawdzić historię CMS, BIP, EZD, repozytorium i korespondencji, nadać identyfikator oraz status do przeglądu. Do czasu uzupełnienia metadanych nie należy podejmować decyzji o usunięciu.

### Brak JRWA

**Problem:** zasób może być dokumentacją sprawy, ale nie ma ustalonej klasy JRWA, kategorii archiwalnej albo okresu przechowywania.

**Ryzyko:** przedwczesne brakowanie, błędna kwalifikacja, utrata materiału archiwalnego, rozdzielenie publikacji od akt sprawy.

**Możliwe rozwiązanie:** skierować zasób do kwalifikacji z udziałem komórki merytorycznej i archiwum zakładowego. Jeżeli dokument dotyczy sprawy, należy powiązać go z aktami sprawy albo zapisać przyczynę braku takiego powiązania.

### Brak właściciela

**Problem:** nie można ustalić komórki albo osoby odpowiedzialnej za treść, dane albo system.

**Ryzyko:** decyzja bez kompetencji, pozostawienie zasobu bez przeglądu, brak reakcji na błędy, brak odpowiedzialności za dane osobowe i dostępność.

**Możliwe rozwiązanie:** kierownictwo wyznacza właściciela tymczasowego. Właściciel tymczasowy odpowiada za zebranie informacji, a nie za automatyczne zatwierdzenie usunięcia. Po ustaleniu właściwej komórki decyzję należy przenieść do właściwego właściciela zasobu.

### Brak dostępu do systemu

**Problem:** system jest nieutrzymywany, hasła są niedostępne, wykonawca nie świadczy wsparcia albo system działa tylko w starej infrastrukturze.

**Ryzyko:** utrata danych, brak eksportu, brak możliwości potwierdzenia integralności, zależność od wykonawcy, przerwanie dostępu do informacji.

**Możliwe rozwiązanie:** zabezpieczyć dostęp administracyjny, kopię środowiska, bazę danych, pliki i dokumentację techniczną. Jeżeli dostęp zależy od wykonawcy, należy formalnie zażądać przekazania danych i metadanych zgodnie z umową. Wyłączenie systemu jest niedopuszczalne do czasu decyzji o danych.

### Uszkodzone pliki

**Problem:** plik nie otwiera się, ma błędy, jest niekompletny albo różni się od wersji opublikowanej.

**Ryzyko:** utrata treści, niemożność odtworzenia dokumentu, błędne udostępnienie, brak dowodu autentyczności.

**Możliwe rozwiązanie:** zachować uszkodzony oryginał, poszukać kopii w CMS, BIP, EZD, kopiach bezpieczeństwa, korespondencji i repozytoriach. Próby naprawy należy dokumentować. Pliku po naprawie nie należy uznawać za oryginał bez opisu wykonanych działań.

### Format nieczytelny

**Problem:** zasób jest zapisany w formacie zależnym od starego oprogramowania, w formacie zamkniętym albo w formacie bez dostępnego czytnika.

**Ryzyko:** utrata możliwości odczytu, błędna konwersja, utrata podpisu, metadanych, warstw tekstowych albo relacji z innymi plikami.

**Możliwe rozwiązanie:** zachować oryginał, wykonać kopię roboczą, zidentyfikować oprogramowanie, przygotować konwersję do formatu trwałego i udokumentować różnice. Konwersja powinna być zgodna ze [Standardem formatów archiwalnych](./17-standard-formatow-archiwalnych.md).

### Zasób historyczny bez statusu

**Problem:** zasób jest stary, może mieć znaczenie historyczne albo dowodowe, ale nie ma statusu aktywnego, archiwalnego, wycofanego ani przekazanego.

**Ryzyko:** przypadkowe usunięcie, pozostawienie nieaktualnej treści bez oznaczenia, brak informacji dla użytkownika, utrata pamięci instytucjonalnej.

**Możliwe rozwiązanie:** nadać status do przeglądu, ustalić właściciela, sprawdzić wartość informacyjną, archiwalną i prawną, a następnie zdecydować o oznaczeniu jako archiwalny, wycofaniu z publikacji z dostępem na wniosek albo przekazaniu.

## Ryzyka

Przypadki szczególne są ryzykami blokującymi, jeżeli uniemożliwiają ustalenie statusu, właściciela, kategorii archiwalnej, dostępu albo integralności. W takim stanie nie należy wykonywać brakowania, usuwać publicznych treści ani wyłączać systemu.

## Powiązania

Dokument uzupełnia [Procedurę archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md), [Procedurę wycofywania treści](./11-procedura-wycofywania-tresci.md), [Procedurę wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Procedurę kwalifikacji archiwalnej](./14-procedura-kwalifikacji-archiwalnej.md), [Standard metadanych](./16-standard-metadanych.md), [Standard integralności i autentyczności](./18-standard-integralnosci-i-autentycznosci.md) oraz [Wymagania dla systemów](./24-wymagania-dla-systemow.md).
