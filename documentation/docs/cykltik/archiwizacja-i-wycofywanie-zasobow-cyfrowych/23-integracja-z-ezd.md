---
id: 23-integracja-z-ezd
title: Integracja z EZD
description: Zasady powiązania publikacji, zasobów cyfrowych i decyzji archiwizacyjnych z systemem EZD.
sidebar_label: Integracja z EZD
sidebar_position: 23
keywords: [EZD, dokument sprawy, metadane, publikacja, archiwum zakładowe]
tags: [cykl-zycia-tik, EZD]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Integracja z EZD

## Cel

Celem dokumentu jest opisanie relacji między publikacją w WWW i BIP a systemem EZD. Publikacja dokumentu nie powinna tworzyć równoległego, niekontrolowanego obiegu poza sprawą. Zasób opublikowany publicznie powinien mieć możliwe do ustalenia powiązanie z dokumentem, sprawą albo procesem, z którego wynika.

## Zakres

Dokument dotyczy podmiotów korzystających z EZD, systemów kancelaryjnych, składów dokumentów elektronicznych, BIP, CMS, repozytoriów plików i systemów dziedzinowych powiązanych z dokumentacją spraw.

## Zasady

Jeżeli treść publikowana w BIP albo WWW jest dokumentem sprawy, publikacja jest tylko jednym ze sposobów jej udostępnienia. Dokument powinien pozostać powiązany ze sprawą, klasą JRWA, metadanymi, wersją i właścicielem.

Podmiot powinien unikać sytuacji, w której dokument istnieje w EZD jako dokument formalny, a w CMS jako odrębny plik bez identyfikatora, statusu, daty i powiązania ze sprawą. Taki podwójny obieg utrudnia archiwizację, migrację, wycofanie i obsługę wniosków o informację publiczną.

## Kiedy treść jest dokumentem

Treść może być dokumentem, jeżeli:

- powstała w związku ze sprawą,
- została zatwierdzona przez upoważnioną osobę,
- dokumentuje działanie podmiotu,
- stanowi załącznik do sprawy,
- jest wymagana przepisami,
- ma wartość dowodową,
- została opublikowana jako informacja publiczna wynikająca z działalności podmiotu.

Nie każda aktualność serwisowa jest dokumentem sprawy, ale każda treść publiczna powinna mieć właściciela i status.

## Powiązanie publikacji ze sprawą

Podmiot powinien zapewnić mechanizm wskazania, z jakiej sprawy albo procesu pochodzi dokument publikowany w BIP lub WWW. Może to być identyfikator sprawy, znak sprawy, klasa JRWA, identyfikator dokumentu, identyfikator publikacji albo wpis w rejestrze decyzji.

Zakres powiązania powinien uwzględniać ochronę danych osobowych i bezpieczeństwo informacji. Nie zawsze identyfikator sprawy musi być publiczny, ale powinien być dostępny wewnętrznie.

## Identyfikatory i metadane

Wymagane jest utrzymywanie spójnych metadanych między EZD, CMS, BIP i repozytorium. Minimalnie należy zachować tytuł, datę, właściciela, status, wersję, podstawę publikacji, powiązanie ze sprawą i informację o miejscu publikacji.

Metadane powinny wspierać [Standard metadanych](./16-standard-metadanych.md), [Procedurę archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md) i [Procedurę wycofywania treści](./11-procedura-wycofywania-tresci.md).

## Unikanie duplikacji

Duplikacja występuje, gdy ten sam dokument jest przechowywany w wielu miejscach bez kontroli wersji. Podmiot powinien ustalić, która wersja jest źródłowa, która jest publikacyjna, a która archiwalna.

Jeżeli dokument jest aktualizowany w EZD, proces publikacji powinien przewidywać aktualizację wersji publicznej albo informację, że starsza wersja została zastąpiona. Brak takiego powiązania prowadzi do pozostawiania w sieci dokumentów nieaktualnych.

## Wymagania

Podmiot powinien:

- określić, które typy dokumentów publikowanych mają powiązanie z EZD,
- utrzymywać identyfikatory wewnętrzne,
- zachowywać metadane publikacji,
- wskazywać właściciela zasobu,
- zapewnić przekazanie informacji o wycofaniu albo archiwizacji do właściwej sprawy,
- uwzględniać archiwum zakładowe przy dokumentacji spraw.

## Ryzyka

Najważniejsze ryzyko to powstanie dwóch obiegów dokumentów: formalnego w EZD i publikacyjnego w CMS albo BIP. Skutkiem może być utrata kontroli wersji, błędna kwalifikacja archiwalna, niespójne metadane, trudności w migracji i wycofaniu treści oraz brak możliwości wykazania historii publikacji.

## Powiązania

Dokument rozwija [Model cyklu życia](./06-model-cyklu-zycia.md) dla dokumentów sprawy, korzysta z [Modelu statusów zasobów](./07-model-statusow-zasobow.md), odpowiada na pytania [Modelu decyzyjnego](./08-model-decyzyjny.md) i ogranicza ryzyka z [Modelu ryzyk](./09-model-ryzyk.md). Należy go stosować razem z [Procedurą kwalifikacji archiwalnej](./14-procedura-kwalifikacji-archiwalnej.md), [Standardem metadanych](./16-standard-metadanych.md) i [Archiwizacją w BIP i serwisach WWW](./21-archiwizacja-w-bip-i-serwisach-www.md).
