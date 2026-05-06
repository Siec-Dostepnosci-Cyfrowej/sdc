---
id: 41-rejestr-wycofania-systemow
title: Rejestr wycofania systemów
description: Wzór rejestru systemów przeznaczonych do wycofania albo wycofanych z eksploatacji.
sidebar_label: Rejestr systemów
sidebar_position: 41
keywords: [rejestr, wycofanie systemów, migracja danych, system docelowy, dokumentacja]
tags: [cykl-zycia-tik, rejestr]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Rejestr wycofania systemów

## Cel rejestru

Rejestr wycofania systemów służy do monitorowania systemów przeznaczonych do wycofania, będących w migracji, wyłączonych albo pozostawionych w trybie tylko do odczytu. Rejestr powinien wskazywać zakres danych, status migracji, system docelowy, ryzyka i dokumentację procesu.

Rejestr zapewnia, że wycofanie systemu jest decyzją zarządczą, prawną, archiwalną i techniczną, a nie wyłącznie czynnością infrastrukturalną.

## Zasady prowadzenia

Rejestr należy prowadzić od momentu decyzji wstępnej o analizie wycofania systemu do czasu zamknięcia procesu i udokumentowania ryzyk resztkowych. Wpis powinien być aktualizowany po inwentaryzacji, eksporcie, teście odtworzenia, migracji, archiwizacji i wyłączeniu.

Za prowadzenie rejestru odpowiada właściciel systemu albo wyznaczony koordynator wycofania systemu. Wpisy dotyczące danych i dokumentacji powinny być uzgadniane z właścicielami zasobów, IT, archiwum zakładowym, IOD i wykonawcą zewnętrznym, jeżeli uczestniczy w procesie.

Rejestr powinien być powiązany z [Procedurą wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Procedurą migracji danych](./13-procedura-migracji-danych.md), [Kryteriami wycofania systemu](./25-kryteria-wycofania-systemu.md) i [Dokumentowaniem procesu wycofania](./26-dokumentowanie-procesu-wycofania.md).

## Wzór rejestru

| Nazwa systemu | Właściciel | Powód wycofania | Zakres danych | System docelowy | Status migracji | Data wyłączenia | Dokumentacja procesu | Ryzyka | Uwagi |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |

## Opis kolumn

| Kolumna | Sposób wypełnienia |
| --- | --- |
| Nazwa systemu | Pełna nazwa systemu, aplikacji, usługi albo repozytorium. |
| Właściciel | Właściciel systemu albo komórka odpowiedzialna za proces. |
| Powód wycofania | Koniec wsparcia, migracja, ryzyko bezpieczeństwa, dublowanie funkcji, koniec projektu, reorganizacja albo inna przesłanka. |
| Zakres danych | Dane, dokumenty, metadane, załączniki, logi, konta, konfiguracje, integracje i inne elementy objęte procesem. |
| System docelowy | System, repozytorium, archiwum, tryb tylko do odczytu albo informacja, że dane nie są migrowane. |
| Status migracji | Planowana, w przygotowaniu, po eksporcie testowym, po teście odtworzenia, zakończona, wstrzymana albo nie dotyczy. |
| Data wyłączenia | Planowana albo faktyczna data wyłączenia systemu. |
| Dokumentacja procesu | Link do planu migracji, protokołu eksportu, testu odtworzenia, decyzji o wycofaniu albo sprawy w EZD. |
| Ryzyka | Ryzyka prawne, archiwalne, technologiczne, ochrony danych, dostępnościowe i ciągłości działania. |
| Uwagi | Warunki wyłączenia, ryzyka resztkowe, komunikacja, wykonawca, zależności albo termin kolejnego przeglądu. |

## Powiązania

Rejestr należy stosować z [Listą kontrolną wycofania systemu](./37-lista-kontrolna-wycofania-systemu.md), [Formularzem decyzji o wycofaniu](./39-formularz-decyzji-o-wycofaniu.md), [Wymaganiami dla systemów](./24-wymagania-dla-systemow.md), [Modelem ryzyk](./09-model-ryzyk.md) i [Mapą odpowiedzialności](./30-mapa-odpowiedzialnosci.md).
