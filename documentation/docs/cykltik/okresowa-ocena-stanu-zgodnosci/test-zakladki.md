---
id: test-zakladki
title: Karta testu — Zakładki
sidebar_label: Zakładki
sidebar_position: 56
description: Scenariusz testu sprawdzającego, czy komponent zakładek jest dostępny dla użytkowników klawiatury i technologii wspomagających.
keywords: [zakładki, tabs, tablist, tabpanel, klawiatura, fokus, dostępność cyfrowa]
tags: [test dostępności, komponenty, zakładki, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. ID testu

**testID-056**

---

## 2. Nazwa testu

**Zakładki**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy komponent zakładek jest dostępny dla użytkowników korzystających z klawiatury i technologii wspomagających.

### Co oznacza komponent „zakładki”?

Zakładki to komponent interfejsu, w którym użytkownik wybiera jedną z kilku kart, aby wyświetlić powiązany z nią panel treści.

Przykłady:

- zakładki „Opis”, „Dane techniczne”, „Pliki do pobrania”,
- zakładki w formularzu wieloczęściowym,
- zakładki w panelu ustawień,
- zakładki w karcie usługi.

### Jak powinien działać poprawny komponent zakładek?

Użytkownik powinien móc:

- rozpoznać listę zakładek,
- ustalić, która zakładka jest aktywna,
- przełączać zakładki z klawiatury,
- odczytać powiązany panel treści,
- korzystać z komponentu bez utraty orientacji.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.7 Widoczny fokus (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.2.1.1 Keyboard**
- **9.2.1.2 No Keyboard Trap**
- **9.2.4.3 Focus Order**
- **9.2.4.7 Focus Visible**
- **9.4.1.2 Name, Role, Value**

---

## 6. Zastosowanie do treści

Test stosuje się do komponentów typu zakładki występujących w:

- stronach internetowych,
- aplikacjach webowych,
- panelach użytkownika,
- formularzach wieloetapowych,
- kartach usług,
- systemach transakcyjnych,
- serwisach informacyjnych.

### Wyjątki

Jeżeli na stronie nie występuje komponent zakładek, wynik oznacza się jako:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się komponent zakładek, dla którego:

- użytkownik może rozpoznać zakładki i powiązane z nimi panele,
- aktywna zakładka jest jednoznacznie oznaczona,
- wszystkie zakładki są dostępne z klawiatury,
- fokus przemieszcza się w logiczny sposób,
- wskaźnik fokusu jest widoczny,
- czytnik ekranu przekazuje nazwę, rolę i stan zakładki,
- treść panelu odpowiada wybranej zakładce.

---

## 8. Dlaczego to jest ważne

Zakładki ukrywają część treści i pokazują ją dopiero po wyborze odpowiedniej karty.

Jeżeli komponent nie jest poprawnie dostępny:

- użytkownik może nie wiedzieć, że istnieją dodatkowe treści,
- może nie rozpoznać aktywnej zakładki,
- może nie umieć przełączyć panelu,
- czytnik ekranu może nie przekazać relacji między zakładką i treścią.

W rezultacie część informacji lub funkcji może być niedostępna.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1

Odszukaj komponent zakładek na stronie.

### Krok 2

Sprawdź, czy każda zakładka ma zrozumiałą nazwę.

### Krok 3

Przemieszczaj się po komponencie wyłącznie klawiaturą.

Sprawdź działanie:

- Tab,
- Shift+Tab,
- strzałek,
- Enter,
- Spacji.

### Krok 4

Sprawdź, czy można aktywować każdą zakładkę.

### Krok 5

Sprawdź, czy po aktywacji zakładki wyświetla się właściwy panel treści.

### Krok 6

Sprawdź, czy aktywna zakładka jest oznaczona wizualnie.

### Krok 7

Sprawdź, czy fokus jest widoczny na każdej zakładce.

### Krok 8

Uruchom czytnik ekranu.

Sprawdź, czy użytkownik otrzymuje informacje o:

- nazwie zakładki,
- roli zakładki,
- stanie aktywności,
- powiązanym panelu treści.

### Krok 9

Oceń, czy użytkownik może zrozumieć strukturę i działanie komponentu bez korzystania z myszy.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Komponent zakładek jest w pełni obsługiwalny z klawiatury i prawidłowo rozpoznawany przez technologie wspomagające.

### Wynik częściowo pozytywny

Komponent działa częściowo poprawnie, ale występują problemy utrudniające orientację lub obsługę.

### Wynik negatywny

Komponent zakładek nie jest dostępny z klawiatury lub nie jest prawidłowo przekazywany technologiom wspomagającym.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- zakładki dostępne wyłącznie myszą,
- brak widocznego fokusu,
- brak informacji o aktywnej zakładce,
- nieprawidłowa kolejność fokusu,
- ukryte panele nadal odczytywane przez czytnik ekranu,
- czytnik ekranu nie rozpoznaje zakładek jako komponentu,
- zakładki mają niejasne nazwy,
- panel treści nie jest powiązany z aktywną zakładką.

---

## 13. Dobre praktyki

- Stosowanie sprawdzonych wzorców WAI-ARIA dla zakładek.
- Nadawanie każdej zakładce krótkiej i opisowej nazwy.
- Wyraźne oznaczanie aktywnej zakładki.
- Zapewnienie obsługi klawiaturą zgodnej z oczekiwaniami użytkowników.
- Testowanie komponentu z czytnikiem ekranu.
- Unikanie ukrywania ważnych informacji wyłącznie w trudno dostępnych panelach.

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

> Komponent zakładek nie jest w pełni dostępny z klawiatury. Użytkownik nie może przełączyć wszystkich zakładek bez użycia myszy.

lub

> Czytnik ekranu nie przekazuje informacji o stanie aktywnej zakładki ani relacji między zakładką i panelem treści, co utrudnia zrozumienie działania komponentu.

---

## 17. Rekomendacje naprawcze

- Zapewnić obsługę zakładek z klawiatury.
- Dodać widoczny wskaźnik fokusu.
- Oznaczyć aktywną zakładkę programowo i wizualnie.
- Powiązać zakładki z odpowiadającymi im panelami treści.
- Ukryć nieaktywne panele przed technologiami wspomagającymi, jeżeli nie powinny być odczytywane.
- Przetestować komponent przy użyciu czytnika ekranu.

---

## 18. Powiązane testy

- Dostęp z klawiatury
- Kolejność fokusu
- Widoczność fokusu
- Pułapka klawiaturowa
- Zmiana po uzyskaniu fokusu
- Odczyt struktury przez czytnik ekranu
- Nazwa, rola, wartość
- Modalne okno dialogowe
---