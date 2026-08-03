---
id: architektura-procesow-systemu-zapewniania-dostepnosci
title: Architektura procesów systemu zapewniania dostępności cyfrowej
sidebar_position: 4
sidebar_label: Architektura procesów
keywords: [System zapewniania dostępności cyfrowej,SZDC,architektura procesów]
tags: [System zapewniania dostępności cyfrowej,SZDC,architektura procesów] 
opracowanie: Stefan Wajda
data_zgłoszenia: 6 lipca 2026 r.
data_aktualizacji: 6 lipca 2026 r.
---

**Projekt, wersja 0.3**

## 1. Przeznaczenie dokumentu

Ten dokument określa architekturę procesów systemu zapewniania dostępności cyfrowej (SZDC).

Architektura procesów opisuje rolę procesów w funkcjonowaniu SZDC oraz relacje pomiędzy procesami a centralnymi rejestrami informacji utrzymywanymi przez organizację.

Dokument rozwija zasady przedstawione w **Podstawach systemu zapewniania dostępności cyfrowej** oraz **Architekturze informacji SZDC**.

## 2. Cel architektury procesów

Celem architektury procesów jest określenie sposobu, w jaki procesy SZDC współdziałają w celu zapewniania dostępności cyfrowej oraz utrzymywania i wykorzystywania aktualnej wiedzy o:

- stanie dostępności i zgodności zasobów cyfrowych;
- stanie systemu zapewniania dostępności cyfrowej.

Procesy pozyskują, aktualizują, wykorzystują i udostępniają informacje utrzymywane w centralnych rejestrach SZDC.

![Diagram 5. Skrócony opis poniżej. Architektura procesów SZDC](/o-sieci/koncepcja-rezultatu-sieci/diag-03-architektura-procesow.svg)

<details>
<summary>Opis diagramu 5. Architektura procesów SZDC</summary>

<strong>Cel diagramu</strong>. Diagram przedstawia trzy klasy procesów funkcjonujących w systemie zapewniania dostępności cyfrowej.

<strong>Opis diagramu</strong>. Procesy pozyskiwania informacji tworzą nowe informacje oraz aktualizują informacje utrzymywane w centralnych rejestrach. Procesy wykorzystania informacji korzystają z informacji zgromadzonych w rejestrach do podejmowania decyzji oraz realizacji działań wpływających na stan dostępności i rozwój systemu. Procesy udostępniania informacji prezentują informacje odpowiednim odbiorcom, między innymi w postaci deklaracji dostępności, raportów oraz informacji przekazywanych użytkownikom.

W centrum diagramu znajdują się dwa centralne rejestry informacji, z których korzystają wszystkie klasy procesów.

<strong>Najważniejszy wniosek</strong>. Diagram pokazuje, że procesy nie utrzymują własnych zbiorów informacji, lecz wspólnie wykorzystują centralne rejestry SZDC.

</details>

## 3. Rola procesów w SZDC

Procesy są podstawowym mechanizmem funkcjonowania systemu zapewniania dostępności cyfrowej.

Ich zadaniem nie jest wyłącznie wykonywanie określonych działań, lecz także utrzymywanie aktualności informacji wykorzystywanych do podejmowania decyzji i zapewniania dostępności cyfrowej.

Procesy różnią się realizowanymi zadaniami, lecz wszystkie należą do jednej z trzech klas procesów opisanych w dalszej części dokumentu. W ramach tych klas mogą pozyskiwać, aktualizować, wykorzystywać lub udostępniać informacje utrzymywane przez SZDC.

Procesy nie utrzymują własnych zbiorów informacji. Korzystają z informacji utrzymywanych w centralnych rejestrach SZDC i aktualizują je.

## 4. Centralne rejestry informacji

Procesy współtworzą i wykorzystują dwa centralne rejestry informacji:

- Rejestr stanu dostępności i zgodności;
- Rejestr stanu systemu zapewniania dostępności cyfrowej.

Procesy nie tworzą alternatywnych źródeł informacji.

Informacje o stanie dostępności i zgodności oraz stanie systemu zapewniania dostępności cyfrowej są utrzymywane i aktualizowane w tych rejestrach.

## 5. Klasy procesów SZDC

Ze względu na sposób wykorzystania informacji procesy SZDC dzieli się na trzy klasy.

### 5.1. Procesy pozyskiwania informacji

Procesy pozyskiwania informacji tworzą nowe informacje oraz aktualizują informacje utrzymywane w centralnych rejestrach.

Do procesów pozyskiwania informacji należą między innymi:

- ocena stanu zgodności i dostępności;
- odbiór dostępnościowy;
- monitorowanie;
- obsługa zgłoszeń użytkowników;
- analiza problemów;
- samoocena organizacji;
- ocena dojrzałości;
- przeglądy kierownictwa.

### 5.2. Procesy wykorzystania informacji

Procesy wykorzystania informacji korzystają z informacji zgromadzonych w centralnych rejestrach w celu podejmowania decyzji oraz realizacji działań.

Ich rezultatem jest zmiana stanu dostępności i zgodności zasobów cyfrowych lub stanu systemu zapewniania dostępności cyfrowej.

Do procesów wykorzystania informacji należą między innymi:

- planowanie działań;
- usuwanie problemów dostępności;
- rozwój kompetencji;
- zapewnianie zasobów;
- zakupy;
- projektowanie, rozwój i utrzymanie rozwiązań wykorzystujących technologie informacyjno-komunikacyjne;
- aktualizacja polityk i procedur.

### 5.3. Procesy udostępniania informacji

Procesy udostępniania informacji udostępniają informacje utrzymywane w centralnych rejestrach odpowiednim odbiorcom.

Prezentują je w formie dostosowanej do celu i potrzeb odbiorców.

Do procesów udostępniania informacji należą między innymi:

- publikacja deklaracji dostępności;
- raportowanie kierownictwu;
- raportowanie podmiotom uprawnionym;
- przekazywanie informacji wykonawcom;
- informowanie użytkowników.

## 6. Cykl życia informacji

Informacje w SZDC są pozyskiwane, weryfikowane i utrzymywane w centralnych rejestrach. Są następnie wykorzystywane do podejmowania decyzji, realizacji działań lub udostępniania odpowiednim odbiorcom.

Rezultaty działań wpływają na stan dostępności i zgodności lub stan systemu zapewniania dostępności cyfrowej. Zmiana stanu może prowadzić do nowych obserwacji, aktualizacji informacji i kolejnych decyzji.

Informacje pozostają w centralnych rejestrach i mogą być wielokrotnie wykorzystywane przez różne procesy.

## 7. Zależności pomiędzy procesami

Procesy SZDC tworzą spójny system współpracujących mechanizmów.

Procesy pozyskiwania informacji tworzą i aktualizują informacje utrzymywane w centralnych rejestrach.

Procesy wykorzystania informacji korzystają z informacji utrzymywanych w rejestrach do podejmowania decyzji i realizacji działań.

Rezultaty tych działań stają się przedmiotem kolejnych procesów pozyskiwania informacji.

Procesy udostępniania informacji wykorzystują informacje zgromadzone w rejestrach do komunikacji z interesariuszami.

## 8. Relacje z pozostałymi metadokumentami

Architektura informacji SZDC określa informacje tworzone, aktualizowane, wykorzystywane i udostępniane przez procesy.

Architektura środków wspierających określa środki umożliwiające realizację procesów.

Zalecenia określają sposób organizacji działań i procesów składających się na system zapewniania dostępności cyfrowej.

## 9. Zastosowanie architektury procesów

Architektura procesów stanowi podstawę:

- projektowania procesów SZDC;
- opracowywania zaleceń;
- projektowania przepływu informacji;
- projektowania środków wspierających SZDC;
- zapewniania spójności procesów w całym systemie zapewniania dostępności cyfrowej.

Każdy proces opisany w zaleceniach powinien wskazywać:

- do której klasy procesów należy;
- jakie informacje tworzy, aktualizuje, wykorzystuje lub udostępnia;
- z którym centralnym rejestrem lub rejestrami jest powiązany;
- jakie środki wspierające wykorzystuje.