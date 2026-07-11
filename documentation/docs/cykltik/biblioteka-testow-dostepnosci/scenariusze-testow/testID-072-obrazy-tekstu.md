---
id: test-obrazy-tekstu
title: Scenariusz testu - Obrazy tekstu
sidebar_label: Obrazy tekstu
sidebar_position: 72
description: Scenariusz testu sprawdzającego, czy tekst nie jest prezentowany w postaci obrazu, jeżeli może zostać przedstawiony jako zwykły tekst dostępny dla użytkownika.
keywords: [obrazy tekstu, tekst na obrazie, grafika z tekstem, WCAG, dostępność cyfrowa]
tags: [test dostępności, obrazy, tekst, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-072**

---

## 2. Nazwa testu

**Obrazy tekstu**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test służy do sprawdzenia, czy informacje tekstowe nie są prezentowane wyłącznie w postaci obrazu, jeżeli mogą zostać przedstawione jako zwykły tekst.

### Co oznacza „obraz tekstu”?

Obraz tekstu (ang. *image of text*) to obraz zawierający tekst, który został użyty zamiast zwykłego tekstu.

Przykłady:

- baner zawierający komunikat zapisany wyłącznie w grafice,
- grafika promocyjna zawierająca informacje o wydarzeniu,
- przycisk będący obrazem tekstu,
- slajd prezentacji opublikowany jako obraz,
- plakat opublikowany jako pojedyncza grafika.

### Dlaczego jest to problem?

Tekst zapisany jako obraz:

- nie dostosowuje się do ustawień użytkownika,
- może tracić czytelność przy powiększaniu,
- może być trudniejszy do odczytania przy zmianie kontrastu,
- utrudnia tłumaczenie i adaptację treści,
- może być gorzej interpretowany przez technologie wspomagające.

### Kiedy obraz tekstu jest dopuszczalny?

WCAG dopuszcza obrazy tekstu w dwóch sytuacjach:

- gdy określona prezentacja tekstu jest niezbędna do przekazania informacji,
- gdy tekst stanowi część logo lub znaku graficznego.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **1.4.5 Obrazy tekstu (AA)**

### EN 301 549

* **9.1.4.5 Images of Text**

### Techniki WCAG

* G140 — Oddzielanie informacji od prezentacji
* C22 — Użycie CSS do kontrolowania prezentacji tekstu
* G182 — Zapewnienie alternatyw dla obrazów tekstu

---

## 6. Zastosowanie do treści

Test stosuje się do:

- banerów,
- grafik promocyjnych,
- slajderów,
- kafli usług,
- grafik informacyjnych,
- plakatów,
- infografik,
- ilustracji zawierających tekst,
- materiałów publikowanych na stronach internetowych.

### Wyjątki

Test nie dotyczy:

- logo,
- znaków firmowych,
- znaków towarowych,
- przypadków, w których określony wygląd tekstu jest niezbędny do przekazania informacji.

---

## 7. Oczekiwany wynik

Za zgodne uznaje się rozwiązanie, dla którego:

- informacje tekstowe są prezentowane jako tekst, jeżeli nie ma uzasadnionej potrzeby użycia obrazu,
- obrazy tekstu są stosowane wyłącznie w przypadkach objętych wyjątkami określonymi w WCAG,
- użytkownik ma dostęp do tych samych informacji w postaci tekstowej.

---

## 8. Dlaczego to jest ważne

Tekst powinien być dostępny w formie umożliwiającej jego dostosowanie do potrzeb użytkownika.

Tekst zapisany jako obraz:

- może być trudniejszy do odczytania,
- nie reaguje na ustawienia użytkownika,
- może tracić czytelność przy powiększaniu,
- utrudnia korzystanie z technologii wspomagających,
- może powodować problemy przy korzystaniu z urządzeń mobilnych.

Stosowanie zwykłego tekstu zwykle zapewnia wyższą dostępność niż stosowanie grafiki zawierającej tekst.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób słabowidzących,
- osób korzystających z powiększania ekranu,
- osób korzystających z własnych ustawień kolorystycznych,
- osób z dysleksją,
- osób korzystających z technologii wspomagających,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Przejrzyj stronę i zidentyfikuj obrazy zawierające tekst.

### Krok 2

Dla każdego obrazu określ, czy tekst przekazuje informacje istotne dla użytkownika.

### Krok 3

Sprawdź, czy ta sama informacja jest dostępna również w postaci zwykłego tekstu.

### Krok 4

Oceń, czy zastosowanie obrazu tekstu jest uzasadnione.

### Krok 5

Powiększ stronę do 200%.

Sprawdź, czy informacje zapisane na obrazach pozostają czytelne.

### Krok 6

Sprawdź działanie strony przy zmianie szerokości okna lub na urządzeniu mobilnym.

### Krok 7

Oceń, czy użytkownik może uzyskać dostęp do informacji bez konieczności odczytywania tekstu osadzonego w obrazie.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Informacje tekstowe są prezentowane jako zwykły tekst lub zastosowanie obrazu tekstu jest uzasadnione wyjątkami określonymi w WCAG.

### Wynik częściowo pozytywny

Występują pojedyncze obrazy tekstu, które mogłyby zostać zastąpione zwykłym tekstem.

### Wynik negatywny

Istotne informacje są prezentowane wyłącznie jako obrazy tekstu bez uzasadnienia wynikającego z wyjątków WCAG.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- publikowanie całych komunikatów w postaci grafiki,
- zastępowanie nagłówków obrazami tekstu,
- grafiki promocyjne zawierające istotne informacje niedostępne w postaci tekstowej,
- przyciski będące obrazami tekstu,
- slajdery zawierające informacje wyłącznie w postaci grafiki,
- publikowanie plakatów jako pojedynczych obrazów bez odpowiednika tekstowego.

---

## 13. Dobre praktyki

- Stosowanie zwykłego tekstu HTML zamiast grafiki z tekstem.
- Wykorzystywanie CSS do uzyskania pożądanego wyglądu tekstu.
- Umieszczanie treści informacyjnych bezpośrednio w strukturze strony.
- Zapewnianie tekstowych odpowiedników informacji przedstawionych na grafikach.
- Ograniczanie stosowania obrazów tekstu do przypadków uzasadnionych.

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

> Część informacji została opublikowana wyłącznie w postaci obrazów zawierających tekst. Informacje te nie zostały udostępnione w postaci zwykłego tekstu, co może utrudniać ich odczytanie i dostosowanie do potrzeb użytkowników.

lub

> Grafiki informacyjne zawierają istotne treści tekstowe, które nie zostały przedstawione w postaci tekstowej. W rezultacie część użytkowników może mieć trudności z dostępem do tych informacji.

---

## 17. Rekomendacje naprawcze

- Zastąpić obrazy tekstu zwykłym tekstem HTML tam, gdzie jest to możliwe.
- Zapewnić tekstowe odpowiedniki informacji przedstawionych na grafikach.
- Ograniczyć stosowanie obrazów tekstu do przypadków objętych wyjątkami WCAG.
- Zweryfikować banery, slajdery i grafiki promocyjne pod kątem dostępności.
- Uwzględnić wymaganie stosowania tekstu zamiast grafiki w standardach publikacji treści.

---

## 18. Powiązane testy

- Tekst alternatywny
- Wystarczający kontrast
- Zmiana rozmiaru tekstu
- Dopasowanie do szerokości ekranu
- Wykres
- Wizualizacja danych
- Galeria obrazów

---