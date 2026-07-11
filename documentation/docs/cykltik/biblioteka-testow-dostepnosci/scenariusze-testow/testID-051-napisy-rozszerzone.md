---
id: test-napisy-rozszerzone
title: Scenariusz testu - Napisy rozszerzone
sidebar_label: Napisy rozszerzone
sidebar_position: 51
description: Scenariusz testu sprawdzającego, czy materiały wideo zawierające dźwięk posiadają napisy przekazujące dialogi, identyfikację osób mówiących oraz istotne informacje dźwiękowe.
keywords: [napisy rozszerzone, napisy dla niesłyszących, multimedia, wideo, WCAG, dostępność cyfrowa]
tags: [test dostępności, multimedia, napisy, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-051**

---

## 2. Nazwa testu

**Napisy rozszerzone**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy nagranie wideo zawierające dźwięk posiada napisy umożliwiające zapoznanie się z treścią materiału bez słuchania ścieżki dźwiękowej.

### Co oznaczają „napisy rozszerzone”?

Napisy rozszerzone (ang. *captions*) to napisy przeznaczone przede wszystkim dla osób niesłyszących i słabosłyszących.

Oprócz wypowiadanych słów powinny przekazywać również informacje dźwiękowe niezbędne do zrozumienia materiału.

Napisy rozszerzone mogą zawierać między innymi:

- dialogi,
- identyfikację osób mówiących,
- informacje o zmianie rozmówcy,
- opisy istotnych dźwięków,
- informacje o muzyce,
- informacje o efektach dźwiękowych.

### Czym różnią się napisy rozszerzone od zwykłych napisów?

Zwykłe napisy często zawierają wyłącznie zapis dialogów.

Napisy rozszerzone przekazują również informacje dostępne wyłącznie w ścieżce dźwiękowej.

Przykłady:

- [dzwonek telefonu]
- [śmiech]
- [muzyka dramatyczna]
- [głos z oddali]
- [oklaski]

### Jakie materiały obejmuje test?

Test dotyczy materiałów wideo posiadających wcześniej nagraną ścieżkę dźwiękową.

Przykłady:

- nagrania konferencji,
- filmy informacyjne,
- webinary,
- materiały szkoleniowe,
- filmy instruktażowe,
- materiały promocyjne,
- wywiady i reportaże.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.2.2 Napisy rozszerzone (nagranie) (A)**

### EN 301 549

- **9.1.2.2 Captions (Prerecorded)**
- **10.1.2.2 Captions (Prerecorded)**
- **11.1.2.2 Captions (Prerecorded)**

### Techniki WCAG

#### Techniki wystarczające

- G87
- G93
- SM11

#### Techniki wspierające

- G68
- G78
- G69

---

## 6. Zastosowanie do treści

Test stosuje się do:

- nagrań wideo z dźwiękiem,
- materiałów edukacyjnych,
- webinariów,
- nagrań konferencji,
- filmów instruktażowych,
- materiałów publikowanych w serwisach internetowych,
- materiałów publikowanych w mediach społecznościowych.

### Wyjątki

Test nie dotyczy:

- materiałów bez ścieżki dźwiękowej,
- transmisji na żywo,
- materiałów stanowiących alternatywę dla tekstu.

W takich przypadkach wynik oznacza się jako:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się materiał wideo, dla którego:

- zapewniono napisy obejmujące wszystkie wypowiedzi,
- napisy identyfikują osoby mówiące, gdy jest to potrzebne do zrozumienia treści,
- napisy przekazują istotne informacje dźwiękowe,
- napisy są zsynchronizowane z materiałem,
- napisy są kompletne i umożliwiają zrozumienie treści bez odsłuchiwania dźwięku.

---

## 8. Dlaczego to jest ważne

Osoby niesłyszące i słabosłyszące nie mają dostępu do informacji przekazywanych za pomocą ścieżki dźwiękowej.

Brak napisów powoduje, że:

- nie mogą śledzić dialogów,
- nie wiedzą, kto się wypowiada,
- nie otrzymują informacji przekazywanych przez dźwięki i muzykę,
- mogą nie rozumieć przebiegu wydarzeń.

Napisy rozszerzone umożliwiają równoważny dostęp do treści materiału.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niesłyszących,
- osób słabosłyszących,
- osób głuchych od urodzenia,
- osób korzystających z monitorów brajlowskich,
- osób oglądających materiały bez możliwości odsłuchu,
- osób korzystających z tłumaczeń automatycznych.

---

## 10. Sposób testowania

### Krok 1

Odtwórz materiał wideo.

### Krok 2

Sprawdź, czy materiał zawiera ścieżkę dźwiękową.

### Krok 3

Sprawdź, czy dostępne są napisy.

### Krok 4

Wyłącz dźwięk.

### Krok 5

Obejrzyj materiał korzystając wyłącznie z napisów.

### Krok 6

Sprawdź, czy napisy zawierają:

- wszystkie wypowiedzi,
- informacje o zmianie rozmówcy,
- identyfikację osób mówiących (gdy jest potrzebna),
- istotne informacje dźwiękowe.

### Krok 7

Sprawdź, czy napisy są zsynchronizowane z nagraniem.

### Krok 8

Oceń, czy możliwe jest zrozumienie materiału bez słuchania ścieżki dźwiękowej.

### Krok 9

Sprawdź, czy napisy nie zasłaniają istotnych informacji prezentowanych na ekranie.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Napisy przekazują wszystkie informacje niezbędne do zrozumienia materiału bez odsłuchiwania ścieżki dźwiękowej.

### Wynik częściowo pozytywny

Napisy istnieją, ale pomijają część informacji dźwiękowych lub zawierają niewielkie błędy synchronizacji, które nie uniemożliwiają zrozumienia materiału.

### Wynik negatywny

Napisy nie istnieją lub są na tyle niekompletne, że nie pozwalają zrozumieć materiału.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak napisów,
- napisy zawierające jedynie część dialogów,
- brak informacji o osobach mówiących,
- brak informacji o istotnych dźwiękach,
- brak informacji o muzyce mającej znaczenie dla treści,
- błędna synchronizacja napisów,
- automatyczne napisy zawierające liczne błędy,
- napisy niedostępne dla części materiału.

---

## 13. Dobre praktyki

- Przygotowywanie napisów przez człowieka lub ich ręczna korekta.
- Oznaczanie osób mówiących.
- Opisywanie istotnych dźwięków i efektów.
- Regularna kontrola synchronizacji napisów.
- Zapewnienie możliwości włączenia i wyłączenia napisów.
- Testowanie materiałów bez odsłuchiwania dźwięku.

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

> Materiał wideo nie posiada napisów rozszerzonych umożliwiających zapoznanie się z treścią bez odsłuchiwania ścieżki dźwiękowej.

lub

> Napisy nie przekazują wszystkich informacji dostępnych w ścieżce dźwiękowej, w szczególności informacji o osobach mówiących lub istotnych dźwiękach.

lub

> Napisy są niekompletne lub niezsynchronizowane z materiałem, co utrudnia zrozumienie treści.

---

## 17. Rekomendacje naprawcze

- Przygotować napisy rozszerzone dla całego materiału.
- Uzupełnić brakujące dialogi.
- Dodać informacje o osobach mówiących.
- Dodać opisy istotnych dźwięków i muzyki.
- Skorygować synchronizację napisów.
- Zweryfikować jakość automatycznie generowanych napisów przed publikacją.
- Wprowadzić obowiązek publikowania napisów dla wszystkich nowych materiałów wideo.

---

## 18. Powiązane testy

- Transkrypcja dla nagrań audio
- Transkrypcja dla wideo bez dźwięku
- Audiodeskrypcja
- Alternatywa pełnotekstowa dla multimediów
- Odtwarzacz multimedialny
- Sterowanie multimediami z klawiatury
---