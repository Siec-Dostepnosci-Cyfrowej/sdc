---
id: test-modalne-okno-dialogowe
title: Scenariusz testu - Modalne okno dialogowe
sidebar_label: Modalne okno dialogowe
sidebar_position: 55
description: Scenariusz testu sprawdzającego, czy modalne okno dialogowe jest dostępne dla użytkowników klawiatury i technologii wspomagających oraz nie zakłóca korzystania z pozostałej części interfejsu.
keywords: [ocena zgodności,strona internetowa,obiekt,profil rozszerzony,modalne okno dialogowe,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,obiekt,profil rozszerzony,modalne okno dialogowe,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-055**

---

## 2. Nazwa testu

**Modalne okno dialogowe**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy modalne okno dialogowe jest dostępne dla użytkowników korzystających z klawiatury i technologii wspomagających.

### Co oznacza „modalne okno dialogowe”?

Modalne okno dialogowe (modal) to okno wyświetlane ponad treścią strony, które wymaga wykonania określonej akcji przed powrotem do głównej zawartości.

Przykłady:

- okna potwierdzenia operacji,
- formularze kontaktowe otwierane w oknie,
- okna logowania,
- komunikaty o błędach,
- okna ustawień,
- okna zgody na pliki cookies.

### Jak powinno działać poprawne okno modalne?

Po otwarciu:

- fokus przechodzi do okna dialogowego,
- użytkownik może poruszać się wyłącznie po elementach znajdujących się w oknie,
- okno posiada nazwę lub tytuł,
- czytnik ekranu rozpoznaje je jako okno dialogowe.

Po zamknięciu:

- fokus wraca do elementu, który otworzył okno,
- użytkownik może kontynuować pracę od miejsca, w którym ją przerwał.

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

- 9.1.3.1
- 9.2.1.1
- 9.2.1.2
- 9.2.4.3
- 9.2.4.7
- 9.4.1.2

---

## 6. Zastosowanie do treści

Test stosuje się do:

- okien logowania,
- formularzy otwieranych w oknie,
- okien ustawień,
- okien potwierdzeń,
- komunikatów błędów,
- okien zgód,
- okien pomocy,
- wszelkich komponentów typu dialog.

### Wyjątki

Jeżeli serwis nie zawiera modalnych okien dialogowych:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodne uznaje się modalne okno dialogowe, dla którego:

- po otwarciu fokus przechodzi do okna,
- użytkownik może obsłużyć wszystkie funkcje z klawiatury,
- fokus nie opuszcza okna przed jego zamknięciem,
- użytkownik może zamknąć okno z klawiatury,
- okno posiada programowo określoną nazwę,
- czytnik ekranu identyfikuje okno jako dialog,
- po zamknięciu fokusu wraca do elementu wywołującego.

---

## 8. Dlaczego to jest ważne

Nieprawidłowo zaimplementowane okna dialogowe należą do najczęstszych przyczyn problemów z dostępnością.

Mogą powodować:

- utratę fokusu,
- dezorientację użytkownika,
- zablokowanie obsługi klawiaturą,
- nieprawidłowy odczyt przez czytniki ekranu,
- brak możliwości zamknięcia okna.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- osób z niepełnosprawnościami poznawczymi.

---

## 10. Sposób testowania

### Krok 1

Otwórz modalne okno dialogowe.

### Krok 2

Sprawdź, czy po otwarciu fokus automatycznie przechodzi do okna.

### Krok 3

Poruszaj się po elementach okna klawiszem Tab.

### Krok 4

Sprawdź, czy fokus pozostaje wewnątrz okna.

### Krok 5

Sprawdź, czy wszystkie przyciski, pola formularza i łącza są dostępne z klawiatury.

### Krok 6

Sprawdź, czy możliwe jest zamknięcie okna:

- przyciskiem zamknięcia,
- klawiszem Esc (jeżeli jest przewidziany),
- innym mechanizmem dostępnym z klawiatury.

### Krok 7

Po zamknięciu sprawdź, czy fokus wraca do elementu otwierającego okno.

### Krok 8

Uruchom czytnik ekranu.

### Krok 9

Sprawdź, czy:

- czytnik informuje o otwarciu dialogu,
- odczytywana jest nazwa okna,
- odczytywana jest zawartość okna.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Modalne okno dialogowe jest w pełni obsługiwalne z klawiatury i prawidłowo rozpoznawane przez technologie wspomagające.

### Wynik częściowo pozytywny

Występują drobne problemy, które utrudniają korzystanie z okna, ale nie uniemożliwiają wykonania zadania.

### Wynik negatywny

Okno nie może być skutecznie obsługiwane przez użytkowników klawiatury lub technologii wspomagających.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- fokus pozostaje w tle strony,
- fokus trafia poza okno dialogowe,
- brak możliwości zamknięcia okna z klawiatury,
- utrata fokusu po zamknięciu,
- brak nazwy okna,
- czytnik ekranu nie rozpoznaje dialogu,
- niewidoczny fokus,
- nieaktywne elementy dostępne w kolejności Tab poza oknem.

---

## 13. Dobre praktyki

- Automatyczne ustawianie fokusu na pierwszym elemencie okna.
- Zwracanie fokusu do elementu wywołującego.
- Stosowanie jednoznacznych tytułów okien.
- Stosowanie semantyki dialogu (`dialog`, `alertdialog`).
- Testowanie komponentu z klawiaturą i czytnikiem ekranu.

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

> Modalne okno dialogowe nie zapewnia poprawnej obsługi klawiatury. Fokus może opuścić okno lub nie wraca do elementu wywołującego po jego zamknięciu.

lub

> Czytnik ekranu nie identyfikuje poprawnie okna dialogowego, przez co użytkownik może nie być świadomy zmiany kontekstu i dostępnych funkcji.

---

## 17. Rekomendacje naprawcze

- Zapewnić automatyczne przenoszenie fokusu do okna po jego otwarciu.
- Ograniczyć kolejność Tab do elementów znajdujących się w oknie.
- Zapewnić możliwość zamknięcia okna z klawiatury.
- Przywracać fokus do elementu otwierającego.
- Dodać programową nazwę i rolę dialogu.
- Przetestować komponent przy użyciu czytnika ekranu i samej klawiatury.

---

## 18. Powiązane testy

- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Widoczność fokusu
- Zmiana po uzyskaniu fokusu
- Odczyt formularza przez czytnik ekranu
- Powiadomienia
---