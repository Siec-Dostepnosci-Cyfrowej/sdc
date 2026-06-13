---
id: test-orientacja-ekranu-aplikacja-mobilna
title: Orientacja ekranu (aplikacja mobilna)
sidebar_label: Orientacja ekranu (aplikacja mobilna)
sidebar_position: 100
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być używana zarówno w orientacji pionowej, jak i poziomej oraz czy użytkownik nie jest zmuszany do korzystania wyłącznie z jednej orientacji ekranu, chyba że jest to niezbędne dla charakteru funkcji.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,orientacja ekranu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,orientacja ekranu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-100**

## Nazwa testu

Orientacja ekranu (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy aplikacja mobilna może być używana zarówno w orientacji pionowej, jak i poziomej oraz czy użytkownik nie jest zmuszany do korzystania wyłącznie z jednej orientacji ekranu, chyba że jest to niezbędne dla charakteru funkcji.

## Powiązane wymagania

### WCAG 2.1 / 2.2

- 1.3.4 Orientacja

### EN 301 549

- 11.1.3.4 Orientation

---

## Dlaczego to jest ważne

Nie wszyscy użytkownicy mogą swobodnie obracać urządzenie.

Dotyczy to w szczególności:

- osób korzystających z uchwytów lub statywów,
- osób poruszających się na wózkach,
- osób z ograniczoną sprawnością ruchową,
- użytkowników mocujących urządzenia do wózków, łóżek lub stanowisk pracy,
- osób korzystających z urządzeń w określonym położeniu.

Niektórzy użytkownicy preferują również określoną orientację ze względu na:

- wielkość tekstu,
- sposób korzystania z czytnika ekranu,
- obsługę klawiatury zewnętrznej,
- indywidualne potrzeby.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami ruchowymi,
- osób słabowidzących,
- użytkowników urządzeń mocowanych na stałe,
- użytkowników tabletów,
- osób korzystających z klawiatur zewnętrznych.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- ekranów ustawień,
- procesów użytkownika,
- ekranów prezentujących dane,
- komponentów niestandardowych.

---

## Wyjątki przewidziane przez WCAG

Wymaganie nie oznacza obowiązku dostosowania każdej funkcji do obu orientacji.

Ograniczenie orientacji może być uzasadnione, gdy wynika z charakteru funkcjonalności.

Przykłady:

- aplikacje wykorzystujące instrumenty muzyczne,
- aplikacje sterujące urządzeniami fizycznymi,
- niektóre gry,
- funkcje wymagające określonego układu przestrzennego.

Wyjątek powinien wynikać z rzeczywistych potrzeb użytkowych, a nie z wygody projektowej.

---

## Metoda badania

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

- strony głównej,
- formularzy,
- menu,
- ekranów wyników,
- kluczowych procesów użytkownika.

### Krok 4. Ocena zawartości

Sprawdź, czy po zmianie orientacji:

- treść pozostaje widoczna,
- nie dochodzi do utraty funkcjonalności,
- nie pojawiają się błędy interfejsu,
- nie są ukrywane istotne elementy.

### Krok 5. Ocena ograniczeń

Jeżeli aplikacja wymusza określoną orientację:

- ustal przyczynę,
- oceń, czy ograniczenie jest rzeczywiście niezbędne.

---

## Pytania kontrolne

1. Czy aplikacja działa zarówno w orientacji pionowej, jak i poziomej?
2. Czy użytkownik może samodzielnie wybrać orientację?
3. Czy zmiana orientacji nie powoduje utraty danych?
4. Czy po zmianie orientacji wszystkie funkcje pozostają dostępne?
5. Czy treść jest poprawnie prezentowana?
6. Czy ograniczenie orientacji jest rzeczywiście uzasadnione?

---

## Kryteria oceny

### Spełnia

Aplikacja może być używana zarówno w orientacji pionowej, jak i poziomej albo ograniczenie orientacji jest uzasadnione charakterem funkcji.

### Częściowo spełnia

Większość funkcji działa poprawnie, jednak występują lokalne problemy związane ze zmianą orientacji.

### Nie spełnia

Aplikacja wymusza określoną orientację bez uzasadnienia lub zmiana orientacji powoduje utratę funkcjonalności.

### Nie dotyczy

Ograniczenie orientacji wynika z charakteru funkcjonalności i jest niezbędne do korzystania z aplikacji.

---

## Typowe niezgodności

- blokowanie orientacji poziomej bez uzasadnienia,
- blokowanie orientacji pionowej bez uzasadnienia,
- znikanie elementów po obróceniu urządzenia,
- przycinanie treści,
- nakładanie się elementów interfejsu,
- utrata możliwości wykonania zadania po zmianie orientacji,
- błędne wyświetlanie formularzy.

---

## Dobre praktyki

- projektowanie interfejsów responsywnych,
- testowanie aplikacji w obu orientacjach,
- zachowanie funkcjonalności niezależnie od orientacji,
- uwzględnianie tabletów i urządzeń hybrydowych,
- dokumentowanie uzasadnionych ograniczeń orientacji.

---

## Klasyfikacja problemów

### Krytyczne

- użytkownik nie może korzystać z aplikacji w wymaganej orientacji,
- zmiana orientacji uniemożliwia wykonanie kluczowego zadania.

### Istotne

- utrata istotnych funkcji lub danych po zmianie orientacji.

### Umiarkowane

- błędy układu utrudniające korzystanie z aplikacji.

### Drobne

- lokalne problemy wizualne niewpływające na realizację zadania.

---

## Profil stosowania testu

| Profil                                       | Stosowanie              |
| -------------------------------------------- | ----------------------- |
| Okresowa ocena stanu zgodności — minimum     | Tak (aplikacje mobilne) |
| Okresowa ocena stanu zgodności — rozszerzona | Tak                     |
| Ocena przed odbiorem rozwiązania             | Tak                     |
| Audyt zgodności                              | Tak                     |
| ACR-MIN                                      | Tak                     |
| ACR-EXT                                      | Tak                     |
| ACR-AUDIT                                    | Tak                     |

---

## Powiązane testy

- Obsługa czytnikiem ekranu (aplikacja mobilna)
- Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- Kolejność fokusu (aplikacja mobilna)
- Dopasowanie do szerokości ekranu
- Zmiana rozmiaru tekstu
- Reflow (dopasowanie treści)

---

## Uwagi

W przypadku aplikacji mobilnych jest to jeden z podstawowych testów dostępności. Kryterium 1.3.4 nie wymaga pełnej identyczności interfejsu w obu orientacjach. Dopuszczalne są różnice w układzie treści, o ile użytkownik zachowuje dostęp do tych samych informacji i funkcji. Podczas oceny należy zwrócić szczególną uwagę na formularze, procesy wieloetapowe oraz ekrany zawierające duże ilości danych, ponieważ właśnie tam najczęściej pojawiają się problemy związane ze zmianą orientacji urządzenia.
