---
id: 50-lista-kontrolna-incydentu-archiwizacji
title: Lista kontrolna obsługi incydentu archiwizacji zasobów cyfrowych
description: Lista kontrolna wspierająca postępowanie w przypadku usunięcia, utraty lub nieprawidłowej archiwizacji zasobu cyfrowego.
sidebar_label: Lista kontrolna incydentu
sidebar_position: 50
keywords: [archiwizacja, incydent, kontrola, BIP, migracja danych]
tags: [cykl-zycia-tik, archiwizacja]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Lista kontrolna obsługi incydentu archiwizacji zasobów cyfrowych

## Cel

Lista kontrolna służy do uporządkowania działań podejmowanych w przypadku incydentu związanego z nieuprawnionym usunięciem zasobu, nieprawidłową archiwizacją, utratą dostępu, utratą metadanych albo wycofaniem systemu bez migracji danych.

Lista powinna być stosowana łącznie z [Procedurą postępowania w przypadku nieprawidłowej archiwizacji lub nieuprawnionego usunięcia zasobu](./49-procedura-postepowania-w-przypadku-nieprawidlowej-archiwizacji.md).

Stosuj razem z procedurą 49. Lista nie zastępuje procedury, tylko porządkuje ustalenia, decyzje tymczasowe, eskalacje i działania naprawcze.

## Zasady stosowania listy kontrolnej

Odpowiedzi TAK, NIE i NIE DOTYCZY należy zaznaczać po potwierdzeniu stanu faktycznego. Pole Uwagi powinno zawierać podstawę ustalenia, osobę odpowiedzialną, datę czynności albo odniesienie do dokumentu źródłowego.

Punkty oznaczone jako BLOKUJĄCE wymagają rozstrzygnięcia przed przejściem do dalszych etapów obsługi incydentu. Jeżeli odpowiedź NIE występuje przy punkcie BLOKUJĄCYM, należy wstrzymać dalsze działania operacyjne w zakresie zależnym od tego punktu i udokumentować decyzję kierowniczą albo techniczną.

Jeżeli charakter zasobu jest NIEUSTALONY, należy podjąć decyzję tymczasową, zakazać usuwania zasobu i eskalować sprawę do właściciela obszaru albo kierownictwa. Stan NIEUSTALONE nie pozwala na brakowanie, trwałe usunięcie ani zamknięcie incydentu.

## 1. Identyfikacja incydentu

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 1.1 | Czy zidentyfikowano zasób? |  |  |  |  |
| 1.2 | Czy ustalono datę zdarzenia? |  |  |  |  |
| 1.3 | Czy ustalono system źródłowy? |  |  |  |  |
| 1.4 | Czy ustalono osobę lub proces odpowiedzialny? |  |  |  |  |

## 2. Zabezpieczenie (BLOKUJĄCE)

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 2.1 | Czy wstrzymano dalsze usuwanie danych? |  |  |  |  |
| 2.2 | Czy zabezpieczono logi systemowe? |  |  |  |  |
| 2.3 | Czy zabezpieczono kopie zapasowe? |  |  |  |  |
| 2.4 | Czy ograniczono dostęp do systemu, jeśli jest to wymagane? |  |  |  |  |

## 3. Charakter zasobu (BLOKUJĄCE)

Jeżeli nie da się od razu ustalić charakteru zasobu, należy zaznaczyć NIEUSTALONE, wydać decyzję tymczasową, zakazać usuwania i eskalować sprawę. Decyzja tymczasowa powinna wskazywać osobę odpowiedzialną za dalsze ustalenia i termin powrotu do kwalifikacji.

| Nr | Pytanie kontrolne | TAK | NIE | NIEUSTALONE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- | --- |
| 3.1 | Czy ustalono, czy zasób jest informacją publiczną? |  |  |  |  |  |
| 3.2 | Czy ustalono, czy zasób jest dokumentem sprawy? |  |  |  |  |  |
| 3.3 | Czy ustalono kategorię archiwalną A albo B? |  |  |  |  |  |
| 3.4 | Czy ustalono, czy zasób zawiera dane osobowe? |  |  |  |  |  |
| 3.5 | Czy ustalono, czy zasób był publikowany w BIP? |  |  |  |  |  |
| 3.6 | Czy wydano decyzję tymczasową przy stanie NIEUSTALONE? |  |  |  |  |  |
| 3.7 | Czy zakazano dalszego usuwania, brakowania albo czyszczenia danych do czasu rozstrzygnięcia? |  |  |  |  |  |
| 3.8 | Czy eskalowano sprawę do właściciela obszaru albo kierownictwa? |  |  |  |  |  |

## 4. Ocena skutków

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 4.1 | Czy oceniono wpływ na dostęp do informacji publicznej? |  |  |  |  |
| 4.2 | Czy oceniono wpływ na użytkowników? |  |  |  |  |
| 4.3 | Czy oceniono ryzyko archiwalne? |  |  |  |  |
| 4.4 | Czy oceniono ryzyko naruszenia RODO? |  |  |  |  |
| 4.5 | Czy incydent może stanowić naruszenie ochrony danych osobowych? |  |  |  |  |

## 5. Możliwość odtworzenia (BLOKUJĄCE)

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 5.1 | Czy sprawdzono backupy? |  |  |  |  |
| 5.2 | Czy sprawdzono system źródłowy? |  |  |  |  |
| 5.3 | Czy sprawdzono EZD? |  |  |  |  |
| 5.4 | Czy sprawdzono archiwum zakładowe? |  |  |  |  |
| 5.5 | Czy sprawdzono repozytoria plików? |  |  |  |  |
| 5.6 | Czy sprawdzono materiały od wykonawcy? |  |  |  |  |

## 6. Decyzja (BLOKUJĄCE)

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 6.1 | Czy podjęto decyzję o sposobie postępowania? |  |  |  |  |
| 6.2 | Czy określono zakres odtworzenia? |  |  |  |  |
| 6.3 | Czy określono sposób zapewnienia dostępu? |  |  |  |  |
| 6.4 | Czy decyzja została udokumentowana? |  |  |  |  |

## 7. Działania naprawcze

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 7.1 | Czy odtworzono zasób? |  |  |  |  |
| 7.2 | Czy uzupełniono metadane? |  |  |  |  |
| 7.3 | Czy przywrócono powiązania ze sprawą? |  |  |  |  |
| 7.4 | Czy oznaczono zasób jako odtworzony? |  |  |  |  |
| 7.5 | Czy zapewniono dostęp bezpośredni albo alternatywny? |  |  |  |  |

## 8. Dokumentowanie (BLOKUJĄCE)

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 8.1 | Czy sporządzono opis incydentu? |  |  |  |  |
| 8.2 | Czy opisano decyzję? |  |  |  |  |
| 8.3 | Czy opisano działania? |  |  |  |  |
| 8.4 | Czy wskazano osoby odpowiedzialne? |  |  |  |  |
| 8.5 | Czy zapisano daty? |  |  |  |  |

## 9. Działania systemowe

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 9.1 | Czy zidentyfikowano przyczynę incydentu? |  |  |  |  |
| 9.2 | Czy zmieniono procedurę? |  |  |  |  |
| 9.3 | Czy zmieniono uprawnienia? |  |  |  |  |
| 9.4 | Czy poprawiono backup lub eksport? |  |  |  |  |
| 9.5 | Czy przeprowadzono szkolenie? |  |  |  |  |

## 10. Incydent archiwizacji a incydent ochrony danych

Incydent archiwizacji dotyczy utraty, usunięcia, uszkodzenia, niepełnej archiwizacji, utraty metadanych albo braku możliwości odczytu zasobu. Incydent ochrony danych dotyczy bezpieczeństwa danych osobowych i wymaga odrębnej oceny IOD.

Jeżeli wystąpiła utrata danych osobowych, nieuprawniony dostęp, ujawnienie danych osobie nieuprawnionej albo brak kontroli nad danymi, należy rozważyć uruchomienie procedury naruszenia ochrony danych osobowych. W takim przypadku obsługa incydentu archiwizacji i ocena naruszenia ochrony danych powinny być prowadzone równolegle, a nie zamiast siebie.

| Nr | Pytanie kontrolne | TAK | NIE | NIE DOTYCZY | Uwagi |
| --- | --- | --- | --- | --- | --- |
| 10.1 | Czy zasób zawierał dane osobowe? |  |  |  |  |
| 10.2 | Czy wystąpiła utrata danych osobowych? |  |  |  |  |
| 10.3 | Czy wystąpił nieuprawniony dostęp albo ujawnienie danych? |  |  |  |  |
| 10.4 | Czy podmiot utracił kontrolę nad danymi? |  |  |  |  |
| 10.5 | Czy włączono IOD? |  |  |  |  |
| 10.6 | Czy rozważono uruchomienie procedury naruszenia ochrony danych osobowych? |  |  |  |  |

## Powiązania

- [Procedura postępowania w przypadku nieprawidłowej archiwizacji lub nieuprawnionego usunięcia zasobu](./49-procedura-postepowania-w-przypadku-nieprawidlowej-archiwizacji.md)
