---
id: test-lista-aktualnosci
title: Scenariusz testu - Lista aktualności
sidebar_label: Lista aktualności
sidebar_position: 113
description: Scenariusz testu sprawdzającego, czy użytkownik może odnaleźć, przeglądać i wybierać aktualności w sposób przewidywalny, zrozumiały i dostępny.
keywords: [ocena zgodności,obiekt,profil rozszerzony,lista aktualności]
tags: [ocena zgodności,obiekt,profil rozszerzony,lista aktualności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-113**

---

## 2. Nazwa testu

**Lista aktualności**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może skutecznie:

- przeglądać listę aktualności,
- rozpoznawać poszczególne publikacje,
- oceniać ich znaczenie na podstawie informacji dostępnych na liście,
- korzystać z filtrów, sortowania i paginacji (jeżeli występują),
- przechodzić do szczegółów wybranej aktualności.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 2.1.1 Klawiatura
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 3.2.2 Podczas wprowadzania danych
- 4.1.2 Nazwa, rola, wartość

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron prezentujących aktualności,
- komunikatów,
- wiadomości,
- ogłoszeń,
- wpisów publikowanych w serwisach internetowych i BIP.

---

## 7. Oczekiwany wynik

Użytkownik może:

- rozpoznać, że znajduje się na stronie prezentującej listę aktualności,
- zrozumieć strukturę listy,
- rozpoznać temat poszczególnych publikacji,
- ocenić ich znaczenie bez konieczności otwierania każdej pozycji,
- przejść do szczegółów wybranej aktualności,
- korzystać z filtrów, sortowania i paginacji bez utraty orientacji.

Każda pozycja listy zawiera co najmniej:

- tytuł,
- datę publikacji,
- krótkie wprowadzenie lub zajawkę.

---

## 8. Dlaczego to jest ważne

Lista aktualności jest jednym z najczęściej odwiedzanych typów stron.

Jeżeli użytkownik nie może szybko ocenić, które informacje są dla niego istotne, musi otwierać kolejne publikacje metodą prób i błędów, co znacząco utrudnia korzystanie z serwisu.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z trudnościami poznawczymi,
- wszystkich użytkowników korzystających z urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1. Otwórz stronę listy aktualności

Sprawdź, czy strona posiada jednoznaczny tytuł i nagłówek identyfikujący jej przeznaczenie.

### Krok 2. Oceń strukturę listy

Sprawdź, czy użytkownik może rozpoznać poszczególne elementy listy oraz ich kolejność.

### Krok 3. Oceń informacje prezentowane przy każdej aktualności

Sprawdź, czy każda pozycja zawiera:

- tytuł,
- datę publikacji,
- krótką zajawkę lub opis.

### Krok 4. Sprawdź możliwość przejścia do szczegółu

Zweryfikuj, czy użytkownik może łatwo przejść do pełnej treści aktualności.

### Krok 5. Sprawdź obsługę klawiaturą

Zweryfikuj możliwość przeglądania listy i aktywowania odnośników bez użycia myszy.

### Krok 6. Sprawdź filtry i sortowanie (jeżeli występują)

Zweryfikuj, czy:

- posiadają etykiety,
- działają z klawiaturą,
- nie powodują nieoczekiwanych zmian kontekstu,
- użytkownik otrzymuje informację o wynikach filtrowania.

### Krok 7. Sprawdź paginację (jeżeli występuje)

Zweryfikuj, czy użytkownik może łatwo przechodzić pomiędzy kolejnymi stronami wyników.

### Krok 8. Sprawdź komunikat o braku wyników

Jeżeli lista może być pusta, sprawdź, czy użytkownik otrzymuje czytelny komunikat wyjaśniający sytuację.

---

## 11. Kryteria oceny wyniku

### Spełnione

- lista jest zrozumiała i uporządkowana,
- każda aktualność zawiera podstawowe informacje identyfikujące,
- użytkownik może przejść do szczegółów publikacji,
- filtry i paginacja działają prawidłowo,
- nie występują bariery utrudniające przeglądanie zbioru.

### Częściowo spełnione

- występują pojedyncze problemy,
- część informacji jest niepełna lub niejednoznaczna,
- niektóre funkcje utrudniają korzystanie.

### Niespełnione

- użytkownik nie może skutecznie przeglądać listy,
- nie może ocenić znaczenia publikacji,
- nie może przejść do szczegółów lub korzystać z funkcji strony.

---

## 12. Typowe niezgodności

- brak dat publikacji,
- brak zajawki aktualności,
- wiele odnośników „Czytaj więcej” bez jednoznacznego celu,
- nieczytelna struktura listy,
- brak możliwości obsługi klawiaturą,
- filtry bez etykiet,
- paginacja nieinformująca o aktualnej stronie,
- brak komunikatu o pustych wynikach.

---

## 13. Dobre praktyki

- stosowanie jednoznacznych tytułów aktualności,
- prezentowanie dat publikacji,
- stosowanie krótkich zajawek,
- logiczna kolejność publikacji,
- czytelna paginacja,
- możliwość filtrowania i sortowania wyników.

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Lista aktualności nie zapewnia wystarczających informacji pozwalających użytkownikowi ocenić znaczenie publikacji przed przejściem do szczegółów. Część pozycji nie zawiera dat publikacji lub krótkiego opisu. Dodatkowo odnośniki prowadzące do pełnej treści nie są jednoznacznie opisane.

---

## 17. Rekomendacje naprawcze

- uzupełnić metadane publikacji,
- zapewnić jednoznaczne tytuły i odnośniki,
- uporządkować strukturę listy,
- poprawić dostępność filtrów i paginacji,
- zapewnić obsługę klawiaturą wszystkich funkcji strony.

---

## 18. Powiązane testy

- testID-004 Nagłówki
- testID-005 Punkty orientacyjne
- testID-009 Cel łącza
- testID-015 Dostęp z klawiatury
- testID-026 Formularz
- testID-112 BIP — karta informacji publicznej
- testID-114 Artykuł aktualności

---
