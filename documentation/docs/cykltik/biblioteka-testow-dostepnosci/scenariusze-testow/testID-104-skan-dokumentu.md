---
id: test-skan-dokumentu
title: Scenariusz testu - Skan dokumentu
sidebar_label: Skan dokumentu
sidebar_position: 104
description: Scenariusz testu sprawdzającego, czy dokument udostępniony w postaci skanu jest dostępny dla użytkowników technologii wspomagających lub czy zapewniono alternatywną formę dostępu do jego treści.
keywords: [skan dokumentu, OCR, dostępność dokumentów, dokument zeskanowany, PDF, WCAG, dostępność cyfrowa]
tags: [test dostępności, dokumenty, skan, OCR, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

# 1. Identyfikator testu

**testID-104**

# 2. Nazwa testu

**Skan dokumentu**

# 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

# 4. Opis testu

Test sprawdza, czy dokument opublikowany w postaci skanu umożliwia dostęp do zawartej w nim treści osobom korzystającym z technologii wspomagających.

Celem testu jest ustalenie, czy:

- dokument zawiera możliwą do odczytania warstwę tekstową,
- zastosowano rozpoznawanie tekstu (OCR),
- użytkownik może kopiować i wyszukiwać treść,
- dokument może zostać odczytany przez czytnik ekranu,
- zapewniono alternatywną formę dostępu do informacji, jeżeli dokument nie jest dostępny.

# 5. Mapowanie do standardów

## WCAG 2.1 / WCAG 2.2

- 1.1.1 Treści nietekstowe
- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 4.1.2 Nazwa, rola, wartość (pośrednio)

## EN 301 549

- 10.1.1.1 Non-text Content
- 10.1.3.1 Info and Relationships
- 10.1.3.2 Meaningful Sequence

# 6. Zastosowanie do treści

Test stosuje się do:

- zeskanowanych dokumentów PDF,
- zeskanowanych załączników publikowanych w BIP,
- zeskanowanych decyzji administracyjnych,
- zeskanowanych formularzy,
- zeskanowanych dokumentów historycznych,
- innych dokumentów opublikowanych jako obrazy stron.

# 7. Oczekiwany wynik

Treść dokumentu jest dostępna dla użytkowników technologii wspomagających albo organizacja zapewniła skuteczną alternatywną formę dostępu do informacji.

# 8. Dlaczego to jest ważne

Skan dokumentu jest najczęściej obrazem zawierającym tekst.

Osoby korzystające z:

- czytników ekranu,
- powiększalników,
- narzędzi wyszukiwania,
- technologii wspomagających,

nie mogą odczytać informacji zapisanych wyłącznie w postaci obrazu.

Brak dostępności skanu może całkowicie uniemożliwić dostęp do informacji publicznej.

# 9. Kogo to dotyczy

W szczególności:

- osób niewidomych,
- osób słabowidzących,
- osób z dysleksją,
- osób korzystających z technologii wspomagających,
- osób wykorzystujących funkcje wyszukiwania i kopiowania tekstu.

# 10. Sposób testowania

## Krok 1

Otwórz dokument.

## Krok 2

Spróbuj zaznaczyć fragment tekstu.

## Krok 3

Spróbuj skopiować zaznaczony tekst.

## Krok 4

Sprawdź, czy wyszukiwarka PDF odnajduje słowa występujące w dokumencie.

## Krok 5

Uruchom czytnik ekranu i sprawdź, czy treść dokumentu jest odczytywana.

## Krok 6

Jeżeli dokument nie jest dostępny:

- sprawdź, czy zapewniono wersję tekstową,
- sprawdź, czy wskazano sposób uzyskania dostępnej wersji dokumentu.

# 11. Kryteria oceny wyniku

## Spełnia

Dokument zawiera dostępną warstwę tekstową umożliwiającą odczyt treści przez użytkowników i technologie wspomagające.

## Częściowo spełnia

Dokument zawiera warstwę tekstową, jednak występują liczne błędy OCR lub część treści pozostaje niedostępna.

## Nie spełnia

Dokument jest wyłącznie obrazem i nie zapewniono skutecznej alternatywnej formy dostępu do informacji.

## Nie dotyczy

Dokument nie jest skanem.

# 12. Typowe niezgodności

- cały dokument jest pojedynczym obrazem,
- brak warstwy tekstowej,
- błędnie rozpoznany tekst OCR,
- nie można zaznaczyć tekstu,
- nie działa wyszukiwanie,
- czytnik ekranu nie odczytuje treści,
- brak dostępnej alternatywy.

# 13. Dobre praktyki

- publikowanie dokumentów źródłowych zamiast skanów,
- stosowanie OCR wysokiej jakości,
- weryfikacja poprawności rozpoznanego tekstu,
- udostępnianie wersji HTML lub DOCX,
- publikowanie skanów wyłącznie wtedy, gdy jest to uzasadnione.

# 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia
- Nie dotyczy

# 15. Ustalenia

Miejsce na zapisanie:

- rodzaju dokumentu,
- zakresu problemu,
- jakości OCR,
- dostępnych alternatyw,
- innych obserwacji.

# 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Opublikowany dokument stanowi skan obrazu bez dostępnej warstwy tekstowej. Treść dokumentu nie może być odczytana przez czytniki ekranu ani przeszukiwana. Użytkownicy technologii wspomagających nie mają samodzielnego dostępu do zawartych w nim informacji.

# 17. Rekomendacje naprawcze

- opublikować dokument źródłowy,
- przeprowadzić OCR i zweryfikować jego poprawność,
- przygotować dostępną wersję PDF,
- przygotować wersję HTML lub DOCX,
- zapewnić alternatywny dostęp do treści do czasu wykonania pełnej naprawy.

# 18. Powiązane testy

- Dokument PDF
- Formularz PDF
- Dokument podpisany elektronicznie
- Tekst alternatywny
- Odczyt struktury przez czytnik ekranu
- Odczyt formularza przez czytnik ekranu
- Arkusz kalkulacyjny (CSV/XLSX)
- Deklaracja dostępności

---
