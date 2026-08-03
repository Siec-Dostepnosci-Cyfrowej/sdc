---
id: test-galeria-obrazow
title: Scenariusz testu - Galeria obrazów
sidebar_label: Galeria obrazów
sidebar_position: 68
description: Scenariusz testu sprawdzającego, czy galeria obrazów umożliwia użytkownikom dostęp do zdjęć, opisów i funkcji nawigacyjnych niezależnie od sposobu korzystania z interfejsu.
keywords: [ocena zgodności,strona internetowa,obiekt,profil rozszerzony,galeria obrazów,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,obiekt,profil rozszerzony,galeria obrazów,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-068**

---

## 2. Nazwa testu

**Galeria obrazów**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy galeria obrazów umożliwia użytkownikowi:

- przeglądanie zdjęć,
- poznanie informacji zawartych na zdjęciach,
- korzystanie z funkcji powiększania,
- nawigowanie pomiędzy zdjęciami,
- zamknięcie podglądu zdjęć,

bez względu na sposób korzystania z interfejsu.

### Co oznacza „galeria obrazów”?

Galeria obrazów to zestaw zdjęć lub ilustracji prezentowanych jako kolekcja.

Może występować jako:

- siatka miniatur,
- lista zdjęć,
- galeria z podpisami,
- galeria z podglądem pełnoekranowym,
- galeria typu lightbox,
- galeria z możliwością przechodzenia do kolejnych zdjęć.

### Co sprawdza test?

Test ocenia:

- dostępność miniatur,
- dostępność opisów zdjęć,
- dostępność funkcji powiększania,
- obsługę klawiaturą,
- współpracę z czytnikami ekranu,
- działanie galerii na urządzeniach mobilnych.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.2.2 Pauza, zatrzymanie, ukrycie (A)** (jeżeli galeria zawiera automatyczne przejścia)
- **2.4.3 Kolejność fokusu (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.7 Widoczny fokus (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- 9.1.1.1 Non-text Content
- 9.1.3.1 Info and Relationships
- 9.2.1.1 Keyboard
- 9.2.1.2 No Keyboard Trap
- 9.2.2.2 Pause, Stop, Hide
- 9.2.4.3 Focus Order
- 9.2.4.4 Link Purpose (In Context)
- 9.2.4.7 Focus Visible
- 9.4.1.2 Name, Role, Value

---

## 6. Zastosowanie do treści

Test stosuje się do:

- galerii zdjęć,
- galerii ilustracji,
- galerii wydarzeń,
- galerii inwestycji,
- galerii obiektów,
- galerii historycznych,
- galerii osadzonych w artykułach.

### Wyjątki

Jeżeli strona nie zawiera galerii obrazów:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodną uznaje się galerię, dla której:

- zdjęcia posiadają odpowiednie alternatywy tekstowe lub opisy,
- miniatury są dostępne dla klawiatury,
- funkcje powiększania są dostępne dla klawiatury,
- użytkownik może przechodzić pomiędzy zdjęciami bez użycia myszy,
- użytkownik może zamknąć podgląd zdjęcia,
- nie występują pułapki klawiaturowe,
- czytnik ekranu rozpoznaje funkcje galerii i elementy sterujące.

---

## 8. Dlaczego to jest ważne

Galerie często zawierają informacje niedostępne w innych częściach strony.

Jeżeli galeria jest niedostępna:

- użytkownik może nie poznać treści zdjęć,
- może nie móc otworzyć zdjęcia,
- może nie móc przejść do kolejnych zdjęć,
- może utknąć w oknie podglądu.

W rezultacie część informacji staje się niedostępna.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami ruchowymi,
- osób korzystających z czytników ekranu,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj galerię obrazów.

### Krok 2

Sprawdź, czy wszystkie miniatury są dostępne przy użyciu klawiatury.

### Krok 3

Sprawdź widoczność fokusu.

### Krok 4

Sprawdź możliwość otwierania zdjęć bez użycia myszy.

### Krok 5

Jeżeli galeria posiada tryb powiększenia:

- otwórz zdjęcie,
- sprawdź możliwość zamknięcia podglądu,
- sprawdź możliwość przechodzenia do kolejnych zdjęć.

### Krok 6

Sprawdź, czy nie występuje pułapka klawiaturowa.

### Krok 7

Uruchom czytnik ekranu.

### Krok 8

Sprawdź, czy:

- zdjęcia posiadają alternatywy tekstowe,
- odczytywane są podpisy zdjęć,
- odczytywane są nazwy przycisków sterujących.

### Krok 9

Jeżeli występują przyciski:

- Następne zdjęcie,
- Poprzednie zdjęcie,
- Zamknij,

sprawdź, czy posiadają dostępne nazwy.

### Krok 10

Sprawdź działanie galerii na urządzeniu mobilnym lub przy szerokości ekranu odpowiadającej urządzeniu mobilnemu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Galeria umożliwia użytkownikowi samodzielne przeglądanie zdjęć oraz korzystanie ze wszystkich funkcji.

### Wynik częściowo pozytywny

Występują pojedyncze problemy utrudniające korzystanie z galerii.

### Wynik negatywny

Galeria uniemożliwia lub znacząco utrudnia dostęp do zdjęć lub funkcji nawigacyjnych.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak tekstów alternatywnych,
- nieprawidłowe teksty alternatywne,
- miniatury niedostępne z klawiatury,
- brak możliwości zamknięcia lightboxa,
- pułapka klawiaturowa w podglądzie zdjęcia,
- przyciski „następne” i „poprzednie” bez nazw,
- brak widocznego fokusu,
- automatyczne przechodzenie pomiędzy zdjęciami bez kontroli użytkownika,
- utrata fokusu po otwarciu podglądu.

---

## 13. Dobre praktyki

- Stosowanie tekstów alternatywnych zgodnych ze znaczeniem zdjęć.
- Stosowanie podpisów dla zdjęć informacyjnych.
- Zapewnienie pełnej obsługi klawiaturą.
- Udostępnienie przycisku „Zamknij”.
- Informowanie o numerze zdjęcia w galerii (np. „Zdjęcie 3 z 12”).
- Testowanie galerii z czytnikiem ekranu.
- Testowanie galerii na urządzeniach mobilnych.

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

> Galeria obrazów nie zapewnia pełnej dostępności dla użytkowników korzystających z klawiatury i technologii wspomagających. Część funkcji galerii nie jest dostępna bez użycia urządzenia wskazującego.

lub

> Zdjęcia prezentowane w galerii nie posiadają odpowiednich alternatyw tekstowych, co uniemożliwia użytkownikom technologii wspomagających poznanie ich treści.

---

## 17. Rekomendacje naprawcze

- Dodać brakujące alternatywy tekstowe.
- Poprawić opisy zdjęć.
- Zapewnić pełną obsługę klawiaturą.
- Usunąć pułapki klawiaturowe.
- Dodać dostępne nazwy przycisków sterujących.
- Zapewnić prawidłowe zarządzanie fokusem w podglądzie zdjęć.
- Zweryfikować działanie galerii z czytnikami ekranu.

---

## 18. Powiązane testy

- Tekst alternatywny
- Modalne okno dialogowe
- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Widoczność fokusu
- Cel łącza (w kontekście)
- Odczyt struktury przez czytnik ekranu
- Karuzela
---