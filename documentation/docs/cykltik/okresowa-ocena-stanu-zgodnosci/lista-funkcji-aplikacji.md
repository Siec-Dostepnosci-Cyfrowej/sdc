---
id: lista-funkcji-aplikacji
title: Lista funkcji aplikacji
sidebar_label: Lista funkcji aplikacji
sidebar_position: 139
description: Test sprawdza, ekran prezentujący listę funkcji aplikacji umożliwia użytkownikowi identyfikację dostępnych funkcji, zrozumienie ich przeznaczenia oraz rozpoczęcie realizacji wybranego zadania.
keywords: [aplikacja mobilna,lista funkcji,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych]
tags: [aplikacja mobilna,lista funkcji,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-139**

## 2. Nazwa testu

**Lista funkcji aplikacji**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy ekran prezentujący listę funkcji aplikacji umożliwia użytkownikowi identyfikację dostępnych funkcji, zrozumienie ich przeznaczenia oraz rozpoczęcie realizacji wybranego zadania.

### Co oznacza „lista funkcji aplikacji”?

Lista funkcji aplikacji to ekran prezentujący użytkownikowi dostępne działania, moduły lub usługi.

Może występować jako:

- menu główne,
- lista usług,
- ekran wyboru funkcji,
- pulpit użytkownika,
- katalog modułów,
- ekran skrótów do najważniejszych operacji.

### Jaki jest cel takiego ekranu?

Ekran powinien umożliwiać użytkownikowi:

- odnalezienie potrzebnej funkcji,
- zrozumienie jej przeznaczenia,
- rozpoczęcie wykonywania zadania.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę w szczególności:

- 1.3.1 Informacje i relacje,
- 1.3.2 Znacząca kolejność,
- 2.4.3 Kolejność fokusu,
- 2.4.4 Cel łącza,
- 2.4.6 Nagłówki i etykiety,
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

- menu głównych,
- katalogów usług,
- ekranów funkcji,
- pulpitów użytkownika,
- ekranów skrótów,
- list modułów,
- ekranów startowych po zalogowaniu.

## 7. Oczekiwany wynik

Użytkownik może:

- zidentyfikować dostępne funkcje,
- zrozumieć ich przeznaczenie,
- odróżnić funkcje od siebie,
- uruchomić wybraną funkcję,
- odnaleźć potrzebne działanie bez zgadywania.

## 8. Dlaczego to jest ważne

Lista funkcji jest często głównym mechanizmem nawigacji w aplikacji.

Jeżeli funkcje:

- są niejednoznacznie opisane,
- mają nieczytelne etykiety,
- są trudne do odnalezienia,
- są źle uporządkowane,

użytkownik może mieć trudności z rozpoczęciem realizacji zadania.

Problem szczególnie wpływa na osoby korzystające z technologii wspomagających oraz osoby o mniejszym doświadczeniu cyfrowym.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- nowych użytkowników aplikacji.

## 10. Sposób testowania

### Krok 1. Otwórz listę funkcji

Przejdź do ekranu prezentującego dostępne funkcje aplikacji.

### Krok 2. Oceń nazwy funkcji

Sprawdź, czy:

- nazwy są jednoznaczne,
- nazwy opisują rzeczywiste działanie,
- użytkownik może przewidzieć rezultat aktywacji funkcji.

### Krok 3. Oceń organizację listy

Sprawdź, czy:

- funkcje są logicznie pogrupowane,
- kolejność funkcji jest zrozumiała,
- użytkownik może łatwo odnaleźć potrzebną funkcję.

### Krok 4. Oceń dostępność technologii wspomagających

Włącz TalkBack lub VoiceOver.

Sprawdź, czy:

- wszystkie funkcje są odczytywane,
- etykiety są zrozumiałe,
- kolejność fokusu jest logiczna.

### Krok 5. Wykonaj zadania

Spróbuj uruchomić kilka różnych funkcji i oceń, czy użytkownik może łatwo rozpocząć realizację zadania.

## 11. Kryteria oceny wyniku

### Spełnione

Lista funkcji umożliwia identyfikację, odnalezienie i uruchomienie wszystkich dostępnych funkcji.

### Częściowo spełnione

Większość funkcji jest dostępna i zrozumiała, jednak występują pojedyncze problemy z nawigacją lub opisami.

### Niespełnione

Użytkownik nie może skutecznie zidentyfikować funkcji, odnaleźć potrzebnej funkcji lub uruchomić wybranego działania.

### Nie dotyczy

Aplikacja nie zawiera ekranu prezentującego listę funkcji.

## 12. Typowe niezgodności

- niejednoznaczne nazwy funkcji,
- funkcje oznaczone wyłącznie ikonami,
- brak dostępnych nazw elementów,
- nieczytelna organizacja listy,
- brak logicznego grupowania,
- błędna kolejność fokusu,
- funkcje niedostępne dla TalkBack lub VoiceOver,
- trudności w odnalezieniu często używanych funkcji.

## 13. Dobre praktyki

- stosowanie jednoznacznych nazw funkcji,
- grupowanie powiązanych funkcji,
- prezentowanie najczęściej używanych funkcji w pierwszej kolejności,
- stosowanie opisów pomocniczych,
- zapewnienie zgodności z TalkBack i VoiceOver,
- testowanie z udziałem użytkowników.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę organizacji listy funkcji oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Lista funkcji aplikacji nie zapewnia użytkownikowi możliwości łatwego zidentyfikowania lub odnalezienia dostępnych funkcji. Część elementów posiada niejednoznaczne nazwy, jest nieprawidłowo opisana lub niedostępna dla technologii wspomagających, co utrudnia rozpoczęcie realizacji zadania.

## 17. Rekomendacje naprawcze

- ujednoznacznić nazwy funkcji,
- poprawić etykiety elementów interaktywnych,
- uporządkować strukturę listy,
- pogrupować funkcje według przeznaczenia,
- poprawić obsługę technologii wspomagających,
- przeprowadzić testy z użytkownikami reprezentującymi różne grupy odbiorców.

## 18. Powiązane testy

- testID-138 Ekran główny aplikacji
- testID-115 Katalog usług
- testID-116 Karta usługi
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-103 Komunikaty o stanie (aplikacja mobilna)
