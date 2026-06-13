---
id: test-gesty-wskaznika
title: Gesty wskaźnika
sidebar_label: Gesty wskaźnika
sidebar_position: 80
description: Scenariusz testu sprawdzającego, czy funkcje rozwiązania wymagające wykonania gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu mogą zostać wykonane również przy użyciu prostego gestu wykonywanego jednym wskaźnikiem, bez konieczności wykonywania złożonych ruchów.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gesty wskaźnika]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,gesty wskaźnika]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## Identyfikator testu

**testID-080**

## Nazwa testu

Gesty wskaźnika

## Cel testu

Sprawdzenie, czy funkcje rozwiązania wymagające wykonania gestów wielopunktowych lub gestów opartych na określonej ścieżce ruchu mogą zostać wykonane również przy użyciu prostego gestu wykonywanego jednym wskaźnikiem, bez konieczności wykonywania złożonych ruchów.

## Powiązane wymagania

### WCAG 2.1

- 2.5.1 Gesty wskaźnika (Poziom A)

### EN 301 549

- 9.2.5.1 Pointer Gestures
- 11.2.5.1 Pointer Gestures

---

## Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą wykonywać precyzyjne lub złożone gesty dotykowe.

Problemy mogą dotyczyć między innymi:

- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z urządzeń wspomagających,
- osób starszych,
- użytkowników obsługujących urządzenie jedną ręką,
- osób z ograniczoną precyzją ruchów.

Funkcje wymagające gestów takich jak szczypanie, rozsuwanie palców, obracanie dwoma palcami lub przeciąganie po określonej ścieżce mogą być dla tych osób niedostępne.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- użytkowników ekranów dotykowych,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników technologii wspomagających,
- osób korzystających z alternatywnych urządzeń wskazujących.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji mobilnych,
- responsywnych stron internetowych obsługiwanych dotykowo,
- map interaktywnych,
- galerii obrazów,
- karuzel,
- komponentów wykorzystujących przeciąganie,
- innych interfejsów wykorzystujących gesty dotykowe.

---

## Metoda badania

### Krok 1. Identyfikacja gestów

Zidentyfikuj funkcje wymagające:

- użycia więcej niż jednego palca,
- wykonania określonego ruchu po ścieżce,
- przeciągania elementów,
- gestów powiększania lub obracania.

### Krok 2. Próba wykonania funkcji prostym gestem

Sprawdź, czy ta sama funkcja może zostać wykonana przy użyciu:

- pojedynczego dotknięcia,
- kliknięcia,
- prostego przeciągnięcia,
- przycisków sterujących,
- innych alternatywnych mechanizmów.

### Krok 3. Ocena dostępności alternatywy

Sprawdź, czy alternatywny sposób:

- jest łatwo dostępny,
- zapewnia tę samą funkcjonalność,
- nie wymaga wykonywania gestów wielopunktowych.

---

## Kryteria oceny

### Spełnia

Wszystkie funkcje wymagające gestów wielopunktowych lub gestów opartych na ścieżce ruchu posiadają alternatywny sposób wykonania niewymagający takich gestów.

### Częściowo spełnia

Alternatywne metody są dostępne tylko dla części funkcji.

### Nie spełnia

Istnieją funkcje, których wykonanie wymaga użycia gestów wielopunktowych lub gestów opartych na ścieżce ruchu i nie zapewniono alternatywnego sposobu wykonania tych działań.

### Nie dotyczy

Rozwiązanie nie wykorzystuje gestów wielopunktowych ani gestów opartych na ścieżce ruchu.

---

## Typowe niezgodności

- powiększanie treści wyłącznie przez gest szczypania,
- galeria zdjęć wymagająca gestów wielopunktowych,
- mapa wymagająca wyłącznie gestów powiększania lub obracania,
- funkcje dostępne jedynie przez przeciąganie elementów,
- brak przycisków umożliwiających wykonanie tej samej operacji.

---

## Dobre praktyki

- zapewnienie przycisków powiększania i pomniejszania,
- możliwość wykonania operacji za pomocą pojedynczego dotknięcia,
- alternatywne sterowanie klawiaturą,
- zapewnienie równoważnych kontrolek interfejsu dla wszystkich funkcji realizowanych gestami.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Nie        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Nie        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Dostęp z klawiatury
- Dostępna nazwa elementu interaktywnego
- Odczyt formularza przez czytnik ekranu
- Odtwarzacz multimedialny
- Karuzela
- Galeria obrazów
- Modalne okno dialogowe

---

## Uwagi

W praktyce problem ten występuje przede wszystkim w aplikacjach mobilnych i interfejsach wykorzystujących zaawansowane gesty dotykowe. W typowych serwisach internetowych administracji publicznej kryterium jest spełnione stosunkowo często, jednak powinno być weryfikowane dla map, galerii, karuzel oraz innych komponentów wykorzystujących sterowanie gestami.
