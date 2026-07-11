---
id: test-nazwa-ekranu-aplikacji
title: Karta testu - Nazwa ekranu aplikacji
sidebar_label: Nazwa ekranu aplikacji
sidebar_position: 143
description: Test sprawdza, czy ekrany aplikacji mobilnej posiadają jednoznaczne nazwy pozwalające użytkownikowi zidentyfikować aktualny kontekst, orientować się w strukturze aplikacji oraz korzystać z niej przy użyciu technologii wspomagających.
keywords: [aplikacja mobilna,nazwa ekranu,tytuł ekranu,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych,WCAG 2.4.2,]
tags: [aplikacja mobilna,nazwa ekranu,tytuł ekranu,orientacja użytkownika,TalkBack,VoiceOver,dostępność aplikacji mobilnych,WCAG 2.4.2,]
opracowanie: Stefan Wajda
data_zgloszenia: 15 czerwca 2026 r.
ostatnia_aktualizacja: 15 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-143**

## 2. Nazwa testu

**Nazwa ekranu aplikacji**

# 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**


## 4. Opis testu

Test sprawdza, czy ekrany aplikacji mobilnej posiadają jednoznaczne nazwy umożliwiające użytkownikowi rozpoznanie aktualnego miejsca w aplikacji, zrozumienie kontekstu wykonywanego zadania oraz orientację podczas nawigacji.

### Co oznacza „nazwa ekranu”?

Nazwa ekranu to informacja identyfikująca aktualnie wyświetlany ekran aplikacji.

Przykładami nazw ekranów są:

- Strona główna,
- Logowanie,
- Moje sprawy,
- Szczegóły usługi,
- Ustawienia,
- Wyniki wyszukiwania,
- Formularz zgłoszenia.

Nazwa ekranu może być prezentowana wizualnie jako nagłówek lub być dostępna dla technologii wspomagających.

### Dlaczego nazwa ekranu jest ważna?

Podczas korzystania z aplikacji użytkownik wielokrotnie przechodzi pomiędzy ekranami.

Nazwa ekranu pozwala użytkownikowi:

- zorientować się, gdzie się znajduje,
- potwierdzić wykonanie przejścia do nowego widoku,
- rozumieć strukturę aplikacji,
- uniknąć utraty orientacji podczas realizacji zadania.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 2.4.2 Tytuł strony
- 2.4.6 Nagłówki i etykiety
- 3.2.3 Spójna nawigacja

### EN 301 549

- 11.2.4.2 Page Titled
- 11.2.4.6 Headings and Labels
- 11.3.2.3 Consistent Navigation

## 6. Zastosowanie do treści

Test stosuje się do:

- ekranów głównych,
- ekranów logowania,
- ekranów rejestracji,
- ekranów wyszukiwania,
- ekranów ustawień,
- ekranów formularzy,
- ekranów szczegółów,
- ekranów usług,
- ekranów administracyjnych,
- wszystkich ekranów aplikacji mobilnej stanowiących odrębne widoki.

## 7. Oczekiwany wynik

Każdy ekran:

- posiada jednoznaczną nazwę,
- umożliwia identyfikację aktualnego kontekstu,
- pozwala użytkownikowi zrozumieć przeznaczenie ekranu,
- jest prawidłowo identyfikowany przez technologie wspomagające.

## 8. Dlaczego to jest ważne

Użytkownicy korzystający z aplikacji mobilnych często przemieszczają się pomiędzy wieloma ekranami.

Brak nazwy ekranu może powodować:

- utratę orientacji,
- trudności w zrozumieniu struktury aplikacji,
- problemy z realizacją zadania,
- konieczność wielokrotnego sprawdzania zawartości ekranu.

Problem szczególnie dotyczy użytkowników korzystających z czytników ekranu, którzy nie mogą szybko ocenić zawartości ekranu na podstawie układu wizualnego.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- użytkowników TalkBack,
- użytkowników VoiceOver,
- użytkowników monitorów brajlowskich,
- osób z niepełnosprawnościami poznawczymi,
- nowych użytkowników aplikacji.

## 10. Sposób testowania

### Krok 1. Otwórz ekran

Przejdź do ocenianego ekranu aplikacji.

### Krok 2. Oceń nazwę wizualną

Sprawdź, czy ekran posiada widoczną nazwę lub nagłówek identyfikujący jego przeznaczenie.

### Krok 3. Oceń jednoznaczność nazwy

Sprawdź, czy nazwa:

- opisuje funkcję ekranu,
- pozwala odróżnić ekran od innych ekranów,
- jest zrozumiała dla użytkownika.

### Krok 4. Oceń działanie z czytnikiem ekranu

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS).

Sprawdź, czy użytkownik otrzymuje informację umożliwiającą identyfikację aktualnego ekranu.

### Krok 5. Oceń przejścia pomiędzy ekranami

Przejdź pomiędzy różnymi ekranami aplikacji.

Sprawdź, czy użytkownik może rozpoznać zmianę kontekstu i ustalić, gdzie aktualnie się znajduje.

## 11. Kryteria oceny wyniku

### Spełnione

Wszystkie oceniane ekrany posiadają jednoznaczne nazwy pozwalające określić ich przeznaczenie i kontekst.

### Częściowo spełnione

Większość ekranów posiada poprawne nazwy, jednak część ekranów jest oznaczona niejednoznacznie lub niespójnie.

### Niespełnione

Nazwy ekranów są nieobecne, niejednoznaczne lub nie pozwalają użytkownikowi ustalić aktualnego kontekstu.

### Nie dotyczy

Nie stosuje się.

Każdy ekran aplikacji mobilnej może zostać oceniony pod kątem nazwy.

## 12. Typowe niezgodności

- brak nazwy ekranu,
- kilka różnych ekranów posiadających identyczną nazwę,
- nazwa nieodpowiadająca zawartości ekranu,
- nazwy techniczne niezrozumiałe dla użytkownika,
- brak możliwości identyfikacji ekranu przez czytnik ekranu,
- nieczytelne lub ukryte nagłówki ekranów,
- niespójne nazewnictwo pomiędzy ekranami.

## 13. Dobre praktyki

- nadawanie każdemu ekranowi jednoznacznej nazwy,
- stosowanie nazw opisujących funkcję ekranu,
- zachowanie spójnego nazewnictwa w całej aplikacji,
- prezentowanie nazwy jako głównego nagłówka ekranu,
- testowanie aplikacji z TalkBack i VoiceOver,
- projektowanie nazw z perspektywy użytkownika, a nie struktury technicznej aplikacji.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę nazw ekranów oraz wskazanie zidentyfikowanych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W aplikacji występują ekrany, których nazwy są nieobecne, niejednoznaczne lub nie pozwalają użytkownikowi określić aktualnego kontekstu. Problem może utrudniać orientację w strukturze aplikacji oraz realizację zadań, szczególnie użytkownikom technologii wspomagających.

## 17. Rekomendacje naprawcze

- nadać wszystkim ekranom jednoznaczne nazwy,
- zapewnić zgodność nazwy z funkcją i zawartością ekranu,
- ujednolicić nazewnictwo w całej aplikacji,
- zapewnić poprawną identyfikację ekranów przez technologie wspomagające,
- przeprowadzić testy z TalkBack i VoiceOver,
- uwzględnić kontrolę nazw ekranów w procesie projektowania i testowania aplikacji.

## 18. Powiązane testy

- testID-137 Język rozwiązania
- testID-138 Ekran główny aplikacji
- testID-139 Lista funkcji aplikacji
- testID-140 Widok szczegółów
- testID-141 Ustawienia aplikacji
- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-098 Kolejność fokusu (aplikacja mobilna)
- testID-099 Etykiety elementów interaktywnych (aplikacja mobilna)