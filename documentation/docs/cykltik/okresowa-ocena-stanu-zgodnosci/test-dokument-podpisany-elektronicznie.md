---
id: test-dokument-podpisany-elektronicznie
title: Karta testu — Dokument podpisany elektronicznie
sidebar_label: Dokument podpisany elektronicznie
sidebar_position: 108
description: Scenariusz testu sprawdzającego, czy zastosowanie podpisu elektronicznego nie ogranicza dostępności dokumentu oraz czy użytkownik może odczytać i wykorzystać jego treść przy użyciu technologii wspomagających.
keywords: [podpis elektroniczny, podpis kwalifikowany, dokument elektroniczny, PDF, dostępność dokumentów, WCAG]
tags: [test dostępności, dokumenty, podpis elektroniczny, PDF, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
--------------------

# 1. Identyfikator testu

**testID-108**

# 2. Nazwa testu

Dokument podpisany elektronicznie

# 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **nie**,
- profil pogłębiony: **tak**.

# 4. Opis testu

Test sprawdza, czy zastosowanie podpisu elektronicznego nie powoduje utraty dostępności dokumentu oraz czy użytkownik może odczytać, przeszukiwać i wykorzystywać treść dokumentu po jego podpisaniu.

Celem testu jest ustalenie, czy:

* dokument zachowuje dostępność po podpisaniu,
* podpis nie powoduje zamiany dokumentu na obraz,
* zachowana została struktura dokumentu,
* zachowana została możliwość odczytu przez technologie wspomagające,
* użytkownik ma dostęp do treści dokumentu niezależnie od informacji o podpisie.

# 5. Mapowanie do standardów

## WCAG 2.1 / WCAG 2.2

* 1.1.1 Treści nietekstowe
* 1.3.1 Informacje i relacje
* 1.3.2 Znacząca kolejność
* 2.4.6 Nagłówki i etykiety
* 4.1.2 Nazwa, rola, wartość

## EN 301 549

* 10.1.1.1 Non-text Content
* 10.1.3.1 Info and Relationships
* 10.1.3.2 Meaningful Sequence
* 10.4.1.2 Name, Role, Value

# 6. Zastosowanie do treści

Test stosuje się do:

* dokumentów PDF podpisanych kwalifikowanym podpisem elektronicznym,
* dokumentów podpisanych podpisem zaufanym,
* dokumentów podpisanych podpisem osobistym,
* dokumentów zawierających wizualizację podpisu,
* dokumentów urzędowych publikowanych po podpisaniu.

# 7. Oczekiwany wynik

Użytkownik może samodzielnie odczytać i wykorzystać treść dokumentu po jego podpisaniu.

Podpis elektroniczny nie powoduje utraty dostępności dokumentu.

# 8. Dlaczego to jest ważne

W praktyce administracji publicznej często spotyka się sytuacje, w których:

* dostępny dokument zostaje podpisany,
* następnie zapisany jako obraz lub skan,
* albo opublikowany w sposób powodujący utratę jego dostępności.

W efekcie użytkownicy technologii wspomagających tracą dostęp do informacji, mimo że dokument przed podpisaniem był dostępny.

# 9. Kogo to dotyczy

W szczególności:

* osób niewidomych,
* osób słabowidzących,
* osób korzystających z czytników ekranu,
* osób korzystających z funkcji wyszukiwania dokumentów,
* wszystkich użytkowników potrzebujących dostępu do treści dokumentu.

# 10. Sposób testowania

## Krok 1

Otwórz dokument podpisany elektronicznie.

## Krok 2

Sprawdź, czy można zaznaczać i kopiować tekst.

## Krok 3

Sprawdź działanie funkcji wyszukiwania.

## Krok 4

Zweryfikuj, czy struktura dokumentu została zachowana.

## Krok 5

Uruchom czytnik ekranu i sprawdź możliwość odczytu treści.

## Krok 6

Sprawdź, czy wizualizacja podpisu nie zasłania treści dokumentu.

## Krok 7

Jeżeli dokument zawiera wiele podpisów, sprawdź, czy nie utrudniają one korzystania z dokumentu.

# 11. Kryteria oceny wyniku

## Spełnia

Dokument zachowuje dostępność po podpisaniu i może być odczytywany przez technologie wspomagające.

## Częściowo spełnia

Treść dokumentu jest dostępna, jednak podpis powoduje pewne utrudnienia w korzystaniu z dokumentu.

## Nie spełnia

Po podpisaniu dokument utracił dostępność lub jego treść nie może być samodzielnie odczytana przez użytkowników technologii wspomagających.

## Nie dotyczy

Dokument nie został podpisany elektronicznie.

# 12. Typowe niezgodności

* podpisanie dokumentu powoduje zapisanie go jako obrazu,
* utrata warstwy tekstowej po podpisaniu,
* utrata struktury dokumentu,
* podpis zasłania część treści,
* czytnik ekranu nie może odczytać dokumentu po podpisaniu,
* opublikowano jedynie niedostępną wizualizację podpisanego dokumentu.

# 13. Dobre praktyki

* podpisywanie dokumentów bez utraty warstwy tekstowej,
* zachowanie zgodności z PDF/UA po podpisaniu,
* weryfikowanie dostępności dokumentu po podpisaniu,
* stosowanie podpisów niewpływających na strukturę dokumentu,
* publikowanie wersji podpisanej i dostępnej jednocześnie.

# 14. Wynik testu

* Spełnia
* Częściowo spełnia
* Nie spełnia
* Nie dotyczy

# 15. Ustalenia

Miejsce na zapisanie:

* rodzaju podpisu,
* wpływu podpisu na dostępność,
* problemów z odczytem,
* problemów ze strukturą dokumentu,
* innych obserwacji.

# 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Dokument po podpisaniu elektronicznym utracił dostępność. Treść dokumentu została opublikowana w postaci obrazu bez dostępnej warstwy tekstowej, co uniemożliwia jej odczyt przez czytniki ekranu oraz wykorzystanie funkcji wyszukiwania i kopiowania tekstu.

# 17. Rekomendacje naprawcze

* publikować dokumenty podpisane bez utraty warstwy tekstowej,
* zachować strukturę i znaczniki dostępności po podpisaniu,
* weryfikować dostępność dokumentów po zakończeniu procesu podpisywania,
* stosować rozwiązania zgodne z PDF/UA,
* udostępnić poprawioną wersję dokumentu.

# 18. Powiązane testy

* Dokument PDF
* Formularz PDF
* Skan dokumentu
* Odczyt struktury przez czytnik ekranu
* Odczyt formularza przez czytnik ekranu
* Tekst alternatywny
* Deklaracja dostępności

---
