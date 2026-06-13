---
id: test-dostepne-uwierzytelnianie-ulepszone
title: Dostępne uwierzytelnianie (ulepszone)
sidebar_label: Dostępne uwierzytelnianie (ulepszone)
sidebar_position: 94
description: Scenariusz testu sprawdzającego, czy proces uwierzytelniania nie wymaga od użytkownika wykonywania testów poznawczych oraz nie wymaga odtwarzania informacji z pamięci, chyba że użytkownik korzysta z menedżera haseł, funkcji autouzupełniania lub innego mechanizmu wspomagającego.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-094**

## 2. Nazwa testu

**Dostępne uwierzytelnianie (ulepszone)**

## 3. Profil stosowania testu

**ACR-AUDIT**

## 4. Opis testu

Test sprawdza, czy proces uwierzytelniania nie wymaga od użytkownika odtwarzania informacji z pamięci ani wykonywania testów poznawczych, nawet wtedy, gdy dostępne są mechanizmy wspomagające, takie jak menedżery haseł lub funkcje autouzupełniania.

### Co oznacza „uwierzytelnianie”?

Uwierzytelnianie to proces potwierdzania tożsamości użytkownika przed uzyskaniem dostępu do systemu, usługi lub określonych funkcji.

Przykładami uwierzytelniania są:

- logowanie przy użyciu nazwy użytkownika i hasła,
- logowanie przez profil zaufany,
- logowanie biometryczne,
- logowanie za pomocą passkey,
- logowanie przy użyciu klucza bezpieczeństwa,
- logowanie jednokrotne (SSO).

### Co oznacza „test poznawczy”?

Test poznawczy to zadanie wymagające od użytkownika:

- zapamiętania informacji,
- odtworzenia informacji z pamięci,
- rozpoznania wzorca,
- rozwiązania zadania wymagającego percepcji lub rozumowania,
- odpowiedzi na pytanie wymagające przypomnienia sobie informacji.

### Czym różni się wersja „ulepszona” od wersji „minimum”?

Kryterium 3.3.8 (poziom AA) dopuszcza sytuację, w której użytkownik musi pamiętać określoną informację, jeżeli może korzystać z mechanizmów wspomagających, takich jak menedżer haseł.

Kryterium 3.3.9 (poziom AAA) idzie krok dalej i wymaga, aby proces uwierzytelniania nie opierał się na konieczności odtwarzania informacji z pamięci przez użytkownika.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 3.3.9 Dostępne uwierzytelnianie (ulepszone) (Poziom AAA)

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.3.9 Accessible Authentication (Enhanced)
- 11.3.3.9 Accessible Authentication (Enhanced)

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy logowania,
- usług publicznych wymagających uwierzytelnienia,
- aplikacji internetowych,
- aplikacji mobilnych,
- systemów administracyjnych,
- systemów transakcyjnych,
- procesów odzyskiwania dostępu do konta,
- procesów potwierdzania tożsamości.

## 7. Oczekiwany wynik

Proces uwierzytelniania:

- nie wymaga od użytkownika odtwarzania informacji z pamięci,
- nie wymaga wykonywania testów poznawczych,
- wykorzystuje metody uwierzytelniania niewymagające pamiętania informacji.

Użytkownik może skutecznie uwierzytelnić się bez konieczności przypominania sobie haseł, odpowiedzi bezpieczeństwa lub innych informacji przechowywanych w pamięci.

## 8. Dlaczego to jest ważne

Wymóg pamiętania informacji stanowi istotną barierę dla wielu użytkowników.

Problem dotyczy szczególnie:

- osób z niepełnosprawnościami poznawczymi,
- osób z zaburzeniami pamięci,
- osób z dysleksją,
- osób starszych,
- użytkowników korzystających z wielu różnych systemów,
- osób korzystających z technologii wspomagających.

Nawet gdy dostępne są mechanizmy wspomagające, proces oparty na pamięci użytkownika może powodować trudności, błędy i rezygnację z korzystania z usługi.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w uczeniu się,
- osób z dysleksją,
- osób z zaburzeniami pamięci,
- osób starszych,
- użytkowników technologii wspomagających,
- wszystkich użytkowników korzystających z wielu usług wymagających logowania.

## 10. Sposób testowania

### Krok 1. Identyfikacja procesu uwierzytelniania

Przejdź przez cały proces:

- logowania,
- odzyskiwania dostępu,
- potwierdzania tożsamości.

### Krok 2. Identyfikacja wymagań opartych na pamięci

Sprawdź, czy użytkownik musi:

- przypomnieć sobie hasło,
- przypomnieć sobie odpowiedź na pytanie bezpieczeństwa,
- odtworzyć identyfikator,
- rozpoznać wzorzec lub sekwencję,
- wykonać inne zadanie wymagające pamięci.

### Krok 3. Ocena metod uwierzytelniania

Sprawdź, czy dostępne są metody niewymagające pamięci, takie jak:

- passkeys,
- logowanie biometryczne,
- logowanie przy użyciu urządzenia zaufanego,
- klucze bezpieczeństwa,
- jednorazowe linki logujące,
- uwierzytelnianie federacyjne.

### Krok 4. Ocena procesu odzyskiwania dostępu

Sprawdź, czy odzyskiwanie dostępu również nie wymaga odtwarzania informacji z pamięci.

### Krok 5. Ocena podstawowej ścieżki logowania

Sprawdź, czy podstawowy sposób logowania spełnia wymaganie, a nie jedynie dodatkowe lub opcjonalne metody.

## 11. Kryteria oceny wyniku

### Spełnione

Proces uwierzytelniania nie wymaga od użytkownika odtwarzania informacji z pamięci ani wykonywania testów poznawczych.

### Częściowo spełnione

Dostępne są metody spełniające wymaganie, jednak część procesów lub podstawowa ścieżka logowania nadal wymaga odtwarzania informacji z pamięci.

### Niespełnione

Podstawowy proces uwierzytelniania wymaga od użytkownika odtwarzania informacji z pamięci lub wykonywania testów poznawczych.

### Nie dotyczy

Rozwiązanie nie wymaga uwierzytelniania użytkownika.

## 12. Typowe niezgodności

- logowanie wyłącznie przy użyciu hasła pamiętanego przez użytkownika,
- pytania bezpieczeństwa wymagające przypomnienia sobie informacji,
- odzyskiwanie konta wymagające podania zapamiętanych odpowiedzi,
- obowiązek pamiętania wielu identyfikatorów lub kodów,
- brak metod uwierzytelniania niewymagających pamięci użytkownika,
- procesy odzyskiwania dostępu oparte na odtwarzaniu informacji z pamięci.

## 13. Dobre praktyki

- logowanie biometryczne,
- passkeys,
- uwierzytelnianie FIDO2/WebAuthn,
- klucze bezpieczeństwa,
- jednorazowe linki logujące,
- logowanie przy użyciu urządzeń zaufanych,
- uwierzytelnianie federacyjne (SSO),
- ograniczanie liczby informacji wymagających zapamiętania.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę metod uwierzytelniania oraz wskazanie elementów wymagających od użytkownika odtwarzania informacji z pamięci.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Podstawowy proces uwierzytelniania wymaga od użytkownika odtwarzania informacji z pamięci, takich jak hasła, odpowiedzi na pytania bezpieczeństwa lub inne dane identyfikacyjne. Nie zapewniono równoważnej metody uwierzytelniania niewymagającej takich działań. Może to stanowić istotną barierę dla osób z niepełnosprawnościami poznawczymi, zaburzeniami pamięci oraz innych użytkowników mających trudności z zapamiętywaniem informacji.

## 17. Rekomendacje naprawcze

- wdrożyć metody uwierzytelniania niewymagające pamięci użytkownika,
- umożliwić stosowanie passkeys,
- wdrożyć uwierzytelnianie FIDO2/WebAuthn,
- stosować logowanie biometryczne tam, gdzie jest to możliwe,
- ograniczyć wykorzystanie pytań bezpieczeństwa,
- przeprojektować proces odzyskiwania dostępu tak, aby nie wymagał odtwarzania informacji z pamięci.

## 18. Powiązane testy

- testID-093 Dostępne uwierzytelnianie
- testID-118 Rejestracja / Logowanie
- testID-120 Formularz
- testID-043 Sugestie korekty błędów
- testID-044 Identyfikacja błędów
- testID-069 Komunikaty o stanie
- testID-070 Dostępna nazwa elementu interaktywnego
