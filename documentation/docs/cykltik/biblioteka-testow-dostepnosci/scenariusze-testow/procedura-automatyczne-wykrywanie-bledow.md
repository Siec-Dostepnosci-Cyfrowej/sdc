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

- wykrywa tylko część błędów dostępności,
- może zwracać wyniki fałszywie pozytywne i fałszywie negatywne, wynikające z ograniczeń samego narzędzia oraz jakości kodu weryfikowanego systemu,
- nie potwierdza zgodności z wymaganiami dostępności,
- nie zastępuje testów manualnych,
- nie zastępuje audytu eksperckiego,
- nie wykrywa wielu barier związanych ze zrozumiałością, użytecznością i funkcjonalnością.

Wyniki analizy należy zawsze interpretować krytycznie.

---

## 5. Mapowanie do standardów

Narzędzia automatyczne wykrywają błędy dotyczące wielu kryteriów sukcesu WCAG oraz odpowiadających im wymagań normy EN 301 549 dotyczących stron internetowych, w szczególności związane z:
- brakującymi tekstami alternatywnymi,
- błędami struktury nagłówków,
- błędami kontrastu,
- brakiem lub pustym tytułem strony,
- brakiem określenia języka strony,
- błędami formularzy,
- błędami ARIA i nazw dostępnościowych,
- błędami semantycznymi.

Automatyczne wykrywanie błędów dostępności nie stanowi samodzielnego badania zgodności z żadnym wymaganiem dostępności.

---

## 6. Zastosowanie do treści

Automatyczną analizę stosuje się do:

- stron i podstron serwisów internetowych,
- aplikacji webowych,
- formularzy elektronicznych,
- komponentów interfejsu.

---

## 7. Oczekiwany wynik

Procedurę uznaje się za prawidłowo przeprowadzoną, jeżeli:

- wykonano analizę przy użyciu co najmniej jednego narzędzia automatycznego,
- zweryfikowano wszystkie zgłoszone przez narzędzie błędy,
- oddzielono błędy rzeczywiste od ostrzeżeń i fałszywych alarmów,
- określono dalsze działania diagnostyczne lub naprawcze.

---

## 8. Dlaczego to jest ważne

Narzędzia automatyczne pozwalają szybko wykryć wiele błędów dostępności.

Umożliwiają:

- identyfikację najczęstszych błędów,
- monitorowanie jakości serwisu,
- kontrolę zmian po aktualizacjach,
- wspieranie okresowej oceny stanu zgodności.

Stanowią użyteczne wsparcie, ale nie zastępują oceny eksperckiej.

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

Określ zakres analizy.

Uwzględnij w szczególności:

- stronę główną,
- typowe szablony podstron,
- strony z formularzami,
- kluczowe procesy realizowane w serwisie.
### Krok 2

Uruchom analizę badanej strony lub aplikacji webowej.

### Krok 3

Zapisz wyniki analizy.

Odnotuj co najmniej:

- nazwę i wersję narzędzia,
- datę wykonania analizy,
- adresy badanych stron.

### Krok 4

Przeanalizuj wykryte błędy.

Dla każdego błędu określ:

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

Powiąż wykryte błędy z odpowiednimi kartami testów.

Przykładowo:

| Wykryty błąd | ID testu | Powiązana karta |
|-----------------|----------|----------------|
| Brak tekstu alternatywnego | testID-033 | Tekst alternatywny |
| Brak etykiety formularza | testID-046 | Etykiety powiązane programowo |
| Błędy kontrastu | testID-032 | Wystarczający kontrast |
| Błędy nagłówków | testID-019 | Nagłówki |
| Błędy ARIA | testID-047 | Odczyt struktury przez czytnik ekranu |

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