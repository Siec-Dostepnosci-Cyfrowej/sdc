---
id: test-spojna-pomoc
title: Spójna pomoc
sidebar_label: Spójna pomoc
sidebar_position: 91
description: Scenariusz testu sprawdzającego, czy mechanizmy pomocy dostępne na stronach, ekranach lub w procesach użytkownika są prezentowane w spójny sposób i występują w tej samej względnej kolejności w całym rozwiązaniu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,spójna pomoc]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,spójna pomoc]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-091**

## 2. Nazwa testu

**Spójna pomoc**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy mechanizmy pomocy dostępne na stronach, ekranach lub w procesach użytkownika są prezentowane w spójny sposób i występują w tej samej względnej lokalizacji oraz kolejności w całym rozwiązaniu.

### Co oznacza „spójna pomoc”?

Przez spójną pomoc rozumie się sytuację, w której użytkownik może przewidzieć, gdzie znajdzie dostępne formy wsparcia podczas korzystania z serwisu, aplikacji lub usługi cyfrowej.

Jeżeli rozwiązanie udostępnia mechanizmy pomocy, takie jak:

- formularz kontaktowy,
- numer telefonu,
- adres e-mail,
- czat wsparcia,
- centrum pomocy,
- FAQ,
- wirtualny asystent,
- mechanizm zgłaszania problemów,

powinny one występować w tych samych lub równoważnych miejscach na kolejnych stronach i ekranach.

Kryterium nie wymaga zapewnienia określonego rodzaju pomocy. Wymaga jedynie zachowania spójności jej prezentacji.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 3.2.6 Spójna pomoc (Poziom A)

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.2.6 Consistent Help
- 11.3.2.6 Consistent Help

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- aplikacji webowych,
- aplikacji mobilnych,
- formularzy elektronicznych,
- usług cyfrowych,
- systemów samoobsługowych,
- portali usługowych,
- systemów transakcyjnych.

Test ma zastosowanie wyłącznie wtedy, gdy rozwiązanie udostępnia mechanizmy pomocy.

## 7. Oczekiwany wynik

Mechanizmy pomocy:

- są dostępne tam, gdzie użytkownik może ich potrzebować,
- występują w przewidywalnych miejscach,
- zachowują tę samą względną lokalizację,
- zachowują tę samą względną kolejność względem innych mechanizmów pomocy.

Użytkownik może łatwo odnaleźć pomoc podczas przechodzenia pomiędzy stronami lub ekranami.

## 8. Dlaczego to jest ważne

Użytkownicy potrzebujący pomocy powinni móc szybko odnaleźć dostępne formy wsparcia.

Jeżeli na różnych stronach lub ekranach:

- formularz kontaktowy pojawia się w różnych miejscach,
- numer telefonu jest umieszczany w różnych częściach interfejsu,
- link do pomocy zmienia położenie,
- czat wsparcia występuje w nieprzewidywalnych lokalizacjach,

użytkownik musi każdorazowo uczyć się nowego układu interfejsu.

Spójność lokalizacji mechanizmów pomocy zmniejsza obciążenie poznawcze i ułatwia uzyskanie wsparcia.

## 9. Kogo to dotyczy

Szczególnie:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w uczeniu się,
- osób z niepełnosprawnością intelektualną,
- osób starszych,
- użytkowników rzadko korzystających z rozwiązania,
- osób korzystających z usług sporadycznie,
- wszystkich użytkowników poszukujących pomocy.

## 10. Sposób testowania

### Krok 1. Identyfikacja mechanizmów pomocy

Zidentyfikuj wszystkie sposoby uzyskania pomocy dostępne w rozwiązaniu.

Za mechanizmy pomocy należy uznać w szczególności:

- dane kontaktowe umożliwiające uzyskanie pomocy,
- formularze kontaktowe,
- linki do pomocy lub wsparcia,
- centra pomocy,
- FAQ,
- czaty wsparcia,
- wirtualnych asystentów,
- dedykowane sekcje „Pomoc”,
- mechanizmy zgłaszania problemów.

### Krok 2. Wybór stron i procesów

Przejdź przez:

- stronę główną,
- kluczowe sekcje serwisu,
- formularze,
- główne procesy użytkownika,
- wybrane podstrony lub ekrany.

### Krok 3. Ocena lokalizacji

Sprawdź, czy mechanizmy pomocy:

- występują na wszystkich odpowiednich stronach lub ekranach,
- są umieszczone w tej samej względnej lokalizacji,
- zachowują tę samą względną kolejność względem innych mechanizmów pomocy.

### Krok 4. Ocena przewidywalności

Sprawdź, czy użytkownik może przewidzieć, gdzie znajdzie pomoc podczas przechodzenia pomiędzy stronami lub ekranami.

## 11. Kryteria oceny wyniku

### Spełnione

Mechanizmy pomocy występują w spójnych lokalizacjach oraz zachowują tę samą względną kolejność na wszystkich stronach lub ekranach, na których są dostępne.

### Częściowo spełnione

Większość mechanizmów pomocy jest prezentowana spójnie, jednak występują pojedyncze niespójności.

### Niespełnione

Mechanizmy pomocy są rozmieszczone w różnych miejscach lub prezentowane w różnej kolejności bez uzasadnionej przyczyny.

### Nie dotyczy

Rozwiązanie nie udostępnia żadnych mechanizmów pomocy.

## 12. Typowe niezgodności

- link „Pomoc” występujący w różnych miejscach na różnych stronach,
- numer telefonu umieszczony raz w nagłówku, a raz w stopce,
- formularz kontaktowy dostępny tylko na części ekranów bez uzasadnienia,
- różna kolejność elementów „FAQ”, „Kontakt” i „Czat”,
- zmieniająca się lokalizacja przycisku pomocy,
- różne sposoby prezentowania pomocy w poszczególnych etapach procesu użytkownika.

## 13. Dobre praktyki

- umieszczanie pomocy zawsze w tym samym miejscu,
- stosowanie jednolitego układu elementów wsparcia,
- utrzymywanie tej samej kolejności mechanizmów pomocy,
- zapewnienie dostępu do pomocy podczas całego procesu użytkownika,
- wyróżnianie mechanizmów pomocy w sposób spójny wizualnie,
- stosowanie tych samych nazw i oznaczeń dla funkcji pomocy.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, wskazanie stwierdzonych niespójności oraz ocenę ich wpływu na użytkowników.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Mechanizmy pomocy dostępne w badanym rozwiązaniu nie są prezentowane w spójny sposób. Ich lokalizacja lub kolejność zmienia się pomiędzy stronami i ekranami, co utrudnia użytkownikom szybkie odnalezienie wsparcia podczas korzystania z usługi.

## 17. Rekomendacje naprawcze

- ujednolicić lokalizację mechanizmów pomocy,
- zachować tę samą kolejność elementów wsparcia,
- zapewnić dostęp do pomocy w całym procesie użytkownika,
- stosować jednolite nazewnictwo i oznaczenia funkcji pomocy,
- przeprowadzić przegląd wszystkich ekranów pod kątem spójności prezentacji wsparcia.

## 18. Powiązane testy

- testID-073 Spójność identyfikacji
- testID-074 Spójność nawigacji
- testID-121 Zgłoszenie problemu dostępności
- testID-123 Strona kontaktowa
- testID-120 Formularz
- testID-069 Komunikaty o stanie
- testID-135 Informacje o dostępności
