---
id: test-obsluga-klawiatura-zewnetrzna-aplikacja-mobilna
title: Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
sidebar_label: Obsługa klawiaturą zewnętrzną
sidebar_position: 96
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna może być skutecznie obsługiwana przy użyciu zewnętrznej klawiatury oraz czy użytkownik może wykonywać kluczowe zadania bez konieczności korzystania z ekranu dotykowego.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-096**

## Nazwa testu

Obsługa klawiaturą zewnętrzną (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy aplikacja mobilna może być skutecznie obsługiwana przy użyciu zewnętrznej klawiatury oraz czy użytkownik może wykonywać kluczowe zadania bez konieczności korzystania z ekranu dotykowego.

## Powiązane wymagania

### WCAG 2.1 / 2.2

W szczególności:

* 2.1.1 Klawiatura
* 2.1.2 Bez pułapki na klawiaturę
* 2.4.3 Kolejność fokusu
* 2.4.7 Widoczny fokus
* 2.4.11 Fokus niezakryty (minimum)
* 2.4.12 Fokus niezakryty (ulepszone)
* 2.5.1 Gesty wskaźnika
* 4.1.2 Nazwa, rola, wartość

### EN 301 549

W szczególności:

* 11.2.1.1 Keyboard
* 11.2.1.2 No Keyboard Trap
* 11.2.4.3 Focus Order
* 11.2.4.7 Focus Visible
* 11.2.4.11 Focus Not Obscured (Minimum)
* 11.2.4.12 Focus Not Obscured (Enhanced)

---

## Dlaczego to jest ważne

Wielu użytkowników aplikacji mobilnych korzysta z:

* klawiatur Bluetooth,
* klawiatur podłączonych przez USB,
* klawiatur ekranowych sterowanych przełącznikami,
* technologii wspomagających wykorzystujących interfejs klawiatury.

Dla części osób z niepełnosprawnościami ruchowymi klawiatura może być podstawowym lub jedynym sposobem obsługi urządzenia mobilnego.

Jeżeli aplikacja nie obsługuje poprawnie klawiatury, użytkownik może nie być w stanie:

* przejść do wszystkich elementów,
* aktywować funkcji,
* wypełnić formularza,
* ukończyć procesu.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

* osób z niepełnosprawnościami ruchowymi,
* użytkowników przełączników i technologii alternatywnego sterowania,
* użytkowników tabletów i urządzeń hybrydowych,
* osób korzystających z klawiatur Bluetooth,
* użytkowników technologii wspomagających.

---

## Zakres stosowania

Test należy wykonywać dla:

* aplikacji Android,
* aplikacji iOS,
* głównych ekranów aplikacji,
* formularzy,
* menu,
* okien dialogowych,
* kluczowych procesów użytkownika,
* komponentów niestandardowych.

---

## Narzędzia

### Android

* fizyczna klawiatura Bluetooth lub USB,
* opcjonalnie TalkBack.

### iOS

* klawiatura Bluetooth,
* opcjonalnie VoiceOver.

---

## Metoda badania

### Krok 1. Podłączenie klawiatury

Podłącz zewnętrzną klawiaturę do urządzenia mobilnego.

### Krok 2. Nawigacja po interfejsie

Sprawdź możliwość przemieszczania się pomiędzy elementami przy użyciu:

* Tab,
* Shift + Tab,
* klawiszy strzałek,
* Enter,
* Spacji,
* skrótów systemowych.

### Krok 3. Ocena fokusu

Sprawdź, czy:

* fokus jest widoczny,
* kolejność nawigacji jest logiczna,
* fokus nie jest gubiony podczas zmiany ekranów,
* fokus nie zostaje ukryty przez inne elementy.

### Krok 4. Wykonanie kluczowych zadań

Przeprowadź najważniejsze procesy użytkownika wyłącznie przy użyciu klawiatury.

Przykładowo:

* logowanie,
* wyszukiwanie informacji,
* wypełnienie formularza,
* wykonanie operacji biznesowej.

### Krok 5. Ocena komponentów niestandardowych

Sprawdź działanie:

* zakładek,
* akordeonów,
* karuzel,
* menu,
* okien dialogowych,
* komponentów tworzonych indywidualnie przez producenta aplikacji.

---

## Kryteria oceny

### Spełnia

Użytkownik może:

* dotrzeć do wszystkich istotnych elementów,
* obsługiwać funkcje aplikacji,
* wykonać kluczowe zadania,
* zamykać okna dialogowe,
* opuszczać wszystkie komponenty,

wyłącznie przy użyciu klawiatury.

### Częściowo spełnia

Większość funkcji działa poprawnie, jednak część elementów nie jest dostępna lub działa nieprawidłowo podczas obsługi klawiaturą.

### Nie spełnia

Istnieją istotne bariery uniemożliwiające korzystanie z aplikacji przy użyciu klawiatury.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna powinna umożliwiać obsługę przy użyciu standardowych mechanizmów dostępności systemu operacyjnego.

---

## Typowe niezgodności

* brak możliwości przejścia do części elementów,
* nieprawidłowa kolejność fokusu,
* niewidoczny fokus,
* brak możliwości aktywacji przycisków klawiszem Enter lub Spacją,
* pułapka klawiaturowa,
* utrata fokusu po zmianie ekranu,
* komponenty niestandardowe nieobsługujące klawiatury.

---

## Dobre praktyki

* testowanie aplikacji z fizyczną klawiaturą,
* korzystanie z natywnych komponentów systemowych,
* zapewnianie widocznego fokusu,
* zachowanie logicznej kolejności nawigacji,
* obsługa standardowych skrótów i zachowań systemowych.

---

## Klasyfikacja problemów

### Krytyczne

* brak możliwości ukończenia kluczowego procesu przy użyciu klawiatury,
* pułapka klawiaturowa uniemożliwiająca dalszą pracę.

### Istotne

* niedostępność istotnych funkcji lub komponentów.

### Umiarkowane

* problemy z kolejnością fokusu lub aktywacją elementów.

### Drobne

* lokalne problemy niewpływające znacząco na realizację zadania.

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

* Obsługa czytnikiem ekranu (aplikacja mobilna)
* Dostęp z klawiatury
* Pułapka klawiaturowa
* Kolejność fokusu
* Widoczność fokusu
* Fokus niezakryty
* Gesty wskaźnika
* Aktywowanie ruchem

---

## Uwagi

Choć większość użytkowników aplikacji mobilnych korzysta z ekranu dotykowego, obsługa klawiatury jest istotnym wymaganiem dostępności. W praktyce wiele problemów ujawnianych podczas tego testu dotyczy niestandardowych komponentów, które nie korzystają z mechanizmów dostępności oferowanych przez system Android lub iOS. Test warto wykonywać równolegle z testem „Obsługa czytnikiem ekranu (aplikacja mobilna)”, ponieważ oba testy często wykrywają te same błędy związane z fokusem, strukturą interfejsu i dostępnością komponentów.
