---

id: test-transkrypcja-dla-wideo-bez-dzwieku
title: Scenariusz testu - Transkrypcja dla wideo bez dźwięku
sidebar_label: Transkrypcja dla wideo bez dźwięku
sidebar_position: 49
description: Scenariusz testu sprawdzającego, czy nagrania wideo bez ścieżki dźwiękowej posiadają równoważną alternatywę tekstową lub dźwiękową przekazującą te same informacje.
keywords: [wideo bez dźwięku, nieme wideo, transkrypcja, alternatywa tekstowa, WCAG, dostępność cyfrowa]
tags: [test dostępności, multimedia, WCAG, alternatywy mediów, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-049**

---

## 2. Nazwa testu

**Transkrypcja dla wideo bez dźwięku**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy nagranie wideo nieposiadające ścieżki dźwiękowej ma zapewnioną alternatywę umożliwiającą zapoznanie się z jego treścią bez oglądania obrazu.

### Co oznacza „wideo bez dźwięku”?

Są to materiały, które przekazują informacje wyłącznie za pomocą obrazu.

Przykłady:

- filmy nieme,
- animacje bez dźwięku,
- prezentacje automatycznie wyświetlające slajdy,
- sekwencje obrazów odtwarzane przez użytkownika,
- instrukcje wizualne bez narracji.

### Jaką alternatywę należy zapewnić?

Dla materiału wideo bez dźwięku należy zapewnić:

- opis tekstowy treści wideo,

lub

- alternatywną ścieżkę dźwiękową opisującą treść,

lub

- odrębny plik dźwiękowy opisujący treść,

lub

- łącze prowadzące do takiej alternatywy.

Alternatywa powinna przekazywać te same informacje, które przekazuje materiał wizualny.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.2.1 Tylko audio lub tylko wideo (A)**

### EN 301 549

- **9.1.2.1 Audio-only and Video-only (Prerecorded)**
- **10.1.2.1 Audio-only and Video-only (Prerecorded)**
- **11.1.2.1 Audio-only and Video-only (Prerecorded)**

### Techniki WCAG

- G158
- G159
- G166

---

## 6. Zastosowanie do treści

Test stosuje się do:

- filmów bez ścieżki dźwiękowej,
- animacji bez ścieżki dźwiękowej,
- prezentacji wizualnych bez narracji,
- instrukcji wizualnych bez komentarza głosowego,
- sekwencji obrazów przekazujących informacje.

### Wyjątki

Test nie dotyczy:

- materiałów zawierających ścieżkę dźwiękową,
- materiałów stanowiących wyłącznie dekorację,
- materiałów oznaczonych jako alternatywa medialna dla tekstu.

W takich przypadkach wynik oznacza się jako:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się materiał wideo bez dźwięku, dla którego zapewniono alternatywę tekstową lub dźwiękową przekazującą te same informacje, które są prezentowane wizualnie.

Jeżeli materiał zawiera obrazy tekstu, ich treść jest również przekazana w alternatywie.

---

## 8. Dlaczego to jest ważne

Osoby niewidome nie mogą uzyskać informacji przekazywanych wyłącznie obrazem.

Jeżeli materiał nie posiada alternatywy:

- użytkownik nie wie, co przedstawia film,
- nie zna kolejności zdarzeń,
- nie może zrozumieć prezentowanych informacji,
- może całkowicie utracić dostęp do treści.

Alternatywa tekstowa lub dźwiękowa zapewnia równoważny dostęp do informacji.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych,
- osób głuchoniewidomych,
- osób korzystających z czytników ekranu,
- osób korzystających z monitorów brajlowskich,
- osób, które nie mogą oglądać materiałów wizualnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj materiały wideo nieposiadające ścieżki dźwiękowej.

### Krok 2

Odtwórz materiał.

### Krok 3

Sprawdź, czy materiał przekazuje informacje wyłącznie za pomocą obrazu.

### Krok 4

Sprawdź, czy w bezpośrednim kontekście materiału dostępna jest:

- alternatywa tekstowa,

lub

- alternatywa dźwiękowa,

lub

- łącze prowadzące do takiej alternatywy.

### Krok 5

Porównaj treść alternatywy z materiałem wideo.

### Krok 6

Sprawdź, czy alternatywa:

- opisuje przebieg zdarzeń,
- opisuje działania osób,
- opisuje istotne elementy wizualne,
- przekazuje wszystkie informacje niezbędne do zrozumienia treści.

### Krok 7

Jeżeli materiał zawiera obrazy tekstu, sprawdź, czy ich treść została powtórzona w alternatywie.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Dla każdego materiału wideo bez dźwięku istnieje równoważna alternatywa tekstowa lub dźwiękowa przekazująca wszystkie istotne informacje.

### Wynik częściowo pozytywny

Alternatywa istnieje, lecz pomija niektóre informacje, jednak nie uniemożliwia zrozumienia treści materiału.

### Wynik negatywny

Alternatywa nie istnieje albo jest tak niekompletna, że nie pozwala zrozumieć treści materiału.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak alternatywy dla filmu bez dźwięku,
- alternatywa opisująca jedynie część treści,
- pominięcie istotnych zdarzeń,
- pominięcie informacji przedstawionych na ekranie,
- pominięcie tekstów widocznych w materiale,
- brak łatwego dostępu do alternatywy.

---

## 13. Dobre praktyki

- Umieszczanie alternatywy bezpośrednio pod materiałem.
- Stosowanie pełnych opisów przebiegu zdarzeń.
- Uwzględnianie wszystkich informacji tekstowych występujących na ekranie.
- Zapewnienie alternatywy w formie rzeczywistego tekstu możliwego do odczytania przez technologie wspomagające.
- Weryfikowanie alternatywy przez osobę nieoglądającą materiału.

---

## 14. Wynik testu

- Zgodne
- Częściowo zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Film bez ścieżki dźwiękowej nie posiada alternatywy tekstowej ani dźwiękowej umożliwiającej zapoznanie się z prezentowanymi informacjami bez oglądania obrazu.

lub

> Alternatywa dla filmu bez dźwięku jest niekompletna i nie przekazuje wszystkich informacji prezentowanych wizualnie.

---

## 17. Rekomendacje naprawcze

- Przygotować alternatywę tekstową opisującą treść filmu.
- Zapewnić alternatywną ścieżkę dźwiękową lub odrębny plik audio.
- Uzupełnić brakujące informacje w istniejącej alternatywie.
- Uwzględnić wszystkie teksty i komunikaty prezentowane wizualnie.
- Wprowadzić procedurę publikacji materiałów wideo wraz z wymaganymi alternatywami.

---

## 18. Powiązane testy

- Transkrypcja dla nagrań audio
- Napisy rozszerzone
- Audiodeskrypcja
- Alternatywa pełnotekstowa dla multimediów
- Odtwarzacz multimedialny

---
