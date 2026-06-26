---
id: test-dokument-pdf
title: Karta testu — Dokument PDF
sidebar_label: Dokument PDF
sidebar_position: 60
description: Scenariusz testu sprawdzającego, czy dokument PDF jest dostępny dla użytkowników technologii wspomagających oraz umożliwia skuteczne odczytanie i wykorzystanie zawartych w nim informacji.
keywords: [PDF, dokument PDF, PDF/UA, dostępność dokumentów, WCAG, dostępność cyfrowa]
tags: [test dostępności, dokumenty, PDF, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-060**

---

## 2. Nazwa testu

**Dokument PDF**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy dokument PDF umożliwia użytkownikom technologii wspomagających odczytanie, zrozumienie i wykorzystanie zawartych w nim informacji.

### Co oznacza „dostępny dokument PDF”?

Dostępny dokument PDF to dokument, który:

- posiada prawidłową strukturę logiczną,
- może być odczytywany przez czytniki ekranu,
- zawiera rzeczywisty tekst,
- umożliwia nawigację po treści,
- zachowuje znaczenie informacji niezależnie od sposobu prezentacji.

### Co sprawdza test?

Test obejmuje najważniejsze elementy wpływające na dostępność dokumentu:

- tytuł dokumentu,
- język dokumentu,
- strukturę nagłówków,
- kolejność odczytu,
- tekst alternatywny obrazów,
- dostępność tabel,
- dostępność formularzy,
- możliwość odczytu przez technologie wspomagające.

Test nie zastępuje pełnego audytu PDF/UA.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.1.1 Treści nietekstowe (A)**
- **1.3.1 Informacje i relacje (A)**
- **1.3.2 Znacząca kolejność (A)**
- **2.4.2 Tytuł strony (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **3.1.1 Język strony (A)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

W szczególności:

- **11.7 User Preferences**
- **11.8 Documents**
- odpowiednie wymagania odpowiadające kryteriom WCAG stosowanym do dokumentów elektronicznych.

### Standardy powiązane

- PDF/UA (ISO 14289)
- Tagged PDF

---

## 6. Zastosowanie do treści

Test stosuje się do:

- dokumentów PDF publikowanych na stronach internetowych,
- dokumentów PDF publikowanych w BIP,
- formularzy PDF,
- raportów,
- uchwał,
- regulaminów,
- sprawozdań,
- materiałów edukacyjnych.

### Wyjątki

Test nie dotyczy dokumentów w innych formatach.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się dokument PDF, dla którego:

- określono tytuł dokumentu,
- określono język dokumentu,
- zastosowano logiczną strukturę nagłówków,
- kolejność odczytu jest poprawna,
- obrazy informacyjne posiadają teksty alternatywne,
- tabele posiadają nagłówki i poprawną strukturę,
- formularze są dostępne dla technologii wspomagających,
- dokument może zostać odczytany przez czytnik ekranu.

---

## 8. Dlaczego to jest ważne

Dokument PDF często stanowi jedyną publicznie dostępną wersję informacji.

Jeżeli dokument nie jest dostępny:

- użytkownik może nie mieć dostępu do jego treści,
- czytnik ekranu może odczytywać informacje w niewłaściwej kolejności,
- obrazy i wykresy mogą być niezrozumiałe,
- formularze mogą być niemożliwe do wypełnienia.

W rezultacie użytkownik może zostać pozbawiony dostępu do informacji publicznej lub usługi.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób korzystających z monitorów brajlowskich,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Otwórz dokument PDF.

### Krok 2

Sprawdź, czy dokument zawiera rzeczywisty tekst.

Niezgodnością jest publikowanie dokumentu wyłącznie jako skanu.

### Krok 3

Sprawdź tytuł dokumentu.

### Krok 4

Sprawdź język dokumentu.

### Krok 5

Sprawdź strukturę nagłówków.

### Krok 6

Sprawdź, czy dokument posiada logiczną kolejność odczytu.

### Krok 7

Sprawdź obecność obrazów i wykresów.

Jeżeli występują:

- sprawdź teksty alternatywne,
- sprawdź opisy danych.

### Krok 8

Sprawdź tabele.

Jeżeli występują:

- sprawdź obecność nagłówków,
- sprawdź logiczną strukturę danych.

### Krok 9

Sprawdź formularze.

Jeżeli występują:

- sprawdź etykiety pól,
- sprawdź możliwość obsługi z klawiatury.

### Krok 10

Odczytaj dokument przy użyciu czytnika ekranu.

### Krok 11

Oceń, czy możliwe jest zrozumienie dokumentu bez korzystania z prezentacji wizualnej.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Dokument posiada prawidłową strukturę i umożliwia skuteczne korzystanie z technologii wspomagających.

### Wynik częściowo pozytywny

Występują pojedyncze problemy utrudniające korzystanie z dokumentu, lecz nie uniemożliwiające dostępu do informacji.

### Wynik negatywny

Dokument zawiera istotne problemy uniemożliwiające lub znacząco utrudniające korzystanie z niego.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- dokument będący wyłącznie skanem,
- brak tytułu dokumentu,
- brak oznaczenia języka,
- brak struktury nagłówków,
- nieprawidłowa kolejność odczytu,
- brak tekstów alternatywnych,
- nieoznaczone tabele,
- formularze bez etykiet,
- dokument nieodczytywalny przez czytnik ekranu.

---

## 13. Dobre praktyki

- Tworzenie PDF z dostępnych dokumentów źródłowych.
- Stosowanie stylów nagłówków już w dokumencie źródłowym.
- Weryfikacja dokumentu przed publikacją.
- Stosowanie Tagged PDF.
- Testowanie dokumentu przy użyciu czytnika ekranu.
- Publikowanie dokumentu również w formacie DOCX lub HTML, gdy jest to możliwe.

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

> Dokument PDF nie posiada prawidłowej struktury umożliwiającej odczyt przez technologie wspomagające. Część treści może być niedostępna dla użytkowników korzystających z czytników ekranu.

lub

> Dokument został opublikowany jako skan pozbawiony warstwy tekstowej, co uniemożliwia jego odczyt przez technologie wspomagające.

---

## 17. Rekomendacje naprawcze

- Przygotować dokument jako Tagged PDF.
- Uzupełnić tytuł i język dokumentu.
- Wprowadzić strukturę nagłówków.
- Dodać teksty alternatywne dla obrazów.
- Poprawić strukturę tabel.
- Zapewnić dostępność formularzy.
- Zweryfikować dokument przy użyciu czytnika ekranu przed publikacją.

---

## 18. Powiązane testy

- Dokument DOCX
- Nagłówki
- Język strony
- Tekst alternatywny
- Tabela danych
- Odczyt struktury przez czytnik ekranu
- Odczyt formularza przez czytnik ekranu
- Formularz elektroniczny
---