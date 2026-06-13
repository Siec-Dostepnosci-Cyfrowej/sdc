---
id: test-strona-kontaktowa
title: Karta testu — Strona kontaktowa
sidebar_label: Strona kontaktowa
sidebar_position: 123
description: Scenariusz testu sprawdzającego, czy strona kontaktowa umożliwia użytkownikowi skuteczne skontaktowanie się z organizacją, uzyskanie informacji o lokalizacji oraz zgłoszenie problemów związanych z dostępnością.
keywords: [kontakt, strona kontaktowa, dane teleadresowe, dostępność, lokalizacja, formularz kontaktowy, WCAG]
tags: [test dostępności, kontakt, komunikacja, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-123**

---

## 2. Nazwa testu

**Strona kontaktowa**

---

## 3. Profil stosowania testu

**ACR-EXT**

---

## 4. Opis testu

Test sprawdza, czy strona kontaktowa umożliwia użytkownikowi:

- szybkie odnalezienie danych kontaktowych,
- wybór odpowiedniego kanału kontaktu,
- uzyskanie informacji o lokalizacji i sposobie dotarcia,
- zgłoszenie problemu z dostępnością,
- uzyskanie informacji o dostępnych formach wsparcia komunikacji,
- skorzystanie z formularza kontaktowego, jeśli został udostępniony.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.1.1 Treści nietekstowe
- 2.1.1 Klawiatura
- 2.1.2 Bez pułapki klawiaturowej
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.6 Nagłówki i etykiety
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety lub instrukcje
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

- 9.1
- 9.2
- 9.3
- 9.4

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron „Kontakt”,
- stron kontaktowych jednostek organizacyjnych,
- stron oddziałów i placówek,
- stron zawierających dane teleadresowe,
- stron zawierających formularz kontaktowy,
- stron zawierających informacje o lokalizacji i dojeździe. 

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- odnaleźć dane kontaktowe,
- ustalić godziny pracy,
- znaleźć właściwy kanał kontaktu,
- zgłosić problem z dostępnością,
- uzyskać informacje o lokalizacji,
- skorzystać z formularza kontaktowego,
- skorzystać z informacji bez konieczności używania mapy. 

---

## 8. Dlaczego to jest ważne

Strona kontaktowa jest często wykorzystywana przez użytkowników, którzy nie mogą znaleźć potrzebnych informacji lub napotkali problem podczas korzystania z serwisu.

Dla wielu osób jest to podstawowy sposób uzyskania pomocy oraz zgłoszenia problemów z dostępnością.

Braki na stronie kontaktowej mogą uniemożliwić kontakt z organizacją lub uzyskanie wsparcia. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnością słuchu,
- osób z niepełnosprawnością ruchową,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z urządzeń mobilnych,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1. Dane teleadresowe

Sprawdź, czy strona zawiera:

- nazwę organizacji,
- adres,
- godziny pracy lub obsługi,
- telefon i/lub adres e-mail,
- dane zapisane w postaci tekstowej, a nie wyłącznie grafiki. 

### Krok 2. Kontakt w sprawie dostępności

Sprawdź, czy użytkownik może znaleźć:

- kontakt do zgłaszania problemów z dostępnością,
- kontakt do koordynatora lub zespołu ds. dostępności,
- odnośnik do deklaracji dostępności. 

### Krok 3. Wsparcie komunikacji

Jeżeli organizacja zapewnia dodatkowe formy wsparcia:

sprawdź, czy opisano:

- tłumacza PJM,
- asystę,
- alternatywne kanały kontaktu,
- sposób skorzystania z tych usług. 

### Krok 4. Lokalizacja i dojazd

Sprawdź, czy:

- adres jest podany tekstowo,
- opisano sposób dojścia lub dojazdu,
- informacje nie są przekazane wyłącznie za pomocą mapy. 

### Krok 5. Mapa (jeżeli występuje)

Zweryfikuj, czy:

- mapa nie jest jedynym źródłem informacji,
- posiada poprawny tytuł,
- nie powoduje pułapki klawiaturowej,
- dostępny jest link do otwarcia lokalizacji w zewnętrznej aplikacji mapowej. 

### Krok 6. Formularz kontaktowy (jeżeli występuje)

Sprawdź, czy:

- każde pole posiada etykietę,
- komunikaty błędów są zrozumiałe,
- formularz można obsłużyć klawiaturą,
- po wysłaniu wyświetlane jest potwierdzenie,
- nie zastosowano niedostępnych zabezpieczeń CAPTCHA. 

### Krok 7. Test czytnikiem ekranu

Zweryfikuj, czy:

- nagłówki opisują strukturę strony,
- dane kontaktowe są czytelne,
- cele odnośników są jednoznaczne,
- formularz jest poprawnie odczytywany.

### Krok 8. Test mobilny

Sprawdź, czy:

- dane kontaktowe są łatwe do odnalezienia,
- strona jest czytelna na małym ekranie,
- numery telefonów i adresy e-mail są łatwe do użycia.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może łatwo skontaktować się z organizacją oraz uzyskać wszystkie istotne informacje.

### Częściowo spełnione

Informacje są dostępne, ale występują utrudnienia wpływające na wygodę korzystania.

### Niespełnione

Brak kluczowych informacji lub występują bariery uniemożliwiające skuteczny kontakt.

---

## 12. Typowe niezgodności

- brak telefonu lub adresu e-mail,
- dane kontaktowe przedstawione jako grafika,
- brak godzin pracy,
- brak kontaktu do spraw dostępności,
- brak odnośnika do deklaracji dostępności,
- mapa jako jedyne źródło informacji o lokalizacji,
- brak opisu dojścia lub dojazdu,
- niedostępny formularz kontaktowy,
- CAPTCHA bez dostępnej alternatywy,
- niejednoznaczne cele odnośników. 

---

## 13. Dobre praktyki

- wyodrębnienie sekcji „Kontakt w sprawie dostępności”,
- podanie kilku kanałów kontaktu,
- publikowanie danych w postaci tekstowej,
- opisanie dostępności miejsca obsługi,
- zapewnienie tekstowego opisu dojścia i dojazdu,
- stosowanie logicznej struktury nagłówków,
- umieszczenie danych kontaktowych w górnej części strony,
- zapewnienie alternatywy dla formularza kontaktowego. 

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

> Strona kontaktowa nie zawiera kompletnego zestawu informacji umożliwiających skuteczny kontakt z organizacją. Nie zapewniono odrębnego kontaktu do zgłaszania problemów z dostępnością oraz tekstowego opisu lokalizacji i sposobu dotarcia do miejsca obsługi. Problem może utrudniać uzyskanie wsparcia przez osoby z niepełnosprawnościami.

---

## 17. Rekomendacje naprawcze

- uzupełnić dane teleadresowe,
- opublikować godziny pracy i obsługi,
- dodać kontakt do spraw dostępności,
- umieścić odnośnik do deklaracji dostępności,
- zapewnić tekstowy opis lokalizacji i dojazdu,
- poprawić dostępność formularza kontaktowego,
- usunąć bariery związane z mapą lub CAPTCHA.

---

## 18. Powiązane testy

- testID-121 Zgłoszenie problemu dostępności
- testID-120 Formularz
- testID-122 Mapa dojazdu / Lokalizacja
- testID-111 Deklaracja dostępności
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu
- testID-043 Cel łącza
- testID-044 Widoczność fokusu
- testID-051 Etykiety formularzy
- testID-052 Komunikaty o błędach

---