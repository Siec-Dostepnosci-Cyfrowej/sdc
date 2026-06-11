---
id: profil-ekspercki-raportu-zgodnosci-acr-audit
title: Profil ekspercki raportu zgodności (ACR-AUDIT)
sidebar_label: ACR-AUDIT
sidebar_position: 12
description: Profil raportowania stanu zgodności oparty na wynikach audytów, przeglądów eksperckich oraz innych źródeł informacji o wysokiej wiarygodności.
keywords: [ACR, ACR-AUDIT, audyt zgodności, WCAG, raport zgodności]
tags: [audyt, zgodność, WCAG, raportowanie]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Profil ACR-AUDIT określa sposób dokumentowania stanu zgodności rozwiązania cyfrowego na podstawie:

- audytów zgodności,
- przeglądów eksperckich,
- testów z użytkownikami,
- wyników monitoringu,
- okresowych ocen stanu zgodności,
- innych wiarygodnych źródeł informacji.

Profil ACR-AUDIT stanowi najwyższy poziom raportowania zgodności przewidziany w modelu Sieci Dostępności Cyfrowej.

---

## 2. Miejsce ACR-AUDIT w systemie ocen

Model raportowania zgodności obejmuje trzy poziomy:

| Profil | Podstawowe źródło wiedzy |
|----------|----------|
| ACR-MIN | Okresowa ocena stanu zgodności (minimum) |
| ACR-EXT | Rozszerzona ocena dostępności |
| ACR-AUDIT | Audyty, przeglądy eksperckie i inne źródła o wysokiej wiarygodności |

Każdy kolejny poziom wykorzystuje i aktualizuje informacje zgromadzone na poziomach wcześniejszych.

---

## 3. Charakter ACR-AUDIT

ACR-AUDIT nie jest raportem z pojedynczego audytu.

Jest rejestrem aktualnej wiedzy organizacji o stanie zgodności rozwiązania.

Wiedza ta może pochodzić z różnych źródeł o różnej wiarygodności.

Raport powinien odzwierciedlać zarówno:

- stan zgodności,
- jak i poziom pewności tej oceny.

---

## 4. Struktura raportu

### 4.1. Informacje o rozwiązaniu

| Pole | Wartość |
|--------|--------|
| Nazwa rozwiązania | |
| Adres / identyfikator | |
| Właściciel rozwiązania | |
| Data sporządzenia raportu | |
| Autor raportu | |
| Wersja raportu | |

---

### 4.2. Wykorzystane źródła informacji

| Źródło | Data | Zakres |
|----------|----------|----------|
| Audyt zgodności | | |
| Przegląd ekspercki | | |
| Ocena okresowa | | |
| Monitoring | | |
| Testy z użytkownikami | | |
| Inne źródła | | |

---

## 5. Macierz zgodności WCAG

### 5.1. Cel kolumny „Wiarygodność”

Kolumna „Wiarygodność” określa poziom pewności przypisanej oceny.

Dwa kryteria sukcesu mogą posiadać ten sam status zgodności, ale różnić się poziomem wiarygodności oceny wynikającym z zakresu badań oraz jakości źródeł informacji.

### 5.2. Zalecana struktura

| Kryterium sukcesu | Stan | Wiarygodność | Źródło oceny | Opis |
|------------------|-------|-------|-------|-------|
| 1.1.1 Treści nietekstowe | Częściowo spełnia | W4 | Audyt 2026 | Brak alternatyw tekstowych dla części wykresów |
| 2.4.6 Nagłówki i etykiety | Spełnia | W4 | Audyt 2026 | Nie stwierdzono problemów |
| 3.3.1 Identyfikacja błędów | Nie spełnia | W5 | Audyt + testy z użytkownikami | Problemy uniemożliwiające poprawne wypełnienie formularza |
| 1.2.5 Audiodeskrypcja | Nietestowany | — | — | Brak danych |

---

## 6. Wartości kolumny „Stan”

### Spełnia

Brak znanych problemów.

### Częściowo spełnia

Stwierdzono problemy lub istnieją ograniczenia zakresu oceny.

### Nie spełnia

Stwierdzono niezgodności powodujące niespełnienie wymagania.

### Nietestowany

Brak danych pozwalających na ocenę wymagania.

---

## 7. Poziomy wiarygodności oceny

Kolumna „Wiarygodność” określa poziom pewności oceny.

### W1 — Wstępna

Ocena oparta głównie na:

- narzędziach automatycznych,
- prostych analizach technicznych.

Przykład:

- wyniki Lighthouse,
- wyniki WAVE,
- wyniki Accessibility Insights.

---

### W2 — Diagnostyczna

Ocena oparta na:

- okresowej ocenie stanu zgodności,
- testach według kart testów.

Przykład:

- scenariusz minimum,
- scenariusz rozszerzony.

---

### W3 — Potwierdzona

Ocena oparta na:

- przeglądzie eksperckim,
- analizie specjalisty dostępności.

---

### W4 — Audytowa

Ocena oparta na:

- audycie zgodności,
- systematycznej analizie zgodności z WCAG.

---

### W5 — Potwierdzona użytkownikami

Ocena oparta na:

- audycie,
- testach z udziałem użytkowników,
- badaniach użyteczności obejmujących osoby z niepełnosprawnościami.

Jest to najwyższy poziom wiarygodności oceny.

---

## 8. Zasady aktualizacji wiarygodności


W przypadku sprzecznych ustaleń należy uwzględniać:

- poziom wiarygodności źródła,
- aktualność informacji,
- zakres przeprowadzonej oceny.

Ocena o wyższej wiarygodności powinna mieć pierwszeństwo, chyba że dostępne są nowsze informacje wskazujące na zmianę stanu zgodności.

Przykład:

| Źródło | Ocena |
|----------|----------|
| Test automatyczny (W1) | Spełnia |
| Audyt zgodności (W4) | Nie spełnia |

W raporcie należy przyjąć ocenę:

> Nie spełnia (W4)


---

## 9. Analiza zmian

Raport powinien umożliwiać śledzenie zmian zachodzących w czasie.

Przykład:

| Kryterium sukcesu | Poprzedni stan | Aktualny stan | Poprzednia wiarygodność | Aktualna wiarygodność |
|------------------|------------------|------------------|------------------|------------------|
| 1.1.1 | Częściowo spełnia | Spełnia | W2 | W3 |
| 1.4.1 | Nietestowany | Częściowo spełnia | — | W4 |
| 3.3.1 | Nie spełnia | Częściowo spełnia | W2 | W3 |


---

## 10. Ocena ogólna

Raport może zawierać syntetyczne podsumowanie.

Przykład:

| Kategoria | Liczba |
|----------|----------|
| Spełnia | 28 |
| Częściowo spełnia | 12 |
| Nie spełnia | 7 |
| Nietestowany | 8 |


Raport może dodatkowo prezentować rozkład poziomów wiarygodności ocen.

Przykład:

| Wiarygodność | Liczba kryteriów |
|----------|----------|
| W1 | 5 |
| W2 | 12 |
| W3 | 18 |
| W4 | 10 |
| W5 | 6 |
| W6 | 2 |
---

## 11. Ograniczenia raportu

ACR-AUDIT przedstawia aktualny stan wiedzy o zgodności.

Nie gwarantuje:

- wykrycia wszystkich problemów,
- pełnej zgodności rozwiązania,
- niezmienności stanu zgodności w przyszłości.

Stan zgodności może ulegać zmianie wraz z rozwojem i utrzymaniem rozwiązania.

Podobnie zmianie może ulegać poziom wiarygodności ocen wraz z pozyskiwaniem nowych informacji, wykonywaniem kolejnych ocen, przeglądów eksperckich, audytów i testów z użytkownikami.

---

## 12. Powiązane dokumenty

- Profil minimum raportu zgodności (ACR-MIN)
- Profil rozszerzony raportu zgodności (ACR-EXT)
- Macierz powiązań testów i kryteriów sukcesu WCAG
- Raportowanie wyników okresowej oceny stanu zgodności
- Biblioteka testów Sieci Dostępności Cyfrowej

---