---
id: 37-lista-kontrolna-wycofania-systemu
title: Lista kontrolna wycofania systemu
description: Lista kontrolna czynności wymaganych przed wyłączeniem systemu teleinformatycznego.
sidebar_label: Lista systemu
sidebar_position: 37
keywords: [lista kontrolna, wycofanie systemu, inwentaryzacja, eksport, migracja, test odtworzenia]
tags: [cykl-zycia-tik, lista-kontrolna]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Lista kontrolna wycofania systemu

## Cel

Celem listy jest potwierdzenie, że system teleinformatyczny może zostać wyłączony bez utraty danych, dokumentów, metadanych, ciągłości dostępu, rozliczalności i dokumentacji technicznej.

## Zakres

Lista dotyczy CMS, BIP, EZD, aplikacji, repozytoriów, systemów dziedzinowych, baz danych, formularzy elektronicznych, platform projektowych, usług zewnętrznych i systemów pomocniczych.

## Zasady

System można wyłączyć dopiero po pozytywnej odpowiedzi na punkty blokujące albo po udokumentowanej decyzji kierownictwa o ryzyku resztkowym. Sama informacja o końcu umowy, wsparcia albo finansowania nie jest wystarczającą podstawą wyłączenia.

## Szczegóły

| Obszar | Pytanie | TAK | NIE | NIE DOTYCZY | Punkt blokujący |
| --- | --- | --- | --- | --- | --- |
| Inwentaryzacja | Czy wykonano wykaz danych, dokumentów, załączników, multimediów, logów, metadanych i konfiguracji? |  |  |  | Tak |
| Inwentaryzacja | Czy wskazano właścicieli danych i właściciela systemu? |  |  |  | Tak |
| Inwentaryzacja | Czy opisano integracje, API, procesy i zależności zewnętrzne? |  |  |  | Tak |
| Eksport | Czy wykonano eksport danych, plików, relacji, historii zmian i metadanych? |  |  |  | Tak |
| Eksport | Czy format eksportu umożliwia odczyt poza systemem źródłowym? |  |  |  | Tak |
| Migracja | Czy określono, które dane są migrowane, archiwizowane, pozostawiane tylko do odczytu albo brakowane? |  |  |  | Tak |
| Migracja | Czy przygotowano mapowanie pól i protokół migracji? |  |  |  | Tak, jeżeli system jest migrowany |
| Test odtworzenia | Czy wykonano test odtworzenia danych i dokumentów? |  |  |  | Tak |
| Test odtworzenia | Czy test objął przypadki typowe i trudne, w tym załączniki, relacje i metadane? |  |  |  | Tak |
| Archiwizacja | Czy dane niemigrowane zostały zarchiwizowane albo przekazane zgodnie z decyzją? |  |  |  | Tak |
| Dane osobowe | Czy IOD ocenił zakres danych osobowych i dalsze przechowywanie? |  |  |  | Tak, jeżeli system zawiera dane osobowe |
| Dostępność i użytkownicy | Czy wskazano kanał zastępczy, dostęp na wniosek albo informację dla użytkowników? |  |  |  | Tak, jeżeli system był publiczny albo obsługiwał sprawy |
| Komunikacja | Czy poinformowano użytkowników wewnętrznych i publicznych o zmianie? |  |  |  | Tak, jeżeli dotyczy |
| Dokumentacja | Czy odebrano dokumentację techniczną, administracyjną i eksportową? |  |  |  | Tak |
| Dokumentacja | Czy zamknięto konta, dostępy wykonawców, integracje i umowy operacyjne? |  |  |  | Tak |
| Decyzja | Czy kierownictwo albo właściciel systemu zatwierdził termin wyłączenia po spełnieniu warunków? |  |  |  | Tak |

Punkty blokujące obejmują brak inwentaryzacji, brak eksportu, brak testu odtworzenia, brak decyzji o danych, brak komunikacji dla użytkowników i brak zatwierdzenia terminu wyłączenia.

## Wariant minimalny (system ograniczony)

Jeżeli system nie posiada eksportu danych, logów, metadanych albo wersjonowania, przed wyłączeniem należy potwierdzić wykonanie wariantu minimalnego.

| Obszar | Pytanie | TAK | NIE | NIE DOTYCZY | Punkt blokujący |
| --- | --- | --- | --- | --- | --- |
| Kopia manualna | Czy wykonano manualną kopię plików? |  |  |  | Tak |
| Baza danych | Czy wykonano zrzut bazy danych, jeżeli był możliwy? |  |  |  | Tak, jeżeli dotyczy |
| URL | Czy sporządzono wykaz URL? |  |  |  | Tak |
| Pliki | Czy sporządzono wykaz plików? |  |  |  | Tak |
| Braki systemu | Czy opisano brak eksportu, logów, metadanych albo wersjonowania? |  |  |  | Tak |
| Protokół braków | Czy sporządzono protokół braków? |  |  |  | Tak |
| Ryzyko resztkowe | Czy właściciel systemu albo kierownictwo zatwierdziło ryzyko resztkowe? |  |  |  | Tak |

Odpowiedź NIE przy punkcie blokującym oznacza, że system nie powinien zostać wyłączony bez decyzji kierownictwa i udokumentowania skutków.

## Ryzyka

Wyłączenie systemu bez spełnienia punktów blokujących może spowodować utratę dokumentów, utratę metadanych, przerwanie usług, naruszenie obowiązków archiwalnych, naruszenie ochrony danych osobowych i zależność od wykonawcy.

## Powiązania

Lista wykonuje wymagania [Procedury wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Procedury migracji danych](./13-procedura-migracji-danych.md), [Wymagań dla systemów](./24-wymagania-dla-systemow.md), [Kryteriów wycofania systemu](./25-kryteria-wycofania-systemu.md), [Dokumentowania procesu wycofania](./26-dokumentowanie-procesu-wycofania.md) i [Modelu dla dużych podmiotów](./29-model-dla-duzych-podmiotow.md).
