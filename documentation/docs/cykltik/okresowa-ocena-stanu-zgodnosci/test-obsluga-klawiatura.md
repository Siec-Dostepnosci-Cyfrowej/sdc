---
id: test-obsluga-klawiatura
title: Karta testu — Obsługa klawiaturą
sidebar_label: Obsługa klawiaturą
sidebar_position: 24
description: Scenariusz testu sprawdzającego, czy wszystkie funkcje i elementy interaktywne strony są dostępne przy użyciu samej klawiatury.
keywords: [klawiatura, fokus, tabulacja, nawigacja klawiaturą, dostępność cyfrowa, WCAG]
tags: [test dostępności, klawiatura, nawigacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-024**

---

## 2. Nazwa testu

**Obsługa klawiaturą**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy wszystkie funkcje i elementy interaktywne strony można obsługiwać wyłącznie za pomocą klawiatury, bez konieczności korzystania z myszy, ekranu dotykowego lub innych urządzeń wskazujących.

W ramach testu należy zweryfikować:

* możliwość dotarcia do wszystkich elementów interaktywnych,
* możliwość opuszczenia każdego elementu po uzyskaniu fokusu,
* logiczną kolejność przemieszczania fokusu,
* widoczność fokusu,
* możliwość wykonania wszystkich funkcji dostępnych dla użytkownika,
* brak pułapek klawiaturowych.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **2.1.1 Klawiatura (A)**
* **2.1.2 Bez pułapki na klawiaturę (A)**
* **2.4.3 Kolejność fokusu (A)**
* **2.4.7 Widoczny fokus (AA)**
* **3.2.1 Po otrzymaniu fokusu (A)**

### EN 301 549

* **9.2.1.1 Keyboard**

* **9.2.1.2 No Keyboard Trap**

* **9.2.4.3 Focus Order**

* **9.2.4.7 Focus Visible**

* **9.3.2.1 On Focus**

* **11.2.1.1 Keyboard**

* **11.2.1.2 No Keyboard Trap**

* **11.2.4.3 Focus Order**

* **11.2.4.7 Focus Visible**

* **11.3.2.1 On Focus**

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów interaktywnych, w szczególności:

* łączy,
* przycisków,
* formularzy,
* pól wyboru,
* list rozwijanych,
* menu,
* kart i zakładek,
* harmonijek (accordion),
* drzew nawigacyjnych,
* okien dialogowych,
* wyskakujących okien (popup),
* lightboxów,
* elementów iframe,
* odtwarzaczy audio i wideo,
* mechanizmów pobierania plików,
* komponentów tworzonych przy użyciu JavaScript.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której:

* wszystkie funkcje dostępne za pomocą myszy są dostępne również za pomocą klawiatury,
* użytkownik może przejść do każdego elementu interaktywnego przy użyciu klawiatury,
* użytkownik może opuścić każdy element po uzyskaniu fokusu,
* fokus przemieszcza się w logicznej kolejności,
* fokus jest widoczny,
* uzyskanie fokusu nie powoduje nieoczekiwanej zmiany kontekstu.

---

## 8. Dlaczego to jest ważne

Wiele osób nie może korzystać z myszy lub ekranu dotykowego i polega wyłącznie na klawiaturze albo technologiach wspomagających wykorzystujących mechanizmy klawiaturowe.

Brak pełnej obsługi klawiaturą może uniemożliwić:

* nawigację po stronie,
* korzystanie z formularzy,
* obsługę usług elektronicznych,
* odtwarzanie multimediów,
* wykonywanie czynności administracyjnych lub zakupowych.

Widoczny fokus dodatkowo pozwala użytkownikowi określić, który element jest aktualnie aktywny i gotowy do wykonania działania.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób słabowidzących korzystających z powiększenia ekranu,
* osób z ograniczoną sprawnością rąk i dłoni,
* osób z drżeniem rąk,
* osób korzystających z alternatywnych klawiatur,
* osób korzystających ze sterowania głosowego wykorzystującego mechanizmy klawiaturowe,
* osób czasowo niekorzystających z urządzeń wskazujących.

---

## 10. Sposób testowania

### Krok 1 — Dotarcie do wszystkich elementów

Przemieszczaj fokus za pomocą klawisza Tab oraz Shift+Tab.

Sprawdź, czy można dotrzeć do wszystkich elementów interaktywnych.

### Krok 2 — Opuszczenie wszystkich elementów

Sprawdź, czy po uzyskaniu fokusu można przejść do kolejnego elementu.

Zweryfikuj brak pułapek klawiaturowych.

### Krok 3 — Kolejność fokusu

Sprawdź, czy fokus przemieszcza się zgodnie z logiczną kolejnością treści i funkcji strony.

### Krok 4 — Widoczność fokusu

Sprawdź, czy w każdej chwili można jednoznacznie określić położenie fokusu.

### Krok 5 — Obsługa funkcji

Sprawdź, czy wszystkie działania dostępne przy użyciu myszy można wykonać również za pomocą klawiatury.

### Krok 6 — Komponenty złożone

Sprawdź obsługę:

* menu,
* list rozwijanych,
* kart,
* harmonijek,
* okien dialogowych,
* odtwarzaczy multimedialnych.

Zweryfikuj działanie klawiszy Enter, Spacja, Esc oraz klawiszy strzałek tam, gdzie jest to wymagane.

### Krok 7 — Zmiana kontekstu

Sprawdź, czy samo uzyskanie fokusu nie uruchamia nieoczekiwanych działań.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie funkcje strony są dostępne przy użyciu samej klawiatury.

### Wynik częściowo pozytywny

Pojedyncze funkcje lub komponenty nie są w pełni dostępne z klawiatury, lecz nie uniemożliwia to realizacji głównych zadań użytkownika.

### Wynik negatywny

Co najmniej jedna istotna funkcja lub część serwisu nie może zostać obsłużona przy użyciu samej klawiatury.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* element nie otrzymuje fokusu,
* brak możliwości opuszczenia komponentu,
* pułapka klawiaturowa,
* niewidoczny fokus,
* nieprawidłowa kolejność tabulacji,
* menu rozwijane działające wyłącznie po najechaniu myszą,
* funkcje aktywowane wyłącznie zdarzeniem mouseover,
* brak możliwości zamknięcia okna dialogowego klawiaturą,
* nieobsługiwalne klawiaturą elementy własne JavaScript.

---

## 13. Dobre praktyki

* Stosowanie natywnych elementów HTML zamiast własnych komponentów.
* Zachowanie standardowych wzorców obsługi klawiaturą.
* Zapewnienie jednego logicznego punktu wejścia do komponentów złożonych.
* Testowanie wszystkich nowych funkcji bez użycia myszy.
* Zachowanie spójnej kolejności fokusu w całym serwisie.

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

> Część funkcji serwisu nie jest dostępna przy użyciu samej klawiatury. Użytkownik nie może uzyskać dostępu do wszystkich elementów menu rozwijanego ani aktywować wybranych funkcji bez użycia myszy.

lub

> Po wejściu do okna dialogowego fokus zostaje uwięziony i użytkownik nie może opuścić komponentu przy użyciu standardowych mechanizmów klawiaturowych.

---

## 17. Rekomendacje naprawcze

* Zapewnić obsługę wszystkich funkcji za pomocą klawiatury.
* Usunąć pułapki klawiaturowe.
* Poprawić kolejność fokusu.
* Zapewnić widoczny wskaźnik fokusu.
* Dostosować komponenty JavaScript do standardowych wzorców dostępności.
* Zweryfikować obsługę klawiaturą podczas odbiorów i testów regresyjnych.

---

## 18. Powiązane testy

* Widoczny fokus
* Kolejność fokusu
* Pułapka klawiaturowa
* Linki
* Formularze
* Menu nawigacyjne
* Okna dialogowe
* Odtwarzacze multimedialne
