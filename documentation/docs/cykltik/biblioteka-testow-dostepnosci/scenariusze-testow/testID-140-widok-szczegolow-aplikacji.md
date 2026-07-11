---
id: test-widok-szczegolow-aplikacji
title: Karta testu - Widok szczegółów w aplikacji
sidebar_label: Widok szczegółów
sidebar_position: 140
description: Test sprawdza, czy ekran prezentujący szczegółowe informacje o wybranym obiekcie umożliwia użytkownikowi zapoznanie się z treścią, zrozumienie jej znaczenia oraz wykonanie dostępnych działań.
keywords: [aplikacja mobilna,widok szczegółów,ekran szczegółów,karta obiektu,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
tags: [aplikacja mobilna,widok szczegółów,ekran szczegółów,karta obiektu,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-140**

## 2. Nazwa testu

**Widok szczegółów w aplikacji**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy ekran prezentujący szczegółowe informacje o wybranym obiekcie umożliwia użytkownikowi zapoznanie się z treścią, zrozumienie jej znaczenia oraz wykonanie dostępnych działań.

### Co oznacza „widok szczegółów”?

Widok szczegółów to ekran prezentujący pełne informacje dotyczące wybranego elementu wcześniej odnalezionego przez użytkownika.

Przykładami są:

- szczegóły usługi,
- szczegóły sprawy,
- szczegóły wydarzenia,
- szczegóły dokumentu,
- szczegóły zgłoszenia,
- szczegóły powiadomienia,
- szczegóły rekordu danych.

### Jaki jest cel widoku szczegółów?

Widok szczegółów powinien umożliwiać:

- zapoznanie się z informacją,
- zrozumienie jej znaczenia,
- wykonanie dostępnych działań,
- przejście do kolejnych etapów procesu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę w szczególności:

- 1.3.1 Informacje i relacje,
- 1.3.2 Znacząca kolejność,
- 1.4.3 Kontrast (minimum),
- 1.4.4 Zmiana rozmiaru tekstu,
- 2.4.3 Kolejność fokusu,
- 2.4.4 Cel łącza,
- 2.4.6 Nagłówki i etykiety,
- 2.4.7 Widoczny fokus,
- 2.5.3 Etykieta w nazwie,
- 3.2.3 Spójna nawigacja,
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

W szczególności wymagania dotyczące:

- struktury informacji,
- prezentacji treści,
- nawigacji,
- współpracy z technologiami wspomagającymi.

## 6. Zastosowanie do treści

Test stosuje się do:

- ekranów szczegółów usług,
- ekranów szczegółów spraw,
- ekranów wydarzeń,
- ekranów dokumentów,
- ekranów komunikatów,
- ekranów zgłoszeń,
- ekranów rekordów danych,
- ekranów informacji o użytkowniku,
- ekranów szczegółowych aplikacji mobilnych.

## 7. Oczekiwany wynik

Użytkownik może:

- odczytać wszystkie informacje,
- zrozumieć strukturę treści,
- zidentyfikować dostępne działania,
- przejść do kolejnego etapu procesu,
- wrócić do poprzedniego widoku.

## 8. Dlaczego to jest ważne

Widoki szczegółowe są miejscem, w którym użytkownik podejmuje decyzje i wykonuje działania.

Jeżeli informacje są:

- nieczytelne,
- źle uporządkowane,
- niepełne,
- niedostępne dla technologii wspomagających,

użytkownik może:

- błędnie zinterpretować treść,
- nie odnaleźć potrzebnych informacji,
- nie wykonać zadania,
- zrezygnować z korzystania z aplikacji.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- wszystkich użytkowników korzystających z aplikacji po raz pierwszy.

## 10. Sposób testowania

### Krok 1. Otwórz widok szczegółów

Przejdź do wybranego ekranu szczegółowego.

### Krok 2. Oceń strukturę treści

Sprawdź, czy:

- treść jest logicznie uporządkowana,
- informacje są pogrupowane,
- użytkownik rozumie strukturę ekranu.

### Krok 3. Oceń czytelność

Sprawdź, czy:

- tekst jest czytelny,
- kontrast jest wystarczający,
- informacje nie są ukryte,
- treść jest kompletna.

### Krok 4. Oceń działania dostępne dla użytkownika

Sprawdź, czy:

- przyciski są zrozumiałe,
- działania są jednoznacznie opisane,
- użytkownik rozumie skutki wykonania działania.

### Krok 5. Oceń współpracę z technologiami wspomagającymi

Włącz TalkBack lub VoiceOver.

Sprawdź, czy:

- treść jest poprawnie odczytywana,
- elementy interaktywne są identyfikowane,
- kolejność fokusu jest logiczna.

### Krok 6. Oceń nawigację

Sprawdź, czy użytkownik może:

- wrócić do poprzedniego widoku,
- przejść do kolejnych działań,
- zachować orientację w procesie.

## 11. Kryteria oceny wyniku

### Spełnione

Widok szczegółów umożliwia zapoznanie się z treścią, zrozumienie jej oraz wykonanie dostępnych działań.

### Częściowo spełnione

Występują pojedyncze problemy utrudniające korzystanie z widoku szczegółowego.

### Niespełnione

Treść lub funkcjonalność są niedostępne albo użytkownik nie może skutecznie wykonać zadania.

### Nie dotyczy

Aplikacja nie zawiera ocenianego typu widoku szczegółowego.

## 12. Typowe niezgodności

- brak logicznej struktury informacji,
- nieopisane przyciski,
- błędna kolejność fokusu,
- nieczytelne nagłówki,
- ukryte informacje,
- problemy z odczytem przez TalkBack lub VoiceOver,
- niejednoznaczne działania,
- brak możliwości powrotu do poprzedniego ekranu.

## 13. Dobre praktyki

- stosowanie czytelnej struktury informacji,
- grupowanie powiązanych treści,
- jednoznaczne oznaczanie działań,
- stosowanie nagłówków i sekcji,
- testowanie z TalkBack i VoiceOver,
- projektowanie z perspektywy realizacji zadania użytkownika.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę dostępności treści oraz działań dostępnych w widoku szczegółowym.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Widok szczegółów nie zapewnia użytkownikowi pełnego dostępu do prezentowanych informacji lub dostępnych działań. Część treści jest nieczytelna, nieprawidłowo zorganizowana albo niedostępna dla technologii wspomagających, co utrudnia realizację zadania.

## 17. Rekomendacje naprawcze

- uporządkować strukturę informacji,
- poprawić oznaczenia elementów interaktywnych,
- zapewnić poprawną kolejność fokusu,
- zwiększyć czytelność prezentowanych treści,
- poprawić współpracę z technologiami wspomagającymi,
- przeprowadzić testy z użytkownikami reprezentującymi różne grupy odbiorców.

## 18. Powiązane testy

- testID-138 Ekran główny aplikacji
- testID-139 Lista funkcji aplikacji
- testID-141 Ustawienia aplikacji
- testID-143 Nazwa ekranu aplikacji
- testID-116 Karta usługi
- testID-114 Artykuł / komunikat / wpis
- testID-131 Wydarzenie
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-103 Komunikaty o stanie (aplikacja mobilna)
