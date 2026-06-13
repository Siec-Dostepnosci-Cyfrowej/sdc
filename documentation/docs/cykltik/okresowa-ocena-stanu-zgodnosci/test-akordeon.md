---
id: test-akordeon
title: Karta testu — Akordeon
sidebar_label: Akordeon
sidebar_position: 59
description: Scenariusz testu sprawdzającego, czy komponent akordeonu jest dostępny dla użytkowników klawiatury i technologii wspomagających oraz czy umożliwia przewidywalne rozwijanie i zwijanie treści.
keywords: [akordeon, accordion, rozwijane sekcje, ukryta treść, dostępność cyfrowa]
tags: [test dostępności, komponenty, akordeon, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-059**

---

## 2. Nazwa testu

**Akordeon**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy komponent akordeonu jest dostępny dla użytkowników korzystających z klawiatury i technologii wspomagających oraz czy umożliwia przewidywalne rozwijanie i zwijanie sekcji treści.

### Co oznacza „akordeon”?

Akordeon jest komponentem umożliwiającym ukrywanie i rozwijanie fragmentów treści.

Najczęściej składa się z:

- nagłówka sekcji,
- przycisku rozwijania,
- obszaru treści.

Przykłady zastosowania:

- FAQ,
- instrukcje,
- regulaminy,
- opisy usług,
- sekcje pomocy,
- listy pytań i odpowiedzi.

### Jak powinien działać poprawny akordeon?

Użytkownik powinien móc:

- rozpoznać element rozwijalny,
- sprawdzić, czy sekcja jest rozwinięta czy zwinięta,
- rozwinąć i zwinąć sekcję z klawiatury,
- odczytać treść po rozwinięciu,
- zachować orientację podczas korzystania z komponentu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **2.4.7 Widoczny fokus (AA)**
- **3.2.2 Podczas wprowadzania danych (A)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.2.1.1 Keyboard**
- **9.2.1.2 No Keyboard Trap**
- **9.2.4.3 Focus Order**
- **9.2.4.6 Headings and Labels**
- **9.2.4.7 Focus Visible**
- **9.3.2.2 On Input**
- **9.4.1.2 Name, Role, Value**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- sekcji FAQ,
- rozwijanych instrukcji,
- rozwijanych opisów,
- rozwijanych list pytań i odpowiedzi,
- rozwijanych bloków pomocy,
- rozwijanych paneli informacji,
- komponentów typu accordion.

### Wyjątki

Jeżeli strona nie zawiera akordeonów:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się akordeon, dla którego:

- każda sekcja posiada jednoznaczną nazwę,
- użytkownik może rozwinąć i zwinąć sekcję z klawiatury,
- widoczny jest wskaźnik fokusu,
- użytkownik może określić stan sekcji (rozwinięta/zwinięta),
- czytnik ekranu przekazuje nazwę, rolę i stan komponentu,
- rozwijanie sekcji nie powoduje nieoczekiwanej zmiany kontekstu,
- kolejność nawigacji pozostaje logiczna.

---

## 8. Dlaczego to jest ważne

Akordeony pozwalają ograniczyć ilość treści widocznej jednocześnie na ekranie.

Jeżeli komponent nie działa poprawnie:

- użytkownik może nie wiedzieć, że treść jest dostępna,
- może nie rozpoznać możliwości rozwinięcia sekcji,
- może nie wiedzieć, czy sekcja jest otwarta czy zamknięta,
- może utracić orientację podczas nawigacji.

W rezultacie część treści może stać się niedostępna.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi.

---

## 10. Sposób testowania

### Krok 1

Odszukaj komponent akordeonu.

### Krok 2

Sprawdź, czy każda sekcja posiada zrozumiały tytuł.

### Krok 3

Przemieszczaj się pomiędzy sekcjami przy użyciu klawisza Tab.

### Krok 4

Sprawdź widoczność fokusu.

### Krok 5

Aktywuj sekcję klawiszem:

- Enter,
- Spacja.

### Krok 6

Sprawdź, czy sekcja rozwija się i zwija zgodnie z oczekiwaniem.

### Krok 7

Sprawdź, czy po rozwinięciu dostępna jest treść sekcji.

### Krok 8

Sprawdź, czy rozwinięcie nie powoduje:

- otwarcia nowego okna,
- przejścia do innej strony,
- utraty fokusu,
- nieoczekiwanej zmiany kontekstu.

### Krok 9

Uruchom czytnik ekranu.

### Krok 10

Sprawdź, czy użytkownik otrzymuje informacje o:

- nazwie sekcji,
- możliwości rozwinięcia,
- aktualnym stanie sekcji,
- dostępności treści.

### Krok 11

Sprawdź, czy kolejność nawigacji pozostaje logiczna po rozwinięciu sekcji.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Akordeon jest w pełni obsługiwalny z klawiatury i poprawnie komunikowany przez technologie wspomagające.

### Wynik częściowo pozytywny

Występują drobne problemy utrudniające korzystanie z komponentu, ale nie uniemożliwiają dostępu do treści.

### Wynik negatywny

Komponent uniemożliwia lub znacząco utrudnia dostęp do części treści.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- nagłówek sekcji nie jest elementem interaktywnym,
- brak możliwości rozwinięcia z klawiatury,
- brak widocznego fokusu,
- brak informacji o stanie sekcji,
- czytnik ekranu nie informuje o możliwości rozwinięcia,
- rozwinięcie powoduje utratę fokusu,
- treść sekcji jest odczytywana mimo pozostawania w stanie zwiniętym,
- nieprawidłowa kolejność nawigacji po rozwinięciu.

---

## 13. Dobre praktyki

- Stosowanie natywnych przycisków do rozwijania sekcji.
- Wyraźne oznaczanie stanu rozwinięcia.
- Zachowanie logicznej struktury nagłówków.
- Zapewnienie pełnej obsługi klawiaturą.
- Testowanie komponentu z czytnikiem ekranu.
- Ograniczanie liczby poziomów zagnieżdżenia.

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

> Komponent akordeonu nie zapewnia pełnej obsługi klawiaturą. Użytkownik nie może samodzielnie rozwinąć lub zwinąć wszystkich sekcji bez użycia urządzenia wskazującego.

lub

> Technologie wspomagające nie otrzymują informacji o stanie rozwinięcia sekcji, co utrudnia orientację i dostęp do treści.

---

## 17. Rekomendacje naprawcze

- Zapewnić możliwość rozwijania i zwijania sekcji z klawiatury.
- Dodać programową informację o stanie rozwinięcia.
- Zapewnić widoczny wskaźnik fokusu.
- Powiązać nagłówki z odpowiednimi sekcjami treści.
- Zweryfikować komponent przy użyciu czytnika ekranu.
- Zastosować wzorzec akordeonu zgodny z WAI-ARIA Authoring Practices.

---

## 18. Powiązane testy

- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Widoczność fokusu
- Nagłówki
- Odczyt struktury przez czytnik ekranu
- Zakładki
- Modalne okno dialogowe
---