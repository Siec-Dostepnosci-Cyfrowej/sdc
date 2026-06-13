---
id: test-dostep-z-klawiatury
title: Karta testu — Dostęp z klawiatury
sidebar_label: Dostęp z klawiatury
sidebar_position: 23
description: Scenariusz testu sprawdzającego, czy wszystkie funkcje strony internetowej są dostępne przy użyciu samej klawiatury.
keywords: [klawiatura, keyboard, dostęp z klawiatury, nawigacja, dostępność cyfrowa, WCAG]
tags: [test dostępności, klawiatura, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-023**

---

## 2. Nazwa testu

**Dostęp z klawiatury**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy wszystkie funkcje dostępne dla użytkownika mogą zostać wykonane przy użyciu samej klawiatury.

Nie badamy w tym teście:

* widoczności fokusu,
* kolejności fokusu,
* pułapek klawiaturowych,
* zmian kontekstu po uzyskaniu fokusu.

Badamy wyłącznie, czy użytkownik może wykonać wszystkie dostępne działania bez użycia myszy, ekranu dotykowego lub innego urządzenia wskazującego.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **2.1.1 Klawiatura (A)**

### EN 301 549

* **9.2.1.1 Keyboard**
* **10.2.1.1 Keyboard**
* **11.2.1.1 Keyboard**

### Techniki WCAG

* G202
* SCR20
* SCR35
* ARIA Practices dla komponentów interaktywnych

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów interaktywnych, w szczególności:

* łączy,
* przycisków,
* formularzy,
* pól wyszukiwania,
* list rozwijanych,
* menu,
* zakładek,
* harmonijek,
* okien dialogowych,
* karuzel,
* odtwarzaczy multimedialnych,
* elementów osadzonych (iframe),
* niestandardowych komponentów JavaScript.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której wszystkie funkcje dostępne przy użyciu myszy lub ekranu dotykowego mogą zostać wykonane również przy użyciu samej klawiatury.

Jeżeli dana funkcja wymaga wykonania określonego ruchu wskaźnikiem, musi istnieć alternatywny sposób wykonania tej funkcji przy użyciu klawiatury.

---

## 8. Dlaczego to jest ważne

Wiele osób nie korzysta z myszy lub nie może korzystać z urządzeń wskazujących.

Dotyczy to między innymi osób:

* niewidomych korzystających z czytników ekranu,
* z ograniczoną sprawnością rąk,
* korzystających z alternatywnych klawiatur,
* korzystających ze sterowania głosowego wykorzystującego mechanizmy klawiaturowe.

Jeżeli funkcja jest dostępna wyłącznie za pomocą myszy, część użytkowników zostaje całkowicie pozbawiona możliwości wykonania zadania.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych,
* osób słabowidzących korzystających z klawiatury,
* osób z niepełnosprawnością ruchową kończyn górnych,
* osób korzystających z urządzeń alternatywnych,
* osób korzystających ze sterowania głosowego,
* osób czasowo niekorzystających z myszy lub ekranu dotykowego.

---

## 10. Sposób testowania

### Krok 1

Odłóż mysz i nie korzystaj z ekranu dotykowego.

### Krok 2

Przejdź do każdego elementu interaktywnego za pomocą klawiatury.

### Krok 3

Sprawdź możliwość wykonania wszystkich dostępnych działań.

### Krok 4

Sprawdź działanie:

* menu,
* wyszukiwarek,
* formularzy,
* filtrów,
* harmonijek,
* zakładek,
* okien dialogowych,
* odtwarzaczy multimedialnych.

### Krok 5

Dla każdego elementu sprawdź możliwość:

* aktywacji,
* rozwinięcia,
* zwinięcia,
* wyboru opcji,
* uruchomienia funkcji.

### Krok 6

Sprawdź, czy nie istnieją funkcje dostępne wyłącznie po kliknięciu myszą lub najechaniu kursorem.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie funkcje strony mogą zostać wykonane przy użyciu samej klawiatury.

### Wynik częściowo pozytywny

Pojedyncze funkcje pomocnicze nie są dostępne z klawiatury, ale nie uniemożliwia to realizacji głównych zadań użytkownika.

### Wynik negatywny

Co najmniej jedna istotna funkcja strony nie może zostać wykonana przy użyciu samej klawiatury.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* menu rozwijane dostępne wyłącznie po najechaniu myszą,
* przyciski reagujące wyłącznie na kliknięcie myszą,
* niestandardowe komponenty JavaScript bez obsługi klawiatury,
* karuzele wymagające przeciągania myszą,
* suwaki niedostępne dla klawiatury,
* odtwarzacze multimedialne bez obsługi klawiaturowej,
* funkcje aktywowane wyłącznie zdarzeniami `mouseover` lub `mouseenter`.

---

## 13. Dobre praktyki

* Korzystanie z natywnych elementów HTML.
* Stosowanie wzorców WAI-ARIA Authoring Practices.
* Testowanie nowych funkcji bez użycia myszy.
* Zapewnienie standardowej obsługi klawiszami Enter i Spacja.
* Dokumentowanie skrótów klawiaturowych dla złożonych komponentów.

---

## 14. Wynik testu

* Zgodne
* Częściowo zgodne
* Niezgodne
* Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Część funkcji serwisu nie jest dostępna przy użyciu samej klawiatury. Menu rozwijane może zostać otwarte wyłącznie po użyciu myszy, a użytkownik korzystający z klawiatury nie ma dostępu do wszystkich pozycji nawigacyjnych.

lub

> Komponent wyboru daty nie umożliwia wyboru terminu przy użyciu klawiatury. Do wykonania tej czynności wymagane jest użycie urządzenia wskazującego.

---

## 17. Rekomendacje naprawcze

* Zapewnić obsługę wszystkich funkcji za pomocą klawiatury.
* Dodać obsługę klawiszy Enter i Spacja dla elementów aktywnych.
* Dostosować niestandardowe komponenty JavaScript do obsługi klawiaturowej.
* Wyeliminować funkcje wymagające wyłącznie użycia myszy.
* Zweryfikować zgodność komponentów z wzorcami WAI-ARIA.

---

## 18. Powiązane testy

* Pułapka klawiaturowa
* Kolejność fokusu
* Widoczny fokus
* Zmiana po uzyskaniu fokusu
* Menu nawigacyjne
* Formularze
* Odtwarzacze multimedialne
* Komponenty niestandardowe
