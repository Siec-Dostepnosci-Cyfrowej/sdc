---
id: test-uzycie-koloru
title: Karta testu — Użycie koloru
sidebar_label: Użycie koloru
sidebar_position: 75
description: Scenariusz testu sprawdzającego, czy kolor nie jest jedynym sposobem przekazywania informacji, wskazywania działania, identyfikowania elementu lub sygnalizowania stanu.
keywords: [użycie koloru, kolor, color alone, formularze, wykresy, dostępność cyfrowa]
tags: [test dostępności, kolor, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-075**

---

## 2. Nazwa testu

**Użycie koloru**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy kolor nie jest jedynym sposobem przekazywania informacji, wskazywania działania, identyfikowania elementu lub sygnalizowania stanu.

### Co oznacza „użycie koloru”?

Kolor jest często wykorzystywany do wyróżniania informacji lub wskazywania znaczenia elementów.

Przykłady:

- pola formularza oznaczone na czerwono,
- błędy oznaczone wyłącznie kolorem czerwonym,
- linki oznaczone wyłącznie kolorem,
- wykresy rozróżniające dane wyłącznie kolorami,
- komunikaty sukcesu oznaczone wyłącznie kolorem zielonym,
- mapy wykorzystujące wyłącznie kolory do oznaczania kategorii danych.

### Kiedy występuje problem?

Problem występuje wtedy, gdy użytkownik musi rozróżnić kolory, aby zrozumieć informację.

Jeżeli po usunięciu informacji o kolorze znaczenie przestaje być czytelne, wymaganie nie jest spełnione.

### Przykład poprawny

Pole wymagane oznaczone:

- czerwonym kolorem,
- gwiazdką (*),
- informacją tekstową „Pole wymagane”.

### Przykład niepoprawny

Pole wymagane oznaczone wyłącznie czerwonym kolorem.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **1.4.1 Użycie koloru (A)**

### EN 301 549

* **9.1.4.1 Use of Color**

### Techniki WCAG

* G14
* G111
* G182

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy,
- komunikatów o błędach,
- komunikatów o stanie,
- wykresów,
- wizualizacji danych,
- map,
- tabel,
- list wyników,
- linków,
- komponentów interaktywnych.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się rozwiązanie, dla którego:

- informacje nie są przekazywane wyłącznie przy użyciu koloru,
- elementy oznaczone kolorem posiadają dodatkowe oznaczenie wizualne lub tekstowe,
- użytkownik może zrozumieć znaczenie informacji bez rozpoznawania koloru,
- linki są rozpoznawalne nie tylko dzięki kolorowi.

---

## 8. Dlaczego to jest ważne

Nie wszyscy użytkownicy postrzegają kolory w taki sam sposób.

Problemy mogą dotyczyć:

- osób z zaburzeniami rozpoznawania barw,
- osób słabowidzących,
- osób korzystających z własnych ustawień kolorystycznych,
- użytkowników ekranów o niskiej jakości obrazu.

Jeżeli informacja jest przekazywana wyłącznie kolorem, część użytkowników może jej nie zauważyć lub nie zrozumieć.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób z zaburzeniami rozpoznawania barw,
- osób słabowidzących,
- osób korzystających z powiększenia ekranu,
- osób korzystających z własnych ustawień kontrastu,
- użytkowników urządzeń mobilnych,
- wszystkich użytkowników korzystających z treści wizualnych.

---

## 10. Sposób testowania

### Krok 1

Przejrzyj stronę i zidentyfikuj miejsca wykorzystujące kolor do przekazywania informacji.

### Krok 2

Zwróć szczególną uwagę na:

- formularze,
- komunikaty błędów,
- komunikaty sukcesu,
- wykresy,
- mapy,
- tabele,
- linki.

### Krok 3

Sprawdź, czy informacja pozostaje zrozumiała po pominięciu informacji o kolorze.

### Krok 4

Dla formularzy sprawdź, czy:

- pola wymagane są oznaczone nie tylko kolorem,
- błędy są opisane tekstowo.

### Krok 5

Dla wykresów i wizualizacji sprawdź, czy:

- serie danych można rozróżnić bez rozpoznawania kolorów,
- zastosowano etykiety, wzory lub opisy.

### Krok 6

Dla linków sprawdź, czy są rozpoznawalne nie tylko dzięki kolorowi.

### Krok 7

Oceń, czy użytkownik może zrozumieć informacje bez konieczności rozróżniania kolorów.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Kolor nie jest jedynym sposobem przekazywania informacji.

### Wynik częściowo pozytywny

Występują pojedyncze przypadki wykorzystania koloru jako jedynego nośnika informacji.

### Wynik negatywny

Istotne informacje, stany lub działania są przekazywane wyłącznie przy użyciu koloru.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- pola wymagane oznaczone wyłącznie czerwonym kolorem,
- błędy formularza oznaczone wyłącznie kolorem,
- sukces oznaczony wyłącznie kolorem zielonym,
- linki rozpoznawalne wyłącznie dzięki kolorowi,
- wykresy wykorzystujące wyłącznie kolor do rozróżniania danych,
- mapy wykorzystujące wyłącznie kolor do prezentowania kategorii informacji,
- tabele wykorzystujące wyłącznie kolor do oznaczania statusów.

---

## 13. Dobre praktyki

- Łączenie koloru z tekstem lub ikoną.
- Stosowanie wzorów, symboli i etykiet na wykresach.
- Oznaczanie pól wymaganych również tekstem lub symbolem.
- Opisywanie błędów w sposób tekstowy.
- Podkreślanie linków w treści.
- Testowanie interfejsu z wykorzystaniem symulacji zaburzeń rozpoznawania barw.

---

## 14. Wynik testu

- Zgodne
- Częściowo zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Część informacji w serwisie jest przekazywana wyłącznie przy użyciu koloru. Użytkownicy, którzy nie rozróżniają kolorów lub korzystają z alternatywnych sposobów prezentacji treści, mogą mieć trudności z prawidłową interpretacją tych informacji.

lub

> Pola wymagane oraz komunikaty błędów są oznaczane wyłącznie kolorem. Użytkownicy mogą nie być w stanie rozpoznać ich znaczenia bez dodatkowych oznaczeń.

---

## 17. Rekomendacje naprawcze

- Uzupełnić oznaczenia kolorystyczne o tekst, symbole lub ikony.
- Oznaczyć pola wymagane również przy użyciu symboli i opisów.
- Zapewnić tekstowe komunikaty błędów i sukcesu.
- Uzupełnić wykresy i wizualizacje o etykiety lub wzory.
- Zapewnić możliwość rozpoznawania linków bez konieczności rozróżniania kolorów.
- Zweryfikować interfejs pod kątem zależności od koloru.

---

## 18. Powiązane testy

- Wystarczający kontrast
- Obrazy tekstu
- Widoczne etykiety lub instrukcje
- Oznaczenie pól wymaganych
- Identyfikacja błędów
- Sugestie korekty błędów
- Komunikaty o stanie
- Wykres
- Wizualizacja danych
- Tabela

---