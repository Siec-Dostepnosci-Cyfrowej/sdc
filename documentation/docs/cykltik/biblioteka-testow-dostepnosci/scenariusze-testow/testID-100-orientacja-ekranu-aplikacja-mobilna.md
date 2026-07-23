---
id: test-orientacja-ekranu-aplikacja-mobilna
title: Orientacja ekranu (aplikacja mobilna)
sidebar_label: Orientacja ekranu (aplikacja mobilna)
sidebar_position: 100
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być używana zarówno w orientacji pionowej, jak i poziomej oraz czy użytkownik nie jest zmuszany do korzystania wyłącznie z jednej orientacji ekranu, chyba że jest to niezbędne dla charakteru funkcji.
keywords: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil wstępny,orientacja ekranu (aplikacja mobilna),kryterium sukcesu]
tags: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil wstępny,orientacja ekranu (aplikacja mobilna),kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-100**

## 2. Nazwa testu

**Orientacja ekranu (aplikacja mobilna)**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

## 4. Opis testu

Test sprawdza, czy aplikacja mobilna może być używana zarówno w orientacji pionowej, jak i poziomej oraz czy użytkownik nie jest zmuszany do korzystania wyłącznie z jednej orientacji ekranu, chyba że wynika to z charakteru funkcjonalności.

### Co oznacza „orientacja ekranu”?

Orientacja ekranu określa sposób ustawienia urządzenia podczas korzystania z aplikacji.

Najczęściej spotykane są:

- **orientacja pionowa*- (portretowa),
- **orientacja pozioma*- (krajobrazowa).

Użytkownik powinien mieć możliwość korzystania z aplikacji w orientacji najlepiej odpowiadającej jego potrzebom, chyba że określona orientacja jest niezbędna do działania danej funkcji.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.4 Orientacja

### EN 301 549

- 11.1.3.4 Orientation

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- ekranów ustawień,
- procesów użytkownika,
- ekranów prezentujących dane,
- komponentów niestandardowych.

## 7. Oczekiwany wynik

Aplikacja może być używana zarówno w orientacji pionowej, jak i poziomej.

Zmiana orientacji:

- nie powoduje utraty funkcjonalności,
- nie powoduje utraty danych,
- nie uniemożliwia wykonania zadania,
- nie ukrywa istotnych informacji.

Jeżeli aplikacja wymusza określoną orientację, ograniczenie jest uzasadnione charakterem funkcji.

## 8. Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą swobodnie obracać urządzenie.

Dotyczy to szczególnie:

- osób korzystających z uchwytów i statywów,
- osób korzystających z urządzeń mocowanych do wózków lub łóżek,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników klawiatur zewnętrznych,
- osób korzystających z urządzeń w określonym położeniu.

Niektórzy użytkownicy preferują również określoną orientację ze względu na:

- wielkość tekstu,
- sposób korzystania z technologii wspomagających,
- organizację przestrzeni roboczej,
- wygodę wykonywania zadań.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami ruchowymi,
- osób słabowidzących,
- użytkowników urządzeń mocowanych na stałe,
- użytkowników tabletów,
- osób korzystających z klawiatur zewnętrznych,
- użytkowników technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Uruchomienie aplikacji

Uruchom aplikację w orientacji pionowej.

### Krok 2. Zmiana orientacji

Obróć urządzenie do orientacji poziomej.

Sprawdź, czy:

- aplikacja nadal działa,
- ekran zostaje poprawnie przeorganizowany,
- funkcjonalność pozostaje dostępna.

### Krok 3. Test kluczowych ekranów

Przeprowadź ocenę:

- ekranu głównego,
- formularzy,
- menu,
- ekranów wyników,
- kluczowych procesów użytkownika.

### Krok 4. Ocena zawartości

Sprawdź, czy po zmianie orientacji:

- treść pozostaje dostępna,
- nie dochodzi do utraty danych,
- nie są ukrywane istotne informacje,
- wszystkie funkcje pozostają dostępne.

### Krok 5. Ocena ograniczeń

Jeżeli aplikacja wymusza określoną orientację:

- ustal przyczynę,
- oceń, czy ograniczenie jest rzeczywiście niezbędne.

## 11. Kryteria oceny wyniku

### Spełnione

Aplikacja działa zarówno w orientacji pionowej, jak i poziomej albo ograniczenie orientacji jest uzasadnione charakterem funkcji.

### Częściowo spełnione

Większość funkcji działa poprawnie, jednak występują pojedyncze problemy związane ze zmianą orientacji.

### Niespełnione

Aplikacja wymusza określoną orientację bez uzasadnienia lub zmiana orientacji powoduje utratę funkcjonalności albo uniemożliwia wykonanie zadania.

### Nie dotyczy

Ograniczenie orientacji wynika z charakteru funkcjonalności i jest niezbędne do korzystania z aplikacji.

## 12. Typowe niezgodności

- blokowanie orientacji poziomej bez uzasadnienia,
- blokowanie orientacji pionowej bez uzasadnienia,
- znikanie elementów po obróceniu urządzenia,
- przycinanie treści,
- nakładanie się elementów interfejsu,
- utrata możliwości wykonania zadania po zmianie orientacji,
- błędne wyświetlanie formularzy,
- utrata danych po obróceniu urządzenia.

## 13. Dobre praktyki

- projektowanie interfejsów obsługujących obie orientacje,
- testowanie aplikacji w orientacji pionowej i poziomej,
- zachowanie pełnej funkcjonalności niezależnie od orientacji,
- uwzględnianie użytkowników tabletów i urządzeń hybrydowych,
- dokumentowanie przypadków uzasadnionego ograniczenia orientacji,
- testowanie rzeczywistych procesów użytkownika.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie problemów związanych ze zmianą orientacji oraz ocenę ich wpływu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nie zapewnia pełnej obsługi w obu orientacjach ekranu. Zmiana orientacji powoduje utratę części funkcjonalności, ukrycie informacji lub uniemożliwia wykonanie zadania. Ograniczenie nie wynika z charakteru funkcjonalności i może utrudniać korzystanie z aplikacji użytkownikom o różnych potrzebach i sposobach korzystania z urządzeń mobilnych.

## 17. Rekomendacje naprawcze

- dostosować interfejs do pracy w obu orientacjach,
- usunąć nieuzasadnione blokowanie orientacji,
- poprawić układ ekranów po zmianie orientacji,
- zapewnić zachowanie danych podczas obracania urządzenia,
- przetestować wszystkie kluczowe procesy użytkownika w obu orientacjach,
- udokumentować przypadki uzasadnionego ograniczenia orientacji.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-033 Zmiana rozmiaru tekstu
- testID-034 Dopasowanie do szerokości ekranu
- testID-035 Reflow (dopasowanie treści)
- testID-120 Formularz
