---
id: test-bip-karta-informacji-publicznej
title: Karta testu BIP — Informacja publiczna
sidebar_label: BIP — karta informacji publicznej
sidebar_position: 112
description: Scenariusz testu sprawdzającego, czy karta informacji publicznej opublikowana w Biuletynie Informacji Publicznej umożliwia użytkownikowi odnalezienie, zrozumienie i wykorzystanie informacji publicznej oraz spełnia wymagania dostępności cyfrowej.
keywords: [BIP, informacja publiczna, karta informacji publicznej, dostępność BIP, WCAG, dostępność cyfrowa]
tags: [test dostępności, BIP, informacja publiczna, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-112**

## 2. Nazwa testu

BIP — karta informacji publicznej

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil pogłębiony**

## 4. Opis testu

Test sprawdza, czy karta informacji publicznej opublikowana w Biuletynie Informacji Publicznej umożliwia użytkownikowi:

- rozpoznanie, czego dotyczy informacja,
- zrozumienie jej znaczenia,
- ustalenie podstawowych faktów i metadanych,
- odnalezienie dokumentów źródłowych,
- korzystanie z informacji niezależnie od sposobu dostępu i wykorzystywanej technologii.

Test obejmuje zarówno strukturę i zawartość strony, jak i sposób prezentowania dokumentów oraz metadanych BIP.

## 5. Mapowanie do standardów

### WCAG 2.1

- 1.3.1 Informacje i relacje
- 1.4.3 Kontrast (minimalny)
- 2.1.1 Klawiatura
- 2.4.4 Cel łącza (w kontekście)
- 2.4.6 Nagłówki i etykiety
- 2.4.7 Widoczny fokus
- 3.1.1 Język strony
- 4.1.2 Nazwa, rola, wartość

### Ustawa o dostępie do informacji publicznej

- publikowanie informacji publicznej w BIP

## 6. Zastosowanie do treści

Test stosuje się do:

- uchwał,
- zarządzeń,
- decyzji,
- ogłoszeń,
- raportów,
- programów,
- planów,
- regulaminów,
- procedur,
- innych informacji publikowanych w BIP. 

## 7. Oczekiwany wynik

Użytkownik może:

- szybko ustalić, czego dotyczy informacja,
- zrozumieć jej znaczenie bez konieczności analizowania dokumentu źródłowego,
- odnaleźć dokumenty źródłowe,
- ustalić daty publikacji i aktualizacji,
- zidentyfikować podmiot odpowiedzialny za informację,
- korzystać z informacji przy użyciu technologii wspomagających.

## 8. Dlaczego to jest ważne

Informacja publiczna ma być nie tylko opublikowana, ale również dostępna i zrozumiała.

W praktyce wiele kart BIP ogranicza się do publikacji plików PDF bez kontekstu, streszczenia lub treści HTML, co utrudnia lub uniemożliwia korzystanie z informacji przez część użytkowników. 

## 9. Kogo to dotyczy

- wszystkich użytkowników BIP,
- osób korzystających z czytników ekranu,
- osób z niepełnosprawnością wzroku,
- osób z trudnościami poznawczymi,
- osób korzystających wyłącznie z urządzeń mobilnych,
- osób poszukujących konkretnej informacji publicznej.

## 10. Sposób testowania

### Krok 1. Sprawdź tytuł strony

Zweryfikuj, czy:

- karta posiada jednoznaczny tytuł,
- zastosowano jeden nagłówek H1.

### Krok 2. Sprawdź obecność treści HTML

Zweryfikuj, czy:

- karta zawiera treść informacji w HTML,
- nie ogranicza się wyłącznie do załączników. 

### Krok 3. Sprawdź streszczenie informacji

Zweryfikuj, czy użytkownik może łatwo ustalić:

- czego dotyczy informacja,
- kogo dotyczy,
- co zostało ustalone lub zmienione,
- od kiedy obowiązuje (jeżeli dotyczy).

### Krok 4. Sprawdź metadane BIP

Zweryfikuj obecność:

- daty publikacji,
- daty aktualizacji (jeżeli występuje),
- podmiotu odpowiedzialnego za informację,
- informacji o publikacji lub wytworzeniu dokumentu. 

### Krok 5. Sprawdź dokumenty źródłowe

Zweryfikuj, czy:

- dokumenty są dostępne do pobrania,
- pliki mają opisowe nazwy,
- wskazano format i rozmiar pliku,
- dostępne są alternatywne formaty, jeżeli istnieją.

### Krok 6. Sprawdź strukturę informacji

Zweryfikuj, czy:

- zastosowano logiczną strukturę nagłówków,
- sekcje są jednoznacznie opisane,
- listy dokumentów i powiązań są semantyczne.

### Krok 7. Sprawdź odnośniki

Zweryfikuj, czy:

- cel linków jest jednoznaczny,
- nie stosuje się nieopisowych etykiet typu „Pobierz”, „Kliknij tutaj”. 

### Krok 8. Sprawdź dostępność z klawiatury i czytnika ekranu

Zweryfikuj możliwość:

- nawigacji po stronie,
- odczytu treści,
- odczytu metadanych,
- aktywacji linków do dokumentów.

## 11. Kryteria oceny wyniku

### Spełnia

Karta umożliwia odnalezienie, zrozumienie i wykorzystanie informacji publicznej oraz spełnia wymagania standardu.

### Częściowo spełnia

Stwierdzono pojedyncze braki, które utrudniają korzystanie z informacji.

### Nie spełnia

Istotne elementy informacji są niedostępne, niezrozumiałe lub nie zostały opublikowane.

### Nie dotyczy

Nie stosuje się.

## 12. Typowe niezgodności

- karta zawiera wyłącznie plik PDF,
- brak treści HTML,
- brak streszczenia informacji,
- brak dat publikacji lub aktualizacji,
- brak informacji o podmiocie odpowiedzialnym,
- nieopisowe linki do dokumentów,
- brak informacji o formacie lub rozmiarze pliku,
- brak logicznej struktury nagłówków,
- publikacja niedostępnych skanów dokumentów,
- brak informacji o sposobie uzyskania dostępnej alternatywy. 

## 13. Dobre praktyki

- publikowanie streszczenia w języku prostym,
- publikowanie treści informacji w HTML,
- równoległe udostępnianie HTML, DOCX i PDF,
- opisywanie plików formatem i rozmiarem,
- publikowanie informacji o skutkach dokumentu dla użytkownika,
- stosowanie spójnej struktury wszystkich kart BIP. 

## 14. Wynik testu

- Spełnia
- Częściowo spełnia
- Nie spełnia

## 15. Ustalenia

Miejsce na zapisanie:

- brakujących elementów karty,
- problemów z dostępnością,
- problemów ze strukturą informacji,
- problemów z dokumentami źródłowymi,
- innych ustaleń.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Karta informacji publicznej nie zapewnia użytkownikom pełnego dostępu do informacji. Treść została opublikowana wyłącznie w postaci pliku PDF bez streszczenia lub omówienia w HTML. Brakuje również części metadanych BIP oraz opisów dokumentów źródłowych, co utrudnia odnalezienie i zrozumienie informacji.

## 17. Rekomendacje naprawcze

- opublikować treść informacji w HTML,
- dodać streszczenie w języku prostym,
- uzupełnić metadane BIP,
- poprawić strukturę nagłówków,
- opisać dokumenty źródłowe,
- zapewnić dostępne alternatywy dla niedostępnych plików,
- stosować jednolity standard kart informacji publicznej.

## 18. Powiązane testy

- testID-110 Deklaracja dostępności
- testID-111 Deklaracja dostępności (zgodność z warunkami technicznymi MC)
- testID-100 Skan dokumentu
- testID-105 Dokument podpisany elektronicznie
- testID-109 Arkusz kalkulacyjny (CSV/XLSX)
- Nagłówki
- Punkty orientacyjne
- Linki i cel łączy
- Odczyt struktury przez czytnik ekranu
- Dokument PDF

---