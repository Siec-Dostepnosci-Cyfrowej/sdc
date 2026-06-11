---
id: profil-minimum-raportu-zgodnosci-acr-min
title: Profil minimum raportu zgodności (ACR-MIN)
sidebar_label: ACR-MIN
sidebar_position: 10
description: Minimalny profil raportowania stanu zgodności z wymaganiami WCAG wykorzystywany podczas okresowej oceny stanu zgodności.
keywords: [ACR, ACR-MIN, raport zgodności, WCAG, okresowa ocena stanu zgodności]
tags: [raportowanie, zgodność, WCAG, monitoring]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Profil ACR-MIN określa minimalny zakres raportowania stanu zgodności z wymaganiami WCAG w ramach okresowej oceny stanu zgodności.

Profil ten pozwala:

- uporządkować wyniki okresowej oceny,
- dokumentować aktualny stan wiedzy o zgodności rozwiązania,
- wspierać aktualizację deklaracji dostępności,
- umożliwiać porównywanie kolejnych ocen,
- stopniowo budować pełniejszy obraz zgodności rozwiązania.

Profil ACR-MIN umożliwia dokumentowanie nie tylko aktualnego stanu wiedzy o zgodności rozwiązania, ale również poziomu wiarygodności tej wiedzy wynikającego z zakresu przeprowadzonych ocen i wykorzystanych źródeł informacji.

Profil ACR-MIN służy dokumentowaniu aktualnego stanu wiedzy o zgodności rozwiązania na podstawie informacji dostępnych w ramach okresowej oceny stanu zgodności. Zakres i wiarygodność tej wiedzy mogą być rozwijane w kolejnych profilach raportu zgodności.

---

## 2. Zasada działania

ACR-MIN opiera się na wynikach:

- scenariusza minimum okresowej oceny stanu zgodności,
- monitoringu,
- wcześniejszych ocen,
- innych dostępnych źródeł informacji.

Dla każdego kryterium sukcesu WCAG raport powinien określać:

- stan zgodności wynikający z aktualnie dostępnych informacji,
- poziom wiarygodności tej oceny,
- źródła informacji stanowiące podstawę oceny.


---

## 3. Wartości oceny

### Spełnia

Brak znanych problemów w zakresie objętym oceną.

### Częściowo spełnia

Stwierdzono problemy lub ocena objęła jedynie część rozwiązania.

### Nie spełnia

Stwierdzono niezgodności powodujące niespełnienie wymagania.

### Nietestowany

Brak danych pozwalających na ocenę wymagania.

---


### 3.1. Poziomy wiarygodności

ACR-MIN wykorzystuje uproszczoną skalę wiarygodności określającą poziom pewności oceny.

#### W1 — Wstępna

Ocena oparta głównie na:

- narzędziach automatycznych,
- prostych analizach technicznych.

#### W2 — Diagnostyczna

Ocena oparta na:

- testach wykonywanych zgodnie ze scenariuszem minimum,
- przeglądzie manualnym wybranych stron, ekranów lub procesów.

#### W3 — Potwierdzona

Ocena oparta na:

- wielu wzajemnie potwierdzających się źródłach informacji,
- wynikach kolejnych ocen,
- monitoringu,
- analizie działań naprawczych.

W profilu ACR-MIN nie stosuje się poziomów W4 i W5 zarezerwowanych dla profili eksperckich.

---


## 4. Zakres ACR-MIN

ACR-MIN obejmuje wszystkie kryteria sukcesu WCAG 2.1 poziomów A i AA.

Nie oznacza to jednak obowiązku ocenienia wszystkich kryteriów podczas jednej okresowej oceny.

Dla kryteriów, dla których nie zgromadzono wystarczających danych, stosuje się status:

**Nietestowany**

---

## 5. Zalecana struktura raportu

| Kryterium sukcesu | Stan | Wiarygodność | Źródło oceny | Opis |
|------------------|-------|-------|-------------|-------|
| 1.1.1 Treści nietekstowe | Częściowo spełnia | W2 | testID-033 | Brak alternatyw tekstowych dla części obrazów |
| 1.3.1 Informacje i relacje | Spełnia | W3 | testID-004, testID-010, monitoring 2026 | Nie stwierdzono problemów |
| 2.4.1 Pomijanie bloków | Spełnia | W2 | testID-034 | Nie stwierdzono problemów |
| 3.3.1 Identyfikacja błędów | Nie spełnia | W3 | testID-026, zgłoszenia użytkowników | Formularze nie identyfikują błędów |
| 1.2.2 Napisy rozszerzone | Nietestowany | — | — | Nie prowadzono oceny materiałów wideo |

---

## 6. Powiązanie scenariusza minimum z WCAG

Poniższa tabela przedstawia minimalne mapowanie testów scenariusza minimum na kryteria sukcesu WCAG.

### Percepcja i struktura informacji

| Test | Główne kryteria sukcesu |
|--------|--------|
| Tytuł strony | 2.4.2 |
| Język strony | 3.1.1 |
| Język części strony | 3.1.2 |
| Nagłówki | 1.3.1, 2.4.6 |
| Punkty orientacyjne | 1.3.1, 2.4.1 |
| Tekst alternatywny | 1.1.1 |
| Wystarczający kontrast | 1.4.3 |

---

### Obsługa klawiaturą

| Test | Główne kryteria sukcesu |
|--------|--------|
| Dostęp z klawiatury | 2.1.1 |
| Pułapka klawiaturowa | 2.1.2 |
| Kolejność fokusu | 2.4.3 |
| Widoczność fokusu | 2.4.7 |
| Łącza pomijania | 2.4.1 |

---

### Formularze i komunikaty

| Test | Główne kryteria sukcesu |
|--------|--------|
| Widoczne etykiety lub instrukcje | 3.3.2 |
| Oznaczenie pól wymaganych | 3.3.2 |
| Format danych | 3.3.2 |
| Identyfikacja błędów | 3.3.1 |
| Sugestie korekty błędów | 3.3.3 |
| Komunikaty o stanie | 4.1.3 |

---

### Technologie wspomagające

| Test | Główne kryteria sukcesu |
|--------|--------|
| Odczyt struktury przez czytnik ekranu | 1.3.1, 4.1.2 |
| Odczyt formularza przez czytnik ekranu | 1.3.1, 3.3.2, 4.1.2 |
| Dostępna nazwa elementu interaktywnego | 4.1.2 |
| Dostępna nazwa w widocznej etykiecie | 2.5.3 |

---

## 7. Interpretacja wyników

### Spełnia nie oznacza pełnej zgodności

Status „Spełnia” oznacza jedynie, że:

- w przeprowadzonym zakresie oceny nie stwierdzono problemów,
- nie są znane informacje wskazujące na niespełnienie wymagania.

---

### Nietestowany nie oznacza niezgodności

Status „Nietestowany” oznacza wyłącznie brak danych pozwalających na ocenę wymagania.

---

### Częściowo spełnia jest stanem naturalnym

W okresowych ocenach stanu zgodności status „Częściowo spełnia” będzie występował często.

Może on oznaczać:

- stwierdzone problemy,
- ograniczony zakres badania,
- niepełne dane.

### Wiarygodność oceny

Poziom wiarygodności określa stopień pewności przypisanej oceny.

Dwa kryteria sukcesu mogą posiadać ten sam status zgodności, ale różnić się poziomem wiarygodności oceny.

Przykładowo:

- status „Spełnia” przy wiarygodności W1 oznacza wstępną ocenę opartą głównie na analizie automatycznej,
- status „Spełnia” przy wiarygodności W3 oznacza ocenę potwierdzoną wieloma źródłami informacji.

Podczas interpretowania wyników należy uwzględniać zarówno stan zgodności, jak i poziom wiarygodności oceny.

Profil ACR-MIN służy dokumentowaniu aktualnego stanu wiedzy o zgodności rozwiązania na podstawie informacji dostępnych w ramach okresowej oceny stanu zgodności. Zakres i wiarygodność tej wiedzy mogą być rozwijane w kolejnych profilach raportu zgodności.

---



## 8. Rozwój ACR-MIN

Każda kolejna ocena powinna aktualizować ACR-MIN.

Wraz z rozszerzaniem zakresu badań:

- maleje liczba pozycji oznaczonych jako „Nietestowany”,
- zwiększa się kompletność i dokładność wiedzy o stanie zgodności,
- organizacja buduje coraz pełniejszy obraz stanu zgodności rozwiązania.

Docelowo ACR-MIN może zostać rozszerzony do:

- ACR-EXT (profil rozszerzony),
- ACR-AUDIT (profil audytu zgodności).

Wraz z kolejnymi ocenami powinien rosnąć nie tylko zakres wiedzy o stanie zgodności rozwiązania, ale również wiarygodność tej wiedzy.

Rozwój raportu polega zatem zarówno na zmniejszaniu liczby pozycji oznaczonych jako „Nietestowany”, jak i na zwiększaniu poziomu wiarygodności ocen przypisanych do poszczególnych kryteriów sukcesu.

---

## 9. Powiązane dokumenty

- Procedura okresowej oceny stanu zgodności — scenariusz badania
- Lista kontrolna okresowej oceny stanu zgodności
- Raportowanie wyników okresowej oceny stanu zgodności
- Karty testów Sieci Dostępności Cyfrowej
- Deklaracja dostępności

---