---
id: test-spojna-pomoc
title: Spójna pomoc
sidebar_label: Spójna pomoc
sidebar_position: 91
description: Scenariusz testu sprawdzającego, czy mechanizmy pomocy dostępne na stronach, ekranach lub w procesach użytkownika są prezentowane w spójny sposób i występują w tej samej względnej kolejności w całym rozwiązaniu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,rozmiar celu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-091**

## Nazwa testu

Spójna pomoc

## Cel testu

Sprawdzenie, czy mechanizmy pomocy dostępne na stronach, ekranach lub w procesach użytkownika są prezentowane w spójny sposób i występują w tej samej względnej kolejności w całym rozwiązaniu.

## Powiązane wymagania

### WCAG 2.2

- 3.2.6 Spójna pomoc (Consistent Help) – poziom A

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.2.6 Consistent Help
- 11.3.2.6 Consistent Help

---

## Dlaczego to jest ważne

Użytkownicy potrzebujący pomocy powinni móc szybko odnaleźć dostępne formy wsparcia.

Jeżeli na różnych stronach lub ekranach:

- formularz kontaktowy pojawia się w różnych miejscach,
- numer telefonu jest umieszczany w różnych częściach interfejsu,
- link do pomocy zmienia położenie,
- czat wsparcia występuje w nieprzewidywalnych miejscach,

użytkownik musi każdorazowo uczyć się nowego układu interfejsu.

Spójność lokalizacji mechanizmów pomocy zmniejsza obciążenie poznawcze i ułatwia uzyskanie wsparcia.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w uczeniu się,
- osób starszych,
- użytkowników rzadko korzystających z rozwiązania,
- wszystkich użytkowników poszukujących pomocy.

---

## Zakres stosowania

Test należy wykonywać dla:

- stron internetowych,
- aplikacji webowych,
- aplikacji mobilnych,
- formularzy elektronicznych,
- usług cyfrowych,
- systemów samoobsługowych.

Test ma zastosowanie wyłącznie wtedy, gdy rozwiązanie udostępnia mechanizmy pomocy.

---

## Definicja mechanizmu pomocy

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

Nie zalicza się do nich:

- głównej nawigacji,
- wyszukiwarki ogólnej,
- standardowych elementów treści.

---

## Metoda badania

### Krok 1. Identyfikacja mechanizmów pomocy

Zidentyfikuj wszystkie sposoby uzyskania pomocy dostępne w rozwiązaniu.

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
- zachowują tę samą kolejność względem innych mechanizmów pomocy.

### Krok 4. Ocena spójności

Sprawdź, czy użytkownik może przewidzieć, gdzie znajdzie pomoc podczas przechodzenia pomiędzy stronami lub ekranami.

---

## Kryteria oceny

### Spełnia

Mechanizmy pomocy występują w spójnych lokalizacjach oraz zachowują tę samą względną kolejność na wszystkich stronach lub ekranach, na których są dostępne.

### Częściowo spełnia

Większość mechanizmów pomocy jest prezentowana spójnie, jednak występują pojedyncze niespójności.

### Nie spełnia

Mechanizmy pomocy są rozmieszczone w różnych miejscach lub prezentowane w różnej kolejności bez uzasadnionej przyczyny.

### Nie dotyczy

Rozwiązanie nie udostępnia żadnych mechanizmów pomocy.

---

## Typowe niezgodności

- link „Pomoc” występujący w różnych miejscach na różnych stronach,
- numer telefonu umieszczony raz w nagłówku, a raz w stopce,
- formularz kontaktowy dostępny tylko na części ekranów bez uzasadnienia,
- różna kolejność elementów „FAQ”, „Kontakt”, „Czat” w różnych sekcjach rozwiązania,
- zmieniająca się lokalizacja przycisku pomocy.

---

## Dobre praktyki

- umieszczanie pomocy zawsze w tym samym miejscu,
- stosowanie jednolitego układu elementów wsparcia,
- utrzymywanie tej samej kolejności mechanizmów pomocy,
- zapewnienie dostępu do pomocy podczas całego procesu użytkownika,
- wyróżnianie mechanizmów pomocy w sposób spójny wizualnie.

---

## Klasyfikacja problemów

### Istotne

- brak możliwości przewidywalnego odnalezienia pomocy w kluczowych procesach.

### Umiarkowane

- niespójne rozmieszczenie mechanizmów pomocy na różnych stronach lub ekranach.

### Drobne

- niewielkie różnice lokalizacyjne nieutrudniające istotnie odnalezienia pomocy.

---

## Profil stosowania testu

| Profil                                       | Stosowanie |
| -------------------------------------------- | ---------- |
| Okresowa ocena stanu zgodności — minimum     | Nie        |
| Okresowa ocena stanu zgodności — rozszerzona | Tak        |
| Ocena przed odbiorem rozwiązania             | Tak        |
| Audyt zgodności                              | Tak        |
| ACR-MIN                                      | Nie        |
| ACR-EXT                                      | Tak        |
| ACR-AUDIT                                    | Tak        |

---

## Powiązane testy

- Spójność nawigacji
- Spójność identyfikacji
- Wyszukiwanie w witrynie
- Formularz kontaktowy
- Komunikaty o stanie
- Dostępna nazwa elementu interaktywnego

---

## Uwagi

Kryterium 3.2.6 zostało wprowadzone w WCAG 2.2. Dotyczy wyłącznie mechanizmów pomocy dostępnych w rozwiązaniu. Nie wymaga zapewnienia pomocy ani określonego rodzaju wsparcia, lecz nakazuje zachowanie spójności jego prezentacji. Jeżeli pomoc jest dostępna, użytkownik powinien móc przewidzieć, gdzie ją znaleźć. W praktyce kryterium ma szczególne znaczenie dla rozbudowanych serwisów publicznych, portali usługowych, systemów transakcyjnych oraz formularzy elektronicznych.
