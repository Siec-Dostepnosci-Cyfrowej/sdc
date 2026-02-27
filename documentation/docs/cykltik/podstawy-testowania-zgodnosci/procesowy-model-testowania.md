---
id: procesowy-model-testowania
title: Procesowy model testowania zgodności
sidebar_label: Procesowy model testowania zgodności
sidebar_position: 5
description: Przedstawia koncepcję procesowego modelu testowania zgodności ukierunkowanego na zapewnienie ciągłości procesu oceny i poprawy dostępności
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 27 lutego 2026 r.
wersja_robocza: true

---

**Załącznik do dezyderatu**

---

## 1. Założenie modelu

Celem „Podstawy testowania zgodności TIK” nie jest maksymalizacja zakresu jednorazowego badania, lecz zapewnienie **ciągłości procesu oceny i poprawy dostępności**.

Model procesowy opiera się na dwóch filarach:

1. **Cykliczność** – regularne przeglądy i monitoring zmian.  
2. **Powiązanie z działaniami naprawczymi** – każdy przegląd skutkuje aktualizacją rejestru niezgodności i planu działań.

Pełny audyt nie jest podstawowym obowiązkiem wszystkich podmiotów, lecz narzędziem rozwojowym dla produktów dojrzałych.

---

## 2. Architektura modelu

Model składa się z:

- trzech poziomów głębokości przeglądu,
- jednego obowiązkowego cyklu rocznego,
- wspólnego mechanizmu rejestru i monitoringu.

---

## 3. Poziomy głębokości przeglądu

### 3.1 Poziom I – Przegląd podstawowy (Fundamenty)

#### Cel
Zapewnienie minimalnej strukturalnej zdolności produktu do dostępności.

#### Zakres
- Zestaw kluczowych kryteriów (rdzeń operowalności i percepcji).
- Test głównego scenariusza zadaniowego.
- Test obsługi klawiaturą.
- Test z czytnikiem ekranu.

#### Zastosowanie
- Małe i proste serwisy.
- Jednofunkcyjne usługi.
- Wstępna ocena przed rozszerzeniem zakresu.

#### Status
Może stanowić podstawę deklaracji dostępności, o ile:
- obejmuje wszystkie unikalne widoki,
- nie występują złożone procesy wieloetapowe.

---

### 3.2 Poziom II – Przegląd rozszerzony (Roczny)

#### Cel
Realizacja ustawowego obowiązku przeglądu dostępności.

#### Zakres
- Reprezentatywna próbka obejmująca wszystkie obszary funkcjonalne.
- Testy AT w kluczowych procesach.
- Weryfikacja zmian wprowadzonych od poprzedniego przeglądu.
- Aktualizacja rejestru niezgodności.

#### Charakterystyka
Może być:
- jednorazowym przeglądem,
- agregatem kilku przeglądów cząstkowych wykonanych w ciągu roku.

#### Status
Podstawowy i realistyczny model deklaracyjny dla większości podmiotów publicznych.

---

### 3.3 Poziom III – Audyt pełny

#### Cel
Kompleksowa ocena zgodności produktu z EN 301 549.

#### Zakres
- Pełne pokrycie wymagań.
- Rozbudowana próbka.
- Pełne testy AT.
- Szczegółowa dokumentacja dowodowa.

#### Charakter
Dobrowolny, rozwojowy lub certyfikacyjny.

#### Certyfikacja
Może dotyczyć wyłącznie stabilnych produktów cyfrowych (np. wersjonowanego oprogramowania).
Nie może dotyczyć dynamicznych stron internetowych.

---

## 4. Roczny cykl przeglądu dostępności

Centralnym elementem modelu jest cykl procesowy:

### 4.1 Plan

- Identyfikacja zmian w produkcie.
- Określenie zakresu przeglądu.
- Wybór poziomu przeglądu.
- Aktualizacja harmonogramu.

---

### 4.2 Test

- Wykonanie testów zgodnie z profilem.
- Dokumentowanie wyników.
- Zbieranie dowodów.

---

### 4.3 Rejestr

- Aktualizacja rejestru niezgodności.
- Klasyfikacja wagi problemów.
- Oznaczenie nowych i naprawionych pozycji.

Rejestr jest dokumentem ciągłym – nie tworzonym od nowa co roku.

---

### 4.4 Naprawa

- Opracowanie planu działań.
- Określenie odpowiedzialności i terminów.
- Priorytetyzacja na podstawie wpływu na użytkownika.

---

### 4.5 Weryfikacja

- Test naprawionych elementów.
- Aktualizacja statusu w rejestrze.
- Dokumentowanie dowodów usunięcia niezgodności.

---

### 4.6 Aktualizacja deklaracji

- Uaktualnienie informacji o stanie dostępności.
- Wskazanie zakresu przeprowadzonego przeglądu.
- Wskazanie najważniejszych niezgodności.
- Opis działań naprawczych.

---

## 5. Rejestr niezgodności jako element obowiązkowy

Każdy podmiot powinien prowadzić rejestr zawierający:

- identyfikator niezgodności,
- odniesienie do EN/WCAG,
- lokalizację problemu,
- kategorię wagi,
- datę wykrycia,
- plan naprawczy,
- status realizacji,
- datę weryfikacji.

Rejestr stanowi podstawę:

- przeglądu rocznego,
- monitoringu,
- kontroli zarządczej,
- raportowania postępów.

---

## 6. Zasady systemowe modelu

1. Każdy podmiot realizuje co najmniej przegląd podstawowy.  
2. Każdy przegląd skutkuje aktualizacją rejestru.  
3. Każda deklaracja dostępności wskazuje zakres przeglądu.  
4. Pełny audyt jest narzędziem pogłębionej oceny, nie powszechnym obowiązkiem.  
5. Celem systemu jest poprawa dostępności w czasie, nie jednorazowa certyfikacja.

---

## 7. Podsumowanie

Model procesowy:

- przesuwa akcent z jednorazowego audytu na ciągłość działań,
- umożliwia proporcjonalne podejście do wielkości i złożoności systemu,
- wzmacnia powiązanie testowania z realnymi działaniami naprawczymi,
- buduje kulturę zarządzania dostępnością, a nie tylko jej formalnego potwierdzania.

Stanowi on realistyczną i systemową odpowiedź na wyzwania związane z wdrażaniem EN 301 549 oraz obowiązkiem corocznej aktualizacji deklaracji dostępności.