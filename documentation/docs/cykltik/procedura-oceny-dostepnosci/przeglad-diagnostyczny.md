---
id: przeglad-diagnostyczny
title: Procedura przeglądu diagnostycznego dostępności witryny
description: Określa ramy procedury przeglądu diagnostycznego witryny internetowej
sidebar_label: Przegląd diagnostyczny
sidebar_position: 1
keywords: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności, przegląd diagnostyczny]
tags: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności, przegląd diagnostyczny]
opracowanie: Stefan Wajda 
data_zgloszenia: 14 kwietnia 2026 r.
ostatnia_aktualizacja: 15 kwietnia 2026 r.
wersja_robocza: true

---

## 1. Cel procedury

Celem przeglądu diagnostycznego jest szybkie i uporządkowane rozpoznanie stanu dostępności witryny oraz identyfikacja najważniejszych problemów, w zakresie wystarczającym do podjęcia działań organizacyjnych i naprawczych.

Przegląd nie zastępuje audytu zgodności. Jego celem jest **wsparcie działania**, a nie pełna weryfikacja zgodności.

Przegląd stanowi również podstawę do podjęcia zasadniczej decyzji dotyczącej dalszego postępowania wobec witryny:
- czy zasadne jest prowadzenie prac naprawczych i modernizacyjnych,
- czy konieczne jest zaprojektowanie i wdrożenie nowego systemu.

W tym znaczeniu przegląd pełni funkcję zarówno **diagnostyczną**, jak i **decyzyjną**.

Przegląd ma charakter uproszczony i ukierunkowany na identyfikację problemów o największym znaczeniu dla użytkownika.

Przegląd dostarcza wiedzy wystarczającej do rozpoczęcia działań naprawczych.

---


## 2. Odniesienie do standardów dostępności

Przegląd diagnostyczny odnosi się do wymagań dostępności określonych w obowiązujących standardach, w szczególności:

- WCAG (Web Content Accessibility Guidelines),  
- EN 301 549 (wymagania dostępności produktów i usług ICT).

Przegląd nie polega na formalnej ocenie zgodności z tymi standardami, lecz na identyfikacji problemów, które wpływają na możliwość korzystania z serwisu przez użytkowników.

Wyniki przeglądu mogą wskazywać obszary potencjalnej niezgodności ze standardami, jednak ich formalna weryfikacja wymaga odrębnych działań (np. audytu zgodności).



## 3. Zakres procedury

Przegląd obejmuje:

- wybrane reprezentatywne podstrony witryny,
- kluczowe procesy użytkownika (np. wyszukiwanie, kontakt, wypełnienie formularza),
- typowe treści publikowane przez organizację (dokumenty, multimedia),
- podstawowe elementy interfejsu i nawigacji.

Zakres przeglądu powinien umożliwiać identyfikację problemów systemowych wynikających ze sposobu zarządzania treścią i technologią, a nie wszystkich pojedynczych błędów.

---

## 4. Dobór próby

Organizacja wybiera zestaw podstron obejmujący:

- stronę główną,
- stronę listy (np. aktualności, BIP),
- stronę szczegółową (artykuł),
- stronę z formularzem,
- stronę z dokumentem do pobrania,
- stronę z multimediami (jeśli występują).

Dodatkowo:
- co najmniej 1–2 rzeczywiste procesy użytkownika (np. wysłanie formularza, kontakt).

W kolejnych cyklach przeglądu zaleca się częściową zmianę badanej próby stron, z zachowaniem strony głównej jako stałego punktu odniesienia.

Zmiana próby pozwala na lepsze rozpoznanie problemów systemowych oraz ogranicza ryzyko pominięcia istotnych obszarów witryny.

---

## 5. Zakres sprawdzeń

### 5.1. Sprawdzenia automatyczne (wsparcie)

- uruchomienie narzędzia automatycznego,
- identyfikacja powtarzalnych błędów,
- traktowanie wyników jako sygnału, nie jako oceny końcowej.

---

### 5.2. Sprawdzenia manualne (kluczowe)

Sprawdzenie:

- struktury nagłówków i logicznego układu treści,
- dostępności nawigacji (menu, fokus, kolejność),
- czytelności i zrozumiałości treści,
- dostępności formularzy (etykiety, błędy),
- dostępności dokumentów,
- dostępności multimediów.

---

### 5.3. Sprawdzenie wykonania zadania

Organizacja sprawdza:

- czy użytkownik może wykonać konkretne zadanie,
- gdzie napotyka bariery,
- czy zadanie jest możliwe do ukończenia.

Jest to najważniejszy element przeglądu, ponieważ bezpośrednio odnosi się do rzeczywistej dostępności usług dla użytkownika.

---

## 6. Dokumentowanie wyników

Dla każdego problemu należy zapisać:

- opis problemu,
- miejsce występowania,
- wpływ na użytkownika,
- skalę (pojedynczy / powtarzalny / systemowy).

---

## 7. Grupowanie problemów

Problemy należy pogrupować według:

- typu (treści, techniczne, organizacyjne),
- powtarzalności,
- wpływu na użytkownika.

Celem jest identyfikacja problemów systemowych.

---

## 8. Określenie priorytetów

Organizacja określa:

- problemy wymagające natychmiastowego działania,
- problemy wymagające zmian systemowych,
- problemy możliwe do realizacji w późniejszym etapie.

---

## 9. Wynik przeglądu

Rezultatem przeglądu jest:

- uporządkowana informacja o problemach,
- identyfikacja problemów systemowych,
- wstępny plan działań,
- podstawa do decyzji organizacyjnych,
- możliwa podstawa do deklaracji dostępności.

Wynik przeglądu powinien być przedstawiony w formie umożliwiającej podjęcie decyzji zarządczych.

---

## 10. Czas i zasoby

Przegląd:

- może być wykonany przez zespół wewnętrzny,
- nie wymaga zaawansowanych narzędzi,
- powinien być możliwy do przeprowadzenia w krótkim czasie (np. 1–3 dni).

---

## 11. Ograniczenia

Przegląd:

- nie zapewnia pełnej oceny zgodności,
- nie zastępuje audytu,
- nie identyfikuje wszystkich problemów.

---

## 12. Decyzje po przeglądzie

### 12.1. Decyzja o kierunku działań

Organizacja podejmuje decyzję:

- modernizacja systemu,
- budowa nowego systemu.

#### 12.1.1 Kryteria decyzji

| Kryterium | Modernizacja | Nowy system |
|----------|-------------|-------------|
| Skala problemów | ograniczona | systemowa |
| Charakter problemów | lokalne | architektura |
| Wpływ na użytkownika | utrudnienia | brak możliwości wykonania zadań |
| Powtarzalność | incydentalne | powtarzalne |
| Możliwości techniczne | istnieją | brak |
| Dostęp do kodu | możliwy | ograniczony |
| Koszt i czas | proporcjonalne | nieproporcjonalne |
| Rozwój systemu | możliwy | brak |
| Ryzyko | kontrolowane | wysokie |
| Integracje | niewielkie | wymagają przebudowy |
| **Wiek i wsparcie** | system wspierany | system niewspierany |

#### 12.1.2 Interpretacja

Systemy oparte na niewspieranych technologiach mają ograniczoną zdolność zapewnienia dostępności i w praktyce wymagają migracji lub zastąpienia nowym rozwiązaniem.

---

### 12.2. Decyzja o priorytetach

- działania pilne,
- działania systemowe,
- działania planowane.

---

### 12.3. Decyzja o wsparciu eksperckim

Organizacja określa potrzebę:

- wsparcia,
- badań,
- ekspertyzy,
- audytu.

---

### 12.4. Deklaracja dostępności

Przegląd może stanowić podstawę deklaracji:

- **częściowej zgodności** – brak problemów krytycznych,
- **niezgodności** – występują istotne problemy.

Przegląd umożliwia rzetelną ocenę, jeśli jego zakres był właściwy.

---
