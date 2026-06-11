---
id: profil-rozszerzony-raportu-zgodnosci-acr-ext
title: Profil rozszerzony raportu zgodności (ACR-EXT)
sidebar_label: ACR-EXT
sidebar_position: 11
description: Rozszerzony profil raportowania stanu zgodności z wymaganiami WCAG wykorzystywany podczas pogłębionych ocen dostępności rozwiązań cyfrowych.
keywords: [ACR, ACR-EXT, raport zgodności, WCAG, rozszerzona ocena dostępności]
tags: [raportowanie, zgodność, WCAG, monitoring, ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Profil ACR-EXT określa sposób raportowania stanu zgodności rozwiązania cyfrowego na podstawie rozszerzonej oceny dostępności.

Profil ten przeznaczony jest dla organizacji, które:

- prowadzą regularne okresowe oceny stanu zgodności,
- chcą uzyskać szerszą wiedzę o stanie dostępności rozwiązania,
- realizują program doskonalenia dostępności,
- przygotowują się do audytu zgodności,
- planują większe działania naprawcze.

ACR-EXT nie jest raportem z audytu zgodności.

Stanowi jednak poziom pośredni pomiędzy ACR-MIN a raportem z audytu zgodności.

Profil ACR-EXT umożliwia dokumentowanie nie tylko stanu zgodności rozwiązania, ale również poziomu wiarygodności zgromadzonych informacji. Dzięki temu raport może odzwierciedlać zarówno zakres wiedzy organizacji o zgodności rozwiązania, jak i stopień pewności tej wiedzy.


---

## 2. Relacja do ACR-MIN

ACR-EXT rozwija i uzupełnia profil ACR-MIN.

W szczególności:

- wykorzystuje wyniki scenariusza minimum,
- rozszerza zakres ocenianych obszarów,
- obejmuje dodatkowe wymagania WCAG,
- obejmuje dodatkowe komponenty i procesy,
- zwiększa liczbę ocenianych stron i ekranów.

ACR-EXT powinien być budowany poprzez aktualizację i rozszerzanie wcześniej utworzonego ACR-MIN.

ACR-EXT rozwija również informacje o wiarygodności ocen poprzez wykorzystywanie większej liczby źródeł informacji, rozszerzonych scenariuszy badania oraz analizę większej liczby stron, procesów, komponentów i dokumentów.

---

## 3. Zakres ACR-EXT

Profil ACR-EXT obejmuje:

### 3.1. Scenariusz minimum

Wszystkie testy objęte profilem ACR-MIN.

---

### 3.2. Komponenty interfejsu

| Test |
|--------|
| Menu nawigacyjne |
| Wyszukiwanie w witrynie |
| Modalne okno dialogowe |
| Zakładki |
| Akordeon |
| Karuzela |
| Galeria obrazów |
| Powiadomienia |

---

### 3.3. Formularze i procesy

| Test |
|--------|
| Opisowe etykiety |
| Etykiety powiązane programowo |
| Zapobieganie błędom |
| Cel łącza (w kontekście) |

---

### 3.4. Dokumenty elektroniczne

| Test |
|--------|
| Dokument PDF |
| Dokument DOCX / ODT |

---

### 3.5. Multimedia

| Test |
|--------|
| Transkrypcja dla nagrań audio |
| Transkrypcja dla wideo bez dźwięku |
| Napisy rozszerzone |
| Audiodeskrypcja |
| Alternatywa pełnotekstowa dla multimediów |
| Odtwarzacz multimedialny |
| Ruch i błyski |

---

### 3.6. Prezentacja informacji

| Test |
|--------|
| Użycie koloru |
| Obrazy tekstu |
| Zmiana rozmiaru tekstu |
| Dopasowanie do szerokości ekranu |
| Tabela |
| Wykres |
| Wizualizacja danych |

---

### 3.7. Spójność i przewidywalność

| Test |
|--------|
| Spójność identyfikacji |
| Spójność nawigacji |
| Cel łącza (samodzielnie) |
| Wygląd fokusu |

---

## 4. Struktura raportu

### 4.1. Informacje o badaniu

| Pole | Wartość |
|--------|--------|
| Nazwa rozwiązania | |
| Data oceny | |
| Zakres oceny | |
| Liczba ocenionych stron | |
| Liczba ocenionych procesów | |
| Liczba ocenionych dokumentów | |
| Liczba ocenionych materiałów multimedialnych | |

---

### 4.2. Wyniki testów

Raport powinien zawierać zestawienie wszystkich przeprowadzonych testów wraz z wynikami.

---

### 4.3. Najważniejsze ustalenia

Powinny zostać wskazane:

- problemy krytyczne,
- problemy istotne,
- problemy umiarkowane,
- mocne strony rozwiązania.

---

### 4.4. Plan działań

Powinien obejmować:

- działania krótkoterminowe,
- działania średnioterminowe,
- działania długoterminowe.

---

## 5. Rozszerzona macierz zgodności WCAG

### 5.1. Cel

Macierz zgodności ACR-EXT przedstawia aktualny stan wiedzy o spełnianiu wymagań WCAG.

Powinna obejmować wszystkie kryteria sukcesu poziomów A i AA.

---

### 5.2. Wiarygodność oceny

ACR-EXT wykorzystuje rozszerzoną skalę wiarygodności pozwalającą określić poziom pewności przypisanej oceny.

#### W1 — Wstępna

Ocena oparta głównie na:

- wynikach automatycznych analiz,
- podstawowych sprawdzeniach technicznych.

#### W2 — Diagnostyczna

Ocena oparta na:

- testach wykonywanych zgodnie ze scenariuszem minimum,
- ograniczonym zakresie oceny manualnej.

#### W3 — Potwierdzona

Ocena oparta na:

- wielu wzajemnie potwierdzających się źródłach informacji,
- rozszerzonych testach manualnych,
- wynikach kolejnych ocen,
- monitoringu dostępności,
- analizie działań naprawczych.

#### W4 — Ekspercka

Ocena oparta na:

- przeglądzie eksperckim,
- analizie wykonanej przez specjalistę dostępności,
- pogłębionej ocenie komponentów, procesów lub dokumentów.

W profilu ACR-EXT nie stosuje się poziomu W5 zarezerwowanego dla raportów wykorzystujących wyniki testów z użytkownikami.

---


### 5.3. Zalecana struktura

| Kryterium sukcesu | Stan | Wiarygodność | Źródło oceny | Opis |
|------------------|-------|-------|-------------|-------|
| 1.1.1 Treści nietekstowe | Spełnia | W3 | testID-033, testID-062 | Nie stwierdzono problemów |
| 1.4.1 Użycie koloru | Częściowo spełnia | W4 | testID-075, przegląd ekspercki | W części wykresów kolor jest jedynym wyróżnikiem danych |
| 2.4.5 Wiele sposobów | Spełnia | W3 | testID-068 | Zapewniono alternatywne sposoby odnajdywania informacji |
| 3.2.3 Spójna nawigacja | Częściowo spełnia | W3 | testID-074 | Stwierdzono niespójności w menu lokalnym |
| 3.3.4 Zapobieganie błędom | Nie spełnia | W4 | testID-030, przegląd ekspercki | Brak mechanizmów potwierdzania operacji |

---

## 6. Zasady stosowania statusów

### Spełnia

Brak znanych problemów.

### Częściowo spełnia

Stwierdzono problemy lub istnieją ograniczenia zakresu oceny.

### Nie spełnia

Stwierdzono niezgodności powodujące niespełnienie wymagania.

### Nietestowany

Brak danych pozwalających na ocenę.

W ACR-EXT liczba pozycji oznaczonych jako „Nietestowany” powinna być istotnie mniejsza niż w ACR-MIN.

---

### Interpretacja poziomu wiarygodności

Poziom wiarygodności określa stopień pewności przypisanej oceny.

Ocena oznaczona jako „Spełnia” przy wiarygodności W2 ma charakter bardziej wstępny niż ocena oznaczona jako „Spełnia” przy wiarygodności W4.

Podczas interpretowania wyników należy uwzględniać zarówno stan zgodności, jak i poziom wiarygodności oceny.

Niski poziom wiarygodności nie oznacza, że ocena jest błędna. Oznacza jedynie, że organizacja dysponuje ograniczoną liczbą informacji potwierdzających tę ocenę.

---

## 7. Porównanie z poprzednimi ocenami

Raport powinien wskazywać zmiany względem poprzedniego ACR.

Przykład:

| Kryterium sukcesu | Poprzedni stan | Aktualny stan | Poprzednia wiarygodność | Aktualna wiarygodność |
|------------------|------------------|------------------|------------------|------------------|
| 1.1.1 | Częściowo spełnia | Spełnia | W2 | W3 |
| 1.4.1 | Nietestowany | Częściowo spełnia | — | W4 |
| 3.3.1 | Nie spełnia | Częściowo spełnia | W2 | W3 |

---

## 8. Podsumowanie dla kierownictwa

Raport powinien zawierać podsumowanie obejmujące:

- najważniejsze ryzyka,
- obszary największej poprawy,
- obszary wymagające działań,
- rekomendowane priorytety.

Objętość podsumowania nie powinna przekraczać dwóch stron.

---

## 9. Przejście do ACR-AUDIT

ACR-EXT może stanowić podstawę przygotowania:

- audytu zgodności,
- oceny przed odbiorem rozwiązania,
- pogłębionej analizy dostępności.

W miarę zwiększania zakresu badań liczba pozycji oznaczonych jako „Nietestowany” powinna maleć, a ocena zgodności stawać się coraz bardziej kompletna.

Wraz z przechodzeniem od ACR-MIN do ACR-EXT powinien wzrastać zarówno zakres ocenionych wymagań, jak i poziom wiarygodności zgromadzonych informacji.

Rozwój raportu zgodności polega nie tylko na zmniejszaniu liczby pozycji oznaczonych jako „Nietestowany”, ale również na zwiększaniu poziomu wiarygodności ocen przypisanych do poszczególnych kryteriów sukcesu.

---

## 10. Powiązane dokumenty

- Profil minimum raportu zgodności (ACR-MIN)
- Macierz powiązań testów i kryteriów sukcesu WCAG
- Procedura okresowej oceny stanu zgodności — scenariusz badania
- Raportowanie wyników okresowej oceny stanu zgodności
- Biblioteka testów Sieci Dostępności Cyfrowej

---