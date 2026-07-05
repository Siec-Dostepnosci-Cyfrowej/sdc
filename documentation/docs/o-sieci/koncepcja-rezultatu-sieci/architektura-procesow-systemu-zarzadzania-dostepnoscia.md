---
id: architektura-procesow-systemu-zarzadzania-dostepnoscia
title: Architektura procesów Systemu Zarządzania Dostępnością Cyfrową
sidebar_position: 4
sidebar_label: Architektura procesów
keywords: [praca Sieci,organizacja pracy,zadania Sieci,System Zarządzania Dostępnością Cyfrową,architektura procesów]
tags: [praca Sieci,organizacja pracy,zadania Sieci,System Zarządzania Dostępnością Cyfrową,architektura procesów]  
opracowanie: Stefan Wajda
data_zgłoszenia: 5 lipca 2026 r.
data_aktualizacji: 5 lipca 2026 r.
---

**Projekt, wersja 0.2**

## 1. Przeznaczenie dokumentu

Ten dokument określa architekturę procesów Systemu Zarządzania Dostępnością Cyfrową (SZDC).

Architektura procesów opisuje rolę procesów w funkcjonowaniu SZDC oraz relacje pomiędzy procesami a centralnymi rejestrami informacji utrzymywanymi przez organizację.

Dokument rozwija zasady przedstawione w **Podstawach Systemu Zarządzania Dostępnością Cyfrową** oraz **Architekturze informacji SZDC**.

---

## 2. Cel architektury procesów

Celem architektury procesów jest zapewnienie ciągłego utrzymywania aktualnych informacji o:

- stanie dostępności i zgodności zasobów cyfrowych,
- stanie Systemu Zarządzania Dostępnością Cyfrową.

Procesy są mechanizmem utrzymywania tych informacji oraz wykorzystywania ich do podejmowania decyzji.


![Architektura procesów SZDC](/o-sieci/koncepcja-rezultatu-sieci/diag-03-architektura-procesow.png)

<details>
<summary>Architektura dokumentacji SZDC</summary>

<strong>Cel diagramu</strong>. Diagram przedstawia trzy klasy procesów tworzących System Zarządzania Dostępnością Cyfrową.

<strong>Opis diagramu</strong>. Procesy pozyskiwania informacji gromadzą nowe informacje oraz aktualizują centralne rejestry. Procesy wykorzystania informacji korzystają z informacji zgromadzonych w rejestrach do podejmowania decyzji oraz realizacji działań wpływających na stan dostępności i rozwój systemu. Procesy udostępniania informacji prezentują informacje odpowiednim odbiorcom, między innymi w postaci deklaracji dostępności, raportów oraz informacji przekazywanych użytkownikom.

W centrum diagramu znajdują się dwa centralne rejestry informacji, z których korzystają wszystkie klasy procesów.

<strong>Najważniejszy wniosek</strong>. Diagram pokazuje, że procesy nie utrzymują własnych zbiorów informacji, lecz wspólnie wykorzystują centralne rejestry SZDC.

</details>

---

## 3. Rola procesów w SZDC

Procesy są podstawowym mechanizmem funkcjonowania Systemu Zarządzania Dostępnością Cyfrową.

Ich zadaniem nie jest wyłącznie wykonywanie określonych działań, lecz przede wszystkim utrzymywanie aktualności informacji wykorzystywanych do zarządzania dostępnością cyfrową.

Procesy różnią się realizowanymi zadaniami, lecz wszystkie należą do jednej z trzech klas procesów opisanych w dalszej części dokumentu. W ramach tych klas mogą pozyskiwać, aktualizować, wykorzystywać lub udostępniać informacje utrzymywane przez SZDC.

Procesy nie utrzymują własnych zbiorów informacji.

Informacje są utrzymywane wyłącznie w centralnych rejestrach SZDC.

---

## 4. Centralne rejestry informacji

Procesy współtworzą i wykorzystują dwa centralne rejestry informacji:

- Rejestr stanu dostępności i zgodności;
- Rejestr stanu Systemu Zarządzania Dostępnością Cyfrową.

Procesy nie tworzą alternatywnych źródeł informacji.

Wszystkie informacje wykorzystywane przez SZDC powinny być utrzymywane i aktualizowane w tych rejestrach.

---

## 5. Klasy procesów SZDC

Ze względu na sposób wykorzystania informacji procesy SZDC dzieli się na trzy klasy.

### 5.1. Procesy pozyskiwania informacji

Procesy pozyskiwania pozyskują nowe informacje oraz aktualizują centralne rejestry informacji.

Ich rezultatem jest utworzenie lub aktualizacja informacji utrzymywanych w centralnych rejestrach SZDC.

Do procesów pozyskiwania informacji należą między innymi:

- ocena stanu zgodności i dostępności;
- odbiór dostępnościowy;
- monitorowanie;
- obsługa zgłoszeń użytkowników;
- analiza problemów;
- samoocena organizacji;
- ocena dojrzałości;
- przeglądy kierownictwa.

---

### 5.2. Procesy wykorzystania informacji

Procesy wykorzystania informacji korzystają z informacji zgromadzonych w centralnych rejestrach w celu podejmowania decyzji oraz realizacji działań.

Ich rezultatem jest zmiana stanu dostępności i zgodności zasobów cyfrowych lub stanu Systemu Zarządzania Dostępnością Cyfrową.

Do procesów wykorzystania informacji należą między innymi:

- planowanie działań;
- usuwanie problemów dostępności;
- rozwój kompetencji;
- zapewnianie zasobów;
- zakupy;
- projektowanie, rozwój i utrzymanie rozwiązań wykorzystujących technologie informacyjno-komunikacyjne;
- aktualizacja polityk i procedur.

---

### 5.3. Procesy udostępniania informacji

Procesy udostępniania informacji udostępniają informacje zgromadzone w centralnych rejestrach odpowiednim odbiorcom.

Nie tworzą nowych informacji.

Prezentują informacje utrzymywane przez SZDC.

Do procesów udostępniania informacji należą między innymi:

- publikacja deklaracji dostępności;
- raportowanie kierownictwu;
- raportowanie podmiotom uprawnionym;
- przekazywanie informacji wykonawcom;
- informowanie użytkowników.

---

## 6. Cykl życia informacji

Informacja wykorzystywana przez SZDC przechodzi następujący cykl:

1. Pozyskanie.
2. Weryfikacja.
3. Aktualizacja odpowiedniego rejestru.
4. Wykorzystanie do podejmowania decyzji.
5. Publikacja odpowiednim odbiorcom.

Informacja pozostaje w centralnych rejestrach i może być wielokrotnie wykorzystywana przez różne procesy.

---

## 7. Zależności pomiędzy procesami

Procesy SZDC tworzą spójny system współpracujących mechanizmów.

Procesy pozyskiwania informacji dostarczają informacji procesom wykorzystującym.

Procesy wykorzystania informacji podejmują działania wpływające na stan dostępności i zgodności zasobów cyfrowych oraz stan Systemu Zarządzania Dostępnością Cyfrową.

Rezultaty tych działań stają się przedmiotem kolejnych procesów zasilających.

Procesy udostępniania informacji wykorzystują informacje zgromadzone w rejestrach do komunikacji z interesariuszami.

---

## 8. Relacje z pozostałymi metadokumentami

Architektura procesów wykorzystuje informacje opisane w **Architekturze informacji SZDC**.

Architektura informacji określa informacje wykorzystywane przez procesy.

Architektura środków wspierających określa środki umożliwiające realizację procesów.

Zalecenia opisują organizację i przebieg poszczególnych procesów.

---

## 9. Zastosowanie architektury procesów

Architektura procesów stanowi podstawę:

- projektowania procesów SZDC;
- opracowywania zaleceń;
- projektowania przepływu informacji;
- projektowania narzędzi wspierających SZDC;
- zapewniania spójności procesów w całym Systemie Zarządzania Dostępnością Cyfrową.

Każdy proces opisany w zaleceniach powinien wskazywać:

- do której klasy procesów należy,
- które centralne rejestry wykorzystuje,
- które informacje tworzy lub aktualizuje,
- jakie informacje publikuje,
- jakie zalecenia są z nim powiązane.

