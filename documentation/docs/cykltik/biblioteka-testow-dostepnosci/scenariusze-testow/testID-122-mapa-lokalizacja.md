---
id: test-mapa-lokalizacja
title: Scenariusz testu - Mapa dojazdu / Lokalizacja
sidebar_label: Mapa dojazdu / Lokalizacja
sidebar_position: 122
description: Scenariusz testu sprawdzającego, czy informacja o lokalizacji jest dostępna dla wszystkich użytkowników oraz czy mapa nie stanowi jedynego źródła informacji o sposobie dotarcia do miejsca.
keywords: [mapa, lokalizacja, dojazd, dojście, mapa interaktywna, WCAG, dostępność cyfrowa]
tags: [test dostępności, mapa, lokalizacja, komponenty, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-122**

---

## 2. Nazwa testu

**Mapa dojazdu / Lokalizacja**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może uzyskać informacje o lokalizacji, sposobie dojścia lub dojazdu do miejsca bez konieczności korzystania z interaktywnej mapy.

Test obejmuje:

- mapy osadzane z usług zewnętrznych,
- mapy publikowane w aplikacjach własnych,
- mapy statyczne,
- strony kontaktowe,
- strony lokalizacji,
- strony instytucji i usług zawierające informacje o położeniu miejsca. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.1.1 Treści nietekstowe
- 1.3.1 Informacje i relacje
- 1.4.3 Kontrast (minimalny)
- 2.1.1 Klawiatura
- 2.1.2 Bez pułapki klawiaturowej
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.7 Widoczny fokus
- 3.2.2 Zmiana podczas wprowadzania danych
- 3.2.3 Spójna nawigacja
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

- 9.1
- 9.2
- 9.3
- 9.4

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron kontaktowych,
- stron jednostek organizacyjnych,
- stron usług zawierających informacje o lokalizacji,
- stron obiektów,
- stron wydarzeń,
- stron zawierających mapy lub informacje o sposobie dotarcia do miejsca.

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- ustalić lokalizację miejsca,
- poznać sposób dojścia lub dojazdu,
- uzyskać informacje o dostępności wejścia,
- skorzystać z informacji bez używania mapy,
- skorzystać z mapy przy użyciu klawiatury i technologii wspomagających.

---

## 8. Dlaczego to jest ważne

Mapy internetowe są często niedostępne lub trudne w obsłudze dla osób korzystających z czytników ekranu, klawiatury lub urządzeń mobilnych.

Dlatego mapa nie może być jedynym sposobem przekazywania informacji o lokalizacji.

Użytkownik powinien móc dotrzeć do miejsca na podstawie informacji tekstowych, nawet jeśli nie może korzystać z mapy. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z urządzeń mobilnych,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Weryfikacja informacji tekstowej

Sprawdź, czy oprócz mapy dostępne są informacje tekstowe zawierające co najmniej:

- adres,
- opis dojścia lub dojazdu,
- informacje o wejściu,
- informacje o parkingu (jeżeli dotyczy),
- informacje o dostępności wejścia lub barierach (jeżeli dotyczy). 

### Krok 2. Sprawdzenie zależności od mapy

Sprawdź, czy użytkownik może ustalić lokalizację bez analizowania mapy.

Negatywnym wynikiem są komunikaty typu:

- „zobacz na mapie”,
- „lokalizacja przedstawiona jest na mapie”,

bez dodatkowego opisu.

### Krok 3. Sprawdzenie linku do map zewnętrznych

Zweryfikuj, czy dostępny jest jednoznacznie opisany odnośnik umożliwiający otwarcie lokalizacji w zewnętrznej aplikacji mapowej. 

### Krok 4. Sprawdzenie dostępności mapy

Jeżeli mapa jest osadzona:

sprawdź, czy:

- posiada jednoznaczny tytuł,
- nie przechwytuje fokusu,
- nie tworzy pułapki klawiaturowej,
- można ją ominąć podczas nawigacji klawiaturą. 

### Krok 5. Sprawdzenie kolejności fokusu

Zweryfikuj, czy:

- fokus przechodzi logicznie przez komponent,
- mapa nie zakłóca nawigacji po stronie,
- użytkownik może przejść dalej bez konieczności interakcji z mapą.

### Krok 6. Test czytnikiem ekranu

Sprawdź, czy:

- opis lokalizacji jest czytelny,
- informacje o dojeździe są zrozumiałe,
- mapa posiada poprawnie rozpoznawalną nazwę.

### Krok 7. Test mobilny

Sprawdź, czy:

- komponent jest czytelny na małym ekranie,
- nie wymaga przewijania poziomego,
- przyciski i odnośniki są łatwe do użycia.

---

## 11. Kryteria oceny wyniku

### Spełnione

Lokalizacja może zostać ustalona bez korzystania z mapy, a mapa nie powoduje problemów dostępności.

### Częściowo spełnione

Informacje są dostępne, ale występują utrudnienia wpływające na komfort korzystania.

### Niespełnione

Mapa jest jedynym źródłem informacji lub powoduje istotne bariery dostępności.

---

## 12. Typowe niezgodności

- mapa jako jedyne źródło informacji o lokalizacji,
- brak adresu w postaci tekstowej,
- brak opisu dojścia lub dojazdu,
- brak informacji o dostępności wejścia,
- iframe bez tytułu,
- mapa przechwytująca fokus,
- pułapka klawiaturowa,
- niejednoznaczny link do mapy,
- instrukcje odwołujące się wyłącznie do elementów wizualnych („kliknij pinezkę”, „patrz na mapę”). 

---

## 13. Dobre praktyki

- najpierw prezentować opis tekstowy, następnie mapę,
- podawać pełny adres,
- opisywać dojście i dojazd,
- uwzględniać informacje o dostępności wejścia,
- udostępniać link do map zewnętrznych,
- stosować mechanizm „Załaduj mapę” dla usług zewnętrznych,
- umożliwiać korzystanie z informacji bez uruchamiania mapy. 

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

> Informacja o lokalizacji została przedstawiona wyłącznie za pomocą interaktywnej mapy. Nie zapewniono kompletnego opisu tekstowego umożliwiającego samodzielne ustalenie sposobu dojścia lub dojazdu. Problem utrudnia lub uniemożliwia korzystanie z informacji osobom niewidomym oraz użytkownikom technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- dodać pełny adres w postaci tekstowej,
- dodać opis dojścia i dojazdu,
- opisać dostępność wejścia oraz parkingu,
- zapewnić jednoznacznie opisany link do map zewnętrznych,
- nadać mapie poprawny tytuł,
- usunąć problemy z obsługą klawiaturą,
- zapewnić możliwość korzystania z informacji bez używania mapy.

---

## 18. Powiązane testy

- testID-004 Nagłówki
- testID-009 Tekst alternatywny
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu
- testID-043 Cel łącza
- testID-044 Widoczność fokusu
- testID-112 BIP — karta informacji publicznej
- testID-116 Karta usługi
- testID-114 Artykuł / komunikat / wpis

---