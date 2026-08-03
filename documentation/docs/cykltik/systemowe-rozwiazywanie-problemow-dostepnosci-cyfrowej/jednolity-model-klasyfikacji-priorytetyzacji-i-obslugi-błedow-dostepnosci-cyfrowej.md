---
id: klasyfikacja-priorytetyzacja-i-obsluga-bledow
title: System klasyfikacji, priorytetyzacji i obsługi błędów dostępności
description: Jednolity model klasyfikacji, priorytetyzacji i obsługi błędów dostępności cyfrowej
sidebar_label: Klasyfikacja i obsługa błędów
sidebar_position: 4
keywords: [rozwiązanie systemowe, cykl życia TIK]
tags: [rozwiązanie systemowe, cykl życia TIK]
opracowanie: Cezary Tomczyk, Paulina Wysakowska
data_zgloszenia: 23 czerwca 2026
data_aktualizacji: 23 czerwca 2026
wersja_robocza: true
---

**Załącznik nr 4 do Zalecenia w sprawie systemowego rozwiązywania problemów dostępności cyfrowej**

## 1. Cel

Załącznik dostarcza jednolity model klasyfikacji, priorytetyzacji, rejestracji i obsługi błędów dostępności cyfrowej. Celem jest zapewnienie powtarzalności ocen, porównywalności danych oraz skutecznego zarządzania ryzykiem użytkowym i prawnym.

---

## 2. Poziomy krytyczności błędów

Stosowany jest trzystopniowy model krytyczności:

| Poziom | Definicja | Przykłady |
| :--- | :--- | :--- |
| **Krytyczny** | Uniemożliwia skorzystanie z usługi lub dostęp do treści. Brak skutecznej drogi alternatywnej. | Brak obsługi klawiaturą, pułapka klawiaturowa, brak etykiet w formularzu logowania. |
| **Istotny** | Znacznie utrudnia korzystanie z usługi, ale istnieje trudniejsza droga alternatywna. | Niepoprawna kolejność fokusu, mylące komunikaty. |
| **Niski** | Nie wpływa na możliwość skorzystania z usługi ani na zrozumienie treści. | Drobne nieprawidłowości w kodzie. |

Poziom krytyczności wynika z wpływu na użytkownika, a nie z kategorii treści.

---

## 3. Powiązanie krytyczności z ryzykiem i terminami naprawy

| Poziom | Ryzyko użytkowe | Ryzyko prawne | Zasady nadawania terminów |
| :--- | :--- | :--- | :--- |
| **Krytyczny** | Część użytkowników zostaje pozbawiona dostępu. | Najwyższe. | Najkrótszy możliwy termin; obowiązek zapewnienia alternatywnego dostępu. |
| **Istotny** | Korzystanie jest znacznie utrudnione. | Podwyższone. | Termin umiarkowany; ryzyko eskalacji przy opóźnieniach. |
| **Niski** | Brak wpływu na użytkownika. | Ograniczone. | Termin elastyczny. |

Podmiot określa konkretne wartości czasów naprawy, a dla wykonawców są one elementem SLA.

---

## 4. Obsługa i kierowanie błędów do naprawy

- Błędy dostępności są obsługiwane w ramach tego samego procesu co pozostałe błędy oprogramowania.
- Błędy naprawiane wewnętrznie lub przekazywane wykonawcy zgodnie z umową.
- Rejestr umożliwia przypisanie odpowiedzialności i śledzenie statusu.

---

## 5. Rejestr błędów dostępności

Rejestr obejmuje błędy pochodzące z:

- monitoringu automatycznego,
- testów manualnych,
- przeglądów i audytów,
- zgłoszeń użytkowników,
- zgłoszeń pracowników,
- deklaracji dostępności.

### Zawartość zgłoszenia

#### Identyfikacja i kontekst

- **unikalny identyfikator wpisu**,  
- **data wykrycia lub otrzymania zgłoszenia**,  
- **pochodzenie zgłoszenia** (monitoring automatyczny, test manualny, audyt, zgłoszenie użytkownika, zgłoszenie pracownika, deklaracja dostępności),  

#### Lokalizacja i opis

- **lokalizacja błędu** (adres URL oraz obszar interfejsu, którego dotyczy błąd, np. komponent, szablon),
- **opis błędu**,  
- **kroki reprodukcji** — opis czynności potrzebnych do powtórzenia błędu, zapisany w kolejności wykonywania (np. działania użytkownika, ustawienia),
- **środowisko, w którym błąd został zaobserwowany** (przeglądarka, system operacyjny, urządzenie, technologia asystująca),  
- **powiązane wymaganie lub zasada dostępności (jeśli dotyczy)** — wskazanie konkretnego kryterium sukcesu WCAG, wymagania EN 301 549 lub innej zasady/dobrej praktyki, której dotyczy błąd,
- **powiązanie z deklaracją dostępności (jeśli dotyczy)**,

#### Klasyfikacja i odpowiedzialność

- **poziom krytyczności**,  
- **zasięg** (pojedynczy widok, komponent wielokrotnego użytku, usługa kluczowa),  
- **osoba lub zespół odpowiedzialny za naprawę**,  

#### Terminy i status

- **termin naprawy** (wynikający z zasad lub SLA, jeśli dotyczy),  
- **termin faktyczny**,  
- **status obsługi błędu**,  

#### Weryfikacja i zamknięcie

- **sposób weryfikacji naprawy** (test manualny, test automatyczny, inna metoda),  
- **data udostępnienia naprawy użytkownikom**,  
- **data zamknięcia wpisu**.

Statusy obejmują m.in.: **nowe**, **w analizie**, **zakwalifikowane do naprawy**, **w naprawie**, **w weryfikacji**, **zamknięte**, **odrzucone**.

---

## 6. Raportowanie do osoby odpowiedzialnej za nadzór nad systemem zarządzania dostępnością

Raport okresowy obejmuje:

- liczbę otwartych błędów wg krytyczności,
- trend długu dostępności,
- dotrzymanie terminów naprawy,
- błędy powtarzalne i systemowe,
- ryzyka prawne i użytkowe,
- rekomendacje działań.

Błędy krytyczne po terminie podlegają natychmiastowej eskalacji.

---

## 7. Minimalne wymagania

Podmiot spełnia co najmniej:

- stosowanie jednolitego modelu krytyczności,
- prowadzenie jednego rejestru błędów,
- przypisywanie terminów wg krytyczności,
- powiązanie błędów z deklaracją dostępności,
- okresowe raportowanie i eskalację błędów krytycznych.

---

## 8. Uzasadnienie

W wielu podmiotach publicznych błędy dostępności są identyfikowane, lecz oceniane i obsługiwane niejednolicie: bez powtarzalnych kryteriów krytyczności, bez spójnych zasad nadawania terminów oraz bez jednego rejestru. Skutkuje to nieporównywalnością danych, utrwalaniem niezgodności o najwyższym ryzyku oraz brakiem informacji zarządczej.

Niniejszy załącznik wprowadza jednolity model klasyfikacji, priorytetyzacji i obsługi błędów obejmujący cały cykl życia usług i produktów cyfrowych. Powiązanie poziomu krytyczności z ryzykiem prawnym i użytkowym, jednoznaczne zasady nadawania terminów, jeden rejestr oraz raportowanie do kierownictwa pozwalają usuwać bariery w sposób uporządkowany i mierzalny, a dostępność czynią elementem bieżącego zarządzania jakością usług cyfrowych.
