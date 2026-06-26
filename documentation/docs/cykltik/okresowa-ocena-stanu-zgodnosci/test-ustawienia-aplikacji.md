---
id: test-ustawienia-aplikacji
title: Karta testu - Ustawienia aplikacji
sidebar_label: Ustawienia aplikacji
sidebar_position: 141
description: Test sprawdza, czy ekran ustawień aplikacji jest dostępny, zrozumiały oraz umożliwia użytkownikowi przeglądanie i modyfikowanie ustawień bez napotykania barier.
keywords: [aplikacja mobilna,ustawienia aplikacji,konfiguracja aplikacji,preferencje użytkownika,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
tags: [aplikacja mobilna,ustawienia aplikacji,konfiguracja aplikacji,preferencje użytkownika,dostępność aplikacji mobilnych,TalkBack,VoiceOver,nawigacja,WCAG,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-141**

## 2. Nazwa testu

**Ustawienia aplikacji**

## 3. Profil stosowania testu

- profil minimalny: **nie**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

## 4. Opis testu

Test sprawdza, czy ekran ustawień aplikacji jest dostępny, zrozumiały oraz umożliwia użytkownikowi przeglądanie i modyfikowanie ustawień bez napotykania barier.

### Co oznacza „ekran ustawień aplikacji”?

Ekran ustawień aplikacji to miejsce, w którym użytkownik może zarządzać sposobem działania aplikacji.

Może obejmować między innymi:

- ustawienia konta,
- ustawienia języka,
- ustawienia powiadomień,
- ustawienia prywatności,
- ustawienia bezpieczeństwa,
- ustawienia dostępności,
- preferencje prezentacji treści,
- informacje o aplikacji.

### Dlaczego ekran ustawień jest ważny?

Ustawienia pozwalają użytkownikowi dostosować aplikację do własnych potrzeb.

Jeżeli ekran ustawień jest niedostępny, użytkownik może nie mieć możliwości:

- zmiany języka,
- zarządzania powiadomieniami,
- dostosowania sposobu działania aplikacji,
- skonfigurowania funkcji wspierających dostępność.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

Test wspiera ocenę w szczególności:

- 1.3.1 Informacje i relacje,
- 1.3.2 Znacząca kolejność,
- 2.4.3 Kolejność fokusu,
- 2.4.4 Cel łącza,
- 2.4.6 Nagłówki i etykiety,
- 2.4.7 Widoczny fokus,
- 2.5.3 Etykieta w nazwie,
- 3.2.3 Spójna nawigacja,
- 3.3.2 Etykiety lub instrukcje,
- 4.1.2 Nazwa, rola, wartość,
- 4.1.3 Komunikaty o stanie.

### EN 301 549

W szczególności wymagania dotyczące:

- nawigacji,
- formularzy,
- elementów interaktywnych,
- komunikatów o stanie,
- współpracy z technologiami wspomagającymi.

## 6. Zastosowanie do treści

Test stosuje się do:

- ekranów ustawień,
- ustawień konta,
- ustawień bezpieczeństwa,
- ustawień prywatności,
- ustawień powiadomień,
- ustawień językowych,
- ustawień dostępności,
- ekranów preferencji użytkownika.

## 7. Oczekiwany wynik

Użytkownik może:

- odnaleźć ustawienia,
- zrozumieć ich przeznaczenie,
- zmienić ustawienia,
- zapisać zmiany,
- zweryfikować rezultat wykonanej operacji,
- korzystać z ekranu ustawień przy użyciu technologii wspomagających.

## 8. Dlaczego to jest ważne

Ekran ustawień umożliwia użytkownikowi dostosowanie aplikacji do własnych potrzeb.

Problemy występujące w tym obszarze mogą uniemożliwiać:

- zmianę preferencji,
- konfigurację powiadomień,
- zmianę języka,
- zarządzanie prywatnością,
- korzystanie z funkcji wspierających dostępność.

Szczególnie niekorzystna jest sytuacja, gdy ustawienia dostępności są mniej dostępne niż pozostałe funkcje aplikacji.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- osób z niepełnosprawnościami poznawczymi,
- osób starszych,
- użytkowników dostosowujących aplikację do własnych potrzeb.

## 10. Sposób testowania

### Krok 1. Otwórz ekran ustawień

Przejdź do ustawień aplikacji.

### Krok 2. Oceń organizację ustawień

Sprawdź, czy:

- ustawienia są logicznie pogrupowane,
- nazwy sekcji są zrozumiałe,
- użytkownik może odnaleźć potrzebne opcje.

### Krok 3. Oceń elementy interaktywne

Sprawdź, czy:

- przełączniki,
- pola wyboru,
- listy rozwijane,
- przyciski,

są poprawnie opisane i możliwe do obsługi.

### Krok 4. Oceń zmianę ustawień

Zmodyfikuj wybrane ustawienia.

Sprawdź, czy:

- zmiana zostaje zapisana,
- użytkownik otrzymuje informację o rezultacie operacji,
- ustawienie zachowuje nową wartość po ponownym otwarciu ekranu.

### Krok 5. Oceń dostępność technologii wspomagających

Włącz TalkBack lub VoiceOver.

Sprawdź, czy:

- wszystkie ustawienia są odczytywane,
- stany przełączników są prawidłowo komunikowane,
- kolejność fokusu jest logiczna.

### Krok 6. Oceń ustawienia wpływające na dostępność

Jeżeli aplikacja zawiera własne ustawienia dostępności, sprawdź, czy można je:

- odnaleźć,
- zrozumieć,
- aktywować,
- dezaktywować.

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może odnaleźć, zrozumieć i zmieniać ustawienia aplikacji bez napotykania istotnych barier.

### Częściowo spełnione

Większość ustawień jest dostępna, jednak występują pojedyncze problemy utrudniające korzystanie z ekranu ustawień.

### Niespełnione

Użytkownik nie może skutecznie odnaleźć, zrozumieć lub zmienić części ustawień.

### Nie dotyczy

Aplikacja nie udostępnia własnego ekranu ustawień.

## 12. Typowe niezgodności

- nieopisane przełączniki,
- brak informacji o stanie przełącznika,
- niejednoznaczne nazwy ustawień,
- błędna kolejność fokusu,
- ustawienia niedostępne dla TalkBack lub VoiceOver,
- brak informacji o zapisaniu zmian,
- trudności z odnalezieniem istotnych ustawień,
- ustawienia dostępności ukryte lub nieczytelnie opisane.

## 13. Dobre praktyki

- logiczne grupowanie ustawień,
- stosowanie jednoznacznych nazw,
- informowanie o rezultacie zmian,
- zapewnianie dostępu do ustawień dostępności,
- prezentowanie aktualnego stanu ustawień,
- testowanie z TalkBack i VoiceOver.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę dostępności ustawień oraz wskazanie zidentyfikowanych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Ekran ustawień aplikacji nie zapewnia pełnej dostępności wszystkich opcji konfiguracyjnych. Część ustawień jest nieprawidłowo opisana, niedostępna dla technologii wspomagających lub nie informuje użytkownika o rezultacie wprowadzonych zmian, co utrudnia samodzielną konfigurację aplikacji.

## 17. Rekomendacje naprawcze

- poprawić etykiety i opisy ustawień,
- zapewnić prawidłową komunikację stanów przełączników,
- uporządkować strukturę ekranu ustawień,
- zapewnić zgodność z TalkBack i VoiceOver,
- informować użytkownika o zapisaniu zmian,
- przeprowadzić testy ustawień z udziałem użytkowników technologii wspomagających.

## 18. Powiązane testy

- testID-138 Ekran główny aplikacji
- testID-139 Lista funkcji aplikacji
- testID-140 Widok szczegółów
- testID-142 Powiadomienia aplikacji
- testID-143 Nazwa ekranu aplikacji
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-103 Komunikaty o stanie (aplikacja mobilna)
- testID-102 Ustawienia dostępności systemu (aplikacja mobilna)
- testID-137 Język rozwiązania
