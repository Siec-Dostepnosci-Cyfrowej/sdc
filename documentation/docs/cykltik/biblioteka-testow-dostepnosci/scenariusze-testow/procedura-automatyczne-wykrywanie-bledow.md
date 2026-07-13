---
id: procedura-automatycznego-wykrywania-bledow-dostepnosci-cyfrowej-stron-internetowych
title: Procedura automatycznego wykrywania błędów dostępności cyfrowej stron internetowych
sidebar_label: Automatyczne wykrywanie błędów (strony internetowe)
sidebar_position: 17
description: Procedura diagnostyczna wspierająca identyfikację problemów dostępności cyfrowej przy użyciu narzędzi automatycznych.
keywords: [testowanie automatyczne, narzędzia dostępności, WAVE, Lighthouse, axe, SiteLint, diagnostyka dostępności]
tags: [procedura, dostępność cyfrowa, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator procedury

**procID-001**

---

## 2. Nazwa procedury

Automatyczne wykrywanie błędów dostępności cyfrowej stron internetowych

---

## 3. Profil stosowania

Zgodnie z dokumentem Profilowanie scenariuszy testów dostępności cyfrowej
| Profil | Stosowanie |
|----------|----------|
| Wstępny | Tak |
| Rozszerzony | Tak |
| Pogłębiony | Opcjonalnie |

---

## 4. Opis procedury

Procedura służy do identyfikowania błędów dostępności cyfrowej możliwych do wykrycia przy użyciu narzędzi automatycznych.

### Czym jest automatyczne wykrywanie błędów?

Automatyczne wykrywanie błędów polega na analizie kodu strony przez specjalistyczne narzędzie, które sprawdza występowanie wzorców wskazujących na możliwe niezgodności z wymaganiami dostępności.

Narzędzia takie mogą wykrywać między innymi:

- brakujące teksty alternatywne,
- błędy struktury nagłówków,
- błędy kontrastu,
- błędy formularzy,
- błędy ARIA,
- błędy nazw dostępnościowych,
- błędy semantyczne,
- brak określenia języka strony,
- zduplikowane identyfikatory.

Lista nie jest wyczerpująca; zakres wykrywanych błędów zależy od zastosowanego narzędzia.
### Ograniczenia narzędzi do automatycznego wykrywania błędów dostępności

Automatyczna analiza:

- nie potwierdza zgodności z WCAG,
- nie zastępuje testów ręcznych,
- nie zastępuje audytu eksperckiego,
- nie wykrywa wielu problemów związanych ze zrozumiałością, użytecznością i funkcjonalnością.

Wyniki analizy należy zawsze interpretować krytycznie.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Procedura może wspierać identyfikację problemów związanych z wieloma kryteriami sukcesu WCAG.

Nie stanowi jednak samodzielnego badania zgodności z żadnym konkretnym kryterium sukcesu.

### EN 301 549

Procedura może wspierać identyfikację niezgodności dotyczących różnych wymagań normy EN 301 549.

---

## 6. Zastosowanie

Procedurę stosuje się do:

- stron internetowych,
- podstron serwisów internetowych,
- aplikacji webowych,
- formularzy elektronicznych,
- komponentów interfejsu,
- dokumentów elektronicznych (jeżeli narzędzie wspiera ich analizę).

---

## 7. Oczekiwany rezultat

Procedurę uznaje się za prawidłowo przeprowadzoną, jeżeli:

- wykonano analizę przy użyciu co najmniej jednego narzędzia automatycznego,
- przeanalizowano wszystkie zgłoszone problemy,
- oddzielono błędy rzeczywiste od ostrzeżeń i fałszywych alarmów,
- określono dalsze działania diagnostyczne lub naprawcze.

---

## 8. Dlaczego to jest ważne

Automatyczne narzędzia pozwalają szybko wykryć wiele problemów dostępności.

Umożliwiają:

- identyfikację najczęstszych błędów,
- monitorowanie jakości serwisu,
- kontrolę zmian po wdrożeniach,
- wspieranie okresowej oceny stanu zgodności.

Stanowią użyteczne narzędzie wspomagające, ale nie zastępują oceny eksperckiej.

---

## 9. Kogo to dotyczy

Procedura jest szczególnie przydatna dla:

- koordynatorów dostępności,
- administratorów serwisów,
- redaktorów treści,
- osób wykonujących okresowe oceny stanu zgodności,
- zespołów utrzymania i rozwoju systemów.

---

## 10. Sposób przeprowadzenia

### Krok 1

Wybierz narzędzie automatyczne.

Przykładowe narzędzia:

- WAVE,
- axe DevTools,
- Accessibility Insights,
- Lighthouse,
- SiteLint,
- Siteimprove,
- ARC Toolkit,
- inne równoważne narzędzia.

### Krok 2

Uruchom analizę badanej strony lub aplikacji.

### Krok 3

Zapisz wyniki badania.

### Krok 4

Przeanalizuj wykryte problemy.

Dla każdego problemu określ:

- rodzaj błędu,
- miejsce występowania,
- potencjalny wpływ na użytkownika.

### Krok 5

Oddziel:

- błędy rzeczywiste,
- ostrzeżenia,
- błędy wymagające weryfikacji manualnej,
- fałszywe alarmy.

### Krok 6

Powiąż wykryte problemy z odpowiednimi kartami testów.

Przykładowo:

| Wykryty problem | Powiązana karta |
|-----------------|----------------|
| Brak tekstu alternatywnego | Tekst alternatywny |
| Brak etykiety formularza | Etykiety powiązane programowo |
| Błędy kontrastu | Wystarczający kontrast |
| Błędy nagłówków | Nagłówki |
| Błędy ARIA | Odczyt struktury przez czytnik ekranu |

### Krok 7

Określ konieczne działania:

- naprawa,
- dodatkowe testy manualne,
- pełny audyt ekspercki.

---

## 11. Kryteria oceny rezultatu

### Nie wykryto problemów automatycznie

Narzędzie nie wykazało problemów wymagających dalszej analizy.

### Wykryto problemy wymagające analizy

Narzędzie wskazało potencjalne problemy wymagające weryfikacji.

### Wykryto istotne problemy dostępności

Narzędzie wykazało błędy wymagające działań naprawczych.

### Nie wykonano procedury

Analiza nie została przeprowadzona.

---

## 12. Typowe nieprawidłowości

Najczęściej wykrywane problemy:

- brak tekstów alternatywnych,
- brak etykiet formularzy,
- błędy kontrastu,
- brak nagłówków,
- błędy ARIA,
- brak nazw dostępnościowych,
- zduplikowane identyfikatory,
- błędy struktury dokumentu.

---

## 13. Dobre praktyki

- Korzystanie z więcej niż jednego narzędzia.
- Powtarzanie analiz po każdej większej zmianie serwisu.
- Łączenie wyników automatycznych z testami manualnymi.
- Dokumentowanie wyników i działań naprawczych.
- Regularne monitorowanie kluczowych podstron.

---

## 14. Wynik procedury

- Nie wykryto błędów automatycznie
- Wykryto błędy wymagające weryfikacji
- Wykryto istotne błędy dostępności
- Nie wykonano analizy

---

## 15. Ustalenia

Miejsce na opis wyników analizy, wykrytych błędów oraz dalszych działań.

---

## 16. Przykładowy opis ustaleń do raportu

> Automatyczna analiza wykazała występowanie błędów związanych z tekstami alternatywnymi, etykietami formularzy oraz kontrastem. Wyniki zostały przekazane do dalszej weryfikacji i oceny przy użyciu odpowiednich testów szczegółowych.

lub

> Automatyczna analiza nie wykazała błędów możliwych do wykrycia przez zastosowane narzędzie.

---

## 17. Zalecane działania

- Przeanalizować wszystkie wykryte błędy.
- Powiązać błędy z odpowiednimi kartami testów.
- Usunąć potwierdzone niezgodności.
- Powtórzyć analizę po wdrożeniu poprawek.
- Wykonać testy manualne dla obszarów nieweryfikowalnych automatycznie.

---

## 18. Powiązane testy

| ID testu | Nazwa testu |
|----------|-------------|
| testID-019 | Nagłówki |
| testID-023 | Dostęp z klawiatury |
| testID-027 | Widoczność fokusu |
| testID-031 | Punkty orientacyjne |
| testID-032 | Wystarczający kontrast |
| testID-033 | Tekst alternatywny |
| testID-046 | Etykiety powiązane programowo |
| testID-047 | Odczyt struktury przez czytnik ekranu |
| testID-048 | Odczyt formularza przez czytnik ekranu |
| testID-069 | Komunikaty o stanie |

---