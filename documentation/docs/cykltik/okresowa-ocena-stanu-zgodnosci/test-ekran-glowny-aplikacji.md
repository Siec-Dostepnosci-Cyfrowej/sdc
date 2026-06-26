---
id: test-ekran-glowny-aplikacji
title: Karta testu - Ekran główny aplikacji
sidebar_label: Ekran główny aplikacji
sidebar_position: 138
description: Test sprawdza, czy ekran główny aplikacji mobilnej zapewnia użytkownikowi dostęp do najważniejszych funkcji, umożliwia orientację w strukturze rozwiązania oraz pozwala rozpocząć realizację podstawowych zadań.
keywords: [aplikacja mobilna,ekran główny,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych,WCAG 2.4.2,]
tags: [aplikacja mobilna,ekran główny,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych,WCAG 2.4.2,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-138**

## 2. Nazwa testu

**Ekran główny aplikacji**

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy ekran główny aplikacji mobilnej zapewnia użytkownikowi dostęp do najważniejszych funkcji, umożliwia orientację w strukturze rozwiązania oraz pozwala rozpocząć realizację podstawowych zadań.

### Co oznacza „ekran główny aplikacji”?

Ekran główny aplikacji to pierwszy ekran prezentowany użytkownikowi po uruchomieniu aplikacji lub po zalogowaniu.

Może on zawierać między innymi:

- główne menu,
- skróty do najważniejszych funkcji,
- informacje o użytkowniku,
- wyszukiwarkę,
- komunikaty,
- listę najważniejszych działań lub usług.

### Dlaczego ekran główny jest ważny?

Ekran główny pełni rolę punktu startowego dla większości działań użytkownika.

Powinien umożliwiać:

- zrozumienie przeznaczenia aplikacji,
- orientację w dostępnych funkcjach,
- szybkie rozpoczęcie realizacji zadania,
- dostęp do najczęściej wykorzystywanych funkcji.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę wielu kryteriów sukcesu, w szczególności:

- 1.3.1 Informacje i relacje,
- 1.3.2 Znacząca kolejność,
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
- nawigacji,
- identyfikacji elementów interaktywnych,
- współpracy z technologiami wspomagającymi.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów startowych,
- pulpitów użytkownika,
- ekranów głównych po zalogowaniu,
- ekranów głównych usług mobilnych.

## 7. Oczekiwany wynik

Po uruchomieniu aplikacji użytkownik:

- rozumie przeznaczenie aplikacji,
- może zidentyfikować najważniejsze funkcje,
- może rozpocząć realizację podstawowych zadań,
- może korzystać z nawigacji,
- nie napotyka barier utrudniających orientację.

## 8. Dlaczego to jest ważne

Pierwsze sekundy korzystania z aplikacji mają kluczowe znaczenie dla orientacji użytkownika.

Jeżeli ekran główny jest nieczytelny lub chaotyczny:

- użytkownik może nie rozumieć działania aplikacji,
- odnalezienie funkcji może wymagać dodatkowego wysiłku,
- wykonanie zadania może być utrudnione,
- użytkownik może zrezygnować z dalszego korzystania z aplikacji.

Problem szczególnie dotyczy osób korzystających z technologii wspomagających oraz osób z niepełnosprawnościami poznawczymi.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack i VoiceOver,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- nowych użytkowników aplikacji,
- wszystkich użytkowników wykonujących zadanie po raz pierwszy.

## 10. Sposób testowania

### Krok 1. Uruchomienie aplikacji

Uruchom aplikację i przejdź do ekranu głównego.

### Krok 2. Ocena orientacji

Sprawdź, czy użytkownik może określić:

- przeznaczenie aplikacji,
- dostępne funkcje,
- sposób rozpoczęcia pracy.

### Krok 3. Ocena nawigacji

Sprawdź, czy:

- menu jest dostępne,
- najważniejsze funkcje są łatwe do odnalezienia,
- elementy nawigacyjne są jednoznacznie opisane.

### Krok 4. Ocena technologii wspomagających

Włącz TalkBack lub VoiceOver.

Sprawdź, czy:

- elementy są prawidłowo odczytywane,
- kolejność fokusu jest logiczna,
- użytkownik może odnaleźć najważniejsze funkcje.

### Krok 5. Ocena realizacji zadania

Spróbuj rozpocząć realizację jednego z głównych zadań aplikacji.

Sprawdź, czy można to zrobić bez dodatkowych wyjaśnień i bez napotykania barier.

## 11. Kryteria oceny wyniku

### Spełnione

Ekran główny zapewnia orientację, dostęp do najważniejszych funkcji oraz umożliwia rozpoczęcie realizacji podstawowych zadań.

### Częściowo spełnione

Większość funkcji jest dostępna, jednak występują problemy utrudniające orientację lub korzystanie z aplikacji.

### Niespełnione

Ekran główny nie zapewnia orientacji, dostęp do funkcji jest utrudniony lub użytkownik nie może skutecznie rozpocząć realizacji zadania.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna posiada ekran początkowy lub ekran główny.

## 12. Typowe niezgodności

- brak jednoznacznego określenia funkcji aplikacji,
- chaotyczny układ elementów,
- nieopisane przyciski,
- brak dostępu do głównych funkcji,
- nieczytelna nawigacja,
- błędna kolejność fokusu,
- brak dostępności dla TalkBack lub VoiceOver,
- ukrywanie istotnych funkcji bez wyraźnego wskazania.

## 13. Dobre praktyki

- prezentowanie najważniejszych funkcji na ekranie głównym,
- stosowanie jednoznacznych nazw i etykiet,
- zachowanie spójnej nawigacji,
- projektowanie z myślą o nowych użytkownikach,
- testowanie z TalkBack i VoiceOver,
- ograniczanie liczby elementów konkurujących o uwagę użytkownika.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę orientacji użytkownika oraz dostępności głównych funkcji aplikacji.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Ekran główny aplikacji nie zapewnia użytkownikowi wystarczającej orientacji w dostępnych funkcjach lub utrudnia rozpoczęcie realizacji podstawowych zadań. Część elementów jest niejednoznaczna, nieprawidłowo opisana lub trudno dostępna dla użytkowników technologii wspomagających.

## 17. Rekomendacje naprawcze

- uporządkować strukturę ekranu głównego,
- zapewnić dostęp do najważniejszych funkcji z poziomu ekranu głównego,
- poprawić opisy elementów interaktywnych,
- zweryfikować kolejność fokusu,
- przetestować ekran główny z TalkBack i VoiceOver,
- przeprowadzić ocenę z udziałem nowych użytkowników.

## 18. Powiązane testy

- testID-127 Strona główna
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-103 Komunikaty o stanie (aplikacja mobilna)
- testID-118 Rejestracja / Logowanie
- testID-115 Katalog usług
- testID-116 Karta usługi
