---
id: test-regulacja-czasu
title: Scenariusz testu - Regulacja czasu
sidebar_label: Regulacja czasu
sidebar_position: 79
description: Scenariusz testu sprawdzającego, czy użytkownik może wyłączyć, wydłużyć lub dostosować ograniczenia czasowe narzucone przez stronę, aplikację lub usługę cyfrową.
keywords: [regulacja czasu, limit czasu, sesja, timeout, wygasanie sesji, WCAG 2.2.1, dostępność cyfrowa]
tags: [test dostępności, formularze, usługi cyfrowe, czas, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-079**

---

## 2. Nazwa testu

**Regulacja czasu**

---

## 3. Profil stosowania testu

**ACR-EXT**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może wyłączyć, wydłużyć lub dostosować ograniczenia czasowe występujące podczas korzystania ze strony internetowej, aplikacji lub usługi cyfrowej. Ocenie podlegają w szczególności limity czasu związane z formularzami, logowaniem, sesjami użytkownika, rezerwacją terminów oraz innymi procesami wymagającymi wykonania czynności w określonym czasie.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- **2.2.1 Regulacja czasu (A)**

### Powiązane wymagania

- formularze elektroniczne,
- usługi cyfrowe,
- procesy użytkownika,
- bezpieczeństwo i zarządzanie sesją.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy elektronicznych,
- systemów logowania,
- portali użytkownika,
- systemów rezerwacji,
- usług wymagających sesji użytkownika,
- aplikacji internetowych,
- aplikacji mobilnych.

Test nie dotyczy ograniczeń czasowych stanowiących niezbędny element procesu zachodzącego w czasie rzeczywistym (np. transmisje na żywo, aukcje internetowe, zdarzenia zależne od czasu rzeczywistego).

---

## 7. Oczekiwany wynik

Jeżeli usługa wykorzystuje ograniczenie czasowe, użytkownik może:

- wyłączyć limit czasu,
- wydłużyć czas wykonania zadania,
- otrzymać ostrzeżenie o zbliżającym się upływie czasu,
- przedłużyć aktywną sesję.

---

## 8. Dlaczego to jest ważne

Niektórzy użytkownicy potrzebują więcej czasu na:

- przeczytanie informacji,
- zrozumienie instrukcji,
- wypełnienie formularza,
- skorzystanie z technologii wspomagających,
- wykonanie działań wymagających precyzji.

Automatyczne zakończenie sesji lub utrata wprowadzonych danych może uniemożliwić skuteczne skorzystanie z usługi.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- użytkowników technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Identyfikacja ograniczeń czasowych

Sprawdź, czy podczas korzystania z usługi występują:

- limity czasu,
- wygasanie sesji,
- automatyczne wylogowanie,
- automatyczne anulowanie operacji,
- automatyczne usuwanie danych.

---

### Krok 2. Informowanie użytkownika

Jeżeli występuje ograniczenie czasowe:

sprawdź, czy użytkownik jest o nim informowany.

Informacja powinna być dostępna przed rozpoczęciem działania lub w trakcie jego wykonywania.

---

### Krok 3. Ostrzeżenie o upływie czasu

Sprawdź, czy użytkownik otrzymuje ostrzeżenie przed zakończeniem sesji lub anulowaniem operacji.

Ostrzeżenie powinno pojawić się odpowiednio wcześniej.

---

### Krok 4. Możliwość przedłużenia czasu

Sprawdź, czy użytkownik może przedłużyć czas wykonania zadania lub aktywną sesję.

---

### Krok 5. Zachowanie danych

Sprawdź, czy po wygaśnięciu sesji:

- dane nie są bezpowrotnie tracone,
- użytkownik może odzyskać wcześniej wprowadzone informacje.

---

### Krok 6. Formularze

Jeżeli badana usługa zawiera formularze:

sprawdź, czy użytkownik może spokojnie wypełnić formularz bez ryzyka utraty danych wskutek upływu czasu.

---

### Krok 7. Czytnik ekranu

Jeżeli to możliwe:

sprawdź, czy komunikaty o upływie czasu są przekazywane również użytkownikom czytników ekranu.

---

### Krok 8. Urządzenia mobilne

Sprawdź, czy mechanizmy ostrzegania i przedłużania czasu działają również na urządzeniach mobilnych.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może wyłączyć, dostosować lub przedłużyć ograniczenie czasowe albo ograniczenie nie występuje.

### Częściowo spełnione

Mechanizmy przedłużania czasu istnieją, ale są trudne do odnalezienia lub wykorzystania.

### Niespełnione

Ograniczenie czasowe uniemożliwia wykonanie zadania, a użytkownik nie może go wydłużyć lub wyłączyć.

---

## 12. Typowe niezgodności

- automatyczne wylogowanie bez ostrzeżenia,
- utrata danych po wygaśnięciu sesji,
- brak możliwości przedłużenia czasu,
- brak informacji o limicie czasu,
- zbyt krótki czas wykonania operacji,
- komunikaty niedostępne dla czytników ekranu.

---

## 13. Dobre praktyki

- informowanie o limitach czasu,
- ostrzeganie przed zakończeniem sesji,
- umożliwienie przedłużenia czasu jednym działaniem,
- automatyczne zapisywanie postępu,
- zachowanie danych po wygaśnięciu sesji,
- stosowanie odpowiednio długich limitów czasu.

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W badanej usłudze zastosowano ograniczenie czasowe skutkujące wylogowaniem użytkownika lub utratą danych. Użytkownik nie otrzymuje odpowiedniego ostrzeżenia ani możliwości przedłużenia czasu wykonania zadania. Może to utrudniać lub uniemożliwiać korzystanie z usługi osobom potrzebującym więcej czasu na wykonanie czynności.

---

## 17. Rekomendacje naprawcze

- wprowadzić ostrzeżenia o zbliżającym się upływie czasu,
- umożliwić przedłużenie aktywnej sesji,
- wydłużyć limity czasu,
- zapewnić automatyczne zapisywanie danych,
- poprawić dostępność komunikatów dla technologii wspomagających,
- umożliwić odzyskanie danych po wygaśnięciu sesji.

---

## 18. Powiązane testy

- testID-117 Złożenie wniosku
- testID-118 Rejestracja / Logowanie
- testID-119 Rezerwacja terminu
- testID-120 Formularz
- testID-121 Zgłoszenie problemu dostępności
- testID-069 Komunikaty o stanie
- testID-093 Dostępne uwierzytelnianie
- testID-094 Dostępne uwierzytelnianie (ulepszone)

---