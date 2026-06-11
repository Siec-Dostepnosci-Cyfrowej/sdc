---
id: test-widoczny-fokus
title: Karta testu — Widoczność fokusu
sidebar_label: Widoczność fokusu
sidebar_position: 27
description: Scenariusz testu sprawdzającego, czy użytkownik korzystający z klawiatury może w każdej chwili określić, który element strony posiada fokus.
keywords: [widoczny fokus, focus visible, wskaźnik fokusu, klawiatura, dostępność cyfrowa, WCAG]
tags: [test dostępności, fokus, klawiatura, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
--------------------

## 1. ID testu

**testID-027**

---

## 2. Nazwa testu

**Widoczność fokusu**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik korzystający z klawiatury może w każdej chwili określić, który element strony jest aktualnie aktywny i gotowy do przyjmowania poleceń z klawiatury.

### Co oznacza pojęcie „fokus”?

Fokus (ang. *focus*) oznacza element strony, który aktualnie odbiera polecenia z klawiatury.

Jeżeli użytkownik naciśnie klawisz Enter, Spacja lub inny klawisz sterujący, działanie zostanie wykonane na elemencie posiadającym fokus.

### Co oznacza pojęcie „wskaźnik fokusu”?

Wskaźnik fokusu to widoczne oznaczenie elementu posiadającego fokus.

Może mieć postać:

- obramowania,
- ramki,
- podświetlenia,
- zmiany koloru,
- zmiany tła,
- innego wyraźnie widocznego wyróżnienia.

### Na co zwrócić uwagę?

Podczas nawigacji klawiaturą użytkownik powinien zawsze wiedzieć:

> „W którym miejscu strony jestem teraz?”

Jeżeli nie można tego jednoznacznie określić, wskaźnik fokusu jest niewystarczający lub nie istnieje.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **2.4.7 Widoczny fokus (AA)**

### EN 301 549

- **9.2.4.7 Focus Visible**
- **10.2.4.7 Focus Visible**
- **11.2.4.7 Focus Visible**

### Powiązane standardy

- WCAG 2.2: **2.4.11 Focus Appearance (AA)**

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów, które mogą otrzymać fokus klawiatury, w szczególności:

- łączy,
- przycisków,
- pól formularzy,
- pól wyszukiwania,
- list rozwijanych,
- kart i zakładek,
- menu,
- harmonijek,
- okien dialogowych,
- odtwarzaczy multimedialnych,
- komponentów niestandardowych.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której każdy element otrzymujący fokus posiada widoczny wskaźnik fokusu.

Użytkownik może jednoznacznie określić, który element jest aktualnie aktywny.

---

## 8. Dlaczego to jest ważne

Podczas korzystania z klawiatury użytkownik nie wskazuje elementów kursorem myszy.

Jedyną informacją o aktualnym położeniu na stronie jest wskaźnik fokusu.

Jeżeli wskaźnik fokusu jest niewidoczny lub trudny do zauważenia:

- użytkownik może utracić orientację,
- może nie wiedzieć, który element aktywuje,
- może wykonywać błędne działania,
- korzystanie z serwisu staje się znacznie trudniejsze.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających częściowo ze wzroku lub powiększenia ekranu,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością ruchową,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z dużego powiększenia ekranu.

---

## 10. Sposób testowania

### Krok 1

Odłóż mysz.

### Krok 2

Przemieszczaj się po stronie klawiszem Tab.

### Krok 3

Po każdym naciśnięciu klawisza sprawdź, czy potrafisz natychmiast wskazać element posiadający fokus.

### Krok 4

Sprawdź wszystkie rodzaje elementów interaktywnych:

- łącza,
- przyciski,
- formularze,
- menu,
- listy rozwijane,
- komponenty niestandardowe.

### Krok 5

Sprawdź, czy wskaźnik fokusu jest widoczny:

- na jasnym tle,
- na ciemnym tle,
- na obrazach,
- na elementach o niestandardowym wyglądzie.

### Krok 6

Sprawdź, czy wskaźnik fokusu pozostaje widoczny podczas korzystania z całego serwisu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Każdy element otrzymujący fokus posiada wyraźnie widoczny wskaźnik fokusu.

### Wynik częściowo pozytywny

Pojedyncze elementy posiadają wskaźnik trudny do zauważenia, ale większość elementów spełnia wymaganie.

### Wynik negatywny

Brak wskaźnika fokusu lub wskaźnik jest niewidoczny dla istotnej części elementów interaktywnych.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- całkowite usunięcie wskaźnika fokusu przez CSS,
- zastosowanie `outline: none` bez zapewnienia alternatywy,
- wskaźnik fokusu o bardzo niskim kontraście,
- wskaźnik widoczny tylko dla części elementów,
- fokus niewidoczny na obrazach lub kolorowych tłach,
- wskaźnik praktycznie niezauważalny przy normalnym użytkowaniu.

---

## 13. Dobre praktyki

- Stosowanie wyraźnego obramowania wokół elementu posiadającego fokus.
- Zachowanie spójnego wyglądu wskaźnika fokusu w całym serwisie.
- Projektowanie wskaźnika widocznego zarówno na jasnym, jak i ciemnym tle.
- Testowanie widoczności fokusu przy powiększeniu ekranu.
- Stosowanie rozwiązań zgodnych również z wymaganiami WCAG 2.2 dotyczącymi wyglądu fokusu.

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

> Podczas nawigacji klawiaturą część elementów interaktywnych nie posiada widocznego wskaźnika fokusu. Użytkownik nie może jednoznacznie określić, który element jest aktualnie aktywny.

lub

> Wskaźnik fokusu został usunięty przez style CSS dla przycisków i elementów menu, co utrudnia korzystanie z serwisu przy użyciu klawiatury.

---

## 17. Rekomendacje naprawcze

- Zapewnić widoczny wskaźnik fokusu dla wszystkich elementów interaktywnych.
- Usunąć style ukrywające fokus bez zapewnienia alternatywnego oznaczenia.
- Zwiększyć kontrast i widoczność wskaźnika fokusu.
- Przetestować wszystkie komponenty przy użyciu klawiatury.
- Uwzględnić wymagania WCAG 2.2 dotyczące wyglądu fokusu przy projektowaniu nowych interfejsów.

---

## 18. Powiązane testy

- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Zmiana po uzyskaniu fokusu
- Kontrast elementów interaktywnych
- Formularze
- Menu nawigacyjne
