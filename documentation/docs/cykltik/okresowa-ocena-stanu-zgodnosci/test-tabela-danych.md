---
id: test-tabela-danych
title: Karta testu — Tabela danych
sidebar_label: Tabela danych
sidebar_position: 62
description: Scenariusz testu sprawdzającego, czy tabela danych posiada poprawną strukturę oraz umożliwia użytkownikom technologii wspomagających prawidłowe odczytanie relacji pomiędzy danymi i nagłówkami.
keywords: [tabela danych, tabela, nagłówki tabeli, dane tabelaryczne, dostępność cyfrowa]
tags: [test dostępności, tabela danych, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-062**

---

## 2. Nazwa testu

**Tabela danych**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy tabela danych posiada poprawną strukturę umożliwiającą użytkownikom technologii wspomagających zrozumienie relacji pomiędzy danymi i odpowiadającymi im nagłówkami.

### Co oznacza „tabela danych”?

Tabela danych służy do prezentowania informacji w postaci wierszy i kolumn.

Przykłady:

- zestawienia finansowe,
- harmonogramy,
- wyniki badań,
- wykazy osób,
- statystyki,
- raporty,
- dane publikowane w BIP.

### Jak powinna działać dostępna tabela?

Użytkownik powinien móc:

- rozpoznać, że ma do czynienia z tabelą,
- ustalić znaczenie wierszy i kolumn,
- określić, do jakich nagłówków odnoszą się poszczególne komórki,
- odczytać dane przy użyciu technologii wspomagających.

### Czego nie dotyczy test?

Test nie dotyczy tabel wykorzystywanych wyłącznie do budowy układu wizualnego.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **1.3.2 Znacząca kolejność (A)**
- **1.3.3 Właściwości zmysłowe (A)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.1.3.2 Meaningful Sequence**
- **9.1.3.3 Sensory Characteristics**
- **9.4.1.2 Name, Role, Value**

### Techniki WCAG

- H39
- H43
- H51
- H63
- H73

---

## 6. Zastosowanie do treści

Test stosuje się do:

- tabel HTML,
- tabel w dokumentach PDF,
- tabel w dokumentach DOCX,
- tabel w dokumentach ODT,
- zestawień danych,
- raportów,
- publikacji statystycznych,
- sprawozdań.

### Wyjątki

Jeżeli strona lub dokument nie zawiera tabel danych:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodną uznaje się tabelę danych, dla której:

- zastosowano strukturę tabeli odpowiednią do prezentowanych danych,
- nagłówki wierszy i kolumn zostały jednoznacznie określone,
- relacje pomiędzy komórkami danych i nagłówkami są dostępne programowo,
- kolejność danych jest logiczna,
- użytkownik może zrozumieć znaczenie danych bez obserwowania układu wizualnego tabeli.

---

## 8. Dlaczego to jest ważne

Użytkownicy czytników ekranu nie odbierają tabeli jako obrazu.

Aby zrozumieć dane, muszą otrzymać informację:

- w którym wierszu się znajdują,
- w której kolumnie się znajdują,
- jaki nagłówek opisuje daną komórkę.

Bez poprawnej struktury tabela może stać się niezrozumiała, mimo że wizualnie wygląda poprawnie.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających z monitorów brajlowskich,
- osób słabowidzących korzystających z powiększenia,
- osób z niepełnosprawnościami poznawczymi,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj tabelę danych.

### Krok 2

Określ cel tabeli.

Sprawdź, jakie informacje prezentuje.

### Krok 3

Sprawdź, czy tabela posiada:

- nagłówki kolumn,
- nagłówki wierszy (jeżeli są potrzebne).

### Krok 4

Sprawdź, czy znaczenie danych wynika z nagłówków.

### Krok 5

Zweryfikuj, czy kolejność danych jest logiczna.

### Krok 6

Jeżeli tabela jest złożona:

- sprawdź grupy nagłówków,
- sprawdź nagłówki wielopoziomowe,
- sprawdź poprawność powiązań.

### Krok 7

Uruchom czytnik ekranu.

### Krok 8

Przemieszczaj się pomiędzy komórkami tabeli.

### Krok 9

Sprawdź, czy czytnik ekranu odczytuje:

- dane,
- odpowiadające im nagłówki.

### Krok 10

Oceń, czy możliwe jest zrozumienie tabeli bez obserwowania jej układu wizualnego.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Tabela posiada poprawną strukturę i umożliwia jednoznaczne określenie relacji pomiędzy danymi i nagłówkami.

### Wynik częściowo pozytywny

Występują drobne problemy, które utrudniają odczyt części danych, ale nie uniemożliwiają zrozumienia tabeli.

### Wynik negatywny

Tabela nie pozwala użytkownikowi technologii wspomagających określić relacji pomiędzy danymi i nagłówkami.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak nagłówków tabeli,
- stosowanie pogrubienia zamiast nagłówków,
- brak powiązania danych z nagłówkami,
- nieprawidłowe scalanie komórek,
- złożone tabele bez odpowiednich relacji,
- wykorzystanie tabeli do budowy układu strony,
- puste wiersze i kolumny wykorzystywane do formatowania.

---

## 13. Dobre praktyki

- Stosowanie prostych tabel.
- Ograniczanie liczby poziomów nagłówków.
- Unikanie zbędnego scalania komórek.
- Dodawanie opisu tabeli, gdy jest rozbudowana.
- Testowanie tabel przy użyciu czytnika ekranu.
- Rozważanie alternatywnych sposobów prezentacji bardzo złożonych danych.

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

> Tabela danych nie posiada poprawnie zdefiniowanych nagłówków, przez co użytkownicy technologii wspomagających nie mogą jednoznacznie określić znaczenia prezentowanych danych.

lub

> Relacje pomiędzy komórkami danych i odpowiadającymi im nagłówkami nie są dostępne programowo, co utrudnia odczyt tabeli przez czytniki ekranu.

---

## 17. Rekomendacje naprawcze

- Zdefiniować nagłówki wierszy i kolumn.
- Zapewnić programowe powiązanie danych z nagłówkami.
- Ograniczyć zbędne scalanie komórek.
- Uprościć złożone struktury tabelaryczne.
- Zweryfikować tabelę przy użyciu czytnika ekranu.
- Rozważyć alternatywną prezentację bardzo złożonych danych.

---

## 18. Powiązane testy

- Dokument PDF
- Dokument DOCX (ODT)
- Odczyt struktury przez czytnik ekranu
- Wykres
- Wizualizacja danych
- Tekst alternatywny
- Nagłówki
---