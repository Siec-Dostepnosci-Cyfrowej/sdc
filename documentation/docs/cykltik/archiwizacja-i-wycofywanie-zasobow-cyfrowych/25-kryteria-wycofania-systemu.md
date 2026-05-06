---
id: 25-kryteria-wycofania-systemu
title: Kryteria wycofania systemu
description: Kryteria oceny, czy system teleinformatyczny może zostać wycofany z eksploatacji.
sidebar_label: Kryteria wycofania
sidebar_position: 25
keywords: [wycofanie systemu, koniec wsparcia, bezpieczeństwo, dostępność, migracja]
tags: [cykl-zycia-tik, systemy]
opracowanie: Bartłomiej Wilk
data_zgloszenia: 29 kwietnia 2026 r.
data_aktualizacji: 29 kwietnia 2026 r.
wersja_robocza: true
---

# Kryteria wycofania systemu

## Cel

Celem dokumentu jest określenie kryteriów, które pozwalają ocenić, czy system teleinformatyczny powinien zostać wycofany z eksploatacji oraz jakie warunki muszą zostać spełnione przed jego zamknięciem.

## Zakres

Kryteria dotyczą CMS, BIP, EZD, systemów dziedzinowych, repozytoriów plików, aplikacji mobilnych, baz danych, systemów projektowych i usług zewnętrznych wykorzystywanych do realizacji zadań publicznych albo przechowywania zasobów cyfrowych.

## Zasady

Kryterium wycofania nie jest jeszcze decyzją o wyłączeniu. Każde kryterium uruchamia analizę zgodną z [Procedurą wycofywania systemów](./12-procedura-wycofywania-systemow.md). System można wyłączyć dopiero po inwentaryzacji, migracji albo archiwizacji danych, teście odtworzenia i udokumentowaniu decyzji.

## Kryteria wycofania

### Brak wsparcia

Koniec wsparcia producenta, wykonawcy albo technologii jest istotną przesłanką wycofania. Przed decyzją należy ustalić, czy system przechowuje dokumenty, dane osobowe, materiały archiwalne albo informacje publiczne.

### Bezpieczeństwo

System powinien zostać oceniony do wycofania, jeżeli nie spełnia wymagań bezpieczeństwa, nie otrzymuje aktualizacji albo nie pozwala zarządzać uprawnieniami. Nie wolno jednak usuwać danych w celu rozwiązania problemu bezpieczeństwa bez planu migracji.

### Brak zgodności z prawem

Przesłanką wycofania może być brak zgodności z dostępnością cyfrową, interoperacyjnością, wymaganiami BIP, ochroną danych osobowych, archiwizacją albo wymogami branżowymi. Należy ocenić, czy możliwa jest naprawa, czy konieczna jest migracja.

### Brak eksportu

Brak eksportu danych i metadanych jest poważnym kryterium ryzyka. Może oznaczać konieczność pilnego planu migracji, negocjacji z wykonawcą albo przygotowania narzędzi wydobycia danych. Sam brak eksportu nie uzasadnia utraty danych.

### Migracja do systemu docelowego

Jeżeli wdrażany jest system docelowy, system źródłowy powinien zostać wycofany dopiero po potwierdzeniu kompletności migracji, zachowaniu danych historycznych i ustaleniu sposobu obsługi zasobów archiwalnych.

### Koszty utrzymania

Nadmierne koszty mogą uzasadniać wycofanie, ale nie mogą prowadzić do pominięcia obowiązków archiwalnych, dostępnościowych, informacyjnych i ochrony danych. Analiza kosztów powinna obejmować koszt migracji, przechowania i dostępu.

## Warunki blokujące

Wycofanie systemu jest niedopuszczalne, jeżeli:

- nie przeprowadzono inwentaryzacji danych,
- nie ustalono właścicieli danych i dokumentów,
- nie wykonano planu migracji,
- nie przeprowadzono testu odtworzenia,
- nie ustalono losu danych osobowych,
- nie uwzględniono JRWA i kategorii archiwalnych,
- nie zabezpieczono metadanych,
- nie ma dokumentacji technicznej albo protokołu,
- nie określono sposobu dalszego dostępu użytkowników.

## Wymagania

Ocena wycofania powinna obejmować kryteria techniczne, prawne, organizacyjne, finansowe, dostępnościowe i archiwalne. Wynik oceny powinien być zapisany w decyzji lub protokole i powiązany z rejestrem ryzyk.

## Ryzyka

Najważniejsze ryzyka to wyłączenie systemu bez migracji, utrata danych, utrata metadanych, brak ciągłości działania, naruszenie RODO, naruszenie obowiązków archiwalnych i zależność od wykonawcy.

## Powiązania

Kryteria należy stosować z [Wymaganiami dla systemów](./24-wymagania-dla-systemow.md), [Procedurą wycofywania systemów](./12-procedura-wycofywania-systemow.md), [Procedurą migracji danych](./13-procedura-migracji-danych.md), [Modelem cyklu życia](./06-model-cyklu-zycia.md), [Modelem statusów zasobów](./07-model-statusow-zasobow.md), [Modelem decyzyjnym](./08-model-decyzyjny.md) i [Modelem ryzyk](./09-model-ryzyk.md).
