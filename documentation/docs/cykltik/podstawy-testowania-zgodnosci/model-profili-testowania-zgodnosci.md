---
id: model-profili-testowania-zgodnosci
title: Model profili testowania zgodności TIK z EN 301 549  
sidebar_label: Model profili testowania 1
sidebar_position: 4
description: Szablon pojedynczej procedury testowej polskich podstaw metodyki testowania zgodności produktów cyfrowych z EN 301 549
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 26 lutego 2026 r.
wersja_robocza: true

---



**Załącznik do dezyderatu Sieci Dostępności Cyfrowej**

---

# 1. Wprowadzenie

Niniejszy dokument opisuje proponowany model profili testowania zgodności technologii informacyjno-komunikacyjnych (TIK) z EN 301 549.  

Celem modelu jest:

- uporządkowanie różnych typów przeglądów i audytów,
- rozróżnienie zakresu i głębokości testowania,
- zapewnienie proporcjonalności wymagań do celu badania,
- zapobieganie nadużywaniu pojęcia „audyt pełny”,
- stworzenie logicznej ścieżki dojrzewania produktu do pełnej zgodności.

Model obejmuje pięć profili testowania.

---

# 2. Profil 0 — Przegląd wstępny (Screening)

## Cel

Wstępna identyfikacja barier krytycznych przed publikacją produktu, wdrożeniem nowej wersji lub podjęciem decyzji o audycie.

## Charakterystyka

- Ograniczona próbka (5–8 widoków / ekranów).
- Testy skoncentrowane na krytycznych barierach operowalności.
- Obowiązkowa weryfikacja:
  - obsługi klawiaturą,
  - podstawowego odczytu czytnikiem ekranu.

## Status

- Nie może stanowić podstawy deklaracji dostępności.
- Nie może stanowić podstawy certyfikacji.

---

# 3. Profil 1 — Przegląd fundamentów (Fundamenty zgodności)

## Cel

Ocena strukturalnej „zdolności do zgodności” produktu cyfrowego poprzez weryfikację kluczowych kryteriów WCAG/EN determinujących możliwość korzystania z usługi.

## Zakres

- Ograniczony zestaw (ok. 12–20) kryteriów sukcesu o charakterze fundamentalnym.
- Obejmuje:
  - strukturę i relacje,
  - operowalność klawiaturą,
  - formularze,
  - komunikaty o stanie,
  - kolejność fokusu i odczytu.

## Próbka

- Strona startowa / ekran główny.
- Kluczowa funkcjonalność.
- Pełny scenariusz głównego zadania.
- Formularz i komunikat błędu.

## Testy AT

- Pełne przejście głównego scenariusza z czytnikiem ekranu.
- Pełna obsługa klawiaturą.

## Status

- Nie stanowi podstawy deklaracji dostępności.
- Stanowi podstawę decyzji o gotowości do audytu pełnego.

---

# 4. Profil 2 — Przegląd cząstkowy

## Cel

Ocena wybranego modułu, komponentu, procesu lub obszaru funkcjonalnego.

## Zakres

- Pełne pokrycie wymagań EN/WCAG w obrębie badanego zakresu.
- Obejmuje wszystkie stany (błąd, sukces, komunikaty).

## Testy AT

- Pełny scenariusz zadaniowy z czytnikiem ekranu.
- Pełna obsługa klawiaturą.
- Weryfikacja komunikatów o stanie.

## Agregowanie wyników

Kilka przeglądów cząstkowych przeprowadzonych w ciągu roku, obejmujących łącznie wszystkie obszary funkcjonalne systemu, może stanowić podstawę przeglądu rocznego.

---

# 5. Profil 3 — Przegląd roczny (deklaracyjny)

## Cel

Realizacja obowiązku przeglądu dostępności przed aktualizacją deklaracji dostępności.

## Charakterystyka

- Może być jednorazowym badaniem lub agregatem przeglądów cząstkowych.
- Obejmuje wszystkie obszary funkcjonalne systemu.
- Wymaga weryfikacji zmian wdrożonych od poprzedniego przeglądu.

## Testy AT (minimum)

- Pełna nawigacja klawiaturą.
- Test głównych scenariuszy z czytnikiem ekranu.
- Weryfikacja komunikatów o stanie.
- Weryfikacja kolejności fokusu i odczytu.

## Status

- Może stanowić podstawę deklaracji dostępności.
- Nie stanowi podstawy certyfikacji.

---

# 6. Profil 4 — Audyt pełny

## Cel

Kompleksowa ocena zgodności produktu cyfrowego z EN 301 549.

## Zakres

- Pełne pokrycie wszystkich wymagań normy.
- Pełna reprezentatywna próbka.
- Weryfikacja wszystkich procesów i ról użytkownika.
- Rozbudowana dokumentacja dowodowa.

## Testy AT

- Desktop: czytnik ekranu + klawiatura.
- Mobile: natywny czytnik ekranu.
- Testy powiększenia, orientacji, komunikatów o stanie.
- Testy scenariuszowe pełnych procesów.

## Status

- Może stanowić podstawę deklaracji dostępności.
- Może stanowić podstawę certyfikacji, z zastrzeżeniami opisanymi poniżej.

---

# 7. Certyfikacja – ograniczenia

Certyfikacja może dotyczyć wyłącznie:

- stabilnych produktów cyfrowych,
- oprogramowania w określonej wersji,
- urządzeń i systemów niepodlegających dynamicznym zmianom treści.

Certyfikacja nie może dotyczyć:

- dynamicznych stron internetowych,
- portali o ciągłej aktualizacji treści,
- systemów, których zawartość jest tworzona przez użytkowników.

W przypadku stron internetowych możliwe jest poświadczenie zgodności w określonym momencie (assessment), lecz nie trwała certyfikacja.

---

# 8. Zestawienie profili

| Profil | Cel | Podstawa deklaracji | Podstawa certyfikacji |
|--------|------|---------------------|-----------------------|
| 0. Wstępny | Identyfikacja barier | ❌ | ❌ |
| 1. Fundamenty | Ocena strukturalna | ❌ | ❌ |
| 2. Cząstkowy | Ocena modułu | ⚠ (po agregacji) | ❌ |
| 3. Roczny | Obowiązek ustawowy | ✅ | ❌ |
| 4. Pełny | Pełna zgodność | ✅ | ✅ (produkty stabilne) |

---

# 9. Podsumowanie

Model profili:

- rozróżnia screening od audytu,
- chroni pojęcie audytu pełnego,
- umożliwia proporcjonalne podejście do testowania,
- pozwala agregować przeglądy cząstkowe do przeglądu rocznego,
- jasno rozdziela zgodność deklaracyjną i certyfikacyjną.

Stanowi fundament dla spójnego systemu testowania zgodności TIK w Polsce.