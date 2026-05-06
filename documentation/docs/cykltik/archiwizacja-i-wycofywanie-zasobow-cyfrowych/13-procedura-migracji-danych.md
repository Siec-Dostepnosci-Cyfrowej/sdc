---
id: 13-procedura-migracji-danych
title: Procedura migracji danych
description: Procedura planowania, wykonania i potwierdzania migracji danych oraz metadanych.
sidebar_label: Migracja danych
sidebar_position: 13
keywords: [migracja danych, eksport, mapowanie pól, test odtworzenia, protokół migracji]
tags: [cykl-zycia-tik, migracja]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Procedura migracji danych

## Cel

Celem procedury jest zapewnienie, aby migracja danych była zaplanowana, kontrolowana, testowana i udokumentowana. Migracja jest częścią archiwizacji i wycofywania systemów, ponieważ decyduje o tym, czy zasób cyfrowy zachowa treść, strukturę, metadane, kontekst i możliwość odczytu w czasie.

## Zakres

Procedurę stosuje się do migracji danych z CMS, BIP, EZD, systemów dziedzinowych, repozytoriów plików, baz danych, systemów formularzy, aplikacji mobilnych i platform projektowych.

Migracja może dotyczyć przeniesienia do nowego systemu, eksportu do repozytorium archiwalnego, konwersji formatu, konsolidacji danych albo wydzielenia zasobów historycznych.

## Zasady

Migracja nie może ograniczać się do przeniesienia plików. Powinna obejmować dane, metadane, relacje, statusy, załączniki, wersje, identyfikatory, powiązania ze sprawami, informacje o publikacji i elementy potrzebne do zachowania integralności.

Nie wolno usuwać systemu źródłowego ani danych źródłowych przed potwierdzeniem, że migracja została wykonana, sprawdzona i odebrana. Zachowanie oryginału albo kopii kontrolnej jest wymagane co najmniej do czasu zakończenia odbioru i decyzji o dalszym przechowywaniu.

## Warunki wejścia

Procedurę rozpoczyna się, gdy planowana jest zmiana systemu, wycofanie systemu, przeniesienie danych do repozytorium, uporządkowanie zasobów, modernizacja BIP albo CMS, wdrożenie EZD, zakończenie projektu albo potrzeba zabezpieczenia zasobów historycznych.

Minimalne dane wejściowe to opis systemu źródłowego, właściciel systemu, właściciel danych, zakres zasobów, system docelowy albo repozytorium, wymagania prawne i planowany termin.

## Przebieg krok po kroku

### 1. Inwentaryzacja danych

Należy ustalić typy danych, liczbę rekordów, dokumenty, załączniki, multimedia, użytkowników, statusy, metadane, logi, relacje i dane historyczne. Inwentaryzacja powinna wskazać, które elementy są aktywne, archiwalne, przeznaczone do migracji, wycofane albo objęte retencją.

### 2. Ustalenie zakresu migracji

Należy określić, co jest migrowane do systemu docelowego, co jest archiwizowane, co pozostaje tylko do odczytu, a co może zostać przygotowane do brakowania. Decyzje powinny wynikać z [Modelu decyzyjnego](./08-model-decyzyjny.md).

### 3. Mapowanie pól

Należy opisać relację między polami systemu źródłowego i docelowego. Mapowanie powinno obejmować identyfikatory, tytuły, daty, właścicieli, statusy, kategorie archiwalne, adresy URL, powiązania ze sprawami, formaty, uprawnienia i informacje o dostępności.

### 4. Eksport

Eksport powinien być wykonany w formacie możliwym do odczytu i kontroli. Dla danych tabelarycznych właściwe mogą być formaty CSV albo XML, dla dokumentów formaty trwałe, a dla metadanych struktury jawne i udokumentowane. Eksport powinien być powtarzalny i opisany. Przed rozpoczęciem importu należy zachować oryginał albo kopię kontrolną oraz przeprowadzić test odtworzenia tego eksportu w niezależnym środowisku.

### 5. Transformacja

Jeżeli dane wymagają konwersji, należy udokumentować reguły transformacji, zachować oryginał i sprawdzić, czy nie utracono znaków, dat, relacji, wersji, podpisów, załączników albo metadanych.

### 6. Import

Import do systemu docelowego powinien być wykonany najpierw testowo. Należy sprawdzić, czy system docelowy zachowuje statusy, właścicieli, historię, linki, uprawnienia i możliwość wyszukania danych.

### 7. Testy

Testy powinny obejmować integralność, kompletność, czytelność, relacje, uprawnienia, dostępność cyfrową, wyszukiwanie, raportowanie i odtworzenie zasobów historycznych. Próbka testowa powinna obejmować przypadki typowe i trudne.

### 8. Odbiór

Odbiór migracji powinien mieć formę protokołu. Protokół wskazuje zakres migracji, datę, osoby odpowiedzialne, wynik testów, liczbę przeniesionych elementów, błędy, działania naprawcze i decyzję o dalszym losie systemu źródłowego.

## Wymagania

Migracja powinna zachować:

- metadane,
- strukturę danych,
- powiązania między rekordami i dokumentami,
- statusy zasobów,
- identyfikatory i daty,
- integralność plików,
- możliwość odczytu w czasie,
- informację o dostępie publicznym albo ograniczonym,
- dane potrzebne do archiwizacji formalnej.

## Wariant minimalny (system ograniczony)

Jeżeli system nie posiada eksportu danych, logów, metadanych albo wersjonowania, migrację należy poprzedzić zabezpieczeniem minimalnym. Brak funkcji systemu trzeba opisać jako ryzyko i uwzględnić w protokole migracji.

W wariancie minimalnym należy:

- wykonać manualną kopię plików,
- wykonać zrzut bazy danych, jeżeli jest to możliwe,
- sporządzić wykaz URL,
- sporządzić wykaz plików,
- opisać brak funkcji systemu, w szczególności brak eksportu, logów, metadanych albo wersjonowania,
- sporządzić protokół braków,
- wskazać dane, których nie da się przenieść automatycznie,
- wykonać test odtworzenia przynajmniej na próbce typowych i trudnych przypadków.

Jeżeli nawet wariant minimalny nie jest możliwy, należy udokumentować brak możliwości migracji, wskazać źródła sprawdzone i przekazać decyzję do właściciela systemu albo kierownictwa.

## Warunki wyjścia

Migracja jest zakończona, gdy dane zostały zaimportowane albo zarchiwizowane, testy zakończyły się wynikiem pozytywnym, protokół został zatwierdzony, a system źródłowy ma określony dalszy status.

## Decyzje

Decyzje migracyjne obejmują zakres danych, format eksportu, system docelowy, zasady transformacji, czas utrzymania systemu źródłowego, zakres archiwizacji i sposób obsługi danych, których nie można przenieść automatycznie.

## Błędy i ryzyka

Najważniejsze ryzyka to utrata danych, utrata kontekstu, utrata metadanych, uszkodzenie plików, błędne mapowanie pól, brak testu odtworzenia, brak kontroli integralności i brak protokołu migracji.

Ryzyko utraty kontekstu jest szczególnie istotne w BIP, CMS i systemach dziedzinowych, gdzie dokument może mieć znaczenie tylko razem z datą publikacji, kategorią sprawy, statusem i powiązanym rekordem.

## Powiązania

Procedura realizuje fazę migracji z [Modelu cyklu życia](./06-model-cyklu-zycia.md), korzysta ze statusów z [Modelu statusów zasobów](./07-model-statusow-zasobow.md), wymaga decyzji z [Modelu decyzyjnego](./08-model-decyzyjny.md) i ogranicza ryzyka wskazane w [Modelu ryzyk](./09-model-ryzyk.md). Do wykonania procedury należy stosować [Formularz decyzji o wycofaniu](./39-formularz-decyzji-o-wycofaniu.md), [Dokumentowanie procesu wycofania](./26-dokumentowanie-procesu-wycofania.md), a przy wyłączaniu systemu także [Listę kontrolną wycofania systemu](./37-lista-kontrolna-wycofania-systemu.md).
