---
id: test-pliki-do-pobrania
title: Scenariusz testu - Pliki do pobrania
sidebar_label: Pliki do pobrania
sidebar_position: 128
description: Scenariusz testu sprawdzającego, czy użytkownik może łatwo odnaleźć, zidentyfikować, ocenić i pobrać dokumenty oraz inne pliki udostępniane przez organizację. 
keywords: [pliki do pobrania, dokumenty, załączniki, PDF, DOCX, XLSX, dostępność dokumentów]
tags: [test dostępności, dokumenty, pliki, załączniki, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-128**

---

## 2. Nazwa testu

**Pliki do pobrania**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może skutecznie odnaleźć, rozpoznać i pobrać dokumenty udostępniane przez organizację oraz czy przed pobraniem otrzymuje wystarczające informacje pozwalające ocenić zawartość, format, rozmiar i przydatność pliku. Test obejmuje również dostępność alternatywnych wersji dokumentów oraz sposób prezentacji list plików. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.1.1 Treści nietekstowe
- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 1.4.3 Kontrast (minimalny)
- 2.1.1 Klawiatura
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.1.1 Język strony
- 4.1.2 Nazwa, rola, wartość

### Powiązane wymagania

- dostępność dokumentów elektronicznych,
- publikowanie załączników,
- dostępność informacji publicznej.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron „Do pobrania”,
- repozytoriów dokumentów,
- list załączników,
- stron usług zawierających formularze do pobrania,
- stron BIP zawierających dokumenty,
- stron projektów i programów udostępniających pliki.

---

## 7. Oczekiwany wynik

Użytkownik może:

- odnaleźć właściwy dokument,
- zrozumieć jego zawartość przed pobraniem,
- poznać format i rozmiar pliku,
- ocenić aktualność dokumentu,
- pobrać plik bez barier,
- skorzystać z alternatywnej wersji dokumentu, jeśli jest potrzebna.

---

## 8. Dlaczego to jest ważne

Dokumenty publikowane do pobrania często zawierają informacje niezbędne do załatwienia sprawy, realizacji obowiązku lub skorzystania z usługi.

Brak informacji o pliku, nieczytelne nazwy dokumentów lub publikowanie niedostępnych plików może skutecznie uniemożliwić użytkownikowi realizację celu. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- użytkowników urządzeń mobilnych,
- osób korzystających z wolnego łącza internetowego,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Identyfikacja dokumentów

Sprawdź, czy nazwy dokumentów:

- jednoznacznie opisują ich zawartość,
- nie składają się wyłącznie z nazw technicznych,
- pozwalają zrozumieć cel dokumentu przed pobraniem. 

### Krok 2. Metadane plików

Sprawdź, czy przy dokumentach podano:

- format pliku (PDF, DOCX, XLSX itp.),
- rozmiar pliku,
- datę publikacji lub aktualizacji.

Jeżeli dokument jest szczególnie istotny, zalecane jest również podanie krótkiego opisu.

### Krok 3. Struktura listy dokumentów

Sprawdź, czy:

- dokumenty są prezentowane w logiczny sposób,
- większe zbiory są grupowane w kategorie,
- użytkownik może łatwo odnaleźć potrzebny dokument.

### Krok 4. Linki do pobrania

Sprawdź, czy:

- cele odnośników są jednoznaczne,
- linki można obsłużyć klawiaturą,
- fokus jest widoczny,
- pobranie nie wymaga wykonywania dodatkowych nieoczekiwanych działań. 

### Krok 5. Alternatywy dla dokumentów

Sprawdź, czy:

- dokumenty kluczowe dla realizacji usługi posiadają dostępną alternatywę,
- skany dokumentów posiadają wersję tekstową lub inną dostępną postać,
- użytkownik otrzymuje informację o możliwości uzyskania dostępnej wersji. 

### Krok 6. Dostępność dokumentów

Dla wybranych plików przeprowadź odpowiednie testy:

- testID-104 Skan dokumentu,
- testID-105 Dokument podpisany elektronicznie,
- testID-109 Arkusz kalkulacyjny (CSV/XLSX),
- testID-120 Formularz PDF.

### Krok 7. Wyszukiwanie i filtrowanie

Jeżeli strona zawiera wyszukiwarkę lub filtry:

sprawdź, czy:

- są dostępne z klawiatury,
- posiadają etykiety,
- użytkownik otrzymuje informację o liczbie wyników,
- zmiana wyników jest przewidywalna. 

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może łatwo odnaleźć, ocenić i pobrać dokumenty oraz uzyskać informacje o ich dostępności.

### Częściowo spełnione

Dokumenty są dostępne, ale występują utrudnienia związane z identyfikacją, organizacją lub dostępnością plików.

### Niespełnione

Użytkownik nie może skutecznie ustalić zawartości dokumentów, pobrać ich lub skorzystać z nich w dostępnej formie.

---

## 12. Typowe niezgodności

- nazwy plików typu „zalacznik_3_final.pdf”,
- brak informacji o formacie pliku,
- brak informacji o rozmiarze pliku,
- brak daty publikacji lub aktualizacji,
- publikowanie skanów bez alternatywy,
- brak informacji o dostępnej wersji dokumentu,
- niejednoznaczne linki „Pobierz”,
- nieuporządkowane listy dokumentów,
- niedziałające linki do plików. 

---

## 13. Dobre praktyki

- publikowanie opisowych nazw dokumentów,
- podawanie formatu, rozmiaru i daty,
- grupowanie dokumentów tematycznie,
- publikowanie wersji HTML dla najważniejszych informacji,
- zapewnianie alternatyw dla skanów,
- stosowanie jednolitego sposobu prezentacji dokumentów,
- regularne przeglądanie i aktualizowanie repozytorium plików. 

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

> Na stronie publikowane są dokumenty do pobrania bez wystarczających informacji pozwalających użytkownikowi ocenić ich zawartość i przydatność przed pobraniem. Część dokumentów nie posiada informacji o formacie, rozmiarze lub dacie aktualizacji, a niektóre pliki nie są dostępne w alternatywnej, dostępnej postaci.

---

## 17. Rekomendacje naprawcze

- uzupełnić metadane dokumentów,
- stosować opisowe nazwy plików,
- zapewnić alternatywy dla skanów i dokumentów niedostępnych,
- uporządkować strukturę list dokumentów,
- poprawić dostępność wyszukiwarki i filtrów,
- wdrożyć regularny przegląd publikowanych plików.

---

## 18. Powiązane testy

- testID-104 Skan dokumentu
- testID-105 Dokument podpisany elektronicznie
- testID-109 Arkusz kalkulacyjny (CSV/XLSX)
- testID-120 Formularz PDF
- testID-112 BIP — karta informacji publicznej
- testID-115 Katalog usług
- testID-116 Karta usługi
- testID-114 Artykuł / komunikat / wpis

---