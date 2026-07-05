---
id: architektura-informacji-systemu-zapewniania-dostepnosci
title: Architektura informacji systemu zapewniania dostępności cyfrowej
sidebar_position: 3
sidebar_label: Architektura informacji
keywords: [System zapewniania dostępności cyfrowej,SZDC,architektura informacji]
tags: [System zapewniania dostępności cyfrowej,SZDC,architektura informacji] 
opracowanie: Stefan Wajda
data_zgłoszenia: 5 lipca 2026 r.
data_aktualizacji: 5 lipca 2026 r.
---

**Projekt, wersja 0.3**

## 1. Przeznaczenie dokumentu

Ten dokument określa architekturę informacji systemu zapewniania dostępności cyfrowej (SZDC).

Architektura informacji definiuje rodzaje informacji utrzymywanych przez organizację, relacje pomiędzy nimi oraz zasady ich tworzenia, aktualizacji i wykorzystywania.

Stanowi podstawę projektowania procesów, środków wspierających oraz dokumentów wykorzystujących informacje SZDC.

---

## 2. Cel architektury informacji

Celem architektury informacji jest zapewnienie, aby decyzje dotyczące dostępności cyfrowej były podejmowane na podstawie aktualnej, wiarygodnej i spójnej wiedzy.

Architektura informacji:
- określa informacje utrzymywane przez SZDC;
- eliminuje powielanie informacji;
- wskazuje źródła informacji;
- określa sposób ich wykorzystania;
- zapewnia spójność informacji wykorzystywanych przez SZDC.

![Architektura informacji SZDC](/o-sieci/koncepcja-rezultatu-sieci/diag-02-architektura-informacji.png)

<details>
<summary>Architektura informacji SZDC</summary>

<strong>Cel diagramu</strong>. Diagram przedstawia sposób organizacji informacji wykorzystywanych przez system zapewniania dostępności cyfrowej.

<strong>Opis diagramu</strong>. Centralnym elementem architektury informacji są dwa rejestry. Pierwszy gromadzi informacje o stanie dostępności i zgodności zasobów cyfrowych. Drugi zawiera informacje opisujące stan systemu zapewniania dostępności cyfrowej oraz zdolność organizacji do zapewniania dostępności cyfrowej.

Informacje pozyskiwane podczas realizacji procesów są aktualizowane w odpowiednich rejestrach. Rejestry stanowią jedyne źródło informacji wykorzystywane przez procesy, raporty, deklarację dostępności oraz pozostałe dokumenty.

<strong>Najważniejszy wniosek</strong>. Diagram podkreśla zasadę, że informacje są utrzymywane w jednym miejscu i wielokrotnie wykorzystywane przez różne procesy.

</details>


---

## 3. Zasady architektury informacji

Architektura informacji opiera się na następujących zasadach.

### Wiedza jest utrzymywana w sposób ciągły

Organizacja utrzymuje aktualną wiedzę o dostępności swoich zasobów oraz o stanie systemu zapewniania dostępności cyfrowej dzięki ciągłej aktualizacji informacji.

Informacje są aktualizowane wraz ze zmianami zachodzącymi w organizacji i jej zasobach.

---

### Informacja jest tworzona raz

Każda informacja powinna mieć jedno miejsce utrzymywania. Pozostałe dokumenty korzystają z tej informacji lub ją prezentują, nie tworząc jej odrębnych kopii.

Poszczególne procesy korzystają ze wspólnych zasobów informacji.

---

### Każda informacja posiada źródło

Każda informacja wykorzystywana do podejmowania decyzji powinna wskazywać:

- źródło,
- datę pozyskania,
- autora,
- materiały dowodowe,
- historię zmian.

---

### Dokumenty korzystają z informacji

Raporty, deklaracje oraz inne dokumenty nie stanowią podstawowego miejsca przechowywania wiedzy.

Stanowią sposób jej prezentacji odpowiednim odbiorcom.

Dokumenty nie stanowią źródła informacji, lecz wykorzystują informacje utrzymywane przez SZDC.

---

## 4. Dwa centralne rejestry SZDC

Architektura informacji SZDC opiera się na dwóch centralnych rejestrach:

- **Rejestrze stanu dostępności i zgodności**;
- **Rejestrze stanu systemu zapewniania dostępności cyfrowej**.

Pozostałe procesy, dokumenty i środki wspierające służą pozyskiwaniu, aktualizowaniu, wykorzystywaniu lub prezentowaniu informacji zgromadzonych w tych rejestrach.

### 4.1. Rejestr stanu dostępności i zgodności

Jest centralnym rejestrem informacji o stanie dostępności i zgodności zasobów cyfrowych organizacji.

Odpowiada między innymi na pytania:

- jaki jest aktualny stan dostępności i zgodności;
- jakie problemy występują;
- jakie działania naprawcze są prowadzone;
- jakie są materiały dowodowe;
- jakie zmiany nastąpiły.

---

### 4.2. Rejestr stanu systemu zapewniania dostępności cyfrowej

Jest centralnym rejestrem informacji opisujących stan systemu zapewniania dostępności cyfrowej oraz zdolność organizacji do zapewniania dostępności cyfrowej.

Dotyczy między innymi:

- polityki dostępności,
- celów i planów rozwoju,
- przywództwa,
- ról i odpowiedzialności,
- procesów,
- zasobów,
- kompetencji i szkoleń,
- wskaźników funkcjonowania SZDC,
- wyników przeglądów kierownictwa,
- wyników ocen dojrzałości,
- działań doskonalących i ich realizacji.

---

## 5. Struktura informacji

Informacje utrzymywane przez SZDC można podzielić na trzy poziomy.

### Informacje pierwotne

Powstają podczas realizacji procesów.

Obejmują między innymi:

- obserwacje,
- wyniki testów,
- zgłoszenia użytkowników,
- wyniki monitorowania,
- materiały dowodowe,
- wyniki odbiorów.

---

### Informacje zarządcze

Powstają w wyniku analizy informacji pierwotnych.

Obejmują między innymi:

- Rejestr stanu dostępności i zgodności,
- Rejestr stanu systemu zapewniania dostępności cyfrowej,
- rejestr problemów,
- wskaźniki,
- plany działań,
- ocenę dojrzałości.

Informacje zarządcze opisują zarówno stan dostępności zasobów cyfrowych, jak i stan zdolności organizacji do zapewniania dostępności cyfrowej.

---

### Informacje publikowane

Służą komunikacji z interesariuszami.

Obejmują między innymi:

- deklarację dostępności,
- raporty dla kierownictwa,
- informacje przekazywane wykonawcom,
- informacje publikowane użytkownikom.

---

## 6. Przepływ informacji

![Przepływ informacji w SZDC](/o-sieci/koncepcja-rezultatu-sieci/diag-04-przeplyw-informacji.png)

<details>
<summary>Diagram 4. Przepływ informacji w SZDC</summary>

<strong>Cel diagramu</strong>. Diagram przedstawia sposób przepływu informacji przez system zapewniania dostępności cyfrowej.

<strong>Opis diagramu</strong>. Proces rozpoczyna się od pozyskania obserwacji oraz materiałów dowodowych. Na ich podstawie powstają informacje aktualizujące odpowiedni rejestr. Informacje zgromadzone w rejestrach są następnie wykorzystywane do analizy sytuacji, podejmowania decyzji oraz planowania działań.

Realizacja działań prowadzi do zmiany stanu dostępności zasobów lub stanu systemu zapewniania dostępności cyfrowej. Zmiana ta jest ponownie obserwowana i dokumentowana, co powoduje kolejną aktualizację rejestrów.

<strong>Najważniejszy wniosek</strong>. Diagram pokazuje, że SZDC działa jako system ciągłego uczenia się. Informacje nie są tworzone jednorazowo ani okresowo, lecz są stale aktualizowane i wielokrotnie wykorzystywane do zapewniania dostępności cyfrowej.

</details>

Procesy SZDC nie powinny utrzymywać własnych zbiorów informacji. Ich zadaniem jest pozyskiwanie, aktualizowanie, wykorzystywanie oraz publikowanie informacji utrzymywanych w centralnych rejestrach SZDC.

Każda nowa informacja powinna zostać oceniona pod kątem wpływu na:

- Rejestr stanu dostępności i zgodności,
- Rejestr stanu systemu zapewniania dostępności cyfrowej,
- plan działań,
- decyzje kierownictwa,
- deklarację dostępności,
- raportowanie kierownictwu.

---

## 7. Relacje z pozostałymi metadokumentami

Architektura informacji stanowi podstawę dla:

- Architektury procesów SZDC;
- Architektury środków wspierających SZDC.

Procesy tworzą, aktualizują i wykorzystują informacje opisane w tym dokumencie.

---

## 8. Zastosowanie architektury informacji

Architektura informacji stanowi podstawę:

- projektowania procesów SZDC;
- projektowania rejestrów;
- projektowania dokumentów wykorzystujących informacje SZDC;
- projektowania wskaźników;
- projektowania narzędzi informatycznych;
- utrzymywania spójności informacji w całym systemie zapewniania dostępności cyfrowej.
