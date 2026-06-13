---
id: test-strona-wielojezyczna
title: Karta testu — Strona wielojęzyczna
sidebar_label: Strona wielojęzyczna
sidebar_position: 129
description: Scenariusz testu sprawdzającego, czy użytkownik może korzystać z wielojęzycznego serwisu w sposób przewidywalny, zrozumiały i dostępny, niezależnie od wybranego języka. 
keywords: [wielojęzyczność, język strony, język fragmentu, lang, hreflang, tłumaczenia, dostępność cyfrowa]
tags: [test dostępności, wielojęzyczność, WCAG, komunikacja, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-129**

---

## 2. Nazwa testu

**Strona wielojęzyczna**

---

## 3. Profil stosowania testu

**ACR-EXT**

---

## 4. Opis testu

Test sprawdza, czy serwis wielojęzyczny umożliwia użytkownikowi łatwe przełączanie języków, zapewnia poprawne oznaczenie języka strony i jej fragmentów, zachowuje spójność interfejsu oraz zapewnia równoważny dostęp do kluczowych informacji i funkcji. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.1.1 Klawiatura
- 2.4.4 Cel łącza
- 3.1.1 Język strony
- 3.1.2 Język części
- 3.2.3 Spójna nawigacja
- 3.2.4 Spójna identyfikacja
- 4.1.2 Nazwa, rola, wartość

### Powiązane wymagania

- poprawne oznaczanie języka treści,
- dostępność selektora języka,
- spójność wersji językowych,
- oznaczanie języka dokumentów i multimediów.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- wielojęzycznych serwisów internetowych,
- portali administracji publicznej,
- stron posiadających wersje obcojęzyczne,
- serwisów zawierających treści w więcej niż jednym języku.

---

## 7. Oczekiwany wynik

Użytkownik może:

- rozpoznać aktualną wersję językową,
- łatwo przełączyć język serwisu,
- korzystać z interfejsu w wybranym języku,
- otrzymywać komunikaty w wybranym języku,
- korzystać z kluczowych funkcji niezależnie od wersji językowej.

---

## 8. Dlaczego to jest ważne

Nieprawidłowo przygotowane serwisy wielojęzyczne powodują dezorientację użytkowników, błędny odczyt treści przez technologie wspomagające oraz utrudniają dostęp do informacji osobom nieposługującym się językiem podstawowym serwisu.

---

## 9. Kogo to dotyczy

Szczególnie:

- cudzoziemców,
- osób posługujących się językami mniejszości,
- osób korzystających z czytników ekranu,
- osób korzystających z tłumaczeń maszynowych,
- użytkowników odwiedzających serwis po raz pierwszy.

---

## 10. Sposób testowania

### Krok 1. Weryfikacja selektora języka

Sprawdź, czy:

- użytkownik może łatwo odnaleźć selektor języka,
- selektor działa z klawiatury,
- nazwy języków są jednoznaczne,
- nie zastosowano wyłącznie flag jako oznaczenia języków. 

### Krok 2. Przełączanie wersji językowych

Sprawdź, czy:

- przełączenie języka działa poprawnie,
- użytkownik trafia do odpowiednika aktualnej strony,
- nie następuje nieoczekiwane przeniesienie do strony głównej lub innej sekcji. 

### Krok 3. Język strony

Sprawdź, czy:

- język strony odpowiada rzeczywistej treści,
- czytnik ekranu odczytuje treść poprawnie,
- nie występują błędy wymowy wynikające z nieprawidłowego oznaczenia języka. 

### Krok 4. Język fragmentów

Sprawdź, czy:

- fragmenty w innym języku są poprawnie oznaczone,
- czytnik ekranu zmienia wymowę dla takich fragmentów,
- użytkownik może rozpoznać zmianę języka treści. 

### Krok 5. Spójność interfejsu

Sprawdź, czy w wybranej wersji językowej przetłumaczono:

- menu,
- przyciski,
- etykiety formularzy,
- komunikaty błędów,
- komunikaty systemowe,
- opisy elementów interaktywnych.

### Krok 6. Kluczowe strony użytkowe

Sprawdź, czy w danej wersji językowej dostępne są:

- strona kontaktowa,
- deklaracja dostępności,
- polityka prywatności,
- najważniejsze usługi i informacje. 

### Krok 7. Dokumenty i multimedia

Sprawdź, czy:

- dokumenty w innym języku są oznaczone,
- multimedia posiadają informacje o języku,
- użytkownik wie, w jakim języku dostępna jest dana treść.

### Krok 8. Jawność braków

Jeżeli część treści nie została przetłumaczona:

sprawdź, czy użytkownik otrzymuje jednoznaczną informację o ograniczonym zakresie wersji językowej. 

---

## 11. Kryteria oceny wyniku

### Spełnione

Wersje językowe są spójne, poprawnie oznaczone i umożliwiają korzystanie z kluczowych funkcji serwisu.

### Częściowo spełnione

Wersje językowe są dostępne, ale występują ograniczenia lub niespójności.

### Niespełnione

Serwis nie zapewnia skutecznego dostępu do treści lub funkcji w deklarowanych wersjach językowych.

---

## 12. Typowe niezgodności

- brak oznaczenia języka strony,
- błędne oznaczenie języka strony,
- nieoznaczone fragmenty w innym języku,
- nieprzetłumaczone elementy interfejsu,
- komunikaty błędów w innym języku,
- selektor języka oparty wyłącznie na flagach,
- brak kluczowych stron w wersji językowej,
- brak informacji o ograniczonym zakresie tłumaczenia,
- dokumenty w innym języku bez oznaczenia. 

---

## 13. Dobre praktyki

- stosowanie nazw języków w językach własnych,
- zapewnienie odpowiedników stron pomiędzy wersjami językowymi,
- utrzymywanie spójnej struktury serwisu,
- oznaczanie języka dokumentów i multimediów,
- informowanie o brakach tłumaczeń,
- regularna synchronizacja treści pomiędzy wersjami językowymi. 

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

> Serwis udostępnia wersje językowe, jednak część elementów interfejsu, komunikatów lub treści nie została przetłumaczona albo nie została prawidłowo oznaczona językowo. Może to powodować trudności w korzystaniu z serwisu, szczególnie przez osoby korzystające z technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- poprawić oznaczenia języka strony i fragmentów,
- zapewnić pełne tłumaczenie interfejsu użytkownika,
- poprawić dostępność selektora języka,
- zapewnić odpowiedniki kluczowych stron,
- oznaczać język dokumentów i multimediów,
- wdrożyć procedurę synchronizacji wersji językowych.

---

## 18. Powiązane testy

- testID-123 Strona kontaktowa
- testID-110 Deklaracja dostępności
- testID-126 Polityka prywatności
- testID-128 Pliki do pobrania
- testID-088 Nietypowe słowa
- testID-089 Skróty
- testID-124 Informacja o podmiocie w PJM
- testID-125 Informacja o podmiocie w ETR

---