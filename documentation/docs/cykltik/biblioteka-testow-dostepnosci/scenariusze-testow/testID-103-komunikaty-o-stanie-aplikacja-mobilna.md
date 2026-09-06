---
id: test-komunikaty-o-stanie-aplikacja-mobilna
title: Komunikaty o stanie (aplikacja mobilna)
sidebar_label: Komunikaty o stanie (aplikacja mobilna)
sidebar_position: 103
description: Scenariusz testu sprawdzającego, czy komunikaty o stanie pojawiające się w aplikacji mobilnej są przekazywane użytkownikom, w tym użytkownikom technologii wspomagających, bez konieczności przenoszenia fokusu.
keywords: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil wstępny,komunikaty o stanie (aplikacja mobilna),kryterium sukcesu]
tags: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil wstępny,komunikaty o stanie (aplikacja mobilna),kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-103**

## 2. Nazwa testu

**Komunikaty o stanie (aplikacja mobilna)**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

## 4. Opis testu

Test sprawdza, czy komunikaty o stanie pojawiające się w aplikacji mobilnej są przekazywane wszystkim użytkownikom, w tym użytkownikom technologii wspomagających, bez konieczności przenoszenia fokusu oraz czy informują o zmianach mających znaczenie dla wykonania zadania.

### Co oznacza „komunikat o stanie”?

Komunikat o stanie to informacja przekazywana użytkownikowi o zmianie stanu aplikacji, wyniku wykonanej operacji lub wystąpieniu zdarzenia wymagającego uwagi użytkownika.

Przykładami komunikatów o stanie są:

- informacja o zapisaniu danych,
- komunikat o błędzie,
- potwierdzenie wysłania formularza,
- informacja o liczbie wyników wyszukiwania,
- komunikat o utracie połączenia,
- ostrzeżenie o wygasającej sesji.

Komunikat o stanie powinien zostać przekazany użytkownikowi bez konieczności ręcznego wyszukiwania tej informacji.

### Co oznacza „bez konieczności przenoszenia fokusu”?

Pojawienie się komunikatu nie powinno powodować nieoczekiwanej zmiany miejsca pracy użytkownika.

Użytkownik powinien otrzymać informację o komunikacie bez utraty orientacji w wykonywanym zadaniu.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 4.1.3 Komunikaty o stanie

### EN 301 549

- 11.4.1.3 Status Messages

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy,
- wyszukiwarek,
- procesów logowania,
- procesów rejestracji,
- operacji zapisu danych,
- operacji usuwania danych,
- zakupów i płatności,
- aktualizacji treści bez przeładowania ekranu,
- komunikatów systemowych,
- wszystkich funkcji generujących komunikaty o stanie.

## 7. Oczekiwany wynik

Wszystkie istotne komunikaty o stanie:

- są przekazywane użytkownikowi,
- są dostępne dla TalkBack i VoiceOver,
- są odczytywane automatycznie,
- są zrozumiałe,
- nie powodują nieoczekiwanej utraty fokusu,
- pozwalają użytkownikowi zrozumieć rezultat wykonanej operacji.

## 8. Dlaczego to jest ważne

Użytkownik powinien wiedzieć:

- czy operacja zakończyła się sukcesem,
- czy wystąpił błąd,
- czy dane zostały zapisane,
- czy proces nadal trwa,
- czy wymagane jest podjęcie dodatkowego działania.

Użytkownicy widzący często zauważają komunikaty automatycznie.

Osoby korzystające z:

- TalkBack,
- VoiceOver,
- monitorów brajlowskich,
- innych technologii wspomagających,

mogą nie otrzymać tych informacji, jeżeli komunikaty nie zostały prawidłowo udostępnione.

Brak komunikatów o stanie może uniemożliwiać samodzielne wykonanie zadania.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników czytników ekranu,
- użytkowników monitorów brajlowskich,
- osób z niepełnosprawnościami poznawczymi,
- osób korzystających z technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Uruchomienie technologii wspomagającej

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS).

### Krok 2. Wywołanie komunikatów

Wykonaj działania powodujące pojawienie się komunikatów o stanie.

Przykładowo:

- wysłanie formularza,
- zapisanie danych,
- błędne wypełnienie pola,
- wyszukiwanie informacji,
- usunięcie elementu,
- wykonanie operacji wymagającej potwierdzenia.

### Krok 3. Ocena odczytu komunikatu

Sprawdź, czy:

- komunikat jest odczytywany automatycznie,
- użytkownik nie musi wyszukiwać komunikatu ręcznie,
- komunikat jest zrozumiały,
- komunikat pojawia się we właściwym momencie.

### Krok 4. Ocena wpływu na fokus

Sprawdź, czy:

- komunikat nie powoduje nieoczekiwanej zmiany fokusu,
- użytkownik nie traci orientacji w interfejsie,
- po odczytaniu komunikatu może kontynuować wykonywane zadanie.

### Krok 5. Ocena różnych typów komunikatów

Sprawdź komunikaty:

- sukcesu,
- błędów,
- ostrzeżeń,
- informacji,
- komunikaty dotyczące postępu operacji.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie istotne komunikaty o stanie są przekazywane użytkownikom technologii wspomagających automatycznie, w sposób zrozumiały i bez utraty orientacji.

### Częściowo spełnione

Większość komunikatów działa poprawnie, jednak część nie jest przekazywana lub przekazywana jest nieprawidłowo.

### Niespełnione

Istotne komunikaty o stanie nie są przekazywane użytkownikom technologii wspomagających lub nie pozwalają zrozumieć rezultatu operacji.

### Nie dotyczy

W ocenianym zakresie nie występują komunikaty o stanie.

## 12. Typowe niezgodności

- komunikat widoczny wyłącznie wizualnie,
- brak odczytu komunikatu przez TalkBack,
- brak odczytu komunikatu przez VoiceOver,
- komunikat pojawia się i znika przed odczytaniem,
- użytkownik nie otrzymuje informacji o powodzeniu operacji,
- użytkownik nie otrzymuje informacji o błędach,
- komunikat nie jest powiązany z wykonywaną operacją,
- komunikat powoduje nieoczekiwaną zmianę fokusu.

## 13. Dobre praktyki

- wykorzystywanie natywnych mechanizmów dostępności systemu,
- automatyczne ogłaszanie zmian stanu,
- stosowanie krótkich i jednoznacznych komunikatów,
- przekazywanie informacji zarówno o sukcesie, jak i błędach,
- testowanie komunikatów z TalkBack i VoiceOver,
- projektowanie komunikatów z perspektywy użytkownika wykonującego zadanie.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę działania komunikatów o stanie oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Aplikacja nie przekazuje wszystkich istotnych komunikatów o stanie użytkownikom technologii wspomagających. Część komunikatów nie jest odczytywana automatycznie przez TalkBack lub VoiceOver albo nie pozwala użytkownikowi zrozumieć rezultatu wykonanej operacji. Problem może utrudniać lub uniemożliwiać samodzielne wykonanie zadania.

## 17. Rekomendacje naprawcze

- zapewnić automatyczne przekazywanie komunikatów o stanie technologiom wspomagającym,
- wykorzystać natywne mechanizmy dostępności systemu,
- poprawić treść komunikatów tak, aby były jednoznaczne i zrozumiałe,
- zapewnić przekazywanie informacji o sukcesach, błędach i ostrzeżeniach,
- testować komunikaty z TalkBack i VoiceOver,
- zweryfikować wszystkie kluczowe procesy użytkownika pod kątem dostępności komunikatów.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)
- testID-044 Identyfikacja błędów
- testID-043 Sugestie korekty błędów
- testID-120 Formularz
- testID-069 Komunikaty o stanie (WWW)
