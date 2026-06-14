---
id: test-pulapka-klawiaturowa
title: Karta testu — Pułapka klawiaturowa
sidebar_label: Pułapka klawiaturowa
sidebar_position: 25
description: Scenariusz testu sprawdzającego, czy użytkownik korzystający z klawiatury może opuścić każdy element interaktywny strony bez używania myszy.
keywords: [pułapka klawiaturowa, keyboard trap, klawiatura, fokus, dostępność cyfrowa, WCAG]
tags: [test dostępności, klawiatura, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-025**

---

## 2. Nazwa testu

**Pułapka klawiaturowa**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik korzystający wyłącznie z klawiatury może swobodnie opuścić każdy element interaktywny strony.

### Co oznacza pojęcie „pułapka klawiaturowa”?

Pułapka klawiaturowa występuje wtedy, gdy użytkownik może przejść klawiaturą do określonego elementu lub komponentu, ale nie może go później opuścić przy użyciu standardowych klawiszy nawigacyjnych.

W takiej sytuacji fokus zostaje „uwięziony” w danym miejscu strony.

Użytkownik może wtedy:

* utracić dostęp do pozostałej części strony,
* nie móc zamknąć okna dialogowego,
* nie móc przejść do kolejnych pól formularza,
* nie móc dokończyć wykonywanego zadania.

Najczęściej problem występuje w:

* oknach dialogowych,
* menu rozwijanych,
* komponentach JavaScript,
* osadzonych aplikacjach,
* elementach iframe,
* niestandardowych kontrolkach formularzy.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **2.1.2 Bez pułapki na klawiaturę (A)**

### EN 301 549

* **9.2.1.2 No Keyboard Trap**
* **10.2.1.2 No Keyboard Trap**
* **11.2.1.2 No Keyboard Trap**

### Techniki WCAG

* G21
* G202

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów, które mogą otrzymać fokus klawiatury, w szczególności:

* formularzy,
* menu,
* rozwijanych list,
* okien dialogowych,
* okien modalnych,
* harmonijek,
* zakładek,
* karuzel,
* komponentów JavaScript,
* odtwarzaczy multimedialnych,
* osadzonych aplikacji,
* elementów iframe.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której użytkownik może opuścić każdy element lub komponent dostępny z klawiatury przy użyciu standardowych klawiszy nawigacyjnych.

Jeżeli opuszczenie komponentu wymaga użycia niestandardowego skrótu klawiaturowego, użytkownik musi być o tym poinformowany.

---

## 8. Dlaczego to jest ważne

Osoby korzystające z klawiatury nie mają możliwości „kliknięcia obok” elementu tak jak użytkownicy myszy.

Jeżeli fokus zostanie uwięziony w komponencie, użytkownik może utracić możliwość:

* dalszej nawigacji,
* korzystania z funkcji strony,
* zamknięcia aktywnego okna,
* ukończenia zadania.

W skrajnych przypadkach jedynym sposobem odzyskania kontroli jest odświeżenie strony lub jej opuszczenie.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób korzystających wyłącznie z klawiatury,
* osób z niepełnosprawnością ruchową,
* osób korzystających ze sterowania głosowego wykorzystującego mechanizmy klawiaturowe,
* osób korzystających z alternatywnych urządzeń wejściowych.

---

## 10. Sposób testowania

### Krok 1

Odłóż mysz i korzystaj wyłącznie z klawiatury.

### Krok 2

Przemieszczaj się po stronie klawiszem Tab.

### Krok 3

Wejdź do każdego elementu interaktywnego.

### Krok 4

Po wejściu do elementu sprawdź, czy możesz go opuścić przy użyciu:

* Tab,
* Shift+Tab,
* Esc (jeżeli dotyczy).

### Krok 5

Sprawdź szczególnie:

* okna dialogowe,
* menu rozwijane,
* listy rozwijane,
* odtwarzacze multimedialne,
* komponenty tworzone przez JavaScript,
* osadzone aplikacje.

### Krok 6

Zweryfikuj, czy po wejściu do komponentu możliwe jest przejście do dalszej części strony.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Każdy element dostępny z klawiatury można również opuścić przy użyciu klawiatury.

### Wynik częściowo pozytywny

Pojedyncze elementy pomocnicze powodują problemy, ale nie uniemożliwiają realizacji głównych zadań użytkownika.

### Wynik negatywny

Co najmniej jeden istotny element lub komponent powoduje uwięzienie fokusu i uniemożliwia dalszą nawigację.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* brak możliwości opuszczenia okna modalnego,
* brak możliwości zamknięcia okna dialogowego klawiszem Esc,
* fokus uwięziony w komponencie iframe,
* fokus uwięziony w odtwarzaczu multimedialnym,
* komponent JavaScript przechwytujący klawisz Tab,
* niestandardowe menu bez możliwości opuszczenia klawiaturą.

---

## 13. Dobre praktyki

* Stosowanie natywnych komponentów HTML.
* Stosowanie wzorców WAI-ARIA Authoring Practices.
* Obsługa klawisza Esc w oknach dialogowych.
* Testowanie wszystkich komponentów bez użycia myszy.
* Dokumentowanie niestandardowych skrótów klawiaturowych.

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

> Po wejściu do okna dialogowego użytkownik nie może opuścić komponentu przy użyciu klawiatury. Fokus pozostaje uwięziony wewnątrz okna, co uniemożliwia dalszą nawigację po stronie.

lub

> Po przejściu do osadzonego komponentu fokus zostaje zatrzymany wewnątrz elementu iframe. Użytkownik nie może wrócić do pozostałej części strony bez użycia myszy.

---

## 17. Rekomendacje naprawcze

* Zapewnić możliwość opuszczenia każdego komponentu przy użyciu klawiatury.
* Zweryfikować obsługę klawiszy Tab, Shift+Tab oraz Esc.
* Usunąć mechanizmy przechwytujące fokus bez możliwości jego zwolnienia.
* Dostosować komponenty niestandardowe do wzorców WAI-ARIA.
* Wprowadzić testy regresyjne obejmujące wykrywanie pułapek klawiaturowych.

---

## 18. Powiązane testy

* Dostęp z klawiatury
* Kolejność fokusu
* Widoczny fokus
* Zmiana po uzyskaniu fokusu
* Menu nawigacyjne
* Okna dialogowe
* Formularze
