---
id: 26-dokumentowanie-procesu-wycofania
title: Dokumentowanie procesu wycofania
description: Zasady dokumentowania decyzji, eksportów, testów i potwierdzeń związanych z wycofaniem zasobów oraz systemów.
sidebar_label: Dokumentowanie
sidebar_position: 26
keywords: [dokumentowanie, decyzja o wycofaniu, protokół eksportu, rejestr ryzyk, migracja]
tags: [cykl-zycia-tik, dokumentowanie]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Dokumentowanie procesu wycofania

## Cel

Celem dokumentu jest określenie, jakie informacje i dokumenty powinny powstać przy wycofaniu treści, zasobu albo systemu. Brak dokumentacji procesu wycofania jest samodzielnym ryzykiem prawnym, organizacyjnym, archiwalnym i technologicznym.

## Zakres

Dokument dotyczy wycofywania treści z BIP i WWW, archiwizacji zasobów, migracji danych, wycofywania systemów, ograniczania publicznego dostępu, przekazywania do archiwum i przygotowania do brakowania.

## Zasady

Każde wycofanie powinno być możliwe do odtworzenia. Podmiot powinien wiedzieć, co wycofano, dlaczego, kto podjął decyzję, jakie dane zabezpieczono, jak wykonano migrację, gdzie znajduje się zasób i jak użytkownik może uzyskać dostęp, jeżeli jest do tego uprawniony.

Dokumentowanie powinno być proporcjonalne do ryzyka. Proste wycofanie pojedynczej treści wymaga mniej dokumentów niż wycofanie systemu, ale w obu przypadkach decyzja nie powinna być wyłącznie czynnością techniczną w CMS.

## Wymagania dokumentacyjne

### Decyzja o wycofaniu

Decyzja powinna wskazywać przedmiot, powód, podstawę, właściciela, status przed i po wycofaniu, sposób dalszego dostępu, ocenę informacji publicznej, danych osobowych i dostępności.

### Inwentaryzacja

Inwentaryzacja powinna wskazywać zasoby, dane, załączniki, metadane, systemy źródłowe, właścicieli i powiązania ze sprawami albo publikacjami.

### Plan migracji

Plan migracji powinien określać zakres danych, format eksportu, mapowanie pól, system docelowy, harmonogram, role, testy i kryteria odbioru.

### Protokoły

Należy dokumentować eksport, import, test odtworzenia, kontrolę integralności, przekazanie do archiwum, zamknięcie systemu i ewentualne braki.

### Komunikacja

Jeżeli wycofanie wpływa na użytkowników, należy dokumentować komunikaty, przekierowania, informacje o dostępie na wniosek i kontakt w sprawie dostępu alternatywnego.

## Przebieg dokumentowania

1. Zarejestruj zamiar wycofania albo migracji.
2. Wskaż właściciela zasobu albo systemu.
3. Wykonaj inwentaryzację.
4. Zastosuj [Model decyzyjny](./08-model-decyzyjny.md).
5. Opisz ryzyka z [Modelu ryzyk](./09-model-ryzyk.md).
6. Przygotuj decyzję albo plan.
7. Wykonaj eksport, archiwizację albo wycofanie.
8. Potwierdź wynik protokołem.
9. Nadaj status zgodny z [Modelem statusów zasobów](./07-model-statusow-zasobow.md).
10. Zachowaj dokumentację procesu w miejscu właściwym dla sprawy.

## Ryzyka

Brak dokumentacji może uniemożliwić wykazanie, że wycofanie było zgodne z prawem, że dane zostały zabezpieczone, że użytkownicy nie zostali odcięci od informacji i że dokumentacja została potraktowana zgodnie z JRWA oraz kategorią archiwalną.

Ryzykiem jest także dokumentowanie rozproszone w wiadomościach poczty elektronicznej, bez rejestru, właściciela i powiązania ze sprawą.

## Powiązania

Dokumentowanie wspiera [Procedurę wycofywania treści](./11-procedura-wycofywania-tresci.md), [Procedurę wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Procedurę migracji danych](./13-procedura-migracji-danych.md), [Procedurę przekazania do archiwum](./15-procedura-przekazania-do-archiwum.md), [Model cyklu życia](./06-model-cyklu-zycia.md), [Model statusów zasobów](./07-model-statusow-zasobow.md), [Model decyzyjny](./08-model-decyzyjny.md) i [Model ryzyk](./09-model-ryzyk.md).
