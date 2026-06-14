---
id: test-dokument-docx-odt
title: Karta testu — Dokument DOCX (ODT)
sidebar_label: Dokument DOCX (ODT)
sidebar_position: 61
description: Scenariusz testu sprawdzającego, czy dokument edytowalny DOCX lub ODT został przygotowany z wykorzystaniem mechanizmów umożliwiających jego poprawny odczyt przez technologie wspomagające.
keywords: [DOCX, ODT, dokument edytowalny, Word, LibreOffice, dostępność dokumentów, WCAG]
tags: [test dostępności, dokumenty, DOCX, ODT, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-061**

---

## 2. Nazwa testu

**Dokument DOCX (ODT)**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy dokument edytowalny został przygotowany w sposób umożliwiający jego poprawny odczyt przez technologie wspomagające oraz dalsze wykorzystanie do tworzenia dostępnych publikacji.

### Jakie dokumenty obejmuje test?

Test dotyczy dokumentów przygotowanych w formatach:

- DOCX,
- ODT,
- innych edytowalnych dokumentów tekstowych opartych na stylach i strukturze dokumentu.

### Co oznacza „dostępny dokument DOCX lub ODT”?

Dostępny dokument:

- posiada logiczną strukturę,
- wykorzystuje style nagłówków,
- umożliwia poprawną nawigację,
- zawiera tekst alternatywny dla obrazów,
- posiada dostępne tabele,
- może być odczytany przez technologie wspomagające,
- może stanowić źródło do utworzenia dostępnego PDF.

### Co sprawdza test?

Test obejmuje między innymi:

- strukturę dokumentu,
- stosowanie stylów,
- język dokumentu,
- teksty alternatywne,
- tabele,
- łącza,
- formularze,
- możliwość odczytu przez czytnik ekranu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **1.3.2 Znacząca kolejność (A)**
- **1.3.3 Właściwości zmysłowe (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **3.1.1 Język strony (A)**
- **3.3.2 Etykiety lub instrukcje (A)**

### EN 301 549

W szczególności:

- **11.8 Documents**

oraz odpowiadające wymagania WCAG stosowane do dokumentów elektronicznych.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- dokumentów urzędowych,
- regulaminów,
- zarządzeń,
- uchwał,
- raportów,
- sprawozdań,
- materiałów edukacyjnych,
- formularzy udostępnianych w DOCX lub ODT,
- dokumentów przeznaczonych do dalszej publikacji.

### Wyjątki

Nie dotyczy:

- dokumentów PDF,
- stron internetowych,
- skanów dokumentów.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się dokument DOCX lub ODT, dla którego:

- zastosowano style nagłówków,
- określono język dokumentu,
- zachowano logiczną kolejność treści,
- obrazy informacyjne posiadają tekst alternatywny,
- tabele posiadają nagłówki i poprawną strukturę,
- łącza posiadają opisowe nazwy,
- formularze posiadają etykiety i instrukcje,
- dokument może zostać odczytany przez technologie wspomagające.

---

## 8. Dlaczego to jest ważne

Dokumenty DOCX i ODT są często podstawową formą wymiany informacji oraz źródłem dla innych publikacji.

Błędy popełnione na etapie przygotowania dokumentu:

- utrudniają korzystanie z dokumentu,
- powodują problemy przy tworzeniu PDF,
- prowadzą do utrwalania niedostępności w kolejnych wersjach materiałów.

Dostępny dokument źródłowy ułatwia publikowanie dostępnych informacji w wielu formatach.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających z monitorów brajlowskich,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Otwórz dokument w programie obsługującym jego format.

### Krok 2

Sprawdź, czy dokument posiada tytuł.

### Krok 3

Sprawdź, czy określono język dokumentu.

### Krok 4

Zweryfikuj strukturę nagłówków.

Sprawdź, czy zastosowano:

- Nagłówek 1,
- Nagłówek 2,
- Nagłówek 3 itd.

a nie wyłącznie ręczne formatowanie tekstu.

### Krok 5

Sprawdź, czy kolejność treści jest logiczna.

### Krok 6

Sprawdź obrazy.

Jeżeli występują:

- zweryfikuj teksty alternatywne,
- oceń ich poprawność.

### Krok 7

Sprawdź tabele.

Zweryfikuj:

- obecność nagłówków,
- poprawność struktury danych.

### Krok 8

Sprawdź łącza.

Oceń, czy nazwy łączy są opisowe.

### Krok 9

Jeżeli dokument zawiera formularze:

- sprawdź etykiety pól,
- sprawdź instrukcje dla użytkownika.

### Krok 10

Uruchom czytnik ekranu.

### Krok 11

Oceń, czy możliwe jest:

- przeglądanie nagłówków,
- odczyt treści,
- korzystanie z tabel,
- korzystanie z formularzy.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Dokument posiada poprawną strukturę i umożliwia skuteczne korzystanie z technologii wspomagających.

### Wynik częściowo pozytywny

Występują pojedyncze problemy utrudniające korzystanie z dokumentu.

### Wynik negatywny

Dokument zawiera istotne problemy uniemożliwiające lub znacząco utrudniające korzystanie z niego.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak stylów nagłówków,
- ręczne formatowanie zamiast struktury dokumentu,
- brak oznaczenia języka,
- brak tekstów alternatywnych,
- nieopisowe łącza,
- tabele bez nagłówków,
- formularze bez etykiet,
- wykorzystanie pustych akapitów do budowania układu,
- stosowanie koloru jako jedynego sposobu przekazywania informacji.

---

## 13. Dobre praktyki

- Stosowanie stylów nagłówków.
- Tworzenie dokumentów zgodnie z zasadami dostępności już od początku pracy.
- Korzystanie z narzędzi sprawdzania dostępności.
- Stosowanie opisowych nazw łączy.
- Testowanie dokumentów przy użyciu czytnika ekranu.
- Wykorzystywanie dokumentów źródłowych do generowania dostępnych PDF.

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

> Dokument DOCX nie wykorzystuje struktury nagłówków i nie zapewnia możliwości efektywnej nawigacji przy użyciu technologii wspomagających.

lub

> Dokument zawiera obrazy bez tekstów alternatywnych oraz tabele pozbawione poprawnie zdefiniowanych nagłówków, co utrudnia dostęp do części informacji.

---

## 17. Rekomendacje naprawcze

- Zastosować style nagłówków.
- Oznaczyć język dokumentu.
- Uzupełnić teksty alternatywne.
- Poprawić strukturę tabel.
- Zastosować opisowe nazwy łączy.
- Zweryfikować dokument przy użyciu narzędzia sprawdzania dostępności.
- Przeszkolić autorów dokumentów w zakresie tworzenia dostępnych dokumentów źródłowych.

---

## 18. Powiązane testy

- Dokument PDF
- Nagłówki
- Język strony
- Tekst alternatywny
- Tabela danych
- Odczyt struktury przez czytnik ekranu
- Odczyt formularza przez czytnik ekranu
- Formularz elektroniczny
- Opisowe etykiety
---