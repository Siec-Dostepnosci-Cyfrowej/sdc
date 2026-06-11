---
id: raportowanie-wynikow-okresowej-oceny-stanu-zgodnosci
title: Raportowanie wyników okresowej oceny stanu zgodności
sidebar_label: Raportowanie wyników
sidebar_position: 9
description: Zasady dokumentowania, prezentowania i interpretowania wyników okresowej oceny stanu zgodności rozwiązań cyfrowych z wymaganiami dostępności.
keywords: [raportowanie, okresowa ocena stanu zgodności, raport, ACR, dostępność cyfrowa, WCAG]
tags: [monitoring, ocena zgodności, raportowanie, dostępność cyfrowa]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel raportowania

Celem raportowania wyników okresowej oceny stanu zgodności jest:

- dokumentowanie aktualnej wiedzy o stanie dostępności rozwiązania,
- identyfikowanie problemów wymagających działań naprawczych,
- wspieranie planowania i priorytetyzacji działań,
- umożliwienie porównywania wyników kolejnych ocen,
- wspieranie aktualizacji deklaracji dostępności,
- dostarczanie kierownictwu informacji o stanie dostępności rozwiązania.

Raport z okresowej oceny stanu zgodności dokumentuje wyniki przeprowadzonej oceny oraz aktualny stan wiedzy organizacji o zgodności ocenianego rozwiązania.

Zakres i wiarygodność informacji zawartych w raporcie zależą od zakresu przeprowadzonych badań oraz źródeł informacji wykorzystanych podczas oceny.

W przypadku profili [minimum raportu zgodności (ACR-MIN)](profil-minimum-raportu-zgodnosci-acr-min) i [rozszerzonego raportu zgodności (ACR-EXT)](profil-rozszerzony-raportu-zgodnosci-acr-ext) raport zazwyczaj nie stanowi podstawy do potwierdzenia pełnej zgodności rozwiązania z wymaganiami WCAG lub EN 301 549.

[Profil ekspercki raportu zgodności (ACR-AUDIT)](profil-ekspercki-raportu-zgodnosci-acr-audit) może natomiast obejmować wyniki audytów zgodności, przeglądów eksperckich, testów z użytkownikami oraz innych źródeł informacji o wysokiej wiarygodności, dzięki czemu może stanowić podstawę do formułowania bardziej kompletnych ocen zgodności.

---

## 2. Zasady ogólne

### 2.1. Raportowanie powinno odzwierciedlać rzeczywisty stan wiedzy

Raport powinien przedstawiać wyłącznie informacje wynikające z:

- przeprowadzonych testów,
- wcześniejszych ocen,
- monitoringu,
- zgłoszeń użytkowników,
- innych wiarygodnych źródeł informacji.

Nie należy domniemywać zgodności wymagań, które nie były oceniane.

---

### 2.2. Raport powinien rozróżniać:

- wyniki wykonanych testów,
- ocenę stanu zgodności z wymaganiami,
- rekomendowane działania.

---

### 2.3. Raport powinien umożliwiać porównanie kolejnych ocen

Sposób prezentacji wyników powinien umożliwiać śledzenie zmian zachodzących w czasie.

---

## 3. Struktura raportu

Raport z okresowej oceny stanu zgodności powinien zawierać co najmniej:

### 3.1. Informacje o badaniu

| Pole | Wartość |
|--------|--------|
| Nazwa rozwiązania | |
| Adres / identyfikator rozwiązania | |
| Data oceny | |
| Osoba przeprowadzająca ocenę | |
| Zakres oceny | |
| Liczba badanych stron / ekranów | |
| Wykorzystany scenariusz badania | |
| Data poprzedniej oceny | |

---

### 3.2. Wyniki testów

Zestawienie wykonanych testów wraz z wynikami.

Przykład:

| Test | Wynik |
|--------|--------|
| Nagłówki | Zgodne |
| Tekst alternatywny | Częściowo zgodne |
| Dostęp z klawiatury | Niezgodne |

---

### 3.3. Najważniejsze ustalenia

Opis najważniejszych:

- problemów,
- ryzyk,
- mocnych stron rozwiązania.

Rekomendowane jest wskazanie nie więcej niż 5–10 najważniejszych ustaleń.

---

### 3.4. Rekomendowane działania

Działania naprawcze powinny zostać uporządkowane według priorytetu.

Przykładowe poziomy priorytetu:

| Priorytet | Znaczenie |
|-----------|-----------|
| Wysoki | Problem może uniemożliwiać korzystanie z rozwiązania |
| Średni | Problem znacząco utrudnia korzystanie |
| Niski | Problem ma ograniczony wpływ na użytkowników |

---

## 4. Macierz zgodności WCAG

### 4.1. Cel macierzy zgodności

Macierz zgodności WCAG służy do przedstawienia aktualnej wiedzy o stanie spełniania wymagań dostępności.

Macierz powinna być aktualizowana na podstawie:

- wyników okresowych ocen,
- monitoringu,
- przeglądów eksperckich,
- audytów,
- innych wiarygodnych źródeł informacji.

Macierz nie musi być kompletna.

Dla wymagań, które nie były oceniane lub dla których brak wystarczających danych, stosuje się status:

**Nietestowany**.

---

### 4.2. Zalecana struktura macierzy

| Kryterium sukcesu | Stan | Wiarygodność | Źródło oceny | Opis |
|------------------|-------|-------|-------------|-------|
| 1.1.1 Treści nietekstowe | Częściowo spełnia | W2 | testID-033 | Brak alternatyw tekstowych dla części obrazów |
| 1.3.1 Informacje i relacje | Spełnia | W3 | testID-004, testID-010, monitoring 2026 | Nie stwierdzono problemów |
| 2.4.6 Nagłówki i etykiety | Częściowo spełnia | W4 | Przegląd ekspercki 2026 | Stwierdzono problemy w części formularzy |
| 3.3.1 Identyfikacja błędów | Nie spełnia | W5 | Audyt 2026 | Problemy potwierdzone audytem zgodności |
| 2.2.1 Regulacja czasu | Nietestowany | — | — | Brak danych pozwalających na ocenę |

---

### 4.3. Wartości kolumny „Stan”

#### Spełnia

Nie stwierdzono znanych problemów w zakresie objętym oceną.

---

#### Częściowo spełnia

Stwierdzono problemy lub ocena obejmowała jedynie część rozwiązania.

---

#### Nie spełnia

Stwierdzono niezgodności powodujące niespełnienie wymagania.

---

#### Nietestowany

Brak danych pozwalających na ocenę wymagania.

---


### 4.4. Wartości kolumny „Wiarygodność”

Kolumna „Wiarygodność” określa poziom pewności oceny przedstawionej w raporcie.

Ocena zgodności może opierać się na różnych źródłach informacji o różnym stopniu szczegółowości, aktualności i wiarygodności.

W modelu raportowania Sieci Dostępności Cyfrowej stosuje się następujące poziomy wiarygodności:

#### W1 — Wstępna

Ocena oparta głównie na:

- wynikach narzędzi automatycznych,
- prostych analizach technicznych.

Przykłady:

- Lighthouse,
- WAVE,
- Accessibility Insights.


#### W2 — Diagnostyczna

Ocena oparta na:

- okresowej ocenie stanu zgodności,
- testach wykonywanych zgodnie z kartami testów,
- ograniczonym zakresie sprawdzeń manualnych.

Przykłady:

- scenariusz minimum,
- scenariusz rozszerzony.

#### W3 — Potwierdzona

Ocena oparta na:

- wielu wzajemnie potwierdzających się źródłach informacji,
- wynikach kolejnych ocen,
- monitoringu dostępności,
- analizie działań naprawczych.

#### W4 — Ekspercka

Ocena oparta na:

- przeglądzie eksperckim,
- analizie wykonanej przez specjalistę dostępności,
- pogłębionej ocenie komponentów, procesów lub dokumentów.

#### W5 — Audytowa

Ocena oparta na:

- audycie zgodności,
- systematycznej analizie zgodności z WCAG lub EN 301 549.

#### W6 — Potwierdzona użytkownikami

Ocena oparta na:

- audycie,
- testach z udziałem użytkowników,
- badaniach użyteczności obejmujących osoby z niepełnosprawnościami.

Jest to najwyższy poziom wiarygodności oceny.


---

## 5. Źródła oceny

W kolumnie „Źródło oceny” należy wskazywać:

- identyfikatory testów,
- wyniki monitoringu,
- raporty eksperckie,
- audyty,
- inne źródła informacji.

Przykłady:

- testID-033,
- testID-004,
- procID-001,
- Raport monitoringu 2026,
- Audyt zgodności 2025.

Źródło oceny powinno umożliwiać uzasadnienie przypisanego poziomu wiarygodności.

W przypadku wykorzystywania wielu źródeł informacji zaleca się wskazywanie źródeł mających największy wpływ na przypisany poziom wiarygodności oceny.

---

## 6. Opisywanie problemów

Opis problemu powinien odpowiadać na trzy pytania:

### Co stwierdzono?

Opis problemu.

### Kogo dotyczy?

Grupy użytkowników, których problem dotyczy.

### Jaki jest skutek?

Wpływ problemu na możliwość korzystania z rozwiązania.

---

### Przykład

> Na części stron nie zastosowano prawidłowej struktury nagłówków. Problem dotyczy przede wszystkim osób korzystających z czytników ekranu. Utrudnia orientację w treści i szybkie przemieszczanie się pomiędzy sekcjami strony.

---

## 7. Klasyfikacja problemów

Rekomenduje się klasyfikowanie problemów według wpływu na użytkownika.

### Krytyczne

Problemy mogące uniemożliwiać wykonanie zadania.

Przykłady:

- brak obsługi klawiatury,
- pułapka klawiaturowa,
- niedostępny formularz.

---

### Istotne

Problemy znacząco utrudniające wykonanie zadania.

Przykłady:

- brak etykiet formularzy,
- brak komunikatów o błędach,
- brak nazw elementów interaktywnych.

---

### Umiarkowane

Problemy utrudniające korzystanie z rozwiązania.

Przykłady:

- błędy struktury nagłówków,
- niespójność identyfikacji,
- niespójność nawigacji.

---

### Drobne

Problemy o ograniczonym wpływie na użytkownika.

Przykłady:

- pojedyncze błędy alternatyw tekstowych,
- pojedyncze problemy redakcyjne.

---

## 8. Porównywanie wyników kolejnych ocen

Raport powinien umożliwiać obserwowanie zmian zachodzących w czasie.

Przykład:

| Obszar | Poprzedni stan | Aktualny stan | Poprzednia wiarygodność | Aktualna wiarygodność |
|---------|---------|---------|---------|---------|
| Struktura informacji | Częściowo spełnia | Spełnia | W2 | W4 |
| Formularze | Nie spełnia | Częściowo spełnia | W2 | W3 |
| Obsługa klawiaturą | Częściowo spełnia | Częściowo spełnia | W2 | W5 |
| Technologie wspomagające | Nie spełnia | Częściowo spełnia | W2 | W4 |

---

## 9. Podsumowanie dla kierownictwa

Raport powinien zawierać krótkie podsumowanie przeznaczone dla kierownictwa.

Rekomendowana objętość:

maksymalnie 1 strona.

Podsumowanie powinno zawierać:

- ogólną ocenę stanu zgodności,
- najważniejsze ryzyka,
- najważniejsze działania do podjęcia,
- informację o zmianach względem poprzedniej oceny.

---

## 10. Powiązanie z deklaracją dostępności

Wyniki okresowej oceny stanu zgodności mogą stanowić źródło informacji wykorzystywanych podczas:

- aktualizacji deklaracji dostępności,
- planowania działań naprawczych,
- przygotowywania planów rozwoju dostępności,
- monitorowania skuteczności wdrażanych zmian.

---

## 11. Zasada ciągłego doskonalenia

Celem raportowania nie jest jednorazowe potwierdzenie zgodności.

Celem jest systematyczne budowanie wiedzy o stanie dostępności rozwiązania, monitorowanie zmian oraz wspieranie działań prowadzących do zwiększania dostępności cyfrowej.

Każda kolejna ocena powinna wykorzystywać informacje zgromadzone podczas wcześniejszych ocen oraz aktualizować wiedzę organizacji o stanie zgodności rozwiązania.

Celem kolejnych ocen jest nie tylko zwiększanie zakresu wiedzy o stanie zgodności rozwiązania, ale również zwiększanie wiarygodności tej wiedzy poprzez wykorzystywanie bardziej zaawansowanych metod oceny, przeglądów eksperckich, audytów oraz testów z użytkownikami.

Rozwój raportu zgodności polega nie tylko na zwiększaniu zakresu wiedzy o stanie zgodności rozwiązania, ale również na zwiększaniu wiarygodności tej wiedzy poprzez wykorzystywanie bardziej zaawansowanych metod oceny, przeglądów eksperckich, audytów oraz testów z użytkownikami.