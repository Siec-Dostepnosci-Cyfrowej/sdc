---
id: scenariusz-przeprowadzania-okresowej-oceny-stanu-zgodności
title: Scenariusz przeprowadzania okresowej oceny stanu zgodności
sidebar_label: Scenariusz przeprowadzania oceny 
sidebar_position: 1
description: Procedura określająca sposób przygotowania, przeprowadzenia i dokumentowania okresowej oceny stanu zgodności rozwiązań cyfrowych z wymaganiami dostępności.
keywords: [okresowa ocena stanu zgodności, przeprowadzania oceny, dostępność cyfrowa, monitoring, ocena zgodności]
tags: [okresowa ocena stanu zgodności, przeprowadzania oceny, dostępność cyfrowa, monitoring, ocena zgodności]
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

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **procID-001** | Automatyczne wykrywanie błędów dostępności |

---

### 3.2. Percepcja i struktura informacji

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-019** | Tytuł strony |
| **testID-021** | Język strony |
| **testID-022** | Język części strony |
| **testID-020** | Nagłówki |
| **testID-031** | Punkty orientacyjne |
| **testID-033** | Tekst alternatywny |
| **testID-032** | Wystarczający kontrast |

---

### 3.3. Obsługa przy użyciu klawiatury

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-023** | Dostęp z klawiatury |
| **testID-025** | Pułapka klawiaturowa |
| **testID-026** | Kolejność fokusu |
| **testID-027** | Widoczność fokusu |
| **testID-034** | Łącza pomijania |

---

### 3.4. Formularze i komunikaty

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-039** | Widoczne etykiety lub instrukcje |
| **testID-041** | Oznaczenie pól wymaganych |
| **testID-042** | Format danych |
| **testID-044** | Identyfikacja błędów |
| **testID-045** | Sugestie korekty błędów |
| **testID-069** | Komunikaty o stanie |

---

### 3.5. Współpraca z technologiami wspomagającymi

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-047** | Odczyt struktury przez czytnik ekranu |
| **testID-048** | Odczyt formularza przez czytnik ekranu |
| **testID-070** | Dostępna nazwa elementu interaktywnego |
| **testID-071** | Dostępna nazwa w widocznej etykiecie |

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

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-066** | Menu nawigacyjne |
| **testID-067** | Wyszukiwanie w witrynie |
| **testID-055** | Modalne okno dialogowe |
| **testID-056** | Zakładki |
| **testID-059** | Akordeon |
| **testID-058** | Karuzela |
| **testID-068** | Galeria obrazów |
| **testID-069** | Komunikaty o stanie |

---

### 5.2. Formularze i procesy

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-040** | Opisowe etykiety |
| **testID-046** | Etykiety powiązane programowo |
| **testID-045** | Zapobieganie błędom |
| **testID-035** | Cel łącza (w kontekście) |

---

### 5.3. Technologie wspomagające

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-070** | Dostępna nazwa elementu interaktywnego |
| **testID-071** | Dostępna nazwa w widocznej etykiecie |
| **testID-073** | Spójność identyfikacji |
| **testID-074** | Spójność nawigacji |

---

## 6. Rozszerzenie dotyczące dokumentów i multimediów

### 6.1. Dokumenty elektroniczne

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-060** | Dokument PDF |
| **Dokument DOCX (ODT)** | Dokument DOCX / ODT |

---

### 6.2. Multimedia

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-050** | Transkrypcja dla nagrań audio |
| **testID-049** | Transkrypcja dla wideo bez dźwięku |
| **testID-051** | Napisy rozszerzone |
| **testID-052** | Audiodeskrypcja |
| **testID-053** | Alternatywa pełnotekstowa dla multimediów |
| **testID-065** | Odtwarzacz multimedialny |
| **testID-054** | Ruch i błyski |

---

## 7. Rozszerzenie dotyczące prezentacji informacji

| Id testu  | Nazwa testu |
|-----------|--------------------- |
| **testID-075** | Użycie koloru |
| **testID-072** | Obrazy tekstu |
| **testID-037** | Zmiana rozmiaru tekstu |
| **testID-038** | Dopasowanie do szerokości ekranu |
| **testID-062** | Tabela |
| **testID-063** | Wykres |
| **testID-064** | Wizualizacja danych |

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