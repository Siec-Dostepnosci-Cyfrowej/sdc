---
id: test-kolejnosc-fokusu-aplikacja-mobilna
title: Kolejność fokusu (aplikacja mobilna)
sidebar_label: Kolejność fokusu (aplikacja mobilna)
sidebar_position: 98
description: Scenariusz testu sprawdzającego, czy podczas nawigacji przy użyciu technologii wspomagających, klawiatury zewnętrznej lub funkcji dostępności systemu mobilnego fokus przemieszcza się w logicznej i przewidywalnej kolejności.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,Kkolejność fokusu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,kolejność fokusu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-098**

## Nazwa testu

Kolejność fokusu (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy podczas nawigacji przy użyciu technologii wspomagających, klawiatury zewnętrznej lub funkcji dostępności systemu mobilnego fokus przemieszcza się w logicznej i przewidywalnej kolejności, zgodnej ze strukturą interfejsu i przebiegiem zadania użytkownika.

## Powiązane wymagania

### WCAG 2.1 / 2.2

- 1.3.2 Znacząca kolejność
- 2.4.3 Kolejność fokusu
- 2.4.11 Fokus niezakryty (minimum)
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

- 11.2.4.3 Focus Order
- 11.2.4.11 Focus Not Obscured (Minimum)
- 11.5.2.9 Hierarchical Relationships

---

## Dlaczego to jest ważne

Użytkownicy korzystający z:

- TalkBack,
- VoiceOver,
- klawiatury zewnętrznej,
- przełączników,
- sterowania głosowego,

poznają interfejs aplikacji w kolejności wyznaczanej przez fokus dostępności.

Jeżeli kolejność fokusu jest nielogiczna, użytkownik może:

- tracić orientację w interfejsie,
- pomijać ważne informacje,
- nie rozumieć relacji między elementami,
- mieć trudności z wykonywaniem zadań.

Problem ten szczególnie silnie wpływa na osoby niewidome, które nie mogą wykorzystać układu wizualnego ekranu do zrozumienia struktury aplikacji.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących korzystających z czytników ekranu,
- osób korzystających z klawiatur zewnętrznych,
- użytkowników przełączników,
- osób korzystających z funkcji dostępności systemu operacyjnego.

---

## Zakres stosowania

Test należy wykonywać dla:

- ekranów głównych,
- formularzy,
- menu,
- okien dialogowych,
- list wyników,
- ekranów ustawień,
- procesów wieloetapowych,
- niestandardowych komponentów interfejsu.

---

## Narzędzia

### Android

- TalkBack
- klawiatura zewnętrzna (opcjonalnie)

### iOS

- VoiceOver
- klawiatura zewnętrzna (opcjonalnie)

---

## Metoda badania

### Krok 1. Uruchomienie technologii wspomagającej

Włącz:

- TalkBack

lub

- VoiceOver.

### Krok 2. Nawigacja po ekranie

Przemieszczaj fokus przy użyciu standardowych gestów czytnika ekranu lub klawisza Tab na klawiaturze zewnętrznej.

### Krok 3. Ocena logiczności kolejności

Sprawdź, czy kolejność fokusu odpowiada:

- kolejności wizualnej,
- kolejności odczytu treści,
- logice wykonywania zadania.

### Krok 4. Ocena grup elementów

Sprawdź, czy fokus prawidłowo przechodzi przez:

- grupy pól formularzy,
- elementy menu,
- listy wyników,
- zakładki,
- przyciski sterujące.

### Krok 5. Ocena zmian ekranów

Sprawdź, czy po:

- otwarciu nowego ekranu,
- otwarciu okna dialogowego,
- zamknięciu okna dialogowego,
- przejściu do kolejnego kroku procesu,

fokus trafia w logiczne miejsce.

---

## Pytania kontrolne

1. Czy fokus przemieszcza się w logicznej kolejności?
2. Czy kolejność odzwierciedla strukturę ekranu?
3. Czy użytkownik może przewidzieć, który element zostanie odczytany jako następny?
4. Czy po zmianie ekranu fokus trafia do odpowiedniego miejsca?
5. Czy fokus nie przeskakuje losowo pomiędzy odległymi elementami?
6. Czy elementy powiązane są odczytywane obok siebie?
7. Czy użytkownik może wykonać zadanie bez utraty orientacji?

---

## Kryteria oceny

### Spełnia

Fokus przemieszcza się w logicznej, przewidywalnej kolejności zgodnej ze strukturą ekranu i przebiegiem zadania użytkownika.

### Częściowo spełnia

Występują pojedyncze problemy z kolejnością fokusu, które utrudniają korzystanie z aplikacji, ale nie uniemożliwiają realizacji zadań.

### Nie spełnia

Kolejność fokusu jest nielogiczna lub chaotyczna i utrudnia albo uniemożliwia korzystanie z aplikacji.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna posiada kolejność fokusu i może zostać oceniona.

---

## Typowe niezgodności

- fokus przeskakuje pomiędzy odległymi elementami,
- kolejność odczytu nie odpowiada kolejności wizualnej,
- przyciski odczytywane przed treścią, której dotyczą,
- pola formularza odczytywane w niewłaściwej kolejności,
- fokus przechodzi do ukrytych elementów,
- po zamknięciu okna dialogowego fokus trafia w losowe miejsce,
- po zmianie ekranu fokus pozostaje na nieistotnym elemencie.

---

## Dobre praktyki

- stosowanie natywnych komponentów systemowych,
- zachowanie zgodności kolejności logicznej i wizualnej,
- grupowanie powiązanych elementów,
- testowanie aplikacji z TalkBack i VoiceOver,
- kontrolowanie miejsca ustawienia fokusu po zmianach stanu interfejsu.

---

## Klasyfikacja problemów

### Krytyczne

- użytkownik nie może ukończyć kluczowego procesu z powodu błędnej kolejności fokusu,
- fokus uniemożliwia odnalezienie istotnych funkcji.

### Istotne

- fokus powoduje utratę orientacji podczas wykonywania zadania,
- formularze odczytywane są w niewłaściwej kolejności.

### Umiarkowane

- lokalne problemy dotyczące części ekranów lub komponentów.

### Drobne

- pojedyncze odstępstwa niewpływające znacząco na wykonanie zadania.

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
- Fokus niezakryty (minimum)
- Fokus niezakryty (ulepszone)
- Widoczność fokusu
- Dostępna nazwa elementu interaktywnego
- Komunikaty o stanie
- Formularz elektroniczny

---

## Uwagi

Jest to jeden z podstawowych testów dostępności aplikacji mobilnych. W praktyce wiele problemów wykrywanych podczas testów z TalkBack lub VoiceOver wynika nie z braku nazw elementów, lecz z nieprawidłowej kolejności fokusu. Test powinien być wykonywany zawsze razem z testem „Obsługa czytnikiem ekranu (aplikacja mobilna)”, ponieważ oba dotyczą rzeczywistej możliwości korzystania z aplikacji przez osoby niewidome. W okresowej ocenie stanu zgodności aplikacji mobilnych test ten powinien należeć do scenariusza minimum.
