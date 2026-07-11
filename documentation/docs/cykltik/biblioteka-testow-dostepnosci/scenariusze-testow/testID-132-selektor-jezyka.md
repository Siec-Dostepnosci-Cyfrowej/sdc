---
id: test-selektor-jezyka
title: Scenariusz testu - Selektor języka
sidebar_label: Selektor języka
sidebar_position: 132
description: Scenariusz testu sprawdzającego, czy selektor języka jest łatwy do odnalezienia, zrozumiały, dostępny z klawiatury i poprawnie przełącza użytkownika do właściwej wersji językowej.
keywords: [selektor języka, wybór języka, wersje językowe, wielojęzyczność, WCAG, dostępność cyfrowa]
tags: [test dostępności, selektor języka, wielojęzyczność, komponent, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-132**

## 2. Nazwa testu

**Selektor języka**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy komponent służący do wyboru wersji językowej serwisu jest zrozumiały, łatwy do odnalezienia, dostępny z klawiatury i technologii wspomagających oraz czy poprawnie prowadzi użytkownika do właściwej wersji językowej treści.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.4.3 Kontrast
- 2.1.1 Klawiatura
- 2.4.3 Kolejność fokusu
- 2.4.4 Cel łącza
- 2.4.7 Widoczny fokus
- 2.5.3 Etykieta w nazwie
- 3.1.1 Język strony
- 3.1.2 Język części
- 3.2.3 Spójna nawigacja
- 4.1.2 Nazwa, rola, wartość

## 6. Zastosowanie do treści

Test stosuje się do:

- selektorów języka,
- przełączników wersji językowych,
- list linków do wersji językowych,
- rozwijanych menu językowych,
- serwisów i aplikacji wielojęzycznych.

## 7. Oczekiwany wynik

Użytkownik może:

- łatwo odnaleźć selektor języka,
- rozpoznać jego funkcję,
- wybrać właściwy język,
- obsłużyć komponent klawiaturą,
- rozpoznać aktualnie wybraną wersję językową,
- zostać przeniesiony do odpowiedniej wersji językowej strony.

## 8. Dlaczego to jest ważne

Selektor języka jest kluczowym elementem serwisu wielojęzycznego. Jeżeli jest niedostępny, niejednoznaczny lub działa nieprzewidywalnie, użytkownik może nie znaleźć treści w zrozumiałym dla siebie języku albo zostać przeniesiony w niewłaściwe miejsce.

## 9. Kogo to dotyczy

Szczególnie:

- osób korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- cudzoziemców,
- osób słabiej znających język podstawowy serwisu,
- użytkowników urządzeń mobilnych.

## 10. Sposób testowania

### Krok 1. Odnalezienie selektora

Sprawdź, czy selektor języka jest łatwy do znalezienia, najlepiej w nagłówku strony lub innym przewidywalnym miejscu.

### Krok 2. Nazwy języków

Sprawdź, czy języki są opisane pełnymi nazwami, najlepiej w językach własnych, np.:

- Polski,
- English,
- Deutsch,
- Українська.

Nie powinno się stosować wyłącznie skrótów typu „PL”, „EN” ani samych flag.

### Krok 3. Aktualnie wybrany język

Sprawdź, czy aktualny język jest jednoznacznie oznaczony wizualnie i programowo, np. za pomocą `aria-current`.

### Krok 4. Obsługa klawiaturą

Sprawdź, czy:

- selektor jest osiągalny klawiszem Tab,
- można wybrać język klawiaturą,
- fokus jest widoczny,
- nie występuje pułapka klawiaturowa.

### Krok 5. Menu rozwijane

Jeżeli selektor działa jako menu rozwijane, sprawdź, czy:

- można je otworzyć klawiszem Enter lub Spacja,
- można je zamknąć klawiszem Esc,
- można przejść przez opcje klawiaturą,
- stan rozwinięcia jest poprawnie komunikowany.

### Krok 6. Nazwa, rola i stan

Sprawdź, czy komponent posiada poprawną nazwę dostępną, rolę i stan, np.:

- „Wybór języka”,
- „Polski, wybrano”,
- „English”.

### Krok 7. Zmiana języka

Sprawdź, czy po zmianie języka:

- ładuje się właściwa wersja językowa,
- atrybut `lang` strony odpowiada nowemu językowi,
- użytkownik trafia do odpowiednika aktualnej strony, jeśli istnieje.

### Krok 8. Treści i dokumenty po zmianie języka

Sprawdź, czy po zmianie języka zmieniają się także:

- menu,
- nagłówki,
- etykiety formularzy,
- komunikaty,
- dokumenty i multimedia, jeżeli mają wersje językowe.

## 11. Kryteria oceny wyniku

### Spełnione

Selektor języka jest zrozumiały, dostępny z klawiatury i technologii wspomagających oraz poprawnie przełącza użytkownika do właściwej wersji językowej.

### Częściowo spełnione

Selektor działa, ale występują problemy utrudniające jego odnalezienie, zrozumienie lub obsługę.

### Niespełnione

Użytkownik nie może skutecznie odnaleźć, obsłużyć lub wykorzystać selektora języka.

## 12. Typowe niezgodności

- selektor oparty wyłącznie na flagach,
- stosowanie samych skrótów językowych,
- brak informacji o aktualnie wybranym języku,
- brak obsługi klawiaturą,
- niewidoczny fokus,
- menu rozwijane niedostępne dla czytnika ekranu,
- brak poprawnego atrybutu `lang` po zmianie języka,
- przełączenie języka zawsze prowadzi do strony głównej,
- mieszanie języków po zmianie wersji.

## 13. Dobre praktyki

- umieszczanie selektora w nagłówku strony,
- stosowanie nazw języków w językach własnych,
- niestosowanie flag jako oznaczeń języka,
- oznaczanie aktualnego języka programowo,
- zapewnienie odpowiedników stron między wersjami językowymi,
- testowanie selektora klawiaturą i czytnikiem ekranu.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Selektor języka nie jest w pełni dostępny. Komponent wykorzystuje wyłącznie skróty lub flagi jako oznaczenia języków, nie wskazuje programowo aktualnie wybranej wersji i nie może być poprawnie obsłużony przy użyciu klawiatury. Problem może utrudniać użytkownikom przejście do właściwej wersji językowej serwisu.

## 17. Rekomendacje naprawcze

- zastąpić flagi nazwami języków,
- zapewnić pełną obsługę klawiaturą,
- oznaczyć aktualny język programowo,
- poprawić etykiety dostępne komponentu,
- zapewnić poprawne ustawienie atrybutu `lang`,
- kierować użytkownika do odpowiednika aktualnej strony w wybranym języku.

## 18. Powiązane testy

- testID-129 Strona wielojęzyczna
- testID-127 Strona główna
- testID-123 Strona kontaktowa
- testID-128 Pliki do pobrania
- testID-088 Nietypowe słowa
- testID-089 Skróty
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu

---