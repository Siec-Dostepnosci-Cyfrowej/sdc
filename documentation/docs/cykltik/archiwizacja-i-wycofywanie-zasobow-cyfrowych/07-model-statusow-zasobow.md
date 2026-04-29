---
id: 07-model-statusow-zasobow-cyfrowych
title: Model statusów zasobów cyfrowych
description: Statusy zasobów cyfrowych oraz zasady ich nadawania, zmiany i dokumentowania.
sidebar_label: Model statusów
sidebar_position: 7
keywords: [status zasobu, treść archiwalna, wycofanie z publikacji, migracja danych, dostęp alternatywny]
tags: [cykl-zycia-tik, model]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Model statusów zasobów cyfrowych

## Cel

Celem modelu jest wprowadzenie jednolitego sposobu opisywania stanu zasobu cyfrowego. Status pozwala ustalić, czy zasób jest roboczy, aktywny, wymaga przeglądu, jest archiwalny, został wycofany z publikacji, wymaga migracji, został przekazany albo wymaga dostępu alternatywnego.

Każdy zasób cyfrowy powinien mieć status. Brak statusu jest ryzykiem organizacyjnym i archiwalnym, ponieważ utrudnia decyzję o aktualności, dostępności, retencji, migracji i odpowiedzialności.

## Zasady nadawania statusów

Status powinien być nadawany przez właściciela zasobu, właściciela systemu, redaktora, administratora BIP albo inną upoważnioną osobę zgodnie z zakresem odpowiedzialności. W przypadku dokumentów powiązanych ze sprawą albo kategorią archiwalną decyzja powinna uwzględniać archiwum zakładowe, JRWA i instrukcję kancelaryjną.

Zmiana statusu powinna być dokumentowana. Minimalne metadane zmiany to data, osoba, poprzedni status, nowy status, powód, podstawa decyzji i informacja o dalszym dostępie.

## Statusy

| Status | Znaczenie | Kiedy się go nadaje | Kto może nadać | Co wolno robić | Czego nie wolno robić | Wymagane metadane | Następny możliwy status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Roboczy | Zasób jest przygotowywany i nie jest jeszcze oficjalnie opublikowany ani zatwierdzony. | Przy tworzeniu dokumentu, strony, formularza, danych albo materiału multimedialnego. | Autor, właściciel zasobu, redaktor. | Edytować, uzupełniać, oceniać dostępność, zbierać metadane. | Publikować bez akceptacji i wymaganych metadanych. | Twórca, data utworzenia, właściciel, wersja, format. | Aktywny, do przeglądu, wycofany z przygotowania. |
| Aktywny | Zasób jest obowiązujący albo aktualnie wykorzystywany. | Po zatwierdzeniu i publikacji albo po przyjęciu do użycia w systemie. | Właściciel zasobu, redaktor, administrator BIP. | Publikować, aktualizować, monitorować, linkować. | Oznaczać jako archiwalny bez decyzji. | Data publikacji, URL, właściciel, podstawa publikacji, wersja. | Do przeglądu, nieaktualny, przeznaczony do migracji, archiwalny. |
| Do przeglądu | Zasób wymaga oceny aktualności, dostępności, retencji albo dalszego utrzymania. | Po upływie terminu przeglądu, zmianie prawa, zmianie systemu albo zgłoszeniu problemu. | Właściciel zasobu, redaktor, koordynator dostępności, archiwum zakładowe. | Analizować, testować, konsultować, przygotować rekomendację. | Usuwać albo wycofywać bez decyzji. | Data przeglądu, powód, osoba oceniająca, rekomendacja. | Aktywny, poprawiony, nieaktualny, archiwalny, wycofany z publikacji. |
| Nieaktualny | Zasób utracił aktualność, ale nie podjęto jeszcze decyzji końcowej. | Po stwierdzeniu zmiany stanu prawnego, organizacyjnego, danych albo informacji. | Właściciel zasobu, redaktor, komórka merytoryczna. | Oznaczyć, ograniczyć użycie, przygotować decyzję. | Pozostawiać bez oznaczenia, jeżeli może wprowadzać w błąd. | Data stwierdzenia nieaktualności, powód, informacja o wersji aktualnej. | Archiwalny, wycofany z publikacji, aktywny po aktualizacji. |
| Archiwalny | Zasób nie pełni funkcji bieżącej, ale pozostaje zachowany i może być dostępny jako treść archiwalna. | Po decyzji o zachowaniu zasobu ze względów dokumentacyjnych, informacyjnych albo archiwalnych. | Właściciel zasobu, archiwum zakładowe, redaktor po akceptacji. | Oznaczyć, udostępniać, zabezpieczyć, ograniczyć edycję. | Aktualizować treści bez zachowania historii i decyzji. | Data archiwizacji, powód, lokalizacja, status dostępności, kategoria archiwalna, powiązanie ze sprawą. | Przekazany, przeznaczony do migracji, wymagający dostępu alternatywnego. |
| Wycofany z publikacji | Zasób nie jest już publicznie dostępny w dotychczasowym miejscu. | Po decyzji o usunięciu z publicznej publikacji przy zachowaniu albo innym udostępnieniu. | Właściciel zasobu, administrator BIP, kierownictwo w sprawach istotnych. | Zachować w repozytorium, udostępniać na wniosek, przekierować użytkownika. | Usuwać kopii źródłowej bez kwalifikacji i retencji. | Decyzja, powód, data, sposób dalszego dostępu, osoba odpowiedzialna. | Przekazany, przeznaczony do brakowania, wymagający dostępu alternatywnego. |
| Przeznaczony do migracji | Zasób ma zostać przeniesiony do innego systemu, formatu albo repozytorium. | Przed zmianą CMS, BIP, EZD, repozytorium albo systemu dziedzinowego. | Właściciel systemu, IT, właściciel danych. | Eksportować, mapować pola, testować, zabezpieczyć oryginał. | Wyłączać system źródłowy przed testem odtworzenia. | Zakres migracji, system źródłowy, system docelowy, format eksportu, osoba odpowiedzialna. | Zmigrowany, archiwalny, przekazany. |
| Zmigrowany | Zasób został przeniesiony i pozytywnie zweryfikowany w miejscu docelowym. | Po zakończeniu migracji i teście odtworzenia. | Właściciel systemu, IT, właściciel danych. | Potwierdzić, zamknąć etap migracji, zachować protokół. | Usuwać źródła przed decyzją o retencji. | Protokół migracji, wynik testu, data, zakres danych, kontrola integralności. | Aktywny, archiwalny, przekazany, przeznaczony do brakowania. |
| Przeznaczony do brakowania | Dokumentacja kategorii B może zostać brakowana po spełnieniu warunków. | Po upływie okresu przechowywania i ocenie zgodnej z przepisami. | Archiwum zakładowe, upoważnione osoby, zgodnie z procedurą. | Przygotować wykaz, uzgodnić, wykonać brakowanie po wymaganych zgodach. | Brakować bez podstawy, bez wykazu i bez wymaganej procedury. | Kategoria, okres przechowywania, podstawa, wykaz, zgoda, data. | Brakowany, przekazany w razie zmiany kwalifikacji. |
| Przekazany | Zasób lub dokumentacja została przekazana do właściwego miejsca przechowywania. | Po przekazaniu do archiwum zakładowego, repozytorium docelowego albo archiwum państwowego. | Archiwum zakładowe, właściciel zasobu, upoważniona osoba. | Przechowywać zgodnie z zasadami, udostępniać według trybu. | Modyfikować bez procedury i śladu audytowego. | Potwierdzenie przekazania, zakres, data, lokalizacja, identyfikator paczki. | Archiwalny, udostępniany na wniosek, brakowany w przewidzianym trybie. |
| Niedostępny technicznie | Zasób istnieje, ale nie można go odczytać albo udostępnić z przyczyn technicznych. | Po awarii, utracie formatu, braku dostępu do systemu albo uszkodzeniu pliku. | IT, właściciel systemu, właściciel zasobu. | Zabezpieczyć kopię, diagnozować, odtwarzać, planować konwersję. | Uznawać za usunięty bez próby odtworzenia i decyzji. | Opis problemu, lokalizacja, format, próby odtworzenia, ryzyko. | Przeznaczony do migracji, archiwalny, wymagający dostępu alternatywnego. |
| Wymagający dostępu alternatywnego | Zasób nie jest dostępny cyfrowo, ale użytkownik powinien móc uzyskać informację inną drogą. | Gdy naprawa nie jest natychmiast możliwa, zasób ma znaczenie informacyjne albo historyczne. | Koordynator dostępności, właściciel zasobu, redaktor. | Przygotować opis, streszczenie, transkrypcję, kontakt albo wersję alternatywną. | Odcinać użytkownika od informacji bez wyjaśnienia i kontaktu. | Powód, zakres ograniczenia, sposób zgłoszenia, osoba kontaktowa, termin obsługi. | Archiwalny, aktywny po naprawie, wycofany z publikacji z dostępem na wniosek. |

## Zasady stosowania statusu

Status nie zastępuje kategorii archiwalnej. Status opisuje stan zarządzania zasobem, a kategoria archiwalna wynika z kwalifikacji dokumentacji. Oba elementy powinny być powiązane w metadanych.
Przykład rozróżnienia: zasób informacyjny, który pozostaje publicznie dostępny jako dokument historyczny, powinien otrzymać status „archiwalny”. Zasób z ograniczeniami wynikającymi z ochrony danych osobowych lub tajemnicy powinien otrzymać status „wycofany z publikacji” i być wycofany z aktywnej prezentacji, przy jednoczesnym zachowaniu dostępu na wniosek lub w archiwum.
Status nie zastępuje decyzji o wycofaniu. Jeżeli status zmienia się na wycofany z publikacji, przeznaczony do brakowania albo przekazany, podmiot powinien mieć podstawę decyzji i ślad odpowiedzialności.

Status powinien być widoczny dla osób zarządzających zasobem. W przypadku treści publicznych użytkownik powinien otrzymać zrozumiałe oznaczenie, jeżeli treść jest archiwalna, nieaktualna albo dostępna tylko na wniosek.

## Powiązania

Model statusów należy stosować razem z:

- [Modelem cyklu życia](./06-model-cyklu-zycia.md),
- [Modelem decyzyjnym](./08-model-decyzyjny.md),
- [Modelem ryzyk](./09-model-ryzyk.md),
- [Procedurą archiwizacji zasobów](./10-procedura-archiwizacji-zasobow.md),
- [Procedurą wycofywania treści](./11-procedura-wycofywania-tresci.md),
- [Procedurą wycofywania systemów](./12-procedura-wycofywania-systemow.md),
- [Procedurą migracji danych](./13-procedura-migracji-danych.md),
- [Standardem metadanych](./16-standard-metadanych.md),
- [Dokumentowaniem procesu wycofania](./26-dokumentowanie-procesu-wycofania.md),
- [Procedurą postępowania w przypadku nieprawidłowej archiwizacji lub nieuprawnionego usunięcia zasobu](./49-procedura-postepowania-w-przypadku-nieprawidlowej-archiwizacji.md).
