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

Celem modelu jest wprowadzenie jednolitego sposobu opisywania stanu zasobu cyfrowego. Status pozwala ustaliÄ‡, czy zasĂłb jest roboczy, aktywny, wymaga przeglÄ…du, jest archiwalny, zostaĹ‚ wycofany z publikacji, wymaga migracji, zostaĹ‚ przekazany albo wymaga dostÄ™pu alternatywnego.

KaĹĽdy zasĂłb cyfrowy powinien mieÄ‡ status. Brak statusu jest ryzykiem organizacyjnym i archiwalnym, poniewaĹĽ utrudnia decyzjÄ™ o aktualnoĹ›ci, dostÄ™pnoĹ›ci, retencji, migracji i odpowiedzialnoĹ›ci.

## Zasady nadawania statusĂłw

Status powinien byÄ‡ nadawany przez wĹ‚aĹ›ciciela zasobu, wĹ‚aĹ›ciciela systemu, redaktora, administratora BIP albo innÄ… upowaĹĽnionÄ… osobÄ™ zgodnie z zakresem odpowiedzialnoĹ›ci. W przypadku dokumentĂłw powiÄ…zanych ze sprawÄ… albo kategoriÄ… archiwalnÄ… decyzja powinna uwzglÄ™dniaÄ‡ archiwum zakĹ‚adowe, JRWA i instrukcjÄ™ kancelaryjnÄ….

Zmiana statusu powinna byÄ‡ dokumentowana. Minimalne metadane zmiany to data, osoba, poprzedni status, nowy status, powĂłd, podstawa decyzji i informacja o dalszym dostÄ™pie.

## Statusy

| Status | Znaczenie | Kiedy siÄ™ go nadaje | Kto moĹĽe nadaÄ‡ | Co wolno robiÄ‡ | Czego nie wolno robiÄ‡ | Wymagane metadane | NastÄ™pny moĹĽliwy status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Roboczy | ZasĂłb jest przygotowywany i nie jest jeszcze oficjalnie opublikowany ani zatwierdzony. | Przy tworzeniu dokumentu, strony, formularza, danych albo materiaĹ‚u multimedialnego. | Autor, wĹ‚aĹ›ciciel zasobu, redaktor. | EdytowaÄ‡, uzupeĹ‚niaÄ‡, oceniaÄ‡ dostÄ™pnoĹ›Ä‡, zbieraÄ‡ metadane. | PublikowaÄ‡ bez akceptacji i wymaganych metadanych. | TwĂłrca, data utworzenia, wĹ‚aĹ›ciciel, wersja, format. | Aktywny, do przeglÄ…du, wycofany z przygotowania. |
| Aktywny | ZasĂłb jest obowiÄ…zujÄ…cy albo aktualnie wykorzystywany. | Po zatwierdzeniu i publikacji albo po przyjÄ™ciu do uĹĽycia w systemie. | WĹ‚aĹ›ciciel zasobu, redaktor, administrator BIP. | PublikowaÄ‡, aktualizowaÄ‡, monitorowaÄ‡, linkowaÄ‡. | OznaczaÄ‡ jako archiwalny bez decyzji. | Data publikacji, URL, wĹ‚aĹ›ciciel, podstawa publikacji, wersja. | Do przeglÄ…du, nieaktualny, przeznaczony do migracji, archiwalny. |
| Do przeglÄ…du | ZasĂłb wymaga oceny aktualnoĹ›ci, dostÄ™pnoĹ›ci, retencji albo dalszego utrzymania. | Po upĹ‚ywie terminu przeglÄ…du, zmianie prawa, zmianie systemu albo zgĹ‚oszeniu problemu. | WĹ‚aĹ›ciciel zasobu, redaktor, koordynator dostÄ™pnoĹ›ci, archiwum zakĹ‚adowe. | AnalizowaÄ‡, testowaÄ‡, konsultowaÄ‡, przygotowaÄ‡ rekomendacjÄ™. | UsuwaÄ‡ albo wycofywaÄ‡ bez decyzji. | Data przeglÄ…du, powĂłd, osoba oceniajÄ…ca, rekomendacja. | Aktywny, poprawiony, nieaktualny, archiwalny, wycofany z publikacji. |
| Nieaktualny | ZasĂłb utraciĹ‚ aktualnoĹ›Ä‡, ale nie podjÄ™to jeszcze decyzji koĹ„cowej. | Po stwierdzeniu zmiany stanu prawnego, organizacyjnego, danych albo informacji. | WĹ‚aĹ›ciciel zasobu, redaktor, komĂłrka merytoryczna. | OznaczyÄ‡, ograniczyÄ‡ uĹĽycie, przygotowaÄ‡ decyzjÄ™. | PozostawiaÄ‡ bez oznaczenia, jeĹĽeli moĹĽe wprowadzaÄ‡ w bĹ‚Ä…d. | Data stwierdzenia nieaktualnoĹ›ci, powĂłd, informacja o wersji aktualnej. | Archiwalny, wycofany z publikacji, aktywny po aktualizacji. |
| Archiwalny | ZasĂłb nie peĹ‚ni funkcji bieĹĽÄ…cej, ale pozostaje zachowany i moĹĽe byÄ‡ dostÄ™pny jako treĹ›Ä‡ archiwalna. | Po decyzji o zachowaniu zasobu ze wzglÄ™dĂłw dokumentacyjnych, informacyjnych albo archiwalnych. | WĹ‚aĹ›ciciel zasobu, archiwum zakĹ‚adowe, redaktor po akceptacji. | OznaczyÄ‡, udostÄ™pniaÄ‡, zabezpieczyÄ‡, ograniczyÄ‡ edycjÄ™. | AktualizowaÄ‡ treĹ›ci bez zachowania historii i decyzji. | Data archiwizacji, powĂłd, lokalizacja, status dostÄ™pnoĹ›ci, kategoria archiwalna, powiÄ…zanie ze sprawÄ…. | Przekazany, przeznaczony do migracji, wymagajÄ…cy dostÄ™pu alternatywnego. |
| Wycofany z publikacji | ZasĂłb nie jest juĹĽ publicznie dostÄ™pny w dotychczasowym miejscu. | Po decyzji o usuniÄ™ciu z publicznej publikacji przy zachowaniu albo innym udostÄ™pnieniu. | WĹ‚aĹ›ciciel zasobu, administrator BIP, kierownictwo w sprawach istotnych. | ZachowaÄ‡ w repozytorium, udostÄ™pniaÄ‡ na wniosek, przekierowaÄ‡ uĹĽytkownika. | UsuwaÄ‡ kopii ĹşrĂłdĹ‚owej bez kwalifikacji i retencji. | Decyzja, powĂłd, data, sposĂłb dalszego dostÄ™pu, osoba odpowiedzialna. | Przekazany, przeznaczony do brakowania, wymagajÄ…cy dostÄ™pu alternatywnego. |
| Przeznaczony do migracji | ZasĂłb ma zostaÄ‡ przeniesiony do innego systemu, formatu albo repozytorium. | Przed zmianÄ… CMS, BIP, EZD, repozytorium albo systemu dziedzinowego. | WĹ‚aĹ›ciciel systemu, IT, wĹ‚aĹ›ciciel danych. | EksportowaÄ‡, mapowaÄ‡ pola, testowaÄ‡, zabezpieczyÄ‡ oryginaĹ‚. | WyĹ‚Ä…czaÄ‡ system ĹşrĂłdĹ‚owy przed testem odtworzenia. | Zakres migracji, system ĹşrĂłdĹ‚owy, system docelowy, format eksportu, osoba odpowiedzialna. | Zmigrowany, archiwalny, przekazany. |
| Zmigrowany | ZasĂłb zostaĹ‚ przeniesiony i pozytywnie zweryfikowany w miejscu docelowym. | Po zakoĹ„czeniu migracji i teĹ›cie odtworzenia. | WĹ‚aĹ›ciciel systemu, IT, wĹ‚aĹ›ciciel danych. | PotwierdziÄ‡, zamknÄ…Ä‡ etap migracji, zachowaÄ‡ protokĂłĹ‚. | UsuwaÄ‡ ĹşrĂłdĹ‚a przed decyzjÄ… o retencji. | ProtokĂłĹ‚ migracji, wynik testu, data, zakres danych, kontrola integralnoĹ›ci. | Aktywny, archiwalny, przekazany, przeznaczony do brakowania. |
| Przeznaczony do brakowania | Dokumentacja kategorii B moĹĽe zostaÄ‡ brakowana po speĹ‚nieniu warunkĂłw. | Po upĹ‚ywie okresu przechowywania i ocenie zgodnej z przepisami. | Archiwum zakĹ‚adowe, upowaĹĽnione osoby, zgodnie z procedurÄ…. | PrzygotowaÄ‡ wykaz, uzgodniÄ‡, wykonaÄ‡ brakowanie po wymaganych zgodach. | BrakowaÄ‡ bez podstawy, bez wykazu i bez wymaganej procedury. | Kategoria, okres przechowywania, podstawa, wykaz, zgoda, data. | Brakowany, przekazany w razie zmiany kwalifikacji. |
| Przekazany | ZasĂłb lub dokumentacja zostaĹ‚a przekazana do wĹ‚aĹ›ciwego miejsca przechowywania. | Po przekazaniu do archiwum zakĹ‚adowego, repozytorium docelowego albo archiwum paĹ„stwowego. | Archiwum zakĹ‚adowe, wĹ‚aĹ›ciciel zasobu, upowaĹĽniona osoba. | PrzechowywaÄ‡ zgodnie z zasadami, udostÄ™pniaÄ‡ wedĹ‚ug trybu. | ModyfikowaÄ‡ bez procedury i Ĺ›ladu audytowego. | Potwierdzenie przekazania, zakres, data, lokalizacja, identyfikator paczki. | Archiwalny, udostÄ™pniany na wniosek, brakowany w przewidzianym trybie. |
| NiedostÄ™pny technicznie | ZasĂłb istnieje, ale nie moĹĽna go odczytaÄ‡ albo udostÄ™pniÄ‡ z przyczyn technicznych. | Po awarii, utracie formatu, braku dostÄ™pu do systemu albo uszkodzeniu pliku. | IT, wĹ‚aĹ›ciciel systemu, wĹ‚aĹ›ciciel zasobu. | ZabezpieczyÄ‡ kopiÄ™, diagnozowaÄ‡, odtwarzaÄ‡, planowaÄ‡ konwersjÄ™. | UznawaÄ‡ za usuniÄ™ty bez prĂłby odtworzenia i decyzji. | Opis problemu, lokalizacja, format, prĂłby odtworzenia, ryzyko. | Przeznaczony do migracji, archiwalny, wymagajÄ…cy dostÄ™pu alternatywnego. |
| WymagajÄ…cy dostÄ™pu alternatywnego | ZasĂłb nie jest dostÄ™pny cyfrowo, ale uĹĽytkownik powinien mĂłc uzyskaÄ‡ informacjÄ™ innÄ… drogÄ…. | Gdy naprawa nie jest natychmiast moĹĽliwa, zasĂłb ma znaczenie informacyjne albo historyczne. | Koordynator dostÄ™pnoĹ›ci, wĹ‚aĹ›ciciel zasobu, redaktor. | PrzygotowaÄ‡ opis, streszczenie, transkrypcjÄ™, kontakt albo wersjÄ™ alternatywnÄ…. | OdcinaÄ‡ uĹĽytkownika od informacji bez wyjaĹ›nienia i kontaktu. | PowĂłd, zakres ograniczenia, sposĂłb zgĹ‚oszenia, osoba kontaktowa, termin obsĹ‚ugi. | Archiwalny, aktywny po naprawie, wycofany z publikacji z dostÄ™pem na wniosek. |

## Zasady stosowania statusu

Status nie zastÄ™puje kategorii archiwalnej. Status opisuje stan zarzÄ…dzania zasobem, a kategoria archiwalna wynika z kwalifikacji dokumentacji. Oba elementy powinny byÄ‡ powiÄ…zane w metadanych.
Przykład rozróżnienia: zasób informacyjny, który pozostaje publicznie dostępny jako dokument historyczny, powinien otrzymać status „archiwalny”. Zasób z ograniczeniami wynikającymi z ochrony danych osobowych lub tajemnicy powinien otrzymać status „wycofany z publikacji” i być wycofany z aktywnej prezentacji, przy jednoczesnym zachowaniu dostępu na wniosek lub w archiwum.
Status nie zastÄ™puje decyzji o wycofaniu. JeĹĽeli status zmienia siÄ™ na wycofany z publikacji, przeznaczony do brakowania albo przekazany, podmiot powinien mieÄ‡ podstawÄ™ decyzji i Ĺ›lad odpowiedzialnoĹ›ci.

Status powinien byÄ‡ widoczny dla osĂłb zarzÄ…dzajÄ…cych zasobem. W przypadku treĹ›ci publicznych uĹĽytkownik powinien otrzymaÄ‡ zrozumiaĹ‚e oznaczenie, jeĹĽeli treĹ›Ä‡ jest archiwalna, nieaktualna albo dostÄ™pna tylko na wniosek.

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
