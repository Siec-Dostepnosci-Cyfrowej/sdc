---
id: test-przeciaganie
title: Przeciąganie
sidebar_label: Przeciąganie
sidebar_position: 88
description: Scenariusz testu sprawdzającego, czy funkcjonalności wymagające przeciągania elementów mogą zostać wykonane również przy użyciu alternatywnego sposobu niewymagającego operacji przeciągania.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,przeciąganie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,przeciąganie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-088**

## Nazwa testu

Przeciąganie

## Cel testu

Sprawdzenie, czy funkcjonalności wymagające przeciągania elementów mogą zostać wykonane również przy użyciu alternatywnego sposobu niewymagającego operacji przeciągania.

## Powiązane wymagania

### WCAG 2.2

- 2.5.7 Przeciąganie (Dragging Movements) – poziom AA

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.2.5.7 Dragging Movements
- 11.2.5.7 Dragging Movements

---

## Dlaczego to jest ważne

Przeciąganie wymaga wykonywania precyzyjnych ruchów oraz utrzymywania ciągłej kontroli nad wskaźnikiem.

Dla wielu użytkowników może to być trudne lub niemożliwe, w szczególności dla:

- osób z niepełnosprawnościami ruchowymi,
- osób z drżeniem rąk,
- użytkowników technologii wspomagających,
- osób korzystających z alternatywnych urządzeń wskazujących,
- użytkowników ekranów dotykowych.

Jeżeli wykonanie zadania wymaga wyłącznie przeciągania, część użytkowników może zostać całkowicie pozbawiona możliwości korzystania z funkcjonalności.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami ruchowymi,
- użytkowników technologii wspomagających,
- osób korzystających z urządzeń mobilnych,
- użytkowników obsługujących rozwiązanie przy użyciu klawiatury lub alternatywnych metod sterowania.

---

## Zakres stosowania

Test należy wykonywać dla:

- komponentów typu „przeciągnij i upuść”,
- list umożliwiających zmianę kolejności elementów,
- planów i harmonogramów,
- kalendarzy,
- map interaktywnych,
- suwaków,
- kreatorów graficznych,
- systemów zarządzania treścią,
- aplikacji biznesowych wykorzystujących przeciąganie.

---

## Metoda badania

### Krok 1. Identyfikacja funkcji wykorzystujących przeciąganie

Zidentyfikuj funkcjonalności wymagające:

- przeciągania elementów,
- przenoszenia obiektów,
- zmiany kolejności elementów,
- przesuwania wskaźnika po określonej ścieżce.

### Krok 2. Próba wykonania zadania bez przeciągania

Sprawdź, czy tę samą funkcję można wykonać przy użyciu:

- przycisków,
- menu kontekstowego,
- pól wyboru,
- klawiatury,
- innych standardowych elementów interfejsu.

### Krok 3. Ocena kompletności alternatywy

Sprawdź, czy alternatywny sposób:

- umożliwia wykonanie tej samej operacji,
- jest dostępny dla wszystkich użytkowników,
- nie wymaga przeciągania.

### Krok 4. Ocena wyjątków

Sprawdź, czy wykorzystanie przeciągania jest rzeczywiście niezbędne dla charakteru funkcjonalności.

---

## Kryteria oceny

### Spełnia

Dla każdej funkcjonalności wykorzystującej przeciąganie dostępna jest alternatywna metoda wykonania zadania niewymagająca przeciągania.

### Częściowo spełnia

Alternatywny sposób wykonania zadania zapewniono jedynie dla części funkcjonalności.

### Nie spełnia

Istnieją funkcjonalności, które mogą zostać wykonane wyłącznie przez przeciąganie elementów.

### Nie dotyczy

Rozwiązanie nie wykorzystuje przeciągania jako sposobu realizacji funkcjonalności.

---

## Typowe niezgodności

- zmiana kolejności elementów wyłącznie przez przeciąganie,
- plan zajęć umożliwiający modyfikację wyłącznie metodą „przeciągnij i upuść”,
- kalendarz wymagający przeciągania wydarzeń,
- zarządzanie plikami wyłącznie metodą „drag and drop”,
- brak alternatywnych przycisków „Przenieś”, „Przesuń”, „W górę”, „W dół”.

---

## Dobre praktyki

- stosowanie przycisków zmiany kolejności,
- umożliwienie wykonania operacji z poziomu klawiatury,
- stosowanie menu kontekstowych,
- traktowanie przeciągania jako dodatkowego, a nie jedynego sposobu wykonania zadania,
- zapewnienie alternatywnej ścieżki realizacji wszystkich funkcji.

---

## Klasyfikacja problemów

### Krytyczne

- kluczowy proces użytkownika możliwy do wykonania wyłącznie przez przeciąganie.

### Istotne

- brak alternatywnej metody realizacji ważnych funkcji.

### Umiarkowane

- alternatywa istnieje, ale jest trudna do odnalezienia lub niepełna.

### Drobne

- pojedyncze lokalne przypadki ograniczające wygodę użytkowania.

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

- Gesty wskaźnika
- Rezygnacja ze wskazania
- Aktywowanie ruchem
- Dostęp z klawiatury
- Modalne okno dialogowe
- Karuzela
- Galeria obrazów

---

## Uwagi

Kryterium 2.5.7 zostało wprowadzone w WCAG 2.2. Nie zabrania stosowania przeciągania, lecz wymaga zapewnienia alternatywnego sposobu wykonania tej samej operacji. Wyjątek dotyczy sytuacji, w których przeciąganie jest istotne dla charakteru funkcjonalności, np. podczas tworzenia rysunku, malowania lub innych działań, których nie można sensownie wykonać bez ciągłego ruchu wskaźnika. Pojęcie „istotne” należy interpretować wąsko – nie oznacza ono rozwiązania wygodniejszego dla projektanta lub łatwiejszego do zaimplementowania.
