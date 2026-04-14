---
id: systemowe-rozwiazywanie-problemow-dostepnosci-cyfrowej
title: Systemowe rozwiązywanie problemów dostępności cyfrowej
description: Uzasadnienie
sidebar_label: Rozwiązywanie problemów
sidebar_position: 0
keywords: [rozwiązanie systemowe, cykl życia TIK]
tags: [rozwiązanie systemowe, cykl życia TIK]
opracowanie: Cezary Tomczyk
data_zgloszenia: 30 marca 2026
data_aktualizacji:  30 marca 2026
wersja_robocza: true
---

## Cel zalecenia

Wdrożenie systemowego podejścia do identyfikowania, naprawiania i zapobiegania problemom dostępności cyfrowej, niezależnie od jego źródła, w całym cyklu życia produktów i usług cyfrowych. Obejmuje to zarówno prace realizowane wewnętrznie, jak i zlecane podmiotom zewnętrznym.


## Zalecenie

Podmiot publiczny wdraża system zarządzania problemami dostępności cyfrowej, w którym każdy wykryty lub zgłoszony problem jest traktowany jako błąd jakości usługi i podlega obowiązkowej rejestracji, priorytetyzacji oraz naprawie w ramach standardowych procesów wytwarzania i utrzymania systemów informatycznych.

Podmiot zapewnia zdolność realizacji procesu naprawczego poprzez posiadanie własnych zasobów technicznych lub na podstawie umów z podmiotami zewnętrznymi (np. utrzymanie, rozwój, serwis). Umowy te powinny wprost obejmować obowiązek usuwania błędów dostępności cyfrowej.

## Rekomendacje

1. **Uruchamianie procesu naprawczego (kluczowa zmiana praktyki)**

   Każdy problem dostępności:

   - wykryty w wyniku monitoringu, testów lub audytu,
   - zgłoszony przez użytkownika lub pracownika,
   
   powinien skutkować uruchomieniem procesu naprawczego, bez konieczności dodatkowych decyzji uznaniowych.

   Uruchomienie procesu powinno następować automatycznie poprzez rejestrację zgłoszenia w systemie obsługi zgłoszeń lub backlogu, bez konieczności odrębnej decyzji kierowniczej.

2. **Integracja z procesami IT**\
   Błędy dostępności:
   - trafiają do backlogu / systemu zgłoszeń,
   - są traktowane jak inne błędy systemu.\
   Nie tworzy się osobnych „ścieżek dostępności”.\
   Błędy dostępności powinny być uwzględniane w definicji „gotowości”  oraz w kryteriach odbioru prac.
3. **Priorytety i czasy naprawy (SLA)**\
   Wprowadzić klasyfikację błędów:
   - krytyczne (blokują usługę),
   - istotne,
   - pozostałe.\
   Określić maksymalne czasy naprawy.\
   Priorytety powinny uwzględniać wpływ problemu na możliwość realizacji usługi przez użytkownika, a nie wyłącznie jego złożoność techniczną.
4. **Źródła identyfikacji problemów**\
   Proces obejmuje:
   - monitoring automatyczny,
   - testy manualne,
   - przeglądy,
   - zgłoszenia użytkowników,
   - dane z deklaracji dostępności.\
   Źródła te powinny być traktowane łącznie jako jeden system informacji o stanie dostępności.
5. **Powiązanie z deklaracją dostępności**\
   Problemy wskazane w deklaracji:
   - muszą być objęte planem naprawczym,
   - nie mogą pozostawać trwałym stanem.\
   Deklaracja dostępności nie może stanowić wyłącznie opisu stanu istniejącego, lecz powinna odzwierciedlać rzeczywisty postęp w usuwaniu problemów.
6. **Weryfikacja zmian (regresja)**\
   Każda zmiana systemu:
   - musi obejmować test dostępności,
   - zapobiegać regresji.\
   Weryfikacja powinna być proporcjonalna do zakresu zmiany, jednak obowiązkowa w przypadku zmian wpływających na funkcjonalności użytkowe.
7. **Zamówienia publiczne**\
   Umowy:
   - muszą obejmować obowiązek naprawy błędów dostępności,
   - definiować odpowiedzialność wykonawcy.\
   Wymagania dostępności oraz obowiązek usuwania błędów powinny być elementem umowy, a nie wyłącznie opisu przedmiotu zamówienia.
8. **Monitoring skuteczności**\
   Mierzyć:
   - liczbę zgłoszeń,
   - czas naprawy,
   - powtarzalność błędów.\
   Dane te powinny być wykorzystywane do podejmowania decyzji zarządczych oraz planowania działań usprawniających.

9. **Zapewnienie zdolności naprawczej (kluczowy warunek skuteczności)**\
   Podmiot publiczny zapewnia rzeczywistą zdolność do usuwania problemów dostępności poprzez:
   - utrzymywanie wewnętrznego zespołu deweloperskiego lub
   - zawarcie umów z podmiotami zewnętrznymi (np. utrzymanie, rozwój, serwis), obejmujących obowiązek realizacji napraw.\
   Umowy z wykonawcami powinny w szczególności:
   - obejmować naprawę błędów dostępności jako standardowy zakres usług,
   - określać czasy reakcji i naprawy (SLA),
   - przewidywać odpowiedzialność za brak usunięcia błędów,
   - umożliwiać zlecanie napraw niezależnie od cyklu dużych wdrożeń.\
   Brak zapewnienia zdolności naprawczej powoduje, że:
   - proces zarządzania dostępnością ma charakter pozorny,
   - organizacja nie jest w stanie realizować obowiązków wynikających z przepisów prawa.\
   Zdolność ta powinna mieć charakter ciągły, a nie incydentalny (np. jednorazowe zlecenia napraw).

## Uzasadnienie

Dostępność cyfrowa jest procesem ciągłym, zależnym od zmian w systemach informatycznych, treściach i usługach publicznych. W praktyce funkcjonowania wielu podmiotów publicznych wiedza o problemach dostępności – wynikająca z monitoringu, testów, audytów czy deklaracji dostępności – nie przekłada się jednak na systematyczne działania naprawcze. Problemy są identyfikowane i opisywane, lecz nie uruchamiają obowiązkowych procesów ich usuwania, co prowadzi do utrwalania niezgodności i narastania długu dostępnościowego.

Brak dostępności kluczowych funkcji (np. formularzy, logowania, procesów wnioskowych) może uniemożliwiać korzystanie z usług publicznych, co oznacza zarówno ryzyko naruszenia prawa, jak i realne wykluczenie części użytkowników.

Niniejsze zalecenie wprowadza mechanizm, w którym każde wykrycie lub zgłoszenie problemu stanowi jednoznaczny impuls do działania – uruchamiając proces naprawczy realizowany w ramach standardowych procesów wytwarzania i utrzymania systemów. Dzięki temu dostępność przestaje być wyłącznie przedmiotem diagnozy, a staje się elementem bieżącego zarządzania jakością usług cyfrowych.

## 4. Podstawy prawne

- Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych (Dz.U. 2019 poz. 848 z późn. zm.).



## Źródła

- Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych wraz z aktami wykonawczymi.
- Ustawa o zapewnianiu dostępności osobom ze szczególnymi potrzebami.
- [W3C Accessibility Guidelines Evaluation Methodology (WCAG-EM) 2.0](https://www.w3.org/TR/wcag-em-2/)

## Załączniki

1. [Organizacja i zadania zespołu odpowiedzialnego za naprawę problemów dostępności cyfrowej](organizacja-i-zadania-zespolu-naprawczego.md)
2. [Wzorcowe zapisy dotyczące w umowie serwisowej](zapisy-w-umowie-serwisowej.md)
3. [Zapisy dotyczące dostępności cyfrowej w umowie serwisowej (wariant dla małych jednostek)](zapisy-w-umowie-serwisowej-male-jst.md)