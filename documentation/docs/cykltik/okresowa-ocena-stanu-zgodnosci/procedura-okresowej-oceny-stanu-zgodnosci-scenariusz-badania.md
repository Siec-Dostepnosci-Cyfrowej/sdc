---
id: procedura-okresowej-oceny-stanu-zgodnosci-scenariusz-badania
title: Scenariusz badania okresowej oceny stanu zgodności
sidebar_label: Scenariusz badania
sidebar_position: 2
description: Procedura określająca sposób przygotowania, przeprowadzenia i dokumentowania okresowej oceny stanu zgodności rozwiązań cyfrowych z wymaganiami dostępności.
keywords: [okresowa ocena stanu zgodności, scenariusz badania, dostępność cyfrowa, monitoring, ocena zgodności]
tags: [monitoring, ocena zgodności, dostępność cyfrowa, procedura]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel procedury

Celem procedury jest określenie minimalnego i rozszerzonego zakresu działań pozwalających na uzyskanie aktualnej wiedzy o stanie zgodności rozwiązania cyfrowego z wymaganiami dostępności.

Procedura wspiera realizację okresowych ocen stanu zgodności prowadzonych zgodnie z zaleceniem **Okresowa ocena stanu zgodności**.

Ocena ma charakter praktyczny i diagnostyczny. Jej celem jest:

- identyfikacja problemów dostępności,
- określenie obszarów wymagających działań naprawczych,
- monitorowanie zmian zachodzących w czasie,
- wspieranie planowania działań doskonalących.

Procedura nie zastępuje audytu zgodności ani pełnej oceny zgodności z WCAG lub EN 301 549.

---

## 2. Przygotowanie oceny

### 2.1. Określenie przedmiotu oceny

Przed rozpoczęciem badania należy określić:

- nazwę rozwiązania,
- adres rozwiązania,
- właściciela rozwiązania,
- datę poprzedniej oceny,
- zakres zmian wprowadzonych od poprzedniej oceny.

---

### 2.2. Wybór stron, ekranów lub procesów

Ocena może obejmować:

- pojedynczą stronę,
- grupę stron,
- proces użytkownika,
- usługę elektroniczną,
- aplikację internetową,
- aplikację mobilną.

Jeżeli rozwiązanie składa się z wielu stron lub ekranów, należy wybrać reprezentatywną próbę obejmującą:

- stronę główną,
- strony informacyjne,
- stronę zawierającą formularz,
- stronę zawierającą tabele lub dane,
- stronę zawierającą multimedia,
- stronę zawierającą dokumenty do pobrania.

---

### 2.3. Wykorzystanie wcześniejszych ustaleń

Przed rozpoczęciem badania należy przeanalizować:

- wyniki poprzednich ocen,
- wyniki monitoringu,
- zgłoszenia użytkowników,
- informacje o działaniach naprawczych,
- informacje o nowych funkcjonalnościach.

---

## 3. Scenariusz minimum

Minimalny zakres badania odpowiada wymaganiom określonym w zaleceniu dotyczącym okresowej oceny stanu zgodności.

### 3.1. Automatyczne wykrywanie błędów

| Test |
|--------|
| Automatyczne wykrywanie błędów dostępności |

---

### 3.2. Percepcja i struktura informacji

| Test |
|--------|
| Tytuł strony |
| Język strony |
| Język części strony |
| Nagłówki |
| Punkty orientacyjne |
| Tekst alternatywny |
| Wystarczający kontrast |

---

### 3.3. Obsługa przy użyciu klawiatury

| Test |
|--------|
| Dostęp z klawiatury |
| Pułapka klawiaturowa |
| Kolejność fokusu |
| Widoczność fokusu |
| Łącza pomijania |

---

### 3.4. Formularze i komunikaty

| Test |
|--------|
| Widoczne etykiety lub instrukcje |
| Oznaczenie pól wymaganych |
| Format danych |
| Identyfikacja błędów |
| Sugestie korekty błędów |
| Komunikaty o stanie |

---

### 3.5. Współpraca z technologiami wspomagającymi

| Test |
|--------|
| Odczyt struktury przez czytnik ekranu |
| Odczyt formularza przez czytnik ekranu |
| Dostępna nazwa elementu interaktywnego |
| Dostępna nazwa w widocznej etykiecie |

---

## 4. Rozszerzanie zakresu oceny

Kolejne oceny powinny stopniowo zwiększać zakres wiedzy o stanie zgodności rozwiązania.

Rozszerzanie może następować poprzez:

- zwiększanie liczby badanych stron,
- zwiększanie liczby badanych procesów,
- uwzględnianie dodatkowych komponentów,
- uwzględnianie dodatkowych wymagań dostępności,
- weryfikację skuteczności działań naprawczych.

---

## 5. Rozszerzenie funkcjonalne

### 5.1. Komponenty interfejsu

| Test |
|--------|
| Menu nawigacyjne |
| Wyszukiwanie w witrynie |
| Modalne okno dialogowe |
| Zakładki |
| Akordeon |
| Karuzela |
| Galeria obrazów |
| Powiadomienia (komunikaty o stanie) |

---

### 5.2. Formularze i procesy

| Test |
|--------|
| Opisowe etykiety |
| Etykiety powiązane programowo |
| Zapobieganie błędom |
| Cel łącza (w kontekście) |

---

### 5.3. Technologie wspomagające

| Test |
|--------|
| Dostępna nazwa elementu interaktywnego |
| Dostępna nazwa w widocznej etykiecie |
| Spójność identyfikacji |
| Spójność nawigacji |

---

## 6. Rozszerzenie dotyczące dokumentów i multimediów

### 6.1. Dokumenty elektroniczne

| Test |
|--------|
| Dokument PDF |
| Dokument DOCX / ODT |

---

### 6.2. Multimedia

| Test |
|--------|
| Transkrypcja dla nagrań audio |
| Transkrypcja dla wideo bez dźwięku |
| Napisy rozszerzone |
| Audiodeskrypcja |
| Alternatywa pełnotekstowa dla multimediów |
| Odtwarzacz multimedialny |
| Ruch i błyski |

---

## 7. Rozszerzenie dotyczące prezentacji informacji

| Test |
|--------|
| Użycie koloru |
| Obrazy tekstu |
| Zmiana rozmiaru tekstu |
| Dopasowanie do szerokości ekranu |
| Tabela |
| Wykres |
| Wizualizacja danych |

---

## 8. Interpretacja wyników

Wyniki testów należy interpretować ostrożnie.

### Wynik pozytywny

Oznacza, że w zakresie objętym badaniem nie stwierdzono niezgodności.

Nie oznacza automatycznie pełnej zgodności rozwiązania z WCAG lub EN 301 549.

---

### Wynik częściowo pozytywny

Oznacza, że stwierdzono pojedyncze problemy lub niezgodności o ograniczonym wpływie na użytkowników.

---

### Wynik negatywny

Oznacza, że stwierdzono problemy mogące istotnie utrudniać lub uniemożliwiać korzystanie z rozwiązania.

---

## 9. Wyniki wymagające dalszych działań

Jeżeli ocena wykaże liczne lub powtarzające się problemy, należy rozważyć:

- przeprowadzenie przeglądu eksperckiego,
- przeprowadzenie audytu zgodności,
- wykonanie testów z użytkownikami,
- przygotowanie planu działań naprawczych,
- zwiększenie częstotliwości monitorowania.

---

## 10. Dokumentowanie wyników

Wyniki oceny należy udokumentować zgodnie z zasadami określonymi w załączniku:

**Raportowanie wyników okresowej oceny stanu zgodności.**

Dokumentacja powinna umożliwiać:

- porównywanie kolejnych ocen,
- monitorowanie postępów,
- planowanie działań naprawczych,
- przekazywanie informacji kierownictwu.

---

## 11. Zasada ciągłego doskonalenia

Okresowa ocena stanu zgodności nie jest działaniem jednorazowym.

Każda kolejna ocena powinna wykorzystywać:

- wyniki poprzednich ocen,
- informacje z monitoringu,
- zgłoszenia użytkowników,
- doświadczenia wynikające z działań naprawczych.

Celem nie jest jednorazowe potwierdzenie zgodności, lecz systematyczne zwiększanie wiedzy organizacji o stanie dostępności jej rozwiązań cyfrowych oraz stopniowe podnoszenie poziomu dostępności.