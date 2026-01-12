---
id: cykl-zycia-strony-internetowej
title: Cykl życia strony internetowej (TIK). Ramowe wytyczne — wersja uzupełniona
sidebar_label: Cykl życia strony internetowej
sidebar_position: 4
keywords: [dostepnosc cyfrowa, cykl życia, monitoring dostępności]
tags: [dostepnosc cyfrowa, cykl życia]
data_zgloszenia: 6 października 2025 r.
ostatnia_aktualizacja: 12 stycznia 2026 r.
opracowanie: Dawid Górny
wersja_robocza: false
---

## 1. Cel dokumentu

Celem dokumentu jest przedstawienie minimalnych zasad, według których instytucja publiczna powinna planować, zamawiać, tworzyć, testować, utrzymywać i wycofywać stronę internetową w sposób zgodny z wymogami ustawowymi. Dokument ma charakter ramowy i obejmuje pełny cykl życia serwisu, uwzględniając:

- zapewnienie zgodności z ustawą o dostępności cyfrowej,
- projektowanie zorientowane na użytkownika,
- ciągłe monitorowanie jakości i dostępności,
- odpowiedzialność poszczególnych ról,
- procesy utrzymania i archiwizacji.

Dokument nie opisuje szczegółów technicznych, lecz wskazuje kierunki i minimalne wymagania organizacyjne.

## 2. Podstawy prawne i standardy techniczne

### 2.1. Podstawa prawna

- **Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.**
- **Ustawa z dnia 6 września 2001 r. o dostępie do informacji publicznej.**
- **Rozporządzenia wykonawcze** dotyczące deklaracji dostępności i monitoringu.

### 2.2. Standardy i normy

- **WCAG 2.1 AA** - poziom wymagany prawnie.
- **EN 301 549** - norma europejska interpretująca wymagania techniczne.
- **WCAG 2.2** - rekomendowany standard dobrych praktyk.
- **Zasady projektowania uniwersalnego** - fundament projektowania interfejsów i treści.

## 3. Role i odpowiedzialność

### 3.1. Opis ról

- **Koordynator dostępności**  
  Odpowiada za nadzór nad procesem, monitorowanie serwisu, koordynację obsługi żądań zapewnienia dostępności oraz współpracę z wykonawcami i redaktorami.

- **Administrator**  
  Zapewnia utrzymanie techniczne, aktualizacje systemu, poprawność Deklaracji Dostępności oraz wdrażanie narzędzi monitoringu.

- **Redaktorzy**  
  Tworzą i publikują treści zgodnie z zasadami dostępności. Odpowiadają za weryfikację materiałów przed publikacją.

- **Wykonawca zewnętrzny**  
  Dostarcza produkt zgodny z wymaganiami ustawy, wraz z wynikami testów potwierdzających dostępność (automatycznych i, jeśli to możliwe, ręcznych).

### 3.2. Matryca RACI

| Faza                   | Koordynator | Administrator | Redaktorzy | Wykonawca |
|------------------------|:-----------:|:-------------:|:----------:|:---------:|
| Planowanie             |      A      |       R       |     C      |     -     |
| Projektowanie i Wykonanie |    C      |       A       |     I      |     R     |
| Testowanie (odbiór)    |      A      |       R       |     C      |     R     |
| Utrzymanie (treści)    |      C      |       I       |     R      |     -     |
| Obsługa żądań dostępu  |      A      |       C       |     R      |     -     |

*Legenda: R - wykonuje, A - odpowiada, C - konsultuje, I - informowany.*

## 4. Szkolenia

- **Redaktorzy:** szkolenia z tworzenia dostępnych treści oraz obsługi narzędzi do weryfikacji przed publikacją.  
- **Administratorzy:** szkolenia z obsługi systemu zarządzania treścią (CMS), narzędzi monitoringu oraz podstaw dostępności.  
- **Koordynatorzy:** szkolenia z interpretacji przepisów, obsługi żądań zapewnienia dostępności oraz nadzoru nad procesami.  
- **Częstotliwość:** minimum raz na 12 miesięcy lub po istotnych zmianach w przepisach, systemach lub strukturze serwisu.

## 5. Fazy cyklu życia strony

### Faza 1 - Koncepcja i wymogi

Minimalne elementy:

- analiza potrzeb użytkowników, w tym osób ze szczególnymi potrzebami,
- określenie celów serwisu i kluczowych funkcji (np. informacyjnych, usługowych),
- zapisanie wymogów dostępności w dokumentacji przetargowej, zapytaniach ofertowych i umowach,
- określenie sposobu testowania, monitorowania i zasad odbioru serwisu,
- wskazanie ról odpowiedzialnych po stronie instytucji (koordynator, administrator, redaktorzy).

### Faza 2 - Projektowanie i Wykonanie

- projektowanie zgodne z zasadami projektowania uniwersalnego (czytelność, prostota, przewidywalność),
- tworzenie szablonów i komponentów zgodnych z wymaganiami WCAG na poziomie AA,
- konsultacje z koordynatorem dostępności na kluczowych etapach (makiety, prototypy, wersje testowe),
- zapewnienie możliwości testowania serwisu na etapie prototypów (np. na wybranych podstronach i funkcjach),
- uwzględnienie potrzeb różnych grup użytkowników, w tym korzystających z technologii asystujących.

### Faza 3 - Testowanie i Odbiór

- przeprowadzenie testów automatycznych (narzędzia sprawdzające typowe błędy techniczne),
- przeprowadzenie testów ręcznych (przegląd strony przez osobę przeszkoloną z dostępności),
- weryfikacja kluczowych funkcji serwisu, takich jak:
  - formularze (w tym formularze kontaktowe i wniosków),
  - nawigacja i menu,
  - dokumenty do pobrania,
  - multimedia (np. filmy, nagrania audio),
- sporządzenie pierwszej Deklaracji Dostępności na podstawie wyników testów,
- odbiór warunkowy lub końcowy serwisu w zależności od wyniku testów (np. z listą poprawek do wdrożenia).

### Faza 4 - Publikacja i bieżąca kontrola

- **Weryfikacja przed publikacją treści:**  
  Redaktor przed zatwierdzeniem treści sprawdza ją z wykorzystaniem dostępnych narzędzi wspomagających (np. funkcje sprawdzania dostępności w edytorach, wtyczki przeglądarkowe).

- Publikacja treści następuje po usunięciu zidentyfikowanych błędów (np. brak tekstów alternatywnych, błędna hierarchia nagłówków, niezrozumiałe linki).

- Administrator monitoruje działanie serwisu po aktualizacjach systemu, modułów lub motywów, reagując na regresje dostępności.

### Faza 5 - Utrzymanie i ciągły monitoring

- **Monitorowanie wielopoziomowe:**  
  Stosowanie metod automatycznych i ręcznych w celu wykrywania błędów powstałych w trakcie eksploatacji, zmian treści oraz aktualizacji technicznych.

- **Obsługa żądań zapewnienia dostępności:**  
  Reagowanie na wnioski użytkowników o zapewnienie dostępności treści lub funkcji oraz udzielanie odpowiedzi w ustawowych terminach.

- **Dostęp alternatywny:**  
  Zapewnienie wsparcia w innej formie (np. telefonicznej, papierowej lub poprzez asystę pracownika), gdy treść cyfrowa pozostaje czasowo niedostępna.

- **Aktualizacja Deklaracji Dostępności:**  
  Co roku, nie później niż do 31 marca, oraz po istotnych zmianach serwisu wpływających na dostępność.

- **Przeglądy treści:**  
  Okresowa weryfikacja treści pod kątem aktualności, przejrzystości i zgodności z zasadami dostępności (np. uproszczenie języka, usunięcie nieaktualnych dokumentów).

### Faza 6 - Starzenie się i wycofanie

- planowanie wycofania serwisu z odpowiednim wyprzedzeniem,
- poinformowanie użytkowników o planowanych zmianach i ewentualnym nowym serwisie,
- archiwizacja treści w sposób zapewniający ich dalszą dostępność (np. w archiwum BIP, repozytorium dokumentów),
- zastosowanie przekierowań (tam, gdzie to możliwe) oraz jasnych komunikatów o zakończeniu eksploatacji serwisu,
- wskazanie osoby lub komórki odpowiedzialnej za proces archiwizacji i nadzór nad dostępnością zasobów archiwalnych.

## 6. Monitorowanie dostępności i kontrola jakości

System kontroli opiera się na **trzech uzupełniających się metodach monitoringu**, co pozwala na reagowanie i planowanie działań naprawczych w zależności od kontekstu.

### 6.1. Weryfikacja przed publikacją

- wykorzystanie narzędzi, które weryfikują treść bezpośrednio podczas jej tworzenia lub przeglądania (np. wbudowane funkcje w edytorach treści, wtyczki przeglądarkowe),
- identyfikacja typowych błędów, takich jak:
  - brak tekstów alternatywnych dla grafik,
  - nieprawidłowa struktura nagłówków,
  - linki o niejednoznacznej treści ("kliknij tutaj"),
- umożliwia poprawę zawartości jeszcze przed jej opublikowaniem.

### 6.2. Monitoring po publikacji

Monitoring po publikacji polega na regularnym badaniu całego serwisu lub jego wybranych części w celu wykrycia błędów technicznych, regresji dostępności oraz problemów wynikających z aktualizacji treści lub oprogramowania (np. niedziałające linki, błędy w szablonach, problemy z formularzami).

Stosuje się dwa podstawowe warianty monitoringu:

#### Wariant A: Audyt całego serwisu

- *Zaleta:* kompletność danych - sprawdzane są wszystkie podstrony, w tym np. archiwalne.
- *Wada:* duże obciążenie zasobów przy rozbudowanych serwisach oraz ryzyko generowania szumu informacyjnego przy dużej liczbie nieużywanych lub nieaktualnych podstron.

#### Wariant B: Audyt na bazie ruchu użytkowników

- polega na badaniu tylko tych stron i funkcji, które są faktycznie odwiedzane przez użytkowników (np. na podstawie danych analitycznych),  
- *Zaleta:* koncentracja na miejscach, z których realnie korzystają użytkownicy; umożliwia priorytetyzację prac naprawczych i efektywne wykorzystanie zasobów,
- *Wada:* ryzyko przeoczenia błędów w sekcjach rzadko odwiedzanych, ale istotnych prawnie lub proceduralnie (np. formularze specjalistyczne, strony z regulacjami).

W praktyce najczęściej rekomendowane jest łączenie obu podejść, z naciskiem na kluczowe obszary serwisu oraz sekcje o znaczeniu prawnym lub operacyjnym. Takie podejście pozwala na zachowanie równowagi między kompletnością a efektywnością monitoringu.

### 6.3. Monitoring ręczny

- cykliczna weryfikacja elementów niemożliwych lub trudnych do sprawdzenia przez automatyczne testy (np. zrozumiałość treści, sposób prezentacji informacji czy kontrast),
- okresowe audyty służące:
  - bieżącej poprawie jakości serwisu,
  - aktualizacji Deklaracji Dostępności,
  - ocenie skuteczności działań naprawczych,
- monitoring ręczny może uwzględniać konsultacje z użytkownikami, w tym osobami ze szczególnymi potrzebami.

## 7. Definicje podstawowe

- **Dostępność cyfrowa:**  
  Możliwość korzystania z treści i funkcji serwisu przez wszystkich użytkowników, w tym osoby z niepełnosprawnościami oraz osoby starsze, niezależnie od sposobu korzystania z technologii.

- **Dostęp alternatywny:**  
  Zapewnienie informacji w innej formie (np. kontakt telefoniczny, dokument w formie papierowej, pomoc asystenta), gdy treść cyfrowa jest czasowo niedostępna lub trudna w odbiorze.

- **Monitoring automatyczny:**  
  Proces wykorzystywania narzędzi programowych do analizy strony pod kątem typowych błędów technicznych związanych z dostępnością (np. brak atrybutów, błędna struktura kodu).

- **Monitoring ręczny:**  
  Analiza wykonywana przez człowieka, obejmująca aspekty nienadające się do pełnej automatyzacji, takie jak zrozumiałość języka, logika nawigacji czy adekwatność opisów.

- **Deklaracja dostępności:**  
  Publicznie dostępny dokument opisujący stan dostępności serwisu, wskazujący na spełnione i niespełnione wymagania, a także zawierający informacje o sposobie zgłaszania problemów i żądań zapewnienia dostępności.

## 8. Planowane dokumenty pomocnicze

W celu ułatwienia wdrożenia niniejszych wytycznych rekomenduje się przygotowanie następujących dokumentów pomocniczych:

- wzór zapisu o dostępności do umowy z wykonawcą (uwzględniający wymagania prawne i sposób weryfikacji),
- instrukcja obsługi narzędzi do weryfikacji treści przed publikacją (dla redaktorów),
- procedura obsługi żądania zapewnienia dostępności i dostępu alternatywnego (w tym wzory odpowiedzi),
- lista kontrolna odbioru serwisu internetowego pod kątem dostępności,
- lista kontrolna dla redaktorów do codziennej pracy z treściami (np. lista punktów do sprawdzenia przed publikacją).
