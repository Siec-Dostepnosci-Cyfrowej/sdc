---
id: test-artykul-komunikat-wpis
title: Karta testu — Artykuł / komunikat / wpis
sidebar_label: Artykuł / komunikat / wpis
sidebar_position: 114
description: Scenariusz testu sprawdzającego, czy użytkownik może odczytać, zrozumieć i wykorzystać informacje opublikowane na stronie artykułu, komunikatu lub wpisu.
keywords: [artykuł, komunikat, wpis, aktualność, treści internetowe, WCAG, dostępność cyfrowa]
tags: [test dostępności, treści, komunikacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-114**

---

## 2. Nazwa testu

**Artykuł / komunikat / wpis**

---

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **nie**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test sprawdza, czy użytkownik może:

- odczytać treść publikacji,
- zrozumieć jej strukturę,
- rozpoznać datę i aktualność informacji,
- korzystać z osadzonych elementów (obrazów, tabel, dokumentów, multimediów),
- przechodzić do powiązanych zasobów,
- wrócić do listy publikacji bez utraty orientacji.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.1.1 Treści nietekstowe
- 1.2.x Multimedia
- 1.3.1 Informacje i relacje
- 1.3.2 Znacząca kolejność
- 1.4.3 Kontrast
- 2.1.1 Klawiatura
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 3.1.1 Język strony
- 4.1.2 Nazwa, rola, wartość

---

## 6. Zastosowanie do treści

Test stosuje się do:

- artykułów,
- aktualności,
- komunikatów,
- wpisów informacyjnych,
- opisów wydarzeń,
- publikacji redakcyjnych,
- informacji publikowanych w serwisach WWW i BIP.

---

## 7. Oczekiwany wynik

Użytkownik może:

- rozpoznać temat publikacji,
- ustalić datę publikacji,
- zrozumieć strukturę treści,
- przemieszczać się po artykule za pomocą nagłówków,
- korzystać z linków i materiałów dodatkowych,
- odczytać wszystkie informacje niezależnie od sposobu ich prezentacji.

---

## 8. Dlaczego to jest ważne

Strony artykułów stanowią podstawowy sposób przekazywania informacji publicznej.

Nieprawidłowa struktura, brak alternatyw dla obrazów lub niejednoznaczne linki mogą uniemożliwiać użytkownikom odnalezienie i zrozumienie informacji.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z trudnościami poznawczymi,
- osób korzystających z urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1. Sprawdź nagłówek publikacji

Zweryfikuj, czy:

- publikacja posiada jeden nagłówek H1,
- tytuł jednoznacznie identyfikuje treść,
- podana jest data publikacji,
- w przypadku zmian podana jest data aktualizacji.

### Krok 2. Sprawdź strukturę treści

Zweryfikuj, czy:

- zastosowano logiczną hierarchię nagłówków,
- treść podzielono na sekcje,
- listy są oznaczone semantycznie,
- cytaty są oznaczone jako cytaty.

### Krok 3. Sprawdź linki

Zweryfikuj, czy:

- cel każdego linku jest zrozumiały,
- linki do plików informują o formacie,
- użytkownik może przewidzieć rezultat aktywacji linku.

### Krok 4. Sprawdź obrazy i grafiki

Zweryfikuj, czy:

- obrazy posiadają odpowiednie alternatywy tekstowe,
- infografiki i wykresy posiadają opisy treściowe.

### Krok 5. Sprawdź multimedia

Jeżeli występują:

- nagrania audio,
- nagrania wideo,
- transmisje,

zweryfikuj dostępność alternatyw wymaganych dla danego rodzaju materiału.

### Krok 6. Sprawdź tabele

Zweryfikuj, czy:

- tabele posiadają nagłówki,
- relacje danych są zrozumiałe,
- tabela nie została przedstawiona wyłącznie jako obraz.

### Krok 7. Sprawdź obsługę klawiaturą

Zweryfikuj możliwość:

- odczytania treści,
- aktywowania linków,
- korzystania z elementów interaktywnych.

### Krok 8. Sprawdź możliwość powrotu

Zweryfikuj, czy użytkownik może łatwo wrócić do listy publikacji lub strony nadrzędnej.

---

## 11. Kryteria oceny wyniku

### Spełnione

- publikacja posiada prawidłową strukturę,
- treść jest zrozumiała i kompletna,
- wszystkie istotne informacje są dostępne,
- użytkownik może korzystać z publikacji bez istotnych ograniczeń.

### Częściowo spełnione

- występują pojedyncze problemy,
- część informacji jest trudniej dostępna,
- niektóre elementy wymagają poprawy.

### Niespełnione

- użytkownik nie może skutecznie odczytać lub zrozumieć publikacji,
- występują istotne bariery dostępności.

---

## 12. Typowe niezgodności

- brak struktury nagłówków,
- pomijanie poziomów nagłówków,
- brak daty publikacji,
- brak daty aktualizacji mimo zmian treści,
- nieopisane obrazy,
- wykresy bez opisu,
- linki typu „więcej” lub „kliknij tutaj”,
- dokumenty do pobrania bez informacji o formacie,
- multimedia bez wymaganych alternatyw,
- tabele bez nagłówków.

---

## 13. Dobre praktyki

- stosowanie krótkiego wprowadzenia (lead),
- dzielenie treści na logiczne sekcje,
- stosowanie śródtytułów,
- podawanie dat publikacji i aktualizacji,
- informowanie o formacie dokumentów,
- dodawanie sekcji „Powiązane treści”,
- zapewnienie wyraźnego powrotu do listy publikacji.

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

> Część publikacji nie posiada prawidłowej struktury nagłówków oraz nie zapewnia alternatyw tekstowych dla obrazów i wykresów. Dodatkowo część odnośników nie pozwala na jednoznaczne określenie celu przed ich aktywacją.

---

## 17. Rekomendacje naprawcze

- uporządkować strukturę nagłówków,
- uzupełnić metadane publikacji,
- zapewnić alternatywy dla obrazów i wykresów,
- poprawić opisy linków,
- oznaczać formaty plików do pobrania,
- zapewnić wymagane alternatywy dla multimediów.

---

## 18. Powiązane testy

- testID-004 Nagłówki
- testID-009 Cel łącza
- testID-015 Dostęp z klawiatury
- testID-023 Tekst alternatywny
- testID-041 Tabela danych
- testID-054 Multimedia
- testID-113 Lista aktualności
- testID-104 Skan dokumentu
- testID-109 Arkusz kalkulacyjny (CSV/XLSX)

---
