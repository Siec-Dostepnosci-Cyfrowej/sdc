---
id: test-karuzela
title: Karta testu — Karuzela
sidebar_label: Karuzela
sidebar_position: 58
description: Scenariusz testu sprawdzającego, czy komponent karuzeli zapewnia użytkownikowi pełną kontrolę nad zmianą slajdów, jest dostępny z klawiatury oraz poprawnie współpracuje z technologiami wspomagającymi.
keywords: [karuzela, slider, carousel, slajdy, dostępność cyfrowa]
tags: [test dostępności, komponenty, karuzela, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. ID testu

**testID-058**

---

## 2. Nazwa testu

**Karuzela**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy karuzela (slider) jest dostępna dla użytkowników korzystających z klawiatury i technologii wspomagających oraz czy użytkownik zachowuje kontrolę nad zmianą prezentowanych treści.

### Co oznacza „karuzela”?

Karuzela jest komponentem umożliwiającym prezentowanie wielu elementów w tym samym obszarze strony.

Przykłady:

- galerie zdjęć,
- prezentacje aktualności,
- prezentacje wydarzeń,
- rekomendowane usługi,
- powiązane obiekty.

### Jak powinna działać dostępna karuzela?

Użytkownik powinien móc:

- rozpoznać komponent,
- ustalić liczbę slajdów,
- określić aktualnie wyświetlany slajd,
- samodzielnie zmieniać slajdy,
- zatrzymać automatyczną zmianę treści,
- korzystać z komponentu wyłącznie przy użyciu klawiatury.

Karuzela nie powinna wymuszać określonego tempa korzystania z treści.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **1.4.3 Kontrast (minimalny) (AA)**
- **1.4.11 Kontrast elementów nietekstowych (AA)**
- **2.1.1 Klawiatura (A)**
- **2.1.2 Bez pułapki na klawiaturę (A)**
- **2.2.2 Pauza, zatrzymanie, ukrycie (A)**
- **2.4.3 Kolejność fokusu (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.7 Widoczny fokus (AA)**
- **3.2.2 Podczas wprowadzania danych (A)**
- **3.2.3 Konsekwentna nawigacja (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

Odpowiednie wymagania odpowiadające wymienionym kryteriom WCAG.


---

## 6. Zastosowanie do treści

Test stosuje się do:

- galerii zdjęć,
- sliderów aktualności,
- sliderów wydarzeń,
- karuzel kart,
- komponentów rekomendacji,
- komponentów prezentujących wiele elementów w jednym obszarze.

### Wyjątki

Jeżeli strona nie zawiera karuzeli:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodną uznaje się karuzelę, dla której:

- użytkownik może przełączać slajdy z klawiatury,
- wszystkie kontrolki posiadają dostępne nazwy,
- widoczny jest wskaźnik fokusu,
- użytkownik może zatrzymać automatyczną zmianę slajdów,
- zmiana slajdu nie powoduje nieoczekiwanej zmiany kontekstu,
- użytkownik może określić aktualną pozycję w karuzeli,
- karuzela jest rozpoznawalna przez technologie wspomagające,
- nie występują pułapki klawiaturowe.

---

## 8. Dlaczego to jest ważne

Karuzele należą do najczęściej spotykanych źródeł problemów z dostępnością.

Nieprawidłowo przygotowana karuzela może:

- ukrywać informacje,
- wymuszać określone tempo czytania,
- utrudniać obsługę klawiaturą,
- powodować utratę orientacji,
- dezorientować użytkowników czytników ekranu.

W rezultacie część użytkowników może nie mieć dostępu do wszystkich prezentowanych treści.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób z zaburzeniami koncentracji,
- osób starszych,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj karuzelę na stronie.

### Krok 2

Sprawdź, czy karuzela zmienia slajdy automatycznie.

### Krok 3

Jeżeli występuje automatyczna zmiana slajdów, sprawdź możliwość:

- zatrzymania,
- wstrzymania,
- wznowienia działania.

### Krok 4

Poruszaj się po komponencie przy użyciu klawisza Tab.

### Krok 5

Sprawdź, czy wszystkie kontrolki są dostępne z klawiatury:

- poprzedni slajd,
- następny slajd,
- wybór konkretnego slajdu,
- pauza/wznów (jeżeli występuje).

### Krok 6

Sprawdź widoczność fokusu.

### Krok 7

Sprawdź, czy można opuścić karuzelę bez napotkania pułapki klawiaturowej.

### Krok 8

Uruchom czytnik ekranu.

### Krok 9

Sprawdź, czy użytkownik otrzymuje informacje o:

- nazwie karuzeli,
- aktualnym slajdzie,
- liczbie slajdów,
- funkcjach kontrolek.

### Krok 10

Sprawdź, czy zmiana slajdu nie powoduje nieoczekiwanego przeniesienia fokusu.

### Krok 11

Sprawdź, czy istnieje alternatywny sposób dotarcia do wszystkich prezentowanych treści.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Karuzela jest w pełni dostępna dla użytkowników klawiatury i technologii wspomagających oraz zapewnia użytkownikowi kontrolę nad zmianą treści.

### Wynik częściowo pozytywny

Karuzela działa zasadniczo poprawnie, jednak występują problemy utrudniające korzystanie z części funkcji.

### Wynik negatywny

Karuzela uniemożliwia lub znacząco utrudnia dostęp do prezentowanych treści.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- automatyczna zmiana slajdów bez możliwości zatrzymania,
- brak obsługi klawiaturą,
- pułapka klawiaturowa,
- niewidoczny fokus,
- przyciski bez nazw,
- brak informacji o aktualnym slajdzie,
- nieoczekiwane przenoszenie fokusu,
- istotne informacje dostępne wyłącznie w karuzeli,
- brak alternatywnego dostępu do wszystkich elementów.

---

## 13. Dobre praktyki

- Domyślne wyłączenie automatycznej rotacji.
- Wyraźne oznaczenie kontrolek.
- Informowanie użytkownika o aktualnym slajdzie.
- Udostępnienie przycisku „Zobacz wszystkie”.
- Ograniczenie stosowania karuzel do sytuacji uzasadnionych funkcjonalnie.
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

> Karuzela nie zapewnia użytkownikowi pełnej kontroli nad zmianą prezentowanych treści. Automatyczna zmiana slajdów nie może zostać zatrzymana lub wstrzymana.

lub

> Komponent karuzeli nie jest w pełni dostępny z klawiatury. Użytkownik nie może obsłużyć wszystkich funkcji bez użycia urządzenia wskazującego.

---

## 17. Rekomendacje naprawcze

- Zapewnić możliwość zatrzymania automatycznej rotacji.
- Udostępnić wszystkie funkcje z klawiatury.
- Nadać kontrolkom jednoznaczne nazwy.
- Dodać informację o aktualnym slajdzie.
- Zapewnić widoczny fokus.
- Wyeliminować pułapki klawiaturowe.
- Udostępnić alternatywną listę wszystkich elementów karuzeli.
- Rozważyć zastąpienie karuzeli zwykłą listą lub siatką elementów.

---

## 18. Powiązane testy

- Lista kart
- Karta
- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Widoczność fokusu
- Ruch, miganie i błyski
- Odczyt struktury przez czytnik ekranu
- Tekst alternatywny
---