---
id: test-gesty-systemowe-i-niestandardowe-aplikacja-mobilna
title: Gesty systemowe i niestandardowe (aplikacja mobilna)
sidebar_label: Gesty systemowe i niestandardowe
sidebar_position: 97
description: Scenariusz testu sprawdzającego, czy funkcje aplikacji mobilnej wykorzystujące gesty systemowe lub niestandardowe pozostają dostępne dla użytkowników korzystających z technologii wspomagających oraz czy dla gestów złożonych zapewniono alternatywne sposoby wykonania tych samych działań.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-097**

## Nazwa testu

Gesty systemowe i niestandardowe (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy funkcje aplikacji mobilnej wykorzystujące gesty systemowe lub niestandardowe pozostają dostępne dla użytkowników korzystających z technologii wspomagających oraz czy dla gestów złożonych zapewniono alternatywne sposoby wykonania tych samych działań.

## Powiązane wymagania

### WCAG 2.1 / 2.2

W szczególności:

- 2.5.1 Gesty wskaźnika
- 2.5.2 Rezygnacja ze wskazania
- 2.5.4 Aktywowanie ruchem
- 2.5.7 Przeciąganie
- 2.1.1 Klawiatura
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

W szczególności:

- 11.2.5.1 Pointer Gestures
- 11.2.5.2 Pointer Cancellation
- 11.2.5.4 Motion Actuation
- 11.2.5.7 Dragging Movements

---

## Dlaczego to jest ważne

Aplikacje mobilne często wykorzystują gesty takie jak:

- przesunięcie palcem,
- przeciągnięcie,
- szczypanie (pinch),
- rozsuwanie palców,
- przeciągnięcie w określonym kierunku,
- gesty wielopunktowe.

Dla wielu użytkowników wykonanie takich gestów może być trudne lub niemożliwe.

Problem dotyczy w szczególności:

- osób niewidomych korzystających z czytników ekranu,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników przełączników,
- osób korzystających z klawiatury zewnętrznej,
- użytkowników alternatywnych metod sterowania.

Jeżeli wykonanie funkcji wymaga wyłącznie złożonego gestu, część użytkowników może utracić dostęp do funkcjonalności aplikacji.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- użytkowników technologii wspomagających,
- użytkowników czytników ekranu.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji Android,
- aplikacji iOS,
- ekranów wykorzystujących gesty dotykowe,
- komponentów niestandardowych,
- galerii zdjęć,
- map,
- karuzel,
- list przewijanych gestami,
- systemów nawigacji opartych na gestach.

---

## Gesty objęte oceną

### Gesty systemowe

Przykładowo:

- przewijanie,
- cofanie,
- przechodzenie między ekranami,
- gesty czytnika ekranu.

### Gesty niestandardowe

Przykładowo:

- przesunięcie karty w celu usunięcia,
- przeciągnięcie elementu,
- gest dwoma lub trzema palcami,
- niestandardowe skróty gestowe,
- sterowanie funkcjami za pomocą ruchów dłoni.

---

## Metoda badania

### Krok 1. Identyfikacja gestów

Przejrzyj aplikację i zidentyfikuj wszystkie funkcje aktywowane przez:

- pojedyncze gesty,
- gesty wielopunktowe,
- przeciąganie,
- ruch urządzenia.

### Krok 2. Ocena alternatyw

Dla każdego gestu sprawdź, czy dostępna jest alternatywna metoda wykonania tej samej funkcji.

Przykładowo:

- przycisk,
- menu,
- polecenie kontekstowe,
- obsługa klawiaturą,
- standardowy element interfejsu.

### Krok 3. Test z czytnikiem ekranu

Uruchom:

- TalkBack (Android)

lub

- VoiceOver (iOS)

Sprawdź, czy funkcjonalność pozostaje dostępna podczas korzystania z czytnika ekranu.

### Krok 4. Ocena kluczowych procesów

Sprawdź, czy użytkownik może wykonać wszystkie kluczowe zadania bez konieczności stosowania gestów złożonych.

---

## Kryteria oceny

### Spełnia

Wszystkie funkcje wymagające gestów złożonych posiadają alternatywny sposób wykonania.

Użytkownik może korzystać z aplikacji bez konieczności wykonywania gestów wielopunktowych lub niestandardowych.

### Częściowo spełnia

Większość funkcji posiada alternatywne rozwiązania, jednak część funkcjonalności nadal wymaga gestów niedostępnych dla części użytkowników.

### Nie spełnia

Istnieją funkcje, które mogą zostać wykonane wyłącznie przy użyciu gestów niestandardowych lub wielopunktowych.

### Nie dotyczy

Aplikacja nie wykorzystuje gestów wykraczających poza standardowe aktywowanie elementów interfejsu.

---

## Typowe niezgodności

- usuwanie elementów wyłącznie przez przesunięcie palcem,
- brak alternatywy dla gestu „przeciągnij i upuść”,
- funkcje dostępne wyłącznie po wykonaniu gestu wielopunktowego,
- sterowanie mapą wyłącznie przy użyciu gestów szczypania,
- ukryte funkcje dostępne wyłącznie poprzez niestandardowe gesty.

---

## Dobre praktyki

- zapewnianie przycisków wykonujących te same funkcje co gesty,
- udostępnianie funkcji poprzez menu kontekstowe,
- stosowanie standardowych komponentów systemowych,
- testowanie aplikacji z TalkBack i VoiceOver,
- unikanie ukrywania kluczowych funkcji za gestami niestandardowymi.

---

## Klasyfikacja problemów

### Krytyczne

- wykonanie kluczowego zadania możliwe wyłącznie przy użyciu niedostępnego gestu.

### Istotne

- brak alternatywy dla istotnych funkcji aplikacji.

### Umiarkowane

- dostępność funkcji zależna od wykonania trudnych gestów.

### Drobne

- lokalne problemy dotyczące funkcji pomocniczych.

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
- Gesty wskaźnika
- Przeciąganie
- Rezygnacja ze wskazania
- Aktywowanie ruchem
- Karuzela
- Galeria obrazów

---

## Uwagi

Test stanowi mobilny odpowiednik kart dotyczących gestów wskaźnika, przeciągania i aktywowania ruchem, ale koncentruje się na rzeczywistym sposobie korzystania z aplikacji mobilnych. Szczególną uwagę należy zwrócić na funkcjonalności dostępne wyłącznie poprzez przesunięcia, gesty wielopunktowe lub gesty specyficzne dla danej aplikacji. W przypadku aplikacji mobilnych brak alternatywy dla takich gestów jest jedną z najczęstszych przyczyn niedostępności dla użytkowników technologii wspomagających.
